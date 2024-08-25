import { RiShoppingCart2Fill } from "react-icons/ri";
import Header from "../components/Header";
import Image from "next/image";
import { MdPayment } from "react-icons/md";

Header;

export default function Produto() {
  return (
    <>
      <Header />
      <div className="m-3 font-extrabold text-base text-slate-500 border-slate-400  border-b">
        PRODUTO
      </div>

      <div className="flex lg:flex-row justify-center items-center sm:flex-col  md:flex-col gap-2 p-1 lg:m-3">
        <div className="flex border border-slate-300">
          <Image
            src={"/products/p1.avif"}
            width={400}
            height={260}
            alt="web"
            //   priority={true}
            // layout="responsive"
          />
        </div>

        <div className="flex flex-col border border-slate-300  p-2">
          {/* titulo */}
          <span className="justify-start font-bold text-2xl text-slate-600">
            TechNova X1
          </span>
          {/* descricao  */}
          <div className="flex lg:mt-11 sm:mt-2 md:mt-3 flex-wrap">
            <p className="p-1 pt-2 text-justify">
              Smartphone XYZ com 128GB de armazenamento, tela de 6.5 polegadas e
              câmera de 48MP. É uma alternativa mais segura e muito mais durável
              às velas tradicionais graças à sua compatibilidade com a vela LED
            </p>
          </div>
          {/* preco */}
          <div className="flex flex-col justify-center mt-2">
            <p className="font-extrabold text-3xl mb-2 text-slate-600">
              € 200
            </p>
            <span className="font-bold text-sm">Qtda Em Stock</span>
            <span  className="font-normal text-sm">1 unidade</span>
          </div>

          {/* Botões  */}
          <div className="flex flex-row gap-2">
            <div
              className="flex lg:flex-row lg:text-base border  
          md:flex-col sm:flex-col border-slate-400  gap-2 p-2 
          items-center justify-center  cursor-pointer  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
            >
              Adicionar
              <RiShoppingCart2Fill />
            </div>
            {/* comprar  */}
            <div
              className="flex lg:flex-row lg:text-base border md:flex-col sm:flex-col border-slate-400  gap-2 lg:p-2 
                  items-center justify-center cursor-pointer  rounded-sm md:p-1 md:gap-2 sm:text-xs md:text-xs"
            >
              Comprar
              <MdPayment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
