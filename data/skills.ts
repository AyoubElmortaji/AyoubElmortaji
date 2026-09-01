/** Skills, grouped by domain. Each group becomes a card of tag pills. */

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI Security / Red Teaming",
    items: [
      "AI Pentest",
      "LLM Red Teaming",
      "RAG Security",
      "Garak",
      "PyRIT",
      "DeepTeam",
      "Promptfoo",
      "Llama Prompt Guard 2",
      "LiteLLM AI Gateway",
      "Guardrails AI",
      "AI Threat Modeling",
    ],
  },
  {
    category: "AI & Agents",
    items: ["Ollama", "Open WebUI", "Amazon Bedrock", "CrewAI", "n8n", "MCP", "LLM", "RAG"],
  },
  {
    category: "Offensive Security",
    items: [
      "OWASP Top 10",
      "Burp Suite",
      "OWASP ZAP",
      "OT/SCADA Pentesting",
      "Malware Analysis",
    ],
  },
  {
    category: "Defensive Security & SOC",
    items: ["Wazuh", "ELK", "Splunk", "Suricata", "Snort", "OpenCTI", "Atomic Red Team"],
  },
  {
    category: "Cloud & Serverless",
    items: [
      "AWS EC2",
      "AWS Lambda",
      "AWS S3",
      "AWS IAM",
      "Amazon Bedrock",
      "DynamoDB",
      "AWS VPC",
      "GuardDuty",
      "CloudTrail",
      "CloudWatch",
      "Oracle Cloud (OCI)",
    ],
  },
  {
    category: "Network Security",
    items: ["FortiGate", "pfSense", "OPNsense", "VPN (IPsec/SSL)", "SD-WAN", "EVE-NG"],
  },
  {
    category: "Systems & DevSecOps",
    items: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "Docker",
      "Proxmox",
      "OpenStack",
      "Kubernetes (k3s)",
      "Terraform",
      "Ansible",
      "ArgoCD",
      "Git",
      "GitLab CI/CD",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "C"],
  },
];
