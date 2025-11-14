import Image from "next/image";
import ColorCode from "@/components/color-code";

export function DressCode() {
  return (
    <section className="bg-custom-secondary-3 h-[300px] xl:h-[540px] grid place-content-center text-white gap-10">
      <div className="flex justify-center gap-6">
        <div className="relative w-9 xl:w-20">
          <Image
            src="/svg/butterfly-ornament.svg"
            alt="butterfly-ornament"
            fill
            className="object-contain object-center"
          />
        </div>

        <h3 className="text-2xl xl:text-5xl">
          <span className="font-great-vibes text-3xl xl:text-6xl">Dress</span>{" "}
          Code
        </h3>

        <div className="relative w-9 xl:w-20">
          <Image
            src="/svg/butterfly-ornament.svg"
            alt="butterfly-ornament"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className="space-y-8 xl:space-y-15">
        <div className="flex gap-3 xl:gap-7 justify-center">
          <ColorCode color="first" />
          <ColorCode color="second" />
          <ColorCode color="third" />
          <ColorCode color="fourth" />
          <ColorCode color="fifth" />
        </div>

        <p className="text-center xl:text-2xl">
          Please wear colors from our palette to match the celebration’s theme.
        </p>
      </div>
    </section>
  );
}
