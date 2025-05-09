import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 footer-container grid grid-cols-1 md:grid-cols-4 gap-8">

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
            <li><Link href="/sobre" className="text-gray-400 hover:text-pink-400">Sobre</Link></li>
            <li><Link href="/contato" className="text-gray-400 hover:text-pink-400">Contato</Link></li>
            <li><Link href="/ajuda" className="text-gray-400 hover:text-pink-400">Ajuda</Link></li>
            <li><Link href="/politicas" className="text-gray-400 hover:text-pink-400">Políticas da Loja</Link></li>
          </ul>
        </div>

        {/* FORMULÁRIO DE NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-pink-400">Receba novidades</h3>
          <form className="mt-2 flex flex-col">
            <input type="email" placeholder="Seu e-mail" className="p-2 rounded bg-gray-800 text-white outline-none"/>
            <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Inscrever-se
            </button>
          </form>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h3 className="text-lg font-semibold text-pink-400">Nos siga</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-400 text-2xl"></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 text-2xl"></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 text-2xl"></a>
          </div>
        </div>
      </div>

      {/* FORMAS DE PAGAMENTO */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-pink-400">Formas de Pagamento</h3>
        <div className="mt-2 flex justify-center space-x-4">
          <span className="text-3xl text-gray-400" />
          <span className="text-3xl text-gray-400" />
          <span className="text-3xl text-gray-400" />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-5 text-sm">
        &copy; 2025 Gaveta de Mulher - Todos os direitos reservados.
      </div>
    </footer>
  );
}