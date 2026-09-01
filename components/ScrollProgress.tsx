"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Hairline accent bar across the bottom of the sticky nav, tracking how far
 * through the page the visitor is. Framer's spring keeps it from feeling twitchy.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent via-accent to-accent/40"
    />
  );
}
