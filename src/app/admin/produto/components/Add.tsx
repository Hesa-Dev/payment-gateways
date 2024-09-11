"use client";

import { useContext, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaUser, FaX } from "react-icons/fa6";
import { MdLocationOn, MdMail } from "react-icons/md";
import { LuText } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { GoNumber } from "react-icons/go";
import { IoImages } from "react-icons/io5";
import { ProdutoContext } from "@/app/context/ProdutoContext";
import { TbCategoryPlus } from "react-icons/tb";

interface closeBox {
  isClose: (tipo: any) => void;
  loadTbl: () => void;
}

export default function ADD(props: closeBox) {
  const { add, produto } = useContext(ProdutoContext);

  const [inputs, setInputs] = useState({
    designacao: "",
    qtdade: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [boxOpen, setBoxOpen] = useState({
    add: false,
    edit: false,
    arg: true,
  });

  const handleAdd = async (e: any) => {
    e.preventDefault();

    const client_clean = {
      designacao: "",
      qtdade: "",
      category: "",
      description: "",
      price: "",
      image: "",
    };

    if (inputs) {
      var cat = inputs.category;

      if (inputs.category == undefined || inputs.category == "") {
        cat = "Smartphone";
      }

      const client: any = {
        name: inputs.designacao,
        description: inputs.description,
        price: parseFloat(inputs.price),
        qtdade: parseFloat(inputs.qtdade),
        category: cat,
        image: inputs.image,
      };

      if (selectedFile) {
        await add(client);
        props.loadTbl();
        setInputs(client_clean);
      }
    }

    console.log(
      inputs.image,
      " ",
      inputs.designacao,
      " ",
      inputs.category,
      " ",
      inputs.price,
      "",
      inputs.qtdade,
      "",
      inputs.description
    );
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setInputs({ ...inputs, image: event.target.files[0].name });
  };

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
        <form
          action=""
          onSubmit={(e: any) => handleAdd(e)}
          className="flex flex-col w-full gap-2"
        >
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
              onChange={(e) =>
                setInputs({ ...inputs, designacao: e.target.value })
              }
              required
            />
            {/* remove */}
            <span className="cursor-pointer flex w-1/12 justify-end">
              <FaX onClick={() => setInputs({ ...inputs, designacao: "" })} />
            </span>
          </div>
          {/* Descrição*/}
          <div className="flex flex-col w-full gap-2 bx-inpt-txt  items-center p-2">
            <span className="inpt-label flex w-full justify-start items-center gap-1">
              <LuText />
              Descrição
              {/* remove */}
              <span className="cursor-pointer flex w-full gap-2 justify-end">
                <FaX
                  onClick={() => setInputs({ ...inputs, description: "" })}
                />
              </span>
            </span>
            <textarea
              className="inpt-txt lg:w-full"
              rows={4}
              cols={4}
              value={inputs.description}
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
              required
            />
          </div>
          {/* Categoria */}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <div className="flex justify-start items-center ">
              <TbCategoryPlus />
            </div>
            <select
              name="selectedFruit"
              className="inpt-select  font-semibold w-full"
              onChange={(e) =>
                setInputs({ ...inputs, category: e.target.value })
              }
            >
              <option value="web" aria-readonly disabled>
                Selecionar Categoria
              </option>
              <option value="Smartphone">Smartphone</option>
              <option value="Computadores">Computadores</option>
              <option value="Acessorios">Acessorios Informático</option>
            </select>
          </div>
          {/* IMAGE */}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <label
              id="myfile"
              className="inpt-label flex flex-row lg:w-full md:h-1/4 justify-start items-center gap-2"
            >
              <IoImages />
              Image *
              <input
                type="file"
                id="myfile"
                className="inpt-txt lg:w-full hidden"
                onChange={(event) => handleFileChange(event)}
                // onChange={(e) =>
                //   setInputs({ ...inputs, image: e.target.value })
                // }
                required
              />
             <span> {inputs.image}</span> 
            </label>

            {/* remove */}
            <span className="cursor-pointer flex w-1/12 justify-end">
              <FaX onClick={() => setInputs({ ...inputs, image: "" })} />
            </span>
          </div>
          {/* PREÇO | QTDADE */}
          <div className="flex flex-row w-full gap-2   items-center p-2">
            {/* PRECO */}
            <div className="flex w-full items-center bx-inpt-txt ">
              <span className="inpt-label flex flex-row lg:w-1/2  p-2 md:h-1/4 justify-start items-center gap-1">
                <GrMoney />
                Preço *
              </span>
              <input
                type="number"
                className="inpt-txt lg:w-full"
                min={1}
                onChange={(e) =>
                  setInputs({ ...inputs, price: e.target.value })
                }
                required
              />
              {/* remove */}
              <span className="cursor-pointer flex w-1/12 justify-end">
                <FaX onClick={() => setInputs({ ...inputs, price: "" })} />
              </span>
            </div>
            {/* qtdade */}
            <div className="flex w-full items-center bx-inpt-txt p-2">
              <span className="inpt-label flex flex-row lg:w-1/2 md:h-1/4 justify-start items-center gap-1">
                <GoNumber />
                Qtdade *
              </span>
              <input
                type="number"
                className="inpt-txt lg:w-full"
                value={inputs.qtdade}
                onChange={(e) =>
                  setInputs({ ...inputs, qtdade: e.target.value })
                }
                required
              />
              {/* remove */}
              <span className="cursor-pointer flex w-1/12 justify-end">
                <FaX onClick={() => setInputs({ ...inputs, qtdade: "" })} />
              </span>
            </div>
          </div>

          {/* btn add  */}
          <button type="submit" className="w-full p-2 btn-add">
            {" "}
            Registar Produto
          </button>
        </form>
      </div>
    </>
  );
}
