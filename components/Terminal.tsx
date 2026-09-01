"use client";

import { useEffect, useState } from "react";

import type { TerminalLine } from "@/data/about";

const TYPE_MS = 38; // per character
const OUTPUT_PAUSE_MS = 420; // beat between command and its output
const LINE_PAUSE_MS = 520; // beat before the next command

type Phase = { line: number; chars: number; showOutput: boolean };

/**
 * Fake shell session for the hero. Types each command out, prints its output,
 * then moves on — the "cyber" motif that carries the most personality.
 *
 * Under prefers-reduced-motion the whole session renders instantly.
 */
export function Terminal({ lines }: { lines: TerminalLine[] }) {
  const [phase, setPhase] = useState<Phase>({ line: 0, chars: 0, showOutput: false });
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    // Read the preference on the client so SSR markup stays stable.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
    }
  }, []);

  useEffect(() => {
    if (instant) return;

    const current = lines[phase.line];
    if (!current) return; // session finished

    // 1. still typing the command
    if (phase.chars < current.command.length) {
      const t = setTimeout(
        () => setPhase((p) => ({ ...p, chars: p.chars + 1 })),
        TYPE_MS,
      );
      return () => clearTimeout(t);
    }

    // 2. command finished, reveal its output
    if (!phase.showOutput) {
      const t = setTimeout(
        () => setPhase((p) => ({ ...p, showOutput: true })),
        OUTPUT_PAUSE_MS,
      );
      return () => clearTimeout(t);
    }

    // 3. output shown, advance to the next line
    if (phase.line < lines.length - 1) {
      const t = setTimeout(
        () => setPhase({ line: phase.line + 1, chars: 0, showOutput: false }),
        LINE_PAUSE_MS,
      );
      return () => clearTimeout(t);
    }
  }, [phase, lines, instant]);

  const done = instant || phase.line >= lines.length - 1;

  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-surface/80 shadow-2xl shadow-black/20 backdrop-blur-sm"
      // Decorative flourish: the real content is the prose beside it.
      aria-hidden="true"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-[11px] text-muted">ayoub@ensam: ~</span>
      </div>

      {/* Session body — min-height stops the card resizing as lines appear. */}
      <div className="min-h-[13.5rem] space-y-1.5 p-4 font-mono text-[12px] leading-relaxed sm:min-h-[14.5rem] sm:text-[13px]">
        {lines.map((line, i) => {
          const visible = instant || i <= phase.line;
          if (!visible) return null;

          const typed =
            instant || i < phase.line ? line.command : line.command.slice(0, phase.chars);
          const outputVisible = instant || i < phase.line || phase.showOutput;

          return (
            <div key={line.command}>
              <p className="flex gap-2">
                <span className="shrink-0 text-accent">$</span>
                <span className="break-all text-fg">
                  {typed}
                  {/* Caret rides the line currently being typed. */}
                  {!instant && i === phase.line && !done ? (
                    <span className="caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-accent" />
                  ) : null}
                </span>
              </p>
              {outputVisible ? (
                <p className="break-words pl-4 text-muted">{line.output}</p>
              ) : null}
            </div>
          );
        })}

        {/* Idle prompt once the session has played out. */}
        {done ? (
          <p className="flex gap-2">
            <span className="shrink-0 text-accent">$</span>
            <span className="caret inline-block h-3.5 w-[7px] translate-y-[2px] bg-accent" />
          </p>
        ) : null}
      </div>
    </div>
  );
}
