'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
    href={`/products/${product.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}/${product.id}`}
      className="bg-[#F3F3F3] rounded-xl sm:rounded-3xl p-2 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-[3/4] mb-2 sm:mb-4 rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
      <h3 className="text-[#20B2AA] text-sm sm:text-lg font-medium text-center mb-1 sm:mb-2">
        {product.name}
      </h3>
      <div className="flex gap-0.5 sm:gap-1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-[#00FA9A] text-xs sm:text-xl">★</span>
        ))}
      </div>
    </Link>
  );
}