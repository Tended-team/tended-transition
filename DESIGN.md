# DESIGN.md — Tended Transition

> Design system for the ApexCare → Tended transition site. **Tended is the go-forward
> brand and leads the design.** ApexCare appears as honored heritage, not as a co-brand.
> Tended values are sourced from the official Brand & Logo Style Guide; ApexCare values
> were extracted from apexcare.com.

## Theme

**Light.** Scene: an ApexCare family member or caregiver, often older or not especially
technical, reading on a phone or laptop to understand what this change means for them.
They need warmth and reassurance, not a glowing dark product UI. Warm paper, deep purple
ink, gold that reads as care rather than luxury.

## Color strategy

**Committed** — Tended Deep Purple carries identity across the hero and section grounds,
on Warm Paper, with Gold as the single warm accent (dots, rules, CTAs). Violet handles
links and secondary accents.

### Tended palette (primary — source of truth: brand guide)

| Token | Hex | OKLCH (approx) | Use |
|---|---|---|---|
| `--purple` Deep Purple | `#3B1F7E` | `oklch(0.34 0.15 300)` | Primary. Hero/section grounds, headers, app tile. |
| `--violet` Violet | `#7C5CBF` | `oklch(0.55 0.14 300)` | Accent. Links, secondary accents, right leaf. |
| `--violet-soft` Soft Violet | `#A48CD4` | `oklch(0.68 0.10 300)` | Light accent, wordmark dot on dark, fills. |
| `--navy` Ink Navy | `#1A1033` | `oklch(0.20 0.07 300)` | Body text, wordmark on light. |
| `--gold` Warm Gold | `#C49A3A` | `oklch(0.72 0.11 85)` | Accent only. Sprout stem, dots, highlights, CTA. |
| `--paper` Warm Paper | `#F5F3F0` | `oklch(0.96 0.006 85)` | Light background for documents and surfaces. |

Derived neutrals (tinted toward purple, never pure black/white):
`--ink-muted oklch(0.46 0.03 300)`, `--line oklch(0.90 0.01 300)`,
`--surface oklch(0.98 0.004 85)`, `--paper-deep oklch(0.93 0.008 85)`.

### ApexCare palette (heritage reference only)

| Token | Hex | Use |
|---|---|---|
| ApexCare Blue | `#2A70B8` | Legacy primary. Reference/heritage callouts only. |
| ApexCare Teal | `#007367` | Legacy secondary. |
| ApexCare Green | `#96CA50` | Legacy accent. |
| ApexCare Gray | `#54565A` | Legacy text. |

Do not mix ApexCare colors into Tended surfaces. Use them only where the design
explicitly references ApexCare's past (e.g. a "from ApexCare" heritage note or logo
lockup during the transition window).

## Typography

- **Display / headings / wordmark:** DM Serif Display (Regular). The "Tended." wordmark
  is set in this face. Fallback: Georgia, serif.
- **Body / UI:** Inter. Fallback: system-ui, sans-serif.
- **Editorial serif (optional, decks/pull quotes):** Playfair Display.
- ApexCare used **Montserrat**; retained only inside heritage/ApexCare-labeled contexts.
- Body measure ≤ 68ch. Scale ratio ~1.25; weight contrast for hierarchy.

## Logo

Tended "Tended." wordmark + sprout mark (gold stem, deep-purple and violet leaves).
Clear space ≥ the sprout height. Min: primary lockup 120px wide, mark 24px. Reversed
lockup on deep purple / dark; color or mono on paper. Never recolor, distort, or rebuild
the mark; use supplied SVG/PNG masters from the SharePoint kit.

## Layout & components

- Editorial, generous vertical rhythm; spacing varies by section.
- **Focus areas:** numbered editorial list (01–04) on hairlines, not identical cards.
- **Three-stage process:** three columns, large numerals + day ranges.
- **Timeline:** single vertical spine with dated nodes.
- **Events:** a quiet real table.
- Gold used sparingly as the "dot" motif echoing the wordmark and sprout.

## Motion

Subtle scroll-reveal (opacity + small translate), ease-out-expo ~500ms, once. Respect
`prefers-reduced-motion`. Never animate layout properties.

## Bans (house)

No side-stripe accent borders, no gradient text, no glassmorphism, no hero-metric
template, no identical card grids, no modals, no em dashes.
