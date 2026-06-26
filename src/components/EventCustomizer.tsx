import React, { useState } from 'react';
import { Sparkles, Award, Heart, Check, Users } from 'lucide-react';
import { eventPackages } from '../data';

const eventTypes = [
  { id: 'comunion', label: 'Comunión', desc: 'Espacios idóneos y zonas amplias para el juego infantil.' },
  { id: 'bautizo', label: 'Bautizo', desc: 'Un encuentro tierno y acogedor para recibir a tu bebé.' },
  { id: 'boda', label: 'Boda Íntima', desc: 'Celebra vuestro amor con el encanto andaluz tradicional.' },
  { id: 'empresa', label: 'Comida de Empresa', desc: 'Un ambiente distendido y excelente gastronomía para el equipo.' },
  { id: 'familiar', label: 'Reunión Familiar', desc: 'Sábados y domingos inolvidables al calor de la sobremesa.' }
];

export default function EventCustomizer() {
  const [selectedEventType, setSelectedEventType] = useState<string>('comunion');
  const [selectedPackage, setSelectedPackage] = useState<string>('ep2');
  const [guestsCount, setGuestsCount] = useState<number>(45);
  
  const [extraOpenBar, setExtraOpenBar] = useState<boolean>(false);
  const [extraHamCutter, setExtraHamCutter] = useState<boolean>(false);
  const [extraInflatable, setExtraInflatable] = useState<boolean>(false);

  const activePackage = eventPackages.find((pkg) => pkg.id === selectedPackage) || eventPackages[0];

  const basePricePerPerson = activePackage.pricePerPerson;
  const personExtrasPrice = extraOpenBar ? 12 : 0;
  const totalPerPerson = basePricePerPerson + personExtrasPrice;
  
  const flatExtrasPrice = (extraHamCutter ? 250 : 0) + (extraInflatable ? 150 : 0);
  const totalEventCost = (totalPerPerson * guestsCount) + flatExtrasPrice;

  return (
    <section id="eventos" className="py-24 bg-background relative overflow-hidden border-y border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cursive text-3xl sm:text-4xl text-accent block leading-none mb-1">Un día inolvidable</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text font-serif mb-4">Crea tu Evento a Medida</h2>
          <div className="w-16 h-[1px] bg-accent/40 mx-auto mb-6"></div>
          <p className="text-xs sm:text-sm text-brown/90 leading-relaxed font-sans max-w-xl mx-auto">
            Utiliza nuestro simulador de presupuesto para configurar tu banquete personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* 1. Tipo de celebración */}
            <div className="bg-white/80 p-5 sm:p-6 rounded-2xl border border-primary/40 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-text mb-3 flex items-center gap-2 font-serif">
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center font-sans">1</span>
                ¿Qué tipo de celebración organizas?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedEventType(type.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer ${
                      selectedEventType === type.id ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-primary/40 bg-background/50 hover:bg-primary/25'
                    }`}
                  >
                    <div className="font-bold text-text text-xs sm:text-sm">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Menú */}
            <div className="bg-white/85 p-5 sm:p-6 border border-primary/30 rounded-2xl shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-text mb-3 flex items-center gap-2 font-serif">
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center font-sans">2</span>
                Selecciona la propuesta gastronómica
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {eventPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`p-4 border text-left flex flex-col justify-between cursor-pointer rounded-xl ${
                      selectedPackage === pkg.id ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-primary/30 bg-background/50 hover:bg-primary/25'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-text font-bold text-xs sm:text-sm truncate">{pkg.name.replace('Menú ', '')}</span>
                        {pkg.iconName === 'Award' && <Award className="w-3.5 h-3.5 text-accent shrink-0" />}
                        {pkg.iconName === 'Heart' && <Heart className="w-3.5 h-3.5 text-accent shrink-0" />}
                        {pkg.iconName === 'Sparkles' && <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />}
                      </div>
                      <p className="text-[11px] text-brown leading-tight mb-4 font-sans line-clamp-2">{pkg.description}</p>
                    </div>
                    <div className="text-sm font-extrabold text-accent">{pkg.pricePerPerson} € <span className="text-[10px] text-brown font-normal">/ comensal</span></div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Invitados y extras */}
            <div className="bg-white/85 p-5 sm:p-6 border border-primary/30 rounded-2xl shadow-sm space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-text flex items-center gap-2 font-serif">
                    <span className="w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center font-sans">3</span>
                    Número aproximado de invitados
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-brown text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Users className="w-3.5 h-3.5" /> {guestsCount} invitados
                  </span>
                </div>
                <input
                  type="range" min="15" max="200" value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[#C8A97E]/40 rounded-full appearance-none cursor-pointer accent-accent"
                />
              </div>

              <div className="pt-2 border-t border-primary/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text mb-3">Servicios y Extras Opcionales</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button onClick={() => setExtraOpenBar(!extraOpenBar)} className={`p-3 border text-left flex items-center justify-between cursor-pointer rounded-xl ${extraOpenBar ? 'border-accent bg-accent/5' : 'border-primary/30'}`}>
                    <div>
                      <div className="text-[11px] font-bold text-text">Barra Libre (2h)</div>
                      <div className="text-[10px] text-brown">+12 € / persona</div>
                    </div>
                  </button>
                  <button onClick={() => setExtraHamCutter(!extraHamCutter)} className={`p-3 border text-left flex items-center justify-between cursor-pointer rounded-xl ${extraHamCutter ? 'border-accent bg-accent/5' : 'border-primary/30'}`}>
                    <div>
                      <div className="text-[11px] font-bold text-text">Cortador de Jamón</div>
                      <div className="text-[10px] text-brown">+250 €</div>
                    </div>
                  </button>
                  <button onClick={() => setExtraInflatable(!extraInflatable)} className={`p-3 border text-left flex items-center justify-between cursor-pointer rounded-xl ${extraInflatable ? 'border-accent bg-accent/5' : 'border-primary/30'}`}>
                    <div>
                      <div className="text-[11px] font-bold text-text">Castillo Hinchable</div>
                      <div className="text-[10px] text-brown">+150 €</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Display Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 border border-primary/40 h-full flex flex-col justify-between rounded-3xl shadow-lg bg-[#E8DCC8]/35 backdrop-blur-md">
              <div>
                <div className="border-b border-primary/30 pb-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Resumen del Presupuesto</span>
                  <h3 className="text-xl font-bold text-text font-serif mt-1">{activePackage.name}</h3>
                </div>

                <div className="space-y-4 text-xs text-brown">
                  <div>
                    <h4 className="font-bold text-text uppercase tracking-wider mb-1 text-[10px]">Aperitivos / Entrantes</h4>
                    <ul className="space-y-1">{activePackage.starters.map((item, i) => <li key={i} className="flex items-center gap-1.5">• {item}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-text uppercase tracking-wider mb-1 text-[10px]">Plato Principal</h4>
                    <ul className="space-y-1">{activePackage.mains.map((item, i) => <li key={i} className="flex items-center gap-1.5">• {item}</li>)}</ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-background rounded-2xl p-4 border border-primary/40 text-center mb-4">
                  <span className="text-[10px] font-bold text-brown uppercase">Estimación Total Orientativa</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-accent mt-1 font-serif">{totalEventCost.toFixed(2)} €</div>
                  <div className="text-[10px] text-brown/70">({(totalEventCost / guestsCount).toFixed(2)} € / comensal promedio)</div>
                </div>
                <a href="#reservas" className="w-full py-3.5 px-5 rounded-full bg-accent text-white hover:bg-brown text-center font-bold text-xs uppercase tracking-widest block">
                  Solicitar este Menú e Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
