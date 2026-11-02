# Shift AI Tech site: design notes

Checked against `~/.claude/UI_RULES.md`. This file wins over the rulebook where they differ.

The rest of the site has its own studio design (Instrument Serif, Inter, Lenis smooth scroll, dark only), which this rulebook bans in places. That is a known gap for a later pass. The notes below cover `/refer` only.

## /refer: Refer a business and earn

Asked for by Darren Bishop on 2 Nov 2026 after seeing an Optical Express "Refer a friend and earn" poster in a doctors' waiting room. He wants one link he can send after explaining the idea at the gym or anywhere else, so people can read the basics themselves.

### 1. Truth
- **For:** someone Darren has just met who knows a business owner. Not a trained sales partner. Probably reading on a phone.
- **One job:** in under a minute, show what Shift builds and what the reader gets paid, then take the business's name.
- **Only Shift has:** a printed catalogue of 25 real builds with codes (W01, C04...), the owners' own complaints that point to each section ("My website's old and I never get anything from it"), and fixed terms: 10% of the project, 10% of every monthly fee for the life of the client, paid within 7 days of the client paying.

### 2. Default, now banned
A purple-gradient "Refer & Earn" hero with stock smiling people, a pill badge, three icon cards (Refer, We build, You earn), a "Most popular" reward tier table, testimonials, an FAQ accordion and a CTA band. Fade-up on every block.

### 3. Sources
- **Client world:** the Shift sales catalogue (`shift-sales-brief`): white paper, Archivo at narrow widths, Martian Mono for codes, one purple spot. The partner programme sheet's terms.
- **Outside web design:** a rate card pinned to a noticeboard (one price per line, the figure big, the condition small beside it) and the referral poster itself: a big claim, two sentences, one way to act.

### 4. Zwicky box
| Axis | Options |
|---|---|
| Layout | card grid · long form · **one document: rate card, worked sum, index, form** · two-column poster · stepper |
| Type | site fonts · **Archivo two widths + Martian Mono (Shift print family)** · all mono · serif + sans |
| Colour | dark + gradient · **monochrome + one spot (Shift purple, figures only)** · duotone · colour per section |
| Material | glass · **hairline rules, paper** · newsprint · kraft |
| Signature | none · **the rate card that becomes the calculator** · progress bar · confetti |

### 5. Directions (rough typicality)
1. Gradient hero, three reward cards (0.6). Default. Cut.
2. Copy of the poster: big outlined type, photo of two friends (0.3). Stock people, outlined type fails contrast. Cut.
3. Rate card with a live sum and the catalogue index (0.1).
4. Chat-style walkthrough, "Darren explains" (0.1): gimmick, slow to scan.
5. One giant number "10%" filling the screen (0.2): fails the hero rule, says nothing about what is built.
6. Printable A4 sheet as the page (0.08): good for print, cramped on a phone.
7. Step-by-step wizard (0.15): hides the terms behind clicks.
8. Plain memo with no figures (0.05): fails the job.

### 6 and 7. Denial and choice
SCAMPER "combine": the rate card and the calculator are one object. The card states the terms; type a price into it and the same lines show pounds. Chosen: direction 3.

### 8. Concept sentence
It feels like a rate card pinned on a wall because that is how Darren uses it: point at the number, let them work out their own sum, take a name.

### 9. System
- **Fonts:** Archivo Variable (OFL, self-hosted via Fontsource): headings at wdth 68 weight 800, body at wdth 100. Martian Mono (OFL, self-hosted) for codes, figures in the sum and the small print labels. Same family as the Shift catalogue and flyer, so the page and the PDF it links to match.
- **Colour:** monochrome plus one spot, scoped to `.refer`.
  - `--r-ink #17151c` Shift flyer near-black, tinted to the brand purple.
  - `--r-ink-2 #4a4652` Shift flyer secondary text.
  - `--r-rule #d9d6de` Shift flyer hairlines.
  - `--r-spot #6d28d9` Shift brand purple (the logo). Used only on the earnings figures, the catalogue codes and the primary button. Purple is a section 3 ban; the reason it stays is that it is the client's existing mark and the catalogue already uses it as the one spot.
  - Dark theme (the site is now dark only): ink and rules inverted at the same hue, spot lifted to `#c9b6f8` so it passes on the dark base.
- **Radius:** 0 on rules and the card, 2px on inputs and buttons.
- **Signature component:** the rate card. Two lines (10% of the project, 10% of each month) with the figure set big in spot ink; the calculator inputs sit inside the card and rewrite the figures as pounds.
- **Motion:** none. Inputs update the sum instantly. Hover and press change colour only.

### 10. Critique
- Swap test: another agency's referral page would not have catalogue codes, owner quotes and the exact Shift terms. Passes.
- Removed: a testimonials block (no real referrers yet), a "why refer" icon grid, an FAQ accordion (terms are visible as text instead).

### 11. Previous builds
Recent workspace builds: Carter's (one type family, calm motion), DavisGT Engineering, Sam's Pet Services. None use Archivo + Martian Mono on the web; this matches Shift's own print family on purpose.

### Confirm with Darren and Jack
- Commission terms are copied from the partner programme sheet (June 2026): 10% project, 10% recurring monthly, uncapped, paid within 7 days. Confirm they apply to one-off referrers too.
- "We'll be in touch within one working day" on the confirmation screen: confirm someone can keep that promise.
- The linked PDF is the sales partner catalogue (compressed to about 2 MB). It includes the "Sell to" lines and house rules meant for partners.
