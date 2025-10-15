import { useEffect, useRef, useState } from 'react';
import '../styles/LogoSlider.css';

interface LogoProps {
  src: string;
  alt: string;
  url: string;
}

const logos: LogoProps[] = [
  { src: '/logos/1.png', alt: 'Empresa 1', url: 'https://www.med-vitox.pl/' },
  { src: '/logos/2.webp', alt: 'Empresa 2', url: 'https://szczesliwejdrogi.pl/' },
  { src: '/logos/3.png', alt: 'Empresa 3', url: 'https://www.ankoolsztyn.eu/' },
  { src: '/logos/4.png', alt: 'Empresa 4', url: 'http://opiekacareilawa.pl/' },
  { src: '/logos/5.png', alt: 'Empresa 5', url: 'https://h4invest.pl/' },
  { src: '/logos/6.png', alt: 'Empresa 6', url: 'https://www.asmed-ostroda.pl/' },
  { src: '/logos/7.png', alt: 'Empresa 7', url: 'https://dafor.pl/' },
  { src: '/logos/8.png', alt: 'Empresa 8', url: 'https://yachtname.eu/' },
  { src: '/logos/9.png', alt: 'Empresa 9', url: 'https://www.fotoefekt.pl/' },
  { src: '/logos/10.png', alt: 'Empresa 10', url: 'https://easyprocess.pl/' },
  { src: '/logos/11.webp', alt: 'Empresa 11', url: 'https://www.hydroboom.pl/' },
  { src: '/logos/12.jpg', alt: 'Empresa 12', url: 'https://golden-tech.eu/' },
];

export default function LogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Añadimos Empresa 2 y luego Empresa 1 al final del carrusel
    if (slider.children.length > 1) {
      // Clonar Empresa 2 (segundo logo)
      const secondLogoClone = slider.children[1].cloneNode(true);
      // Clonar Empresa 1 (primer logo)
      const firstLogoClone = slider.children[0].cloneNode(true);
      
      // Añadir primero Empresa 2 y luego Empresa 1 al final
      slider.appendChild(secondLogoClone);
      slider.appendChild(firstLogoClone);
    }

    let position = 0;
    const speed = 0.3; // velocidad del slider reducida
    let animationId: number;

    const moveSlider = () => {
      if (!isPaused) {
        position -= speed;
        
        // Cuando llegamos al final, reseteamos la posición
        if (position <= -slider.scrollWidth / 2) {
          position = 0;
        }
        
        slider.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(moveSlider);
    };

    animationId = requestAnimationFrame(moveSlider);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section className="bg-white py-0 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="logo-slider-container overflow-hidden">
          <div 
            ref={sliderRef} 
            className="logo-slider flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {logos.map((logo, index) => (
              <div key={index} className="logo-slide flex items-center justify-center mx-8">
                <a 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${logo.src.includes('2.webp') || logo.src.includes('4.png') ? 'h-20' : 'h-16'} max-w-[120px] object-contain transition-all duration-300`}
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}