import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Award, 
  Heart, 
  ChevronRight, 
  Sparkles, 
  Instagram, 
  Facebook, 
  Flame, 
  Info,
  Menu,
  X,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, REVIEWS } from './data';
import MenuCatalog from './components/MenuCatalog';
import ReviewsCarousel from './components/ReviewsCarousel';
import InteractiveTable from './components/InteractiveTable';
import EventCustomizer from './components/EventCustomizer';
import ReservationForm from './components/ReservationForm';
import ScrollMantelSection from './components/ScrollMantelSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'restaurante' | 'carta' | 'mesa' | 'eventos'>('restaurante');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-secondary selection:text-white">
      {/* HEADER PRINCIPAL */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/90 backdrop-blur-md shadow-md py-3 border-b border-border/50' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <span className="font-serif text-2xl font-bold tracking-tight text-brown">
              Venta <span className="text-secondary font-cursive text-3xl">El Capricho</span>
            </span>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('restaurante')} 
              className="font-medium text-sm text-text/80 hover:text-secondary transition-colors"
            >
              Nuestra Casa
            </button>
            <button 
              onClick={() => scrollToSection('carta')} 
              className="font-medium text-sm text-text/80 hover:text-secondary transition-colors"
            >
              La Carta
            </button>
            <button 
              onClick={() => scrollToSection('experiencia-mesa')} 
              className="font-medium text-sm text-text/80 hover:text-secondary transition-colors"
            >
              Mesa Interactiva
            </button>
            <button 
              onClick={() => scrollToSection('eventos')} 
              className="font-medium text-sm text-text/80 hover:text-secondary transition-colors"
            >
              Celebraciones
            </button>
            <button 
              onClick={() => scrollToSection('reservas')} 
              className="bg-secondary text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-hover transition-colors shadow-sm"
            >
              Reservar Mesa
            </button>
          </nav>

          {/* BOTÓN MÓVIL */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brown p-1 hover:text-secondary transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-surface pt-24 px-6 md:hidden flex flex-col gap-6 text-center shadow-inner"
          >
            <button 
              onClick={() => scrollToSection('restaurante')} 
              className="font-serif text-2xl py-2 text-brown border-b border-border/40"
            >
              Nuestra Casa
            </button>
            <button 
              onClick={() => scrollToSection('carta')} 
              className="font-serif text-2xl py-2 text-brown border-b border-border/40"
            >
              La Carta
            </button>
            <button 
              onClick={() => scrollToSection('experiencia-mesa')} 
              className="font-serif text-2xl py-2 text-brown border-b border-border/40"
            >
              Mesa Interactiva
            </button>
            <button 
              onClick={() => scrollToSection('eventos')} 
              className="font-serif text-2xl py-2 text-brown border-b border-border/40"
            >
              Celebraciones
            </button>
            <button 
              onClick={() => scrollToSection('reservas')} 
              className="bg-secondary text-white font-serif text-2xl py-3 rounded-full hover:bg-hover transition-colors shadow-md mt-4"
            >
              Reservar Mesa
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECCIÓN HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-surface overflow-hidden pt-16">
        <div className="absolute inset-0 bg-tile-pattern opacity-15"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-3 px-4 py-1.5 rounded-full border border-secondary/30 bg-surface/80 backdrop-blur-sm text-secondary text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-sm"
          >
            <Award size={14} className="animate-pulse" /> Sabor Tradicional y Auténtico Andaluz
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-brown leading-none"
          >
            Venta <br />
            <span className="font-cursive text-secondary text-6xl sm:text-8xl md:text-9xl font-normal block -mt-2 sm:-mt-5">
              El Capricho
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 font-body text-base sm:text-lg text-brown/85 max-w-xl leading-relaxed"
          >
            Donde las recetas de nuestros abuelos cordobeses cobran vida. Disfruta de la mejor cocina tradicional en un entorno único diseñado para recordar.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => scrollToSection('reservas')}
              className="w-full sm:w-auto bg-secondary text-white font-medium px-8 py-3.5 rounded-full hover:bg-hover transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Reservar Mesa <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('carta')}
              className="w-full sm:w-auto bg-surface/75 backdrop-blur-sm border border-border text-brown font-medium px-8 py-3.5 rounded-full hover:bg-border/60 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Explorar la Carta
            </button>
          </motion.div>

          {/* Indicador de scroll animado */}
          <div 
            onClick={() => scrollToSection('restaurante')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none group"
          >
            <span className="text-[10px] text-brown/60 uppercase tracking-widest font-semibold group-hover:text-secondary transition-colors">Ver Más</span>
            <div className="w-[18px] h-[30px] rounded-full border-2 border-brown/30 group-hover:border-secondary/50 flex justify-center p-1 transition-colors">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-scroll-down"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUESTRA CASA */}
      <section id="restaurante" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest block mb-2">Un Rincón de Andalucía</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brown">La Tradición Hecha Hogar</h2>
            <div className="tile-divider mt-4">
              <div className="h-[1px] w-12 bg-border"></div>
              <div className="tile-star"></div>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
            <p className="mt-4 text-brown/75 text-sm sm:text-base">
              Nuestra venta es el resultado de décadas de cariño familiar por la gastronomía andaluza clásica. Un espacio rústico, con patios frescos y platos con alma.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-2xl border-2 border-dashed border-secondary/30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000" 
                  alt="Patio andaluz tradicional de la Venta" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-cursive text-3xl text-primary mb-1">Fundado en 1984</p>
                  <p className="text-xs tracking-wider uppercase font-semibold">Más de 40 años compartiendo sabor</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="premium-card p-6 sm:p-8 flex items-start gap-4">
                <div className="p-3 bg-secondary/15 rounded-lg text-secondary shrink-0">
                  <Flame size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brown mb-1.5">Cocina a Fuego Lento</h3>
                  <p className="text-sm text-brown/80 leading-relaxed">
                    Nuestra especialidad son los guisos melosos y tradicionales como el Rabo de Toro estofado, cocinado durante más de seis horas con el cariño y el vino tinto D.O. de nuestra tierra.
                  </p>
                </div>
              </div>

              <div className="premium-card p-6 sm:p-8 flex items-start gap-4">
                <div className="p-3 bg-secondary/15 rounded-lg text-secondary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brown mb-1.5">El Horario de Nuestra Cocina</h3>
                  <p className="text-sm text-brown/80 leading-relaxed">
                    Abrimos de Martes a Domingo para almuerzos de <strong className="text-secondary">13:00h a 16:30h</strong> y cenas de Viernes a Sábado de <strong className="text-secondary">20:30h a 23:30h</strong>. Los lunes permanecemos cerrados por descanso del personal.
                  </p>
                </div>
              </div>

              <div className="premium-card p-6 sm:p-8 flex items-start gap-4">
                <div className="p-3 bg-secondary/15 rounded-lg text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brown mb-1.5">Ubicación Inmejorable</h3>
                  <p className="text-sm text-brown/80 leading-relaxed">
                    Estamos ubicados en un entorno rústico privilegiado a las afueras de Córdoba. Un lugar donde respirar aire puro, disfrutar del jardín andaluz y disponer de fácil aparcamiento gratuito para todos nuestros comensales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SCROLL MANTELES DINÁMICOS */}
      <section className="border-t border-b border-border/40 relative">
        <ScrollMantelSection />
      </section>

      {/* SECCIÓN LA CARTA */}
      <section id="carta" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest block mb-2">Para el Deleite</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brown">Nuestra Sabrosa Carta</h2>
            <div className="tile-divider mt-4">
              <div className="h-[1px] w-12 bg-border"></div>
              <div className="tile-star"></div>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
            <p className="mt-4 text-brown/75 text-sm sm:text-base">
              Una selección cuidada de ingredientes andaluces de máxima calidad, platos aptos para celíacos e irresistibles propuestas vegetarianas.
            </p>
          </div>

          <MenuCatalog />
        </div>
      </section>

      {/* SECCIÓN MESA INTERACTIVA */}
      <section id="experiencia-mesa" className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-tile-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest block mb-2">Experiencia Digital</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brown">Prueba Nuestra Mesa</h2>
            <div className="tile-divider mt-4">
              <div className="h-[1px] w-12 bg-border"></div>
              <div className="tile-star"></div>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
            <p className="mt-4 text-brown/75 text-sm sm:text-base">
              Haz clic sobre los ingredientes dispuestos en nuestro elegante mantel de lino terracota andaluz para descubrir sus secretos, precios y combinaciones.
            </p>
          </div>

          <InteractiveTable />
        </div>
      </section>

      {/* SECCIÓN CELEBRACIONES Y EVENTOS */}
      <section id="eventos" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest block mb-2">Días Inolvidables</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brown">Tus Celebraciones a Medida</h2>
            <div className="tile-divider mt-4">
              <div className="h-[1px] w-12 bg-border"></div>
              <div className="tile-star"></div>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
            <p className="mt-4 text-brown/75 text-sm sm:text-base">
              Bodas de plata, comuniones, bautizos o cenas de empresa. Diseña tu menú personalizado adaptando los platos a los gustos de tus invitados de forma instantánea.
            </p>
          </div>

          <EventCustomizer />
        </div>
      </section>

      {/* SECCIÓN OPINIONES */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-tile-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest block mb-2">Testimonios Reales</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brown">La Voz de Nuestra Familia</h2>
            <div className="tile-divider mt-4">
              <div className="h-[1px] w-12 bg-border"></div>
              <div className="tile-star"></div>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
          </div>

          <ReviewsCarousel />
        </div>
      </section>

      {/* SECCIÓN FORMULARIO DE RESERVAS */}
      <section id="reservas" className="py-24 bg-background relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest block mb-2">Reserva una Mesa</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brown">Te Esperamos en la Mesa</h2>
            <div className="tile-divider mt-4">
              <div className="h-[1px] w-12 bg-border"></div>
              <div className="tile-star"></div>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
            <p className="mt-4 text-brown/75 text-sm sm:text-base">
              Completa el formulario a continuación para confirmar tu mesa en Venta El Capricho al instante. Recibirás confirmación directa por WhatsApp o correo.
            </p>
          </div>

          <ReservationForm />
        </div>
      </section>

      {/* FOOTER PRINCIPAL */}
      <footer className="bg-brown text-white/90 border-t border-border/20">
        <div className="puntilla-border-top opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                Venta <span className="font-cursive text-secondary text-3xl font-normal">El Capricho</span>
              </span>
              <p className="text-sm text-white/70 leading-relaxed">
                Recetas tradicionales elaboradas con pasión, en un entorno andaluz diseñado para compartir con las personas que más quieres.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-colors" aria-label="Siguenos en Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-colors" aria-label="Siguenos en Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-lg font-bold text-primary">Nuestros Horarios</h4>
              <ul className="text-sm text-white/75 flex flex-col gap-2.5">
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Martes a Jueves:</span>
                  <span>13:00h - 16:30h</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Viernes y Sábado:</span>
                  <span>13:00h - 23:30h</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Domingos:</span>
                  <span>13:00h - 16:30h</span>
                </li>
                <li className="flex justify-between pb-1 text-secondary font-semibold">
                  <span>Lunes:</span>
                  <span>Cerrado por Descanso</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-lg font-bold text-primary">Atención al Cliente</h4>
              <ul className="text-sm text-white/75 flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-secondary" />
                  <a href="tel:+34957123456" className="hover:text-primary transition-colors">+34 957 123 456</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-secondary" />
                  <span>Soporte: Martes a Domingo</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span className="leading-tight">Ctra. de la Sierra, Km. 4.2,<br />14014 Córdoba, España</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-lg font-bold text-primary">Accesos Rápidos</h4>
              <ul className="text-sm text-white/75 flex flex-col gap-2.5">
                <li><button onClick={() => scrollToSection('restaurante')} className="hover:text-primary transition-colors text-left">Nuestra Casa</button></li>
                <li><button onClick={() => scrollToSection('carta')} className="hover:text-primary transition-colors text-left">Nuestra Carta</button></li>
                <li><button onClick={() => scrollToSection('experiencia-mesa')} className="hover:text-primary transition-colors text-left">Mesa Interactiva</button></li>
                <li><button onClick={() => scrollToSection('eventos')} className="hover:text-primary transition-colors text-left">Celebraciones Especiales</button></li>
                <li><button onClick={() => scrollToSection('reservas')} className="hover:text-primary transition-colors text-left text-secondary font-semibold">Reservas Online</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <p>&copy; {new Date().getFullYear()} Venta El Capricho. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#inicio" className="hover:text-primary transition-colors">Aviso Legal</a>
              <a href="#inicio" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#inicio" className="hover:text-primary transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
