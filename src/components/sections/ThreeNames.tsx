import { names } from "../../content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const accentText = {
  gold: "text-gold",
  violet: "text-discover",
  soft: "text-deliver",
} as const;

const accentBorder = {
  gold: "border-t-gold",
  violet: "border-t-discover",
  soft: "border-t-deliver",
} as const;

export function ThreeNames() {
  return (
    <section id="names" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading kicker="Getting the Words Right" title="The three names you'll hear" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {names.map((card, i) => (
            <Reveal key={card.name} delay={i * 0.06}>
              <div
                className={`h-full rounded-xl border border-t-[3px] border-line bg-surface-1 p-6 ${accentBorder[card.accent]}`}
              >
                <h3 className="font-serif text-2xl text-paper">{card.name}</h3>
                <p
                  className={`mt-1 text-xs font-bold uppercase tracking-[0.05em] ${accentText[card.accent]}`}
                >
                  {card.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
