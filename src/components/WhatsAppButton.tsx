import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '48726577078';
  const message = 'Cześć! Interesuje mnie Twoja oferta. Chciałbym porozmawiać.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF3B30] rounded-full animate-pulse" />
    </a>
  );
}
