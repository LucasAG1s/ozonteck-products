import { NextResponse } from 'next/server';
import { capilarProducts, nutraceuticsProducts, accessoriesProducts, perfumeryProducts, healthProducts } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let products;
  switch (category) {
    case 'capilar-ozonizada':
      products = capilarProducts;
      break;
    case 'nutraceuticos':
      products = nutraceuticsProducts;
      break;
    case 'bem-estar':
      products = healthProducts;
      break;
      case 'acessorios':
      products = accessoriesProducts;
      break;
    case 'perfumaria':
      products = perfumeryProducts;
      break;
    case 'saude':
      products = healthProducts;
      break;
    default:
      products = [...capilarProducts, ...nutraceuticsProducts, ...accessoriesProducts, ...perfumeryProducts, ...healthProducts];
  }

  return NextResponse.json(products);
}