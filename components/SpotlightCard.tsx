"use client";

import type { ReactNode } from "react";
import { useCallback, useRef } from "react";

/**
 * Card wrapper with a glow that follows the pointer — the accent "sweeps" the
 * surface like a scanner. Pointer position is written straight to CSS custom
 * properties (no React state), so moving the mouse never triggers a re-render.
 *
 * Touch devices never fire pointermove without contact, so they simply get the
 * static card; the hover glow is progressive enhancement.
 */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;

    // Throttle to one write per animation frame.
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      node.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  }, []);

  return (
    <Tag
      ref={ref as never}
      onPointerMove={handleMove}
      className={`spotlight relative ${className}`}
    >
      {children}
    </Tag>
  );
}
