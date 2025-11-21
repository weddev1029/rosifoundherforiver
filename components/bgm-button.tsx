"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export default function BGMButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt autoplay (usually blocked)
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Autoplay blocked -> wait for first user interaction
        const enableAudio = () => {
          audio.play();
          setIsPlaying(true);
          window.removeEventListener("click", enableAudio);
          window.removeEventListener("touchstart", enableAudio);
          window.removeEventListener("scroll", enableAudio);
        };

        window.addEventListener("click", enableAudio);
        window.addEventListener("touchstart", enableAudio);
        window.addEventListener("scroll", enableAudio);
      });
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/** biome-ignore lint/a11y/useMediaCaption: <I only need the audio> */}
      <audio ref={audioRef} src="/bgm/bgmv1.mp3" loop />

      <Button onClick={toggleAudio} size={"icon-sm"}>
        {isPlaying ? <Pause /> : <Play />}
      </Button>
    </div>
  );
}
