import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ kicker, title, intro }: Props) {
  return (
    <Reveal>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{kicker}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-paper sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">{intro}</p>}
    </Reveal>
  );
}
