'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import {
  History as TimelineIcon,
  ChevronDown,
  ChevronUp,
  Eye,
} from 'lucide-react';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

export interface Era {
  title: string;
  yearRange: string;
  technologies: string[];
  description: string;
  milestones?: string[];
  keyFigures?: string[];
  exampleComponent?: string;
}

type TimelineItemProps = {
  era: Era;
  index: number;
  isLeft: boolean;
};

// Mapa de componentes dinâmicos
const exampleComponents: { [key: string]: any } = {
  '1940s': dynamic(() => import('@/components/examples/1940s'), { ssr: false }),
  '1960s': dynamic(() => import('@/components/examples/1960s'), { ssr: false }),
  '1970s': dynamic(() => import('@/components/examples/1970s'), { ssr: false }),
  '1980s': dynamic(() => import('@/components/examples/1980s'), { ssr: false }),
  '1990s': dynamic(() => import('@/components/examples/1990s'), { ssr: false }),
  '2000s': dynamic(() => import('@/components/examples/2000s'), { ssr: false }),
  '2010s': dynamic(() => import('@/components/examples/2010s'), { ssr: false }),
  '2020s': dynamic(() => import('@/components/examples/2020s'), { ssr: false }),
  '2030s': dynamic(() => import('@/components/examples/2030s'), { ssr: false }),
};

export default function TimelineItem({
  era,
  index,
  isLeft,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MotionCard = motion(Card);
  const ExampleComponent = era.exampleComponent
    ? exampleComponents[era.exampleComponent]
    : null;

  return (
    <>
      <motion.div
        className={`relative flex ${
          isLeft ? 'justify-start' : 'justify-end'
        } mb-12 w-full sm:w-1/2 ${isLeft ? 'sm:pr-8' : 'sm:pl-8 sm:ml-auto'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Conector à linha central */}
        <div
          className={`absolute top-6 ${
            isLeft ? 'right-0 sm:right-[-0.5rem]' : 'left-0 sm:left-[-0.5rem]'
          } w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-800 z-10`}
        />
        <div
          className={`absolute top-8 ${
            isLeft ? 'right-4 sm:right-0' : 'left-4 sm:left-0'
          } w-8 sm:w-4 h-0.5 bg-cyan-400`}
        />
        {/* Card animado */}
        <MotionCard
          className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow w-full sm:w-[400px]"
          whileHover={{ scale: 1.02 }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <TimelineIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-gray-400">{era.yearRange}</span>
            </div>
            <h2 className="text-xl font-semibold text-white">{era.title}</h2>
            <p className="text-gray-300 text-sm">{era.description}</p>
            <div className="flex flex-wrap gap-2">
              {era.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {(era.milestones || era.keyFigures) && (
                <button
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                  aria-label={
                    isExpanded ? 'Ocultar detalhes' : 'Mostrar detalhes'
                  }
                >
                  {isExpanded ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              )}
              {era.exampleComponent && (
                <button
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Visualizar exemplo de site"
                >
                  Visualizar
                  <Eye className="w-4 h-4" />
                </button>
              )}
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {era.milestones && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-200">
                        Marcos Principais
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 text-sm">
                        {era.milestones.map((milestone, i) => (
                          <li key={i}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {era.keyFigures && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-200">
                        Figuras-Chave
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {era.keyFigures.join(', ')}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </MotionCard>
      </motion.div>
      {/* Modal para o exemplo */}
      <AnimatePresence>
        {isModalOpen && ExampleComponent && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] relative overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-cyan-400"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fechar modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Suspense
                fallback={
                  <div className="text-white text-center p-4">
                    Carregando...
                  </div>
                }
              >
                <ExampleComponent />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
