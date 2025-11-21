"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";
import { loveStory } from "@/siteConfig";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export function LoveStory() {
  const containerRef = useRef(null);
  const storyRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !storyRefs.current.includes(el)) {
      storyRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      // biome-ignore lint/suspicious/useIterableCallbackReturn: <No return here>
      storyRefs.current.map((story) => {
        const titleEl = story.querySelector(".title") as HTMLElement;
        const storyEl = story.querySelector(".story") as HTMLElement;

        if (!titleEl || !storyEl) return;

        // Create timeline for each section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: story,
            start: "top 60%",
          },
        });

        // Split into characters
        SplitText.create(titleEl, {
          type: "words, chars",
          autoSplit: true,
          onSplit: (self) => {
            return tl.from(self.chars, {
              autoAlpha: 0,
              duration: 0.05,
              stagger: {
                each: 0.04, // pause between each character
                from: "start",
              },
              ease: "none",
            });
          },
        });

        SplitText.create(storyEl, {
          type: "words, chars",
          autoSplit: true,
          onSplit: (self) => {
            return tl.from(
              self.chars,
              {
                autoAlpha: 0,
                duration: 0.04,
                stagger: {
                  each: 0.03,
                  from: "start",
                  amount: 0.0,
                  // OPTIONAL: jitter for natural typing
                  ease: "none",
                },
                ease: "none",
              },
              "+=0.4", // Delay in which the story should start animating after title
            );
          },
        });
      });
    },
    { scope: containerRef, dependencies: [storyRefs] },
  );

  return (
    <section
      ref={containerRef}
      className="relative space-y-6 lg:flex justify-center items-center gap-8 lg:py-16"
    >
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

          <div className="love-story space-y-6">
            {loveStory.map((story) => (
              <div
                key={story.id}
                ref={addToRefs}
                className="space-y-3 text-wrap"
              >
                <h5 className="font-semibold tracking-wide text-xl title">
                  {story.title}
                </h5>
                <p className="leading-relaxed story">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
