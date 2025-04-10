'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { categories } from '@/data/categories';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [isLoading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
    <div 
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: 'url(/images/backgrounds/Rectangle3.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.2,
        filter: 'blur(4px)'
      }}
    />

    {isLoading ? (
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
    ) : (
      showContent && (
        <motion.div 
          className="flex flex-col min-h-screen relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-6xl">
                <motion.div variants={itemVariants}>
                  <Image
                    src="/images/OZONTECK-LOGO.png"
                    alt="Ozonteck Logo"
                    width={160}
                    height={160}
                    priority
                    className="mx-auto mb-12"
                  />
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-2xl text-[#153A4E] mb-16 text-center font-medium"
                >
                  Selecione a linha desejada
                </motion.h1>

                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                  variants={containerVariants}
                >
                  {categories.map((category) => (
                    <motion.div
                      key={category.id}
                      variants={itemVariants}
                    >
                      <Link 
                        href={`/products/${category.slug}`}
                        className="flex flex-col items-center group"
                      >
                        <motion.div 
                          className="relative w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-50 hover:shadow-xl transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="absolute inset-0 p-8">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.div>
                        <h2 className="text-gray-800 font-medium text-center">
                          {category.name}
                        </h2>
                        <p className="text-gray-500 text-sm">
                          {category.productCount} produtos
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
