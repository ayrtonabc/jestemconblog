import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withAuth, type AuthenticatedRequest } from '../middleware/auth';
import fs from 'fs/promises';
import path from 'path';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogPostFull extends BlogPost {
  content: string;
  seoTitle?: string;
  metaDescription: string;
  keywords: string[];
  lastModified: string;
  author: {
    name: string;
    bio: string;
  };
}

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'public', 'content', 'blog');
const INDEX_FILE = path.join(BLOG_CONTENT_PATH, 'index.json');

async function ensureBlogDirectory() {
  try {
    await fs.access(BLOG_CONTENT_PATH);
  } catch {
    await fs.mkdir(BLOG_CONTENT_PATH, { recursive: true });
  }
}

async function loadBlogIndex(): Promise<BlogPost[]> {
  try {
    await ensureBlogDirectory();
    const indexContent = await fs.readFile(INDEX_FILE, 'utf-8');
    return JSON.parse(indexContent);
  } catch (error) {
    console.warn('No se pudo cargar el índice del blog, devolviendo array vacío:', error);
    return [];
  }
}

async function saveBlogIndex(posts: BlogPost[]): Promise<void> {
  await ensureBlogDirectory();
  await fs.writeFile(INDEX_FILE, JSON.stringify(posts, null, 2), 'utf-8');
}

async function loadBlogPost(slug: string): Promise<BlogPostFull | null> {
  try {
    const postPath = path.join(BLOG_CONTENT_PATH, `${slug}.json`);
    const postContent = await fs.readFile(postPath, 'utf-8');
    return JSON.parse(postContent);
  } catch (error) {
    console.error(`Error cargando post ${slug}:`, error);
    return null;
  }
}

async function saveBlogPost(post: BlogPostFull): Promise<void> {
  await ensureBlogDirectory();
  const postPath = path.join(BLOG_CONTENT_PATH, `${post.slug}.json`);
  await fs.writeFile(postPath, JSON.stringify(post, null, 2), 'utf-8');
}

async function deleteBlogPost(slug: string): Promise<void> {
  const postPath = path.join(BLOG_CONTENT_PATH, `${slug}.json`);
  await fs.unlink(postPath);
}

async function handler(req: AuthenticatedRequest, res: VercelResponse) {
  try {
    switch (req.method) {
      case 'GET':
        return await handleGetPosts(req, res);
      case 'POST':
        return await handleCreatePost(req, res);
      case 'PUT':
        return await handleUpdatePost(req, res);
      case 'DELETE':
        return await handleDeletePost(req, res);
      default:
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error en API de posts:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
  }
}

async function handleGetPosts(req: AuthenticatedRequest, res: VercelResponse) {
  const { slug } = req.query;

  if (slug && typeof slug === 'string') {
    // Obtener un post específico
    const post = await loadBlogPost(slug);
    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post no encontrado' 
      });
    }
    return res.status(200).json({ success: true, post });
  } else {
    // Obtener todos los posts
    const posts = await loadBlogIndex();
    return res.status(200).json({ success: true, posts });
  }
}

async function handleCreatePost(req: AuthenticatedRequest, res: VercelResponse) {
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
  } = req.body;

  // Validaciones básicas
  if (!title || !content || !excerpt || !slug || !category || !metaDescription || !image) {
    return res.status(400).json({
      success: false,
      message: 'Campos requeridos: title, content, excerpt, slug, category, metaDescription, image'
    });
  }

  // Verificar que el slug no exista
  const existingPost = await loadBlogPost(slug);
  if (existingPost) {
    return res.status(409).json({
      success: false,
      message: 'Ya existe un post con este slug'
    });
  }

  // Calcular tiempo de lectura aproximado
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = `${Math.ceil(wordCount / 200)} min`;

  // Crear el post completo
  const newPost: BlogPostFull = {
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
    publishDate: publishDate || new Date().toISOString(),
    lastModified: new Date().toISOString(),
    readTime,
    author: {
      name: 'JestemProgramista.pl',
      bio: 'Profesjonalny programista PHP specjalizujący się w tworzeniu stron internetowych i sklepów online.'
    }
  };

  // Guardar el post completo
  await saveBlogPost(newPost);

  // Actualizar el índice
  const posts = await loadBlogIndex();
  const indexPost: BlogPost = {
    id: newPost.id,
    title: newPost.title,
    excerpt: newPost.excerpt,
    slug: newPost.slug,
    publishDate: newPost.publishDate,
    readTime: newPost.readTime,
    category: newPost.category,
    image: newPost.image
  };

  posts.unshift(indexPost); // Agregar al inicio
  await saveBlogIndex(posts);

  return res.status(201).json({
    success: true,
    message: 'Post creado exitosamente',
    post: newPost
  });
}

async function handleUpdatePost(req: AuthenticatedRequest, res: VercelResponse) {
  const { slug } = req.query;
  
  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Slug es requerido'
    });
  }

  const existingPost = await loadBlogPost(slug);
  if (!existingPost) {
    return res.status(404).json({
      success: false,
      message: 'Post no encontrado'
    });
  }

  const {
    title,
    content,
    excerpt,
    category,
    seoTitle,
    metaDescription,
    keywords,
    image
  } = req.body;

  // Calcular nuevo tiempo de lectura si el contenido cambió
  let readTime = existingPost.readTime;
  if (content && content !== existingPost.content) {
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    readTime = `${Math.ceil(wordCount / 200)} min`;
  }

  // Actualizar el post
  const updatedPost: BlogPostFull = {
    ...existingPost,
    title: title || existingPost.title,
    content: content || existingPost.content,
    excerpt: excerpt || existingPost.excerpt,
    category: category || existingPost.category,
    seoTitle: seoTitle !== undefined ? seoTitle : existingPost.seoTitle,
    metaDescription: metaDescription || existingPost.metaDescription,
    keywords: keywords !== undefined ? keywords : existingPost.keywords,
    image: image || existingPost.image,
    readTime,
    lastModified: new Date().toISOString()
  };

  // Guardar el post actualizado
  await saveBlogPost(updatedPost);

  // Actualizar el índice
  const posts = await loadBlogIndex();
  const postIndex = posts.findIndex(p => p.slug === slug);
  if (postIndex !== -1) {
    posts[postIndex] = {
      id: updatedPost.id,
      title: updatedPost.title,
      excerpt: updatedPost.excerpt,
      slug: updatedPost.slug,
      publishDate: updatedPost.publishDate,
      readTime: updatedPost.readTime,
      category: updatedPost.category,
      image: updatedPost.image
    };
    await saveBlogIndex(posts);
  }

  return res.status(200).json({
    success: true,
    message: 'Post actualizado exitosamente',
    post: updatedPost
  });
}

async function handleDeletePost(req: AuthenticatedRequest, res: VercelResponse) {
  const { slug } = req.query;
  
  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Slug es requerido'
    });
  }

  const existingPost = await loadBlogPost(slug);
  if (!existingPost) {
    return res.status(404).json({
      success: false,
      message: 'Post no encontrado'
    });
  }

  // Eliminar el archivo del post
  await deleteBlogPost(slug);

  // Actualizar el índice
  const posts = await loadBlogIndex();
  const filteredPosts = posts.filter(p => p.slug !== slug);
  await saveBlogIndex(filteredPosts);

  return res.status(200).json({
    success: true,
    message: 'Post eliminado exitosamente'
  });
}

export default withAuth(handler);