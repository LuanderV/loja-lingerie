"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Search } from "@/src/components/search"

const menuItems = [
  { name: "Dashboard", route: "/dashboard" },
  { name: "Sutiã", route: "/" },
  { name: "Calcinha", route: "/" },
  { name: "Body", route: "/" },
  { name: "Moda", route: "/" },
  { name: "Pijamas", route: "/" },
  { name: "Outlet", route: "/" },
  { name: "Chá de Lingerie", route: "/" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSearchOnScroll, setShowSearchOnScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowSearchOnScroll(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="bg-white shadow z-50 fixed top-0 left-0 w-full">
      {/* Mobile topbar */}
      <div className="flex items-center justify-between p-4 md:hidden">
        {/* Botão menu */}
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo ou campo de busca no centro */}
        <div className="flex-1 flex justify-center">
          {showSearchOnScroll ? (
            <div className="max-w-xs w-full px-2">
              <Search />
            </div>
          ) : (
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          )}
        </div>

        {/* Carrinho */}
        <ShoppingBag className="w-6 h-6" />
      </div>

      {/* Campo de busca abaixo da logo no mobile (aparece apenas antes do scroll) */}
      {!showSearchOnScroll && (
        <div className="px-4 pb-2 md:hidden">
          <Search />
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col items-center py-4">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={200}
          height={60}
          className="object-contain mb-2"
        />
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium text-sm">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className="hover:text-pink-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="w-64 bg-white h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.route}
                      className="block py-2 border-b border-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
