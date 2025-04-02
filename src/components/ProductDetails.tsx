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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <Link href="/">
            <Image
              src="/images/OZONTECK-LOGO.png"
              alt="Ozonteck Logo"
              width={80}
              height={80}
              priority
              className="mb-8"
            />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-64 h-96 mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-[#20B2AA] text-2xl font-medium mb-3">
              {product.name}
            </h1>
            <div className="flex mb-8">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-[#00FA9A] text-xl">★</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-xl font-medium mb-4">Composição {product.name}</h2>
            <p className="text-gray-700 mb-4">
              Nº DE PROCESSO: {product.process_number || '25351.377148/2024-66'}
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">INCI NAME:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.name || product.description}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">PORTUGUÊS:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.composition || product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}