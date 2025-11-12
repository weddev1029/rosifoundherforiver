import { cn } from "@/lib/utils";

function LocationCard({ children }: { children: React.ReactNode }) {
  return <div className="flex  max-w-[1094px] w-full">{children}</div>;
}

function LocationImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-56 md:w-3/5 md:h-[196px] lg:w-[604px] lg:h-[346px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function LocationContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-custom-primary p-2 md:p-4 space-y-2 text-sm flex-1 lg:grid lg:content-center w-full xl:space-y-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { LocationCard, LocationContent, LocationImage };
