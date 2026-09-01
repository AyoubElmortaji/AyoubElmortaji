/** Competitions & CTF results. */

export type Competition = {
  /** Short result badge, e.g. "2nd place", "Top 1%". */
  result: string;
  event: string;
  organizer: string;
  /** Scope or track, e.g. "Africa & Middle East". */
  detail?: string;
  year: string;
};

export const competitions: Competition[] = [
  {
    result: "2nd place",
    event: "SecureIT CTF 2025",
    organizer: "Cisco Networking Academy",
    detail: "Africa & Middle East",
    year: "2025",
  },
  {
    result: "2nd place",
    event: "MCSC V13 CTF 2026",
    organizer: "ENSIAS",
    detail: "Beginner Track",
    year: "2026",
  },
  {
    result: "Semi-Finals",
    event: "MEA & CIS NetAcad Cup 2026",
    organizer: "Cisco Networking Academy",
    year: "2026",
  },
  {
    result: "Top 1%",
    event: "TryHackMe",
    organizer: "Global ranking",
    year: "—",
  },
];
