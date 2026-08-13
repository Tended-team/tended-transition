// Content for the ApexCare Team Hub — "The Next Chapter". Internal, for ApexCare team
// members. Prose-heavy sections (Jason's letter) live in their components as JSX; the
// structured, repeated content lives here.

export const nav = [
  { href: "#message", label: "Jason's Message" },
  { href: "#enemy", label: "What We're Up Against" },
  { href: "#change", label: "What's Changing" },
  { href: "#names", label: "The Three Names" },
  { href: "#people", label: "Who's Who" },
  { href: "#faq", label: "Your Questions" },
  { href: "#visits", label: "The First 100 Days" },
  { href: "#ask", label: "Ask Anything" },
] as const;

export const hero = {
  kicker: "A Message from Jason · Day One",
  title: "The Next Chapter of the Brightest Light",
  quote:
    "You built something worth growing. That's not a small thing, and I don't want to rush past it.",
};

export const assurance =
  "The Tended team leads the road ahead, and Jason is staying: still an owner, still here. Your role, pay, schedule, and benefits continue as they are. Payroll runs exactly as it always has. No layoffs planned. No rebrand.";

export const enemy = {
  industry: [
    "Missed visits",
    "Revolving-door caregivers, treated as interchangeable",
    "Phones that ring out",
    "Care plans treated like checklists — boxes to tick, not people to see",
    "Service without hospitality: the task done, the person unseen",
  ],
  industryTag: "A way of doing business that has failed too many families for too long.",
  promise: [
    "The brightest light in our clients' lives",
    "Caregivers who are known, developed, and never interchangeable",
    "A person's name — not their case number",
    "Unreasonable hospitality: making someone feel genuinely seen",
    "Humble, hungry, smart — every person on this team",
  ],
  promiseTag:
    "Kept visit after visit, client after client — now at a scale we couldn't reach alone.",
};

export const change = {
  changing: [
    "The Tended team is in charge of the road ahead — operational decisions, growth strategy, daily leadership",
    "A short weekly team meeting with a simple scorecard, so everyone knows what winning looks like",
    "Clearer ownership of who does what",
    "Written-down processes, so knowledge doesn't live in one person's head",
    "More behind us: capital, technology, operating help — weapons for the fight, not changes done to us",
  ],
  changingTag:
    "These arrive over months, not overnight — and they'll be shaped by what you tell Joe on the listening tour.",
  notChanging: [
    "The mission: the brightest light in our clients' lives",
    "The enemy: an industry that settles — never each other",
    "The ApexCare name, our Care Partners identity, and our seven C.A.R.I.N.G. values",
    "Your role, pay, schedule, and benefits — payroll tested and confirmed before Day 1",
    "Your clients: same caregivers, same office, same phone number",
    'Jason: still an owner, still invested — "a handoff and a stay," not a goodbye',
  ],
  notChangingTag:
    "If anything about your individual situation were ever to change, you'd hear it from Joe directly, in person, first. That's a commitment.",
};

export type NameCard = {
  name: string;
  role: string;
  body: string;
  accent: "gold" | "violet" | "soft";
};

export const names: NameCard[] = [
  {
    name: "ApexCare",
    role: "Us — the promise keepers",
    accent: "gold",
    body: "Same name, same offices, same Care Partners identity, same C.A.R.I.N.G. values. ApexCare is the flagship of everything Tended is building — the team that already knows how to live the mission.",
  },
  {
    name: "Tended",
    role: "The partners Jason chose",
    accent: "violet",
    body: "The partners leading the road ahead — chosen for how they think about people, bringing capital, technology, and operating help to win a fight we couldn't win alone. Not a rebrand. Clients will never see “Tended” on a badge, a car, or an invoice.",
  },
  {
    name: "Mimi & Grace",
    role: "Coming later — a front door",
    accent: "soft",
    body: "A new, separate service launching after our transition: short, affordable visits for families who don't yet need full home care. When they need more, they're referred to ApexCare. It is not a replacement for ApexCare or for caregivers.",
  },
];

export type Person = { initials: string; name: string; role: string; body: string };

