import type { Experience } from "@/data/experience";
import { LogoImage } from "./LogoImage";

/**
 * Fallback monogram, e.g. "Wana Corporate (INWI)" -> "IN", "JESA S.A." -> "JE".
 * A parenthesised brand alias wins, since that is the name people recognise.
 */
function initials(company: string): string {
  const alias = company.match(/\(([^)]+)\)/)?.[1];
  const words = (alias ?? company)
    .replace(/[^\p{L}\p{N} ]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1);

  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0] ?? company).slice(0, 2).toUpperCase();
}

/**
 * Company logo chip for the experience timeline.
 *
 * The white tile means any real brand logo — light or dark, transparent or not —
 * stays readable in both site themes. If the file is missing or fails to load we
 * fall back to a monogram rather than showing a broken-image icon, so the
 * timeline still looks finished before the PNGs are dropped in.
 *
 * The company name sits directly beside this, so the image itself is decorative.
 */
export function CompanyLogo({ job }: { job: Experience }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white sm:h-14 sm:w-14">
      <LogoImage
        src={job.logo}
        fallback={
          <span aria-hidden className="font-mono text-sm font-bold text-[#0b0d12]">
            {initials(job.company)}
          </span>
        }
        className="h-full w-full object-contain p-1.5"
        width={56}
        height={56}
      />
    </span>
  );
}
