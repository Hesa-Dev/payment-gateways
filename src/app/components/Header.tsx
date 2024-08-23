import Image from "next/image";
import Link from "next/link";
import { FcCdLogo } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="flex   p-">
        <div className="flex w-full items-center  bg-slate-500 m-3 p-3">
          {/* logo */}
          <div>
            <FcCdLogo style={{ fontSize: "45px", color: "#fff" }} />
          </div>
          <div>
            <span>Products </span>
            <span>Blog </span>
            <span>About us </span>
          </div>

          <div className="justify-center flex  items-center gap-2">
            <FaUser style={{ fontSize: "30px", color: "#29271f" }} />
            admin
          </div>
        </div>
      </nav>
    </>
  );
}
