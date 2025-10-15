import { Check, Code, Wrench, Database } from 'lucide-react';

export default function Services() {
  return (
    <section id="uslugi" className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Programista PHP na Godziny</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rozwijam, optymalizuję i utrzymuję systemy internetowe. Programista na godziny 
            specjalizujący się w tworzeniu rozwiązań dopasowanych do Twoich potrzeb.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#F8F9FA] p-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FF3B30] w-16 h-16 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Rozwiązywanie Problemów</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Wielu klientów ma systemy stworzone przez programistów, którzy pracują powierzchownie z szablonami,
              ale gdy pojawiają się złożone problemy, potrzebują eksperta, który rozumie architekturę i może rozwiązać
              problemy u źródła.
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Profesjonalna diagnostyka krytycznych błędów</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Trwałe rozwiązania, nie tymczasowe poprawki</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Optymalizacja istniejącego kodu</span>
              </li>
            </ul>
            
            <div className="text-4xl font-extrabold mb-4">
              od 250 PLN
            </div>
            <p className="text-sm text-gray-600 mb-6">Cena za projekt, w zależności od złożoności</p>
            
            <a
              href="#kontakt"
              className="block w-full text-center py-4 font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Zamów Diagnozę
            </a>
          </div>
          
          <div className="bg-[#F8F9FA] p-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-black w-16 h-16 flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ulepszenia i Zmiany</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Potrzebujesz wdrożyć nowe funkcje lub zmodyfikować istniejący system?
              Programista z głęboką znajomością architektury może wprowadzać zmiany
              zachowując integralność i wydajność Twojej aplikacji.
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Wdrażanie nowych funkcjonalności</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Modernizacja starszych systemów</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Integracja z nowymi technologiami</span>
              </li>
            </ul>
            
            <div className="text-4xl font-extrabold mb-4">
              od 1000 PLN
            </div>
            <p className="text-sm text-gray-600 mb-6">Cena za projekt, w zależności od zakresu</p>
            
            <a
              href="#kontakt"
              className="block w-full text-center py-4 font-medium bg-[#FF3B30] text-white hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Poproś o Wycenę
            </a>
          </div>
        </div>
        
        <div className="bg-black text-white p-10 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Database className="w-10 h-10 text-[#FF3B30]" />
            <h3 className="text-3xl font-bold">Specjalistyczne Wsparcie Techniczne</h3>
          </div>
          
          <p className="text-gray-300 mb-8">
            W przeciwieństwie do deweloperów, którzy pracują tylko z szablonami, oferuję profesjonalne
            rozwiązania oparte na głębokiej znajomości architektury oprogramowania. Rozwiązuję
            problemy u źródła, a nie tylko stosując tymczasowe poprawki.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-[#FF3B30]">Doświadczenie Techniczne</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Zaawansowana architektura oprogramowania</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Optymalizacja wydajności</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Bezpieczeństwo i ochrona danych</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Rozwiązywanie złożonych problemów</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-[#FF3B30]">Korzyści</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Trwałe rozwiązania, nie tymczasowe</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Czysty i łatwy w utrzymaniu kod</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Ciągłe doskonalenie systemów</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <span>Profesjonalne doradztwo techniczne</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="#kontakt"
              className="inline-block px-8 py-4 font-medium bg-[#FF3B30] text-white hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Skontaktuj Się Teraz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
