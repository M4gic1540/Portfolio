import React from 'react';
import Card from './Card';
import heroImg from '../assets/heroImg.jpg';

/**
 * Componente Services que muestra 3 servicios ofrecidos en Cards.
 */
const Services = () => {
  // Datos de ejemplo para los servicios
  const servicesData = [
    {
      image: {heroImg},
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos y responsivos.',
    },
    {
      image: 'https://source.unsplash.com/random/300x200?design',
      title: 'Diseño UI/UX',
      description: 'Diseño de interfaces atractivas y experiencia de usuario intuitiva.',
    },
    {
      image: 'https://source.unsplash.com/random/300x200?marketing',
      title: 'Marketing Digital',
      description: 'Estrategias efectivas para aumentar tu presencia online.',
    },
  ];

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
