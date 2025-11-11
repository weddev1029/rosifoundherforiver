import Image from "next/image";
import CoupleCard from "@/components/couple-card";
import {
  LocationCard,
  LocationContent,
  LocationImage,
} from "@/components/location-card";
import { Button } from "@/components/ui/button";
import { Hero, WeddingTimeline } from "@/features";

export default function Invitation() {
  return (
    <div className="min-h-screen font-playfair-display">
      <main>
        <Hero />
      </main>

      <section className="flex items-center justify-center gap-5 bg-[url('/hero/hero-0.jpg')] px-4 py-22 lg:px-8 lg:py-24 bg-cover bg-center lg:gap-28 bg-fixed">
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
            <div className="uppercase text-white md:text-xl lg:text-2xl">
              <h3 className="md:text-2xl lg:3xl">
                Saint Anthony Abbot Parish Church
              </h3>
              <p>12:30 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <div>
              <Button className="bg-custom-primary-4 rounded-none text-black hover:bg-white text-sm lg:text-2xl lg:p-6">
                Get Directions
              </Button>
            </div>
          </LocationContent>
        </LocationCard>

        <LocationCard>
          <LocationContent className="bg-custom-secondary-2">
            <div className="uppercase text-white md:text-xl lg:text-2xl">
              <h3 className="md:text-2xl lg:3xl">
                E Jose Events Place & Resort
              </h3>
              <p>3:00 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <div>
              <Button className="bg-custom-primary-4 rounded-none text-black hover:bg-white text-sm lg:text-2xl lg:p-6">
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

      <section className="min-h-screen"></section>
    </div>
  );
}
