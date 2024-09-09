"use client";

import Image from "next/image";
import HeaderAdmin from "./components/Header";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import DataTable, { defaultThemes } from "react-data-table-component";
import { FaArrowRightLong } from "react-icons/fa6";
import produtos from "../productos";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import setupApiClient from "../api/axios";
import { FaX } from "react-icons/fa6";
import Link from "next/link";

export default function Admin() {
  const customStyle = {
    headCells: {
      style: {
        color: "#5A748C",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  const cl_vendas = [
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
      name: "Tipo Pagamento",
      selector: (row: any) => row.payment,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row: any) => row.total,
      sortable: true,
    },
    {
      name: "Data",
      selector: (row: any) => row.createdAt,
      sortable: true,
    },

    {
      name: "Accão",
      // selector: (row: any) => row.accao,
      cell: (row: any) => (
        <div className="flex flex-row gap-2 justify-center p-2">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      ),
    },
  ];

  const api = setupApiClient();
  const [vendas, setVendas] = useState<any>([]);
  const [search, setSearch] = useState<any>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);

  async function loadTable() {
    try {
      api
        .get("/venda/")
        .then((response) => {
          setVendas(response.data);
          console.log("tbl vendas :", response.data);
        })
        .catch((error) => {
          console.log("error api ", error);
        });
    } catch (error) {
      console.log("error:. ", error);
    }
  }

  const handleSearch = () => {
    if (search) {
      console.log("no filter");
      const filteredItems = vendas.filter(
        (item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.payment.toLowerCase().includes(search.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(search.toLowerCase())
      );
      setVendas(filteredItems);
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

  useEffect(() => {
    loadTable();
    // setIsClient(true);
    setFilteredData(vendas);
  }, []);

  return (
    <>
      <HeaderAdmin />
      <div className="m-3 border-t-2 p-1 border-slate-400">
        {/*  card  */}
        <div className="flex border gap-2 justify-center">
          {/* card produto */}
          <div className="bx-cards text-white  w-1/3 justify-center flex flex-col items-center">
            <Link
              href={"/admin/produto"}
              className="flex w-full  justify-end  p-1 "
            >
              <FaArrowRightLong className="bx-circle" />
            </Link>
            <AiFillProduct className="w-16 h-20 " />
            PRODUTOS
            {/* FOOTER */}
            <div className="flex  p-2 gap-2 justify-center items-center">
              <span>Produtos 12</span>
              <span>Categorias 2 </span>
            </div>
          </div>

          {/* card USER */}
          <div className="bx-cards text-white  w-1/3 justify-center flex flex-col items-center">
            <Link
              href={"/admin/user"}
              className="flex w-full  justify-end  p-1 "
            >
              <FaArrowRightLong className="bx-circle" />
            </Link>
            <FaUser className="w-16 h-20" />
            UTILIZADORES
            {/* FOOTER */}
            <div className="flex  p-2 gap-2 justify-center items-center">
              <span>Admins 12</span>
              <span>Normal 2 </span>
              <span>Total 16 </span>
            </div>
          </div>
          {/* card VENDAS */}
          <div className="bx-cards text-white  w-1/3 justify-center flex flex-col items-center">
            <Link
              href={"/admin/venda"}
              className="flex w-full  justify-end  p-1 "
            >
              <FaArrowRightLong className="bx-circle" />
            </Link>
            <FaChartPie className="w-16 h-20" />
            VENDAS
            {/* FOOTER */}
            <div className="flex  p-2 gap-2 justify-center items-center">
              <span>Mais Vendido 12</span>
              <span>Total Vendas 2 </span>
            </div>
          </div>
        </div>
        {/* tabela  */}
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
            columns={cl_vendas}
            data={vendas}
            customStyles={customStyle}
            pagination={true}
            paginationPerPage={5}
            selectableRows={false}
            fixedHeader
          />
        </div>
      </div>
    </>
  );
}
