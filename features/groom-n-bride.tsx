import CoupleCard from "@/components/couple-card";

export function GroomNBride() {
  return (
    <section className="bg-[url('/hero/hero-0.jpg')] bg-cover bg-center bg-fixed lg:gap-28 h-[424.79px] lg:h-[812px]">
      <div className="px-4 md:px-0 backdrop-brightness-60 flex items-center justify-center gap-4 h-full md:gap-8 xl:gap-28">
        <CoupleCard
          url="/couple/groom.jpg"
          name="John Doe"
          description="The Groom"
        />

        <CoupleCard
          url="/couple/bride.jpg"
          name="Jane Smith"
          description="The Bride"
        />
      </div>
    </section>
  );
}
