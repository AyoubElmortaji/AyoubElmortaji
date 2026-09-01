"use client";

import { useState, type ReactNode } from "react";

/**
 * An <img> that swaps to a fallback node if the file is missing or fails to
 * load. Used for every logo on the site, so a not-yet-uploaded PNG degrades to
 * readable text instead of a broken-image icon.
 *
 * Pass `alt=""` (the default) when neighbouring text already names the thing —
 * the image is then marked decorative and skipped by screen readers.
 */
export function LogoImage({
  src,
  alt = "",
  fallback,
  className = "",
  width = 160,
  height = 80,
}: {
  src?: string;
  alt?: string;
  fallback: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    // Small, static, already-sized asset — the optimizer would add nothing,
    // and this keeps working for any file dropped into /public/logos.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === "" ? "true" : undefined}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
