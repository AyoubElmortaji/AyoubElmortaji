/** Professional experience, rendered as a vertical timeline (newest first). */

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  /**
   * Company logo, relative to /public — e.g. "/logos/inwi-logo.png".
   * Drop the file into public/logos/. A square-ish PNG with a transparent
   * background looks best. If the file is missing or the field is omitted,
   * a monogram built from the company name is shown instead.
   */
  logo?: string;
  /** One entry per bullet point in the timeline card. */
  highlights: string[];
  /** Optional technology tags shown under the bullets. */
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Red Teaming Intern",
    company: "Wana Corporate (INWI)",
    location: "Casablanca",
    period: "Jun – Jul 2026",
    logo: "/logos/inwi-logo.png",
    highlights: [
      "Designed an internal RAG-based AI assistant with role-based access control (RBAC).",
      "Ran a black-box red teaming campaign (Garak, PyRIT, DeepTeam, Promptfoo) including a RAG corpus poisoning scenario, uncovering 11+ critical vulnerabilities.",
      "Hardened the system with defense-in-depth (Llama Prompt Guard 2 + LiteLLM AI Gateway), reducing the attack success rate from 40% to 20%.",
      "Delivered a prioritized remediation report to the security team.",
    ],
    tech: ["Garak", "PyRIT", "DeepTeam", "Promptfoo", "LiteLLM", "RAG", "RBAC"],
  },
  {
    role: "OT Cybersecurity Intern",
    company: "JESA S.A.",
    location: "Casablanca",
    period: "Jul – Aug 2025",
    logo: "/logos/jesa-logo.png",
    highlights: [
      "Deployed a cyber-deception architecture (Purdue model, PLC/SCADA honeypots) with centralized monitoring via Wazuh, Suricata and OpenCTI.",
      "Conducted OT/SCADA penetration tests against the simulated industrial environment.",
      "Assessed the security posture against NIST SP 800-82 and IEC 62443.",
    ],
    tech: ["Wazuh", "Suricata", "OpenCTI", "Purdue Model", "NIST SP 800-82", "IEC 62443"],
  },
];
