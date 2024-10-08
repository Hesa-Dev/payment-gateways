import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CarrinhoContext";
import { CompraProvider } from "./context/CompraContext";
import { ProdutoProvider } from "./context/ProdutoContext";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "payment-gateway",
  description: "terminais de pagamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProdutoProvider>
      <CartProvider>
        <CompraProvider>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        </CompraProvider>
      </CartProvider>
    </ProdutoProvider>
  );
}
