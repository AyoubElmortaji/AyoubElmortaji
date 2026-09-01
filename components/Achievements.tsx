import { awards } from "@/data/awards";
import { competitions } from "@/data/competitions";
import { extracurriculars } from "@/data/extracurriculars";
import { AwardIcon, TrophyIcon, UsersIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** Competitions & CTF results. */
export function Competitions() {
  return (
    <Section
      id="competitions"
      eyebrow="04 — competitions"
      title="Competitions & CTFs"
      description="Capture-the-flag results and cybersecurity competition rankings."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {competitions.map((entry, i) => (
          <Reveal as="li" key={entry.event} delay={(i % 2) * 0.06}>
            <article className="card-interactive flex h-full items-start gap-4">
              <span
                aria-hidden
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
              >
                <TrophyIcon />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-sm font-semibold text-accent">
                  {entry.result}
                </p>
                <h3 className="mt-1 text-base font-semibold text-fg">{entry.event}</h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.organizer}
                  {entry.detail ? ` — ${entry.detail}` : ""}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/** Awards & prizes. */
export function Awards() {
  return (
    <Section id="awards" eyebrow="05 — awards" title="Awards & prizes">
      <ul className="grid gap-4 sm:grid-cols-2">
        {awards.map((award, i) => (
          <Reveal as="li" key={`${award.title}-${award.year}`} delay={(i % 2) * 0.06}>
            <article className="card-interactive flex h-full items-start gap-4">
              <span
                aria-hidden
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
              >
                <AwardIcon />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-fg">{award.title}</h3>
                <p className="mt-1 text-sm text-muted">{award.issuer}</p>
                <p className="mt-1 font-mono text-xs text-accent">{award.year}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/** Clubs and associative roles. */
export function Extracurriculars() {
  return (
    <Section
      id="extracurriculars"
      eyebrow="07 — parascolaires"
      title="Extracurriculars"
      description="Club leadership alongside the engineering programme."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {extracurriculars.map((entry, i) => (
          <Reveal as="li" key={entry.organization} delay={(i % 2) * 0.06}>
            <article className="card-interactive flex h-full items-start gap-4">
              <span
                aria-hidden
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
              >
                <UsersIcon />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-fg">{entry.organization}</h3>
                <p className="mt-1 text-sm text-muted">{entry.kind}</p>
                <p className="mt-2 font-mono text-xs text-accent">
                  {entry.role} &middot; {entry.period}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
