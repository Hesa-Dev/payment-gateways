"use client";

import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaUser, FaX } from "react-icons/fa6";
import { MdLocationOn, MdMail } from "react-icons/md";

interface closeBox {
  isClose: (tipo: any) => void;
  loadTbl: () => void;
}

export default function ADD(props: closeBox) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    adress: "",
    nif: "",
    tipo: "normal",
    morada: "",
    phone: "",
    data: "",
  });
  const [boxOpen, setBoxOpen] = useState({
    add: false,
    edit: false,
    arg: true,
  });

  return (
    <>
      <div className="bx-form w-1/2 border rounded-sm mx-auto mt-2 mb-2 p-2">
        {/* HEADER */}
        <div className="flex flex-row  bg-secondary rounded-sm ">
          <div className=" flex flex-row items-center text-white p-1 gap-1 w-1/2">
            Novo Produto
            <AiFillProduct className="w-16 h-11 " />
          </div>
          <div className="flex    w-full justify-end  items-center p-1">
            <FaX
              className="text-white  cursor-pointer"
              onClick={() => props.isClose("add")}
            />
          </div>
        </div>

        {/* Formulario */}
        <form action="" className="flex flex-col w-full gap-2">
          {/* NOME */}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <span className="inpt-label flex flex-row lg:w-1/6 md:h-1/4 justify-start items-center gap-1">
              <FaUser />
              Nome *
            </span>
            <input
              type="text"
              className="inpt-txt lg:w-full"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              required
            />
            {/* remove */}
            <span className="cursor-pointer flex w-1/12 justify-end">
              <FaX onClick={() => setInputs({ ...inputs, name: "" })} />
            </span>
          </div>
          {/* EMAIL |    CONTACTO*/}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <span className="inpt-label flex flex-row lg:w-1/4 md:h-1/4 justify-start items-center gap-1">
              <MdMail />
              Descrição *
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
          {/* DESCRICAO */}
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
          {/* PREÇO | QTDADE */}
          <div className="flex flex-row w-full gap-2   items-center p-2">
            {/* PRECO */}
            <div className="flex w-full items-center bx-inpt-txt ">
              <span className="inpt-label flex flex-row lg:w-1/4 md:h-1/4 justify-start items-center gap-1">
                <MdLocationOn />
                Preço *
              </span>
              <input
                type="text"
                className="inpt-txt lg:w-full"
                value={inputs.adress}
                onChange={(e) =>
                  setInputs({ ...inputs, adress: e.target.value })
                }
                required
              />
              {/* remove */}
              <span className="cursor-pointer flex w-1/12 justify-end">
                <FaX onClick={() => setInputs({ ...inputs, adress: "" })} />
              </span>
            </div>
            {/* qtdade */}
            <div  className="flex w-full items-center bx-inpt-txt " >
              <span className="inpt-label flex flex-row lg:w-1/4 md:h-1/4 justify-start items-center gap-1">
                <MdLocationOn />
                Qtdade *
              </span>
              <input
                type="text"
                className="inpt-txt lg:w-full"
                value={inputs.adress}
                onChange={(e) =>
                  setInputs({ ...inputs, adress: e.target.value })
                }
                required
              />
              {/* remove */}
              <span className="cursor-pointer flex w-1/12 justify-end">
                <FaX onClick={() => setInputs({ ...inputs, adress: "" })} />
              </span>
            </div>
          </div>

          {/* IMAGE */}
        </form>
      </div>
    </>
  );
}
