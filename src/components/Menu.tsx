"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Flame, Leaf } from "lucide-react";

const categories = ["Entradas", "Principais", "Sobremesas", "Bebidas"];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isChefChoice?: boolean;
  isVegan?: boolean;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const menuItems: MenuItems = {
  Entradas: [
    {
      name: "Carpaccio de Wagyu A5",
      description: "Finas fatias de wagyu, trufa negra, rúcula selvagem e parmesão 36 meses",
      price: "R$ 189",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
      isChefChoice: true,
    },
    {
      name: "Vieiras Grelhadas",
      description: "Vieiras frescas, purê de couve-flor trufado e caviar de limão",
      price: "R$ 156",
      image: "https://images.unsplash.com/photo-1599021456807-ad32e4a3e9cd?q=80&w=2070",
    },
    {
      name: "Foie Gras Mi-cuit",
      description: "Terrine de foie gras, brioche caseiro e geleia de figo",
      price: "R$ 198",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070",
    },
    {
      name: "Burrata Cremosa",
      description: "Burrata italiana, tomates heirloom, pesto de manjericão e redução balsâmica",
      price: "R$ 128",
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=2070",
      isVegan: true,
    },
  ],
  Principais: [
    {
      name: "Filé Mignon Wellington",
      description: "Filé envolto em duxelles e massa folhada, molho périgueux",
      price: "R$ 289",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2069",
      isChefChoice: true,
    },
    {
      name: "Robalo ao Champagne",
      description: "Robalo selvagem, espuma de champagne, legumes baby e caviar",
      price: "R$ 256",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2069",
    },
    {
      name: "Cordeiro Provençal",
      description: "Carré de cordeiro, crosta de ervas, ratatouille e jus",
      price: "R$ 278",
      image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=2070",
    },
    {
      name: "Risotto de Funghi Porcini",
      description: "Arroz arbóreo, cogumelos porcini frescos, trufa branca e parmesão",
      price: "R$ 168",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070",
      isVegan: true,
    },
  ],
  Sobremesas: [
    {
      name: "Soufflé de Chocolate",
      description: "Chocolate belga 70%, coração fundente e sorvete de baunilha bourbon",
      price: "R$ 89",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070",
      isChefChoice: true,
    },
    {
      name: "Tarte Tatin",
      description: "Maçã caramelizada, massa folhada e chantilly de cardamomo",
      price: "R$ 78",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2065",
    },
    {
      name: "Panna Cotta",
      description: "Creme italiano, coulis de frutas vermelhas e crocante de amêndoas",
      price: "R$ 68",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2069",
    },
    {
      name: "Crème Brûlée",
      description: "Creme de baunilha tahitiana com crosta caramelizada",
      price: "R$ 72",
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070",
    },
  ],
  Bebidas: [
    {
      name: "Château Margaux 2015",
      description: "Grand Cru Classé, Bordeaux, França - taça",
      price: "R$ 320",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
      isChefChoice: true,
    },
    {
      name: "Dom Pérignon Vintage",
      description: "Champagne, França - taça",
      price: "R$ 280",
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=2069",
    },
    {
      name: "Cocktail Maison",
      description: "Gin artesanal, elderflower, pepino e tônica premium",
      price: "R$ 68",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070",
    },
    {
      name: "Café Especial",
      description: "Blend exclusivo, grãos selecionados do Vale do Café",
      price: "R$ 28",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    },
  ],
};

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Entradas");

  return (
    <section id="menu" className="py-24 lg:py-32 bg-dark-900/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-900/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-gold-900/5 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-gold-400 tracking-[0.3em] text-sm uppercase">
            Cardápio
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6">
            <span className="text-dark-50">Uma Jornada</span>{" "}
            <span className="text-gradient">Gastronômica</span>
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="font-body text-lg text-dark-300 mt-6 max-w-2xl mx-auto">
            Cada prato é uma obra de arte cuidadosamente elaborada pelo nosso 
            chef executivo, celebrando os melhores ingredientes da estação
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-lg px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-semibold"
                  : "glass text-dark-200 hover:text-gold-400"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-hover group glass rounded-xl overflow-hidden flex"
            >
              {/* Image */}
              <div className="w-32 sm:w-40 flex-shrink-0 img-zoom">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-dark-50 group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {item.isChefChoice && (
                        <span className="bg-gradient-to-r from-gold-600 to-gold-500 p-1 rounded" title="Escolha do Chef">
                          <Flame size={14} className="text-dark-950" />
                        </span>
                      )}
                      {item.isVegan && (
                        <span className="bg-green-600 p-1 rounded" title="Vegetariano">
                          <Leaf size={14} className="text-dark-50" />
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="font-body text-sm text-dark-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-gradient">
                    {item.price}
                  </span>
                  <button className="font-sans text-sm text-gold-400 hover:text-gold-300 transition-colors">
                    + Detalhes
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-body text-dark-400 mb-4">
            Menu degustação disponível sob reserva
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-shine bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 px-8 py-4 rounded font-sans font-semibold text-lg tracking-wide"
          >
            Ver Menu Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

