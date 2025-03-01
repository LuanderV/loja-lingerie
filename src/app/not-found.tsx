import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

export default function NotFound() {
  return (
    <div>
      <header className="flex justify-center p-6">
        <Image src="/img/logo.png" alt="Logo" width={300} height={60} />
      </header>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <MdOutlineScreenSearchDesktop className="text-8xl text-pink-600 animate-bounce" />
        <h1 className="text-6xl font-bold p-10 mb-6">
          404 - Página Não Encontrada
        </h1>
        <Link
          href="/"
          className="text-black flex items-center justify-center gap-3 font-bold hover:text-gray-800 hover:border-b-2 hover:border-pink-600 hover:rounded pb-1 mt-5 pl-3 pr-3 transition-all"
        >
          <FaArrowRight /> Voltar para o Inicio
        </Link>
      </div>
    </div>
  );
}
