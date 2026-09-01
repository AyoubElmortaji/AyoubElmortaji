"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger helper: seconds to wait before this element animates in. */
  delay?: number;
  className?: string;
  /** Render as a <li> when used inside a list, to keep markup semantic. */
  as?: "div" | "li" | "article" | "section";
};

/**
 * Fades + lifts its children into view once, the first time they are scrolled to.
 * Honours `prefers-reduced-motion` by rendering the content statically.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
