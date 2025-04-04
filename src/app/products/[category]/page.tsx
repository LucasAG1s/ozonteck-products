'use client';

import { motion } from 'framer-motion';

export default function ProductPage() {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* conteúdo da página */}
    </motion.div>
  );
}