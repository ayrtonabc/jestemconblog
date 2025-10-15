import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const technologies = [
    { name: "Node.js", initialPosition: { top: '10%', left: '10%' } },
    { name: "React.js", initialPosition: { top: '20%', right: '20%' } },
    { name: "JavaScript", initialPosition: { bottom: '20%', left: '20%' } },
    { name: "TypeScript", initialPosition: { bottom: '40%', right: '40%' } },
    { name: "Angular", initialPosition: { top: '40%', left: '30%' } },
    { name: "Laravel", initialPosition: { top: '30%', right: '10%' } },
    { name: "Vue.js", initialPosition: { bottom: '30%', right: '25%' } },
    { name: "PHP", initialPosition: { bottom: '10%', left: '40%' } }
  ];

  const [techElements, setTechElements] = useState(technologies.map(tech => ({
    ...tech,
    position: tech.initialPosition,
    transition: '20s'
  })));

  useEffect(() => {
    const moveElements = () => {
      setTechElements(prev => prev.map(tech => {
        const randomTop = `${Math.floor(Math.random() * 80)}%`;
        const randomLeft = `${Math.floor(Math.random() * 80)}%`;
        const randomDuration = `${15 + Math.floor(Math.random() * 10)}s`;
        
        return {
          ...tech,
          position: {
            top: tech.initialPosition.top ? randomTop : undefined,
            bottom: tech.initialPosition.bottom ? randomTop : undefined,
            left: tech.initialPosition.left ? randomLeft : undefined,
            right: tech.initialPosition.right ? randomLeft : undefined
          },
          transition: randomDuration
        };
      }));
    };

    moveElements();
    const interval = setInterval(moveElements, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center px-6 py-0 -mt-16 relative overflow-hidden">
      {/* Elementos decorativos de fondo con animación */}
      {techElements.map((tech, index) => (
        <div 
          key={index}
          className="absolute text-red-300 opacity-50 font-medium"
          style={{
            ...tech.position,
            transition: `all ${tech.transition} ease-in-out`
          }}
        >
          {tech.name}
        </div>
      ))}
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Sklepy Internetowe <span className="text-[#FF3B30]">Które Sprzedają</span>
            <br />
          </h1>

          <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto md:mx-0 leading-relaxed">
           Zapomnij o szablonach. Tworzę systemy e-commerce projektowane od podstaw dla Twojego biznesu. Bez kompromisów, bez ograniczeń.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
            <a
              href="#rozwiazania"
              className="group bg-[#FF3B30] text-white px-6 py-3 text-sm font-medium inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] hover:-translate-y-0.5"
            >
              ZOBACZ GOTOWE ROZWIĄZANIA
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#kontakt"
              className="border-2 border-black text-black px-6 py-3 text-sm font-medium inline-flex items-center transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-0.5"
            >
              Porozmawiajmy o Twoim Projekcie
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 flex justify-center z-10 hidden md:block">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#FF3B30] bg-opacity-10 border-4 border-[#FF3B30] overflow-hidden">
              <img 
                src="https://www.jestemprogramista.pl/jestem.webp" 
                alt="Programista" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Código decorativo en el fondo */}
      <div className="absolute bottom-10 right-10 text-gray-300 opacity-30 font-mono text-sm">
        const Shop = () =&gt; &lt;div&gt;Twój Sklep&lt;/div&gt;
      </div>
    </section>
  );
}
