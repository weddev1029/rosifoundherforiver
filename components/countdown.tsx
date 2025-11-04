import { useCountdown } from "@/hooks/useCountdown";
import { weddingDate } from "@/siteConfig";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);

  return (
    <div className="flex-1 flex items-center font-playfair-display leading-none">
      <div className="flex-1 py-4 grid gap-1 place-content-center text-center h-full bg-custom-primary lg:bg-custom-primary/80">
        <p className="text-3xl font-bold lg:text-6xl">{days}</p>
        <span className="text-xs lg:text-2xl">DAYS</span>
      </div>
      <div className="flex-1 py-4 grid gap-1 place-content-center text-center h-full bg-custom-primary-2 lg:bg-custom-primary-2/80">
        <p className="text-3xl font-bold lg:text-6xl">{hours}</p>
        <span className="text-xs lg:text-2xl">HOURS</span>
      </div>
      <div className="flex-1 py-4 grid gap-1 place-content-center text-center h-full bg-custom-primary-3 lg:bg-custom-primary-3/80">
        <p className="text-3xl font-bold lg:text-6xl">{minutes}</p>
        <span className="text-xs lg:text-2xl">MINS</span>
      </div>
      <div className="flex-1 py-4 grid gap-1 place-content-center text-center h-full bg-custom-primary-4 lg:bg-custom-primary-4/80">
        <p className="text-3xl font-bold lg:text-6xl">{seconds}</p>
        <span className="text-xs lg:text-2xl">SECS</span>
      </div>
    </div>
  );
}
