'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 1, 0.8],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 1.2,
          times: [0, 0.3, 0.5, 1],
          onComplete: onLoadingComplete
        }}
        className="flex flex-col items-center"
      >
        <Image
          src="/images/OZONTECK-LOGO.png"
          alt="Ozonteck Logo"
          width={194}
          height={229}
          priority
          className="mb-8"
        />
        <motion.div
          className="h-1 w-48 bg-teal-500 rounded-full mt-4"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
}