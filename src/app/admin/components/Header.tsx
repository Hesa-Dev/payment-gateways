"use client";

import Image from "next/image";
import Link from "next/link";
import { FcCdLogo } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { PiTidalLogoBold } from "react-icons/pi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";

export default function HeaderAdmin() {
  // const { carrinho } = useContext(CartContext);
  return (
    <>
      <nav className="flex">
        <div className="flex w-full items-center  bg-slate-500 m-3 p-2">
          {/* logo */}
          <Link
            href={"/admin"}
            className="w-1/4   flex justify-start items-center gap-1"
          >
            {/* <FcCdLogo style={{ fontSize: "45px", color: "#f2faf7" }} /> */}
            <RiAdminFill style={{ fontSize: "45px", color: "#f2e1f1" }} />
            <span className="text-white font-bold">Dashboard </span>
          </Link>

          <div className="justify-end   flex w-full  cursor-pointer items-center gap-3 text-base text-white">
            <div className="flex justify-center items-center gap-1">
              <FaUser  className="w-5 h-8"  />
              Minha Área
            </div>

            {/* sair logout  */}
            <div className="justify-center items-center   flex  text-white ">
              <IoLogOut className="h-8 w-8" />
              <span> Sair</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
