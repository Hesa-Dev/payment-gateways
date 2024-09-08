import Image from "next/image";
import HeaderAdmin from "./components/Header";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";

export default function Admin() {
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
        <div></div>
      </div>
    </>
  );
}
