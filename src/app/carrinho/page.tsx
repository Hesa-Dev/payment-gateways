"use client";

import Link from "next/link";
import Header from "../components/Header";
import { IoStorefrontSharp } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CarrinhoContext";
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";
import  { imgPayment } from "../productos";

export default function Carrinho() {
  // const [carrinho, setCarrinho] = useState(0);
  const { addItemCarrinho, carrinho, deletarItemCarrinho } =
    useContext(CartContext);
  const [totalItem, setTotalItem] = useState<number>(0);

  useEffect(() => {
    const checkCarrinho = (): number => {
      if (carrinho?.length) {
        if (carrinho.length > 0) {
          setTotalItem(carrinho.length);
        }
      }
      return totalItem;
    };

    checkCarrinho();
  }, []);

  return (
    <>
      <Header />
      <div className="m-3 font-extrabold text-base text-slate-500 border-slate-400  border-b">
        MEU CARRINHO
      </div>

      <div className="flex justify-center items-center">
        {totalItem == 0 ? (
          <div
            className="h-1/4 bg-slate-500 justify-center 
        items-center font-normal text-xl p-3 flex rounded-sm flex-col text-white"
          >
            O seu Carinho Esta Vazio ir a Loja
            <Link href={"/"}>
              <IoStorefrontSharp />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col justify-center  gap-2  items-center  w-1/2">
            {carrinho &&
              carrinho.map((item: any, index: number) => {
                return (
                  <div
                    className="flex lg:flex-row  sm:flex-col md:flex-col justify-center  
                rounded-md border-b-2 border-slate-400 w-full p-1 gap-2  "
                    key={index}
                  >
                    <div className="border border-slate-400 rounded-md p-2">
                      <Image
                        src={item.image3}
                        width={150}
                        height={150}
                        alt="web"
                        //   priority={true}
                        // layout="responsive"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center  p-2 gap-2  w-1/4">
                      <p className="font-bold text-2xl text-slate-400">
                        {item.nome}
                      </p>
                      <p className="font-bold text-sm text-slate-400">
                        Em Stock
                      </p>
                      <span className="font-bold text-base p-2 rounded-md text-slate-600 border">
                        12
                      </span>
                      <span
                        className="border rounded-md p-2
                     bg-red-400 text-white cursor-pointer"
                      >
                        <RiDeleteBinFill className="w-7 h-7" />
                      </span>
                    </div>

                    <div className="flex  w-1/2   justify-end p-2 gap-1 ">
                      <div className=" justify-center flex flex-col gap-2 ">
                        <span className="font-bold text-base text-slate-400">
                          Qtda
                        </span>
                        <div>
                          <input
                            type="number"
                            className="inpt-number"
                            id="quantity"
                            min="1"
                            max="100"
                          />
                        </div>

                        <span className="font-bold text-2xl text-slate-600">
                          € 112.90
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* Resumo  */}
            <div className="flex  flex-row   w-full">
              {/* metodos de pagamento  */}
              <div className="flex flex-row justify-start w-1/2  p-2 gap-2 items-center">
               
                <p  className="font-bold text-sm text-slate-400">Formas de Pagamento</p>
               { imgPayment&& imgPayment.map((image:any , id:number) =>{
                return( 
                <div className="flex flex-row gap-3 p-2" key={id}>
                  <Image
                        src={image.img}
                          width={50}
                          height={50}
                          alt="web"
                          //   priority={true}
                          // layout="responsive"
                        />
                  </div>
                  )
               })}
                
              </div>
              {/*  resumo da compras  */}
              <div className="flex flex-col border  justify-end items-center w-1/2">

                <div className="flex justify-end items-end w-full flex-col gap-2 p-2">
                  <p>Total: {"€120"} </p>
                  <p> Iva: 2%</p>
                  <p>Transporte : €12</p>
                  <span className="font-bold text-base border text-white
                   bg-green-400 border-green-400 p-2 rounded-md w-1/2 h-8 flex 
                   justify-center items-center cursor-pointer"> Comprar</span>
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
