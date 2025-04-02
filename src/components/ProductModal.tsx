'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import Image from 'next/image';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  closeModal: () => void;
}

export default function ProductModal({ product, isOpen, closeModal }: ProductModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-black p-6 text-white shadow-xl transition-all border border-white/20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <Dialog.Title className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    {product.name}
                  </Dialog.Title>

                  <div className="mt-4 space-y-4">
                    <p className="text-gray-300">{product.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-white">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(product.price)}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
                        {product.category}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <button
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                        onClick={closeModal}
                      >
                        Fechar
                      </button>
                      <span className="text-gray-400">
                        Estoque: {product.stock} unidades
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}