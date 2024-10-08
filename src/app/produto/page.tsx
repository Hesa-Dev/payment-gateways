"use client";

import { RiShoppingCart2Fill } from "react-icons/ri";
import Header from "../components/Header";
import Image from "next/image";
import { MdPayment } from "react-icons/md";
import { ProdutoContext } from "../context/ProdutoContext";
import { useContext, useEffect, useState } from "react";
import setupApiClient from "../api/axios";
import { useRouter } from "next/router";

export default function Produto() {

  const api = setupApiClient();


  const { getProdutoByID, produto } = useContext(ProdutoContext);
  const [prod, setProd] = useState<any>();

  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { idproduto } = router.query;


  async function getProduto(id: number) {
    if (id) {
      // const idProduto  = parseInt(idproduto)
      try {
        api
          .get("/produto/id", {
            params: {
              ids: id,
            },
          })
          .then(function (resp) {
            console.log("produto add_carrinho : ", resp.data);

            setProd(resp.data);
          })
          .catch((error) => {
            console.log("error api ", error);
          });
      } catch (error) {
        console.log("error:. ", error);
      }
    }
  }

  useEffect(() => {

    // if (!mounted) {
    //   return null; // Aguarda até que o componente seja montado no cliente
    // }

    if (idproduto) {
      // const idNumber = parseInt(idproduto, 10);
      const idNumber = +idproduto; // conversao para um numero inteiro
      getProduto(idNumber);
    }

    //  console.log("total item " , produtoID?.length);
  }, []);

  return (
    <>
      <Header />
      <div className="m-3 font-extrabold text-base text-slate-500 border-slate-400  border-b">
        PRODUTO
      </div>

      <div className="flex lg:flex-row justify-center items-center sm:flex-col  md:flex-col gap-2 p-1 lg:m-3">
        <div className="flex border border-slate-300">
          <Image
            src={"/products/" + prod.image}
            width={400}
            height={260}
            alt="web"
            //   priority={true}
            // layout="responsive"
          />
        </div>

        <div className="flex flex-col border border-slate-300  p-2">
          {/* titulo */}
          <span className="justify-start font-bold text-2xl text-slate-600">
            {prod.name}
          </span>
          {/* descricao  */}
          <div className="flex lg:mt-11 sm:mt-2 md:mt-3 flex-wrap">
            <p className="p-1 pt-2 text-justify">{prod.description}</p>
          </div>
          {/* preco */}
          <div className="flex flex-col justify-center mt-2">
            <p className="font-extrabold text-3xl mb-2 text-slate-600">
              € {prod.price}
            </p>
            <span className="font-bold text-sm">Qtda Em Stock</span>
            <span className="font-normal text-sm"> {prod.qtdade} unidade</span>
          </div>

          {/* Botões  */}
          <div className="flex flex-row gap-2">
            <div
              className="flex lg:flex-row lg:text-base border  
          md:flex-col sm:flex-col border-slate-400  gap-2 p-2 
          items-center justify-center  cursor-pointer  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
            >
              Adicionar
              <RiShoppingCart2Fill />
            </div>
            {/* comprar  */}
            <div
              className="flex lg:flex-row lg:text-base border md:flex-col sm:flex-col border-slate-400  gap-2 lg:p-2 
                  items-center justify-center cursor-pointer  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
            >
              Comprar
              <MdPayment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
