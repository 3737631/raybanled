import React, { useState } from 'react';
import { Search, Flame, Sparkles, Leaf, ShieldAlert } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

const CATEGORIES = [
  { id: 'todos', label: 'Todo' },
  { id: 'entrantes', label: 'Entrantes' },
  { id: 'carnes', label: 'Carnes' },
  { id: 'pescados', label: 'Pescados' },
  { id: 'arroces', label: 'Arroces' },
  { id: 'postres', label: 'Postres' }
];

export default function MenuCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
  const [celiacFilter, setCeliacFilter] = useState(false);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const categoryMatches = selectedCategory === 'todos' || item.category === selectedCategory;
    const searchMatches = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const vegetarianMatches = !vegetarianFilter || item.vegetarian === true;
    const celiacMatches = !celiacFilter || item.celiac === true;
    
    return categoryMatches && searchMatches && vegetarianMatches && celiacMatches;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Buscador y Filtros Rápidos */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-surface/40 p-4 rounded-xl border border-border/60">
        {/* Input Buscador */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Buscar plato o ingrediente..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-border/80 pl-10 pr-4 py-2.5 rounded-full text-sm text-text focus:outline-none focus:border-secondary transition-colors"
          />
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown/50" />
        </div>

        {/* Filtros de Alergias */}
        <div className="flex items-center gap-3.5 w-full md:w-auto justify-center">
          <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold uppercase tracking-wider text-brown/80">
            <input
              type="checkbox"
              checked={vegetarianFilter}
              onChange={(e) => setVegetarianFilter(e.target.checked)}
              className="accent-secondary w-4 h-4 rounded"
            />
            <span className="flex items-center gap-1 text-green-700">
              <Leaf size={14} /> Veggie
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold uppercase tracking-wider text-brown/80">
            <input
              type="checkbox"
              checked={celiacFilter}
              onChange={(e) => setCeliacFilter(e.target.checked)}
              className="accent-secondary w-4 h-4 rounded"
            />
            <span className="flex items-center gap-1 text-amber-700">
              <ShieldAlert size={14} /> Sin Gluten
            </span>
          </label>
        </div>
      </div>

      {/* Categorías (Pestañas de Selección) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center border-b border-border/30">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-secondary text-white shadow-sm'
                : 'bg-surface/50 border border-border/40 text-brown hover:bg-border/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Resultados de la Carta */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
            >
              {/* Imagen del Plato */}
              {item.image && (
                <div className="h-48 overflow-hidden relative shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Etiquetas populares */}
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                      <Flame size={10} /> Popular
                    </div>
                  )}
                </div>
              )}

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-brown leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-secondary font-serif font-bold shrink-0">
                      {item.price.toFixed(2)}€
                    </span>
                  </div>
                  <p className="text-xs text-brown/70 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                {/* Sellos de Alérgenos */}
                <div className="flex items-center gap-2 mt-4 pt-3.5 border-t border-border/30">
                  {item.vegetarian && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-green-500/10 text-green-700 px-2 py-0.5 rounded flex items-center gap-0.5">
                      <Leaf size={10} /> Vegetariano
                    </span>
                  )}
                  {item.celiac && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded flex items-center gap-0.5">
                      <ShieldAlert size={10} /> Sin Gluten
                    </span>
                  )}
                  {!item.vegetarian && !item.celiac && (
                    <span className="text-[9px] font-medium uppercase tracking-wider text-brown/40">
                      Receta Tradicional
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface/35 border border-dashed border-border rounded-xl">
          <p className="text-brown/60 text-sm font-medium">No se han encontrado platos con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
}
