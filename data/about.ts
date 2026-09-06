/** "About" section: bio paragraph, education timeline and spoken languages. */

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Fact = {
  label: string;
  /**
   * A plain string renders as a single line of text.
   * An array renders as tag pills, on a card spanning the full width.
   */
  value: string | string[];
};

export type About = {
  bio: string;
  facts: Fact[];
};

export type TerminalLine = {
  /** Typed out character by character after the `$` prompt. */
  command: string;
  /** Revealed once the command finishes typing. */
  output: string;
};

export type Hero = {
  name: string;
  title: string;
  tagline: string;
  /** Small monospace line rendered above the name. */
  eyebrow: string;
  /** Text inside the pulsing availability pill. */
  status: string;
  /** Lines played out in the hero terminal card, in order. */
  terminal: TerminalLine[];
};

export const hero: Hero = {
  eyebrow: "> whoami",
  name: "Ayoub ELMORTAJI",
  title: "Cybersecurity & Cloud Engineer",
  tagline:
    "Final-year engineering student at ENSAM Casablanca. PFE available from January 2027.",
  status: "Available for PFE — Jan 2027",
  terminal: [
    { command: "whoami", output: "ayoub.elmortaji" },
    {
      command: "cat /etc/role",
      output: "Cybersecurity & Cloud Engineer",
    },
    {
      command: "ls ~/focus",
      output: "cloud-security  ai-red-teaming  devsecops  soc-dfir",
    },
    {
      command: "status --pfe",
      output: "OPEN · January 2027",
    },
  ],
};

export const about: About = {
  bio: "Final-year Cybersecurity & Cloud Computing engineering student at ENSAM Casablanca, available for a final-year internship (PFE) from January 2027. I work across AI Security & AI Red Teaming, Cloud Security, DevSecOps, SOC & Threat Intelligence, DFIR, and OT/SCADA Security. Based in Morocco.",

  /** Short facts rendered as a key/value list next to the bio. */
  facts: [
    {
      label: "Location",
      value: "Morocco",
    },
    {
      label: "Availability",
      value: "PFE — January 2027",
    },
    {
      label: "Focus",
      value: [
        "Cloud Computing",
        "Cloud Security",
        "Blue Team: SOC & DFIR",
        "AI Security",
        "DevSecOps",
        "Red Teaming",
      ],
    },
  ],
};

export const education: Education[] = [
  {
    school: "ENSAM Casablanca",
    degree: "Engineering Degree, Cybersecurity & Cloud Computing",
    period: "2024 – 2027",
  },
  {
    school: "ENSAM Casablanca",
    degree: "Integrated Preparatory Classes",
    period: "2022 – 2024",
  },
];

export const languages: Language[] = [
  {
    name: "Arabic",
    level: "Native",
  },
  {
    name: "French",
    level: "Professional",
  },
  {
    name: "English",
    level: "Professional",
  },
];
