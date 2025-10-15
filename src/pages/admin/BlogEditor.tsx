import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Upload, 
  Image as ImageIcon, 
  Bold, 
  Italic, 
  Underline,
  List,
  ListOrdered,
  Link,
  Code,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Type,
  Palette,
  AlertCircle,
  CheckCircle,
  Clock,
  Tag,
  FileText,
  Search,
  Hash
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  seoTitle?: string;
  metaDescription: string;
  keywords: string[];
  lastModified: string;
  author: {
    name: string;
    bio: string;
  };
}

interface BlogEditorProps {
  onSave: () => void;
}

export default function BlogEditor({ onSave }: BlogEditorProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [post, setPost] = useState<BlogPostData>({
    id: '',
    title: '',
    excerpt: '',
    content: '',
    slug: '',
    publishDate: new Date().toISOString().split('T')[0],
    readTime: '5 min',
    category: 'Programación',
    image: '',
    seoTitle: '',
    metaDescription: '',
    keywords: [],
    lastModified: new Date().toISOString(),
    author: {
      name: 'JestemProgramista',
      bio: 'Desarrollador Full Stack especializado en tecnologías web modernas'
    }
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [keywordInput, setKeywordInput] = useState<string>('');
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');

  // Categorías predefinidas
  const categories = [
    'Programación',
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'CSS',
    'HTML',
    'Desarrollo Web',
    'Backend',
    'Frontend',
    'Tutoriales',
    'Tips',
    'Herramientas'
  ];

  // Cargar post existente si estamos editando
  useEffect(() => {
    if (slug) {
      loadPost(slug);
    } else {
      // Generar ID único para nuevo post
      setPost(prev => ({
        ...prev,
        id: `post-${Date.now()}`
      }));
    }
  }, [slug]);

  // Auto-guardado cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (post.title.trim() && post.content.trim() && autoSaveStatus === 'unsaved') {
        handleAutoSave();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [post, autoSaveStatus]);

  // Generar slug automáticamente desde el título
  useEffect(() => {
    if (post.title && !slug) {
      const generatedSlug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      setPost(prev => ({ ...prev, slug: generatedSlug }));
    }
  }, [post.title, slug]);

  // Calcular tiempo de lectura automáticamente
  useEffect(() => {
    if (post.content) {
      const wordCount = post.content.split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));
      setPost(prev => ({ ...prev, readTime: `${readTime} min` }));
    }
  }, [post.content]);

  const loadPost = async (postSlug: string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('admin_session');
      const response = await fetch(`/api/blog/posts?slug=${postSlug}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.post) {
          setPost(data.post);
        }
      } else {
        showMessage('error', 'Error cargando el artículo');
      }
    } catch (error) {
      console.error('Error cargando post:', error);
      showMessage('error', 'Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const handleAutoSave = async () => {
    if (!post.title.trim() || !post.content.trim()) return;

    setAutoSaveStatus('saving');
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('admin_session');
      await fetch('/api/blog/posts', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...post,
          lastModified: new Date().toISOString(),
          isDraft: true
        })
      });
      setAutoSaveStatus('saved');
    } catch (error) {
      console.error('Error en auto-guardado:', error);
      setAutoSaveStatus('unsaved');
    }
  };

  const handleSave = async (publish: boolean = false) => {
    if (!post.title.trim()) {
      showMessage('error', 'El título es obligatorio');
      return;
    }

    if (!post.content.trim()) {
      showMessage('error', 'El contenido es obligatorio');
      return;
    }

    if (!post.excerpt.trim()) {
      showMessage('error', 'El resumen es obligatorio');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('admin_session');
      const endpoint = publish ? '/api/blog/publish' : '/api/blog/posts';
      
      const response = await fetch(endpoint, {
        method: slug ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...post,
          lastModified: new Date().toISOString(),
          isDraft: !publish
        })
      });

      if (response.ok) {
        showMessage('success', publish ? 'Artículo publicado exitosamente' : 'Borrador guardado');
        setAutoSaveStatus('saved');
        onSave();
        
        if (publish && !slug) {
          navigate(`/admin/blog/editor/${post.slug}`);
        }
      } else {
        const data = await response.json();
        showMessage('error', data.error || 'Error guardando el artículo');
      }
    } catch (error) {
      console.error('Error guardando:', error);
      showMessage('error', 'Error de conexión');
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      showMessage('error', 'Por favor selecciona una imagen válida');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showMessage('error', 'La imagen no puede ser mayor a 5MB');
      return;
    }

    setUploadingImage(true);
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('admin_session');
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/blog/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        showMessage('error', 'Error subiendo la imagen');
        return null;
      }
    } catch (error) {
      console.error('Error subiendo imagen:', error);
      showMessage('error', 'Error de conexión');
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = await handleImageUpload(file);
    if (imageUrl) {
      setPost(prev => ({ ...prev, image: imageUrl }));
      showMessage('success', 'Imagen de portada actualizada');
    }
  };

  const insertImageInContent = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const imageUrl = await handleImageUpload(file);
      if (imageUrl && contentRef.current) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Imagen del artículo';
          img.className = 'max-w-full h-auto rounded-lg my-4';
          range.insertNode(img);
          
          // Actualizar el contenido
          setPost(prev => ({ ...prev, content: contentRef.current?.innerHTML || '' }));
          setAutoSaveStatus('unsaved');
        }
      }
    };
    input.click();
  };

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (contentRef.current) {
      setPost(prev => ({ ...prev, content: contentRef.current?.innerHTML || '' }));
      setAutoSaveStatus('unsaved');
    }
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !post.keywords.includes(keywordInput.trim())) {
      setPost(prev => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()]
      }));
      setKeywordInput('');
      setAutoSaveStatus('unsaved');
    }
  };

  const removeKeyword = (keyword: string) => {
    setPost(prev => ({
      ...prev,
      keywords: prev.keywords.filter(k => k !== keyword)
    }));
    setAutoSaveStatus('unsaved');
  };

  const showMessage = (type: 'success' | 'error' | 'info', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const updatePost = (field: keyof BlogPostData, value: any) => {
    setPost(prev => ({ ...prev, [field]: value }));
    setAutoSaveStatus('unsaved');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando editor...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${slug ? 'Editar' : 'Crear'} Artículo - Blog CMS`}
        description="Editor de artículos para el blog de JestemProgramista.pl"
        canonicalPath={`/admin/blog/editor${slug ? `/${slug}` : ''}`}
        noIndex={true}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/admin/blog')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Volver al Panel</span>
                </button>
                
                <div className="h-6 w-px bg-gray-300"></div>
                
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">
                    {slug ? 'Editando Artículo' : 'Nuevo Artículo'}
                  </span>
                </div>

                {/* Auto-save status */}
                <div className="flex items-center space-x-2 text-sm">
                  {autoSaveStatus === 'saving' && (
                    <>
                      <Clock className="w-4 h-4 text-yellow-500 animate-spin" />
                      <span className="text-yellow-600">Guardando...</span>
                    </>
                  )}
                  {autoSaveStatus === 'saved' && (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-600">Guardado</span>
                    </>
                  )}
                  {autoSaveStatus === 'unsaved' && (
                    <>
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-600">Sin guardar</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>{showPreview ? 'Editor' : 'Vista Previa'}</span>
                </button>

                <button
                  onClick={() => handleSave(false)}
                  disabled={saving}
                  className="flex items-center space-x-2 px-4 py-2 text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar Borrador</span>
                </button>

                <button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {saving ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  <span>Publicar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg ${
            message.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
            message.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
            'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            <div className="flex items-center space-x-2">
              {message.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {message.type === 'error' && <AlertCircle className="w-5 h-5" />}
              <span>{message.text}</span>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              {!showPreview ? (
                <>
                  {/* Title */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título del Artículo *
                    </label>
                    <input
                      type="text"
                      value={post.title}
                      onChange={(e) => updatePost('title', e.target.value)}
                      placeholder="Escribe un título atractivo..."
                      className="w-full text-2xl font-bold border-none outline-none resize-none placeholder-gray-400"
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resumen/Extracto *
                    </label>
                    <textarea
                      value={post.excerpt}
                      onChange={(e) => updatePost('excerpt', e.target.value)}
                      placeholder="Escribe un resumen atractivo del artículo..."
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      {post.excerpt.length}/160 caracteres (recomendado para SEO)
                    </p>
                  </div>

                  {/* Content Editor */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Toolbar */}
                    <div className="border-b border-gray-200 p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                          <button
                            onClick={() => formatText('bold')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Negrita"
                          >
                            <Bold className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('italic')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Cursiva"
                          >
                            <Italic className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('underline')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Subrayado"
                          >
                            <Underline className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                          <button
                            onClick={() => formatText('formatBlock', 'h1')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Título 1"
                          >
                            <Heading1 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('formatBlock', 'h2')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Título 2"
                          >
                            <Heading2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('formatBlock', 'h3')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Título 3"
                          >
                            <Heading3 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                          <button
                            onClick={() => formatText('insertUnorderedList')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Lista con viñetas"
                          >
                            <List className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('insertOrderedList')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Lista numerada"
                          >
                            <ListOrdered className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('formatBlock', 'blockquote')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Cita"
                          >
                            <Quote className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => {
                              const url = prompt('Ingresa la URL del enlace:');
                              if (url) formatText('createLink', url);
                            }}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Insertar enlace"
                          >
                            <Link className="w-4 h-4" />
                          </button>
                          <button
                            onClick={insertImageInContent}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Insertar imagen"
                          >
                            <ImageIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => formatText('formatBlock', 'pre')}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                            title="Código"
                          >
                            <Code className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <div
                        ref={contentRef}
                        contentEditable
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        onInput={(e) => {
                          const content = e.currentTarget.innerHTML;
                          updatePost('content', content);
                        }}
                        className="min-h-96 outline-none prose prose-lg max-w-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-4 border border-gray-200"
                        style={{ minHeight: '400px' }}
                        placeholder="Comienza a escribir tu artículo..."
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Preview */
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <article className="prose prose-lg max-w-none">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-lg mb-8"
                      />
                    )}
                    
                    <header className="mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {post.title || 'Título del artículo'}
                      </h1>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString('es-ES')}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {post.excerpt || 'Resumen del artículo...'}
                      </p>
                    </header>
                    
                    <div 
                      dangerouslySetInnerHTML={{ __html: post.content || '<p>Contenido del artículo...</p>' }}
                    />
                  </article>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cover Image */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Imagen de Portada</h3>
                
                {post.image ? (
                  <div className="relative">
                    <img
                      src={post.image}
                      alt="Portada"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity rounded-lg"
                    >
                      <Upload className="w-6 h-6 mr-2" />
                      Cambiar Imagen
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ImageIcon className="w-8 h-8 mb-2" />
                    <span>Subir Imagen de Portada</span>
                    <span className="text-sm">JPG, PNG hasta 5MB</span>
                  </button>
                )}
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageUpload}
                  className="hidden"
                />
                
                {uploadingImage && (
                  <div className="mt-4 flex items-center justify-center text-blue-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    Subiendo imagen...
                  </div>
                )}
              </div>

              {/* Post Settings */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug (URL)
                    </label>
                    <input
                      type="text"
                      value={post.slug}
                      onChange={(e) => updatePost('slug', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="url-del-articulo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría
                    </label>
                    <select
                      value={post.category}
                      onChange={(e) => updatePost('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha de Publicación
                    </label>
                    <input
                      type="date"
                      value={post.publishDate}
                      onChange={(e) => updatePost('publishDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tiempo de Lectura
                    </label>
                    <input
                      type="text"
                      value={post.readTime}
                      onChange={(e) => updatePost('readTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="5 min"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Se calcula automáticamente basado en el contenido
                    </p>
                  </div>
                </div>
              </div>

              {/* SEO Settings */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Search className="w-5 h-5 inline mr-2" />
                  SEO y Metadatos
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título SEO
                    </label>
                    <input
                      type="text"
                      value={post.seoTitle || ''}
                      onChange={(e) => updatePost('seoTitle', e.target.value)}
                      placeholder={post.title || 'Título para motores de búsqueda'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {(post.seoTitle || post.title || '').length}/60 caracteres
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Descripción
                    </label>
                    <textarea
                      value={post.metaDescription}
                      onChange={(e) => updatePost('metaDescription', e.target.value)}
                      placeholder="Descripción para motores de búsqueda..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {post.metaDescription.length}/160 caracteres
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Palabras Clave
                    </label>
                    <div className="flex space-x-2 mb-2">
                      <input
                        type="text"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                        placeholder="Agregar palabra clave..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={addKeyword}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Hash className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {keyword}
                          <button
                            onClick={() => removeKeyword(keyword)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autor</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={post.author.name}
                      onChange={(e) => updatePost('author', { ...post.author, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biografía
                    </label>
                    <textarea
                      value={post.author.bio}
                      onChange={(e) => updatePost('author', { ...post.author, bio: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}