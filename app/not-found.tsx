import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

export default function NotFound() {
  return (
    <Fragment>
      <header>
        <Image src="/img/logo.png" alt="Logo" width={300} height={60}/>
      </header>
      <div className="flex flex-col items-center justify-center mt-40">
        <MdOutlineScreenSearchDesktop className="text-8xl" />
        <h1 className="text-6xl font-bold p-10 mb-6">
          404 - Página Não Encontrada
        </h1>
        <Link
          href="/"
          className="text-black flex items-center justify-center gap-3 font-bold hover:text-gray-600 hover:border-b-2 hover:border-pink-600 hover:rounded pb-1 mt-5 pl-3 pr-3"
        >
          <FaArrowRight /> Voltar para o Inicio
        </Link>
      </div>
    </Fragment>
  );
}
