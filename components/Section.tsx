import type { ReactNode } from "react";

import { Reveal } from "./Reveal";
import { ScrambleText } from "./ScrambleText";

type SectionProps = {
  /** Anchor id — must match the href in data/site.ts navLinks. */
  id: string;
  /** Monospace micro-label above the heading. */
  eyebrow: string;
  title: string;
  /** Optional one-line intro under the heading. */
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared shell for every page section: consistent spacing, heading hierarchy
 * (each section owns exactly one <h2>) and a scroll anchor for the nav.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24 ${className}`}
    >
      <Reveal className="mb-10 sm:mb-14">
        <p className="eyebrow">{eyebrow}</p>
        <h2
          id={`${id}-heading`}
          className="mt-3 text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-tight"
        >
          <ScrambleText text={title} />
        </h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/60 via-line to-transparent" />
      </Reveal>
      {children}
    </section>
  );
}
