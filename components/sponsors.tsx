import { cn } from "@/lib/utils";

function SponsorWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

function SponsorTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={cn(
        "font-great-vibes tracking-wide text-4xl xl:text-2xl text-center",
        className,
      )}
    >
      {children}
    </h4>
  );
}

function SponsorContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-center text-lg xl:text-sm tracking-wide space-y-8 xl:space-y-6 text-pretty",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { SponsorWrapper, SponsorTitle, SponsorContent };
