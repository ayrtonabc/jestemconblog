import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="min-h-screen bg-white py-24 px-6" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          Gotowy na Profesjonalną
          <br />
          <span className="text-[#FF3B30]">Stronę Internetową?</span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Skontaktuj się z programistą z Ostródy. Odpowiem w ciągu 24 godzin i omówimy Twój projekt.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="text-2xl font-bold mb-8">Skontaktuj się bezpośrednio</h3>
            <meta itemProp="name" content="JestemProgramista.pl" />
            <meta itemProp="description" content="Profesjonalne tworzenie stron internetowych w Ostródzie" />

            <div className="space-y-6 mb-8">
              <a
                href="mailto:kontakt@jestemprogramista.pl"
                className="flex items-center gap-4 text-lg hover:text-[#FF3B30] transition-colors"
                itemProp="email"
              >
                <div className="bg-black w-12 h-12 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                kontakt@jestemprogramista.pl
              </a>

              <a
                href="tel:+48517105423"
                className="flex items-center gap-4 text-lg hover:text-[#FF3B30] transition-colors"
              >
                <div className="bg-black w-12 h-12 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                +48 517 105 423
              </a>
            </div>

            <div className="bg-[#F8F9FA] p-6">
              <p className="font-bold mb-2">Czas odpowiedzi:</p>
              <p className="text-gray-600">
                Odpowiadam na każdą wiadomość w ciągu 24 godzin.
                W dni robocze zazwyczaj szybciej.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  O czym chcesz porozmawiać?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF3B30] text-white py-4 font-medium text-lg inline-flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] hover:-translate-y-0.5"
              >
                Wyślij Wiadomość
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
