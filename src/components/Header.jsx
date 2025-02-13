import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Componente Header que muestra el encabezado de la landing page.
 * Incluye un logo y un menú de navegación animado.
 * En resoluciones pequeñas muestra un menú hamburguesa desplegable.
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <motion.header
      className="bg-gray-800 text-white shadow-lg p-4 flex justify-between items-center relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo o nombre de la marca */}
      <div className="text-2xl font-bold">Mi Logo</div>
      {/* Menú de navegación para resoluciones medianas y superiores */}
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-indigo-400">Inicio</Link>
        <Link to="/contact" className="hover:text-indigo-400">Contacto</Link>
        <Link to="/about" className="hover:text-indigo-400">Acerca de</Link>
      </nav>
      {/* Botón de menú para móviles */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none" aria-label="Abrir menú">
          {isOpen ? (
            // Icono de cerrar (X)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icono de menú hamburguesa
            <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Menú desplegable para móviles */}
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-gray-800 text-white md:hidden z-10"
        >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-indigo-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/contact" className="hover:text-indigo-400">
                Contacto
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-indigo-400">
                Acerca de
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
