import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Plus, 
  Settings, 
  LogOut, 
  Edit3, 
  Trash2, 
  Eye,
  Calendar,
  Clock,
  Tag,
  Search,
  Filter
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import BlogEditor from './BlogEditor';
import BlogLogin from './BlogLogin';

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

export default function BlogAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  // Verificar autenticación al cargar
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('admin_token');
      const sessionToken = localStorage.getItem('admin_session');
      
      if (token || sessionToken) {
        setIsAuthenticated(true);
        loadPosts();
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const loadPosts = async () => {
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('admin_session');
      const response = await fetch('/api/blog/posts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      } else {
        console.error('Error cargando posts:', response.statusText);
      }
    } catch (error) {
      console.error('Error cargando posts:', error);
    }
  };

  const handleLogin = (token: string) => {
    localStorage.setItem('admin_token', token);
    setIsAuthenticated(true);
    loadPosts();
    navigate('/admin/blog');
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    navigate('/admin/blog/login');
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      return;
    }

    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('admin_session');
      const response = await fetch(`/api/blog/posts?slug=${slug}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setPosts(posts.filter(p => p.slug !== slug));
        alert('Artículo eliminado exitosamente');
      } else {
        alert('Error eliminando el artículo');
      }
    } catch (error) {
      console.error('Error eliminando post:', error);
      alert('Error eliminando el artículo');
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(posts.map(p => p.category))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<BlogLogin onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/admin/blog/login" replace />} />
      </Routes>
    );
  }

  return (
    <>
      <SEOHead
        title="Panel de Administración - Blog CMS"
        description="Panel de administración para gestionar el blog de JestemProgramista.pl"
        canonicalPath="/admin/blog"
        noIndex={true}
      />

      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/editor" element={<BlogEditor onSave={loadPosts} />} />
          <Route path="/editor/:slug" element={<BlogEditor onSave={loadPosts} />} />
          <Route path="/login" element={<Navigate to="/admin/blog" replace />} />
          <Route path="/" element={
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-white shadow-lg min-h-screen">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-gray-900">Blog CMS</h1>
                      <p className="text-sm text-gray-500">JestemProgramista.pl</p>
                    </div>
                  </div>
                </div>

                <nav className="p-4 space-y-2">
                  <button
                    onClick={() => navigate('/admin/blog/editor')}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="font-medium">Nuevo Artículo</span>
                  </button>

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Panel de Administración del Blog
                  </h1>
                  <p className="text-gray-600">
                    Gestiona los artículos de tu blog de forma fácil y rápida
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Artículos</p>
                        <p className="text-3xl font-bold text-gray-900">{posts.length}</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Categorías</p>
                        <p className="text-3xl font-bold text-gray-900">{categories.length}</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <Tag className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Último Artículo</p>
                        <p className="text-sm font-medium text-gray-900">
                          {posts.length > 0 
                            ? new Date(posts[0].publishDate).toLocaleDateString('es-ES')
                            : 'N/A'
                          }
                        </p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Calendar className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar artículos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="sm:w-48">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Todas las categorías</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Posts Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Artículos ({filteredPosts.length})
                    </h2>
                  </div>

                  {filteredPosts.length === 0 ? (
                    <div className="p-12 text-center">
                      <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No hay artículos
                      </h3>
                      <p className="text-gray-500 mb-6">
                        {posts.length === 0 
                          ? 'Comienza creando tu primer artículo'
                          : 'No se encontraron artículos con los filtros aplicados'
                        }
                      </p>
                      <button
                        onClick={() => navigate('/admin/blog/editor')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Crear Artículo
                      </button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Artículo
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Categoría
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Fecha
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Lectura
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Acciones
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredPosts.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-12 h-12 rounded-lg object-cover mr-4"
                                  />
                                  <div>
                                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                      {post.title}
                                    </div>
                                    <div className="text-sm text-gray-500 line-clamp-2">
                                      {post.excerpt}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {post.category}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(post.publishDate).toLocaleDateString('es-ES')}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {post.readTime}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex items-center justify-end space-x-2">
                                  <button
                                    onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                                    className="text-gray-400 hover:text-gray-600 p-1"
                                    title="Ver artículo"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => navigate(`/admin/blog/editor/${post.slug}`)}
                                    className="text-blue-600 hover:text-blue-900 p-1"
                                    title="Editar artículo"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeletePost(post.slug)}
                                    className="text-red-600 hover:text-red-900 p-1"
                                    title="Eliminar artículo"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          } />
          <Route path="*" element={<Navigate to="/admin/blog" replace />} />
        </Routes>
      </div>
    </>
  );
}