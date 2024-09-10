import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ProdutoProvider } from "../context/ProdutoContext";

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
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ProdutoProvider>
  );
}
