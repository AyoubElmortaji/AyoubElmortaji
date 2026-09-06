/** Contact details and social links, used by the contact section and the footer. */

export type SocialLink = {
  label: string;
  href: string;
  /** Icon key resolved in components/Icons.tsx. */
  icon: "linkedin" | "github" | "mail";
  /** Text shown next to the icon in the contact list. */
  display: string;
};

export const contact = {
  email: "aelmortaji7@gmail.com",

  linkedin: "https://linkedin.com/in/ayoub-elmortaji",
  github: "https://github.com/AyoubElmortaji",

  /** Short pitch above the contact form. */
  blurb:
    "Looking for a PFE internship in Cybersecurity & Cloud starting January 2027? My inbox is open.",
};

/** Rendered as the contact list and in the footer. */
export const socials: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    icon: "mail",
    display: contact.email,
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    icon: "linkedin",
    display: "ayoub-elmortaji",
  },
  {
    label: "GitHub",
    href: contact.github,
    icon: "github",
    display: "AyoubElmortaji",
  },
];
