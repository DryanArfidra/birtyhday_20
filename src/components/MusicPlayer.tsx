import { useEffect, useRef } from "react";

type Props = {
  shouldPlay: boolean;
};

export default function MusicPlayer({ shouldPlay }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("public/audio/musik1.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    if (shouldPlay) {
      audio.play().catch(() => {
        // Browser mungkin memblokir autoplay.
      });
    }

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [shouldPlay]);

  return null;
}