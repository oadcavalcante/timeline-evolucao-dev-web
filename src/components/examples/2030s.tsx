'use client';

import { motion } from 'framer-motion';

export default function Example2030s() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 text-white font-sans p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
          Portal AR/VR 2035
        </h1>
        <p className="text-sm leading-relaxed">
          Bem-vindo à web do futuro! Esta interface simula uma experiência AR/VR
          com IA nativa, onde agentes inteligentes gerenciam tarefas e mundos
          digitais substituem telas. A Web3.0 é totalmente descentralizada.
        </p>
        <motion.div
          className="mt-4 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <p className="mt-2 text-xs">Simulação de holograma interativo</p>
      </motion.div>
    </div>
  );
}
