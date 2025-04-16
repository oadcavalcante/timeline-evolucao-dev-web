import { motion } from 'framer-motion';

export default function TimelineHeader() {
  return (
    <motion.h1
      className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Evolução do Desenvolvimento Web
    </motion.h1>
  );
}
