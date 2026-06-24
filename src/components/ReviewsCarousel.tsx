import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-border/30 z-0">
        <Quote size={120} className="stroke-[1.5]" />
      </div>

      <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Estrellas */}
            <div className="flex justify-center gap-1 mb-4 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < REVIEWS[current].stars ? "currentColor" : "none"}
                  className="stroke-[2]"
                />
              ))}
            </div>

            <p className="font-serif text-lg sm:text-xl italic text-brown leading-relaxed max-w-3xl mx-auto">
              "{REVIEWS[current].comment}"
            </p>

            <div className="mt-6">
              <h4 className="font-body text-sm font-bold text-brown uppercase tracking-wider">{REVIEWS[current].name}</h4>
              <p className="text-xs text-secondary mt-1">{REVIEWS[current].date} &bull; {REVIEWS[current].source}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2.5 bg-white border border-border/80 rounded-full text-brown hover:bg-secondary hover:text-white transition-colors shadow-sm"
          aria-label="Opinión anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="p-2.5 bg-white border border-border/80 rounded-full text-brown hover:bg-secondary hover:text-white transition-colors shadow-sm"
          aria-label="Siguiente opinión"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
