import { 
  ArrowLeft, 
  Check, 
  Star, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Utensils,
  CreditCard,
  BarChart3,
  Smartphone,
  Calendar,
  ShoppingCart,
  Zap,
  Shield
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function SystemRestauracyjny() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="System Restauracyjny dla Gastronomii | POS i Zamówienia Online"
        description="Kompleksowy system POS dla gastronomii: zamówienia online, aplikacja mobilna, płatności i analityka sprzedaży — wdrożenie i cena."
        canonicalPath="/system-restauracyjny"
        image="/restaurant.webp"
        locale="pl_PL"
        preloadImages={["/restaurant.webp"]}
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B47] text-white pt-32 pb-20 px-6">
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
                name: 'System Restauracyjny POS',
                description: 'Kompleksowy system POS dla restauracji: zarządzanie stolikami, aplikacja mobilna, płatności online, analityka sprzedaży.',
                provider: {
                  '@type': 'Organization',
                  name: 'JestemProgramista.pl',
                  url: typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl'
                },
                areaServed: 'PL',
                offers: {
                  '@type': 'Offer',
                  price: '7200',
                  priceCurrency: 'PLN'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
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
                    name: 'System Restauracyjny',
                    item: (typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl') + '/system-restauracyjny'
                  }
                ]
              })}</script>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-xl">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    System Restauracyjny dla Gastronomii
                  </h1>
                  <p className="text-xl opacity-90 mt-2">
                    Kompleksowe rozwiązanie POS dla restauracji
                  </p>
                </div>
              </div>

              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Profesjonalny system zarządzania restauracją z aplikacją mobilną, 
                systemem płatności i zaawansowaną analityką. Zwiększ obroty o 40% 
                dzięki automatyzacji procesów.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>4.9 ★★★★★ (89 restauracji)</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  <span>150+ wdrożeń w Polsce</span>
                </div>
              </div>


            </div>

            <div className="relative">
              <img 
                src="/restaurant.webp" 
                alt="System POS dla restauracji z tabletem i aplikacją mobilną" 
                className="w-full rounded-2xl shadow-2xl"
                decoding="async"
                fetchpriority="high"
                sizes="(min-width: 1024px) 50vw, 100vw"
                width="1600"
                height="1000"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-[#FF3B30]">7,200 PLN</div>
                <div className="text-sm text-gray-600">Pełna implementacja</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Historie Sukcesu Restauracji
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restauracje, które zwiększyły przychody dzięki naszemu systemowi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">RESTAURACJA MAZURSKA</h3>
                  <p className="text-sm text-gray-600">Kuchnia regionalna</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">+45%</div>
                  <div className="text-xs text-gray-600">Wzrost obrotów</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">35k PLN</div>
                  <div className="text-xs text-gray-600">Miesięczny przychód</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                "System zwiększył zamówienia na wynos o 60%. Obsługujemy 3x więcej klientów."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">PIZZA CORNER</h3>
                  <p className="text-sm text-gray-600">Fast food premium</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">28k PLN</div>
                  <div className="text-xs text-gray-600">Przychód miesięczny</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">-30%</div>
                  <div className="text-xs text-gray-600">Czas obsługi</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                "Zarządzanie stolami stało się proste. Analityka pomogła zoptymalizować menu."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">BISTRO ELEGANCE</h3>
                  <p className="text-sm text-gray-600">Fine dining</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">42k PLN</div>
                  <div className="text-xs text-gray-600">Przychód miesięczny</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-600">Satysfakcja gości</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">
                "Rezerwacje online zwiększyły rotację o 25%. System płatności jest błyskawiczny."
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Statystyki Ogólne</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF3B30]">150+</div>
                <div className="text-sm opacity-80">Wdrożonych systemów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF3B30]">+38%</div>
                <div className="text-sm opacity-80">Średni wzrost obrotów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF3B30]">4.9/5</div>
                <div className="text-sm opacity-80">Ocena zadowolenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF3B30]">24/7</div>
                <div className="text-sm opacity-80">Wsparcie techniczne</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              System POS dla gastronomii – funkcjonalności
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wszystko czego potrzebujesz do profesjonalnego zarządzania restauracją
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">System POS</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Intuicyjny punkt sprzedaży z obsługą dotykową i automatycznym obliczaniem rachunków.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Obsługa dotykowa na tabletach</li>
                <li>• Automatyczne obliczanie VAT</li>
                <li>• Drukowanie paragonów i faktur</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Aplikacja Mobilna</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Aplikacja dla klientów z zamawianiem i rezerwacją stolików.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Zamówienia na wynos/dowóz</li>
                <li>• Rezerwacja stolików online</li>
                <li>• Program lojalnościowy</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Płatności Online</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Integracja z BLIK, kartami i płatnościami mobilnymi.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• BLIK, karty, przelewy</li>
                <li>• Apple Pay, Google Pay</li>
                <li>• Płatności przy stoliku</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Zarządzanie Stolikami</h3>
              <p className="text-gray-700 mb-3 text-sm">
                System rezerwacji z wizualizacją sali i planowaniem obsady.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Mapa stolików w czasie rzeczywistym</li>
                <li>• Rezerwacje online i telefoniczne</li>
                <li>• Optymalizacja rotacji stolików</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Analityka Sprzedaży</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Szczegółowe raporty sprzedaży i analizy menu.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Raporty w czasie rzeczywistym</li>
                <li>• Analiza popularności dań</li>
                <li>• Kontrola kosztów i marż</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Zarządzanie Menu</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Łatwe aktualizowanie menu i kontrola dostępności dań.
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Cyfrowe menu z zdjęciami</li>
                <li>• Zarządzanie składnikami</li>
                <li>• Dynamiczne ceny i promocje</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Przetestuj System na Żywo
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Sprawdź wszystkie funkcjonalności w pełni działającym demo. 
            Zaloguj się jako manager restauracji lub klient aplikacji mobilnej.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Panel Managera</h3>
              <div className="bg-black/30 p-4 rounded-lg mb-6 font-mono text-left">
                <div>URL: demo-restaurant.jestemprogramista.pl/admin</div>
                <div>Login: manager</div>
                <div>Hasło: demo2024</div>
              </div>
              <p className="text-gray-300">
                Pełny dostęp do systemu POS, zarządzania menu, 
                rezerwacji i analityki sprzedaży.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Aplikacja Klienta</h3>
              <div className="bg-black/30 p-4 rounded-lg mb-6 font-mono text-left">
                <div>URL: demo-restaurant.jestemprogramista.pl</div>
                <div>Login: klient</div>
                <div>Hasło: demo2024</div>
              </div>
              <p className="text-gray-300">
                Przetestuj zamawianie, rezerwację stolików 
                i płatności online z perspektywy klienta.
              </p>
            </div>
          </div>

          <a
            href="https://demo-restaurant.jestemprogramista.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF3B30] text-white px-12 py-5 text-xl font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Otwórz Demo Systemu
          </a>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces Wdrożenia w 6 Krokach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Od pierwszej konsultacji do pełnego uruchomienia systemu w Twojej restauracji
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Analiza Potrzeb</h3>
              <p className="text-gray-600 text-sm">
                Bezpłatna konsultacja i analiza specyfiki Twojej restauracji. 
                Określamy wymagania i funkcjonalności.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Konfiguracja</h3>
              <p className="text-gray-600 text-sm">
                Dostosowujemy system do Twojego menu, układu sali, 
                procesów i brandingu restauracji.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Integracje</h3>
              <p className="text-gray-600 text-sm">
                Łączymy system z kasą fiskalną, terminalem płatniczym 
                i systemami księgowymi.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Szkolenia</h3>
              <p className="text-gray-600 text-sm">
                Szkolimy Twoją załogę z obsługi systemu POS, 
                zarządzania zamówieniami i rezerwacjami.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Testy</h3>
              <p className="text-gray-600 text-sm">
                Przeprowadzamy testy wszystkich funkcjonalności 
                w środowisku produkcyjnym przed uruchomieniem.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                6
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Uruchomienie</h3>
              <p className="text-gray-600 text-sm">
                Pełne uruchomienie systemu z 24/7 wsparciem technicznym 
                przez pierwsze 30 dni.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Czas Wdrożenia: 14-21 Dni
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Od podpisania umowy do pełnego uruchomienia systemu w Twojej restauracji. 
                Większość czasu to konfiguracja i szkolenia - nie przerywamy pracy restauracji.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Przejrzyste Ceny Bez Ukrytych Kosztów
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wybierz pakiet dopasowany do wielkości i potrzeb Twojej restauracji
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">5,200 PLN</div>
                <p className="text-gray-600">Dla małych restauracji</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  System POS na 1 stanowisko
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zarządzanie menu (do 50 pozycji)
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Podstawowe raporty
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Integracja z kasą fiskalną
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wsparcie 6 miesięcy
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-gray-900 text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Wybierz Starter
                </a>
              </div>
            </div>

            {/* Standard - Recommended */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-[#FF3B30] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FF3B30] text-white px-6 py-2 rounded-full text-sm font-bold">
                  POLECANY
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-[#FF3B30] mb-2">7,200 PLN</div>
                <p className="text-gray-600">Dla średnich restauracji</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  System POS na 3 stanowiska
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Aplikacja mobilna dla klientów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zarządzanie stolikami
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Płatności online (BLIK, karty)
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zaawansowana analityka
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Program lojalnościowy
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wsparcie 12 miesięcy
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-[#FF3B30] text-white px-8 py-4 text-lg font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Wybierz Professional
                </a>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">12,000 PLN</div>
                <p className="text-gray-600">Dla dużych restauracji</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Nieograniczona liczba stanowisk
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Multi-lokalizacja
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zaawansowane integracje
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  API dla zewnętrznych systemów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Dedykowany account manager
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wsparcie 24/7
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-gray-900 text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Skontaktuj się
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <script type="application/ld+json">{JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Czy system działa offline?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tak, system POS działa w trybie offline. Wszystkie transakcje są zapisywane lokalnie i synchronizowane z chmurą po przywróceniu połączenia internetowego. Gwarantuje to ciągłość pracy nawet przy problemach z internetem.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jakie urządzenia są potrzebne?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'System działa na tabletach z systemem Android lub iPad, komputerach PC/Mac oraz smartfonach. Dodatkowo potrzebujesz kasy fiskalnej, drukarki paragonów i terminala płatniczego - pomożemy w doborze sprzętu.'
                }
              },
              {
                '@type': 'Question',
                name: 'Czy mogę zintegrować system z moją obecną kasą?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tak, system integruje się z większością kas fiskalnych dostępnych na polskim rynku (Posnet, Novitus, Elzab). Sprawdzimy kompatybilność podczas konsultacji i pomożemy w konfiguracji.'
                }
              },
              {
                '@type': 'Question',
                name: 'Ile kosztuje miesięczne utrzymanie systemu?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Miesięczne koszty to 99-299 PLN w zależności od pakietu i liczby stanowisk. W cenie: hosting w chmurze, aktualizacje systemu, wsparcie techniczne i backup danych. Brak ukrytych opłat.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jak długo trwa wdrożenie systemu?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Standardowe wdrożenie trwa 14-21 dni roboczych. Obejmuje to konfigurację systemu, integracje, szkolenia załogi i testy. Większość prac wykonujemy zdalnie, minimalizując zakłócenia w pracy restauracji.'
                }
              },
              {
                '@type': 'Question',
                name: 'Czy otrzymam wsparcie techniczne?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tak, zapewniamy pełne wsparcie techniczne przez telefon, email i zdalny dostęp. W pakiecie Professional i Enterprise dostępne jest wsparcie 24/7. Dodatkowo oferujemy regularne szkolenia i aktualizacje systemu.'
                }
              }
            ]
          })}</script>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej Zadawane Pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące systemu restauracyjnego
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy system działa offline?
              </h3>
              <p className="text-gray-700">
                Tak, system POS działa w trybie offline. Wszystkie transakcje są zapisywane 
                lokalnie i synchronizowane z chmurą po przywróceniu połączenia internetowego. 
                Gwarantuje to ciągłość pracy nawet przy problemach z internetem.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Jakie urządzenia są potrzebne?
              </h3>
              <p className="text-gray-700">
                System działa na tabletach z systemem Android lub iPad, komputerach PC/Mac 
                oraz smartfonach. Dodatkowo potrzebujesz kasy fiskalnej, drukarki paragonów 
                i terminala płatniczego - pomożemy w doborze sprzętu.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy mogę zintegrować system z moją obecną kasą?
              </h3>
              <p className="text-gray-700">
                Tak, system integruje się z większością kas fiskalnych dostępnych na polskim 
                rynku (Posnet, Novitus, Elzab). Sprawdzimy kompatybilność podczas konsultacji 
                i pomożemy w konfiguracji.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ile kosztuje miesięczne utrzymanie systemu?
              </h3>
              <p className="text-gray-700">
                Miesięczne koszty to 99-299 PLN w zależności od pakietu i liczby stanowisk. 
                W cenie: hosting w chmurze, aktualizacje systemu, wsparcie techniczne 
                i backup danych. Brak ukrytych opłat.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Jak długo trwa wdrożenie systemu?
              </h3>
              <p className="text-gray-700">
                Standardowe wdrożenie trwa 14-21 dni roboczych. Obejmuje to konfigurację systemu, 
                integracje, szkolenia załogi i testy. Większość prac wykonujemy zdalnie, 
                minimalizując zakłócenia w pracy restauracji.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy otrzymam wsparcie techniczne?
              </h3>
              <p className="text-gray-700">
                Tak, zapewniamy pełne wsparcie techniczne przez telefon, email i zdalny dostęp. 
                W pakiecie Professional i Enterprise dostępne jest wsparcie 24/7. 
                Dodatkowo oferujemy regularne szkolenia i aktualizacje systemu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B47] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Gotowy na Rewolucję w Twojej Restauracji?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Dołącz do 150+ restauracji, które zwiększyły obroty dzięki naszemu systemowi. 
            Bezpłatna konsultacja i wycena w 24 godziny!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="/#kontakt"
              className="bg-white text-[#FF3B30] px-8 py-4 text-lg font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Zamawiam System za 7,200 PLN
            </a>
            <a
              href="https://demo-restaurant.jestemprogramista.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-white hover:text-[#FF3B30] transition-all"
            >
              Zobacz Demo
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-gray-200">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+48 517 105 423</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>kontakt@jestemprogramista.pl</span>
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