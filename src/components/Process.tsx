export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Zobacz Demo',
      description: 'Kliknij w demo działającego sklepu. Przetestuj funkcje. Oceń jakość.'
    },
    {
      number: '02',
      title: 'Rozmowa 15 Minut',
      description: 'Opowiesz o swoim biznesie. Ja przedstawię rozwiązania.'
    },
    {
      number: '03',
      title: 'Propozycja Dedykowana',
      description: 'Otrzymasz konkretny plan projektu. Z ceną i terminem.'
    },
    {
      number: '04',
      title: 'Start Projektu',
      description: 'Podpisujesz umowę. Wpłacasz 50%. Zaczynam pracę.'
    },
    {
      number: '05',
      title: 'Rozwój z Aktualizacjami',
      description: 'Co tydzień widzisz postęp. Testujesz. Zgłaszasz uwagi.'
    },
    {
      number: '06',
      title: 'Odbiór i Przekazanie',
      description: 'Dopracowujemy szczegóły. Przekazuję projekt. Szkolę z obsługi.'
    }
  ];

  return (
    <section id="proces" className="min-h-screen bg-[#F8F9FA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          Jak Wygląda
          <br />
          <span className="text-[#FF3B30]">Współpraca?</span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Prosty proces. Przejrzyste zasady. Pełna kontrola na każdym etapie.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 fade-in"
            >
              <div className="text-6xl font-extrabold text-[#FF3B30] mb-4 opacity-20">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
