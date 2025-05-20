"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  frontImage: string;
  backImage: string;
  alt: string;
};

export const ProductImage = ({ frontImage, backImage, alt }: ProductImageProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={hovered && backImage ? backImage : frontImage}
        alt={alt}
        fill
        className="object-cover rounded-md transition-opacity duration-300"
        priority
      />
    </div>
  );
};
