import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from '@/components/footer';

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
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
