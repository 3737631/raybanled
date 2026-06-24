import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, Clock, MessageSquare, Check, Users } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: '',
    time: '13:30',
    eventType: 'comida',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      guests: '2',
      date: '',
      time: '13:30',
      eventType: 'comida',
      comments: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-md">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
                <User size={14} className="text-secondary" /> Tu Nombre completo
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
                <Phone size={14} className="text-secondary" /> Número de Teléfono
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ej. +34 600 000 000"
                className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
                <Mail size={14} className="text-secondary" /> Correo Electrónico
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="juan@ejemplo.com"
                className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>

            {/* Número de Comensales */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-guests" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
                <Users size={14} className="text-secondary" /> Número de Personas
              </label>
              <select
                id="form-guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
              >
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="3">3 Personas</option>
                <option value="4">4 Personas</option>
                <option value="5">5 Personas</option>
                <option value="6">6 Personas</option>
                <option value="7">7 Personas</option>
                <option value="8">8 Personas</option>
                <option value="event">Evento Especial (+8)</option>
              </select>
            </div>

            {/* Fecha */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-date" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
                <Calendar size={14} className="text-secondary" /> Fecha de Reserva
              </label>
              <input
                id="form-date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
              />
            </div>

            {/* Hora */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-time" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
                <Clock size={14} className="text-secondary" /> Hora de Reserva
              </label>
              <select
                id="form-time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all cursor-pointer"
              >
                {/* Almuerzos */}
                <option value="13:00">13:00 h (Almuerzo)</option>
                <option value="13:30">13:30 h (Almuerzo)</option>
                <option value="14:00">14:00 h (Almuerzo)</option>
                <option value="14:30">14:30 h (Almuerzo)</option>
                <option value="15:00">15:00 h (Almuerzo)</option>
                <option value="15:30">15:30 h (Almuerzo)</option>
                {/* Cenas */}
                <option value="20:30">20:30 h (Cena - Vier/Sáb)</option>
                <option value="21:00">21:00 h (Cena - Vier/Sáb)</option>
                <option value="21:30">21:30 h (Cena - Vier/Sáb)</option>
                <option value="22:00">22:00 h (Cena - Vier/Sáb)</option>
                <option value="22:30">22:30 h (Cena - Vier/Sáb)</option>
              </select>
            </div>
          </div>

          {/* Tipo de reserva / Evento */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
              <Check size={14} className="text-secondary" /> Propósito del Encuentro
            </span>
            <div className="grid grid-cols-3 gap-3">
              <label className="border border-border/80 p-3 rounded-lg flex flex-col items-center gap-1.5 text-center cursor-pointer select-none bg-surface/10 hover:bg-surface/20 transition-colors">
                <input
                  type="radio"
                  name="eventType"
                  value="comida"
                  checked={formData.eventType === 'comida'}
                  onChange={() => setFormData({ ...formData, eventType: 'comida' })}
                  className="accent-secondary"
                />
                <span className="text-xs font-semibold text-brown">Comida / Almuerzo</span>
              </label>

              <label className="border border-border/80 p-3 rounded-lg flex flex-col items-center gap-1.5 text-center cursor-pointer select-none bg-surface/10 hover:bg-surface/20 transition-colors">
                <input
                  type="radio"
                  name="eventType"
                  value="celebracion"
                  checked={formData.eventType === 'celebracion'}
                  onChange={() => setFormData({ ...formData, eventType: 'celebracion' })}
                  className="accent-secondary"
                />
                <span className="text-xs font-semibold text-brown">Celebración Familiar</span>
              </label>

              <label className="border border-border/80 p-3 rounded-lg flex flex-col items-center gap-1.5 text-center cursor-pointer select-none bg-surface/10 hover:bg-surface/20 transition-colors">
                <input
                  type="radio"
                  name="eventType"
                  value="empresa"
                  checked={formData.eventType === 'empresa'}
                  onChange={() => setFormData({ ...formData, eventType: 'empresa' })}
                  className="accent-secondary"
                />
                <span className="text-xs font-semibold text-brown">Encuentro de Empresa</span>
              </label>
            </div>
          </div>

          {/* Comentarios adicionales */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-comments" className="text-xs font-bold uppercase tracking-wider text-brown/80 flex items-center gap-1.5">
              <MessageSquare size={14} className="text-secondary" /> Observaciones o Alérgenos
            </label>
            <textarea
              id="form-comments"
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              placeholder="Ej. Necesitamos trona para bebé, espacio para carrito, mesa en el patio, celiaquía..."
              rows={3}
              className="w-full bg-surface/30 border border-border/80 px-4 py-2.5 rounded-lg text-sm text-text focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-white font-bold py-3.5 rounded-full hover:bg-hover transition-colors shadow-md mt-2 flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            Confirmar Reserva Online
          </button>
        </form>
      ) : (
        <div className="text-center py-12 flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-green-500/15 text-green-600 flex items-center justify-center border border-green-500/30">
            <Check size={32} />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-brown">¡Reserva Recibida con Éxito!</h3>
            <p className="text-sm text-brown/75 max-w-md mx-auto mt-2 leading-relaxed">
              Muchas gracias, <strong className="text-secondary">{formData.name}</strong>. Hemos bloqueado tu mesa para el día <strong>{formData.date}</strong> a las <strong>{formData.time}h</strong> para <strong>{formData.guests} personas</strong>.
            </p>
            <p className="text-xs text-brown/50 mt-4 max-w-sm mx-auto">
              Te hemos enviado un correo de confirmación y en breve recibirás un recordatorio por WhatsApp.
            </p>
          </div>
          <button
            onClick={resetForm}
            className="mt-4 border border-border text-brown hover:bg-surface/50 font-semibold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Hacer otra Reserva
          </button>
        </div>
      )}
    </div>
  );
}
