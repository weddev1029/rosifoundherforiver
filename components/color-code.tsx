import { cn } from "@/lib/utils";

type colorCode = "first" | "second" | "third" | "fourth" | "fifth";

export default function ColorCode({ color }: { color: colorCode }) {
  const colorCode = {
    first: "bg-dresscode-1",
    second: "bg-dresscode-2",
    third: "bg-dresscode-3",
    fourth: "bg-dresscode-4",
    fifth: "bg-dresscode-5",
  };

  return (
    <div
      className={cn(
        "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-36 xl:h-36 rounded-full shadow-lg transition-transform hover:-translate-y-2",
        colorCode[color],
      )}
    ></div>
  );
}
