import { people } from "../../content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function WhosWho() {
  return (
    <section id="people" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading kicker="Faces, Not Org Charts" title="Who's who" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {people.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-xl border border-line bg-surface-1 p-6">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-line bg-surface-3 font-bold text-gold">
                  {person.initials}
                </span>
                <div>
                  <p className="font-serif text-xl text-paper">{person.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.05em] text-gold">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{person.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
