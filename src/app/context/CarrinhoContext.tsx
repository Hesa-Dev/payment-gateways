"use client";

import React, {
  createContext,
  useEffect,
  ReactNode,
  useContext,
  useState,
  useLayoutEffect,
} from "react";
import Carrinho from "../carrinho/page";

type CartContextData = {
  carrinho?: Carrinho[] | undefined;
  deletarItemCarrinho: (id: number) => void;
  addItemCarrinho: (produto: Carrinho) => void;
};

interface Carrinho {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  image1?: string;
  image2?: string;
  image3: string;
}

interface Qtda extends Carrinho {
  qtda: number;
}

export const CartContext = createContext<CartContextData>({
  carrinho: [
    {
      id: 0,
      nome: "",
      descricao: "",
      preco: 0,
      image3: "",
    },
  ],
  addItemCarrinho: async (produto: Carrinho) => {},
  deletarItemCarrinho: async (id: number) => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<Carrinho[]>([]);

  function addItem(itens: Carrinho) {

    if (itens) {
      setCarrinho((prevProdutos) => [...prevProdutos, itens]);
    //   console.log("info item:. ", itens);
    }
  }

  function deletarItem(id: number) {}

  return (
    <CartContext.Provider
      value={{ addItemCarrinho: addItem, deletarItemCarrinho: deletarItem, carrinho }}
    >
      {children}
    </CartContext.Provider>
  );
}
