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
import { destroyCookie, setCookie, parseCookies } from "nookies";

type CartContextData = {
  carrinho?: Carrinho[] | undefined;
  deletarItemCarrinho: (id: number) => void;
  addItemCarrinho: (produto: Carrinho) => void;
  produtoID?: number[];
  saveID:(id: number) => void;
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
  produtoID: [],
  addItemCarrinho: async (produto: Carrinho) => {},
  deletarItemCarrinho: async (id: number) => {},
  saveID:async (id: number) => {}
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<Carrinho[]>([]);
  const [produtoID, setprodutoID] = useState<number[]>([]);

  function addItem(itens: Carrinho) {
    destroyCookie(null, "totalCarrinho", { path: "/" });

    if (itens) {
      setCarrinho((prevProdutos) => [...prevProdutos, itens]);

      setCookie(undefined, "totalCarrinho", carrinho?.length.toString(), {
        maxAge: 60 * 60 * 24 * 30, // expira 1 mês
        path: "/", // caminhos que terão acesso ao cookies
      });
      //   console.log("info item:. ", itens);
    }
  }

  async function saveID(id: number) {
    if (id>=0) {
      setprodutoID((prevProdutos) => [...prevProdutos, id]);
    }

  }

  function deletarItem(id: number) {
    if (carrinho.length) {
      if (carrinho.length > 0) {
        setCarrinho(carrinho.filter((item) => item.id !== id));
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        addItemCarrinho: addItem,
        deletarItemCarrinho: deletarItem,
        carrinho,
        produtoID,
        saveID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
