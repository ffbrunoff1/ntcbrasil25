import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section
      id="home"
      className="relative bg-gray-50 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-secondary opacity-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
      ></div>
      <div className="container-custom mx-auto px-6 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6"
              variants={itemVariants}
            >
              Transformando Sonhos em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Realidade Concreta
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Comprometidos com a excelência, a NTC Brasil oferece soluções
              inovadoras e eficientes para todos os tipos de projetos de
              construção.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="btn btn-primary inline-flex items-center group"
              >
                Entre em Contato Conosco Hoje Mesmo!
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative h-80 md:h-full"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-3xl transform -rotate-6"></div>
            <div
              className="absolute inset-0 bg-primary rounded-3xl shadow-2xl flex items-center justify-center p-8"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
