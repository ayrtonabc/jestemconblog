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
  GraduationCap,
  Play,
  Download,
  BarChart3,
  Trophy,
  BookOpen,
  Video,
  FileText,
  CreditCard,
  Zap,
  Shield
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PlatformaKursow() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Platforma Kursów Online na Zamówienie | System Sprzedaży Kursów"
        description="Platforma e‑learningowa na zamówienie: wideo, quizy, certyfikaty, płatności. System do sprzedaży kursów online — cena i wdrożenie."
        canonicalPath="/platforma-kursow"
        image="/curso.webp"
        locale="pl_PL"
        preloadImages={["/curso.webp"]}
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
                name: 'Platforma Kursów Online',
                description: 'Platforma kursów z lekcjami wideo, quizami, certyfikatami i płatnościami online.',
                provider: {
                  '@type': 'Organization',
                  name: 'JestemProgramista.pl',
                  url: typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl'
                },
                areaServed: 'PL',
                offers: {
                  '@type': 'Offer',
                  price: '8000',
                  priceCurrency: 'PLN'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  reviewCount: '156'
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
                    name: 'Platforma Kursów',
                    item: (typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl') + '/platforma-kursow'
                  }
                ]
              })}</script>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-xl">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Platforma Kursów Online na Zamówienie
                  </h1>
                  <p className="text-xl opacity-90 mt-2">
                    Gotowy system edukacyjny online
                  </p>
                </div>
              </div>

              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Profesjonalna platforma do sprzedaży i prowadzenia kursów online 
                z systemem płatności, zarządzaniem użytkownikami i zaawansowaną analityką. 
                Zacznij zarabiać na swojej wiedzy już dziś!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>4.8 ★★★★★ (156 kursów)</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2" />
                  <span>25,000+ aktywnych uczniów</span>
                </div>
              </div>


            </div>

            <div className="relative">
              <img 
                src="/curso.webp" 
                alt="Platforma kursów online z panelem ucznia i instruktora" 
                className="w-full rounded-2xl shadow-2xl"
                decoding="async"
                fetchpriority="high"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-[#FF3B30]">8,000 PLN</div>
                <div className="text-sm text-gray-600">Pełne wdrożenie</div>
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
              Historie Sukcesu Platform Edukacyjnych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instruktorzy i firmy, które zamieniły wiedzę w dochody dzięki dedykowanej platformie kursów online
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/learning-success-stories.jpg" 
              alt="Historie sukcesu platform kursów online" 
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
                    <h3 className="text-xl font-bold text-gray-900">AKADEMIA IT MORĄG</h3>
                    <p className="text-gray-600">Kursy programowania</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2,500+</div>
                    <div className="text-sm text-gray-600">Uczniów rocznie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">180,000 PLN</div>
                    <div className="text-sm text-gray-600">Przychód roczny</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Platforma pozwoliła nam zautomatyzować sprzedaż kursów. 
                  System certyfikatów zwiększył wartość naszych szkoleń. ROI 400% w pierwszym roku!"
                </p>
                <p className="text-sm text-gray-600 mt-2">- Tomasz Kowalski, Założyciel</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">SZKOŁA JĘZYKÓW OSTRÓDA</h3>
                    <p className="text-gray-600">Kursy językowe online</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">45,000 PLN</div>
                    <div className="text-sm text-gray-600">Przychód miesięczny</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1,200+</div>
                    <div className="text-sm text-gray-600">Aktywnych uczniów</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Przeszliśmy z tradycyjnych lekcji na hybrydowy model. 
                  Platforma umożliwiła nam skalowanie bez dodatkowych sal. Wzrost o 300%!"
                </p>
                <p className="text-sm text-gray-600 mt-2">- Anna Nowak, Dyrektor</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AKADEMIA BIZNESU IŁAWA</h3>
                    <p className="text-gray-600">Szkolenia biznesowe</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">850</div>
                    <div className="text-sm text-gray-600">Certyfikatów wydanych</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm text-gray-600">Ukończalność kursów</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "System gamifikacji i forum społecznościowe zwiększyły zaangażowanie uczniów. 
                  Automatyczne certyfikaty oszczędzają nam 20 godzin tygodniowo."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Michał Wiśniewski, CEO</p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Statystyki Ogólne</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF3B30]">85+</div>
                    <div className="text-sm opacity-80">Platform uruchomionych</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF3B30]">25,000+</div>
                    <div className="text-sm opacity-80">Aktywnych uczniów</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF3B30]">2.8M PLN</div>
                    <div className="text-sm opacity-80">Łączny obrót klientów</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF3B30]">4.8/5</div>
                    <div className="text-sm opacity-80">Średnia satysfakcja</div>
                  </div>
                </div>
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
              Zaawansowane Funkcjonalności Platformy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wszystko czego potrzebujesz do profesjonalnego prowadzenia kursów online w jednym miejscu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zaawansowany Odtwarzacz Wideo</h3>
              <p className="text-gray-700 mb-4">
                Profesjonalny odtwarzacz z kontrolą dostępu, znakami wodnymi, 
                prędkością odtwarzania i automatycznym zapisem postępu.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ochrona przed pobieraniem</li>
                <li>• Znaki wodne z logo</li>
                <li>• Automatyczny zapis postępu</li>
                <li>• Napisy i transkrypcje</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Certyfikatów</h3>
              <p className="text-gray-700 mb-4">
                Automatyczne generowanie certyfikatów po ukończeniu kursu 
                z możliwością weryfikacji online i personalizacją.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automatyczne generowanie PDF</li>
                <li>• Weryfikacja online</li>
                <li>• Personalizowane szablony</li>
                <li>• Integracja z LinkedIn</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Płatności Online</h3>
              <p className="text-gray-700 mb-4">
                Integracja z popularnymi bramkami płatności, subskrypcje, 
                kody rabatowe i automatyczne faktury.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• PayU, Stripe, PayPal</li>
                <li>• Płatności jednorazowe i subskrypcje</li>
                <li>• Kody rabatowe i promocje</li>
                <li>• Automatyczne faktury</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zaawansowana Analityka</h3>
              <p className="text-gray-700 mb-4">
                Szczegółowe raporty o postępach uczniów, popularności lekcji, 
                konwersji sprzedaży i zaangażowaniu.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Śledzenie postępów w czasie rzeczywistym</li>
                <li>• Analiza popularności treści</li>
                <li>• Raporty sprzedaży i konwersji</li>
                <li>• Heatmapy zaangażowania</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gamifikacja</h3>
              <p className="text-gray-700 mb-4">
                System punktów, odznak, rankingów i wyzwań zwiększających 
                zaangażowanie i motywację uczniów.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• System punktów i poziomów</li>
                <li>• Odznaki za osiągnięcia</li>
                <li>• Rankingi i konkursy</li>
                <li>• Wyzwania tygodniowe</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Forum i Społeczność</h3>
              <p className="text-gray-700 mb-4">
                Zintegrowane forum dyskusyjne, czat na żywo, grupy studyjne 
                i system mentoringu.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Forum z kategoriami</li>
                <li>• Czat na żywo z instruktorem</li>
                <li>• Grupy studyjne</li>
                <li>• System Q&A</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Przetestuj Platformę na Żywo
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Sprawdź wszystkie funkcjonalności w pełni działającej platformie. 
            Zaloguj się jako instruktor lub uczeń i zobacz możliwości systemu.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Panel Instruktora</h3>
              <div className="bg-black/30 p-4 rounded-lg mb-6 font-mono text-left">
                <div>URL: demo-kursy.jestemprogramista.pl/instructor</div>
                <div>Login: instruktor</div>
                <div>Hasło: demo2024</div>
              </div>
              <p className="text-gray-300">
                Pełny dostęp do tworzenia kursów, zarządzania uczniami, 
                analityki i systemu płatności.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Panel Ucznia</h3>
              <div className="bg-black/30 p-4 rounded-lg mb-6 font-mono text-left">
                <div>URL: demo-kursy.jestemprogramista.pl</div>
                <div>Login: uczen</div>
                <div>Hasło: demo2024</div>
              </div>
              <p className="text-gray-300">
                Przetestuj uczenie się, forum, system punktów 
                i pobieranie certyfikatów z perspektywy ucznia.
              </p>
            </div>
          </div>

          <a
            href="https://demo-kursy.jestemprogramista.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF3B30] text-white px-12 py-5 text-xl font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Otwórz Demo Platformy
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
              Od pierwszej konsultacji do uruchomienia Twojej platformy edukacyjnej
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Analiza Potrzeb</h3>
              <p className="text-gray-600 text-sm">
                Bezpłatna konsultacja i analiza Twojej tematyki. 
                Określamy strukturę kursów i model biznesowy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalizacja</h3>
              <p className="text-gray-600 text-sm">
                Dostosowujemy design, branding i funkcjonalności 
                do Twojej marki i specyfiki branży.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Konfiguracja</h3>
              <p className="text-gray-600 text-sm">
                Konfigurujemy płatności, certyfikaty, 
                integracje i wszystkie funkcjonalności platformy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Import Treści</h3>
              <p className="text-gray-600 text-sm">
                Pomagamy w przeniesieniu istniejących materiałów 
                i tworzeniu pierwszego kursu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Szkolenia</h3>
              <p className="text-gray-600 text-sm">
                Szkolimy Cię z obsługi platformy, 
                tworzenia kursów i zarządzania uczniami.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                6
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Uruchomienie</h3>
              <p className="text-gray-600 text-sm">
                Pełne uruchomienie platformy z wsparciem 
                marketingowym i technicznym.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Czas Wdrożenia: 10-14 Dni
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Od podpisania umowy do pełnego uruchomienia Twojej platformy edukacyjnej. 
                Większość czasu to personalizacja i przygotowanie pierwszych kursów.
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
              Wybierz pakiet dopasowany do wielkości i ambicji Twojej platformy edukacyjnej
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">6,000 PLN</div>
                <p className="text-gray-600">Dla początkujących instruktorów</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Do 5 kursów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Do 100 uczniów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Podstawowy odtwarzacz wideo
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  System płatności
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Certyfikaty PDF
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
                  RECOMENDADO
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-[#FF3B30] mb-2">8,000 PLN</div>
                <p className="text-gray-600">Dla profesjonalnych instruktorów</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Nieograniczona liczba kursów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Do 1,000 uczniów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zaawansowany odtwarzacz
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  System gamifikacji
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Forum i społeczność
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Zaawansowana analityka
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
                <div className="text-4xl font-bold text-gray-900 mb-2">15,000 PLN</div>
                <p className="text-gray-600">Dla dużych organizacji</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Nieograniczona liczba uczniów
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  White-label (własny branding)
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  Aplikacja mobilna
                </li>
                <li className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-3" />
                  API i integracje
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej Zadawane Pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące platformy kursów online
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy mogę przenieść istniejące kursy na platformę?
              </h3>
              <p className="text-gray-700">
                Tak, pomagamy w migracji istniejących materiałów z innych platform (Udemy, Teachable, 
                własne rozwiązania). Obsługujemy różne formaty wideo, dokumenty PDF, prezentacje 
                i inne materiały edukacyjne.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Jakie prowizje pobieracie od sprzedaży?
              </h3>
              <p className="text-gray-700">
                Nie pobieramy żadnych prowizji od Twojej sprzedaży! Płacisz tylko jednorazowo za 
                wdrożenie platformy i opcjonalnie miesięczną opłatę za hosting (99-299 PLN). 
                Wszystkie przychody ze sprzedaży kursów trafiają bezpośrednio na Twoje konto.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy platforma jest zabezpieczona przed piractwem?
              </h3>
              <p className="text-gray-700">
                Tak, implementujemy zaawansowane zabezpieczenia: znaki wodne na wideo, 
                ochrona przed pobieraniem, ograniczenia IP, szyfrowanie treści i monitoring 
                podejrzanej aktywności. Twoje kursy są maksymalnie chronione.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ile uczniów może korzystać z platformy jednocześnie?
              </h3>
              <p className="text-gray-700">
                Platforma jest skalowalna i obsługuje tysiące równoczesnych użytkowników. 
                W pakiecie Professional limit to 1,000 aktywnych uczniów, w Enterprise - bez limitów. 
                Infrastruktura automatycznie skaluje się według potrzeb.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy mogę sprzedawać kursy w modelu subskrypcji?
              </h3>
              <p className="text-gray-700">
                Tak, platforma obsługuje różne modele biznesowe: płatność jednorazowa, 
                subskrypcje miesięczne/roczne, dostęp dożywotni, płatności ratalne i kody rabatowe. 
                Możesz łączyć różne modele dla różnych kursów.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Czy otrzymam wsparcie w marketingu platformy?
              </h3>
              <p className="text-gray-700">
                Tak, w ramach wdrożenia otrzymujesz: optymalizację SEO, integrację z Google Analytics, 
                konfigurację pikseli Facebook/Google Ads, szablony email marketingu i strategię 
                content marketingu. Dodatkowo doradzamy w promocji pierwszych kursów.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF6B47] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Zacznij Zarabiać na Swojej Wiedzy Już Dziś!
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Dołącz do 85+ instruktorów, którzy zbudowali pasywny dochód dzięki naszej platformie. 
            Bezpłatna konsultacja i wycena w 24 godziny!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="/#kontakt"
              className="bg-white text-[#FF3B30] px-8 py-4 text-lg font-bold rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Zamawiam Platformę za 8,000 PLN
            </a>
            <a
              href="https://demo-kursy.jestemprogramista.pl"
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
