import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Strona Wizytówka', href: '/strona-wizytowka' },
    { label: 'Sklep Internetowy', href: '/sklep-internetowy' },
    { label: 'Platforma Kursów', href: '/platforma-kursow' },
    { label: 'SEO', href: '#servicios-seo' },
    { label: 'System Restauracyjny', href: '/system-restauracyjny' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-black w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              JestemProgramista
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-gray-700 hover:text-[#FF3B30] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-medium text-gray-700 hover:text-[#FF3B30] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
