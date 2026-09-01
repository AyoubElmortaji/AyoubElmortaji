/**
 * The "Certified by" logo wall under the hero.
 *
 * Drop each logo into `public/logos/` using the filename below. Until a file
 * exists (or if one fails to load) the chip falls back to the provider name in
 * text, so the strip never shows a broken image.
 */

export type Provider = {
  /** Shown in the fallback chip and used as the accessible label. */
  name: string;
  /** Path under /public. Omit to always render the text fallback. */
  logo?: string;
};

export const providers: Provider[] = [
  { name: "Fortinet", logo: "/logos/fortinet-logo.png" },
  { name: "AWS", logo: "/logos/aws-logo.png" },
  { name: "Oracle", logo: "/logos/oracle-logo.png" },
  { name: "Azure", logo: "/logos/azure-logo.png" },
  { name: "TryHackMe", logo: "/logos/tryhackme-logo.png" },
  { name: "DeepLearning.AI", logo: "/logos/deeplearning-logo.png" },
];

/** Heading above the logo wall. */
export const providersHeading = "Certified by multiple providers";
