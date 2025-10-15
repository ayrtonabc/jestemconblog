import { Check, Search, BarChart, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { lazy, Suspense } from 'react';

// Componente optimizado para lazy loading de imágenes
const LazyImage = lazy(() => import('./LazyImage'));

export default function SEOServices() {
  return (
    <>
      <Helmet>
        <title>Profesjonalne Strony Wizytówki i Sklepy Online | Szybka Realizacja, SEO i Wsparcie | JestemProgramista.pl</title>
        <meta name="description" content="Tworzymy profesjonalne strony wizytówki i sklepy internetowe, które ładują się szybko, przyciągają klientów i są łatwe w aktualizacji. Atrakcyjne ceny, szybka realizacja i pełne wsparcie post-venta." />
        <meta name="keywords" content="usługi SEO, pozycjonowanie stron, audyt SEO, SEO profesjonalne, optymalizacja stron, SEO Polska" />
        <link rel="canonical" href="https://jestemprogramista.pl" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Usługi SEO i Pozycjonowania Stron | Profesjonalne Usługi SEO" />
        <meta property="og:description" content="Popraw widoczność swojej firmy w Google dzięki naszym profesjonalnym usługom SEO i pozycjonowania stron internetowych." />
        <meta property="og:image" content="/seo.jpg" />
        <meta property="og:url" content="https://jestemprogramista.pl" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Auditoría SEO Express",
              "description": "Análisis completo de 25+ puntos técnicos con informe PDF y consultoría personalizada",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Tu Empresa"
              },
              "offers": {
                "@type": "Offer",
                "price": "590",
                "priceCurrency": "PLN"
              }
            }
          `}
        </script>
      </Helmet>
      <section id="servicios-seo" className="min-h-screen bg-[#F8F9FA] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
            Pozycjonowanie Stron
            <br />
            <span className="text-[#FF3B30]">i Usługi SEO</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Profesjonalne pozycjonowanie stron internetowych. Zwiększ widoczność swojej firmy 
            w Google dzięki naszym skutecznym usługom SEO.
          </p>

          {/* Auditoría SEO Express */}
          <article className="bg-white p-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 mb-12" itemScope itemType="https://schema.org/Service">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FF3B30] w-16 h-16 flex items-center justify-center">
                <Search className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold" itemProp="name">1. Ekspresowy Audyt SEO</h2>
                <p className="text-4xl font-extrabold mt-2"><span itemProp="price">300</span> <span itemProp="priceCurrency">PLN</span> <span className="text-sm font-normal text-gray-600">(stała cena, nie za godzinę)</span></p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center">
                <meta itemProp="description" content="Kompleksowa analiza ponad 25 punktów technicznych z raportem PDF i spersonalizowaną konsultacją" />
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">Kompleksowa analiza ponad 25 punktów technicznych</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">Raport PDF z priorytetami działań</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">30 minut konsultacji w celu wyjaśnienia wyników</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">Dostawa w ciągu 48 godzin</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <a
                    href="#contacto"
                    className="inline-block px-8 py-4 font-medium bg-[#FF3B30] text-white hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                    onClick={() => {
                      // Evento de conversión para Google Analytics
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'click', {
                          'event_category': 'CTA',
                          'event_label': 'Solicitar Auditoría SEO',
                        });
                      }
                    }}
                  >
                    Solicitar Auditoría
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  {/* Barra de navegador estilo Mac */}
                  <div className="bg-gray-100 h-8 flex items-center px-4 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <img
                     src="/seo.webp"
                     alt="Ekspresowy Audyt SEO"
                     className="w-full h-auto"
                   />
                </div>
            </div>
          </article>

          {/* SEO One-Shot */}
          <article className="bg-white p-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1" itemScope itemType="https://schema.org/Service">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FF3B30] w-16 h-16 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold" itemProp="name">2. SEO One-Shot (Projekty specjalistyczne)</h2>
                <p className="text-lg text-gray-600 mt-1" itemProp="description">Konkretne rozwiązania dla określonych potrzeb</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#F8F9FA] p-6 rounded-lg" itemScope itemType="https://schema.org/Offer">
                <h3 className="font-bold mb-2">Pełna optymalizacja On-Page</h3>
                <p className="text-2xl font-bold mb-4"><span itemProp="price">1,900</span> <span itemProp="priceCurrency">PLN</span></p>
                <p className="text-sm text-gray-600 mb-4">Kompleksowa poprawa wszystkich elementów on-page Twojej strony</p>
                <a
                  href="#contacto"
                  className="inline-block w-full py-3 text-center font-medium bg-[#FF3B30] text-white hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Solicitar Optimización On-Page',
                      });
                    }
                  }}
                >
                  Zamów
                </a>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg" itemScope itemType="https://schema.org/Offer">
                <h3 className="font-bold mb-2">Migracja SEO</h3>
                <p className="text-2xl font-bold mb-4"><span itemProp="price">2,500</span> <span itemProp="priceCurrency">PLN</span></p>
                <p className="text-sm text-gray-600 mb-4">Zmiana domeny lub platformy bez utraty pozycji</p>
                <a
                  href="#contacto"
                  className="inline-block w-full py-3 text-center font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Solicitar Migración SEO',
                      });
                    }
                  }}
                >
                  Zamów
                </a>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg" itemScope itemType="https://schema.org/Offer">
                <h3 className="font-bold mb-2">SEO Lokalne + Google Business</h3>
                <p className="text-2xl font-bold mb-4"><span itemProp="price">1,500</span> <span itemProp="priceCurrency">PLN</span></p>
                <p className="text-sm text-gray-600 mb-4">Optymalizacja dla wyszukiwań lokalnych i pełna konfiguracja</p>
                <a
                  href="#contacto"
                  className="inline-block w-full py-3 text-center font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Solicitar SEO Local',
                      });
                    }
                  }}
                >
                  Zamów
                </a>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg" itemScope itemType="https://schema.org/Offer">
                <h3 className="font-bold mb-2">Audyt szybkości</h3>
                <p className="text-2xl font-bold mb-4"><span itemProp="price">1,200</span> <span itemProp="priceCurrency">PLN</span></p>
                <p className="text-sm text-gray-600 mb-4">Analiza i optymalizacja wydajności Twojej strony</p>
                <a
                  href="#contacto"
                  className="inline-block w-full py-3 text-center font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Solicitar Auditoría de Velocidad',
                      });
                    }
                  }}
                >
                  Zamów
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}