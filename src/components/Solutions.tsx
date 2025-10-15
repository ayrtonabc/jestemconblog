import { ArrowRight, Store, Globe, GraduationCap, Utensils } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Globe,
      title: 'STRONA WIZYTÓWKA',
      subtitle: '',
      description: 'Profesjonalna strona wizytówka dla firm każdej wielkości. Nowoczesny design, zaawansowana optymalizacja SEO i pełna responsywność na wszystkich urządzeniach.',
      features: [],
      price: '2,000 PLN',
      demoUrl: '/strona-wizytowka',
      color: '#000000',
      image: '/visita.webp'
    },
    {
      icon: Store,
      title: 'SKLEP INTERNETOWY',
      subtitle: 'Profesjonalny sklep online na zamówienie',
      description: 'Tworzenie sklepów internetowych na zamówienie. Nowoczesny sklep internetowy z płatnościami online i pełną integracją.',
      features: [],
      price: '10,000 PLN',
      demoUrl: '/sklep-internetowy',
      color: '#FF3B30',
      image: '/sklep.webp'
    },
    {
      icon: GraduationCap,
      title: 'SYSTEMY DEDYKOWANE',
      subtitle: '',
      description: '',
      splitCard: true,
      leftColumn: {
        title: 'PLATFORMA KURSÓW',
        subtitle: 'Gotowy system edukacyjny',
        description: 'Kompleksowa platforma do sprzedaży i prowadzenia kursów online z systemem płatności i zarządzaniem użytkownikami.',
        features: [
          'Lekcje wideo i materiały do pobrania',
          'System płatności i subskrypcji',
          'Panel ucznia i instruktora'
        ],
        price: '8,000 PLN',
        buttonText: 'Zobacz szczegóły'
      },
      rightColumn: {
        title: 'SYSTEM RESTAURACYJNY',
        subtitle: 'Rozwiązania na zamówienie',
        description: 'Kompleksowy system zarządzania restauracją z POS i aplikacjami mobilnymi do zarządzania zamówieniami, płatnościami i stolikami.',
        features: [
          'System POS dla restauracji',
          'Aplikacje mobilne dla klientów',
          'Zarządzanie zamówieniami i stolikami'
        ],
        price: '7,200 PLN',
        buttonText: 'Skontaktuj się'
      },
      demoUrl: '/platforma-kursow',
      color: '#FF3B30'
    }
  ];

  return (
    <section id="rozwiazania" className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          Specjalizuję Się w Tych
          <br />
          <span className="text-[#FF3B30]">Typach Rozwoju</span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Strony wizytówki, sklepy e-commerce i platformy kursów.
          Mam gotowe rozwiązania, które dostosowuję do Twojego biznesu.
        </p>

        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F9FA] p-8 md:p-12 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 fade-in"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {solution.splitCard ? (
                    <>
                      {/* Columna izquierda */}
                      <div>
                        <h3 className="text-3xl font-extrabold mb-2 flex items-center">
                          <GraduationCap className="mr-2 w-8 h-8 text-[#FF3B30]" />
                          {solution.leftColumn.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                          {solution.leftColumn.subtitle}
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {solution.leftColumn.description}
                        </p>
                        <div className="mb-6">
                          <p className="text-4xl font-extrabold mb-2">
                            {solution.leftColumn.price}
                          </p>
                          <p className="text-sm text-gray-600">
                            Jednorazowa inwestycja + personalizacja
                          </p>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {solution.leftColumn.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-[#FF3B30] mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={solution.demoUrl}
                          className="inline-flex items-center text-[#FF3B30] font-semibold hover:underline"
                        >
                          {solution.leftColumn.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                      
                      {/* Línea divisoria vertical */}
                      <div className="hidden md:block w-px bg-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></div>
                      
                      {/* Columna derecha */}
                      <div>
                        <h3 className="text-3xl font-extrabold mb-2 flex items-center">
                          <Utensils className="mr-2 w-8 h-8 text-[#FF3B30]" />
                          {solution.rightColumn.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                          {solution.rightColumn.subtitle}
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {solution.rightColumn.description}
                        </p>
                        <div className="mb-6">
                          <p className="text-4xl font-extrabold mb-2">
                            {solution.rightColumn.price}
                          </p>
                          <p className="text-sm text-gray-600">
                            Jednorazowa inwestycja + personalizacja
                          </p>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {solution.rightColumn.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-[#FF3B30] mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/system-restauracyjny"
                          className="inline-flex items-center text-[#FF3B30] font-semibold hover:underline"
                        >
                          Zobacz szczegóły <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div
                          className="w-16 h-16 flex items-center justify-center mb-6"
                          style={{ backgroundColor: solution.color }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-3xl font-extrabold mb-2">
                          {solution.title}
                        </h3>

                        <p className="text-lg text-gray-600 mb-4">
                          {solution.subtitle}
                        </p>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {solution.description}
                        </p>

                        <div className="mb-6">
                          <p className="text-4xl font-extrabold mb-2">
                            {solution.price}
                          </p>
                          <p className="text-sm text-gray-600">
                            Jednorazowa inwestycja + personalizacja
                          </p>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-[#FF3B30] mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </>
                  )}
                  
                  {!solution.splitCard && (
                    <div className="relative">
                      {solution.image ? (
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
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center">
                          <p className="text-gray-500">Imagen de demostración</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {!solution.splitCard && (
                  <a
                    href={solution.demoUrl}
                    className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-8 py-4 font-medium transition-all duration-300 hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] hover:-translate-y-0.5"
                  >
                    Zobacz Szczegóły
                    <ArrowRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
