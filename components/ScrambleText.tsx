"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\/[]{}—=+*^?#01";
const FRAME_MS = 45;

/**
 * "Decrypting" text effect: the string resolves left to right out of random
 * glyphs the first time it scrolls into view.
 *
 * The final text is what renders on the server, so search engines and
 * screen readers always see the real string; the scramble is a client-only
 * flourish that is skipped entirely under prefers-reduced-motion.
 */
export function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);
  const intervalId = useRef<number | null>(null);

  // Stop any in-flight animation if the component unmounts.
  useEffect(
    () => () => {
      if (intervalId.current !== null) window.clearInterval(intervalId.current);
    },
    [],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || played.current) return;
        played.current = true;
        observer.disconnect();

        let frame = 0;
        intervalId.current = window.setInterval(() => {
          // Two characters resolve per frame, left to right.
          const settled = frame / 2;

          setDisplay(
            text
              .split("")
              .map((char, i) => {
                if (i < settled || char === " ") return char;
                return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
              })
              .join(""),
          );

          frame += 1;
          if (settled >= text.length) {
            if (intervalId.current !== null) window.clearInterval(intervalId.current);
            setDisplay(text); // guarantee we land on the real string
          }
        }, FRAME_MS);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ""}`}>
      {/*
        An invisible copy of the final string reserves the exact final box, so
        the varying glyph widths during the scramble cannot reflow the page
        (keeps Cumulative Layout Shift at zero). It is hidden from assistive
        tech; the overlaid span carries the accessible text and settles on the
        real string within about a second.
      */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0">{display}</span>
    </span>
  );
}
