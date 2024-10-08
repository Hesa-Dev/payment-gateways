"use client";

import Link from "next/link";
import Header from "../components/Header";
import { FaUser } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { useContext, useState } from "react";
import Image from "next/image";
import { CompraContext } from "../context/CompraContext";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutForm from "./Components/Checkout";




export default function Pagamento() {

  const stripePromise = loadStripe('pk_live_51PyDlJRsyKScRTtSw9zSnk1qySDxK6CeHY5a4o7luV3IdPb5gJdNDXaNP1aI4lGOHiFleJJlEJFMFHEbCoaLqhqi00lgHX4OZs');
  const options = {
    mode: 'payment',
    amount: 5,
    currency: 'eur',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  const { addCompra, deletarCompra , compra } =  useContext(CompraContext);

  const stripe = useStripe();
  const elements = useElements();
 
  const [inputs, setInputs] = useState({
    designacao: "",
    email: "",
    adress: "",
  });

  const [tipoPGM, setTipoPGM] = useState("");
  const [imgPayment, setImagePayment] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<any >(undefined);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const logoPayment = (evt: any) => {

    evt.preventDefault();

    const logoPAYMENT = evt.target.value;
    if (logoPAYMENT) {
      switch (logoPAYMENT) {
        case "CARTAO":
          setImagePayment("/payment/card.png");
          break;
        case "PAYPAL":
          setImagePayment("/payment/paypal.png");
          break;
        case "MBWAY":
          setImagePayment("/payment/mbway.svg");
          break;
        case "MB":
          setImagePayment("/payment/mb.svg");
          break;
        default:
          break;
      }
    }
 
  };



  return (
    <>
      <Header />
      <div className="m-3 font-extrabold text-base text-slate-500 border-slate-400  border-b">
        PAGAMENTO
      </div>

      <div className="flex flex-col  w-1/2 justify-center mx-auto m-3 border p-2 rounded-md">
        <form action=""  className="flex flex-col w-full gap-2">
          {/* NOME */}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <span className="inpt-label flex flex-row lg:w-1/6 md:h-1/4 justify-start items-center gap-1">
              <FaUser />
              Nome *
            </span>
            <input
              type="text"
              className="inpt-txt lg:w-full"
              value={inputs.designacao}
              onChange={(e) => setInputs({ ...inputs, designacao: e.target.value })}
              required
            />
            {/* remove */}
            <span className="cursor-pointer flex w-1/12 justify-end">
              <FaX onClick={() => setInputs({ ...inputs, designacao: "" })} />
            </span>
          </div>
          {/* EMAIL |    CONTACTO*/}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <span className="inpt-label flex flex-row lg:w-1/6 md:h-1/4 justify-start items-center gap-1">
              <MdMail />
              Email *
            </span>
            <input
              type="text"
              className="inpt-txt lg:w-full"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              required
            />
            {/* remove */}
            <span className="cursor-pointer flex w-1/12 justify-end">
              <FaX onClick={() => setInputs({ ...inputs, email: "" })} />
            </span>
          </div>
          <div></div>
          {/* ENDEREÇO */}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <span className="inpt-label flex flex-row lg:w-1/6 md:h-1/4 justify-start items-center gap-1">
              <MdLocationOn />
              Adress *
            </span>
            <input
              type="text"
              className="inpt-txt lg:w-full"
              value={inputs.adress}
              onChange={(e) => setInputs({ ...inputs, adress: e.target.value })}
              required
            />
            {/* remove */}
            <span className="cursor-pointer flex w-1/12 justify-end">
              <FaX onClick={() => setInputs({ ...inputs, adress: "" })} />
            </span>
          </div>
          <div></div>
        </form>

        <div className="flex flex-row  justify-start ">
          {/* resumo de compra  */}
          <div className="flex flex-col justify-start p-2 gap-2  w-1/2">
            <p className="font-bold text-xl text-slate-500">Resumo de Compra</p>
            <span>
              Qtdade:{" "}
              <span className="text-slate-500 font-bold text-base"> 2 </span>{" "}
            </span>
            <span>
              Desconto :{" "}
              <span className="text-slate-500 font-bold text-base">
                {" "}
                € 0,00{" "}
              </span>
            </span>
            <span>
              TOTAL :{" "}
              <span className="text-slate-500 font-bold text-xl"> €320</span>{" "}
            </span>
          </div>
          {/* metodo de pagamento  */}
          <div className="flex flex-col  w-full items-end border rounded-md p-2 ">
            <p className="flex w-full justify-end font-bold text-slate-600">
              Escolha o Método de Pagamento
            </p>
            <select
              className="w-full justify-end flex font-bold p-1 text-base text-slate-600 inpt-select"
              onChange={(evt) => logoPayment(evt)}
            >
              <option aria-readonly disabled>
                FORMA DE PAGAMENTO
              </option>
              <option value={"CARTAO"}>CARTAO</option>
              <option value={"PAYPAL"}>PAYPAL</option>
              <option value={"MBWAY"}>MBWAY</option>
              <option value={"MB"}>MULTIBANCO</option>
            </select>

            {/* LOGO PAYMENT */}
            {imgPayment&& ( 
              <div className="flex  justify-center w-full mt-2 p-2   items-center">
                <Image
                  src={imgPayment}
                  width={100}
                  height={50}
                  alt="web"
                  //   priority={true}
                  // layout="responsive"
                />
              </div>
            ) }
          </div>
        </div>
        <Elements stripe={stripePromise} >
          <CheckoutForm/>
        </Elements>
        {/* BOTAO DE PAGAMENTO */}
        <button
          className="flex justify-center items-center w-full mt-2
         btn-compra rounded-md   p-2 h-10 font-bold text-base"
         disabled={isDisabled} type="button" 
        >
          Finalizar Compra
        </button>
      </div>
    </>
  );
}
