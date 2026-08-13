import { useState } from "react";
import { nav } from "../content";
import { Brand } from "./Brand";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Brand />

        <nav aria-label="Primary" className="flex items-center gap-4">
          <ul className="hidden items-center gap-5 text-sm text-secondary lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#ask"
            className="hidden rounded-lg bg-gold px-4 py-2 text-sm font-bold text-on-accent transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Ask anything
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d={open ? "M4 4l12 12M16 4L4 16" : "M3 6h14M3 10h14M3 14h14"}
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2.5 text-secondary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
