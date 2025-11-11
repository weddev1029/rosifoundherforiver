import { cn } from "@/lib/utils";

function LocationCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[180px] max-w-[1094px] w-full">{children}</div>
  );
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
        "relative w-56 md:w-72 lg:w-[604px] lg:h-[346px]",
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
        "bg-custom-primary p-2 md:p-4 space-y-2 text-sm flex-1 grid content-center w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { LocationCard, LocationContent, LocationImage };
