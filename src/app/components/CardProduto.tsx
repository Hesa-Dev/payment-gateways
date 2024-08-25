"use client";

import React, { useEffect, useState } from "react";
import produtos from "../productos";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Card() {
  const [itemOffset, setItemOffset] = useState(0);
  const totalPaginas = Math.ceil(produtos.length / 2);
  const endOffset = itemOffset + totalPaginas;
  const currentItems = produtos.slice(itemOffset, endOffset);

  const handlePageChange = (event: any) => {
    const newOffset = (event.selected * totalPaginas) % produtos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="m-3 grid lg:grid-cols-3 md:flex-col sm:flex-col  justify-center items-center gap-2">
        {/* card */}
        {currentItems &&
          currentItems.map((produto: any, index: number) => {
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
                <div className="flex lg:flex-row gap-3 cursor-pointer text-slate-600 md:flex-col sm:flex-col">
                  {/* add  */}
                  <div
                    className="flex lg:flex-row lg:text-base border  md:flex-col sm:flex-col border-slate-400  gap-2 p-2 
                  items-center justify-center  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
                  >
                    Adicionar
                    <RiShoppingCart2Fill />
                  </div>
                  {/* comprar  */}
                  <div
                    className="flex lg:flex-row lg:text-base border md:flex-col sm:flex-col border-slate-400  gap-2 lg:p-2 
                  items-center justify-center  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
                  >
                    Comprar
                    <MdPayment />
                  </div>
                  {/* ver produtos*/}
                  <div
                    className="flex lg:flex-row lg:text-base border md:flex-col sm:flex-col border-slate-400  gap-2 p-2 
                  items-center justify-center  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
                  >
                    Ver Produto
                    <IoEyeSharp />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* Pagination  */}
      <div className="p-10 flex justify-center items-center">
        {/* <PaginationItem product={produtos} setPage={setPage} itemsPerPage={2} /> */}
        <ReactPaginate
          breakLabel={<span className="mx-3">...</span>}
          nextLabel={
            <span
              className="w-10 h-10 text-white bg-slate-600 gap-2 
            flex items-center justify-center"
            >
              <FaChevronRight />
            </span>
          }
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          pageCount={totalPaginas}
          previousLabel={
            <span
              className="w-10 h-10 text-white bg-slate-600 gap-2 
            rounded-sm flex items-center justify-center"
            >
              <FaChevronLeft />
            </span>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex items-center justify-center gap-3"
          pageClassName="bg-slate-300 rounded-sm flex gap-3 w-10 h-10 
        hover:border-2 hover:border-black  items-center 
        justify-center cursor-pointer"
          activeClassName="bg-blue-400 text-white"
        />
      </div>
    </>
  );
}
