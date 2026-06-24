import React, { useState } from 'react';
import { Info, Sparkles, ShoppingBag } from 'lucide-react';
import { INTERACTIVE_DISHES } from '../data';
import { InteractiveTableDish } from '../types';

export default function InteractiveTable() {
  const [selectedDish, setSelectedDish] = useState<InteractiveTableDish | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Visualización de la Mesa de Mantel de Lino */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        {/* Mesa física simulación */}
        <div className="relative aspect-4/3 w-full bg-mantel rounded-2xl border-4 border-brown shadow-2xl overflow-hidden select-none">
          {/* Adorno de puntillas en los extremos */}
          <div className="absolute top-0 left-0 right-0 puntilla-border-bottom opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 puntilla-border-top opacity-20"></div>

          {/* Sutil centro de mesa */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center">
            <span className="font-cursive text-white/10 text-3xl">Venta El Capricho</span>
          </div>

          {/* Platos / Botones interactivos colocados físicamente */}
          {INTERACTIVE_DISHES.map((dish) => {
            const isSelected = selectedDish?.id === dish.id;
            return (
              <button
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                style={{ left: `${dish.x}%`, top: `${dish.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 shadow-md border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-secondary scale-115 ring-4 ring-secondary/30 z-30'
                    : 'bg-surface/90 border-border/70 hover:scale-108 hover:bg-white z-20'
                }`}
              >
                {/* Microondas/onditas de ripple para llamar a la interacción */}
                {!isSelected && (
                  <span className="absolute inset-0 rounded-full border-2 border-secondary animate-ripple"></span>
                )}
                {dish.icon}
              </button>
            );
          })}
        </div>
        <p className="text-center text-xs text-brown/60 italic flex items-center justify-center gap-1.5">
          <Info size={14} /> Pulsa en cada icono sobre el mantel de lino para ver la ficha del plato cordobés.
        </p>
      </div>

      {/* Ficha descriptiva del Plato seleccionado */}
      <div className="lg:col-span-5">
        <div className="bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-md min-h-[300px] flex flex-col justify-between">
          {selectedDish ? (
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-4xl">{selectedDish.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider bg-secondary/15 text-secondary px-3 py-1 rounded-full">
                  {selectedDish.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-brown leading-tight">
                  {selectedDish.name}
                </h3>
                <p className="text-sm text-brown/80 mt-3 leading-relaxed font-body">
                  {selectedDish.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/40 pt-5 mt-2">
                <div className="flex flex-col">
                  <span className="text-xs text-brown/50 uppercase tracking-wider">Precio de Carta</span>
                  <span className="text-2xl font-serif font-bold text-secondary">{selectedDish.price.toFixed(2)}€</span>
                </div>
                
                {/* Sello de frescura o artesanal */}
                <span className="text-[10px] font-bold uppercase tracking-wider bg-tile/10 text-tile px-3 py-1.5 rounded flex items-center gap-1">
                  <Sparkles size={12} /> Elaboración Propia
                </span>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
              <div className="p-4 bg-surface/40 rounded-full text-secondary">
                <ShoppingBag size={32} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-brown">Mesa Vacía</h3>
                <p className="text-xs text-brown/60 max-w-xs mt-1.5">
                  Selecciona cualquiera de las raciones o bebidas de nuestro mantel andaluz para ver su ficha artesanal detallada.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
