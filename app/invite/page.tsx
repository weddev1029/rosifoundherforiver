import Image from "next/image";

import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Invitation() {
  return (
    <div className="min-h-screen font-playfair-display">
      <Hero />

      <section className="flex items-center justify-center gap-5 bg-[url('/hero/hero-0.jpg')] px-4 py-22 lg:py-24 bg-cover bg-center lg:gap-28">
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

      <section className="p-4 space-y-2">
        <div className="flex">
          <div className="relative w-56">
            <Image
              src="/others/church.webp"
              alt="Saint Anthony Abbot Parish Church"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="bg-custom-primary p-2 space-y-2 text-sm flex-1">
            <div className="uppercase text-white">
              <h3>Saint Anthony Abbot Parish Church</h3>
              <p>12:30 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <Button className="bg-custom-primary-4 rounded-none text-black hover:bg-white ">
              Get Directions
            </Button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-custom-secondary-2 p-2 space-y-2 text-sm flex-1">
            <div className="uppercase text-white">
              <h3>E Jose Events Place & Resort</h3>
              <p>3:00 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <Button className="bg-custom-primary-4 rounded-none text-black hover:bg-white ">
              Get Directions
            </Button>
          </div>

          <div className="relative w-56">
            <Image
              src="/others/reception.webp"
              alt="E Jose Events Place & Resort"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
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
