import { produtos } from "../productos";
import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import PaginationItem from "./Pagination";

export default function Card() {
  return (
    <>
      <div className="m-3">
        {/* card */}
        <div className="flex flex-col items-center">
          {/* box image  */}
          <div className="border border-slate-400 rounded-sm w-1/4 flex justify-center items-center gap-2">
            <Image src="/products/p1.avif" width={200} height={95} alt="web" />
          </div>
          {/* nome */}
          <div className="font-bold text-base text-slate-400">TechNova X1</div>
          {/* preco */}
          <div className="font-bold text-xl text-slate-400"> €120</div>
          {/* actios| botões */}

          <div className="flex flex-row gap-3 cursor-pointer text-slate-600">
            {/* add  */}
            <div className="flex flex-row border border-slate-400  gap-2 p-2 items-center justify-center  rounded-sm">
              Adicionar
              <RiShoppingCart2Fill />
            </div>
            {/* comprar  */}
            <div className="flex flex-row border border-slate-400  gap-2 p-2 items-center justify-center  rounded-sm">
              Comprar
              <MdPayment />
            </div>
            {/* ver produtos*/}
            <div className="flex flex-row border border-slate-400  gap-2 p-2 items-center justify-center  rounded-sm">
              Ver Produto
              <IoEyeSharp />
            </div>
          </div>
        </div>
      </div>
      <PaginationItem itemsPerPage={6} />
    </>
  );
}
