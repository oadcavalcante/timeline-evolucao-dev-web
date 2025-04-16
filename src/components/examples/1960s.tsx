'use client';

import { motion } from 'framer-motion';

export default function Example1960s() {
  return (
    <div className="bg-gray-900 text-amber-500 font-mono p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl mb-4">IBM System/360 - Terminal 1964</h1>
        <p className="text-base leading-relaxed">
          Conectado a um mainframe IBM System/360, usado por empresas para
          gerenciar dados. A interface é puramente textual, com comandos em
          COBOL ou BASIC, refletindo a era pré-web.
        </p>
        <p className="mt-4 text-amber-300">
          &gt; EXECUTAR RELATÓRIO FINANCEIRO
        </p>
        <p>Processando...</p>
      </motion.div>
    </div>
  );
}
