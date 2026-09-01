import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SpotlightCard } from "./SpotlightCard";

/** Skills grouped by domain — one card per group, tags inside. */
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="08 — skills"
      title="Skills & tooling"
      description="Day-to-day stack across offensive, defensive, cloud and AI security work."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.category} delay={(i % 2) * 0.06} className="h-full">
            <SpotlightCard className="card h-full transition-transform duration-300 hover:-translate-y-0.5">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <li key={skill} className="tag hover:border-accent/40 hover:text-fg">
                    {skill}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
