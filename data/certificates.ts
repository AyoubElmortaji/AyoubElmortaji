/**
 * Certificates, grouped by category.
 * TODO: fill in `credentialUrl` with the public verification link for each
 * certificate. An empty string hides the "Verify" link on that card.
 */

export type Certificate = {
  name: string;
  issuer: string;
  /** Public verification URL. Empty string = no link rendered. */
  credentialUrl: string;
};

export type CertificateGroup = {
  category: string;
  items: Certificate[];
};

export const certificateGroups: CertificateGroup[] = [
  {
    category: "Cloud",
    items: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        credentialUrl: "", // TODO: add credential URL
      },
      {
        name: "AWS Cloud Security Foundations",
        issuer: "Amazon Web Services",
        credentialUrl: "", // TODO: add credential URL
      },
      {
        name: "Oracle Cloud OCI Foundations Associate",
        issuer: "Oracle",
        credentialUrl: "", // TODO: add credential URL
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        name: "Fortinet NSE 5 (FortiSASE / SD-WAN 7.6)",
        issuer: "Fortinet",
        credentialUrl: "", // TODO: add credential URL
      },
      {
        name: "Blue Team Junior Analyst (BTJA)",
        issuer: "Security Blue Team",
        credentialUrl: "", // TODO: add credential URL
      },
      {
        name: "SOC Level 1",
        issuer: "TryHackMe",
        credentialUrl: "", // TODO: add credential URL
      },
    ],
  },
  {
    category: "AI",
    items: [
      {
        name: "AI Security",
        issuer: "TryHackMe",
        credentialUrl: "", // TODO: add credential URL
      },
      {
        name: "Agentic AI",
        issuer: "DeepLearning.AI",
        credentialUrl: "", // TODO: add credential URL
      },
      {
        name: "Machine Learning Specialization",
        issuer: "Coursera",
        credentialUrl: "", // TODO: add credential URL
      },
    ],
  },
];
