import { hero } from "../content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="hero-title">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50rem 26rem at 50% -20%, rgba(124,92,191,0.30), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{hero.kicker}</p>
        <h1
          id="hero-title"
          className="mt-5 font-serif text-4xl leading-[1.05] text-paper sm:text-6xl"
        >
          {hero.title}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl font-serif text-xl italic text-secondary sm:text-2xl">
          &ldquo;{hero.quote}&rdquo;
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#message"
            className="rounded-lg bg-gold px-6 py-3 font-bold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            Read Jason's message
          </a>
          <a
            href="#faq"
            className="rounded-lg border border-line px-6 py-3 font-semibold text-paper transition-colors hover:border-gold"
          >
            What does this mean for me?
          </a>
        </div>
      </div>
    </section>
  );
}
