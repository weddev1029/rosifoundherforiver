import { cn } from "@/lib/utils";

function LocationCard({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-[180px]">{children}</div>;
}

function LocationImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-56 md:w-72 lg:w-1/3", className)}>
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
        "bg-custom-primary p-2 md:p-4 space-y-2 text-sm flex-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { LocationCard, LocationContent, LocationImage };
