'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Example2000s() {
  const [content, setContent] = useState(
    'Bem-vindo! Este blog usa CSS e JavaScript, simulando a Web 2.0 com interatividade.'
  );

  const loadContent = (page: string) => {
    setContent(`Carregando ${page}... (Simulação AJAX)`);
    setTimeout(() => setContent(`Conteúdo de ${page} carregado!`), 500);
  };

  return (
    <div className="bg-gray-200 font-sans p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-3xl bg-white shadow-lg p-6 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl text-blue-700 text-center mb-4">
          Tech Blog 2005
        </h1>
        <nav className="bg-blue-700 text-white p-2 text-center space-x-4">
          <Link
            href="#"
            onClick={() => loadContent('Início')}
            className="hover:underline"
          >
            Início
          </Link>
          <Link
            href="#"
            onClick={() => loadContent('Sobre')}
            className="hover:underline"
          >
            Sobre
          </Link>
          <Link
            href="#"
            onClick={() => loadContent('Contato')}
            className="hover:underline"
          >
            Contato
          </Link>
        </nav>
        <div className="mt-4 p-4 bg-gray-100 min-h-[200px] text-sm">
          <p>{content}</p>
        </div>
      </motion.div>
    </div>
  );
}
