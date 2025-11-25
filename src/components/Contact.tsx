"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Av. Brigadeiro Faria Lima, 3477", "Itaim Bibi, São Paulo - SP"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(11) 3456-7890", "(11) 99999-9999"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["reservas@maisonelegance.com.br", "contato@maisonelegance.com.br"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Seg - Sex: 12h às 15h | 19h às 23h", "Sáb - Dom: 12h às 23h"],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-900/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 154, 71, 0.2) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-gold-400 tracking-[0.3em] text-sm uppercase">
            Reservas
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6">
            <span className="text-dark-50">Reserve Sua</span>{" "}
            <span className="text-gradient">Experiência</span>
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="font-body text-lg text-dark-300 mt-6 max-w-2xl mx-auto">
            Faça sua reserva e prepare-se para uma noite inesquecível. 
            Nossa equipe está pronta para tornar sua visita especial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-dark-50 mb-6">
                Faça Sua Reserva
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-600 to-gold-500 flex items-center justify-center">
                    <Send size={32} className="text-dark-950" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold text-dark-50 mb-2">
                    Reserva Enviada!
                  </h4>
                  <p className="font-body text-dark-300">
                    Entraremos em contato em breve para confirmar sua reserva.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block font-body text-sm text-dark-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-900/50 border border-dark-700 rounded-lg px-4 py-3 text-dark-100 font-body placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm text-dark-300 mb-2">
                        E-mail
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-dark-900/50 border border-dark-700 rounded-lg pl-11 pr-4 py-3 text-dark-100 font-body placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-dark-300 mb-2">
                        Telefone
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-dark-900/50 border border-dark-700 rounded-lg pl-11 pr-4 py-3 text-dark-100 font-body placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date, Time & Guests */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-body text-sm text-dark-300 mb-2">
                        Data
                      </label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-dark-900/50 border border-dark-700 rounded-lg pl-11 pr-4 py-3 text-dark-100 font-body focus:outline-none focus:border-gold-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-dark-300 mb-2">
                        Horário
                      </label>
                      <div className="relative">
                        <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-dark-900/50 border border-dark-700 rounded-lg pl-11 pr-4 py-3 text-dark-100 font-body focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                        >
                          <option value="">Selecione</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-dark-300 mb-2">
                        Pessoas
                      </label>
                      <div className="relative">
                        <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                        <select
                          required
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-dark-900/50 border border-dark-700 rounded-lg pl-11 pr-4 py-3 text-dark-100 font-body focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                        >
                          <option value="">Qtd</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "pessoa" : "pessoas"}
                            </option>
                          ))}
                          <option value="10+">10+ pessoas</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm text-dark-300 mb-2">
                      Observações (opcional)
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-dark-500" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-dark-900/50 border border-dark-700 rounded-lg pl-11 pr-4 py-3 text-dark-100 font-body placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                        placeholder="Alergias, ocasiões especiais, preferências..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-shine bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 px-8 py-4 rounded-lg font-sans font-semibold text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-950/30 border-t-dark-950 rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Confirmar Reserva
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-5 group hover:border-gold-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon size={24} className="text-dark-950" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-dark-100 mb-1">
                        {info.title}
                      </h4>
                      {info.lines.map((line, i) => (
                        <p key={i} className="font-body text-sm text-dark-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className="relative h-[300px] lg:h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8023426891384!2d-46.68306792375731!3d-23.568961861710693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce576b2db79c9f%3A0x5b7b893b9d2b4a58!2sAv.%20Brigadeiro%20Faria%20Lima%2C%203477%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699900000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Restaurante"
                />
                {/* Overlay with marker */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin size={24} className="text-dark-950" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-dark-900/50">
                <p className="font-body text-sm text-dark-300 text-center">
                  📍 Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

