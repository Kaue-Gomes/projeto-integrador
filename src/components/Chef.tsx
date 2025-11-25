"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, BookOpen, Globe, Quote } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "3 Estrelas Michelin",
    year: "2020 - Presente",
  },
  {
    icon: Globe,
    title: "Top 50 Restaurantes",
    year: "World's Best",
  },
  {
    icon: BookOpen,
    title: "Autor Best-Seller",
    year: "3 Livros Publicados",
  },
];

export default function Chef() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chef" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-gold-400 tracking-[0.3em] text-sm uppercase">
              Chef Executivo
            </span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6">
              <span className="text-gradient">Pierre Laurent</span>
            </h2>
            <p className="font-body text-lg text-dark-300 leading-relaxed mb-6">
              Com mais de 25 anos de experiência nas mais prestigiadas cozinhas 
              do mundo, o Chef Pierre Laurent traz para o Maison Élégance sua 
              visão única de gastronomia contemporânea.
            </p>
            <p className="font-body text-lg text-dark-300 leading-relaxed mb-8">
              Formado pela Le Cordon Bleu em Paris e com passagens por 
              restaurantes estrelados como El Bulli e The French Laundry, 
              Pierre combina técnicas clássicas francesas com influências 
              globais e ingredientes brasileiros.
            </p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative glass rounded-xl p-6 mb-8"
            >
              <Quote size={40} className="text-gold-500/20 absolute top-4 left-4" />
              <p className="font-body text-xl italic text-dark-200 relative z-10 pl-8">
                &ldquo;Cozinhar é transformar ingredientes simples em memórias 
                extraordinárias. Cada prato que criamos é uma carta de amor 
                à gastronomia.&rdquo;
              </p>
              <p className="font-sans text-gold-400 mt-4 pl-8 font-medium">
                — Chef Pierre Laurent
              </p>
            </motion.div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 glass px-4 py-3 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-gold-700 flex items-center justify-center">
                    <item.icon size={20} className="text-dark-950" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-dark-100">
                      {item.title}
                    </p>
                    <p className="font-body text-xs text-dark-400">
                      {item.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077"
                  alt="Chef Pierre Laurent"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold-500/30 rounded-lg -z-10" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 lg:-left-10 glass rounded-lg p-6 z-20"
              >
                <p className="font-display text-5xl font-bold text-gradient">25+</p>
                <p className="font-body text-sm text-dark-300 mt-1">
                  Anos de<br />Experiência
                </p>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

