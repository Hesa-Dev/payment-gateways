"use client";

import Image from "next/image";
import HeaderAdmin from "../components/Header";
import { IoIosAddCircle } from "react-icons/io";
import DataTable, { defaultThemes } from "react-data-table-component";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Link from "next/link";
import setupApiClient from "@/app/api/axios";
import { IoSearch } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ADD from "./components/Add";
import EDIT from "./components/Edit";

export default function Produto() {
  const api = setupApiClient();
  const [produtos, setProdutos] = useState<any>([]);
  const [search, setSearch] = useState<any>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [boxOpen, setBoxOpen] = useState({
    add: false,
    edit: false,
    arg: true,
  });

  const isClose = (type: string): void => {
    if (type === "add") {
      setBoxOpen({ ...boxOpen, add: false });
      loadTable();
    } else {
      setBoxOpen({ ...boxOpen, edit: false });
      loadTable();
    }
  };

  const isOpen = (type: string, id?: number) => {
    switch (type) {
      case "add":
        if (boxOpen.add === false) {
          setBoxOpen({ ...boxOpen, add: true });
          return;
        }
        break;
      default:
        if (boxOpen.edit == false) {
          // setIdUser(id)
          setBoxOpen({ ...boxOpen, edit: true });
          return;
        }
        break;
    }
  };

  async function loadTable() {
    try {
      api
        .get("/produto")
        .then((response) => {
          setProdutos(response.data);
          console.log("tbl produtos :", response.data);
        })
        .catch((error) => {
          console.log("error api ", error);
        });
    } catch (error) {
      console.log("error:. ", error);
    }
  }

  const customStyle = {
    headCells: {
      style: {
        color: "#5A748C",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  const cl_produto = [
    {
      name: "ID",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Nome",
      selector: (row: any) => row.name,
      sortable: true,
    },

    {
      name: "Descricao",
      selector: (row: any) => row.description,
      sortable: true,
    },

    {
      name: "Categoria",
      selector: (row: any) => row.category,
      sortable: true,
    },
    {
      name: "Qtdade",
      selector: (row: any) => row.total,
      sortable: true,
    },
    {
      name: "Preço",
      selector: (row: any) => row.price,
      sortable: true,
    },

    {
      name: "Accão",
      // selector: (row: any) => row.accao,
      cell: (row: any) => (
        <div className="flex flex-row gap-2 justify-center p-2">
          <button className=" flex w-9 rounded-sm h-10 border  text-yellow-400 p-2 justify-center items-center">
            <MdModeEdit />
          </button>

          <button className="flex border rounded-sm  w-9 h-10  text-red-400 p-2 justify-center items-center">
            <RiDeleteBin6Fill />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    loadTable();
    setFilteredData(produtos);
  }, []);

  const handleSearch = () => {
    if (search) {
      console.log("no filter");
      const filteredItems = produtos.filter(
        (item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      );
      setProdutos(filteredItems);
    }
  };

  const cleanInput = () => {
    if (search.length > 0) {
      setSearch("");
      loadTable();
    }
    if (search.length == 0) {
      setSearch("");
      loadTable();
    }
  };
  return (
    <>
      <HeaderAdmin />
      <div className="m-3 border-t-2 p-1 border-slate-400">
        {/*  bnt add  */}
        <div onClick={() => isOpen("add")}  className="flex w-full btn-add justify-center items-center ">
          Adicionar Produto
          <IoIosAddCircle className="w-12 h-11 " />
        </div>

        {/* tabela */}
        <div className=" flex flex-col rounded-sm border-slate-400 justify-center w-full p-2 mt-3 gap-2  border ">
          <div className="flex flex-row justify-center items-center  w-full gap-2">
            {/*  inpt pesquisa | remover  */}
            <div className="flex justify-center items-center  rounded-sm gap-2 w-full border border-slate-400 p-1">
              <input
                type="text"
                placeholder="Pesquisar vendas"
                value={search}
                className="inpt-txt w-full text-slate-600"
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* remove */}
              <span className="cursor-pointer flex w-1/12 justify-end">
                <FaX className="text-slate-600 " onClick={cleanInput} />
              </span>
            </div>
            {/* btn pesquisa  */}
            <div className="flex  w-8 justify-end gap-1 border p-2 cursor-pointer rounded-sm  border-slate-400">
              <IoSearch
                onClick={handleSearch}
                className="text-slate-600 font-extrabold"
              />
            </div>
          </div>
          <DataTable
            columns={cl_produto}
            data={produtos}
            customStyles={customStyle}
            pagination={true}
            paginationPerPage={5}
            selectableRows={false}
            fixedHeader
          />
        </div>

        {/* ADD PRODUTO */}
        {/* formularios  | novo cliente*/}
        {boxOpen.add == true && <ADD isClose={isClose} loadTbl={loadTable} />}
        {/* EDIT PRODUTO */}
      </div>
    </>
  );
}
