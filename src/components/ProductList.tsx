'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface ProductListProps {
  category: string;
}

export default function ProductList({ category }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?category=${category.toLowerCase().replace(/ /g, '-')}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/images/OZONTECK-LOGO.png"
            alt="Ozonteck Logo"
            width={80}
            height={80}
            priority
            className="mb-8"
          />
          <h1 className="text-2xl font-medium text-[#20B2AA] uppercase tracking-wide">
            {category}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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