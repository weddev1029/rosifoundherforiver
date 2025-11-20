"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { shuffle } from "@/lib/utils";
import { heroImages } from "@/siteConfig";

export default function ImageGallery({ delay = 3000 }: { delay?: number }) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: delay,
          playOnInit: true,
          stopOnInteraction: false,
        }),
        Fade(),
      ]}
    >
      <CarouselContent>
        {shuffle(heroImages).map((image) => (
          <CarouselItem key={image.id}>
            <div className="relative w-full aspect-video animate-breathing">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
