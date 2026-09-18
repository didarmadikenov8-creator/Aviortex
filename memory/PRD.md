# PRD — AVIORTEX Landing Page

## Original Problem Statement
Premium one-page website in Russian for AVIORTEX, a sewing production company (швейный цех) in Almaty, Kazakhstan. Serious B2B manufacturing feel, not an online shop. Sections: hero with 2 CTAs + trust indicators, 6 product cards, portfolio «Нам доверяют бизнесы» (CHOCOFOOD, MELOMAN, FREEDOM as completed-work examples only), process «Как сделать заказ» (5 steps), about, contacts (ул. Яссауи, 139, Алматы; WhatsApp +7 707 727 23 63; Instagram @aviortex.almaty), floating WhatsApp button. Design: black/white/warm light-gray premium industrial, strong typography, generous spacing, subtle animations, excellent mobile. No invented prices/discounts/production times/guarantees/facts.

## User Decisions (ask_human)
- «Рассчитать заказ» → order form (product type, quantity, name, phone) that sends via WhatsApp to +7 707 727 23 63
- Premium industrial B2B: mostly white/warm-gray, strong black typography, selective black sections
- Realistic photos for every service, no empty placeholders, fully functional WhatsApp buttons, all Russian, no invented facts

## Architecture
- React (CRA) SPA, single page, no router needed
- Tailwind custom theme (paper/ink/thread/wa colors; Unbounded display + Golos Text body + JetBrains Mono, all Cyrillic-capable)
- lenis smooth scrolling (anchors: true), framer-motion reveals/kinetic hero, mouse-spotlight product cards, editorial marquee
- No backend writes: order form composes wa.me deep link (no data storage, by design)
- Backend (FastAPI/Mongo template) untouched; landing is fully static client-side

## Implemented (2026-02-19…current session)
- Hero: masked line-by-line kinetic headline reveal, parallax B&W production photo + overlapping secondary photo, 2 CTAs, trust bar (15+ / 2000+ / KZ)
- Slow editorial marquee of 7 services
- Products: 6 bento cards with real photography + spotlight hover + «Запросить расчёт» (pre-fills form) + «Индивидуальный пошив» band
- Portfolio: client name rows (CHOCOFOOD/MELOMAN/FREEDOM) + 6-image branded-work gallery, wording limited to completed-work examples
- Process: dark section, 5 numbered steps (verbatim from brief)
- About: verbatim company copy + framed photo
- Contacts/footer: dark, 3 contact cards, giant outline AVIORTEX
- OrderForm modal: 7 product pills, qty, name, phone, comment → composed WhatsApp message (verified deep link)
- Floating WhatsApp button (ping animation), mobile menu overlay (fixed stacking-context bug fixed)
- Film-grain overlay, dashed-stitch motif, custom selection color

## Verified
- webpack compiles; desktop 1440 + mobile 390 screenshots; no horizontal overflow; modal flow + WhatsApp popup URL verified; mobile menu verified after fix
- Backend /api/ responds 200 (template untouched; no app API dependencies)

## Constraints Honored
- No prices, no invented facts/stats/guarantees; only brief-provided numbers (15+, 2000+)

## Backlog (P2)
- Instagram feed embed; photo upload in order form (needs object storage); multilingual (KZ/RU toggle); SEO meta/OG image refinement
