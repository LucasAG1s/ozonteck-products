'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

type ProductUsageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  usageInstructions: string;
};

export function ProductUsageModal({
  isOpen,
  onClose,
  productName,
  usageInstructions,
}: ProductUsageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative w-full max-w-3xl h-[60vh] overflow-hidden rounded-xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
      
        <div className="flex flex-col h-full">
          <div className="bg-[#44BCAC] p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                <span className="font-light">MODO DE USO | </span>
                {productName}
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Fechar modal"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="space-y-5">
              {usageInstructions.split('\n\n').map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  {section.split('\n').map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className={`mb-3 ${
                        pIndex === 0 ? 
                          'text-[#153A4E] font-medium text-lg' : 
                          'text-gray-700 font-normal'
                      }`}
                    >
                      {paragraph.startsWith('•') || paragraph.startsWith('-') ? (
                        <span className="flex items-start">
                          <span className="text-[#44BCAC] mr-2 mt-1">•</span>
                          {paragraph.substring(1)}
                        </span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#44BCAC] px-6 py-3 text-center mt-auto">
            <p className="text-sm text-white font-medium">
              Grupo Ozonteck • suporte@grupoozonteck.com
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}