import { experiences } from "@/data/experience";
import { CompanyLogo } from "./CompanyLogo";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** Vertical timeline of internships, newest first. */
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — experience"
      title="Experience"
      description="Internships in AI red teaming and industrial (OT) cybersecurity."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {experiences.map((job, i) => (
          <Reveal as="li" key={job.period} delay={i * 0.08} className="relative">
            {/* Timeline node, with a slow radar ping around it */}
            <span
              aria-hidden
              className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[39px]"
            >
              <span className="ping-ring absolute h-3 w-3 rounded-full bg-accent/50" />
              <span className="relative h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            </span>

            <div className="card-interactive transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <CompanyLogo job={job} />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-fg sm:text-lg">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-accent">{job.period}</span>
                  </div>

                  <p className="mt-1 text-sm text-muted">
                    {job.company} &middot; {job.location}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {job.tech?.length ? (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
