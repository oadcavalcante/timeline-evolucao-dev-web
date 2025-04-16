'use client';

import { motion } from 'framer-motion';

export default function Example1940s() {
  return (
    <div className="bg-black text-green-500 font-mono p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl mb-4">Boletim de Computação ENIAC - 1945</h1>
        <p className="text-lg leading-relaxed">
          Bem-vindo ao ENIAC, o primeiro computador eletrônico! Esta interface
          simula um terminal da época, usado para cálculos balísticos. Sem web,
          tudo era via cartões perfurados e painéis de controle.
        </p>
        <p className="mt-4">
          Comando: <span className="animate-pulse">CALCULAR TRAJETÓRIA...</span>
        </p>
      </motion.div>
    </div>
  );
}
