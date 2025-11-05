import { Heart } from "lucide-react";
import Image from "next/image";
import { weddingTimeline } from "@/siteConfig";

export default function WeddingTimeline() {
  return (
    <section className="p-4 space-y-6">
      <h2 className="text-center font-abhaya-libre text-3xl">
        Wedding Timeline
      </h2>

      <ol className="relative border-s-3 border-custom-secondary-2 ml-4 py-6">
        <li>
          <span className="absolute bg-custom-secondary-3 rounded-full w-3 h-3 -start-2 -top-1"></span>
        </li>
        {weddingTimeline.map((item) => (
          <li
            key={item.id}
            className="relative mx-10 rounded-2xl mb-6 border shadow-xl p-6"
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
                    <div key={timeline.id} className="flex gap-2">
                      <p className="min-w-18 font-bold">{timeline.time}</p>
                      <p>{timeline.description}</p>
                    </div>
                  ) : timeline.time === "NOTE" ? (
                    <div key={timeline.id}>
                      <p className="min-w-18 font-bold">{timeline.time}</p>
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

        <div className="absolute bottom-0 right-0">
          <div className="relative w-26 h-26 rotate-180">
            <Image
              alt="border-ornaments"
              src="/svg/border-ornament.svg"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </ol>
    </section>
  );
}
