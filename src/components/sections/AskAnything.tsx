import { type FormEvent, useState } from "react";
import { Reveal } from "../Reveal";

type Mode = "anon" | "follow";
type Status = "idle" | "sending" | "sent" | "error";

// Questions POST to the Firebase Cloud Function `submitQuestion`, fronted same-origin by a
// Hosting rewrite (/api/ask → function). The function emails ASK_EMAIL over SMTP.
// Override the endpoint for local emulator testing via VITE_ASK_ENDPOINT.
const ASK_EMAIL = "jo@tended.team";
const ASK_ENDPOINT = import.meta.env.VITE_ASK_ENDPOINT ?? "/api/ask";

export function AskAnything() {
  const [mode, setMode] = useState<Mode>("anon");
  const [status, setStatus] = useState<Status>("idle");
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState(""); // honeypot; real users leave this empty

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!question.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch(ASK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          question: question.trim(),
          mode,
          from: mode === "follow" ? name.trim() : "",
          website,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setQuestion("");
      setName("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="ask" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-line bg-surface-1 p-8 md:grid-cols-[1fr_1.3fr] md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                No Wrong Questions
              </p>
              <h2 className="mt-3 font-serif text-3xl text-paper">Ask anything</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                Your real self, your honest feedback, your best work — that's what Jason asked you
                to bring, and it starts here. Big or small, signed or anonymous, every question gets
                a real answer within a day. The most common ones get added to the FAQ above.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                Prefer to talk it through? Grab Joe at any office visit, or go through your branch
                manager — they'll route it the same day.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="flex flex-col gap-2 sm:flex-row">
                {(
                  [
                    { key: "anon", label: "Answer me anonymously on this page" },
                    { key: "follow", label: "Follow up with me personally" },
                  ] as const
                ).map((opt) => {
                  const active = mode === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setMode(opt.key)}
                      aria-pressed={active}
                      className={`flex-1 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                        active
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-line bg-surface-2 text-secondary hover:border-gold/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {mode === "follow" && (
                <>
                  <label htmlFor="ask-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="ask-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (so Joe can follow up)"
                    className="mt-3 w-full rounded-lg border border-line bg-surface-2 p-3 text-paper placeholder:text-muted focus:border-gold focus:outline-none"
                  />
                </>
              )}

              <label htmlFor="ask-question" className="sr-only">
                Your question
              </label>
              <textarea
                id="ask-question"
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                className="mt-3 min-h-28 w-full resize-y rounded-lg border border-line bg-surface-2 p-3 text-paper placeholder:text-muted focus:border-gold focus:outline-none"
              />
              <p className="mt-2 text-xs text-muted">
                {mode === "anon"
                  ? "Anonymous means anonymous — we don't ask for your name or office."
                  : "Joe's office will follow up with you directly."}
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-3 rounded-lg bg-gold px-5 py-2.5 font-bold text-on-accent transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send my question"}
              </button>

              {status === "sent" && (
                <p className="mt-3 text-sm font-semibold text-discover" role="status">
                  ✓ Got it. You'll see an answer within a day — thank you for asking.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-secondary" role="status">
                  Something went wrong sending that. Please email{" "}
                  <a className="font-semibold text-gold underline" href={`mailto:${ASK_EMAIL}`}>
                    {ASK_EMAIL}
                  </a>{" "}
                  directly.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
