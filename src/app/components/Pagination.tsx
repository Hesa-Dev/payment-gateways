"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import produtos  from "../productos";

interface propsNumber {
  itemsPerPage: number;
  product:[]
  page?:number
  setPage:any
}
export default function PaginationItem(props: propsNumber) {

  const [itemOffset, setItemOffset] = useState(0);
  const totalPaginas = Math.ceil(produtos.length / 2);
  const endOffset = itemOffset + totalPaginas;
  const currentItems = produtos.slice(itemOffset, endOffset);

 const handlePageChange = (event: any) => {
   const newOffset = (event.selected * totalPaginas) % produtos.length;
   setItemOffset(newOffset);
 };

  return (
      <ReactPaginate
        breakLabel={<span className="mx-3">...</span>}
        nextLabel={
          <span className="w-10 h-10 text-white bg-slate-600 gap-2 
          flex items-center justify-center">
            <FaChevronRight />
          </span>
        }
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={totalPaginas}
        previousLabel={
          <span className="w-10 h-10 text-white bg-slate-600 gap-2 
          rounded-sm flex items-center justify-center">
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
  );
}
