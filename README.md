# Pathology Services Handbook — online edition

> ## ⚠ WORKING DRAFT — NOT FOR CLINICAL USE
>
> **This is a development copy. It is not an approved publication of the
> Ministry of Health, Timor-Leste, and it has not been endorsed by the
> Laboratório Nacional de Saúde.**
>
> Do not use it for clinical decisions. Content is incomplete and unverified:
> reference ranges, critical values and specimen requirements are still being
> entered and have not been checked by a qualified scientist.
>
> **The authoritative source for any reference range or result is the
> SchuyLab report.** For anything urgent, telephone the laboratory.
>
> This repository is maintained in a personal GitHub account pending a
> decision on institutional custody — see *Custodianship* below. Its presence
> here does not imply Ministry endorsement.

For: Laboratório Nacional de Saúde, Ministério da Saúde, Timor-Leste.
Derived from **Pathology Handbook v9.3 (working)**.

An online version of the Pathology Handbook, intended first for the hospital
intranet and later, if approved, for public internet publication.

## Status

**Working draft — content entry in progress.**

| | |
|---|---|
| Site build | Complete and working |
| Content | 5 of ~130 tests entered; appendices outstanding |
| Clinical verification | **Not started** |
| Approved for clinical use | **No** |
| Approved for publication | **No** |

Everything still to be written is marked `[FILL IN]` and renders highlighted
in yellow on the page, so an unfinished entry cannot be mistaken for a
verified one.

### Before this banner can be removed

1. Every `[FILL IN]` resolved — `grep -rn "\[FILL IN" data/` returns nothing
2. Every clinical value verified by a qualified scientist, with `lastReviewed`
   set on each test
3. Tests flagged `"critical"` reconciled against the Appendix 4 alert list
4. Written sign-off from the Ministry of Health / Laboratório Nacional de Saúde
5. Governance fields completed in `data/site.js`

## Custodianship

| | |
|---|---|
| Maintainer | [FILL IN — name, role] |
| Second maintainer | [FILL IN — name, role] |
| Intended custodian | Laboratório Nacional de Saúde, Ministério da Saúde |
| Content copyright | Ministry of Health, Timor-Leste |
| Content licence | Not yet decided — pending Ministry direction |

This repository currently sits in a personal GitHub account because the
maintainer does not hold authority to create an account on the Ministry's
behalf. That is a temporary arrangement, not a claim of ownership.

**At least two people should have administrative access at all times**, so
that the handbook does not depend on one individual remaining reachable.

When the Ministry is ready to take custody, GitHub's *Settings → Transfer
ownership* moves this repository to an organisation account while preserving
all commits, issues and history, and leaves redirects so existing links keep
working. Nothing needs to be rebuilt.

The site engine is maintained separately in `pathology-handbook-template`
(MIT licensed). Only the content in `data/` is Ministry material.

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

**Do not publish the content-filled version publicly until the checklist under
*Status* is complete and the Ministry has signed off.** A public site carrying
real critical values reads as an official publication whether or not it says
so.
