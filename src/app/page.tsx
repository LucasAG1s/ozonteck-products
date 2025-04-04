'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

interface Category {
  name: string;
  href: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const categories: Category[] = [
    { name: 'Capilar Ozonizada', href: '/products/capilar-ozonizada' },
    { name: 'Nutracêuticos', href: '/products/nutraceuticos' },
    { name: 'Bem Estar', href: '/products/bem-estar' }
  ];

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-white">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        showContent && (
          <motion.div 
            className="flex flex-col min-h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-grow flex flex-col items-center justify-center bg-white p-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/OZONTECK-LOGO.png"
                  alt="Ozonteck Logo"
                  width={100}
                  height={100}
                  priority
                  className="mb-12"
                />
                
                <p className="text-gray-600 mb-8 text-center">
                  Selecione a linha desejada
                </p>

                <div className="flex flex-col gap-4 w-full max-w-sm">
                  {categories.map((category, index) => (
                    <Link key={category.name} href={category.href}>
                      <motion.button
                        className="w-full py-4 px-6 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {category.name}
                      </motion.button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Footer removido daqui */}
          </motion.div>
        )
      )}
    </div>
  );
}
