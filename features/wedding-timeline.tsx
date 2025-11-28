import { Heart } from "lucide-react";
import Image from "next/image";
import {
  SponsorContent,
  SponsorTitle,
  SponsorWrapper,
} from "@/components/sponsors";
import type { TTimeline } from "@/config/types";
import { weddingTimeline } from "@/siteConfig";

export function WeddingTimeline() {
  return (
    <section className="px-4 xl:pb-20">
      <h2 className="text-center font-abhaya-libre text-3xl xl:text-4xl py-4 xl:py-12 text-custom-secondary-2 uppercase">
        Wedding Timeline
      </h2>

      <div className="flex flex-col gap-16 xl:flex-row xl:justify-center xl:gap-0">
        <div className="relative order-1 xl:order-0 rounded-2xl border shadow-xl px-5 py-8 text-sm md:text-base m-4 xl:m-0 xl:mr-4 xl:max-w-2xl grid gap-y-16 lg:grid-cols-2 lg:gap-y-12">
          <SponsorWrapper className="lg:order-last">
            <SponsorTitle>Parents</SponsorTitle>

            <SponsorContent>
              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Parents of the groom</p>
                <p>
                  Mr. Amado Castro <span className="font-bold">&amp;</span> Mrs.
                  Eloisa Castro
                </p>
              </div>
              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Parents of the bride</p>
                <p>
                  Mr. Enrico Diaz <span className="font-bold">&amp;</span> Mrs.
                  Rovelyn Formentera
                </p>
              </div>
            </SponsorContent>
          </SponsorWrapper>

          <SponsorWrapper>
            <SponsorTitle>Principal Sponsors</SponsorTitle>

            <SponsorContent>
              <p>
                Marieta Rosauro <span className="font-bold">&amp;</span> Nick
                Pabustan
              </p>
              <p>
                Endilyn Espé <span className="font-bold">&amp;</span> Julio
                Quilantang
              </p>
              <p>
                Erma Galvez <span className="font-bold">&amp;</span> Edgardo Paz
              </p>
              <p>
                Shirley Dela Cruz <span className="font-bold">&amp;</span>{" "}
                Danilo Villafuerte
              </p>
              <p>
                Rubena Gutierrez <span className="font-bold">&amp;</span>{" "}
                Roberto Rosauro
              </p>
              <p>
                Francisca Rosauro <span className="font-bold">&amp;</span>{" "}
                Richard Rosauro
              </p>
              <p>
                Mildred Cueva <span className="font-bold">&amp;</span> Leo Paz
              </p>
              <p>
                Ivy Balista <span className="font-bold">&amp;</span> Jose Rex
                Credo
              </p>
              <p>
                Irish Garcia <span className="font-bold">&amp;</span> Danilo
                Mesina
              </p>
              <p>
                Margie Peregrino <span className="font-bold">&amp;</span> Edgar
                Magaling
              </p>
              <p>
                Olivia Quillan <span className="font-bold">&amp;</span> Noel
                Castro
              </p>
              <p>
                Lucita Santos <span className="font-bold">&amp;</span> Mario
                Villeza Jr.
              </p>
              <p>
                Emily Deramus <span className="font-bold">&amp;</span> Ricardo
                Bacay
              </p>
            </SponsorContent>
          </SponsorWrapper>

          <SponsorWrapper>
            <SponsorTitle>Secondary Sponsors</SponsorTitle>

            <SponsorContent>
              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Maid of Honor</p>
                <p>Genevieve Argosino</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Best Man</p>
                <p>Jarlem Red de Peralta</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">To Clothe Us as One</p>
                <p>Prixie Ivane Castro & Vien Legarde</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">To Light Our Path</p>
                <p>Roselyn Del Rosario & Carlo Magaling</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">To Bind Us Together</p>
                <p>Patricia Kim Rosauro & Adrian Dela Vega</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Little Bride</p>
                <p>Priona Izzy Castro</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Flower Girls</p>
                <p>Elizabeth Diaz & Princess Alyanna Ipoi</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Coin Bearer</p>
                <p>Ranz-AJ Baynosa</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Ring Bearer</p>
                <p>Sean Marcos Rosauro</p>
              </div>

              <div className="space-y-6 xl:space-y-2">
                <p className="font-bold">Bible Bearer</p>
                <p>Ross Gil Luciano</p>
              </div>
            </SponsorContent>
          </SponsorWrapper>

          <SponsorWrapper className="xl:row-span-2">
            <SponsorTitle>Bridesmaids And Groomsmen</SponsorTitle>

            <SponsorContent>
              <p>
                Edwarda Diaz <span className="font-bold">&amp;</span> Jaime
                Rosauro
              </p>
              <p>
                Erica Rosauro <span className="font-bold">&amp;</span> Wally
                Ramos
              </p>
              <p>
                Rinabell Diaz <span className="font-bold">&amp;</span> Jayson
                Santos
              </p>
              <p>
                Sheila Villafuerte <span className="font-bold">&amp;</span>{" "}
                Gervin Mark Gayoso
              </p>
              <p>
                Marjorie Alino <span className="font-bold">&amp;</span> Mark
                Darren Reyes
              </p>
              <p>Harry Villanueva</p>
              <p>Joseph John Anthony Paz</p>
              <p>Jasper Gan</p>
            </SponsorContent>
          </SponsorWrapper>

          <div className="absolute -top-8 -left-8 xl:-top-18 xl:-left-18 -z-99">
            <div className="relative w-26 h-26 xl:w-52 xl:h-52">
              <Image
                alt="border-ornaments"
                src="/svg/border-ornament.svg"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <ol className="relative border-s-3 border-custom-secondary-2 ml-4 xl:w-md">
          <li>
            <span className="absolute bg-custom-secondary-3 rounded-full w-3 h-3 -start-2 -top-1"></span>
          </li>
          {weddingTimeline.map((item) => (
            <li
              key={item.id}
              className="relative ml-10 mr-4 rounded-2xl mb-6 border shadow-xl p-6 text-sm md:text-base"
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-13.5 ring-4 ring-custom-secondary-3">
                <Heart size={14} />
              </span>

              <span className="absolute -left-3 rotate-45 border-l border-b bg-white w-6 h-6"></span>

              <div className="space-y-3">
                <h3 className="font-semibold uppercase">{item.title}</h3>

                {item.timeline.map((timeline: TTimeline) => (
                  <div key={timeline.id} className="xl:text-sm">
                    {timeline.time && timeline.time !== "NOTE" ? (
                      <div key={timeline.id} className="flex gap-1">
                        <p className="min-w-16 font-bold">{timeline.time}</p>
                        <div>
                          <p>{timeline.description}</p>
                          {timeline.subDescription && (
                            <p className="xl:text-xs">
                              {timeline.subDescription}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : timeline.time === "NOTE" ? (
                      <div key={timeline.id}>
                        <p className="min-w-16 font-bold">{timeline.time}</p>
                        <p>{timeline.description}</p>
                      </div>
                    ) : (
                      <p>{timeline.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
          <li>
            <span className="absolute bg-custom-secondary-3 rounded-full w-3 h-3 -start-2 -bottom-1"></span>
          </li>

          <div className="absolute -bottom-2 -right-4 xl:-bottom-12 xl:-right-12 -z-99">
            <div className="relative w-26 h-26 xl:w-52 xl:h-52 rotate-180">
              <Image
                alt="border-ornaments"
                src="/svg/border-ornament.svg"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </ol>
      </div>
    </section>
  );
}
