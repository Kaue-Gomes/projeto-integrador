"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Chef", href: "#chef" },
  { name: "Galeria", href: "#gallery" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient">
                Maison
              </span>
              <span className="font-body text-lg md:text-xl text-gold-400 ml-2 italic">
                Élégance
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-body text-lg text-dark-200 hover:text-gold-400 transition-colors link-underline"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 text-gold-400 font-body text-lg"
            >
              <Phone size={18} />
              <span>(11) 99999-9999</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-shine bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 px-6 py-3 rounded font-sans font-semibold tracking-wide"
            >
              Reservar Mesa
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gold-400 p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-4 mx-4 rounded-lg overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 font-body text-lg text-dark-200 hover:text-gold-400 hover:bg-dark-900/50 transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="px-6 py-4 border-t border-gold-900/30 mt-2">
                <button className="w-full btn-shine bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 px-6 py-3 rounded font-sans font-semibold">
                  Reservar Mesa
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

