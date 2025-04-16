'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Example1990s() {
  return (
    <div className="bg-gray-400 text-black font-sans p-6 h-full flex items-center justify-center">
      <motion.div
        className="max-w-4xl bg-white border-2 border-black p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <table className="w-full">
          <thead>
            <tr>
              <th colSpan={2}>
                <h1 className="text-2xl text-blue-800 text-center">
                  Portal de Tecnologia - 1995
                </h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/4 p-4 align-top">
                <strong>Navegação</strong>
                <br />
                <Link
                  href="#"
                  className="text-blue-600 underline hover:text-red-600"
                >
                  Início
                </Link>
                <br />
                <Link
                  href="#"
                  className="text-blue-600 underline hover:text-red-600"
                >
                  Notícias
                </Link>
                <br />
                <Link
                  href="#"
                  className="text-blue-600 underline hover:text-red-600"
                >
                  Contato
                </Link>
              </td>
              <td className="p-4">
                <p className="text-sm leading-relaxed">
                  Bem-vindo ao nosso portal de tecnologia! Construído com HTML
                  puro, este site reflete a Web 1.0: páginas estáticas, layouts
                  em tabelas e links sublinhados. Servido por Apache, é puro
                  conteúdo.
                </p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Computador Pentium"
                  className="border border-black mt-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
