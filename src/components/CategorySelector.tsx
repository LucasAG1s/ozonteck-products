'use client';

import { motion } from 'framer-motion';

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategorySelector({ categories, selectedCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mb-12">
      <h2 className="text-center text-gray-500 mb-2">Selecione a linha desejada</h2>
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`py-3 px-6 rounded-lg text-white font-medium ${
            selectedCategory === category ? 'bg-teal-600' : 'bg-teal-500'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}