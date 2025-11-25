"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Heart, ArrowUp } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Início", href: "#home" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Chef", href: "#chef" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ],
  services: [
    { name: "Reservas", href: "#contact" },
    { name: "Eventos Privados", href: "#" },
    { name: "Catering", href: "#" },
    { name: "Menu Degustação", href: "#menu" },
    { name: "Carta de Vinhos", href: "#" },
    { name: "Gift Cards", href: "#" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Cancelamento", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold text-gradient">
                Maison
              </span>
              <span className="font-body text-lg text-gold-400 ml-2 italic">
                Élégance
              </span>
            </Link>
            <p className="font-body text-dark-400 leading-relaxed mb-6">
              Uma experiência gastronômica única onde a arte culinária 
              encontra a elegância em cada detalhe.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-300 hover:text-gold-400 hover:border-gold-500/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display text-lg font-semibold text-dark-50 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-dark-400 hover:text-gold-400 transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-lg font-semibold text-dark-50 mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-dark-400 hover:text-gold-400 transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-lg font-semibold text-dark-50 mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-500 flex-shrink-0 mt-1" />
                <span className="font-body text-dark-400">
                  Av. Brigadeiro Faria Lima, 3477<br />
                  Itaim Bibi, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold-500 flex-shrink-0" />
                <a
                  href="tel:+551134567890"
                  className="font-body text-dark-400 hover:text-gold-400 transition-colors"
                >
                  (11) 3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold-500 flex-shrink-0" />
                <a
                  href="mailto:reservas@maisonelegance.com.br"
                  className="font-body text-dark-400 hover:text-gold-400 transition-colors"
                >
                  reservas@maisonelegance.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="font-body text-sm text-dark-500">
              © {new Date().getFullYear()} Maison Élégance. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="font-body text-sm text-dark-500 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-dark-700">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-body text-sm text-dark-500 flex items-center gap-1">
              Feito com <Heart size={14} className="text-gold-500 fill-gold-500" /> em São Paulo
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-gold-700 flex items-center justify-center text-dark-950 shadow-lg"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

