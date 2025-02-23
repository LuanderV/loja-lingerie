import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LOGO E DESCRIÇÃO */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500">Gaveta de Mulher</h2>
          <p className="mt-2 text-gray-400">
            Moda íntima para todos os momentos. Qualidade e conforto para você!
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h3 className="text-lg font-semibold text-pink-400">Links Rápidos</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/sobre" className="text-gray-400 hover:text-pink-400">Sobre</Link>
            </li>
            <li>
              <Link href="/contato" className="text-gray-400 hover:text-pink-400">Contato</Link>
            </li>
            <li>
              <Link href="/ajuda" className="text-gray-400 hover:text-pink-400">Ajuda</Link>
            </li>
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h3 className="text-lg font-semibold text-pink-400">Nos siga</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-400 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 text-2xl"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-5 text-sm">
        &copy; 2025 Gaveta de Mulher - Todos os direitos reservados.
      </div>
    </footer>
  );
}
