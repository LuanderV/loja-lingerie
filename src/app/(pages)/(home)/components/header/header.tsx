import Image from "next/image";
import Link from "next/link";
import SwiperHeader from "./swiper-header";

const menuItems = [
  { name: "Dashboard", route: "/dashboard" },
  { name: "Sutiã", route: "/" },
  { name: "Calcinha", route: "/" },
  { name: "Body", route: "/" },
  { name: "Moda", route: "/" },
  { name: "Pijamas", route: "/" },
  { name: "Outlet", route: "/" },
  { name: "Chá de Lingerie", route: "/" },
];

export default function Header() {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50">

        {/* Logo */}
        <div className="flex justify-center py-4">
          <Image
            src="/img/logo.png"
            alt="Logo da Loja"
            width={200}
            height={60}
            quality={100}
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <nav className="overflow-x-auto">
          <ul className="flex justify-center md:justify-center flex-wrap gap-4 md:gap-6 px-4 py-3 text-white font-medium text-sm md:text-base whitespace-nowrap">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className="hover:text-pink-400 transition-colors border-b-2 border-transparent hover:border-pink-500 pb-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <SwiperHeader />
    </div>
  );
}
