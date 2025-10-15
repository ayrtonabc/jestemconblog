import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, TrendingUp, Users, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

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

const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Ile Kosztuje Sklep Internetowy w 2024? Kompletny Przewodnik Cenowy',
    excerpt: 'Dowiedz się dokładnie ile kosztuje stworzenie sklepu internetowego. Porównanie cen, ukryte koszty i jak zaoszczędzić na tworzeniu e-commerce.',
    slug: 'ile-kosztuje-sklep-internetowy-2024',
    publishDate: '2024-01-15',
    readTime: '8 min',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Strona Internetowa nie Wyświetla się Poprawnie? 7 Najczęstszych Problemów',
    excerpt: 'Twoja strona internetowa ma problemy z wyświetlaniem? Poznaj 7 najczęstszych przyczyn i sposoby ich rozwiązania krok po kroku.',
    slug: 'strona-internetowa-nie-wyswietla-sie-poprawnie',
    publishDate: '2024-01-10',
    readTime: '6 min',
    category: 'Rozwiązywanie Problemów',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Pozycjonowanie Strony Internetowej - 10 Błędów Które Niszczą Twoje SEO',
    excerpt: 'Poznaj 10 najczęstszych błędów w pozycjonowaniu stron internetowych i dowiedz się jak ich unikać, aby poprawić pozycje w Google.',
    slug: 'bledy-w-pozycjonowaniu-stron-internetowych',
    publishDate: '2024-01-05',
    readTime: '12 min',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Programista PHP na Godziny - Kiedy Warto Wynająć Freelancera?',
    excerpt: 'Zastanawiasz się nad wynajęciem programisty PHP na godziny? Poznaj zalety, wady i kiedy to najlepsze rozwiązanie dla Twojego projektu.',
    slug: 'programista-php-na-godziny-freelancer',
    publishDate: '2024-01-01',
    readTime: '7 min',
    category: 'Programowanie',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Tworzenie Sklepów Internetowych - WooCommerce vs Sklepy Dedykowane',
    excerpt: 'Porównanie WooCommerce z dedykowanymi sklepami internetowymi. Które rozwiązanie wybrać dla swojego biznesu e-commerce?',
    slug: 'woocommerce-vs-sklepy-dedykowane',
    publishDate: '2023-12-28',
    readTime: '10 min',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(defaultBlogPosts);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    async function loadIndex() {
      try {
        setLoading(true);
        const res = await fetch('/content/blog/index.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error('Failed to load index.json');
        const data: BlogPost[] = await res.json();
        if (!cancelled && Array.isArray(data) && data.length) {
          setPosts(data);
        }
      } catch (err) {
        // Keep default posts as fallback
        console.warn('Blog index JSON no disponible, usando fallback.', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadIndex();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <SEOHead
        title="Blog JestemProgramista.pl - Porady o Stronach i Sklepach Internetowych"
        description="Praktyczne porady o tworzeniu stron internetowych, sklepów online, pozycjonowaniu SEO i programowaniu. Ekspertka wiedza dla przedsiębiorców."
        canonicalPath="/blog"
        image="https://jestemprogramista.pl/og-image.jpg"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header with navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <a
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-[#FF3B30] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Powrót do strony głównej
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B6B] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <BookOpen className="w-12 h-12" />
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Blog <span className="text-yellow-300">JestemProgramista.pl</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
                Zapomnij o powierzchownych poradach. Dzielę się wiedzą zdobytą podczas tworzenia 
                systemów webowych projektowanych od podstaw dla Twojego biznesu. Bez kompromisów, bez ograniczeń.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>Ekspertka wiedza</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span>Praktyczne porady</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Dla przedsiębiorców</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs 
            items={[
              { label: 'Blog' }
            ]} 
          />

          {/* Blog Posts Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishDate).toLocaleDateString('pl-PL')}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Czytaj więcej →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Dlaczego Warto Czytać Nasz Blog o Tworzeniu Stron Internetowych?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Praktyczne Rozwiązania Problemów
                  </h3>
                  <p className="text-gray-600">
                    Znajdziesz tutaj konkretne odpowiedzi na najczęstsze problemy związane z tworzeniem 
                    stron internetowych, sklepów online i pozycjonowaniem SEO.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Aktualne Trendy i Technologie
                  </h3>
                  <p className="text-gray-600">
                    Śledzimy najnowsze trendy w branży IT i dzielimy się wiedzą o nowoczesnych 
                    technologiach używanych w tworzeniu aplikacji webowych.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Porady Biznesowe
                  </h3>
                  <p className="text-gray-600">
                    Nie tylko techniczne aspekty - znajdziesz również porady dotyczące prowadzenia 
                    biznesu online i optymalizacji kosztów projektów IT.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Doświadczenie Praktyka
                  </h3>
                  <p className="text-gray-600">
                    Wszystkie artykuły powstają na bazie rzeczywistego doświadczenia z projektów 
                    dla klientów z różnych branż.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}