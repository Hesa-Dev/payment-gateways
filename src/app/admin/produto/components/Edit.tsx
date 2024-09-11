"use client";

import { useContext, useEffect, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaUser, FaX } from "react-icons/fa6";
import { MdLocationOn, MdMail } from "react-icons/md";
import { LuText } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { GoNumber } from "react-icons/go";
import { IoImages } from "react-icons/io5";
import { ProdutoContext } from "@/app/context/ProdutoContext";
import setupApiClient from "@/app/api/axios";
import { TbCategoryPlus } from "react-icons/tb";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface closeBox {
  isClose: (tipo: any) => void;
  loadTbl: () => void;
  produtoId: number | undefined;
}

export default function EDIT(props: closeBox) {

  // const notify = () => toast("This is a toast!", {
  //   position: "top-right",
  //   autoClose: 3000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });

  // const notify = () => toast("Wow so easy!");

  const { produto, getProdutoByID, editar, response } =
    useContext(ProdutoContext);

  const api = setupApiClient();

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

  const handleEdit = async (e: any) => {
    e.preventDefault();

    toast.success("produto[" + props.produtoId + "] editado com sucesso");

    const fieldClean = {
      designacao: "",
      qtdade: "",
      category: "",
      description: "",
      price: "",
      image: "",
    };

    if (inputs) {
      var cat = "Smartphone";

      if (inputs.category) {
        cat = inputs.category;
      }

      const prodData: any = {
        name: inputs.designacao,
        description: inputs.description,
        price: parseFloat(inputs.price),
        qtdade: parseFloat(inputs.qtdade),
        category: cat,
        image: inputs.image,
        id: props.produtoId,
      };

      if (prodData.image) {
        await editar(prodData);

        if (response == "update") {
          props.loadTbl();
          // notify();
         
        }

        setInputs(fieldClean);
        console.log(prodData.id, "", prodData.name, " ", prodData.description);
      }
    }

    // console.log(
    //   inputs.image,
    //   " ",
    //   inputs.designacao,
    //   " ",
    //   inputs.category,
    //   " ",
    //   inputs.price,
    //   "",
    //   inputs.qtdade,
    //   "",
    //   inputs.description
    // );
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setInputs({ ...inputs, image: event.target.files[0].name });
  };

  useEffect(() => {
    async function loadData(idproduto: number | undefined) {
      console.log("id:_props: " + idproduto);

      const response = await api
        .get("/produto/id", {
          params: {
            id: props.produtoId,
          },
        })
        .then(function (res) {
          const { name, description, price, qtdade, image, id, category } =
            res.data;

          setInputs({
            ...boxOpen,
            designacao: name,
            qtdade: qtdade.toString(),
            category: category,
            description: description,
            price: price.toString(),
            image: image,
          });
        })
        .catch(function (error) {
          console.log("error response: ", error.message);
        });
    }

    // if (props.produtoId) {
    //   getProdutoByID(props.produtoId);

    //   if (produto) {
    //     setInputs({
    //       ...boxOpen,
    //       designacao: produto.name,
    //       qtdade: produto.qtdade.toString(),
    //       category: produto.category,
    //       description: produto.description,
    //       price: produto.price.toString(),
    //       image: produto.image,
    //     });
    //   }
    // }

    loadData(props.produtoId);
  }, []);

  return (
    <>
      <div className="bx-form w-1/2 border rounded-sm mx-auto mt-2 mb-2 p-2">
        {/* HEADER */}
        <div className="flex flex-row  bg-secondary rounded-sm ">
          <div className=" flex flex-row items-center text-white p-1 gap-1 w-1/2">
            Editar ({props.produtoId})
            <AiFillProduct className="w-16 h-11 " />
          </div>
          <div className="flex    w-full justify-end  items-center p-1">
            <FaX
              className="text-white  cursor-pointer"
              onClick={() => props.isClose("edit")}
            />
          </div>
        </div>

        {/* Formulario */}
        <form
          action=""
          onSubmit={(e: any) => handleEdit(e)}
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
              <FaX onClick={() => toast.success("delete")} />
              {/* <FaX onClick={() => setInputs({ ...inputs, designacao: "" })} /> */}
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
              <option
                selected={inputs.category == "Smartphone" && true}
                value="Smartphone"
              >
                Smartphone
              </option>
              <option selected={inputs.category == "Computadores" && true}>
                Computadores
              </option>
              <option selected={inputs.category == "acessorios" && true}>
                Acessorios Informático
              </option>
            </select>
          </div>
          {/* IMAGE */}
          <div className="flex flex-row w-full gap-2 bx-inpt-txt  items-center p-2">
            <label
              id="myfile"
              className="inpt-label cursor-pointer flex flex-row lg:w-full md:h-1/4 justify-start items-center gap-1"
            >
              <IoImages />
              Image *
              <input
                type="file"
                id="myfile"
                // value={inputs.image}
                className="inpt-txt lg:w-full hidden"
                onChange={(event) => handleFileChange(event)}
                // onChange={(e) =>
                //   setInputs({ ...inputs, image: e.target.value })
                // }
                // required
              />
              <span> {inputs.image && inputs.image}</span>
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
                value={inputs.price}
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
            Atualizar Produto
          </button>
        </form>
      
      </div>

      <ToastContainer />
    </>
  );
}
