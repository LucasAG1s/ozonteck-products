'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/footer';

interface Category {
  name: string;
  href: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const categories: Category[] = [
    { name: 'Capilar Ozonizada', href: '/products/capilar-ozonizada' },
    { name: 'Nutracêuticos', href: '/products/nutraceuticos' },
    { name: 'Bem Estar', href: '/products/bem-estar' }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
        // Adiciona delay extra para o footer
        setTimeout(() => setShowFooter(true), 500);
      }, 200);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
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
              className="h-1 bg-teal-500 rounded-full mt-6"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{
                duration: 4,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <motion.div
            className="flex-grow flex flex-col items-center justify-center bg-white p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
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
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link href={category.href}>
                      <motion.button
                        className="w-full py-4 px-6 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {category.name}
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {showFooter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Footer />
            </motion.div>
          )}
        </div>
      )}
    </>
  );
}
