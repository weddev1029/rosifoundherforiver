"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useState } from "react";
import useSound from "use-sound";
import { Button } from "./ui/button";

export default function BGMButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound("/bgm/bgmv1.mp3", {
    onend: () => setIsPlaying(false),
  });

  const toggleAudio = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-4 lg:top-auto lg:bottom-36 left-4 z-50">
      <Button
        onClick={toggleAudio}
        size={"icon-lg"}
        className="bg-custom-primary cursor-pointer"
      >
        {isPlaying ? <Volume2 /> : <VolumeOff />}
      </Button>
    </div>
  );
}
