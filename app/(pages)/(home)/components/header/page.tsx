import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import SwiperHeader from "./swiper-header";

const menuItems = [
  "Lançamentos",
  "Sutiã",
  "Calcinha",
  "Body",
  "Moda",
  "Pijamas",
  "Outlet",
  "Chá de Lingerie",
];

export default function Header() {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50">
        <Search />

        <div className="flex justify-center">
          <Image
            src="/img/logo.png"
            alt="Logo da Loja"
            width={300}
            height={60}
            quality={100}
          />
        </div>

        <nav>
          <div className="flex justify-center space-x-6 py-3 text-white font-medium">
            {menuItems.map((item) => (
              <ul
                key={item}
                className="hover:border-b-2 hover:border-pink-600 hover:rounded pb-1"
              >
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </nav>
      </header>

      <SwiperHeader />
    </div>
  );
}
