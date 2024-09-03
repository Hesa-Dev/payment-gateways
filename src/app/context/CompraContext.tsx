"use client";

import React, {
  createContext,
  useEffect,
  ReactNode,
  useContext,
  useState,
  useLayoutEffect,
} from "react";

import { destroyCookie, setCookie, parseCookies } from "nookies";
interface Compra {
  id: number;
  nome: string;
  email: string;
  adress: string;
  qtda: number;
  desconto?: number;
  total: number;
  formaPagamento: string;
}

interface ResumoCompra {
  id: number;
  qtda: number;
  desconto?: number;
  total: number;
}

type CompraContextData = {
  compra?: Compra;
  resumoCompra?: ResumoCompra;
  deletarCompra: (id: number) => void;
  addCompra: (compra: Compra) => void;
  addResumo: (resumo: ResumoCompra) => void;
  deterResumo: (id: number) => void;
};

export const CompraContext = createContext<CompraContextData>({
  compra: {
    id: 0,
    nome: "",
    email: "",
    adress: "",
    total: 0,
    qtda: 0,
    formaPagamento: "",
  },
  resumoCompra: {
    id: 0,
    total: 0,
    qtda: 0,
  },
  addCompra: async (produto: Compra) => {},
  deletarCompra: async (id: number) => {},
  addResumo: async (resumo: ResumoCompra) =>{},
  deterResumo: async (id: number) => {},
});

export function CompraProvider({ children }: { children: ReactNode }) {

  const [resumoCompra, setResumo] = useState<ResumoCompra>();
  const [compra, setCompra] = useState<Compra>();

  function addCompra(itens: Compra) {
    // destroyCookie(null, 'totalCarrinho', { path: '/' })

    if (itens) {
      setCompra(itens);
      // setCookie(undefined, 'totalCarrinho', compra?.length.toString(), {
      //   maxAge: 60 * 60 * 24 * 30, // expira 1 mês
      //   path: "/"  // caminhos que terão acesso ao cookies
      // })
      //   console.log("info item:. ", itens);
    }
  }

  function addResumo(itens: ResumoCompra) {
    // destroyCookie(null, 'totalCarrinho', { path: '/' })
    if (itens) {
      setResumo(itens);
    }
  }

  function deletarCompra(id: number) {}
  function deterResumo(id: number) {}

  return (
    <CompraContext.Provider
      value={{ addCompra, addResumo, deletarCompra, deterResumo,compra, resumoCompra }}
    >
      {children}
    </CompraContext.Provider>
  );
}
