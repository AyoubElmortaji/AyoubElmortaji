import { ImageResponse } from "next/og";

// Favicon generated at build time — no binary asset to keep in sync.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * NOTE: this runs outside the DOM, so CSS variables are unavailable.
 * If you change --accent-hue in globals.css, update this hex too.
 */
const ACCENT = "#1eebae";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d12",
          color: ACCENT,
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        A
      </div>
    ),
    size,
  );
}
