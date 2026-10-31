# Formación y aprendizaje — approved design QA

final result: passed

## Target and evidence

- Source visual truth: `C:/Users/danie/AppData/Local/Temp/codex-clipboard-b41c44b1-0df9-4403-bfa8-e80959e4c9fb.png` (the user's exact selected attachment, original option 1, not the later AI-focused copy revision).
- Implementation: `http://localhost:3000/#goals`, existing Next.js portfolio.
- Artifacts directory: `C:/Users/danie/.codex/visualizations/2026/10/17/01a14b90-d37e-79c3-843b-d06d71034b4f/learning-redesign/`.
- Reference copy: `reference.png`.
- Browser-rendered implementation: `desktop-final.png`.
- Full-view comparison: `comparison-final.png`, source on left and implementation on right in a single image.
- Focused comparisons: `comparison-credentials.png` and `comparison-topics.png`, source above implementation. These check logo scale, credential alignment, fonts, topic numbering, icons and body wrapping.
- Reference and implementation both 1738 × 905 pixels. Browser CSS viewport 1738 × 905, devicePixelRatio 1; no density scaling. The existing 6px scrollbar leaves 1732px document width.
- State: Spanish, dark site theme with its existing cream editorial section, Aprendizaje navigation selected, all four learning topics visible. Existing navigation is retained at 88px versus approximately 76px in the generated reference.
- Responsive evidence: `mobile-top.png` and `mobile-topics.png` at 390 × 844 CSS pixels; `tablet.png` at 834 × 1194. Both devicePixelRatio 1.

## Findings and comparison history

1. First comparison (`comparison-first.png`, `desktop-first.png`) was blocked by a P2 vertical-density mismatch: the academic row and university link consumed too much space, pushing the closing statement below the reference viewport. The official logo also looked smaller because its source bitmap includes transparent padding.
2. Adjusted the academic row, university link height, optical logo sizing, section padding and vertical gaps. Intermediate evidence: `desktop-adjusted.png`. The statement was then visible but the section still extended below the viewport.
3. Reduced remaining section padding and topic/statement gaps. Post-fix evidence: `desktop-final.png` and the three final comparison images above. The section now measures 817px tall at the reference viewport, from approximately y=88 to y=905, with all four descriptions and the statement visible. No actionable P0/P1/P2 mismatch remains.

## Required fidelity surfaces

- **Fonts and typography:** Existing local Fraunces for editorial headings, degree and statement; DM Sans for descriptions and UI. Main heading 64px, degree 46px and learning heading 48px at the reference width. Body is 17–20px desktop and 16px mobile. All text wraps naturally without truncation. Minor generated-font glyph/weight differences are accepted; no replacement font was added.
- **Spacing and layout rhythm:** Matches the horizontal academic credential band, open two-column/two-row topic grid, thin separators and final statement. Container is 1480px including gutters. Number columns, icons and text align consistently. Tablet preserves a two-column topic layout with stacked credential metadata; mobile uses one topic column. Content can grow vertically on smaller screens without a nested scroll area or fixed-height clipping.
- **Colors and tokens:** Uses existing cream #f3f0e8, ink #171c1e and copper #8b532f editorial tokens. The same editorial surface remains legible in either site theme. Existing navbar and floating WhatsApp treatment are retained.
- **Image quality and asset fidelity:** Reuses the actual supplied UPC PNG and existing brand mark. No generated or hand-drawn logo replacement. Uses matching Lucide Boxes, Cloud, Monitor, BrainCircuit, GraduationCap, Award and ExternalLink library icons. The reference's medal-star glyph differs slightly from the available Award glyph; accepted P3. The supplied small UPC raster is optically scaled to match the visible mark; its original resolution remains the quality limit.
- **Copy and content:** Existing Spanish and English locale content is preserved verbatim, including UPC, eighth semester, academic performance and the original four learning descriptions. No claims or AI-focused replacement copy from the unselected revision were introduced. No new certifications, metrics or qualifications.

## Browser and functional checks

- Desktop Aprendizaje button navigates to the existing section; Enter activation checked.
- Mobile menu opens, Aprendizaje selection closes it and navigates to the section.
- Exactly four semantic list items, each with a heading and readable description; removed accordion affordances because content is always shown.
- University link retains `https://www.upc.edu.pe/`, a new tab and `noopener noreferrer`.
- Logo loaded successfully in the browser.
- Spanish/English toggle displays the existing translations; no horizontal overflow in English.
- Desktop, tablet and mobile document widths checked: no horizontal overflow.
- Mobile PageDown and PageUp permit reading and returning within the long section; no nested scroll container introduced.
- Light theme checked: editorial background rgb(243, 240, 232), foreground rgb(23, 28, 30).
- Existing root smooth scrolling and y mandatory snap remain active; global navigation/scroll code was not changed.
- Browser warning/error log check: empty.
- Scoped ESLint for Goals.tsx passed; `git diff --check` passed.
- Production `npm run build -- --webpack` passed, including TypeScript and static route generation.

## Open questions and follow-up polish

- None blocking. The generated reference's subtle paper raster variation and exact serif/icon rasterization are not reproduced as image textures; existing clean site tokens and real library assets are retained.
- Small-height desktop and long translated content may naturally extend vertically; no content is hidden to force a single viewport. Browser zoom and OS reduced-motion emulation were not separately tested. No new animation was added, and existing global reduced-motion behavior is unchanged.

## Implementation checklist

- [x] Preserve the selected layout and original content.
- [x] Reuse supplied brand assets and library icons.
- [x] Compare full view and focused regions, then fix viewport density.
- [x] Verify desktop, tablet, mobile, keyboard navigation, translation and themes.
- [x] Pass lint, production build and console checks.
- [x] Keep the local preview running for review.
