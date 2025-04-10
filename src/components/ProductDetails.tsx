'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types/product';
import { ProductUsageModal } from './ProductUsageModal';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [isUsageModalOpen, setIsUsageModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-2">
        {/* Header permanece o mesmo */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl flex justify-between items-center mb-6 relative">
            <div className="absolute left-0">
              <Link 
                href={`/products/${product.category.toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/ /g, '-')}`}
                className="flex items-center bg-gray-100 hover:bg-gray-200 text-[#44BCAC] px-4 py-2 rounded-full transition-all"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/OZONTECK-LOGO.png"
                alt="Ozonteck Logo"
                width={60}
                height={60}
                priority
                className=""
              />
            </div>          
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:gap-8 md:items-start">
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="relative w-48 h-72 md:w-96 md:h-[500px] mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <h1 className="bg-gradient-to-r from-[#44BCAC] to-[#153A4E] bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl font-medium text-center mb-2">
                {product.name}
              </h1>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-[#00FA9A] text-2xl md:text-3xl">★</span>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-[#153A4E] text-xl md:text-2xl font-bold mb-4">
                  Composição {product.name}
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm mb-1">Nº DE PROCESSO</p>
                    <p className="text-[#44BCAC] font-semibold">{product.process_number}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm mb-1">INCI NAME</p>
                    <p className="text-black">{product.composition}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm mb-1">DESCRIÇÃO</p>
                    <p className="text-black text-justify">{product.description}</p>
                  </div>
                </div>

                {/* Botões com novo estilo */}
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                  <button 
                    onClick={() => setIsUsageModalOpen(true)}
                    className="flex-1 py-4 px-8 bg-[#44BCAC] text-white rounded-full font-medium hover:opacity-90 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Modo de Uso
                  </button>
                  <Link 
                    href={product.video_url}
                    target="_blank"
                    className="flex-1 py-4 px-8 bg-[#44BCAC] text-white rounded-full font-medium hover:opacity-90 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Video Aula
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductUsageModal
        isOpen={isUsageModalOpen}
        onClose={() => setIsUsageModalOpen(false)}
        productName={product.name}
        usageInstructions={product.instructions}
      />
    </div>  
  );
}