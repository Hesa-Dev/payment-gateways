"use client"

import Link from "next/link";
import Header from "../components/Header";
import { IoStorefrontSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";


export default function Produto() {

  const [carrinho, setCarrinho] = useState(0);
  return (
    <>
    <Header/>
      <div className="m-3 font-extrabold text-base text-slate-500 border-slate-400  border-b">
        MEU CARRINHO 
      </div>

      <div className="flex justify-center items-center">
        <div className="h-1/4 bg-slate-500 justify-center 
        items-center font-normal text-xl p-3 flex rounded-sm flex-col text-white">
             O seu Carinho Esta Vazio  ir a Loja 
             <Link href={"/"}>
              <IoStorefrontSharp/> 
            </Link>
        </div>
      </div>
    </>
  );
}