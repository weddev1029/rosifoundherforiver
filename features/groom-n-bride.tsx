import CoupleCard from "@/components/couple-card";

export function GroomNBride() {
  return (
    <section className="bg-[url('/hero/hero-0.jpg')] bg-cover bg-center bg-fixed lg:gap-28 h-[424.79px] lg:h-[812px]">
      <div className="px-4 md:px-0 backdrop-brightness-60 flex items-center justify-center gap-4 h-full md:gap-8 xl:gap-28">
        <CoupleCard
          url="/couple/groom.jpg"
          name="John Doe"
          description="The Groom"
        >
          <p>
            Quiet but deeply thoughtful, Iverson is a man of few words but full
            of love. He’s gentle, devoted, and guided by his faith. A lover of
            music and mindful living, he finds peace in melodies and meaning in
            taking care of both body and soul.
          </p>

          <p>
            To her, he is home steady, sincere, and everything love was meant to
            be.
          </p>
        </CoupleCard>

        <CoupleCard
          url="/couple/bride.jpg"
          name="Jane Smith"
          description="The Bride"
          isGroom={false}
        >
          <p>
            Rosilyn is a cheerful, compassionate soul whose smile lights up any
            room. A K-drama lover, coffee enthusiast, and dog mama at heart, she
            finds joy in life’s quiet moments and romantic twists.
          </p>

          <p>
            Kind, warm, and full of love, she’s more than just a bride she’s his
            sunshine, his calm, and his everyday joy. Now, she’s ready to begin
            her own real-life love story one filled with laughter, loyalty, and
            lots of love.
          </p>
        </CoupleCard>
      </div>
    </section>
  );
}
