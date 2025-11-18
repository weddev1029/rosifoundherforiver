"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import SaveTheDateButton from "./save-the-date-button";

// import Countdown from "@/components/countdown";
const CoundownTimer = dynamic(() => import("@/components/countdown"), {
  ssr: false,
});

export default function RemainingDays({
  isFloating = true,
}: {
  isFloating?: boolean;
}) {
  return (
    <div className={cn("w-full", isFloating && "absolute bottom-0 z-9999")}>
      <div className="w-full flex flex-col lg:flex-row text-white">
        <div className="bg-custom-secondary lg:bg-custom-secondary/80 flex items-center justify-center py-8 lg:px-12 gap-6">
          <h4 className="uppercase text-end">
            <span className="text-sm">Missing days to</span>
            <span className="text-3xl block">Wedding</span>
          </h4>
          <SaveTheDateButton />
        </div>

        <CoundownTimer />
      </div>
    </div>
  );
}
