'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Example2020s() {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = () => {
    setWallet('0x1234...5678');
  };

  return (
    <div className="bg-gray-900 text-white font-sans p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-xl bg-gray-800 rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold text-cyan-400 text-center mb-4">
          dApp NFT Marketplace 2023
        </h1>
        <p className="text-sm mb-4">
          Este é um exemplo de dApp Web3.0, usando blockchain e Web3.js. Conecte
          uma carteira para interagir com NFTs (simulação).
        </p>
        <div className="bg-gray-700 p-4 rounded mb-4">
          <p>{wallet ? `Carteira: ${wallet}` : 'Nenhuma carteira conectada'}</p>
          <button
            className="bg-cyan-500 text-black px-4 py-2 rounded mt-2 hover:bg-cyan-600 transition"
            onClick={connectWallet}
            disabled={!!wallet}
          >
            Conectar Carteira
          </button>
        </div>
      </motion.div>
    </div>
  );
}
