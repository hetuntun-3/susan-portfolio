# style-guide.md: Susan Su Portfolio

Version 1 · Oct 27, 2026

**Direction: "Editorial notebook."** The look borrows a researcher's field notebook (warm paper, typewriter labels, ruled lines) and the polish of a magazine (a confident serif, generous white space). It should feel professional enough for a hiring manager at a tech company, and personal enough that people remember it.

**Inspired by:** gracesportfolio.com (the reference Susan shared). We keep its structure: serif wordmark and nav, monospace labels, thin black rules, bordered project cards with a colored block offset behind them, bordered skill chips, polaroid photos, and boxed footer items. We change three things to make it Susan's: warmer paper, a serif with more character, and a sans body font so long case studies read easily.

---

## 1. Color

All text and background pairs below pass WCAG AA (ratios measured against Paper).

### Core
| Token | Hex | Use | Contrast on Paper |
|---|---|---|---|
| `--paper` | `#FAF8F4` | Page background (warm off-white) | — |
| `--surface` | `#FFFFFF` | Cards, tables, TL;DR box | — |
| `--ink` | `#141414` | Body text, headings, borders, rules | 17.4 : 1 |
| `--muted` | `#5B5853` | Secondary text, captions, mono subtitles | 6.7 : 1 |
| `--rule-soft` | `#D9D4CA` | Light dividers inside cards and tables (decorative only) | — |

### Accent: "Signal Orange"
Use it in only a few places: links, the primary CTA hover, the active nav underline, the "featured" highlight, and the one key number in a chart.

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#C2410C` | Links, highlights, key data point (4.9 : 1 on Paper; white text on it is 5.2 : 1) |
| `--accent-dark` | `#9A3412` | Link hover, pressed states |
| `--accent-tint` | `#FBE3D6` | Highlight background behind a stat or pull quote |

### Data color
| Token | Hex | Use |
|---|---|---|
| `--data` | `#1F3A93` | Secondary chart series, "Published" Lab badge text (9.5 : 1) |
| `--data-tint` | `#DCE3F7` | Background for Lab analytics cards |

### Project backing blocks (the colored block offset behind each card)
These are decorative and never carry text, except dark ink placed on top of them.
| Token | Hex | Project |
|---|---|---|
| `--block-insta360` | `#F2CF1D` | Insta360 (Ride Bold yellow) |
| `--block-dreame` | `#CDBEF2` | Dreame (lavender) |
| `--block-lab` | `#B9DCC8` | Lab cards (mint) |
| `--block-writing` | `#F4C7B5` | Writing cards (blush) |
| `--block-soon` | `#E4E0D8` | "Coming soon" card (stone) |

### Status
| Token | Hex | Use |
|---|---|---|
| `--status-progress-bg` | `#FDF0C4` | "In progress" badge background (ink text) |
| `--status-done-bg` | `#DCE3F7` | "Published" badge background (`--data` text) |

**Rules:** Use one accent per screen region. Never put accent text on a colored block. Don't use gradients.

---

## 2. Typography (Google Fonts)

