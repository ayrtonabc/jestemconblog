export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">JestemProgramista.pl</h3>
            <p className="text-gray-400">
              Sklepy internetowe projektowane od podstaw.
              Bez szablonów, bez kompromisów.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/sklep-internetowy" className="hover:text-white transition-colors">
                  Sklep Internetowy Premium
                </a>
              </li>
              <li>
                <a href="/strona-wizytowka" className="hover:text-white transition-colors">
                  Strona Wizytówka Premium
                </a>
              </li>
              <li>
                <a href="/platforma-kursow" className="hover:text-white transition-colors">
                  Platforma Kursów
                </a>
              </li>
              <li>
                <a href="/system-restauracyjny" className="hover:text-white transition-colors">
                  System Restauracyjny
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>kontakt@jestemprogramista.pl</li>
              <li>Tel: +48 517 105 423</li>
              <li>WhatsApp: +48 726 577 078</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <div className="mb-4">
            <a href="/blog" className="hover:text-white transition-colors text-sm">
              Blog
            </a>
          </div>
          <p>2025 JestemProgramista.pl. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
