import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withAuth, type AuthenticatedRequest } from '../middleware/auth';

interface GitHubCommitResponse {
  sha: string;
  commit: {
    message: string;
  };
}

interface PublishRequest {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  category: string;
  seoTitle?: string;
  metaDescription: string;
  keywords?: string[];
  image: string;
  publishDate?: string;
}

async function commitToGitHub(
  filePath: string,
  content: string,
  message: string
): Promise<GitHubCommitResponse> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) {
    throw new Error('Variables de entorno de GitHub no configuradas');
  }

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  // Primero, intentar obtener el archivo existente para obtener su SHA
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
    console.log('Archivo no existe, creando nuevo:', filePath);
  }

  // Crear o actualizar el archivo
  const body: any = {
    message,
    content: Buffer.from(content).toString('base64'),
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
    throw new Error(`Error en GitHub API: ${response.status} - ${errorData}`);
  }

  return response.json();
}

async function handler(req: AuthenticatedRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const {
      title,
      content,
      excerpt,
      slug,
      category,
      seoTitle,
      metaDescription,
      keywords = [],
      image,
      publishDate
    }: PublishRequest = req.body;

    // Validaciones básicas
    if (!title || !content || !excerpt || !slug || !category || !metaDescription || !image) {
      return res.status(400).json({
        success: false,
        message: 'Campos requeridos: title, content, excerpt, slug, category, metaDescription, image'
      });
    }

    // Validar slug (solo letras, números, guiones)
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return res.status(400).json({
        success: false,
        message: 'El slug solo puede contener letras minúsculas, números y guiones'
      });
    }

    // Calcular tiempo de lectura
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readTime = `${Math.ceil(wordCount / 200)} min`;

    const now = new Date();
    const postDate = publishDate ? new Date(publishDate) : now;

    // Crear el objeto del post completo
    const fullPost = {
      id: Date.now().toString(),
      title,
      content,
      excerpt,
      slug,
      category,
      seoTitle: seoTitle || title,
      metaDescription,
      keywords: Array.isArray(keywords) ? keywords : [],
      image,
      publishDate: postDate.toISOString(),
      lastModified: now.toISOString(),
      readTime,
      author: {
        name: 'JestemProgramista.pl',
        bio: 'Profesjonalny programista PHP specjalizujący się w tworzeniu stron internetowych i sklepów online.'
      }
    };

    // Crear el objeto para el índice
    const indexPost = {
      id: fullPost.id,
      title: fullPost.title,
      excerpt: fullPost.excerpt,
      slug: fullPost.slug,
      publishDate: fullPost.publishDate,
      readTime: fullPost.readTime,
      category: fullPost.category,
      image: fullPost.image
    };

    // Intentar obtener el índice actual
    let currentIndex: any[] = [];
    try {
      const indexResponse = await fetch(`https://raw.githubusercontent.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/${process.env.GITHUB_BRANCH || 'main'}/public/content/blog/index.json`);
      if (indexResponse.ok) {
        currentIndex = await indexResponse.json();
      }
    } catch (error) {
      console.log('No se pudo obtener el índice actual, creando nuevo');
    }

    // Verificar si el post ya existe
    const existingPostIndex = currentIndex.findIndex(p => p.slug === slug);
    if (existingPostIndex !== -1) {
      // Actualizar post existente
      currentIndex[existingPostIndex] = indexPost;
    } else {
      // Agregar nuevo post al inicio
      currentIndex.unshift(indexPost);
    }

    // Ordenar por fecha de publicación (más recientes primero)
    currentIndex.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

    // Commits a realizar
    const commits: Promise<GitHubCommitResponse>[] = [];

    // 1. Commit del archivo individual del post
    const postFilePath = `public/content/blog/${slug}.json`;
    const postCommitMessage = existingPostIndex !== -1 
      ? `Actualizar artículo: ${title}`
      : `Publicar nuevo artículo: ${title}`;
    
    commits.push(
      commitToGitHub(
        postFilePath,
        JSON.stringify(fullPost, null, 2),
        postCommitMessage
      )
    );

    // 2. Commit del índice actualizado
    const indexFilePath = 'public/content/blog/index.json';
    commits.push(
      commitToGitHub(
        indexFilePath,
        JSON.stringify(currentIndex, null, 2),
        `Actualizar índice del blog - ${existingPostIndex !== -1 ? 'Actualizar' : 'Agregar'}: ${title}`
      )
    );

    // Ejecutar todos los commits
    const results = await Promise.all(commits);
    const postCommitHash = results[0].sha;

    return res.status(200).json({
      success: true,
      message: `Artículo ${existingPostIndex !== -1 ? 'actualizado' : 'publicado'} exitosamente`,
      slug,
      commitHash: postCommitHash,
      post: fullPost
    });

  } catch (error) {
    console.error('Error publicando artículo:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
}

export default withAuth(handler);