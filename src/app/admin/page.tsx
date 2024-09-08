"use client"

import Image from "next/image";
import HeaderAdmin from "./components/Header";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import DataTable, { defaultThemes } from "react-data-table-component";
import produtos from "../productos";

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
      name: "E-mail",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "Descricao",
      selector: (row: any) => row.phone,
      sortable: true,
    },

    {
      name: "Tipo Pagamento",
      selector: (row: any) => row.nif,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row: any) => row.nif,
      sortable: true,
    },
    {
      name: "Data",
      selector: (row: any) => row.nif,
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

  return (
    <>
      <HeaderAdmin />
      <div className="m-3 border-t-2 p-1 border-slate-400">
        {/*  card  */}
        <div className="flex border gap-2 justify-center">
          {/* card produto */}
          <div className="bx-cards text-white  w-1/3 justify-center flex flex-col items-center">
            <AiFillProduct className="w-16 h-20" />
            PRODUTOS
            {/* FOOTER */}
            <div className="flex  p-2 gap-2 justify-center items-center">
              <span>Produtos 12</span>
              <span>Categorias 2 </span>
            </div>
          </div>

          {/* card USER */}
          <div className="bx-cards text-white  w-1/3 justify-center flex flex-col items-center">
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
          <DataTable
            columns={cl_vendas}
            data={produtos}
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
