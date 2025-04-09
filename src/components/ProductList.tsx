'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { capilarProducts, accessoriesProducts, nutraceuticsProducts, perfumeryProducts, healthProducts } from '@/data/products';

export default function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = () => {
      const allProducts = [
        ...capilarProducts,
        ...accessoriesProducts,
        ...nutraceuticsProducts,
        ...perfumeryProducts,
        ...healthProducts
      ];
      
      // Updated filtering logic to ensure exact category match
      const filteredProducts = allProducts.filter(product => {
        const normalizedProductCategory = product.category.trim();
        const normalizedRequestedCategory = category.trim();
        return normalizedProductCategory === normalizedRequestedCategory;
      });
      
      setProducts(filteredProducts);
      setLoading(false);
    };

    getAllProducts();
  }, [category]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="w-full max-w-7xl mx-auto relative mb-8">
          <div className="absolute left-0">
            <Link 
              href='/'
              className="flex items-center bg-gray-100 hover:bg-gray-100 text-[#44BCAC] px-4 py-2 rounded-full transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mb-12">
          <Image
            src="/images/OZONTECK-LOGO.png"
            alt="Ozonteck Logo"
            width={100}
            height={100}
            priority
            className="mb-8"
          />
          <h1 className="bg-gradient-to-r from-[#44BCAC] to-[#153A4E] bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl font-medium uppercase tracking-wider mb-8 sm:mb-16">
            {category}
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}