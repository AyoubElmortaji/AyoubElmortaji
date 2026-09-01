/**
 * Global site metadata + navigation.
 * Edit this file to change the browser title, SEO description, or nav links.
 */

export type NavLink = {
  /** Anchor target — must match a section `id` rendered in app/page.tsx. */
  href: string;
  label: string;
};

/** Used when no environment variable supplies a usable URL. */
const FALLBACK_SITE_URL = "https://ayoub-elmortaji.vercel.app";

/**
 * Resolve the canonical site URL.
 *
 * This is deliberately defensive, because a bad value here breaks the whole
 * production build: `metadataBase` feeds `new URL()`, which throws on an empty
 * or malformed string. Two real cases it guards against:
 *
 *  - The variable exists but is EMPTY (e.g. added in the Vercel dashboard with
 *    a blank value). `??` would happily keep `""`, so we test truthiness.
 *  - The variable holds something that is not a valid absolute URL, or is a
 *    bare hostname like "ayoub.com" with no scheme.
 *
 * Note: `process.env.NEXT_PUBLIC_*` must be written out in full for Next.js to
 * inline it at build time — do not refactor these into a loop over names.
 */
function resolveSiteUrl(): string {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    // Vercel injects this on every deployment, so previews get correct metadata.
    vercelUrl ? `https://${vercelUrl}` : undefined,
    FALLBACK_SITE_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;

    const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    try {
      // `.origin` also normalises away any trailing slash or path.
      return new URL(withScheme).origin;
    } catch {
      // Not a usable URL — fall through to the next candidate.
    }
  }

  return FALLBACK_SITE_URL;
}

export const site = {
  name: "Ayoub ELMORTAJI",
  role: "Cybersecurity & Cloud Engineer",
  /** Used for <title>, Open Graph and Twitter cards. */
  title: "Ayoub ELMORTAJI — Cybersecurity & Cloud Engineer",
  description:
    "Final-year Cybersecurity & Cloud Computing engineering student at ENSAM Casablanca. AI Security, Cloud Security & DevSecOps. PFE available from January 2027.",
  /** Always a valid absolute URL — see resolveSiteUrl() above. */
  url: resolveSiteUrl(),
  locale: "en",
  keywords: [
    "Ayoub ELMORTAJI",
    "Cybersecurity",
    "Cloud Security",
    "DevSecOps",
    "AI Red Teaming",
    "AI Security",
    "SOC",
    "ENSAM Casablanca",
    "PFE 2027",
    "Morocco",
  ],
  /** Path to the CV inside /public. Swap the file, keep the name. */
  resumePath: "/resume.pdf",
} as const;

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#competitions", label: "CTFs" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
