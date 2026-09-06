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
  phone: "+212 625 725 861",
  /** Phone in dial format for the tel: link. */
  
  linkedin: "https://linkedin.com/in/ayoub-elmortaji",
  github: "https://github.com/AyoubElmortaji",
  /** Short pitch above the contact form. */
  blurb:
    "Looking for a PFE intern in Cyberecurity, Cloud   from January 2027?  My inbox is open.",
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
    label: "Phone",
    href: `tel:${contact.phoneHref}`,
    icon: "phone",
    display: contact.phone,
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
  {
    label: "Location",
    href: "https://www.openstreetmap.org/search?query=Mohammedia%2C%20Morocco",
    icon: "location",
    display: contact.location,
  },
];
