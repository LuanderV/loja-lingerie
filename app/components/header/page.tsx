import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="flex justify-center py-4">
        <Image 
          src="/img/logo.png" 
          alt="Logo da Loja" 
          width={300} 
          height={80} 
        />
      </div>

      <nav>
        <ul className="flex justify-center space-x-8 py-2 text-gray-900 font-medium">
          <li><Link href="#" className="hover:text-gray-600">Lançamentos</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Sutiã</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Calcinha</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Body</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Moda</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Pijamas</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Outlet</Link></li>
          <li><Link href="#" className="hover:text-gray-600">Chá de Lingerie</Link></li>
        </ul>
      </nav>
    </header>
  );
}
