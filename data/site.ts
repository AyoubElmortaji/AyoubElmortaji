/**
 * Global site metadata + navigation.
 * Edit this file to change the browser title, SEO description, or nav links.
 */

export type NavLink = {
  /** Anchor target — must match a section `id` rendered in app/page.tsx. */
  href: string;
  label: string;
};

export const site = {
  name: "Ayoub ELMORTAJI",
  role: "Cybersecurity & Cloud Engineer",
  /** Used for <title>, Open Graph and Twitter cards. */
  title: "Ayoub ELMORTAJI — Cybersecurity & Cloud Engineer",
  description:
    "Final-year Cybersecurity & Cloud Computing engineering student at ENSAM Casablanca. AI Security, Cloud Security & DevSecOps. PFE available from January 2027.",
  /** Falls back to the Vercel preview URL when the env var is unset. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayoub-elmortaji.vercel.app",
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
