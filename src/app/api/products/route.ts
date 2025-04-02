import { NextResponse } from 'next/server';
import { capilarProducts, nutraceuticosProducts, bemEstarProducts } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let products;
  switch (category) {
    case 'capilar-ozonizada':
      products = capilarProducts;
      break;
    case 'nutraceuticos':
      products = nutraceuticosProducts;
      break;
    case 'bem-estar':
      products = bemEstarProducts;
      break;
    default:
      products = [...capilarProducts, ...nutraceuticosProducts, ...bemEstarProducts];
  }

  return NextResponse.json(products);
}