export const people: Person[] = [
  {
    initials: "JW",
    name: "Jason Wu",
    role: "Founder · Still an owner",
    body: "\"This isn't a handoff and a goodbye. It's a handoff and a stay.\" Jason chose this path and these partners. He remains an owner, present through the transition — in the room, available, and accountable alongside the Tended leadership.",
  },
  {
    initials: "JO",
    name: "Joe Olson, RN",
    role: "Leading the road ahead",
    body: "A nurse by background, Joe leads ApexCare's day-to-day operations going forward. His first move isn't to change anything — it's to listen, in every office. Questions about roles, people, or “what does this mean for me” go to Joe.",
  },
  {
    initials: "MS",
    name: "Matt Survis",
    role: "Visionary",
    body: "Owns the long-term strategy, key external relationships, and the culture we're protecting. The leader behind the Mimi & Grace vision.",
  },
  {
    initials: "MH",
    name: "Matt Hollingsworth",
    role: "Technology & Process",
    body: "Owns our systems — Homecare HQ, scheduling, data — and making sure the tools serve the caregivers, not the other way around.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does this mean for me — my pay, my schedule, my job?",
    a: "Your role, pay, schedule, and benefits continue as they are. Payroll runs exactly as it always has — that was tested and confirmed before Day 1. If anything about your individual situation were ever to change, you'd hear it from Joe directly, in person, first — that's a commitment.",
  },
  {
    q: "Who's actually in charge now?",
    a: "The Tended team is in charge of the road ahead — the operational decisions, the growth strategy, the daily leadership. Jason wanted that said plainly, because clarity matters more than comfort right now. Joe is your day-to-day leader; Jason remains an owner, present and accountable alongside the Tended leadership.",
  },
  {
    q: "Is Jason leaving? Was he pushed out?",
    a: "Jason chose this. He went out and found partners he trusts — for how they think about people, not just their resources — to take ApexCare further than he could alone. He's still an owner, still invested, and staying present through the transition. In his words: \"This isn't a handoff and a goodbye. It's a handoff and a stay.\"",
  },
  {
    q: "Will there be layoffs?",
    a: "No layoffs are planned. This isn't a turnaround — ApexCare was chosen because it works. The new owners' stated order of priorities is customers first, people second, costs last. Growth is the plan: more offices and more caregivers, not fewer. The Tended team didn't come here to change what makes ApexCare worth growing — they came here because of it.",
  },
  {
    q: 'Why did Jason use the word "enemy"?',
    a: "Because the fight was never inside this room. The enemy is the industry standard — missed visits, revolving-door caregivers, phones that ring out, care plans treated like checklists. We made a different promise to families, and the new backing exists to keep that promise at a bigger scale. New capital and new leadership are weapons the team now has — not changes done to us.",
  },
  {
    q: "Are we being renamed / going corporate?",
    a: "No rebrand — the name, the values, and the local identity of each office stay. What's being added is support: better scheduling tools, clearer numbers, and documented processes so nobody has to reinvent the wheel.",
  },
  {
    q: "What actually changes?",
    a: "The clearest change is leadership: the Tended team leads the road ahead. Then, gradually: a short weekly team meeting with a simple scorecard, clearer ownership of who does what, and written-down processes so knowledge doesn't live in one person's head. These arrive over months, not overnight, and your input shapes them.",
  },
  {
    q: 'What was all that workshop work for — Ideal Team Player, "How do I know I\'m winning?", service vs. hospitality?',
    a: "It wasn't a warmup exercise. Jason asked for that work because he knew this moment was coming and wanted a foundation sturdy enough to grow from. It connects directly to what's next: a mission with stakes, personal scoreboards so you know when you're winning, and a team of humble, hungry, smart people playing to win it — together.",
  },
  {
    q: "What's this AI thing? Will it replace caregivers?",
    a: "No. The caregiver is not interchangeable — that belief is the whole foundation. The technology handles the paperwork side — scheduling, recruiting, admin — so caregivers spend more time caring and less time on logistics. Care is people. That doesn't change.",
  },
  {
    q: "What do I tell clients and families?",
    a: '"Nothing changes about your care — same caregivers, same office, same phone number. ApexCare has new long-term backing that helps us serve you even better." If a family wants more detail, offer a call from Joe\'s office.',
  },
  {
    q: "What is Mimi & Grace?",
    a: "A new, separate service Tended will launch later, after our transition is complete. It offers short, affordable visits — the kind we've always had to turn away — to families who don't yet need full home care. When those families eventually need more, they'll be referred to ApexCare. It is not a replacement for ApexCare or for caregivers — it's a front door that brings us clients.",
  },
];

export type Phase = "connect" | "discover" | "deliver";

