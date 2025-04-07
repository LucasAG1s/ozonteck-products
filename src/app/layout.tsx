import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozonteck Products",
  description: "Produtos Ozonteck",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        {children}
      </body>
      <Footer/>
    </html>
  );
}
