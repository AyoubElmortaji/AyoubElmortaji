/** Clubs and associative roles (Parascolaires). */

export type Extracurricular = {
  organization: string;
  /** Short descriptor, e.g. "Cybersecurity Club". */
  kind: string;
  role: string;
  period: string;
};

export const extracurriculars: Extracurricular[] = [
  {
    organization: "The Purple HAT",
    kind: "Cybersecurity Club",
    role: "Project Manager",
    period: "2024 – 2026",
  },
  {
    organization: "Sawaid Al Amal",
    kind: "Social Club",
    role: "Secretary General",
    period: "2024 – 2026",
  },
];
