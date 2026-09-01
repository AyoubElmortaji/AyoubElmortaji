import { providers, providersHeading } from "@/data/providers";
import { LogoImage } from "./LogoImage";
import { Reveal } from "./Reveal";

/**
 * "Certified by" logo wall, sitting between the hero and the about section.
 *
 * Each logo lives in a white chip so any brand mark — light or dark, with or
 * without transparency — stays legible in both site themes.
 */
export function Providers() {
  return (
    <section
      aria-labelledby="providers-heading"
      className="mx-auto w-full max-w-content px-5 pb-4 sm:px-8"
    >
      <Reveal>
        <h2
          id="providers-heading"
          className="eyebrow text-center"
        >
          {providersHeading}
        </h2>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {providers.map((provider, i) => (
            <Reveal as="li" key={provider.name} delay={i * 0.05}>
              <div
                title={provider.name}
                className="group flex h-16 w-28 items-center justify-center rounded-xl border border-line bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 sm:h-[4.5rem] sm:w-36"
              >
                <LogoImage
                  src={provider.logo}
                  fallback={
                    <span className="text-center text-[11px] font-semibold leading-tight text-[#0b0d12] sm:text-xs">
                      {provider.name}
                    </span>
                  }
                  className="max-h-full w-full object-contain"
                  width={144}
                  height={56}
                />
                {/* Name is carried here for assistive tech, since the logo is decorative. */}
                <span className="sr-only">{provider.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