| Role | Font | Weights | Why |
|---|---|---|---|
| Display: wordmark, nav, H1–H3, card titles | **Fraunces** | 600, 700 (opsz on, SOFT 50) | A warm serif with character. It reads as editorial and confident, and it's softer than Garamond. |
| Body: paragraphs, case studies | **IBM Plex Sans** | 400, 500, 600 | Clean and readable at length, and designed as a family with Plex Mono |
| Labels: chips, dates, tags, captions, nav subtitles, footer | **IBM Plex Mono** | 400, 500 | The "notebook and data" voice, and the link to the reference site |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,600..700,50&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
--font-display: 'Fraunces', Georgia, serif;
--font-body: 'IBM Plex Sans', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
```

### Type scale (desktop / mobile)
| Token | Font | Size | Line height | Weight | Use |
|---|---|---|---|---|---|
| `--t-hero` | Display | 64px / 40px | 1.05 | 650 | Home H1 only |
| `--t-h1` | Display | 48px / 34px | 1.1 | 650 | Page and case titles |
| `--t-h2` | Display | 32px / 26px | 1.2 | 600 | Case sections (Context, Approach…) |
| `--t-h3` | Display | 22px / 20px | 1.3 | 600 | Visual titles, card titles |
| `--t-lead` | Body | 20px / 18px | 1.55 | 400 | Intro paragraph under H1 |
| `--t-body` | Body | 17px / 16px | 1.65 | 400 | All paragraphs |
| `--t-small` | Body | 15px | 1.5 | 400 | Table cells, captions |
| `--t-label` | Mono | 14px / 13px | 1.4 | 400 | Chips, dates, tag lines, nav subtitles |
| `--t-micro` | Mono | 12px | 1.4 | 500, uppercase, letter-spacing 0.06em | Badges ("IN PROGRESS"), TL;DR row labels |
| `--t-nav` | Display | 20px / 18px | 1 | 600, lowercase | Top nav and wordmark |

**Rules:**
- Max text width is **68ch**.
- Headings get tight tracking (−0.01em). Mono stays at the default.
- **Bold the numbers.** In body copy, set key figures in weight 600 (`100 riders`, `8 creators`).
- Nav and wordmark are lowercase ("susan su · work · lab · about · resume"), like the reference. Headings stay in sentence case.
- "So what:" lines use Body 600 with the label "So what:" in `--accent`.

---

## 3. Spacing and layout

**Base unit: 8px.**
| Token | Value | Typical use |
|---|---|---|
| `--s-1` | 4px | Icon gaps |
| `--s-2` | 8px | Chip padding (vertical), tight stacks |
| `--s-3` | 12px | Chip padding (horizontal), label-to-title |
| `--s-4` | 16px | Paragraph spacing, card inner rows |
| `--s-5` | 24px | Card padding, grid gap (mobile) |
| `--s-6` | 32px | Grid gap (desktop), between visual and "So what" |
| `--s-7` | 48px | Between subsections |
| `--s-8` | 64px | Between page sections (mobile) |
| `--s-9` | 96px | Between page sections (desktop), hero padding |

**Grid and containers**
- Content container: max-width **1120px**, side padding 24px (mobile) and 48px (desktop).
- Reading column for case studies: max-width **720px**, centered. Tables and visuals may break out to 960px.
- Work grid: 3 columns ≥1024px, 2 columns ≥640px, 1 column below.
- Breakpoints: `640px`, `1024px`, `1280px`.

**Lines and corners**
- Rules: `1px solid var(--ink)` under the header and under each page title bar. Use `--rule-soft` inside components.
- Borders: `1.5px solid var(--ink)` on cards, buttons, chips, and the TL;DR box.
- Corner radius: **0** on cards, chips, and buttons, for the crisp notebook feel. The only exceptions are polaroids (2px) and badges (999px pill).

---

## 4. Components

### Header
- Height 72px. Wordmark "susan su" (display 22px, 700) on the left; nav on the right with 40px gaps.
- `1px` ink rule underneath.
- Active page: a 2px `--accent` underline offset 6px below the text.
- Mobile: wordmark plus a "menu" text button in mono, which opens a full-screen list in display 32px.

### Page title bar (used on every page except Home)
A full-width band between two `1px` ink rules, with 24px vertical padding. The page title in display 32px lowercase sits on the left (for example "work"), and a mono 14px `--muted` subtitle sits on the right (for example "case studies, newest first").

### Project card (Work and Home)
```
┌───────────────────────────┐   ← backing block (project color),
│ Summer 2026               │     offset 12px right / 12px down,
├───────────────────────────┤     sits behind the card
│ Insta360                  │   ← Fraunces 36px
├───────────────────────────┤
│        [cover image]      │   ← 4:3, object-fit cover
├───────────────────────────┤
│ Community event · rider   │   ← mono 14px
│ selection + launch decks  │
└───────────────────────────┘
```
- Surface `#FFFFFF`, border 1.5px ink, rows separated by 1px ink rules, row padding 16px 20px.
- **Backing block:** `box-shadow: 12px 12px 0 0 var(--block-insta360);` (or a pseudo-element with the same 1.5px ink border if Susan wants it outlined).
- **Hover/focus:** the card moves `translate(-4px, -4px)` and the block offset grows to 16px. Transition 180ms ease-out. The title gets an `--accent` underline.
- "Coming soon" variant: dashed 1.5px border, `--block-soon`, cover replaced by mono text, no hover lift, `aria-disabled="true"`.

### Buttons
| Variant | Default | Hover / focus |
|---|---|---|
| **Primary** ("See my work", "Email me") | Background `--ink`, text `--paper`, Plex Sans 600 16px, padding 14px 24px, border 1.5px ink | Background `--accent`, border `--accent`, plus a 4px 4px offset block in `--ink` |
| **Secondary** ("Resume", "LinkedIn") | Transparent, text `--ink`, border 1.5px ink | Background `--accent-tint`, plus a 4px 4px offset block in `--ink` |
| **Text link** | `--accent`, underline 1px, offset 3px | `--accent-dark`, underline 2px |

- Every button has a **focus ring**: `outline: 2px solid var(--accent); outline-offset: 3px;`
- Min height 44px for tap targets.
- The offset-block hover echoes the cards and the reference site's footer box.

### Chips (tools, skills)
- Mono 14px, padding 8px 12px, border 1.5px ink, background `--surface`, 8px gap, wraps.
- **"Currently learning" chips:** a dashed 1.5px border plus a small "↗" after the label. A legend line in muted mono reads "solid = used in work · dashed = learning now."
- Chips are not clickable. Don't add hover states.

### Status badges (Lab cards)
- Pill shape, mono 12px uppercase 500, letter-spacing 0.06em, padding 4px 10px.
- In progress: background `--status-progress-bg`, ink text, with a "●" in `#B45309`.
- Published: background `--status-done-bg`, `--data` text.

