import { certificateGroups } from "@/data/certificates";
import { CertificateIcon, ExternalIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** Certificates grouped by category (Cloud / Security / AI). */
export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="06 — certificates"
      title="Certificates"
      description="Vendor and platform certifications across cloud, security operations and AI."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificateGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {group.category}
            </h3>

            <ul className="mt-4 space-y-3">
              {group.items.map((cert) => (
                <li key={cert.name} className="card-interactive flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                    <CertificateIcon width={16} height={16} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug text-fg">{cert.name}</p>
                    <p className="mt-1 text-xs text-muted">{cert.issuer}</p>

                    {/* Shown only once a credentialUrl is filled in. */}
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-accent"
                      >
                        <ExternalIcon width={12} height={12} />
                        Verify
                        <span className="sr-only">{cert.name} credential</span>
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
