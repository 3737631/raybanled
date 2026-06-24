import React, { useState } from 'react';
import { Sparkles, Check, DollarSign, Calendar, HelpCircle, FileText } from 'lucide-react';
import { EVENT_PACKAGES } from '../data';
import { EventPackage } from '../types';

export default function EventCustomizer() {
  const [selectedPackage, setSelectedPackage] = useState<EventPackage>(EVENT_PACKAGES[0]);
  const [numGuests, setNumGuests] = useState<number>(40);
  const [openSection, setOpenSection] = useState<'entrantes' | 'principales' | 'postres' | 'bebidas'>('entrantes');

  const totalBudget = selectedPackage.pricePerPerson * numGuests;

  const handlePackageSelect = (pkg: EventPackage) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Panel izquierdo: Elección de pack y número de comensales */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        
        {/* Selector de paquetes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EVENT_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => handlePackageSelect(pkg)}
                className={`p-5 rounded-xl border text-left flex flex-col justify-between gap-3 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-secondary ring-2 ring-secondary/15 shadow-md'
                    : 'bg-surface/30 border-border/60 hover:bg-surface/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">Menú</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>}
                  </div>
                  <h3 className="font-serif text-base font-bold text-brown leading-tight">
                    {pkg.name.replace('Menú ', '')}
                  </h3>
                  <p className="text-[11px] text-brown/70 leading-relaxed mt-1">
                    {pkg.description}
                  </p>
                </div>
                <div className="border-t border-border/40 pt-3 mt-1 flex items-baseline justify-between w-full">
                  <span className="text-[10px] text-brown/40 uppercase tracking-widest font-semibold">Por Persona</span>
                  <span className="text-base font-serif font-bold text-secondary">{pkg.pricePerPerson}€</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Ajuste de Comensales (Slider interactivo) */}
        <div className="bg-white p-6 rounded-xl border border-border/60 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label htmlFor="guests-range" className="font-serif text-lg font-bold text-brown">Número de Invitados</label>
            <span className="bg-secondary/15 text-secondary px-3 py-1 rounded-full text-xs font-bold">
              {numGuests} Personas
            </span>
          </div>
          <input
            id="guests-range"
            type="range"
            min="10"
            max="150"
            step="5"
            value={numGuests}
            onChange={(e) => setNumGuests(parseInt(e.target.value))}
            className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-[10px] font-bold text-brown/40 uppercase tracking-wider">
            <span>Mín: 10 pers.</span>
            <span>Estándar: 40-60 pers.</span>
            <span>Máx: 150 pers.</span>
          </div>
        </div>

        {/* Ficha del Menú Elegido */}
        <div className="bg-white rounded-xl border border-border/60 shadow-sm overflow-hidden">
          {/* Cabecera Pestañas */}
          <div className="grid grid-cols-4 border-b border-border/50 text-center bg-surface/20 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setOpenSection('entrantes')}
              className={`py-3.5 border-r border-border/40 transition-colors cursor-pointer ${
                openSection === 'entrantes' ? 'bg-white text-secondary' : 'text-brown hover:bg-surface/40'
              }`}
            >
              Entrantes
            </button>
            <button
              onClick={() => setOpenSection('principales')}
              className={`py-3.5 border-r border-border/40 transition-colors cursor-pointer ${
                openSection === 'principales' ? 'bg-white text-secondary' : 'text-brown hover:bg-surface/40'
              }`}
            >
              Segundos
            </button>
            <button
              onClick={() => setOpenSection('postres')}
              className={`py-3.5 border-r border-border/40 transition-colors cursor-pointer ${
                openSection === 'postres' ? 'bg-white text-secondary' : 'text-brown hover:bg-surface/40'
              }`}
            >
              Postre
            </button>
            <button
              onClick={() => setOpenSection('bebidas')}
              className={`py-3.5 transition-colors cursor-pointer ${
                openSection === 'bebidas' ? 'bg-white text-secondary' : 'text-brown hover:bg-surface/40'
              }`}
            >
              Bebida
            </button>
          </div>

          {/* Listado de Platos del Menú */}
          <div className="p-6">
            <ul className="flex flex-col gap-3">
              {openSection === 'entrantes' && selectedPackage.starters.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-brown/85 font-medium leading-normal">
                  <Check size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
              {openSection === 'principales' && selectedPackage.mains.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-brown/85 font-medium leading-normal">
                  <Check size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
              {openSection === 'postres' && selectedPackage.desserts.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-brown/85 font-medium leading-normal">
                  <Check size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
              {openSection === 'bebidas' && selectedPackage.drinks.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-brown/85 font-medium leading-normal">
                  <Check size={16} className="text-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Presupuesto Resumen */}
      <div className="lg:col-span-5">
        <div className="bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-md flex flex-col gap-6 sticky top-24">
          <h3 className="font-serif text-xl font-bold text-brown">Resumen de Presupuesto</h3>
          
          <div className="flex flex-col gap-4 border-t border-b border-border/40 py-5">
            <div className="flex justify-between text-xs text-brown/70 font-medium">
              <span>Menú Seleccionado:</span>
              <span className="font-bold text-brown">{selectedPackage.name}</span>
            </div>
            <div className="flex justify-between text-xs text-brown/70 font-medium">
              <span>Precio Base por Persona:</span>
              <span className="font-bold text-brown">{selectedPackage.pricePerPerson}€</span>
            </div>
            <div className="flex justify-between text-xs text-brown/70 font-medium">
              <span>Número de Comensales:</span>
              <span className="font-bold text-brown">{numGuests} personas</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-brown/50 uppercase tracking-wider font-semibold">Total Estimado</span>
              <span className="text-3xl font-serif font-bold text-secondary">{totalBudget.toFixed(2)}€</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary px-3 py-1.5 rounded flex items-center gap-1">
              <Sparkles size={12} /> IVA Incluido
            </span>
          </div>

          <div className="bg-surface/40 p-4 rounded-xl border border-border/50 flex gap-2.5 items-start">
            <HelpCircle size={18} className="text-secondary shrink-0 mt-0.5" />
            <p className="text-[11px] text-brown/75 leading-relaxed font-body">
              ¿Quieres añadir barra libre, cortador de jamón o música en directo? Indica tus caprichos en los comentarios al reservar y lo incluiremos.
            </p>
          </div>

          <button 
            onClick={() => {
              const element = document.getElementById('reservas');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-secondary text-white font-semibold py-3 rounded-full hover:bg-hover transition-colors shadow-sm flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Calendar size={16} /> Solicitar Fecha del Evento
          </button>
        </div>
      </div>
    </div>
  );
}
