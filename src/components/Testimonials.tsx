"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marina Santos",
    role: "Crítica Gastronômica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2069",
    rating: 5,
    text: "Uma experiência transcendente. Cada prato conta uma história, cada sabor é uma descoberta. O Maison Élégance redefiniu o que significa fine dining para mim.",
  },
  {
    name: "Roberto Almeida",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2069",
    rating: 5,
    text: "Celebramos nosso aniversário de casamento aqui e foi simplesmente perfeito. O atendimento impecável, o ambiente romântico e a comida extraordinária fizeram da noite algo mágico.",
  },
  {
    name: "Isabela Ferreira",
    role: "Sommelier",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    rating: 5,
    text: "A carta de vinhos é impressionante, mas é a harmonização sugerida pela equipe que eleva a experiência. Profissionais excepcionais que entendem verdadeiramente de gastronomia.",
  },
  {
    name: "Carlos Mendes",
    role: "Chef Aposentado",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    rating: 5,
    text: "Como profissional do ramo, sou naturalmente crítico. O Chef Pierre Laurent superou todas as minhas expectativas. Técnica impecável aliada à criatividade genuína.",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Influenciadora Digital",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2069",
    rating: 5,
    text: "Cada detalhe é pensado com carinho. Da apresentação dos pratos à atmosfera do ambiente, tudo contribui para uma experiência única e memorável.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 154, 71, 0.5) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
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
            Depoimentos
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6">
            <span className="text-dark-50">O Que Dizem</span>{" "}
            <span className="text-gradient">Nossos Clientes</span>
          </h2>
          <div className="decorative-line mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-dark-200 hover:text-gold-400 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-dark-200 hover:text-gold-400 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 lg:p-12"
          >
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <Quote size={48} className="text-gold-500/30 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-xl lg:text-2xl text-dark-200 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500/30">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-display text-lg font-semibold text-dark-50">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="font-body text-gold-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-gold-600 to-gold-400"
                    : "bg-dark-600 hover:bg-dark-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "4.9", label: "Avaliação Média" },
            { value: "2500+", label: "Avaliações 5 Estrelas" },
            { value: "98%", label: "Recomendariam" },
            { value: "#1", label: "no TripAdvisor" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass rounded-xl"
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="font-body text-sm text-dark-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

