"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    alt: "Elegant dining room",
    category: "Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    alt: "Gourmet dish presentation",
    category: "Pratos",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2069",
    alt: "Chef preparing food",
    category: "Cozinha",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974",
    alt: "Restaurant ambiance",
    category: "Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=2080",
    alt: "Dessert creation",
    category: "Pratos",
  },
  {
    src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?q=80&w=2070",
    alt: "Wine selection",
    category: "Vinhos",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2069",
    alt: "Fresh ingredients",
    category: "Ingredientes",
  },
  {
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058",
    alt: "Private dining",
    category: "Ambiente",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-dark-900/30 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-gold-400 tracking-[0.3em] text-sm uppercase">
            Galeria
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6">
            <span className="text-dark-50">Momentos</span>{" "}
            <span className="text-gradient">Memoráveis</span>
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="font-body text-lg text-dark-300 mt-6 max-w-2xl mx-auto">
            Cada visita ao Maison Élégance é uma experiência única. 
            Explore nosso ambiente, pratos e momentos especiais.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative cursor-pointer group ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                    <span className="font-body text-sm text-gold-400 tracking-wider uppercase">
                      {image.category}
                    </span>
                    <p className="font-display text-lg text-dark-50 mt-1">
                      Ver Imagem
                    </p>
                  </div>
                </div>
                {/* Gold Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/50 transition-all duration-500 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-body text-dark-400 mb-4">
            Siga-nos no Instagram para mais momentos exclusivos
          </p>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border border-gold-500/50 text-gold-400 px-8 py-4 rounded font-sans font-semibold text-lg tracking-wide hover:bg-gold-500/10 transition-colors"
          >
            @maisonelegance
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-dark-950/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-dark-200 hover:text-gold-400 transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 text-dark-200 hover:text-gold-400 transition-colors z-50"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 text-dark-200 hover:text-gold-400 transition-colors z-50"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <span className="font-body text-gold-400 tracking-wider uppercase">
                {galleryImages[selectedImage].category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

