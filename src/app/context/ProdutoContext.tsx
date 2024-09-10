"use client";

import React, {
  createContext,
  useEffect,
  ReactNode,
  useContext,
  useState,
  useLayoutEffect,
} from "react";
import setupApiClient from "@/app/api/axios";

interface Produto {
  id?: number;
  name: string;
  description: string;
  price: number;
  qtdade: number;
  category: string;
  image: string;
}

type ProdutoContextData = {
  produto?: Produto;
  response?: string;
  delete: (id: number) => void;
  add: (produto: Produto) => void;
  getProdutoByID: (id: number) => void;
};

export const ProdutoContext = createContext<ProdutoContextData>({
  produto: {
    name: "",
    description: "",
    price: 0,
    qtdade: 0,
    category: "",
    image: "",
  },

  add: async (produto: Produto) => {},
  delete: async (id: number) => {},
  getProdutoByID: async (id: number) => {},
});

export function ProdutoProvider({ children }: { children: ReactNode }) {
  const [produto, setProduto] = useState<Produto>();
  const [response, set] = useState<Produto>();

  const api = setupApiClient();

  async function add(prod: Produto) {
    if (prod) {
      const response = await api
        .post("/produto/add", {
          name: prod.name,
          description: prod.description,
          price: prod.price,
          qtdade: prod.qtdade,
          image: prod.image,
          category: prod.category,
        })
        .then(function (resp) {
          console.log("produto add : " + resp.data);
        })
        .catch(function (error) {
          console.log("error add " + error.message);
        });
      setProduto(prod);
    }
    console.log("CAMPOS VAZIOS ");
  }

  async function deletar(id: number) {
    if (id) {
      const response = await api
        .delete("/produto/delete", {
          params: {
            id,
          },
        })
        .then(function (resp) {
          console.log(resp.data);

          // toast.success("Usuario Excluido! ")
        })
        .catch(function (error) {
          console.log("error delete : ", error.message);
        });
    }
  }

  async function getProdutoByID(id: number) {
    if (id) {
      const response = await api
        .get("/produto/id", {
          params: {
            id: id,
          },
        })
        .then(function (res) {
          const {name, description, price, qtdade, image, id,category  } =
            res.data;

          setProduto({
            id ,
            name ,
            price ,
            qtdade ,
            description ,
            image ,
            category
          });
        })
        .catch(function (error) {
          console.log("error response: ", error.message);
        });
    }
  }
  return (
    <ProdutoContext.Provider
      value={{
        add,
        delete: deletar,
        produto,
        getProdutoByID
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}
