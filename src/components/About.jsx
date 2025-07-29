import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target size={32} className="text-secondary" />,
      title: 'Inovação Constante',
      description:
        'Buscamos e aplicamos as mais recentes tecnologias e métodos construtivos para garantir eficiência e resultados superiores.',
    },
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      title: 'Qualidade Garantida',
      description:
        'Nosso compromisso é com a excelência em cada detalhe, desde o planejamento até a entrega final da obra.',
    },
    {
      icon: <Users size={32} className="text-secondary" />,
      title: 'Equipe Especializada',
      description:
        'Contamos com um time de profissionais altamente qualificados e dedicados a transformar seu projeto em realidade.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding bg-primary">
      <motion.div
        className="container-custom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1581092446327-9b52bdc4f312?q=80&w=1974&auto=format&fit=crop"
              alt="Engenheiros analisando planta de construção"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Comprometidos com a{' '}
              <span className="text-secondary">Excelência</span> na Construção
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              A NTC Brasil nasceu da paixão por construir e do desejo de inovar
              no setor. Acreditamos que cada projeto é uma oportunidade única de
              criar espaços que inspiram, funcionam e perduram. Nossa missão é
              entregar obras com a máxima qualidade, segurança e pontualidade,
              superando as expectativas de nossos clientes.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
