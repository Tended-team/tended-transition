import { assurance } from "../content";

export function AssuranceStrip() {
  return (
    <div className="border-y border-line bg-gold/10">
      <div className="mx-auto max-w-4xl px-5 py-5 text-center text-[15px] leading-relaxed text-secondary sm:px-8">
        <strong className="text-paper">Clarity and comfort — you deserve both.</strong> {assurance}
      </div>
    </div>
  );
}
