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
  deletar: (id: number) => void;
  add: (produto: Produto) => void;
  getProdutoByID: (id: number) => void;
  editar: (prod: Produto) => void;
  // produtoID: number  | undefined
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
  // produtoID: undefined,
  add: async (produto: Produto) => {},
  deletar: async (id: number) => {},
  getProdutoByID: async (id: number) => {},
  editar: async (prod: Produto) => {},
});

export function ProdutoProvider({ children }: { children: ReactNode }) {
  const [produto, setProduto] = useState<Produto>();
  const [produtoID, setProdutoID] = useState<Number | undefined>();
  const [response, setResponse] = useState<string>("");

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
          if (resp) {
            setResponse("add");
          }
        })
        .catch(function (error) {
          console.log("error add " + error.message);
          setResponse("error");
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
          if (resp.data) {
            setResponse("delete");
          }

          // toast.success("Usuario Excluido! ")
        })
        .catch(function (error) {
          console.log("error delete : ", error.message);
          setResponse("error");
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
          const { name, description, price, qtdade, image, id, category } =
            res.data;

          setProduto({
            id,
            name,
            price,
            qtdade,
            description,
            image,
            category,
          });
        })
        .catch(function (error) {
          console.log("error response: ", error.message);
        });
    }
  }

  async function editar(prod: Produto) {
    if (prod.id) {
      const response = await api
        .post("/produto/edit", {
          id: prod.id,
          name: prod.name,
          description: prod.description,
          price: prod.price,
          qtdade: prod.qtdade,
          image: prod.image,
          category: prod.category,
        })
        .then(function (response) {
          if (response.data) {
            setResponse("update");
          }
          // const {name, description, price, qtdade, image, id,category  } =
          // response.data;
          // console.log("prod_edit: ", name , " " , id);
        })
        .catch(function (error) {
          console.log("error response: ", error.message);
          setResponse("error");
        });
    }
  }
  return (
    <ProdutoContext.Provider
      value={{
        add,
        deletar,
        produto,
        getProdutoByID,
        editar,
        response,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}
