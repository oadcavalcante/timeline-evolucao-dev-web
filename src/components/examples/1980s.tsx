'use client';

import { motion } from 'framer-motion';

export default function Example1980s() {
  return (
    <div className="bg-gray-300 p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-3xl bg-black p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white border-2 border-black shadow-[4px_4px_0_0_black] p-4">
          <h1 className="text-lg font-bold text-center">
            Macintosh 1984 - Bem-vindo!
          </h1>
          <p className="text-sm leading-relaxed">
            Esta é a interface gráfica do Macintosh, que trouxe janelas e ícones
            ao público. Antes da web, GUIs como esta rodavam localmente,
            permitindo edição de texto e desenhos simples.
          </p>
          <p className="text-xs mt-2">[Arquivo] [Editar] [Ver]</p>
        </div>
      </motion.div>
    </div>
  );
}
