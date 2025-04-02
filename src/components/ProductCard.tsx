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
      href={`/products/${product.category.toLowerCase().replace(/ /g, '-')}/${product.id}`}
      className="bg-gray-50 rounded-3xl p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full aspect-[3/4] mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-[#20B2AA] text-sm font-medium text-center mb-1">
        {product.name}
      </h3>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-[#00FA9A] text-sm">★</span>
        ))}
      </div>
    </Link>
  );
}