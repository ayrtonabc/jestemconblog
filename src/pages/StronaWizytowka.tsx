import { ArrowLeft, Check, Globe, Star, Users, TrendingUp, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function StronaWizytowka() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Strona Internetowa i Wizytówka dla Firmy | Tworzenie Stron WWW | Cena"
        description="Projektowanie stron internetowych i wizytówek: nowoczesna, szybka strona www. Strona internetowa cena, panel administracyjny i wsparcie – pozyskaj więcej klientów."
        canonicalPath="/strona-wizytowka"
        image="/wizytowka-mockup.jpg"
        locale="pl_PL"
        preloadImages={["/wizytowka-mockup.jpg"]}
      />
      {/* Header with navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a
            href="/#rozwiazania"
            className="inline-flex items-center text-gray-600 hover:text-[#FF3B30] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Powrót do rozwiązań
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B6B] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Schema.org JSON-LD for Service */}
            <script type="application/ld+json">{JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Strona Wizytówka Premium',
              description: 'Profesjonalna, szybka i responsywna strona wizytówka zoptymalizowana pod SEO.',
              provider: {
                '@type': 'Organization',
                name: 'JestemProgramista.pl',
                url: typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl'
              },
              areaServed: 'PL',
              offers: {
                '@type': 'Offer',
                price: '2000',
                priceCurrency: 'PLN'
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
                  name: 'Strona Wizytówka',
                  item: (typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl') + '/strona-wizytowka'
                }
              ]
            })}</script>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Strona Wizytówka Która <span className="text-yellow-300">Sprzedaje</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Profesjonalna strona internetowa dla Twojej firmy. 
                Zwiększ swoją obecność online i pozyskaj więcej klientów dzięki 
                nowoczesnej, responsywnej stronie wizytówce zoptymalizowanej pod SEO.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>5.0 ★★★★★ (127 opinii)</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  <span>500+ zadowolonych klientów</span>
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
                  src="/visita.webp" 
                  alt="Mockup strony wizytówki na różnych urządzeniach" 
                  className="w-full"
                  decoding="async"
                  fetchpriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  width="1600"
                  height="1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg">
                ✓ Gotowa w 7 dni
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strona wizytówka – prawdziwe rezultaty naszych klientów
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zobacz jak strona wizytówka zmieniła biznes lokalnych przedsiębiorców w całej Polsce
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/business-growth.jpg" 
                alt="Wykres wzrostu sprzedaży dzięki stronie wizytówce" 
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 50vw, 100vw"
                width="1200"
                height="800"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Salon Fryzjerski "Elegancja"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    "Po uruchomieniu strony wizytówki liczba nowych klientów wzrosła o 400%. 
                    Teraz ludzie znajdują nas w Google i dzwonią codziennie!"
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    +400% nowych klientów w 3 miesiące
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Warsztat Samochodowy "AutoExpert"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    "Strona pomogła nam dotrzeć do klientów z całego powiatu. 
                    Rezerwacje online to rewolucja w naszym biznesie!"
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <Award className="w-5 h-5 mr-2" />
                    #1 warsztat w Google dla "naprawa aut Morąg"
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Restauracja "Mazurska Chata"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    "Menu online i możliwość rezerwacji stolików przez stronę 
                    zwiększyły nasze obroty o 250% w sezonie letnim!"
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <Users className="w-5 h-5 mr-2" />
                    +250% wzrost obrotów w sezonie
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
              Strona wizytówka – co otrzymujesz w pakiecie (cena 2,000 PLN)
            </h2>
            <p className="text-xl text-gray-600">
              Kompletne rozwiązanie dla Twojego biznesu - wszystko czego potrzebujesz w jednej cenie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FF3B30] rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design Responsywny</h3>
              <p className="text-gray-600 mb-4">
                Twoja strona będzie wyglądać perfekcyjnie na komputerach, tabletach i telefonach. 
                Nowoczesny design dostosowany do Twojej branży.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Optymalizacja mobilna</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Szybkie ładowanie</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Nowoczesny wygląd</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optymalizacja SEO</h3>
              <p className="text-gray-600 mb-4">
                Twoja strona będzie widoczna w Google dla klientów z całej Polski. 
                Profesjonalna optymalizacja pod lokalne wyszukiwania.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Lokalne SEO Ostróda</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Google My Business</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Mapa Google</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hosting i Bezpieczeństwo</h3>
              <p className="text-gray-600 mb-4">
                Bezpieczny hosting na 12 miesięcy w cenie, certyfikat SSL, 
                automatyczne kopie zapasowe i monitoring 24/7.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Hosting na rok</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Certyfikat SSL</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Kopie zapasowe</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formularz Kontaktowy</h3>
              <p className="text-gray-600 mb-4">
                Zaawansowany formularz kontaktowy z powiadomieniami email, 
                automatycznymi odpowiedziami i integracją z CRM.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Powiadomienia email</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Automatyczne odpowiedzi</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Ochrona przed spamem</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Panel Administracyjny</h3>
              <p className="text-gray-600 mb-4">
                Prosty panel do zarządzania treścią, zdjęciami i informacjami kontaktowymi. 
                Bez znajomości programowania!
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Edycja treści</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Galeria zdjęć</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Statystyki odwiedzin</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wsparcie Techniczne</h3>
              <p className="text-gray-600 mb-4">
                Pełne wsparcie techniczne przez 12 miesięcy, aktualizacje, 
                pomoc w obsłudze i konsultacje marketingowe.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Wsparcie 12 miesięcy</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Aktualizacje</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Konsultacje</li>
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
              Jak Wygląda Proces Tworzenia Strony?
            </h2>
            <p className="text-xl text-gray-600">
              Prosty, przejrzysty proces - od pierwszego kontaktu do uruchomienia strony
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Konsultacja</h3>
              <p className="text-gray-600 text-sm">
                Bezpłatna konsultacja telefoniczna lub spotkanie w Ostródzie. 
                Omawiamy Twoje potrzeby i cele biznesowe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Projekt</h3>
              <p className="text-gray-600 text-sm">
                Tworzymy projekt graficzny dostosowany do Twojej branży. 
                Możesz wprowadzić poprawki i sugestie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kodowanie</h3>
              <p className="text-gray-600 text-sm">
                Programujemy stronę używając najnowszych technologii. 
                Optymalizujemy pod SEO i szybkość ładowania.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Testy</h3>
              <p className="text-gray-600 text-sm">
                Testujemy stronę na wszystkich urządzeniach i przeglądarkach. 
                Sprawdzamy formularz i wszystkie funkcjonalności.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Uruchomienie</h3>
              <p className="text-gray-600 text-sm">
                Uruchamiamy stronę na serwerze, konfigurujemy domeny i 
                przekazujemy Ci dostępy do panelu administracyjnego.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ⚡ Ekspresowa Realizacja
              </h3>
              <p className="text-green-700 text-lg">
                Standardowy czas realizacji: <strong>7-10 dni roboczych</strong><br/>
                Opcja ekspresowa (3-5 dni): <strong>+500 PLN</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="zamow" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Przejrzysta Wycena - Bez Ukrytych Kosztów
            </h2>
            <p className="text-xl opacity-90">
              Jedna cena, wszystko w pakiecie. Porównaj z konkurencją!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Competitor comparison */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-300 mb-2">Typowa Konkurencja</h3>
                <div className="text-3xl font-bold text-gray-400">3,500+ PLN</div>
                <p className="text-gray-500 text-sm">+ ukryte koszty</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-400">
                  <span className="w-5 h-5 mr-3 text-red-400">✗</span>
                  Projekt graficzny: +800 PLN
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-5 h-5 mr-3 text-red-400">✗</span>
                  Hosting: +300 PLN/rok
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-5 h-5 mr-3 text-red-400">✗</span>
                  SEO: +500 PLN
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-5 h-5 mr-3 text-red-400">✗</span>
                  Wsparcie: +200 PLN/mies.
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-5 h-5 mr-3 text-red-400">✗</span>
                  Czas realizacji: 3-4 tygodnie
                </li>
              </ul>
              
              <div className="text-center">
                <div className="bg-gray-700 text-gray-400 px-6 py-3 rounded-lg">
                  Standardowa oferta
                </div>
              </div>
            </div>

            {/* Our offer */}
            <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B6B] p-8 rounded-2xl relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                  NAJLEPSZA OFERTA
                </div>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">JestemProgramista.pl</h3>
                <div className="text-5xl font-bold">2,000 PLN</div>
                <p className="text-white/80 text-sm">jednorazowo, wszystko w cenie</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Projekt graficzny GRATIS
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Hosting na 12 miesięcy GRATIS
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Optymalizacja SEO GRATIS
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Wsparcie 12 miesięcy GRATIS
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Realizacja w 7 dni
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Panel administracyjny
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Certyfikat SSL
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-300" />
                  Responsywny design
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

            {/* Premium option */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Pakiet Premium</h3>
                <div className="text-3xl font-bold">3,500 PLN</div>
                <p className="text-gray-400 text-sm">rozszerzona funkcjonalność</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Wszystko z pakietu Standard
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Blog z panelem CMS
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Galeria zdjęć
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  System rezerwacji online
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Integracja z social media
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Google Analytics
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Mapa Google
                </li>
              </ul>
              
              <div className="text-center">
                <a
                  href="/#kontakt"
                  className="block bg-yellow-400 text-gray-900 px-6 py-3 text-lg font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <script type="application/ld+json">{JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Czy mogę samodzielnie edytować treść na stronie?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tak! Każda strona wizytówka zawiera prosty panel administracyjny, dzięki któremu możesz samodzielnie zmieniać teksty, zdjęcia, dane kontaktowe i inne informacje. Nie potrzebujesz znajomości programowania.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jak długo trwa realizacja strony wizytówki?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Standardowy czas realizacji to 7-10 dni roboczych od momentu podpisania umowy i otrzymania materiałów (teksty, zdjęcia). Oferujemy również opcję ekspresową (3-5 dni) za dodatkową opłatą 500 PLN.'
                }
              },
              {
                '@type': 'Question',
                name: 'Czy strona będzie widoczna w Google?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutnie! Każda strona jest profesjonalnie zoptymalizowana pod SEO, szczególnie pod wyszukiwania w całej Polsce. Dodatkowo pomożemy Ci założyć profil Google My Business.'
                }
              },
              {
                '@type': 'Question',
                name: 'Co jeśli będę potrzebować zmian po uruchomieniu?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Przez pierwsze 30 dni oferujemy nieograniczone drobne poprawki i zmiany. Po tym okresie świadczymy wsparcie techniczne przez cały rok w ramach ceny. Większe zmiany wyceniamy indywidualnie.'
                }
              },
              {
                '@type': 'Question',
                name: 'Czy hosting jest naprawdę darmowy przez rok?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tak! W cenie 2,000 PLN masz hosting na profesjonalnych serwerach przez pełne 12 miesięcy, certyfikat SSL, kopie zapasowe i monitoring. Po roku koszt hostingu to tylko 200 PLN rocznie.'
                }
              },
              {
                '@type': 'Question',
                name: 'Czy mogę zobaczyć przykłady Waszych realizacji?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oczywiście! Mamy portfolio ponad 500 zrealizowanych projektów. Chętnie pokażemy Ci przykłady stron z Twojej branży podczas bezpłatnej konsultacji. Skontaktuj się z nami!'
                }
              }
            ]
          })}</script>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej Zadawane Pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania, które zadają nam klienci z całej Polski
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Czy mogę samodzielnie edytować treść na stronie?
              </h3>
              <p className="text-gray-600">
                Tak! Każda strona wizytówka zawiera prosty panel administracyjny, 
                dzięki któremu możesz samodzielnie zmieniać teksty, zdjęcia, 
                dane kontaktowe i inne informacje. Nie potrzebujesz znajomości programowania.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Jak długo trwa realizacja strony wizytówki?
              </h3>
              <p className="text-gray-600">
                Standardowy czas realizacji to 7-10 dni roboczych od momentu 
                podpisania umowy i otrzymania materiałów (teksty, zdjęcia). 
                Oferujemy również opcję ekspresową (3-5 dni) za dodatkową opłatą 500 PLN.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Czy strona będzie widoczna w Google?
              </h3>
              <p className="text-gray-600">
                Absolutnie! Każda strona jest profesjonalnie zoptymalizowana pod SEO, 
                szczególnie pod wyszukiwania w całej Polsce. 
                Dodatkowo pomożemy Ci założyć profil Google My Business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Co jeśli będę potrzebować zmian po uruchomieniu?
              </h3>
              <p className="text-gray-600">
                Przez pierwsze 30 dni oferujemy nieograniczone drobne poprawki i zmiany. 
                Po tym okresie świadczymy wsparcie techniczne przez cały rok w ramach ceny. 
                Większe zmiany wyceniamy indywidualnie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Czy hosting jest naprawdę darmowy przez rok?
              </h3>
              <p className="text-gray-600">
                Tak! W cenie 2,000 PLN masz hosting na profesjonalnych serwerach przez 
                pełne 12 miesięcy, certyfikat SSL, kopie zapasowe i monitoring. 
                Po roku koszt hostingu to tylko 200 PLN rocznie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Czy mogę zobaczyć przykłady Waszych realizacji?
              </h3>
              <p className="text-gray-600">
                Oczywiście! Mamy portfolio ponad 500 zrealizowanych projektów. 
                Chętnie pokażemy Ci przykłady stron z Twojej branży podczas 
                bezpłatnej konsultacji. Skontaktuj się z nami!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gradient-to-r from-[#FF3B30] to-[#FF6B6B] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gotowy na Zwiększenie Sprzedaży?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dołącz do 500+ zadowolonych klientów z Ostródy i okolic. 
            Bezpłatna konsultacja i wycena w 24 godziny!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center bg-white/20 p-4 rounded-lg">
              <Phone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-bold">Zadzwoń</div>
                <div className="text-sm opacity-90">+48 517 105 423</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center bg-white/20 p-4 rounded-lg">
              <Mail className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-bold">Napisz</div>
                <div className="text-sm opacity-90">kontakt@jestemprogramista.pl</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center bg-white/20 p-4 rounded-lg">
              <MapPin className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-bold">Spotkajmy się</div>
                <div className="text-sm opacity-90">Ostróda, Warmińsko-Mazurskie</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#kontakt"
              className="bg-white text-[#FF3B30] px-12 py-5 text-xl font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Zamawiam Stronę Wizytówkę
            </a>
            <a
              href="tel:+48517105423"
              className="border-2 border-white text-white px-12 py-5 text-xl font-bold rounded-lg hover:bg-white hover:text-[#FF3B30] transition-all"
            >
              Zadzwoń Teraz
            </a>
          </div>
          
          <p className="text-white/80 mt-6">
            ⚡ Odpowiem w ciągu 2 godzin • 🎯 Bezpłatna konsultacja • 💰 Gwarancja satysfakcji
          </p>
        </div>
      </div>
    </div>
  );
}
