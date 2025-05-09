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
            src="https://picsum.photos/1280/720"
            alt="Banner 1"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/1280/720"
            alt="Banner 2"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
