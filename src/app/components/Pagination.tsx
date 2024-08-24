"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

interface propsNumber {
  itemsPerPage: number;
}
export default function PaginationItem(props: propsNumber) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + props.itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / props.itemsPerPage);

  return (
    <>
      <ReactPaginate
        breakLabel={ <span className="mx-3">...</span>}
        nextLabel={
          <span className="w-10 h-10 text-white bg-slate-600 gap-2 flex items-center justify-center">
            <FaChevronRight/> 
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={300}
        previousLabel={
          <span className="w-10 h-10 text-white bg-slate-600 gap-2 rounded-sm flex items-center justify-center">
            <FaChevronLeft/>
          </span>
        }
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center gap-3"
        pageClassName="bg-slate-300 rounded-sm flex gap-3 w-10 h-10 hover:border-2 hover:border-black  items-center justify-center cursor-pointer"
      />
    </>
  );
}
