import { Church, ConciergeBell, Phone } from "lucide-react";
import Link from "next/link";
import type React from "react";
import RSVPForm from "@/components/rsvp-form";
import { FacebookIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function RSVP() {
  return (
    <section className="h-screen bg-[url('/hero/hero-2.jpg')] bg-cover bg-center bg-fixed text-white">
      <div className="h-full backdrop-brightness-60 flex flex-col items-center justify-center gap-10">
        <div className="space-y-6.5 text-center">
          <h3 className="text-[32px] tracking-wide">
            <span className="text-[42px] font-great-vibes">Confirmation</span>{" "}
            RSVP
          </h3>

          <p className="max-w-2xl text-xl px-12">
            We can&apos;t wait to celebrate with you! Please take a moment to
            let us know you&apos;re coming by completing our RSVP form.
          </p>
        </div>
        <div className="w-full sm:w-[378px] lg:w-[800px] xl:w-[1041px] bg-custom-primary/60 p-6 space-y-5">
          <h2 className="text-xl lg:text-4xl">#ROSIfoundherforIVER</h2>
          <div className="flex gap-10 items-center">
            <RSVPForm />

            <div className="w-1/2 hidden lg:block space-y-7">
              <Info icon={<Church size={28} />}>
                <p className="text-xl tracking-wide">
                  Saint Anthony Abbot Parish Church Nueva Ecija
                </p>
              </Info>
              <Info icon={<ConciergeBell size={28} />}>
                <p className="text-xl tracking-wide">
                  E Jose Events Place & Resort Papaya San Antonio Nueva Ecija
                </p>
              </Info>
              <Info icon={<Phone fill="white" />}>
                <p className="text-xl tracking-wide">09669300613</p>
              </Info>
              <Info icon={<FacebookIcon />} className="items-center">
                <Link
                  href={"https://www.facebook.com/share/1HGTbyZU54/"}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="tracking-wide text-sm"
                >
                  https://www.facebook.com/share/1HGTbyZU54/
                </Link>
              </Info>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  className,
  children,
}: {
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex gap-5", className)}>
      <div>{icon}</div>
      {children}
    </div>
  );
}
