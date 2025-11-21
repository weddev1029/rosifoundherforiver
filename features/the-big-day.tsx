export function TheBigDay() {
  return (
    <section className="bg-[url('/hero/hero-4.jpg')] bg-fixed bg-cover bg-center text-white h-[600px] xl:h-[800px]">
      <div className="backdrop-brightness-60 grid place-content-center gap-12 xl:gap-20 text-center h-full">
        <h3 className="text-4xl xl:text-6xl tracking-wide">The Big Day</h3>

        <div className="uppercase space-y-5 xl:space-y-10">
          <h3 className="text-4xl xl:text-6xl font-great-vibes capitalize">
            John & Jane Wedding
          </h3>

          <div className="space-y-3 xl:space-y-6">
            <p className="text-xl xl:text-3xl">
              Saint Anthony Abbot Parish Church
            </p>

            <p className="text-xl xl:text-3xl">Jan 10, 2026 · 12:30 PM</p>
          </div>
        </div>

        <p className="uppercase xl:text-2xl">
          <span className="font-bold">RECEPTION:</span> E Jose Events Place &
          Resort 3pm
        </p>
      </div>
    </section>
  );
}
