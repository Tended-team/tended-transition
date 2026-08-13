import { useEffect, useState } from "react";

function getInitial(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.theme === "light";
}

/** Flips the document between the dark and light Tended registers. Persists to storage. */
export function ThemeToggle() {
  const [light, setLight] = useState(getInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    try {
      localStorage.setItem("theme", light ? "light" : "dark");
    } catch {
      // storage unavailable — theme still applies for this session
    }
  }, [light]);

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-secondary transition-colors hover:text-gold"
      aria-pressed={light}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Dark theme" : "Light theme"}
    >
      {light ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
