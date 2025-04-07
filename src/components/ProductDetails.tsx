'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl flex justify-between items-center mb-6 relative">
            <div className="absolute left-0">
            <Link 
                href={`/products/${product.category.toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/ /g, '-')}`}
                className="flex items-center bg-gray-100 hover:bg-gray-100 text-[#44BCAC] px-4 py-2 rounded-full transition-all"
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

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-48 h-72 mb-6 rounded-2xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="bg-gradient-to-r from-[#44BCAC] to-[#153A4E] bg-clip-text text-transparent text-xl sm:text-3xl font-medium text-center mb-3">
              {product.name}
            </h1>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-[#00FA9A] text-2xl">★</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h2 className="text-black text-xl font-bold font-['Calibri] mb-2">Composição {product.name}</h2>
            <p className="text-black font-bold font-['Calibri] mb-3">
              Nº DE PROCESSO: {product.process_number}
            </p>
            <div className="space-y-2 max-h-40 overflow-auto pr-2">
              <div>
                <p className="text-black text-sm leading-relaxed text-justify font-['Calibri']">INCI NAME: {product.composition}</p>
              </div>
              <div>
                <p className="text-black text-sm leading-relaxed text-justify font-['Calibri']">DESCRIÇÃO: {product.description}</p>
              </div>
            </div>

            {/* Botões corrigidos */}
            <div className="flex flex-col items-center gap-3 mt-8 ">
              <Link 
                href={product.pdf_link}
                target="_blank"
                className="w-50 py-3 px-6 bg-[#44BCAC] text-white rounded-full font-medium hover:bg-[#3aa799] transition-colors text-center"
              >
                Modo de Usar
              </Link>
              <Link 
                href={product.video_url}
                target="_blank"
                className="w-50 py-3 px-6 bg-[#44BCAC] text-white rounded-full font-medium hover:bg-[#3aa799] transition-colors text-center"
              >
                Video Aula
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}