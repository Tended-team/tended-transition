import { change } from "../../content";
import { ListPanel } from "../ListPanel";
import { SectionHeading } from "../SectionHeading";

export function WhatsChanging() {
  return (
    <section id="change" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading
          kicker="Clarity Over Comfort — You Deserve Both"
          title="What's changing — and what never will"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ListPanel
            title="What's changing"
            items={change.changing}
            tag={change.changingTag}
            accent="violet"
          />
          <ListPanel
            title="What's not changing"
            items={change.notChanging}
            tag={change.notChangingTag}
            accent="gold"
            delay={0.06}
          />
        </div>
      </div>
    </section>
  );
}
