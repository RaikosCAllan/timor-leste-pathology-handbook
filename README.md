# Pathology Services Handbook — online edition

Laboratório Nacional de Saúde, Ministério da Saúde, Timor-Leste.

An online version of the Pathology Handbook, intended first for the hospital
intranet and later for public internet publication. Derived from
**Pathology Handbook v9.3 (working)**.

## Status

Template stage. The site is fully built and working; the Timor-Leste content
still has to be entered. Five real test entries are included as worked
examples. Everything still to be written is marked `[FILL IN]` and shows
highlighted in yellow on the page.

## Running it

Double-click `index.html`. No server, no build step, no internet connection
required.

## Editing it

All content lives in `data/`. Read **TEMPLATE_GUIDE.md** first — it explains
every field and the order to work through the files.

```
data/site.js          organisation, hours, contacts, footer
data/departments.js   department list
data/tests.js         the test directory
data/collection.js    order of draw and tube reference
data/request.js       requesting, acceptance and rejection criteria
data/appendices.js    the 17 appendices and references
```

To find outstanding work:

```bash
grep -rn "\[FILL IN" data/
```

## Features

- Searchable test directory — by test name, synonym, SchuyLab code, sample
  type, department, indication or disease association
- Filter by department and by CRITICAL / STAT / SEND-AWAY / PENDING status
- Expandable test cards showing all 15 handbook fields per test
- Direct links to a single test: `index.html#test-aptt`
- Cross-links from tests to the relevant appendices
- Order-of-draw and tube reference table with colour swatches
- Bilingual-ready: every field accepts `{ en: "...", tet: "..." }`
- Print stylesheet — the page prints cleanly with all cards expanded
- Works on phones and tablets

## Design reference

Structure follows the Vanuatu National Hospital laboratory services site
(`hl2026-vnh.github.io/vnh-laboratory-services`), adapted to the section
structure and field set of Timor-Leste Handbook v9.3.

## Publishing

**Intranet:** copy this folder to the intranet server's document root or a
shared drive.

**Internet:** the same folder publishes to GitHub Pages unchanged. Step-by-step
instructions are in **PUBLISHING.md**. See also TEMPLATE_GUIDE.md §8, on
reviewing internal contact details before making the site public.
