import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Building2, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 size={40} className="text-secondary" />,
      title: 'Construções Residenciais e Comerciais',
      description:
        'Executamos projetos de construção do zero, desde residências unifamiliares a complexos comerciais, com foco em durabilidade e design moderno.',
    },
    {
      icon: <HardHat size={40} className="text-secondary" />,
      title: 'Gestão e Planejamento de Obras',
      description:
        'Oferecemos um gerenciamento completo do seu projeto, garantindo o cumprimento de prazos, orçamentos e padrões de qualidade rigorosos.',
    },
    {
      icon: <Wrench size={40} className="text-secondary" />,
      title: 'Reformas e Modernização',
      description:
        'Transformamos ambientes existentes, atualizando estruturas e acabamentos para criar espaços mais funcionais, seguros e valorizados.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Nossas Soluções em Construção
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender a todas as
            fases do seu projeto com a máxima eficiência.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="bg-secondary/10 p-4 rounded-full w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-semibold text-secondary hover:text-accent transition-colors duration-300"
                >
                  Saiba Mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
