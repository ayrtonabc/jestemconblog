import { ArrowLeft, Check, ShoppingCart, Star, Users, Award, Globe, Shield, Zap, BarChart3, CreditCard, Package, Headphones, Smartphone, Monitor, Tablet, TrendingUp, MapPin, Clock, Euro } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function SklepInternetowy() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Sklep Internetowy na Zamówienie | Tworzenie Sklepów Internetowych | Programista PHP"
        description="Profesjonalne tworzenie sklepów internetowych na zamówienie. Ile kosztuje sklep internetowy? Cena od 10,000 PLN. Programista PHP tworzący sklepy online."
        canonicalPath="/sklep-internetowy"
        image="/sklep.webp"
        locale="pl_PL"
        preloadImages={["/sklep.webp"]}
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B5A] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <a
            href="/#rozwiazania"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Wróć do wszystkich rozwiązań
          </a>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Schema.org JSON-LD for Service */}
              <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Sklep Internetowy Premium',
                description: 'Profesjonalne sklepy e-commerce: szybkie, bezpieczne i zoptymalizowane pod SEO i konwersję.',
                provider: {
                  '@type': 'Organization',
                  name: 'JestemProgramista.pl',
                  url: typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl'
                },
                areaServed: 'PL',
                offers: {
                  '@type': 'Offer',
                  price: '5200',
                  priceCurrency: 'PLN'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '5.0',
                  reviewCount: '89'
                }
              })}</script>
              {/* BreadcrumbList JSON-LD */}
              <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Sklep Internetowy',
                    item: (typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl') + '/sklep-internetowy'
                  }
                ]
              })}</script>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-2xl">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                    Sklep Internetowy na Zamówienie
                  </h1>
                  <p className="text-xl text-white/90 mt-2">
                    Profesjonalne rozwiązanie e‑commerce dla firm i marek
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  <span className="text-white">5.0 ★★★★★ (89 opinii)</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="text-white">47+ sklepów uruchomionych</span>
                </div>
              </div>


            </div>
            
            <div className="relative">
              {/* Mac Browser Frame - Solo barra superior */}
              <div className="shadow-2xl">
                <div className="bg-gray-200 rounded-t-2xl p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <img 
                  src="/sklep.webp" 
                  alt="Panel administracyjny sklepu internetowego na Mac"
                  className="w-full"
                  decoding="async"
                  fetchpriority="high"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg">
                ✓ Gotowy w 7 dni
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Historie Sukcesu Sklepów Internetowych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Klienci wdrożyli profesjonalne, dedykowane sklepy internetowe, zwiększając sprzedaż
              nawet o 300% w pierwszym roku dzięki SEO i optymalizacji konwersji.
            </p>
          </div>

          <div className="mb-16">
            <img 
              src="/casos.webp" 
              alt="Historie sukcesu sklepów internetowych" 
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 1200px, 100vw"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">MAZURSKIE SMAKI</h3>
                    <p className="text-gray-600">Produkty regionalne</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+280%</div>
                    <div className="text-sm text-gray-600">Sprzedaż online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15,000 PLN</div>
                    <div className="text-sm text-gray-600">Przychód miesięczny</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "W 6 miesięcy przeszliśmy od sprzedaży lokalnej do klientów z całej Polski. 
                  Zautomatyzowany system zamówień oszczędził nam 20 godzin pracy tygodniowo."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Anna Kowalska, Właścicielka</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <ShoppingCart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">TECH SOLUTIONS</h3>
                    <p className="text-gray-600">Elektronika i gadżety</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">450+</div>
                    <div className="text-sm text-gray-600">Zamówienia/miesiąc</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">#1</div>
                    <div className="text-sm text-gray-600">W Google</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Wbudowane SEO dało nam pierwszą stronę Google. Teraz 70% klientów
                  trafia do nas online."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Marcin Nowak, CEO</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">MODA PREMIUM</h3>
                    <p className="text-gray-600">Odzież i akcesoria</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">25,000 PLN</div>
                    <div className="text-sm text-gray-600">Przychód miesięczny</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2,500+</div>
                    <div className="text-sm text-gray-600">Zarejestrowani klienci</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Integracja z social mediami zwielokrotniła naszą sprzedaż. 
                  Panel administracyjny jest bardzo intuicyjny."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Katarzyna Wiśniewska, Założycielka</p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Statystyki Ogólne</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">47+</div>
                    <div className="text-gray-300">Sklepy uruchomione</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2.8M PLN</div>
                    <div className="text-gray-300">Łączna sprzedaż</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                    <div className="text-gray-300">Satysfakcja</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">14 días</div>
                    <div className="text-gray-300">Średni czas realizacji</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kompletny Sklep E-commerce - Wszystko Czego Potrzebujesz
            </h2>
            <p className="text-xl text-gray-600">
              Profesjonalne rozwiązanie dostosowane do polskiego rynku i lokalnych potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF3B30] rounded-full flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design Responsywny</h3>
              <p className="text-gray-600 mb-4">
                Twój sklep będzie wyglądać perfekcyjnie na wszystkich urządzeniach. 
                Nowoczesny design dostosowany do Twojej branży i marki.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Optymalizacja mobilna</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Szybkie ładowanie &lt;2s</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Intuicyjna nawigacja</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Płatności Online</h3>
              <p className="text-gray-600 mb-4">
                Integracja z najpopularniejszymi systemami płatności w Polsce. 
                Bezpieczne transakcje i automatyczne przetwarzanie zamówień.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />PayU, Przelewy24, BLIK</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Płatności kartą</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Raty i odroczone płatności</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zarządzanie Magazynem</h3>
              <p className="text-gray-600 mb-4">
                Automatyczne śledzenie stanów magazynowych, powiadomienia o niskich stanach, 
                integracja z dostawcami i kurierami.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Automatyczne stany</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Integracja z kurierami</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Śledzenie przesyłek</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analityka i Raporty</h3>
              <p className="text-gray-600 mb-4">
                Szczegółowe raporty sprzedaży, analiza zachowań klientów, 
                optymalizacja konwersji i ROI marketingu.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Google Analytics 4</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Raporty sprzedaży</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Analiza konwersji</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO i Marketing</h3>
              <p className="text-gray-600 mb-4">
                Pełna optymalizacja SEO, integracja z Google Ads, Facebook Pixel, 
                email marketing i programy lojalnościowe.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Optymalizacja SEO</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Google Ads ready</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Email marketing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wsparcie 24/7</h3>
              <p className="text-gray-600 mb-4">
                Pełne wsparcie techniczne, regularne aktualizacje, 
                konsultacje marketingowe i pomoc w rozwoju sklepu.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Wsparcie 12 miesięcy</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Regularne aktualizacje</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Konsultacje biznesowe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak Tworzymy Twój Sklep Internetowy?
            </h2>
            <p className="text-xl text-gray-600">
              Sprawdzony proces - od analizy biznesu do uruchomienia i wsparcia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analiza Biznesu</h3>
              <p className="text-gray-600">
                Analizujemy Twój asortyment, konkurencję, grupę docelową i cele biznesowe. 
                Planujemy strategię sprzedaży online.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Projektowanie UX/UI</h3>
              <p className="text-gray-600">
                Tworzymy unikalny design dostosowany do Twojej marki. 
                Optymalizujemy ścieżkę zakupową dla maksymalnej konwersji.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rozwój i Integracje</h3>
              <p className="text-gray-600">
                Programujemy sklep, integrujemy płatności, kurierów, systemy magazynowe. 
                Testujemy wszystkie funkcjonalności.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uruchomienie i Wsparcie</h3>
              <p className="text-gray-600">
                Uruchamiamy sklep, szkolimy z obsługi, optymalizujemy SEO. 
                Zapewniamy pełne wsparcie przez 12 miesięcy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Przejrzysta Wycena - Bez Ukrytych Kosztów
            </h2>
            <p className="text-xl text-gray-300">
              Jedna cena, pełna funkcjonalność, 12 miesięcy wsparcia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-300 mb-2">Sklep Basic</h3>
                <div className="text-3xl font-bold">7,500 PLN</div>
                <p className="text-gray-400 text-sm">do 100 produktów</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Design responsywny
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Panel administracyjny
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Płatności online
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Podstawowe SEO
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Hosting 12 miesięcy
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wsparcie 6 miesięcy
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-gray-700 text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-gray-600 transition-all"
                >
                  Wybierz Basic
                </a>
              </div>
            </div>

            {/* Standard Package - Highlighted */}
            <div className="bg-[#FF3B30] p-8 rounded-2xl border-2 border-[#FF3B30] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                NAJPOPULARNIEJSZY
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Sklep Standard</h3>
                <div className="text-4xl font-bold text-white">10,000 PLN</div>
                <p className="text-white/80 text-sm">nieograniczona liczba produktów</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Wszystko z pakietu Basic
                </li>
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Zaawansowane SEO
                </li>
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Analityka i raporty
                </li>
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Email marketing
                </li>
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Integracja z kurierami
                </li>
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Wsparcie 12 miesięcy
                </li>
                <li className="flex items-center text-green-300">
                  <Check className="w-5 h-5 mr-3" />
                  Realizacja w 7 dni
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-white text-[#FF3B30] px-8 py-4 text-lg font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Zamawiam Teraz!
                </a>
                <p className="text-white/80 text-sm mt-3">
                  Odpowiem w ciągu 2 godzin
                </p>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Sklep Premium</h3>
                <div className="text-3xl font-bold">15,000 PLN</div>
                <p className="text-gray-400 text-sm">rozwiązanie enterprise</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wszystko z pakietu Standard
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Marketplace (Allegro, Amazon)
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Aplikacja mobilna
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zaawansowana analityka
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Personalizacja AI
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wsparcie 24/7
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-yellow-400 text-black px-8 py-4 text-lg font-bold rounded-lg hover:bg-yellow-300 transition-all"
                >
                  Wybierz Premium
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Przetestuj Nasz Sklep Demo
            </h2>
            <p className="text-xl text-gray-600">
              Zobacz jak działa sklep internetowy w praktyce - pełna funkcjonalność dostępna od zaraz
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Demo na Żywo</h3>
                <p className="text-gray-700 mb-6">
                  Sklep internetowy z pełną funkcjonalnością - dodawanie do koszyka, 
                  proces płatności, panel administracyjny i więcej.
                </p>
                <a
                  href="https://demo-sklep.jestemprogramista.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-8 py-4 text-lg font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Globe className="w-5 h-5" />
                  OTWÓRZ DEMO SKLEPU
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-4">Dane testowe do panelu admin:</h4>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#FF3B30]">
                  <p className="font-mono text-sm mb-2">
                    <strong>URL:</strong> demo-sklep.jestemprogramista.pl/admin
                  </p>
                  <p className="font-mono text-sm mb-2">
                    <strong>Login:</strong> demo
                  </p>
                  <p className="font-mono text-sm">
                    <strong>Hasło:</strong> demo123
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Dane są resetowane codziennie o północy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej Zadawane Pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące sklepów internetowych
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ile czasu zajmuje stworzenie sklepu internetowego?
              </h3>
              <p className="text-gray-700">
                Standardowy sklep internetowy realizujemy w 7-14 dni roboczych. 
                Czas zależy od złożoności projektu, liczby produktów i wymaganych integracji. 
                Sklepy premium mogą wymagać 3-4 tygodni.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Czy mogę samodzielnie dodawać produkty do sklepu?
              </h3>
              <p className="text-gray-700">
                Tak! Każdy sklep posiada intuicyjny panel administracyjny, gdzie możesz 
                dodawać produkty, zarządzać zamówieniami, śledzić statystyki i więcej. 
                Zapewniamy pełne szkolenie z obsługi.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Jakie systemy płatności są dostępne?
              </h3>
              <p className="text-gray-700">
                Integrujemy wszystkie popularne systemy płatności w Polsce: PayU, Przelewy24, 
                BLIK, płatności kartą, raty online, Google Pay, Apple Pay i więcej. 
                Wybieramy najlepsze opcje dla Twojej branży.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Czy sklep będzie zoptymalizowany pod SEO?
              </h3>
              <p className="text-gray-700">
                Absolutnie! Każdy sklep jest w pełni zoptymalizowany pod SEO - 
                struktura URL, meta tagi, schema markup, optymalizacja obrazów, 
                szybkość ładowania i więcej. Pomagamy osiągnąć wysokie pozycje w Google.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Co obejmuje wsparcie techniczne?
              </h3>
              <p className="text-gray-700">
                Wsparcie obejmuje: aktualizacje bezpieczeństwa, pomoc techniczną, 
                konsultacje biznesowe, optymalizację wydajności, backup danych, 
                monitoring i szybką pomoc w przypadku problemów.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gotowy na Zwiększenie Sprzedaży Online?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dołącz do 47+ zadowolonych klientów, którzy zwiększyli swoje obroty dzięki naszym sklepom internetowym
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/#kontakt"
              className="bg-[#FF3B30] text-white px-8 py-4 text-lg font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Zamawiam Sklep za 10,000 PLN
            </a>
            <a
              href="https://demo-sklep.jestemprogramista.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              Zobacz Demo
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Obsługujemy klientów w całej Polsce (zdalnie)</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Odpowiem w ciągu 2 godzin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
