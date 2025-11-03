"use client";

import { useEffect, useState } from "react";
import { calculateTimeLeft } from "@/lib/utils";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  distance?: number;
};

export function useCountdown(targetDate: string | Date): Countdown {
  const countDownDate = new Date(targetDate).getTime();

  const [countdown, setCountdown] = useState<Countdown>(() =>
    calculateTimeLeft(countDownDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft(countDownDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return countdown;
}
