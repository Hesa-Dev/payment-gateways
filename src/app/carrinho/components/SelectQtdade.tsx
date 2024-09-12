"use client";

interface Props {
  stock: number;
  preco: number;
}

import { useEffect, useState } from "react";

export default function Select(props: Props) {
  const [ArrayQtda, setArrayQtda] = useState<number[]>([]);
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    geraArrayQtdades();
  }, []);

  const totalItem = (evt: any) =>{

    if (evt) {

        const qtda = parseInt(evt.target.value);
        let valorFinal = 0;
        valorFinal = qtda * props.preco;

        setPrice(valorFinal)
    }
  }

  const geraArrayQtdades = () => {
    let numberToDigitArray: number[] = [];
    // console.log(idx);

    const stockDisponivel = props.stock;

    for (let idx = 1; idx <= stockDisponivel; idx++) {
      numberToDigitArray.push(idx);
    }

    //  Adicionar itens ao arrray
    setArrayQtda([...ArrayQtda, ...numberToDigitArray]);

    //  console.log("array qtdas :." , numArray.length);
  };
  return (
    <>
      <select
        className="w-full justify-end flex font-bold p-1 text-base text-slate-600 inpt-select"
        // onChange={(evt) => setIDX(evt, item.id)}
        onChange={(evt) => totalItem(evt)}
      >
        {ArrayQtda.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      {/* preco */}
      <span className="font-bold text-2xl text-slate-600">
        €{price? price : props.preco}
      </span>
    </>
  );
}
