import RemainingDays from "@/components/remaining-days";
import { SwiperCarousel, SwiperContent } from "@/components/swiper-carousel";
import { heroImages, weddingDate } from "@/siteConfig";

export function Hero() {
  const difference = new Date(weddingDate).getTime() - Date.now();

  return (
    <main>
      <SwiperCarousel images={heroImages}>
        <SwiperContent>
          <div className="grid place-content-center h-full backdrop-brightness-60 gap-4 xl:gap-8 uppercase text-lg lg:text-3xl text-white text-center">
            <span className="tracking-wider">The Wedding of</span>
            <h1 className="font-great-vibes capitalize text-5xl xs:text-6xl lg:text-8xl flex justify-center gap-4 xs:gap-6 xl:gap-10">
              <p>Prince</p>
              <p>&</p>
              <p>Rosilyn</p>
            </h1>
            <span className="tracking-wider">
              Saturday, 10 Jan 2026, 12:30 PM
            </span>
          </div>
        </SwiperContent>

        {difference > 0 && <RemainingDays />}
      </SwiperCarousel>
    </main>
  );
}
