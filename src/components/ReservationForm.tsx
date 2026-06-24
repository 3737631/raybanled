import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Calendar, Clock, Users, Phone, Mail, User, Clipboard } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', eventType: 'normal', comments: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [reservationCode, setReservationCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = `CAP-${Math.floor(1000 + Math.random() * 9000)}`;
      setReservationCode(randomCode);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="reservas" className="py-24 bg-background relative overflow-hidden border-b border-primary/30">
      <div className="absolute top-0 left-0 w-full h-4 bg-tile-pattern opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-accent" /> Reservar Mesa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text mt-4 mb-2">Disfruta la Experiencia</h2>
          <p className="text-sm text-[#706040]">Asegura tu mesa en nuestros acogedores comedores o en la fresca terraza exterior.</p>
        </div>

        <div className="p-6 sm:p-10 border border-border relative bg-white/95 rounded-none shadow-sm">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text uppercase flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent" /> Nombre completo</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-background/50 focus:bg-white focus:outline-none text-sm" placeholder="María García" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text uppercase flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-accent" /> Correo electrónico</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-background/50 focus:bg-white focus:outline-none text-sm" placeholder="ejemplo@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text uppercase flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-accent" /> Teléfono</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-background/50 focus:bg-white focus:outline-none text-sm" placeholder="612 345 678" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text uppercase flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent" /> Fecha</label>
                    <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-background/50 focus:bg-white focus:outline-none text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text uppercase flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" /> Hora de llegada</label>
                    <select name="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-background/50 focus:bg-white focus:outline-none text-sm cursor-pointer">
                      <option value="">Seleccionar</option>
                      <option value="13:30">13:30 h</option>
                      <option value="14:00">14:00 h</option>
                      <option value="14:30">14:30 h</option>
                      <option value="20:30">20:30 h</option>
                      <option value="21:30">21:30 h</option>
                    </select>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-accent hover:bg-brown text-white transition-all font-bold text-sm cursor-pointer flex items-center justify-center gap-2">
                  {isSubmitting ? 'Procesando...' : 'Confirmar Reserva de Mesa'}
                </button>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 space-y-6 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-500/10 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-text">¡Reserva Solicitada con Éxito!</h3>
                  <p className="text-xs text-brown mt-1">Tu mesa estará lista. Tu código de reserva es: <span className="font-extrabold text-accent">{reservationCode}</span></p>
                </div>
                <button onClick={() => setSubmitted(false)} className="py-2.5 px-4 border border-primary text-xs font-bold text-brown cursor-pointer font-sans">
                  Hacer otra reserva
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
