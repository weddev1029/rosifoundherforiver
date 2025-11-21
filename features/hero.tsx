"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import RemainingDays from "@/components/remaining-days";
import { heroImages, weddingDate } from "@/siteConfig";

export function Hero() {
  const difference = new Date(weddingDate).getTime() - Date.now();

  return (
    <main>
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
        className="h-dvh"
      >
        {heroImages.map((image) => (
          <SwiperSlide
            key={image.id}
            className="relative max-h-screen aspect-video"
          >
            <Image
              alt={image.alt}
              src={image.src}
              fill
              className="object-cover brightness-50"
            />
          </SwiperSlide>
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-9999 text-center w-full">
          <div className="grid gap-4 xl:gap-8 uppercase text-lg lg:text-3xl text-white">
            <span className="tracking-wider">The Wedding of</span>
            <h1 className="font-great-vibes capitalize text-6xl lg:text-8xl flex justify-center gap-6 xl:gap-10">
              <p>John</p>
              <p>&</p>
              <p>Jane</p>
            </h1>
            <span className="tracking-wider">
              Saturday, 10 Jan 2026, 12:30 PM
            </span>
          </div>
        </div>

        {difference > 0 && <RemainingDays />}
      </Swiper>
    </main>
  );
}
