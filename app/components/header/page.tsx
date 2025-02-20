"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiHeart, FiUser, FiShoppingBag } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Header() {
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex justify-end items-center px-8 py-4 gap-8 mx-28">
          <div className="relative min-w-80">
            <input
              type="text"
              placeholder="Buscar Produtos..."
              className="w-full pl-4 pr-4 py-2 rounded-full border border-gray-300"
            />
            <FiSearch className="absolute right-4 top-2.5 text-gray-600 text-xl" />
          </div>

          <div className="flex space-x-6 text-white text-2xl">
            <FiHeart className="hover:text-pink-600 cursor-pointer transition" />
            <FiUser className="hover:text-pink-600 cursor-pointer transition" />
            <FiShoppingBag className="hover:text-pink-600 cursor-pointer transition" />
          </div>
        </div>

        <div className="flex justify-center">
          <Image src="/img/logo.png" alt="Logo da Loja" width={300} height={60} />
        </div>

        <nav>
          <div className="flex justify-center space-x-6 py-3 text-white font-medium">
            {["Lançamentos", "Sutiã", "Calcinha", "Body", "Moda", "Pijamas", "Outlet", "Chá de Lingerie"].map((item) => (
                <ul key={item} className="hover:border-b-2 hover:border-pink-600 hover:rounded pb-1">
                    <li>
                        <Link href="#" className="hover:text-gray-300 transition-colors">{item}</Link>
                    </li>
                </ul>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative w-full h-[900px]">
        <Swiper loop autoplay={{ delay: 100 }} className="w-full h-full">
          <SwiperSlide>
            <Image src="/img/banner-header/banner1.jpg" alt="Banner 1" layout="fill" objectFit="cover" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/banner-header/banner2.jpg" alt="Banner 2" layout="fill" objectFit="cover" priority />
          </SwiperSlide>
        </Swiper>
      </section> 
    </div>
  );
}