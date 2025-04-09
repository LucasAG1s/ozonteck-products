import type { Metadata } from "next";
import "./globals.css";
import {Footer} from "@/components/Footer"

export const metadata: Metadata = {
  title: "Ozonteck - Produtos",
  description: "Produtos Ozonteck",
  icons: {
    icon: '/favicon.ico'
  },
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
