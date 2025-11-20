import Image from "next/image";
import ImageGallery from "@/components/image-gallery";

export function LoveInGallery() {
  return (
    <section className="p-8 lg:px-0 lg:flex bg-custom-secondary-3 justify-center items-center lg:py-10 xl:py-12">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="pb-8 lg:p-4 col-span-2 space-y-3 flex flex-col items-center lg:col-span-1 xl:p-8 md:justify-center">
          <div className="relative aspect-video min-w-[50px] max-w-[78.75px]">
            <Image
              src={"/svg/butterfly-ornament.svg"}
              alt="butterfly-ornament"
              fill
              className="object-contain"
            />
          </div>

          <h4 className="text-2xl text-background xl:text-4xl">
            The{" "}
            <span className="font-great-vibes text-3xl xl:text-5xl">Love</span>{" "}
            in Gallery
          </h4>
        </div>

        {/* {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <I have to>
          <ImageGallery key={index} />
          ))} */}

        <ImageGallery delay={2200} />
        <ImageGallery delay={2400} />
        <ImageGallery delay={2600} />
        <ImageGallery delay={2800} />
        <ImageGallery delay={3000} />
      </div>
    </section>
  );
}
