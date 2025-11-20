"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";

/**
 *
 * @param url Image URL
 * @param name Name of the groom/bride
 * @param description The card's description
 * @param isGroom Boolean toggle between groom and bride content
 * @param children Content when image is hovered
 * @description Flips the whole card
 * @returns A card
 */
export default function CoupleCard({
  url,
  name,
  description,
  isGroom = true,
  children,
}: {
  url: string;
  name: string;
  description: string;
  isGroom?: boolean;
  children: React.ReactNode;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <I don't want to use a button for this card component, so it's just reasonable to use a div.>
    // biome-ignore lint/a11y/useKeyWithClickEvents: <I need to perform an onclick event on this div>
    <div
      className="cursor-pointer perspective-[1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative transition-transform duration-1000 transform-3d ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="relative backface-hidden">
          <CardContent>
            <div className="relative aspect-square group card overflow-hidden">
              <Image
                src={url}
                alt={name}
                fill
                className="object-cover box group-hover:brightness-25 transition duration-250"
              />
              <div className="absolute inset-0 outline-1 -outline-offset-6 xl:-outline-offset-8 outline-custom-primary-4"></div>

              <div className="hidden group-hover:block absolute inset-0 p-4 xl:p-8 text-white">
                <CardDescription isGroom={isGroom}>{children}</CardDescription>
              </div>
            </div>

            <CardFooter name={name} description={description} />
          </CardContent>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 transform-[rotateY(180deg)] backface-hidden bg-white">
          <CardContent>
            <div className="relative aspect-square overflow-hidden">
              <div className="absolute inset-0 outline-1 -outline-offset-6 xl:-outline-offset-8 outline-custom-primary-4"></div>

              <div className="absolute inset-0 p-4 xl:p-8">
                <CardDescription isGroom={isGroom}>{children}</CardDescription>
              </div>
            </div>

            <CardFooter name={name} description={description} />
          </CardContent>
        </div>
      </div>
    </div>
  );
}

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white w-42 xs:w-[194.95px] sm:w-56 md:w-66 lg:w-96 xl:w-[492px] p-1 md:p-2 lg:p-3 space-y-3">
      {children}
    </div>
  );
};

const CardDescription = ({
  isGroom,
  children,
}: {
  isGroom: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex flex-col justify-end gap-2 xl:gap-4">
      <h6 className="text-sm sm:text-base lg:text-xl xl:text-2xl">
        ABOUT THE {isGroom ? "GROOM 🤵🏽" : "BRIDE 👰🏼"}
      </h6>

      <div className="h-full scrollbar-thin max-h-20 sm:max-h-max overflow-y-auto text-xs lg:text-base xl:text-lg sm:space-y-2">
        {children}
      </div>
    </div>
  );
};

const CardFooter = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="uppercase text-center text-black text-sm lg:space-y-2 py-2 lg:py-6">
      <p className="font-semibold lg:text-3xl">{name}</p>
      <span className="lg:text-2xl">{description}</span>
    </div>
  );
};
