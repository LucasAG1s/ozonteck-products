import Link from 'next/link';
import { CATEGORY_ROUTES } from '@/constants/categories';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex">
              {CATEGORY_ROUTES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}