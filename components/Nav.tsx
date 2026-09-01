"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/data/site";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Sticky navigation with:
 *  - smooth anchor scrolling (CSS `scroll-behavior`, see globals.css)
 *  - a scroll-spy that highlights the section currently in view
 *  - a mobile drawer that traps nothing but closes on Escape / link click
 */
export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-spy: mark the topmost section intersecting the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Add a border + blur to the bar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer with Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <ScrollProgress />

      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="group font-mono text-sm font-semibold tracking-tight text-fg"
        >
          <span className="text-accent">~/</span>ayoub
          <span className="text-accent">.elmortaji</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-md px-3 py-2 font-mono text-[13px] transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resumePath}
            download
            className="hidden items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-[13px] text-muted transition-colors hover:border-accent/50 hover:text-accent sm:inline-flex"
          >
            <DownloadIcon width={15} height={15} />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-accent lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto flex max-w-content flex-col gap-1 px-5 pb-5 pt-2 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 font-mono text-sm transition-colors ${
                      active === link.href
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-elevated hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resumePath}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm text-muted hover:bg-elevated hover:text-fg"
                >
                  <DownloadIcon width={15} height={15} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
