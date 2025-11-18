import Image from "next/image";
import Link from "next/link";
import {
  LocationCard,
  LocationContent,
  LocationImage,
} from "@/components/location-card";
import { Button } from "@/components/ui/button";
import { weddingChurch, weddingReception } from "@/siteConfig";

export function Location() {
  return (
    <section className="p-4 md:py-4 flex justify-center">
      <div className="space-y-2 lg:space-y-4 xl:space-y-6">
        <LocationCard>
          <LocationImage>
            <Image
              src="/others/church.webp"
              alt={weddingChurch}
              fill
              className="object-cover object-center"
            />
          </LocationImage>

          <LocationContent>
            <div className="uppercase text-white text-sm md:text-xl lg:text-2xl xl:space-y-1">
              <h3 className="xl:text-3xl">{weddingChurch}</h3>
              <p>12:30 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <div>
              <Button
                asChild
                className="bg-custom-primary-4 font-normal text-custom-secondary-3 rounded-none hover:bg-white text-sm lg:text-2xl lg:p-6"
              >
                <Link
                  href="https://maps.app.goo.gl/pPcPyqfdj4j6bgSi7"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  Get Directions
                </Link>
              </Button>
            </div>
          </LocationContent>
        </LocationCard>

        <LocationCard>
          <LocationContent className="bg-custom-secondary-2">
            <div className="uppercase text-white text-sm md:text-xl lg:text-2xl xl:space-y-1">
              <h3 className="xl:text-3xl">{weddingReception}</h3>
              <p>3:00 PM</p>
              <p>Jan 10, 2026</p>
            </div>

            <div>
              <Button
                asChild
                className="bg-custom-primary-4 font-normal text-custom-secondary-3 rounded-none hover:bg-white text-sm lg:text-2xl lg:p-6"
              >
                <Link
                  href="https://maps.app.goo.gl/6SdzvVDTvGwSbgeM6"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  Get Directions
                </Link>
              </Button>
            </div>
          </LocationContent>

          <LocationImage>
            <Image
              src="/others/reception.webp"
              alt={weddingReception}
              fill
              className="object-cover object-center"
            />
          </LocationImage>
        </LocationCard>
      </div>
    </section>
  );
}