export const phases: { key: Phase; days: string; name: string; blurb: string }[] = [
  {
    key: "connect",
    days: "Days 1–30",
    name: "Connect",
    blurb:
      "Joe visits every office. No restructuring, no announcements — the goal is to understand, not evaluate.",
  },
  {
    key: "discover",
    days: "Days 31–60",
    name: "Discover",
    blurb:
      "What we heard becomes a plan — built with the leadership team, then brought back to every office.",
  },
  {
    key: "deliver",
    days: "Days 61–100",
    name: "Deliver",
    blurb:
      "Early wins, clear ownership, and a new rhythm that runs on its own — without Jason in the lead seat.",
  },
];

export type TimelineItem = { when: string; what: string; detail: string; gate?: string };

export const roadmap: Record<Phase, { tag: string; items: TimelineItem[] }> = {
  connect: {
    tag: "No restructuring, no announcements — just listening.",
    items: [
      {
        when: "Week 1 · Sacramento HQ",
        what: "Day 1 all-hands, in person — simulcast to every office",
        detail:
          "Joe's message to the whole company, live, the same day. Then time with the Sacramento team.",
      },
      {
        when: "Week 2 · Stockton",
        what: "A full day on-site",
        detail: "First stop on the tour — meeting the team where the work happens.",
      },
      {
        when: "Week 3 · Vacaville & Napa",
        what: "Office visits, plus a caregiver ride-along",
        detail:
          "Time with the Elder Care Management team — and a shift alongside a caregiver, because that's where the real work happens.",
      },
      {
        when: "Week 4 · Concord",
        what: "Every office visited in month one",
        detail:
          "The listening tour closes out with Concord — and the leadership team starts running its own weekly rhythm.",
        gate: "Gate: first month closed, listening complete",
      },
    ],
  },
  discover: {
    tag: "What we heard on the tour turns into a plan — co-created, not handed down.",
    items: [
      {
        when: "Week 5 · Day 30",
        what: "Leadership offsite",
        detail:
          "The leadership team locks in the plan together — what we stand for, what we focus on, and where we're headed. Built on what the tour surfaced.",
        gate: "Gate: the plan is co-created",
      },
      {
        when: "Week 6 · Every office",
        what: "The plan comes back out — in person",
        detail:
          "A roadshow bringing the vision to each office, the same way it started: face to face.",
      },
      {
        when: "Week 7 · Day 45",
        what: "First monthly all-hands by video; a simple scorecard goes live",
        detail: "Everyone can now see, in plain numbers, how we're doing — at every office.",
      },
      {
        when: "Week 8",
        what: "Stockton branch-manager search announced",
        detail: "Monthly office rotation continues; the visit rhythm keeps going.",
      },
    ],
  },
  deliver: {
    tag: "Turning the plan into results everyone can see.",
    items: [
      {
        when: "Week 9 · Day 60",
        what: "Early wins announced",
        detail:
          "The first proof points get shared out loud — stabilizing offices, better caregiver retention, Mimi & Grace sending us new clients.",
        gate: "Gate: early wins delivered",
      },
      {
        when: "Week 10 · Day 70",
        what: "Clear ownership, on paper",
        detail: "Every seat has one clear owner — so nobody has to guess who to go to.",
      },
      {
        when: "Week 11",
        what: "Mimi & Grace referral routing goes live",
        detail:
          "The new front door starts sending ApexCare clients — a new source of growth, not a replacement for anything.",
      },
      {
        when: "Week 12",
        what: "Culture pulse survey",
        detail:
          "A quick, honest check-in on how the transition is landing — while the first Quarterly Review is prepped.",
      },
      {
        when: "Week 13 · Day 90",
        what: "First in-person Quarterly Review",
        detail:
          "Hosted at a rotating office. The new rhythm is running on its own — no parallel leadership needed.",
        gate: "Gate: Jason off day-to-day; Joe owns the team",
      },
      {
        when: "Days 91–100",
        what: "Rounding out the first 100 days",
        detail:
          "The rhythm holds, the plan keeps moving — and the next chapter starts from steady ground.",
      },
    ],
  },
};

export const rhythm = {
  title: "A rhythm you can count on",
  body: "A monthly visit rotating through the offices, a monthly all-hands by video, and an in-person quarterly team meeting that rotates its host office.",
  note: "Gates, not fixed dates — if something slips, you'll hear about it, not just see the schedule quietly change.",
};

export const footer = {
  brand: "ApexCare · A Care Partners Company",
  mission: "The brightest light in our clients' lives. That was always the goal. It still is.",
  offices: "Sacramento · Stockton · Vacaville · Concord · Napa",
  note: "This page is for ApexCare team members. Please don't share it outside the company — clients and families hear from us directly.",
};
