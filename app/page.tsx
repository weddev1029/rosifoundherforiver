import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen font-playfair-display bg-[url('/hero/hero-0.jpg')] bg-cover bg-center">
      <div className="h-screen w-full grid place-content-center backdrop-brightness-50 text-white">
        <div className="grid place-items-center text-center space-y-6 lg:space-y-10">
          <div className="relative w-[247px] h-12 lg:w-[400px] lg:h-20">
            <Image
              src="/svg/heart-ornament.svg"
              alt="heart-ornament"
              fill
              className="object-contain"
            />
          </div>
          <span className="block uppercase text-3xl lg:text-5xl">
            You are invited to the Wedding of
          </span>
          <h1 className="font-great-vibes text-[56px] lg:text-[80px]">
            John and Jane
          </h1>
          <Link
            href={"/invite"}
            className="px-3 py-2 lg:px-6 lg:py-3.5 bg-custom-primary uppercase font-bold text-xl lg:text-2xl hover:bg-custom-primary-2 transition-colors ease-in"
          >
            Open Invitation
          </Link>
        </div>
      </div>
    </div>
  );
}
