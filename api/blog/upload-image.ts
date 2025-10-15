import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withAuth, type AuthenticatedRequest } from '../middleware/auth';

interface ImageUploadRequest {
  image: string; // Base64 encoded image
  alt?: string;
  filename?: string;
}

interface GitHubUploadResponse {
  content: {
    download_url: string;
    sha: string;
  };
}

async function uploadImageToGitHub(
  filename: string,
  base64Content: string,
  alt?: string
): Promise<string> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) {
    throw new Error('Variables de entorno de GitHub no configuradas');
  }

  const filePath = `public/blog-images/${filename}`;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  // Verificar si el archivo ya existe
  let existingSha: string | undefined;
  try {
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (getResponse.ok) {
      const existingFile = await getResponse.json();
      existingSha = existingFile.sha;
    }
  } catch (error) {
    // El archivo no existe, continuamos sin SHA
  }

  const commitMessage = existingSha 
    ? `Actualizar imagen: ${filename}`
    : `Subir nueva imagen: ${filename}${alt ? ` (${alt})` : ''}`;

  const body: any = {
    message: commitMessage,
    content: base64Content,
    branch,
  };

  if (existingSha) {
    body.sha = existingSha;
  }

  const response = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Error subiendo imagen a GitHub: ${response.status} - ${errorData}`);
  }

  const result: GitHubUploadResponse = await response.json();
  
  // Construir la URL pública de la imagen
  const publicUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/public/blog-images/${filename}`;
  
  return publicUrl;
}

function validateImageFormat(base64String: string): { isValid: boolean; mimeType?: string; extension?: string } {
  // Verificar que sea un string base64 válido con header de imagen
  const base64Regex = /^data:image\/(jpeg|jpg|png|webp|gif);base64,/;
  const match = base64String.match(base64Regex);
  
  if (!match) {
    return { isValid: false };
  }

  const mimeType = `image/${match[1]}`;
  const extension = match[1] === 'jpeg' ? 'jpg' : match[1];

  return { isValid: true, mimeType, extension };
}

function generateFilename(originalName?: string, extension?: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  
  if (originalName) {
    // Limpiar el nombre original
    const cleanName = originalName
      .replace(/\.[^/.]+$/, '') // Remover extensión
      .replace(/[^a-zA-Z0-9-_]/g, '-') // Reemplazar caracteres especiales
      .toLowerCase()
      .substring(0, 30); // Limitar longitud
    
    return `${timestamp}-${cleanName}.${extension}`;
  }
  
  return `blog-image-${timestamp}-${random}.${extension}`;
}

async function handler(req: AuthenticatedRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { image, alt, filename }: ImageUploadRequest = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: 'Imagen es requerida (formato base64)'
      });
    }

    // Validar formato de imagen
    const validation = validateImageFormat(image);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Formato de imagen inválido. Formatos soportados: JPEG, PNG, WebP, GIF'
      });
    }

    // Extraer el contenido base64 sin el header
    const base64Content = image.split(',')[1];
    
    // Verificar tamaño de la imagen (máximo 5MB)
    const sizeInBytes = (base64Content.length * 3) / 4;
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    
    if (sizeInBytes > maxSizeInBytes) {
      return res.status(400).json({
        success: false,
        message: 'La imagen es demasiado grande. Tamaño máximo: 5MB'
      });
    }

    // Generar nombre de archivo único
    const finalFilename = generateFilename(filename, validation.extension);

    // Subir imagen a GitHub
    const imageUrl = await uploadImageToGitHub(finalFilename, base64Content, alt);

    return res.status(200).json({
      success: true,
      message: 'Imagen subida exitosamente',
      url: imageUrl,
      filename: finalFilename,
      alt: alt || '',
      size: Math.round(sizeInBytes / 1024) // Tamaño en KB
    });

  } catch (error) {
    console.error('Error subiendo imagen:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
}

export default withAuth(handler);