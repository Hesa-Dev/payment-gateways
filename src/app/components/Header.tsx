import Image from "next/image";
import Link from "next/link";
import { FcCdLogo } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { PiTidalLogoBold } from "react-icons/pi";

export default function Header() {
  return (
    <>
      <nav className="flex">
        <div className="flex w-full items-center  bg-slate-500 m-3 p-2">
          {/* logo */}
          <div className="w-1/4">
            {/* <FcCdLogo style={{ fontSize: "45px", color: "#f2faf7" }} /> */}
            <PiTidalLogoBold style={{ fontSize: "45px", color: "#f2e1f1" }} />
          </div>
          <div className="w-1/2 flex text-white  tipografia gap-6 justify-center items-center">
            <span className="cursor-pointer font-bold">Productos </span>
            <span className="cursor-pointer font-bold">Blog </span>
            <span className="cursor-pointer font-bold">Sobre nós</span>
          </div>

          <div className="justify-end flex w-1/3  cursor-pointer   items-center gap-1  text-white">
            <FaUser style={{ fontSize: "28px", color: "#f2faf7" }} />
            Minha Área
          </div>
        </div>
      </nav>
    </>
  );
}
