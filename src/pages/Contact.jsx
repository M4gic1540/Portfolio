import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

/**
 * Página de Contacto que utiliza el Layout para asegurar que el Footer 
 * permanezca al fondo en todas las resoluciones.
 */
const ContactPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
