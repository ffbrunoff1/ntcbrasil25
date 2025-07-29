import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-accent text-text-secondary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container-custom mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753748307773_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="mt-4 max-w-xs text-gray-300">
              Construindo o futuro com inovação, qualidade e compromisso.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Fale Conosco
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-primary transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>
                <p>padre lebret 801 g05 bloco 03</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
