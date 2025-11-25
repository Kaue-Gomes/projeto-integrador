"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, Wine, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Menu Exclusivo",
    description: "Pratos autorais criados pelo Chef Pierre Laurent com ingredientes selecionados da estação.",
  },
  {
    icon: Wine,
    title: "Carta de Vinhos",
    description: "Mais de 500 rótulos selecionados dos melhores vinhedos do mundo para harmonizar.",
  },
  {
    icon: Sparkles,
    title: "Experiência Única",
    description: "Cada visita é uma jornada sensorial cuidadosamente orquestrada para encantar.",
  },
  {
    icon: Clock,
    title: "Atendimento Impecável",
    description: "Equipe treinada para oferecer um serviço discreto, atencioso e personalizado.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover group relative"
            >
              <div className="glass rounded-xl p-8 h-full text-center border border-transparent hover:border-gold-500/20 transition-all">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-600 to-gold-700 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-shadow"
                >
                  <feature.icon size={28} className="text-dark-950" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-dark-50 mb-3 group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="font-body text-dark-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="w-12 h-0.5 mx-auto mt-6 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

