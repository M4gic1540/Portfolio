import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Componente Layout que envuelve el contenido de la página y asegura
 * que el Footer permanezca al fondo mediante una estructura flex.
 *
 * @param {React.ReactNode} children - Contenido principal de la página.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
