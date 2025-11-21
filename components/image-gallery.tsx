"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { shuffle } from "@/lib/utils";
import { loveInGallery } from "@/siteConfig";

export default function ImageGallery() {
  const [images, setImages] = useState(loveInGallery);

  const MAX = 5000;
  const MIN = 4000;

  useEffect(() => {
    setImages(shuffle([...loveInGallery]));
  }, []);

  return (
    <div className="couple-image">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: Math.floor(Math.random() * (MAX - MIN + 1)) + MIN,
            playOnInit: true,
            stopOnInteraction: false,
          }),
          Fade(),
        ]}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative w-full aspect-video">
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
    </div>
  );
}
