import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { weddingCalendarURL } from "@/siteConfig";
import { Button } from "./ui/button";

export default function SaveTheDateButton() {
  return (
    <Button
      asChild
      variant={"outline"}
      className="bg-transparent rounded hover:bg-custom-primary hover:text-secondary font-inter"
    >
      <Link
        href={weddingCalendarURL}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <CalendarIcon />
        Save the Date
      </Link>
    </Button>
  );
}
