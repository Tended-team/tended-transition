import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Message() {
  return (
    <section id="message" className="border-b border-line">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <SectionHeading kicker="Day One" title="A message from Jason" />

        <Reveal className="mt-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-line bg-surface-1 px-6 py-10 text-center">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-on-accent"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 3.5v9l8-4.5-8-4.5z" />
              </svg>
            </span>
            <p className="mt-4 font-semibold text-paper">Jason's Day 1 message to the team</p>
            <p className="mt-2 text-xs text-muted">Mockup: Day-1 all-hands recording embeds here</p>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl space-y-5 text-[17px] leading-relaxed text-secondary [&_strong]:text-paper">
          <p>I want to tell you something before I tell you anything else.</p>
          <p>
            <strong>You built something worth growing.</strong> That's not a small thing, and I
            don't want to rush past it.
          </p>
          <p>
            When we started ApexCare, I didn't have a playbook. What I had was a conviction: that
            families in this part of Northern California deserved better than what the industry was
            offering them. Missed visits. Revolving-door caregivers. Phones that rang out. Care
            plans treated like checklists, boxes to tick, not people to see. I believed we could be
            different. I believed we <em>were</em> different. And you proved it, visit after visit,
            client after client, year after year.
          </p>
          <p>
            That's the foundation we're standing on today. And I'm still standing on it with you.
          </p>
          <p>
            Here's what I also know: the work is bigger than what I can finish alone. The families
            who need us, who <em>deserve</em> us, extend far beyond the counties we serve today. And
            meeting them where they are requires more than I can build by myself. It requires
            partners who share the conviction, who bring capital and leadership and a hunger to
            prove that care doesn't have to look the way this industry has taught people to expect.
          </p>
          <p>I found those partners.</p>
          <p>
            Their names are Joe, Matt, and Matt. They operate under the name Tended. And the reason
            I trust them, the reason I chose them, is not because of their resources, though the
            resources are real. It's because of <em>how</em> they think about people. The people we
            care for. And the people doing the caring.
          </p>
          <p>
            They believe, as I do, that the caregiver is not interchangeable. That the elder in our
            care is not a case number. That excellence in home care looks less like efficient
            service delivery and more like unreasonable hospitality, the kind that makes someone
            feel genuinely seen. They've built their entire framework around that idea. And they
            want to build it here, with the team that already knows how to live it.
          </p>
          <p>
            <strong>What's changing:</strong> they are in charge of the road ahead. The operational
            decisions, the growth strategy, the daily leadership of this company, that's theirs. I
            want to be clear about that, because clarity matters more than comfort right now, and
            you deserve both.
          </p>
          <p>
            <strong>What's also true:</strong> I'm not going anywhere. I'll be present through this
            transition, in the room for the decisions that shaped this culture, available to the
            team that built it, and accountable alongside the Tended leadership for what we've
            promised our clients and each other. This isn't a handoff and a goodbye. It's a handoff
            and a <em>stay</em>. I'm still an owner. I'm still invested in every sense of the word.
            The road ahead is theirs to lead, and I'll be on it with them.
          </p>
          <p>
            <strong>
              What's <em>not</em> changing:
            </strong>{" "}
            the mission. The enemy.
          </p>
          <p>
            And yes, I said enemy. Because that's what it is. The industry standard isn't a
            competitor we're trying to outperform on metrics. It's a way of doing business that has
            failed too many families for too long, and we have made a different promise. The Tended
            team isn't coming in to restructure that promise. They're coming in to help us keep it
            at a scale we haven't been able to reach on our own.
          </p>
          <p>
            Before I close, I want to name something the team has been building together in these
            last months, because it matters more now than it did before. The work you've done on the
            Ideal Team Player framework. The clarity work on what winning looks like for each of
            you. The workshop on the difference between <em>service</em>, doing the task
            competently, and <em>hospitality</em>, making someone feel seen. I didn't ask you to do
            that work as a warmup exercise. I asked you because I knew this moment was coming, and I
            knew you'd need a foundation sturdy enough to grow from.
          </p>
          <p>
            That foundation is you. It's how you show up at 6 a.m. for someone who can't get out of
            bed without help. It's the phone call you make when you sense something's off. It's the
            way you say a person's name, not their case number, their <em>name</em>, when you walk
            through the door.
          </p>
          <p>
            The Tended team sees that. I've made sure of it. And they asked me to tell you: they
            didn't come here to change what makes ApexCare worth growing. They came here because of
            it.
          </p>
        </Reveal>

        <Reveal className="mx-auto my-10 max-w-2xl">
          <blockquote className="font-serif text-2xl italic leading-snug text-paper">
            <span className="text-gold">&ldquo;</span>So here's what I'm asking of every humble,
            hungry, smart person in this room: give them what you gave me, your real self, your
            honest feedback, your best work.<span className="text-gold">&rdquo;</span>
          </blockquote>
        </Reveal>

        <Reveal className="mx-auto max-w-2xl space-y-5 text-[17px] leading-relaxed text-secondary [&_strong]:text-paper">
          <p>
            And know that as you do, I'll still be here, watching, supporting, and proud of what
            we're building together.
          </p>
          <p>
            The brightest light in our clients' lives. That was always the goal.
            <br />
            <strong>It still is. And so am I.</strong>
          </p>
          <p className="font-serif text-xl text-paper">— Jason</p>
        </Reveal>
      </div>
    </section>
  );
}
