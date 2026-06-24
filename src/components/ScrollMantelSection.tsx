import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Sparkles, Award, Clock, Utensils, Heart } from 'lucide-react';

const INFO_BLOCKS = [
  {
    icon: Utensils,
    title: 'Cocina Tradicional',
    desc: 'Nuestros guisos melosos se cocinan durante horas con los mejores ingredientes de la tierra cordobesa.'
  },
  {
    icon: Clock,
    title: 'Sobremesa Sin Prisa',
    desc: 'Cada comida es una celebración. Disfruta del arte de la tertulia con los tuyos.'
  },
  {
    icon: Heart,
    title: 'Hecho con Amor',
    desc: 'Recetas familiares transmitidas de generación en generación con el mismo cariño.'
  }
];

export default function ScrollMantelSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const unfoldProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.35, 0.55], [40, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>

      <motion.div
        className="absolute inset-0 bg-mantel origin-bottom"
        style={{ scaleY: unfoldProgress }}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(180deg, transparent 49.3%, rgba(0,0,0,0.15) 49.8%, rgba(255,255,255,0.15) 50.1%, transparent 50.6%),
            linear-gradient(90deg, transparent 49.3%, rgba(0,0,0,0.15) 49.8%, rgba(255,255,255,0.15) 50.1%, transparent 50.6%)
          `,
          backgroundSize: '120px 120px'
        }}></div>

        <div className="absolute top-0 left-0 right-0 puntilla-border-bottom opacity-15"></div>
        <div className="absolute bottom-0 left-0 right-0 puntilla-border-top opacity-15"></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 py-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="text-center mb-12">
          <Compass className="text-secondary/60 w-12 h-12 mx-auto mb-4" />
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brown">
            El Arte de la Sobremesa
          </h3>
          <div className="tile-divider mt-4">
            <div className="h-[1px] w-12 bg-border"></div>
            <div className="tile-star"></div>
            <div className="h-[1px] w-12 bg-border"></div>
          </div>
          <p className="mt-4 text-brown/75 max-w-2xl mx-auto font-body text-sm sm:text-base">
            En Andalucía las comidas no terminan con el postre; se extienden en alegres tertulias familiares sobre manteles de lino, copas de anís artesano, risas y la frescura del viento de nuestra sierra cordobesa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INFO_BLOCKS.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
              className="premium-card-solid p-6 rounded-xl"
            >
              <div className="p-3 bg-secondary/15 rounded-lg text-secondary w-fit mb-4">
                <block.icon size={24} />
              </div>
              <h4 className="font-serif text-lg font-bold text-brown mb-2">{block.title}</h4>
              <p className="text-sm text-brown/70 leading-relaxed font-body">{block.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-brown/60">
            <Sparkles size={14} /> Aire Puro
          </span>
          <span className="text-brown/30">&bull;</span>
          <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-brown/60">
            <Award size={14} /> 100% Casero
          </span>
        </div>
      </motion.div>
    </div>
  );
}
