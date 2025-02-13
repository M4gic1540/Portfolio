import React from 'react';
import { motion } from 'framer-motion';

/**
 * Página para rutas no definidas (404).
 * Diseño moderno con fondo de gradiente oscuro y totalmente responsive.
 */
const NotFound = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-6xl font-bold text-white mb-4">404</h2>
      <p className="text-2xl text-white mb-8">Página no encontrada</p>
      <a 
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
      >
        Volver al inicio
      </a>
    </motion.div>
  );
};

export default NotFound;
