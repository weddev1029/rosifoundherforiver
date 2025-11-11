import Image from "next/image";

export default function CoupleCard({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}) {
  return (
    <div className="bg-white w-full max-w-xs lg:max-w-lg p-1 md:p-2 lg:p-3 space-y-3">
      <div className="relative aspect-square">
        <Image src={url} alt={name} fill className="object-cover box" />

        <div className="absolute inset-0 outline-1 -outline-offset-6 outline-custom-primary-4"></div>
      </div>

      <div className="uppercase text-center text-black text-sm lg:space-y-2 py-2 lg:py-6">
        <p className="font-semibold md:text-2xl lg:text-3xl">{name}</p>
        <span className="md:text-xl lg:text-2xl">{description}</span>
      </div>
    </div>
  );
}
