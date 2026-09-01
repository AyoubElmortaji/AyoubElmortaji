"use client";

import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/data/about";
import { site } from "@/data/site";
import { ArrowRightIcon, DownloadIcon, MailIcon } from "./Icons";
import { ScrambleText } from "./ScrambleText";
import { Terminal } from "./Terminal";

/** Opening screen: identity on the left, a live terminal session on the right. */
export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };

  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 sm:py-20"
    >
      {/* Decorative layers: drifting grid, accent bloom, scope sweep. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-backdrop" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="scanline pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 opacity-30"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
      >
        {/* ---------------- Left: identity ---------------- */}
        <div>
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{hero.eyebrow}</p>

            {/* Availability pill with a pulsing "online" dot. */}
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent sm:text-[11px]">
                {hero.status}
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            id="hero-heading"
            className="mt-5 text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight"
          >
            <ScrambleText text={hero.name} />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-[clamp(1rem,2.6vw,1.5rem)] text-accent"
          >
            {hero.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition-all hover:opacity-90 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              <DownloadIcon width={16} height={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <MailIcon width={16} height={16} />
              Contact
            </a>
          </motion.div>
        </div>

        {/* ---------------- Right: terminal ---------------- */}
        <motion.div
          variants={item}
          className="float-y w-full max-w-xl justify-self-center lg:max-w-none"
        >
          <Terminal lines={hero.terminal} />
        </motion.div>
      </motion.div>
    </section>
  );
}
