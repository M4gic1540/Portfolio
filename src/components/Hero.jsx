import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/heroImg.webp';

/**
 * Componente Hero que muestra la sección principal de la landing page.
 * Se utiliza Framer Motion para animar el contenido de forma atractiva.
 * Se han aumentado los tamaños de letra y se utiliza el mismo color de texto que el Header.
 */
const Hero = () => {
  return (
    <motion.section 
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold text-gray-900 mb-4">Bienvenido a Mi Presentación</h2>
      <p className="text-2xl text-gray-900">Descubre más sobre nuestro proyecto innovador.</p>
    </motion.section>
  );
};

export default Hero;
