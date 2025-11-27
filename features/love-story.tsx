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
      // Create timeline for each section
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".love-story",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      storyRefs.current.forEach((story, index) => {
        const titleEl = story.querySelector(".title") as HTMLElement;
        const storyEl = story.querySelector(".story") as HTMLElement;

        if (!titleEl || !storyEl) return;

        // Use SplitType to split the text into individual characters
        const titleSplit = SplitText.create(titleEl, { type: "words, chars" });
        const storySplit = SplitText.create(storyEl, { type: "words, chars" });

        // Initially hide all characters
        gsap.set([titleSplit.chars, storySplit.chars], { autoAlpha: 0 });

        // Create a separate timeline for this specific story item
        const storyTl = gsap.timeline();

        // **A. Animate the title (typing effect)**
        storyTl.to(titleSplit.chars, {
          autoAlpha: 1, // Make characters visible
          duration: 0.5, // Speed of typing
          stagger: 0.02, // Delay between each character
        });

        // **B. Animate the story (typing effect)**
        storyTl.to(storySplit.chars, {
          autoAlpha: 1,
          duration: 0.02,
          stagger: 0.015,
        });

        // Add the individual story's timeline to the master timeline
        tl.add(storyTl, `+=${index > 0 ? 0.5 : 0}`); // Add a slight delay (0.5s) between stories, but no delay before the first one
      });
    },
    { scope: containerRef, dependencies: [] },
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
            src="/lovestory/ls1.webp"
            alt="ls-1"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-full aspect-square lg:w-40 xl:w-62">
          <Image
            src="/lovestory/ls2.webp"
            alt="ls-2"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="col-span-2 relative w-full aspect-video">
          <Image
            src="/lovestory/ls3.webp"
            alt="ls-3"
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
                <p className="leading-relaxed story text-justify">
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
