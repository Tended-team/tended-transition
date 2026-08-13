import { footer } from "../content";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="px-5 py-14 text-center text-sm text-muted sm:px-8">
      <p className="font-serif text-lg text-paper">{footer.brand}</p>
      <p className="mx-auto mt-2 max-w-xl italic text-secondary">{footer.mission}</p>
      <p className="mt-3 text-muted">{footer.offices}</p>
      <p className="mx-auto mt-4 max-w-xl text-xs text-muted">{footer.note}</p>

      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-2 border-t border-line pt-6">
        <span className="inline-flex items-center gap-2 text-xs text-muted">
          Backed and led by
          <Wordmark className="text-base" />
        </span>
        <p className="text-[11px] text-muted">
          Mockup for internal review — launches on Day 1, after the all-hands. Not for pre-close
          distribution.
        </p>
      </div>
    </footer>
  );
}
