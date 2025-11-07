import { Heart } from "lucide-react";
import Image from "next/image";
import { weddingTimeline } from "@/siteConfig";

export function WeddingTimeline() {
  return (
    <section className="p-4 space-y-6">
      <h2 className="text-center font-abhaya-libre text-3xl xl:text-5xl">
        Wedding Timeline
      </h2>

      <div className="flex flex-col gap-16 xl:flex-row xl:justify-center xl:gap-0">
        <div className="relative order-1 xl:order-0 rounded-2xl border shadow-xl px-5 py-8 text-sm md:text-base mx-4 xl:max-w-2xl grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 lg:order-last">
            <h4 className="font-great-vibes tracking-wide text-4xl lg:text-2xl text-center">
              Parents
            </h4>
            <div className="text-center text-lg lg:text-base tracking-wide space-y-6">
              <p className="font-bold">Parents of the groom</p>
              <p>Mr. Amado Castro &amp; Mrs. Eloisa Castro</p>
              <p className="font-bold">Parents of the bride</p>
              <p>Mr. Enrico Diaz &amp; Mrs. Rovelyn Formentera</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-great-vibes tracking-wide text-4xl lg:text-2xl text-center">
              Principal Sponsors
            </h4>
            <div className="text-center text-lg lg:text-base tracking-wide space-y-6">
              <p>Marieta Rosauro &amp; Nick Pabustan</p>
              <p>Endilyn Espé &amp; Julio Quilantang</p>
              <p>Erma Galvez &amp; Edgardo Paz</p>
              <p>Shirley Dela Cruz &amp; Danilo Villafuerte</p>
              <p>Rubena Gutierrez &amp; Roberto Rosauro</p>
              <p>Francisca Rosauro &amp; Richard Rosauro</p>
              <p>Mildred Cueva &amp; Leo Paz</p>
              <p>Ivy Balista &amp; Jose Rex Credo</p>
              <p>Irish Garcia &amp; Danilo Mesina</p>
              <p>Margie Peregrino &amp; Edgar Magaling</p>
              <p>Olivia Quillan &amp; Noel Castro</p>
              <p>Lucita Santos &amp; Mario Villeza Jr.</p>
              <p>Emily Deramus &amp; Ricardo Bacay</p>
            </div>
          </div>
          <div className="space-y-4 lg:row-span-2">
            <h4 className="font-great-vibes tracking-wide text-4xl lg:text-2xl text-center">
              Secondary Sponsors
            </h4>
            <div className="text-center text-lg lg:text-base tracking-wide space-y-6">
              <p className="font-bold">Maid of Honor</p>
              <p>Genevieve Argosino</p>
              <p className="font-bold">Best Man</p>
              <p>Jarlem Red de Peralta</p>
              <p className="font-bold">To Clothe Us as One</p>
              <p>Prixie Ivane Castro & Vien Legarde</p>
              <p className="font-bold">To Light Our Path</p>
              <p>Roselyn Del Rosario & Carlo Magaling</p>
              <p className="font-bold">To Bind Us Together</p>
              <p>Patricia Kim Rosauro & Adrian Dela Vega</p>
              <p className="font-bold">Little Bride</p>
              <p>Priona Izzy Castro</p>
              <p className="font-bold">Flower Girls</p>
              <p>Elizabeth Diaz & Princess Alyanna Ipoi</p>
              <p className="font-bold">Coin Bearer</p>
              <p>Ranz-AJ Baynosa</p>
              <p className="font-bold">Ring Bearer</p>
              <p>Sean Marcos Rosauro</p>
              <p className="font-bold">Bible Bearer</p>
              <p>Ross Gil Luciano</p>
            </div>
          </div>
          <div className="space-y-4 lg:row-span-2">
            <h4 className="font-great-vibes tracking-wide text-4xl lg:text-2xl text-center">
              Bridesmaids And Groomsmen
            </h4>
            <div className="text-center text-lg lg:text-base tracking-wide space-y-6">
              <p>Edwarda Diaz &amp; Jaime Rosauro</p>
              <p>Erica Rosauro &amp; Wally Ramos</p>
              <p>Rinabell Diaz &amp; Jayson Santos</p>
              <p>Sheila Villafuerte &amp; Gervin Mark Gayoso</p>
              <p>Marjorie Alino &amp; Mark Darren Reyes</p>
              <p>Harry Villanueva</p>
              <p>Joseph John Anthony Paz</p>
              <p>Jasper Gan</p>
            </div>
          </div>

          <div className="absolute -top-8 -left-8 xl:-top-18 xl:-left-18">
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

                {item.timeline.map((timeline) => (
                  <div key={timeline.id}>
                    {timeline.time && timeline.time !== "NOTE" ? (
                      <div key={timeline.id} className="flex gap-1">
                        <p className="min-w-16 font-bold">{timeline.time}</p>
                        <p>{timeline.description}</p>
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

          <div className="absolute -bottom-2 -right-4 xl:-bottom-12 xl:-right-12">
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
