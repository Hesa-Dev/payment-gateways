"use client";

import Image from "next/image";
import Link from "next/link";
import { FcCdLogo } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { PiTidalLogoBold } from "react-icons/pi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CarrinhoContext";

export default function Header() {
  // const { carrinho } = useContext(CartContext);
  const { carrinho , produtoID } = useContext(CartContext);
  return (
    <>
      <nav className="flex">
        <div className="flex w-full items-center  bg-slate-500 m-3 p-2">
          {/* logo */}
          <Link href={"/"} className="w-1/4">
            {/* <FcCdLogo style={{ fontSize: "45px", color: "#f2faf7" }} /> */}
            <PiTidalLogoBold style={{ fontSize: "45px", color: "#f2e1f1" }} />
          </Link>
          <div className="w-1/2 flex text-white  tipografia gap-6 justify-center items-center">
            <Link href={"/"} className="cursor-pointer font-bold">
              Productos{" "}
            </Link>
            <span className="cursor-pointer font-bold">Blog </span>
            <span className="cursor-pointer font-bold">Sobre nós</span>
          </div>

          <div className="justify-end flex w-1/3  cursor-pointer   items-center gap-1 text-base text-white">
            <Link className="flex w-1/4 gap-2" href={"/admin/"}>
              <FaUser style={{ fontSize: "18px", color: "#f2faf7" }} />
              Minha Área
            </Link>

            <Link
              href={"carrinho"}
              className="flex justify-center items-center ml-2 gap-1"
            >
              <RiShoppingCart2Fill
                style={{ fontSize: "20px", color: "#f2faf7" }}
              />
              <span className="font-bold">
                {/* ( {carrinho?.length ? carrinho.length : 0} ) */}
                ( {produtoID?.length ? produtoID.length : 0} )
              </span>
              Carrinho
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
