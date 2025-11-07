import Image from "next/image";

import Hero from "@/components/hero";
import {
  LocationCard,
  LocationContent,
  LocationImage,
} from "@/components/location-card";
import { Button } from "@/components/ui/button";
import WeddingTimeline from "@/components/wedding-timeline";

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

      <section className="p-4 lg:px-40 2xl:px-100 space-y-2 lg:space-y-4">
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
    </div>
  );
}

const CoupleCard = ({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="bg-white w-full max-w-xs lg:max-w-lg p-1 md:p-2 lg:p-3 space-y-3">
      <div className="relative aspect-square">
        <Image src={url} alt={name} fill className="object-cover box" />

        <div className="absolute inset-0 outline-1 -outline-offset-6 outline-custom-primary-4"></div>
      </div>

      <div className="uppercase text-center text-black text-sm lg:space-y-2 py-2 lg:py-6">
        <p className="font-semibold md:text-2xl lg:text-3xl">{name}</p>
        <span className="md:text-xl lg:text-2xl">{description}</span>
      </div>
    </div>
  );
};
