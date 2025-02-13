import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

// Calcular el año actual una sola vez
const currentYear = new Date().getFullYear();

/**
 * Componente Footer que muestra la parte inferior de la landing page.
 * Incluye iconos de redes sociales y un diseño moderno y responsivo.
 */
const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4 flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition-colors" aria-label='Facebook'>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition-colors" aria-label='Instagram'>
            <FaInstagram />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition-colors" aria-label='Whatsapp'>
            <FaWhatsapp />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition-colors" aria-label='Tiktok'>
            <FaTiktok />
          </a>
        </div>
        <p className="text-sm">&copy; {currentYear} Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
