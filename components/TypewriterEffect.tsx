"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number; // ms per char
  delay?: number; // ms delay before start
  cursor?: boolean;
}

export default function TypewriterEffect({
  text,
  className = "",
  speed = 50,
  delay = 0,
  cursor = true
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span className="bg-primary text-on-primary ml-1 px-1 cursor-blink inline-block">
          ▌
        </span>
      )}
    </span>
  );
}
