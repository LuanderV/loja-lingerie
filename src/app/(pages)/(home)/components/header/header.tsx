import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import SwiperHeader from "./swiper-header";

const menuItems = [
  { name: "Dashboard", route: "/dashboard" },
  { name: "Sutiã", route: "/bras" },
  { name: "Calcinha", route: "/panties" },
  { name: "Body", route: "/body" },
  { name: "Moda", route: "/fashion" },
  { name: "Pijamas", route: "/pijamas" },
  { name: "Outlet", route: "/outlet" },
  { name: "Chá de Lingerie", route: "/lingerie-tea" },
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
                key={item.name}
                className="hover:border-b-2 hover:border-pink-600 hover:rounded pb-1"
              >
                <li>
                  {/* Utilize a rota específica para cada item de menu */}
                  <Link
                    href={item.route}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.name}
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
