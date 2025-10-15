import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import LogoSlider from './components/LogoSlider';
import Solutions from './components/Solutions';
import Services from './components/Services';
import SEOServices from './components/SEOServices';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SklepInternetowy from './pages/SklepInternetowy';
import StronaWizytowka from './pages/StronaWizytowka';
import PlatformaKursow from './pages/PlatformaKursow';
import SystemRestauracyjny from './pages/SystemRestauracyjny';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/admin/BlogAdmin';

function HomePage() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <Solutions />
      <Services />
      <SEOServices />
      <Process />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sklep-internetowy" element={<SklepInternetowy />} />
        <Route path="/strona-wizytowka" element={<StronaWizytowka />} />
        <Route path="/platforma-kursow" element={<PlatformaKursow />} />
        <Route path="/system-restauracyjny" element={<SystemRestauracyjny />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/blog/*" element={<BlogAdmin />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
