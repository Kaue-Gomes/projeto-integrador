"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Clock, Users, Utensils } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excelência Premiada",
    description: "3 estrelas Michelin consecutivas",
  },
  {
    icon: Utensils,
    title: "Ingredientes Premium",
    description: "Produtos selecionados diariamente",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais de classe mundial",
  },
  {
    icon: Clock,
    title: "Tradição & Inovação",
    description: "15 anos de história gastronômica",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 154, 71, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 img-zoom rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974"
                  alt="Elegant restaurant interior"
                  width={600}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Secondary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 lg:-right-12 w-48 lg:w-64 z-20"
              >
                <div className="img-zoom rounded-lg overflow-hidden border-4 border-dark-950 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070"
                    alt="Gourmet dish"
                    width={300}
                    height={300}
                    className="w-full h-40 lg:h-48 object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/30 rounded-lg -z-10" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -left-6 lg:-left-10 glass rounded-lg p-4 z-30"
              >
                <p className="font-display text-4xl font-bold text-gradient">15</p>
                <p className="font-body text-sm text-dark-300">Anos de<br />Excelência</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-body text-gold-400 tracking-[0.3em] text-sm uppercase"
            >
              Nossa História
            </motion.span>

            {/* Heading */}
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6">
              <span className="text-dark-50">Onde a Tradição</span>
              <br />
              <span className="text-gradient">Encontra a Arte</span>
            </h2>

            {/* Description */}
            <p className="font-body text-lg text-dark-300 leading-relaxed mb-6">
              Fundado em 2009, o Maison Élégance nasceu do sonho de criar um 
              espaço onde a gastronomia transcende o ordinário. Cada detalhe 
              foi cuidadosamente pensado para proporcionar uma experiência 
              única e memorável.
            </p>
            <p className="font-body text-lg text-dark-300 leading-relaxed mb-8">
              Nossa filosofia combina técnicas culinárias clássicas com 
              inovação contemporânea, utilizando os ingredientes mais frescos 
              e selecionados criteriosamente de produtores locais e 
              internacionais.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-dark-900/50 hover:bg-dark-900 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-gold-700 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-dark-950" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-dark-100">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-dark-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#chef"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex btn-shine bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 px-8 py-4 rounded font-sans font-semibold text-lg tracking-wide"
            >
              Conhecer Nossa Equipe
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

