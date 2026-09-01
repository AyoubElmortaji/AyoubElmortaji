/**
 * Projects grid.
 * Add an object to `projects` and a new card appears — no JSX to touch.
 * `link` and `repo` are optional; omit them and the card simply hides the buttons.
 */

export type Project = {
  title: string;
  description: string;
  tech: string[];
  /** Optional live demo / write-up URL. */
  link?: string;
  /** Optional source code URL. */
  repo?: string;
  /** Set true to pin the project to the top of the grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Private Cloud Platform with GitOps & DevSecOps",
    description:
      "Secured an end-to-end CI/CD pipeline on k3s by deploying a private cloud platform with runtime threat detection and automated security gates on every commit.",
    tech: ["OpenStack", "Terraform", "Ansible", "ArgoCD", "Falco", "Vault", "k3s"],
    featured: true,
  },
  {
    title: "AI-Powered Threat Intelligence Platform (AWS)",
    description:
      "Reduced SOC analysis time from 4h to 5min with a serverless AWS platform, automated IOC enrichment (VirusTotal, MITRE ATT&CK) and AI analysis.",
    tech: ["AWS Lambda", "DynamoDB", "Bedrock", "VPC", "Nova Lite"],
    featured: true,
  },
  {
    title: "AWS FinOps AI Multi-Agent System",
    description:
      "Automated AWS cost optimization by orchestrating 7 AI agents across a full FinOps pipeline (Cost Explorer, PDF report, REST API, S3 dashboard).",
    tech: ["CrewAI", "Gemini 2.0 Flash", "AWS"],
  },
  {
    title: "ML-Based Intrusion Detection System",
    description:
      "Achieved 98% detection accuracy with an ML-based IDS and false-positive reduction via PCA, visualized on a dashboard.",
    tech: ["Logistic Regression", "Random Forest", "XGBoost", "PCA", "Streamlit"],
  },
  {
    title: "SOC Anomaly Detection (Wazuh & ML)",
    description:
      "Improved anomaly detection by simulating attacks (Atomic Red Team), collecting logs via Wazuh, and building a Python risk-scoring model.",
    tech: ["Wazuh", "Atomic Red Team", "Python", "Streamlit"],
  },
  {
    title: "Malware Analysis Lab",
    description:
      "Extracted malware behavior and IOCs in an isolated lab with static and dynamic analysis, documented in detailed reports.",
    tech: ["FlareVM", "REMnux", "INetSim"],
  },
  {
    title: "Check Point Firewall Deployment (ENSAM Datacenter)",
    description:
      "Strengthened access control and segmentation by deploying Check Point R82 in high availability (ClusterXL).",
    tech: [
      "Check Point R82",
      "ClusterXL",
      "EVE-NG",
      "Proxmox",
      "IPsec/SSL VPN",
      "Active Directory",
    ],
  },
  {
    title: "SOC Platform — Network Supervision & Attack Simulation",
    description:
      "Validated detection rules across 15 Red/Blue Team scenarios on a full SOC platform.",
    tech: ["VMware", "pfSense", "Active Directory", "Suricata", "Wazuh"],
  },
];
