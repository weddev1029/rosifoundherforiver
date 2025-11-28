"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import ImageGallery from "@/components/image-gallery";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);

export function LoveInGallery() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".couple-image", {
        scrollTrigger: {
          trigger: container.current,
        },
        keyframes: [
          { scale: 0.95, duration: 1.5, ease: "power1.inOut" },
          { scale: 1.0, duration: 1.5, ease: "power1.inOut" },
        ],
        repeat: -1,
        stagger: {
          each: 0.3,
          from: "center",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="px-8 py-20 lg:px-0 lg:flex bg-custom-secondary-3 justify-center items-center lg:py-10 xl:py-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 space-y-1 sm:space-y-4 flex flex-col items-center justify-center">
          <div className="relative aspect-video min-w-6 xs:min-w-8 sm:w-full max-w-[78.75px]">
            <Image
              src={"/svg/butterfly-ornament.svg"}
              alt="butterfly-ornament"
              fill
              className="object-contain"
            />
          </div>

          <h4 className="text-background text-sm sm:text-4xl text-center px-2 leading-2 sm:px-6 sm:leading-8">
            The{" "}
            <span className="font-great-vibes text-xl xs:text-2xl sm:text-5xl">
              Love
            </span>{" "}
            in Gallery
          </h4>
        </div>

        {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <I have to>
          <ImageGallery key={index} />
        ))}
      </div>
    </section>
  );
}
