import { enemy } from "../../content";
import { ListPanel } from "../ListPanel";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Enemy() {
  return (
    <section id="enemy" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading
          kicker="The Mission — and the Enemy"
          title="What we're up against"
          intro="The enemy isn't anyone in this room, and it isn't the new leadership. It's the way this industry has taught families to expect care to look. We made a different promise, and now we have more behind us to keep it."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ListPanel
            title="The industry standard"
            items={enemy.industry}
            tag={enemy.industryTag}
            accent="muted"
          />
          <ListPanel
            title="Our promise"
            items={enemy.promise}
            tag={enemy.promiseTag}
            accent="gold"
            delay={0.06}
          />
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm uppercase tracking-[0.06em] text-muted">
            That's who we're up against — not each other.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
