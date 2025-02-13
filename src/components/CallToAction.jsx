import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente CallToAction que muestra un mensaje llamativo con un botón de acción.
 */
const CallToAction = () => {
  return (
    <motion.section 
      className="py-12 bg-indigo-600 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-4">¡No esperes más!</h2>
      <p className="text-xl mb-8">Únete a nosotros y descubre un mundo de oportunidades.</p>
      <a 
        href="/contact"
        className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100 transition-colors"
      >
        Contáctanos Ahora
      </a>
    </motion.section>
  );
};

export default CallToAction;
