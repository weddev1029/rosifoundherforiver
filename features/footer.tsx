import Image from "next/image";

export function Footer() {
  return (
    <footer className="h-[363px] xl:h-[540px] bg-custom-secondary-3 grid place-content-center gap-7 text-white">
      <div className="flex items-center gap-6">
        <div className="relative w-15 h-[135px] xl:w-28 xl:h-64">
          <Image
            src="/svg/fern-ornament.svg"
            alt="fern"
            fill
            className="object-contain object-center"
          />
        </div>

        <h3 className="text-4xl xl:text-6xl font-great-vibes text-center w-52 xl:w-96 leading-12 xl:leading-20">
          John & Jane Wedding
        </h3>

        <div className="relative w-15 h-[135px] xl:w-28 xl:h-64 flip-horizontal">
          <Image
            src="/svg/fern-ornament.svg"
            alt="fern"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-7 xl:gap-15">
        <h2 className="text-center text-2xl xs:text-3xl">
          Tied by love, sealed for life.
        </h2>

        <div className="relative h-[38.59px] w-[182px] xl:w-[380px] xl:h-[80.73px]">
          <Image
            src="/svg/background-ornament.svg"
            alt="fern"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </footer>
  );
}
