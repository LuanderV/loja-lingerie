"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperHeader() {
  return (
    <div className="relative w-full h-[900px]">
      <Swiper loop autoplay={{ delay: 100 }} className="w-full h-full">
        <SwiperSlide>
          <Image
            src="/img/banner-header/banner1.jpg"
            alt="Banner 1"
            layout="fill"
            objectFit="cover"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/banner-header/banner2.jpg"
            alt="Banner 2"
            layout="fill"
            objectFit="cover"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