### TL;DR card (top of every case study)
- Surface white, border 1.5px ink, offset block 8px 8px in the project's color.
- A 2-column table: left column mono 12px uppercase `--muted` labels (ROLE, TIMELINE, TOOLS, MY OUTPUT, RESULT); right column body 16px. Rows are divided by `--rule-soft`.
- Bold the key numbers in "My output" and "Result."

### Tables (case-study visuals)
- Full width of the breakout column (≤960px), surface white, 1.5px ink outer border.
- Header row: mono 13px uppercase, background `--paper`, 1px ink bottom rule.
- Body: Plex Sans 15px, padding 12px 16px, `--rule-soft` row dividers.
- Mobile: scroll horizontally inside a wrapper that has a right-edge fade. Never shrink the text.

### Phase cards (Dreame Visual 2)
- 4 equal cards in a row with 24px gaps and a mono "→" between them (stacked with a "↓" on mobile).
- Each card has the phase label (mono 12px uppercase muted, above), concept name (display 20px), format (mono 14px muted), a soft rule, then the job (body 16px).
- The 4th card (Conversion) has a 2px `--accent` border and an `--accent-tint` background.

### Funnel (Insta360 Visual 1)
- Horizontal steps. Each step is a bordered box, and each box is narrower than the one before it.
- The last two steps (100 selected and 10 stories) use the display font at 28px with an ink fill and paper text.

### "So what" callout
- Left border 3px `--accent`, padding-left 16px, Plex Sans 17px.
- The label "So what:" in 600 `--accent`.

### Pull quote / stat highlight
- Background `--accent-tint`, display 28px, padding 24px 32px, no border. Use at most once per page.

### Polaroids (About)
- White frame: padding 12px 12px 40px, radius 2px, `box-shadow: 0 6px 18px rgba(20,20,20,.12)`.
- Random tilt between −2° and 2°, set by inline style per photo so it stays the same on every load.
- Caption in mono 13px inside the bottom margin.

### Timeline (About › My path)
- A vertical 1.5px ink line on the left with a 10px ink dot per item; Columbia's dot is in `--accent`.
- Year in mono 14px, place in display 20px, "what it added" in body 16px.

### Footer
- Three bordered boxes in a row, separated by space, like the reference: `© 2026 Susan Su` · `contact: shansuSS@outlook.com` · `built with Claude`.
- The middle (contact) box gets a 6px 6px offset block in `--accent`, the one playful touch at the bottom of every page.
- Mono 14px, padding 12px 16px.

---

## 5. Imagery

- **Photos:** natural light, warm tones, real moments. No stock photos and no AI-generated people.
- **Case covers:** real work, such as a deck slide, an event photo, or a concept mockup. Each sits inside the card with a 1px ink rule above it. Label concepts that didn't ship "Concept, not launched" in a mono caption.
- **Illustration (optional):** if Susan wants an illustrated portrait like the reference, commission or draw an original one in single-weight ink line with one fill in `--accent`. Never copy the reference's drawing.
- **Charts:** paper background, ink axes at 1px, `--data` for the main series, `--accent` only for the one point the "So what" is about, and mono 12px axis labels.

---

## 6. Motion

- Use motion only on hover and focus, plus one fade-up (12px, 300ms) for sections as they enter the viewport.
- Wrap all motion in `@media (prefers-reduced-motion: no-preference)`.
- No parallax, no auto-playing carousels, no cursor effects.

---

## 7. Voice in the interface

- Nav and labels are lowercase and short ("work", "lab", "about", "resume").
- Mono subtitles can be a little playful ("where I test what I'm learning", "a little more about me").
- Headlines are specific and lead with a number or a finding, never a buzzword.

---

## 8. CSS starter tokens

```css
:root {
  --paper: #FAF8F4; --surface: #FFFFFF; --ink: #141414; --muted: #5B5853; --rule-soft: #D9D4CA;
  --accent: #C2410C; --accent-dark: #9A3412; --accent-tint: #FBE3D6;
  --data: #1F3A93; --data-tint: #DCE3F7;
  --block-insta360: #F2CF1D; --block-dreame: #CDBEF2; --block-lab: #B9DCC8; --block-writing: #F4C7B5; --block-soon: #E4E0D8;
  --status-progress-bg: #FDF0C4; --status-done-bg: #DCE3F7;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
  --border: 1.5px solid var(--ink);
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
  --container: 1120px; --reading: 720px; --breakout: 960px;
}
body { background: var(--paper); color: var(--ink); font: 400 17px/1.65 var(--font-body); }
h1, h2, h3, .wordmark, nav a { font-family: var(--font-display); font-variation-settings: 'SOFT' 50; }
.label, .chip, .tag, time, footer { font-family: var(--font-mono); }
a { color: var(--accent); text-underline-offset: 3px; }
a:hover { color: var(--accent-dark); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```
