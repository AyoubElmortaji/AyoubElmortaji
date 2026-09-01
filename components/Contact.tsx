import { contact, socials } from "@/data/contact";
import { ArrowRightIcon, iconMap } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** Contact details, rendered from the `socials` array in data/contact.ts. */
export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="09 — contact"
      title="Get in touch"
      description={contact.blurb}
    >
      <Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {socials.map((item) => {
            const Icon = iconMap[item.icon];
            const isExternal = item.href.startsWith("http");

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full items-center gap-4 rounded-lg border border-line bg-surface px-4 py-3.5 transition-colors hover:border-accent/50"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
                  >
                    <Icon width={16} height={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm text-fg transition-colors group-hover:text-accent">
                      {item.display}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Email me
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <p className="font-mono text-xs text-muted">
            Usually replies within a day.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
