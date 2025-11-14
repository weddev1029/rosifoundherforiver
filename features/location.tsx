import Image from "next/image";
import {
  LocationCard,
  LocationContent,
  LocationImage,
} from "@/components/location-card";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
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
  );
}
