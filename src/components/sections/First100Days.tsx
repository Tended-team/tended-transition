import { type Phase, phases, rhythm, roadmap } from "../../content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

// Literal class maps so Tailwind can see every utility at build time.
const phaseColor: Record<
  Phase,
  { text: string; dot: string; ring: string; badge: string; topBorder: string; hover: string }
> = {
  connect: {
    text: "text-connect",
    dot: "bg-connect",
    ring: "border-connect",
    badge: "bg-connect",
    topBorder: "border-t-connect",
    hover: "hover:border-connect",
  },
  discover: {
    text: "text-discover",
    dot: "bg-discover",
    ring: "border-discover",
    badge: "bg-discover",
    topBorder: "border-t-discover",
    hover: "hover:border-discover",
  },
  deliver: {
    text: "text-deliver",
    dot: "bg-deliver",
    ring: "border-deliver",
    badge: "bg-deliver",
    topBorder: "border-t-deliver",
    hover: "hover:border-deliver",
  },
};

function PhaseTimeline({ phase }: { phase: Phase }) {
  const meta = phases.find((p) => p.key === phase);
  const { tag, items } = roadmap[phase];
  const c = phaseColor[phase];
  if (!meta) return null;

  return (
    <div className="mt-14">
      <Reveal>
        <div className="flex items-baseline gap-3">
          <span className={`h-3 w-3 flex-none rounded-full ${c.dot}`} aria-hidden="true" />
          <h3 className="font-serif text-2xl text-paper">{meta.name}</h3>
          <span className={`text-xs font-bold uppercase tracking-[0.06em] ${c.text}`}>
            {meta.days}
          </span>
        </div>
        <p className="mb-6 ml-6 text-sm italic text-muted">{tag}</p>
      </Reveal>

      <ol className="ml-1.5">
        {items.map((item, i) => (
          <li key={item.when} className="flex gap-5 pb-5 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1.5 h-3 w-3 flex-none rounded-full border-2 ${c.ring} ${
                  item.gate ? c.dot : "bg-ink"
                }`}
              />
              {i < items.length - 1 && <span className="w-px flex-1 bg-line" aria-hidden="true" />}
            </div>
            <Reveal delay={i * 0.03} className="flex-1">
              <div
                className={`rounded-lg border border-line bg-surface-1 p-4 transition-colors ${c.hover}`}
              >
                <p className={`text-[11px] font-bold uppercase tracking-[0.05em] ${c.text}`}>
                  {item.when}
                </p>
                <p className="mt-1 font-semibold text-paper">{item.what}</p>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{item.detail}</p>
                {item.gate && (
                  <span
                    className={`mt-3 inline-block rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-on-accent ${c.badge}`}
                  >
                    {item.gate}
                  </span>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function First100Days() {
  return (
    <section id="visits" className="border-b border-line">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <SectionHeading kicker="The Ground War Starts With Listening" title="The First 100 Days" />
        <Reveal>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-secondary">
            A mission like this isn't won from a distance, it's won person by person, visit by
            visit. Three phases, one thread:{" "}
            <em className="text-paper">
              listen first, build the plan together, then make it real.
            </em>{" "}
            <em className="text-paper">
              "You have the answers, and over the next few weeks I'll be in every office to hear
              them." — Joe
            </em>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {phases.map((phase, i) => {
            const c = phaseColor[phase.key];
            return (
              <Reveal key={phase.key} delay={i * 0.06}>
                <div
                  className={`h-full rounded-xl border border-t-[3px] border-line bg-surface-1 p-5 transition-transform hover:-translate-y-0.5 ${c.topBorder}`}
                >
                  <p className={`text-[11px] font-bold uppercase tracking-[0.08em] ${c.text}`}>
                    {phase.days}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-paper">{phase.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{phase.blurb}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <PhaseTimeline phase="connect" />
        <PhaseTimeline phase="discover" />
        <PhaseTimeline phase="deliver" />

        <Reveal>
          <div className="mt-14 rounded-2xl border border-line bg-surface-2 px-6 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">After Day 100</p>
            <h3 className="mt-2 font-serif text-xl text-paper">{rhythm.title}</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-secondary">
              {rhythm.body}
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-muted">{rhythm.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
