"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { cn } from "@/lib/utils";

type SlideImage = {
  id: number;
  src: string;
  alt: string;
  className?: string;
};

function SwiperCarousel({
  images,
  className,
  children,
}: {
  images: SlideImage[];
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Swiper
      speed={2000}
      slidesPerView={1}
      effect={"fade"}
      loop={true}
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 1000 * 3,
        disableOnInteraction: false,
      }}
      className={cn("h-dvh", className)}
    >
      {images.map((image) => (
        <SwiperSlide
          key={image.id}
          className="relative max-h-screen aspect-video"
        >
          <Image
            alt={image.alt}
            src={image.src}
            fill
            className={cn("object-cover brightness-50", image.className)}
          />
        </SwiperSlide>
      ))}

      {children}
    </Swiper>
  );
}

function SwiperContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-9999 w-full h-full",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { SwiperCarousel, SwiperContent };
