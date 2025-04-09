import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Ozonteck Products",
  description: "Produtos Ozonteck",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add this to your CSS or use the font in a component
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        {children}
      </body>
      <Footer/>
    </html>
  );
}
