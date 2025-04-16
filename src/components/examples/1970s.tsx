'use client';

import { motion } from 'framer-motion';

export default function Example1970s() {
  return (
    <div className="bg-black text-green-400 font-mono p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-3xl border-4 border-gray-600 bg-gray-900 p-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-xl text-cyan-400 mb-4">Apple II - 1977</h1>
        <p className="text-sm leading-relaxed">
          Esta é a tela do Apple II, um dos primeiros PCs. Sem web, os usuários
          viam gráficos simples ou texto, como jogos ou o VisiCalc. Note as
          cores limitadas e o estilo pixelado.
        </p>
        <pre className="mt-4 text-purple-400 text-xs">
          *****
          <br />
          * * JOGO ESTELAR
          <br />
          * *<br />
          *****
        </pre>
      </motion.div>
    </div>
  );
}
