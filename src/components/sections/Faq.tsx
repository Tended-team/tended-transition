import { faqs } from "../../content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <SectionHeading
          kicker="Straight Answers"
          title="Your questions, answered"
          intro="These are the real questions people are asking, answered the same way in every office. If yours isn't here, send it below — you'll get an answer within a day, and we'll add it to this page."
        />
        <Reveal className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-line bg-surface-1 px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 font-semibold text-paper">
                <span
                  className="mt-0.5 flex-none font-bold text-gold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
                <span>{faq.q}</span>
              </summary>
              <p className="mt-3 pl-6 text-[15px] leading-relaxed text-secondary">{faq.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
