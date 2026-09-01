import { projects } from "@/data/projects";
import { ExternalIcon, GithubIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { Section } from "./Section";

// Featured projects float to the top without changing the data file order.
const ordered = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
);

/** Responsive card grid — one card per entry in data/projects.ts. */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — projects"
      title="Projects"
      description="Labs and platforms built end to end: cloud security, DevSecOps, AI-assisted detection and offensive tooling."
    >
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {ordered.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={(i % 3) * 0.06}
            className="h-full"
          >
            <SpotlightCard
              as="article"
              className="card-interactive group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-fg">
                  {project.title}
                </h3>
                {project.featured ? (
                  <span className="shrink-0 rounded-md bg-accent/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li key={tech} className="tag group-hover:border-accent/30">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Rendered only when the data file provides a URL. */}
              {project.link || project.repo ? (
                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      <ExternalIcon width={14} height={14} />
                      Live
                      <span className="sr-only">demo of {project.title}</span>
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      <GithubIcon width={14} height={14} />
                      Code
                      <span className="sr-only">for {project.title}</span>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
