'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

interface FooterProps {
  isVisible?: boolean;
}

export default function Footer() {

  return (
    <footer className="bg-[#F3F3F3] py-8 mt-auto" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="hidden md:block">
              <Image
                src="/images/OZONTECK-LOGO.png"
                alt="Ozonteck Logo"
                width={100}
                height={100}
                className="mb-4"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#44BCAC] font-medium mb-3">CANAIS DE ATENDIMENTO</h3>
            <div className="text-gray-600 text-sm space-y-2">
              <Link 
                href="https://office.grupozonteck.com"
                target="_blank"
                className="inline-block bg-[#44BCAC] text-white px-4 py-2 rounded-full hover:bg-[#3aa799] transition-colors mb-2"
              >
                ESCRITÓRIO VIRTUAL
              </Link>
              <a href="mailto:suporte@grupoozonteck.com" className="block hover:text-[#44BCAC] transition-colors">
                suporte@grupoozonteck.com
              </a>
              <a href="tel:+5527997376471" className="block hover:text-[#44BCAC] transition-colors">
                (027) 99737-6471
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Link
                href="https://www.instagram.com/grupoozonteckoficial/"
                target="_blank"
                className="text-[#44BCAC] hover:text-[#153A4E] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              
              <Link
                href="https://grupoozonteck.com"
                target="_blank"
                className="text-[#44BCAC] hover:text-[#153A4E] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center space-y-4 border-t border-gray-300 pt-4 text-xs md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#44BCAC] flex-shrink-0 mt-1">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="text-gray-600 text-sm">Rod. Governador Mário Covas, S/N - KM 328 - Iguape, Guarapari - ES, 29227-494</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Copyright © 2024 Grupo Ozonteck. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}