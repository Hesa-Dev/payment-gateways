"use client";

import Link from "next/link";
import Header from "../components/Header";
import { IoStorefrontSharp } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CarrinhoContext";
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";
import { imgPayment } from "../productos";
import { parseCookies } from "nookies";
import { CompraContext } from "../context/CompraContext";
import setupApiClient from "../api/axios";


export default function Carrinho() {

  const api =  setupApiClient()
  // const [carrinho, setCarrinho] = useState(0);

  const { addItemCarrinho, carrinho, produtoID, deletarItemCarrinho } =
    useContext(CartContext);
  const { addResumo, deterResumo, resumoCompra } = useContext(CompraContext);

  const [totalItem, setTotalItem] = useState(carrinho?.length);
  const [stock, setStock] = useState<number>(4);
  const [ArrayQtda, setArrayQtda] = useState<number[]>([]);
  const [total, setTotal] = useState<number[]>([]);

  const [produto, setProduto] = useState<any>();

  const [price, setPrice] = useState<number[]>([]);
  // const [qtdade, setQtdade] = useState<number>(0);

  const apagarItemCarrinho = async (idx: number) => {
    if (idx >= 0) {
      deletarItemCarrinho(idx);
      return;
    }
  };

  async function loadItemCarrinho() {
    if (produtoID?.length) {
      try {
        api
          .get("/produto/carrinho", {
            params: {
              ids: produtoID,
            },
          })
          .then(function (resp) {

            console.log("produto add_carrinho : ", resp.data);

            setProduto(resp.data);
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
    if (produtoID?.length) {
      if (produtoID.length > 0) {
        // alert("total item " +  produtoID.length )
        console.log("itens : ", produtoID);
      }
    }

    //  console.log("total item " , produtoID?.length);
  }, []);

  const testeEvent = (idx: number, evt: any) => {
    alert(evt.target.value);
    alert("id " + idx);
    console.log("id ", idx);
  };

  const calcTotal = (idx: number, evt: any) => {
    if (typeof idx !== undefined) {
      alert("id : " + idx);

      // if (idx >= 0) {
      const qtda = parseInt(evt && evt.target.value);
      console.log("idx : ", idx, "evt :", qtda);

      if (carrinho?.length) {
        const prod = carrinho[idx].preco;
        const total = prod * qtda;

        alert("total : " + total);

        // console.log("total_preco : ", total);
        // price?.push(total)

        setPrice([...price, idx, total]);

        // setPrice(price?.push(total))

        // return total;
        // }
      }
    }

    return 0;
  };

  // const itemTotal = ()

  const calculaTotal = (evt: any, idx: number) => {
    // evt.preventDefault();
    const qtda = parseInt(evt.target.value);
    let numberToDigitArray: number[] = [];

    let valorFinal = 0;

    if (qtda) {
      console.log("select  :. ", qtda);

      if (carrinho?.length) {
        const prod = carrinho[idx];
        const valor = prod.preco;

        console.log("valor : ", valor);

        valorFinal = qtda * valor;

        console.log("valor final : ", valorFinal);
        total.push(valorFinal);
        // setTotal(total.push(valorFinal))

        // setTotal(total.map(item =>
        //   item === idx ? { item, idx: valorFinal } : item
        // ));

        setTotal([...total, idx, valorFinal]);
        // setTotal((prevProdutos) => [...prevProdutos, valorFinal]);

        console.log("valor final array  : ", total[idx]);

        // numberToDigitArray.push(valorFinal);
      }

      // setTotal(numberToDigitArray)
      // setTotal([...total, idx, valorFinal]);
      // set

      // if (valorFinal > 0) {
      //   setTotal([...total, idx, valorFinal]);
      //   console.log("valor : " , total[idx]);
      // }
    }
  };

  useEffect(() => {
    // const { 'totalCarrinho': itemTotal } = parseCookies();
    // alert("item cookie : " +  itemTotal )

    const checkCarrinho = () => {
      if (carrinho?.length) {
        if (carrinho.length > 0) {
          setTotalItem(carrinho.length);
        }
      }
    };

    const geraArrayQtdades = () => {
      let numberToDigitArray: number[] = [];
      // console.log(idx);

      const stockDisponivel = stock;

      for (let idx = 1; idx <= stockDisponivel; idx++) {
        numberToDigitArray.push(idx);
      }

      //  Adicionar itens ao arrray
      setArrayQtda([...ArrayQtda, ...numberToDigitArray]);

      //  console.log("array qtdas :." , numArray.length);
    };

    geraArrayQtdades();

    loadItemCarrinho()

    checkCarrinho();
  }, []);

  return (
    <>
      <Header />
      <div className="m-3 font-extrabold text-base text-slate-500 border-slate-400  border-b">
        MEU CARRINHO
      </div>

      <div className="flex justify-center items-center">
        {produtoID?.length == 0 ? (
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
            {produto &&
              produto.map((item: any, idx: number) => {
                return (
                  <div
                    className="flex lg:flex-row  sm:flex-col md:flex-col justify-center  
                border-b-2 border-slate-400 w-full p-1 gap-2  "
                    key={idx}
                  >
                    <div className="border border-slate-400 rounded-md p-2">
                      <Image
                        src={"/products/"+item.image}
                        width={150}
                        height={150}
                        alt="web"
                        //   priority={true}
                        // layout="responsive"
                      />
                    </div>
                    {/*  deletar | stock */}
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center  p-2 gap-2  w-1/4"
                    >
                      <p className="font-bold text-2xl text-slate-400">
                        {item.nome}
                      </p>
                      <p className="font-bold text-sm text-slate-400">
                        Em Stock
                      </p>
                      <span className="font-bold text-base p-2 rounded-md text-slate-600 border">
                        {item.qtdade}
                      </span>
                      {/* btn deletar */}
                      <span
                        className="border rounded-md p-2
                     bg-red-400 text-white cursor-pointer"
                        onClick={(evt) => apagarItemCarrinho(item.id)}
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
                          <select
                            key={idx}
                            className="w-full justify-end flex font-bold p-1 text-base text-slate-600 inpt-select"
                            // onChange={(evt) => setIDX(evt, item.id)}
                            onChange={(evt) => calcTotal(idx, evt)}
                          >
                            {ArrayQtda.map((number) => (
                              <option key={number} value={number}>
                                {number}
                              </option>
                            ))}
                          </select>
                        </div>

                        <span
                          key={idx}
                          className="font-bold text-2xl text-slate-600"
                        >
                          €
                          {price.indexOf(price[idx]) == idx
                            ? price[idx]
                            : item.price}
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
                <p className="font-bold text-sm text-slate-400">
                  Formas de Pagamento
                </p>
                {imgPayment &&
                  imgPayment.map((image: any, id: number) => {
                    return (
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
                    );
                  })}
              </div>
              {/*  resumo da compras  */}
              <div className="flex flex-col border  justify-end items-center w-1/2">
                <div className="flex justify-end items-end w-full flex-col gap-2 p-2">
                  <p>
                    Total:{" "}
                    <span className="font-extrabold  text-slate-600">
                      {" "}
                      {"€120"}
                    </span>{" "}
                  </p>
                  <p> IVA: 2%</p>
                  <p>Transporte : €12</p>
                  <Link
                    href={"payment"}
                    className="font-bold text-base border text-white
                   bg-green-400 border-green-400 p-2 rounded-md w-1/2 h-8 flex 
                   justify-center items-center cursor-pointer"
                  >
                    {" "}
                    Continuar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
