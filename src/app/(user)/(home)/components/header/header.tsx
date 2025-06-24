'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', route: '/dashboard' },
  { name: 'Sutiã', route: '/' },
  { name: 'Calcinha', route: '/' },
  { name: 'Body', route: '/' },
  { name: 'Moda', route: '/' },
  { name: 'Pijamas', route: '/' },
  { name: 'Outlet', route: '/' },
  { name: 'Chá de Lingerie', route: '/' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSearchOnScroll, setShowSearchOnScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowSearchOnScroll(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white/20 backdrop-blur-md shadow z-50 fixed top-0 left-0 w-full text-white">
      {/* Mobile topbar */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 flex justify-center">
          {showSearchOnScroll ? (
            <div className="max-w-xs w-full px-2">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full h-9 rounded-md px-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm outline-none"
              />
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

        <ShoppingBag className="w-6 h-6" />
      </div>

      {/* Campo de busca no mobile (antes do scroll) */}
      {!showSearchOnScroll && (
        <div className="px-4 pb-2 md:hidden">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full h-9 rounded-md px-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm outline-none"
          />
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
          <ul className="flex gap-6 text-white font-medium text-sm">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className="hover:text-white text-pink-600 transition"
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
        <div className="fixed z-50 md:hidden">
          <div className="w-64 h-full bg-white backdrop-blur-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.route}
                      className="block py-2 border-b text-black border-gray-200"
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
