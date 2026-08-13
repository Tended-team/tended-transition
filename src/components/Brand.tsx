type BrandProps = {
  className?: string;
};

/** ApexCare masthead — real logo (reversed on dark, full-color on light) + context tag. */
export function Brand({ className }: BrandProps) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-3 ${className ?? ""}`}
      aria-label="ApexCare — The Next Chapter"
    >
      <img
        src="/assets/apexcare-logo.png"
        alt="ApexCare"
        className="only-dark h-7 w-auto"
        width={468}
        height={87}
      />
      <img
        src="/assets/apexcare-horizontal.webp"
        alt="ApexCare — Excellence in Home Care"
        className="only-light h-9 w-auto"
        width={1180}
        height={300}
      />
      <span className="only-dark hidden border-l border-line pl-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold sm:inline">
        The Next Chapter
      </span>
    </a>
  );
}
