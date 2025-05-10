"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SwiperHeader() {
  return (
    <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[900px]">
      <Swiper
        loop
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <Image
            src="/img/header/banner1.jpg"
            alt="Banner 1"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/header/banner2.jpg"
            alt="Banner 2"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
