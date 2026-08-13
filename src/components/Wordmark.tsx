import { Sprout } from "./Sprout";

type WordmarkProps = {
  className?: string;
  /** Show the sprout mark before the wordmark (primary lockup). */
  withMark?: boolean;
};

/**
 * Tended "Tended." wordmark: DM Serif Display with the gold dot, per the brand kit.
 * Uses the primary-text token so it reads correctly in both the dark and light registers.
 * Swap in the official outlined SVG from the Tended Logo Kit when available.
 */
export function Wordmark({ className, withMark = false }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 font-serif text-paper ${className ?? ""}`}>
      {withMark && <Sprout className="h-[1.1em] w-[1.1em] translate-y-[0.05em]" />}
      <span>
        Tended<span className="text-gold">.</span>
      </span>
    </span>
  );
}
