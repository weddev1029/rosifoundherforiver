"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import dynamic from "next/dynamic";

// import Countdown from "@/components/countdown";
const CoundownTimer = dynamic(() => import("./countdown"), { ssr: false });

import { Suspense } from "react";
import { CalendarIcon } from "@/lib/icons";
import { weddingDate } from "@/siteConfig";
import { Button } from "./ui/button";

export default function Hero() {
  const difference = new Date(weddingDate).getTime() - Date.now();

  return (
    <Swiper
      slidesPerView={1}
      effect={"fade"}
      loop={true}
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 1000 * 10,
        disableOnInteraction: false,
      }}
      className="h-dvh"
    >
      <SwiperSlide className="relative max-h-screen aspect-video">
        <Image
          alt="wedding-1"
          src="/hero/hero-1.jpg"
          fill
          className="object-cover brightness-50"
        />
      </SwiperSlide>
      <SwiperSlide className="relative max-h-screen aspect-video">
        <Image
          alt="wedding-2"
          src="/hero/hero-2.jpg"
          fill
          className="object-cover brightness-50"
        />
      </SwiperSlide>
      <SwiperSlide className="relative max-h-screen aspect-video">
        <Image
          alt="wedding-3"
          src="/hero/hero-3.jpg"
          fill
          className="object-cover brightness-50"
        />
      </SwiperSlide>
      <SwiperSlide className="relative max-h-screen aspect-video">
        <Image
          alt="wedding-4"
          src="/hero/hero-4.jpg"
          fill
          className="object-cover brightness-50"
        />
      </SwiperSlide>
      <SwiperSlide className="relative max-h-screen aspect-video">
        <Image
          alt="wedding-5"
          src="/hero/hero-5.jpg"
          fill
          className="object-cover brightness-50"
        />
      </SwiperSlide>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-9999 text-center w-full">
        <div className="grid gap-4 uppercase text-lg lg:text-3xl text-white">
          <span>The Wedding of</span>
          <h1 className="font-great-vibes capitalize text-6xl lg:text-8xl">
            John & Jane
          </h1>
          <span>Saturday, 10 Jan 2026, 12:30 PM</span>
        </div>
      </div>

      {difference > 0 && (
        <div className="absolute bottom-0 z-9999 w-full">
          <div className="w-full flex flex-col lg:flex-row text-white">
            <div className="bg-custom-secondary lg:bg-custom-secondary/80 flex items-center justify-center py-8 lg:px-12 gap-6">
              <h4 className="uppercase text-end">
                <span className="text-sm">Missing days to</span>
                <span className="text-3xl block">Wedding</span>
              </h4>
              <Button
                variant={"outline"}
                className="bg-transparent rounded hover:bg-custom-primary hover:text-secondary font-inter"
              >
                <CalendarIcon />
                Save the Date
              </Button>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <CoundownTimer />
            </Suspense>
          </div>
        </div>
      )}
    </Swiper>
  );
}
