import { Reveal } from "./Reveal";

type Accent = "gold" | "violet" | "muted";

type Props = {
  title: string;
  items: readonly string[];
  tag: string;
  accent: Accent;
  delay?: number;
};

const topBorder: Record<Accent, string> = {
  gold: "border-t-gold",
  violet: "border-t-discover",
  muted: "border-t-line",
};

const marker: Record<Accent, { glyph: string; className: string }> = {
  gold: { glyph: "✓", className: "text-gold" },
  violet: { glyph: "→", className: "text-discover" },
  muted: { glyph: "—", className: "text-muted" },
};

export function ListPanel({ title, items, tag, accent, delay = 0 }: Props) {
  const m = marker[accent];
  return (
    <Reveal delay={delay}>
      <div
        className={`h-full rounded-xl border border-t-[3px] border-line bg-surface-1 p-6 ${topBorder[accent]}`}
      >
        <h3 className="font-serif text-xl text-paper">{title}</h3>
        <ul className="mt-4 space-y-2.5 text-[15px] text-secondary">
          {items.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className={`mt-0.5 flex-none font-bold ${m.className}`} aria-hidden="true">
                {m.glyph}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-muted">{tag}</p>
      </div>
    </Reveal>
  );
}
