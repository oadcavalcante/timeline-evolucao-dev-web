'use client';

import { eras } from '@/data/eras';
import TimelineItem from './TimelineItem';
import { motion } from 'framer-motion';

export default function TimelineEvolution() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Evolução do Desenvolvimento Web
      </motion.h1>
      <div className="relative max-w-5xl mx-auto">
        {/* Linha central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 h-full" />
        {eras.map((era, idx) => (
          <TimelineItem
            key={idx}
            era={era}
            index={idx}
            isLeft={idx % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
