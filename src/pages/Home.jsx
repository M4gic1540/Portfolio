import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

/**
 * Página principal que integra los componentes de la landing page.
 */
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <CallToAction />
            <Footer />
        </>
    );
};

export default Home;
