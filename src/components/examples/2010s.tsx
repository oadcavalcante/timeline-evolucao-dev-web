'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Example2010s() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 font-sans p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-xl bg-white rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          App Social 2015
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Este é um SPA com React, típico dos anos 2010. Construído com
          componentes reutilizáveis, oferece uma experiência fluida, como apps
          móveis. Clique no botão para interagir!
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Curtidas: {count}
        </button>
      </motion.div>
    </div>
  );
}
