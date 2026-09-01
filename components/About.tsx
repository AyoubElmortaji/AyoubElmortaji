import { about, education, languages } from "@/data/about";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** Bio and quick facts, plus the education timeline and spoken languages. */
export function About() {
  return (
    <Section id="about" eyebrow="01 — about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <Reveal className="space-y-8">
          <p className="text-base leading-relaxed text-muted sm:text-lg">{about.bio}</p>

          <dl className="grid gap-3 sm:grid-cols-2">
            {about.facts.map((fact) => {
              // A list-valued fact gets the full row and renders as tag pills.
              const isList = Array.isArray(fact.value);

              return (
                <div
                  key={fact.label}
                  className={`card ${isList ? "sm:col-span-2" : ""}`}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-fg">
                    {isList ? (
                      <ul className="flex flex-wrap gap-1.5">
                        {(fact.value as string[]).map((item) => (
                          <li key={item} className="tag">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <h3 className="font-mono text-sm uppercase tracking-widest text-fg">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((entry) => (
                <li key={entry.period} className="border-l-2 border-accent/40 pl-4">
                  <p className="text-sm font-medium text-fg">{entry.degree}</p>
                  <p className="mt-1 text-sm text-muted">{entry.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{entry.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-mono text-sm uppercase tracking-widest text-fg">Languages</h3>
            <ul className="mt-4 space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-2 text-sm"
                >
                  <span className="text-fg">{lang.name}</span>
                  <span className="font-mono text-xs text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
