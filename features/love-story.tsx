import Image from "next/image";
import { loveStory } from "@/siteConfig";

export function LoveStory() {
  return (
    <section className="relative space-y-6 lg:flex justify-center items-center gap-8 lg:py-16">
      {/* Side Ferns at the Background */}
      <div className="lg:hidden absolute -top-10 left-0 w-[85.44px] h-[292.78px]">
        <Image
          src="/svg/bg-fern-ornament.svg"
          alt="fern"
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="lg:hidden absolute -top-6 right-0 w-[85.44px] h-[292.78px] flip-horizontal">
        <Image
          src="/svg/bg-fern-ornament.svg"
          alt="fern"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="hidden lg:inline absolute inset-0 bg-[url('/svg/background-ornament.svg')] bg-no-repeat bg-center bg-size-[auto_230px] opacity-20 pointer-events-none"></div>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 z-99 p-8 pb-0 lg:p-0">
        <div className="relative w-full aspect-square lg:w-40 xl:w-62">
          <Image
            src="/hero/hero-0.jpg"
            alt="hero-0"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-full aspect-square lg:w-40 xl:w-62">
          <Image
            src="/hero/hero-1.jpg"
            alt="hero-1"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="col-span-2 relative w-full aspect-video">
          <Image
            src="/hero/hero-2.jpg"
            alt="hero-2"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Love Story Section */}
      <div className="relative space-y-6 p-8 pt-0 lg:p-0 lg:max-w-[470px]">
        <div className="lg:hidden absolute inset-0 bg-[url('/svg/background-ornament.svg')] bg-no-repeat bg-center bg-size-[auto_200px] opacity-30 pointer-events-none"></div>

        <div className="relative space-y-6">
          <p className="text-center font-great-vibes text-4xl lg:text-start">
            Love Story
          </p>

          <div className="space-y-4">
            <p className="uppercase tracking-wide text-xl">
              The Journey Begins
            </p>
            <div className="border-b border-custom-secondary-3 w-20"></div>
          </div>

          <div className="space-y-6">
            {loveStory.map((story) => (
              <div key={story.id} className="space-y-3">
                <h5 className="font-semibold tracking-wide text-xl">
                  {story.title}
                </h5>
                <p className="leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
