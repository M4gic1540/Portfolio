import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

/**
 * Componente ContactForm que muestra un formulario de contacto.
 * Se utiliza React Hook Form para la gestión y validación de formularios.
 * El formulario es responsive, adaptándose a distintos tamaños de pantalla.
 */
const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  /**
   * Función que se ejecuta al enviar el formulario.
   * @param {Object} data - Los datos recogidos del formulario.
   */
  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    // Lógica para enviar los datos al servidor o servicio.
  };

  return (
    <motion.section 
      className="py-12 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded shadow px-4">
        <h3 className="text-2xl font-bold mb-4 text-center">Contáctanos</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Nombre:</label>
            <input 
              id="name" 
              {...register('name', { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" 
              type="text" 
              placeholder="Tu nombre" 
            />
            {errors.name && <span className="text-red-500 text-sm">Este campo es obligatorio.</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
            <input 
              id="email" 
              {...register('email', { 
                required: true, 
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
              })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" 
              type="email" 
              placeholder="tu@correo.com" 
            />
            {errors.email && <span className="text-red-500 text-sm">Introduce un correo válido.</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
            <textarea 
              id="message" 
              {...register('message', { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" 
              placeholder="Tu mensaje"
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">Este campo es obligatorio.</span>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
