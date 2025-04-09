import type { Metadata } from "next";
import "./globals.css";
import { Footer } from '@/components/Footer';

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
        <Footer />
      </body>
    </html>
  );
}
