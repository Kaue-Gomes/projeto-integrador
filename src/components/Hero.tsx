"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
          alt="Fine dining restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/60 to-dark-950" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
        <div className="absolute top-1/3 right-10 w-px h-40 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute top-1/2 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Star size={16} className="text-gold-400 fill-gold-400" />
          <span className="font-body text-gold-300 text-sm tracking-wider">
            PREMIADO COMO MELHOR RESTAURANTE 2025
          </span>
          <Star size={16} className="text-gold-400 fill-gold-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="text-dark-50">A Arte da</span>
            <br />
            <span className="text-gradient">Gastronomia</span>
          </h1>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="decorative-line mx-auto my-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-xl sm:text-2xl md:text-3xl text-dark-200 max-w-3xl mx-auto leading-relaxed"
        >
          Uma experiência sensorial única onde cada prato conta uma história 
          e cada momento se transforma em memória inesquecível
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-shine bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 px-8 py-4 rounded font-sans font-semibold text-lg tracking-wide"
          >
            Explorar Menu
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gold-500/50 text-gold-400 px-8 py-4 rounded font-sans font-semibold text-lg tracking-wide hover:bg-gold-500/10 transition-colors"
          >
            Fazer Reserva
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          {[
            { number: "15+", label: "Anos de Excelência" },
            { number: "50k+", label: "Clientes Satisfeitos" },
            { number: "3", label: "Estrelas Michelin" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                {stat.number}
              </p>
              <p className="font-body text-sm sm:text-base text-dark-300 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gold-400/60 hover:text-gold-400 transition-colors"
        >
          <span className="font-body text-sm tracking-widest">SCROLL</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}

