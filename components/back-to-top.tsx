"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function BackToTop() {
  const [style, setStyle] = useState<string>(
    "invisible transition duration-500 opacity-0",
  );

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setStyle("visibile transition duration-500 opacity-100");
      } else {
        setStyle("invisible transition duration-500 opacity-0");
      }
    };

    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener("scroll", scrollFunction);

    return () => {
      // Cleanup the scroll event listener when the component is unmounted
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge
  };

  return (
    <Button
      size={"icon"}
      onClick={topFunction}
      className={cn(
        "fixed animate-bounce bottom-5 right-5 rounded-full z-99 mix-blend-difference cursor-pointer transition duration-300",
        style,
      )}
    >
      <ArrowUp />
    </Button>
  );
}
