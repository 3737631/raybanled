import React, { useRef, useEffect, useState } from 'react';
import { Compass, Sparkles, Award } from 'lucide-react';

export default function ScrollMantelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const topOfViewport = rect.top;
        const height = rect.height;
        const viewportHeight = window.innerHeight;
        
        if (topOfViewport < viewportHeight && topOfViewport + height > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const offset = (scrollY * 0.05) % 32;

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-mantel py-16 px-4">
      <div className="absolute top-0 left-0 right-0 puntilla-border-bottom opacity-15"></div>
      <div className="absolute bottom-0 left-0 right-0 puntilla-border-top opacity-15"></div>

      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(180deg, transparent 49.3%, rgba(0, 0, 0, 0.15) 49.8%, rgba(255, 255, 255, 0.15) 50.1%, transparent 50.6%),
            linear-gradient(90deg, transparent 49.3%, rgba(0, 0, 0, 0.15) 49.8%, rgba(255, 255, 255, 0.15) 50.1%, transparent 50.6%)
          `,
          backgroundSize: '120px 120px',
          transform: `translateY(${offset}px)`
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center text-white/95 py-6">
        <Compass className="text-primary/75 w-12 h-12 mb-4 animate-spin-slow opacity-90" />
        <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          El Arte de la Sobremesa
        </h3>
        <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed font-body">
          En Andalucía las comidas no terminan con el postre; se extienden en alegres tertulias familiares sobre manteles de lino, copas de anís artesano, risas y la frescura del viento de nuestra sierra cordobesa.
        </p>
        <div className="flex items-center gap-6 mt-8">
          <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-primary/80">
            <Sparkles size={14} /> Aire Puro
          </span>
          <span className="text-white/30">&bull;</span>
          <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-primary/80">
            <Award size={14} /> 100% Casero
          </span>
        </div>
      </div>
    </div>
  );
}
