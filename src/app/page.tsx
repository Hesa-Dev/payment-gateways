import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Produtos from "./components/ListaProdutos";

export default function Home() {
  return (
    <>
      <Header />
      <Produtos />

      {/* <Footer /> */}
    </>
  );
}
