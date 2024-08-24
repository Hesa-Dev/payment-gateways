"use client";

import React, { useEffect, useState } from "react";
import produtos, { Name, teste } from "../productos";
import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import PaginationItem from "./Pagination";

export default function Card() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<[]>(produtos);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPage(produtos);
    function test(): void {
      page?.map((pages: any) => {
        console.log(" images:.", pages.image3);
      });
    }
    test();
  }, []);

  //   alert("lista de produtos" + produtos)

  return (
    <>
      <div className="m-3 grid grid-cols-3  justify-center items-center gap-2">
        {/* card */}
        {produtos.map((produto: any, index: number) => {
          return (
            <div className="flex flex-col items-center justify-center gap-1 p-1">
              {/* box image  */}
              <div
                className="border border-slate-400 rounded-sm w-1/4 flex 
                    justify-center items-center gap-2"
                key={index}
              >
                <Image
                  src={produto.image3}
                  width={200}
                  height={150}
                  alt="web"
                //   priority={true}
                  layout="responsive"
                />
              </div>
              {/* nome */}
              <div className="font-bold text-base text-slate-400">
                {produto.nome}
              </div>
              {/* preco */}
              <div className="font-bold text-xl text-slate-400">
                € {produto.preco}
              </div>
              {/* actios| botões */}
              <div className="flex flex-row gap-3 cursor-pointer text-slate-600">
                {/* add  */}
                <div className="flex flex-row border border-slate-400  gap-2 p-2 items-center justify-center  rounded-sm">
                  Adicionar
                  <RiShoppingCart2Fill />
                </div>
                {/* comprar  */}
                <div className="flex flex-row border border-slate-400  gap-2 p-2 items-center justify-center  rounded-sm">
                  Comprar
                  <MdPayment />
                </div>
                {/* ver produtos*/}
                <div className="flex flex-row border border-slate-400  gap-2 p-2 items-center justify-center  rounded-sm">
                  Ver Produto
                  <IoEyeSharp />
                </div>
              </div>
            </div>
          );
        })}
      </div> 
      <div className="p-10 flex justify-center items-center">
        <PaginationItem product={produtos} itemsPerPage={2} />
      </div>
    </>
  );
}
