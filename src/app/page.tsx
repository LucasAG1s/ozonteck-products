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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image with filter and transparency */}
      <div className="absolute inset-0 z-0 bg-white">
        <Image
          src="/images/backgrounds/Rectangle3.png"
          alt="Background"
          fill
          className="object-cover opacity-20 filter blur-sm" // Added blur filter
          priority
        />
      </div>

      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        showContent && (
          <motion.div 
            className="flex flex-col min-h-screen relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-6xl">
                <Image
                  src="/images/OZONTECK-LOGO.png"
                  alt="Ozonteck Logo"
                  width={160}
                  height={160}
                  priority
                  className="mx-auto mb-12"
                />
                
                <h1 className="text-2xl text-[#153A4E] mb-16 text-center font-medium">
                  Selecione a linha desejada
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {categories.map((category) => (
                    <Link 
                      key={category.id} 
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
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
