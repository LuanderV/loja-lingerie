import {
  Banknote,
  CreditCard,
  DollarSign,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 footer-container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-pink-500">Gaveta de Mulher</h2>
          <p className="mt-2 text-gray-400">
            Moda íntima para todos os momentos. Qualidade e conforto para você!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-pink-400">Links Rápidos</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-pink-400">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-pink-400">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-pink-400">
                Ajuda
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-pink-400">
                Políticas da Loja
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-pink-400">Nos siga</h3>
          <div className="mt-2 flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-pink-400">
            Formas de Pagamento
          </h3>
          <div className="mt-2 flex justify-center space-x-6">
            <CreditCard size={28} className="text-gray-400" />
            <DollarSign size={28} className="text-gray-400" />
            <Banknote size={28} className="text-gray-400" />
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-5 text-sm">
          &copy; 2025 Gaveta de Mulher - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
