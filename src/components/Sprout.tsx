type SproutProps = {
  className?: string;
  /** Reversed uses lighter leaves for dark grounds. */
  reversed?: boolean;
};

/** The Tended sprout mark: gold stem, two leaves. Stand-in for the official asset. */
export function Sprout({ className, reversed = false }: SproutProps) {
  const leftLeaf = reversed ? "#A48CD4" : "#3B1F7E";
  const rightLeaf = "#7C5CBF";
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Tended sprout</title>
      <path d="M16 30 V15" stroke="#C49A3A" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 17 C16 11 11 8 6 8 C6 14 10 17 16 17 Z" fill={leftLeaf} />
      <path d="M16 15 C16 9 21 6 26 6 C26 12 22 15 16 15 Z" fill={rightLeaf} />
    </svg>
  );
}
