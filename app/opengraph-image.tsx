import { ImageResponse } from "next/og";

import { site } from "@/data/site";

// Social preview card, rendered once at build time.
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Keep in sync with --accent-hue in app/globals.css. */
const ACCENT = "#1eebae";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0d12",
          backgroundImage: `radial-gradient(circle at 20% 0%, ${ACCENT}22, transparent 55%)`,
        }}
      >
        <div style={{ display: "flex", color: ACCENT, fontSize: 26, letterSpacing: 4 }}>
          {"> whoami"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "#f2f5f8",
            fontSize: 82,
            fontWeight: 700,
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, color: ACCENT, fontSize: 40 }}>
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            maxWidth: 900,
            color: "#9aa6b2",
            fontSize: 26,
            lineHeight: 1.4,
          }}
        >
          AI Security · Cloud Security · DevSecOps — ENSAM Casablanca
        </div>
      </div>
    ),
    size,
  );
}
