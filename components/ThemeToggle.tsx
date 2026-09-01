"use client";

import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "./Icons";

type Theme = "dark" | "light";

/**
 * Light/dark switch. Dark is the default; the choice is persisted in
 * localStorage and re-applied before paint by the script in app/layout.tsx.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // Start as `dark` to match the server-rendered markup, then sync on mount.
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent ${className}`}
    >
      {/* Before mount both themes are possible, so render a stable icon. */}
      {mounted && theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
