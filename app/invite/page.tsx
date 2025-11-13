import Image from "next/image";
import CoupleCard from "@/components/couple-card";
import {
  LocationCard,
  LocationContent,
  LocationImage,
} from "@/components/location-card";
import { Button } from "@/components/ui/button";
import { Hero, WeddingTimeline } from "@/features";
import { heroImages } from "@/siteConfig";

export default function Invitation() {
  return (
    <div className="min-h-screen font-playfair-display">
      <main>
        <Hero />
      </main>

      <section className="flex items-center justify-center gap-5 bg-[url('/hero/hero-0.jpg')] px-4 py-22 lg:px-8 lg:py-24 bg-cover bg-center bg-fixed lg:gap-28">
        <CoupleCard
          url="/couple/groom.jpg"
          name="John Doe"
          description="The Groom"
        />

        <CoupleCard
          url="/couple/bride.jpg"
          name="Jane Smith"
          description="The Bride"
        />
      </section>

      <section className="p-4 xl:py-4 flex flex-col gap-2 lg:gap-4 xl:gap-6 justify-center items-center">
        <LocationCard>
          <LocationImage>
            <Image
              src="/others/church.webp"
              alt="Saint Anthony Abbot Parish Church"
              fill
              className="object-cover object-center"
            />
          </LocationImage>

          <LocationContent>
            <div className="uppercase text-white text-sm md:text-xl lg:text-2xl xl:space-y-1">
              <h3 className="xl:text-3xl">Saint Anthony Abbot Parish Church</h3>
              <p>12:30 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <div>
              <Button className="bg-custom-primary-4 font-normal text-custom-secondary-3 rounded-none hover:bg-white text-sm lg:text-2xl lg:p-6">
                Get Directions
              </Button>
            </div>
          </LocationContent>
        </LocationCard>

        <LocationCard>
          <LocationContent className="bg-custom-secondary-2">
            <div className="uppercase text-white text-sm md:text-xl lg:text-2xl xl:space-y-1">
              <h3 className="xl:text-3xl">E Jose Events Place & Resort</h3>
              <p>3:00 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <div>
              <Button className="bg-custom-primary-4 font-normal text-custom-secondary-3 rounded-none hover:bg-white text-sm lg:text-2xl lg:p-6">
                Get Directions
              </Button>
            </div>
          </LocationContent>

          <LocationImage>
            <Image
              src="/others/reception.webp"
              alt="E Jose Events Place & Resort"
              fill
              className="object-cover object-center"
            />
          </LocationImage>
        </LocationCard>
      </section>

      <WeddingTimeline />

      <section className="grid grid-cols-2 md:grid-cols-3 bg-custom-secondary-3 py-10">
        <div className="col-span-2 space-y-3 flex flex-col items-center md:col-span-1 mb-6 md:mb-0 md:justify-center">
          <div className="relative aspect-video w-[50px] xl:w-[78.75px]">
            <Image
              src={"/svg/butterfly-ornament.svg"}
              alt="butterfly-ornament"
              fill
              className="object-contain"
            />
          </div>

          <h4 className="text-2xl text-background xl:text-4xl">
            The{" "}
            <span className="font-great-vibes text-3xl xl:text-5xl">Love</span>{" "}
            in Gallery
          </h4>
        </div>

        {heroImages.map((image) => (
          <div
            key={image.id}
            className="relative w-[188.82px] h-[125.4px] xl:w-[365.25px] xl:h-[242.56px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
