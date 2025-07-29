import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '', phone: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o
            formulário ou utilize nossos canais de contato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3 bg-primary p-8 md:p-12 rounded-2xl shadow-xl"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone (Opcional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <>
                      <Send className="mr-2" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-start">
              <div className="bg-secondary/10 p-4 rounded-full mr-4">
                <Mail className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">E-mail</h3>
                <p className="text-gray-600">
                  Envie-nos sua dúvida ou projeto.
                </p>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-secondary hover:underline"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-secondary/10 p-4 rounded-full mr-4">
                <MapPin className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Endereço</h3>
                <p className="text-gray-600">padre lebret 801 g05 bloco 03</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
