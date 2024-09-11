import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ProdutoProvider } from "../context/ProdutoContext";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "payment-gateway",
  description: "terminais de pagamento",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <ProdutoProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ProdutoProvider>
    </NextUIProvider>
  );
}
