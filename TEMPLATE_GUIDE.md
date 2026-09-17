# Fill-in guide — Pathology Services Handbook (online)

This folder is a working template. The website is already built; what remains
is to put the Timor-Leste content into the files in `data/`. **You never need
to touch the HTML, CSS or JavaScript.**

---

## 1. How to open it

Double-click `index.html`. It opens in any browser and works with no server,
no internet and no build step. Everything — search, filters, all sections —
runs locally.

That is deliberate: the same folder can be copied onto the hospital intranet
share, served by an intranet web server, or pushed to GitHub Pages later
without changing a single file.

---

## 2. What to edit, and in what order

Work through the files in `data/` in this order. Each file has comments at the
top explaining its own rules.

| Order | File | What it controls |
|---|---|---|
| 1 | `data/site.js` | Organisation name, logo, vision, mission, laboratory hours, contacts, footer version details |
| 2 | `data/departments.js` | The department list — must be done before tests, because tests reference department ids |
| 3 | `data/collection.js` | Order of draw and the tube reference table |
| 4 | `data/request.js` | How to request a test, request forms, acceptance and rejection criteria |
| 5 | `data/appendices.js` | The 17 appendices and the reference list |
| 6 | `data/tests.js` | **The test directory — the largest job** |

After every save, refresh the browser. If something disappears, you almost
certainly have a syntax error — see §6.

---

## 3. Anything marked `[FILL IN]`

Placeholders are deliberately visible on the page, highlighted in yellow, so
nothing gets published half-finished. Search the whole `data/` folder for
`[FILL IN` to see everything outstanding:

```
grep -rn "\[FILL IN" data/
```

Leave the placeholder line in place until you have the real content. Do not
delete the line — delete only the placeholder text.

---

## 4. The test entry — field by field

Every test in `data/tests.js` uses the same fields, which map one-to-one onto
the fields in Handbook v9.3.

| Field | Handbook v9.3 heading | Notes |
|---|---|---|
| `id` | — | Lowercase, hyphens, unique. Used for the direct link `index.html#test-aptt` |
| `name` | the test heading | Full name as it appears on the report |
| `synonyms` | **Synonyms** | Array. These are searchable, so include abbreviations clinicians actually type |
| `department` | **Department** | Must match an `id` in `departments.js` |
| `schuylabCode` | **SchuyLab Code** | Searchable |
| `flags` | — | Badges. `"critical"`, `"stat"`, `"send-away"`, `"pending"` |
| `summary` | — | New field. One line shown in search results before the card is opened |
| `description` | **Test Description** | Full paragraph |
| `indications` | **Clinical Use / Indications** | Array |
| `referenceRange` | **Reference Range** | String, or array if there are several |
| `analyticalLimitations` | **Analytical Limitations** | Array |
| `sampleType` | — | New field, e.g. `"Serum"`, `"EDTA whole blood"`. Powers the sample-type search |
| `containerColour` | — | Should match a tube `colour` in `collection.js` |
| `sampleRequirements` | **Sample Requirements** | Volume and tube |
| `storageTransport` | **Storage / Transport** | |
| `rejection` | **Rejection** | Usually a cross-reference to Appendix 7 |
| `methodology` | **Methodology** | |
| `turnaround` | **Turnaround Time** | Split into `{ routine, urgent }` — shown on the right of each card |
| `criticalAlert` | **Critical / Alert** | If this test has a real critical value, also add `"critical"` to `flags` |
| `diseaseAssociations` | **Disease Associations** | Array |
| `organismsReported` | **Organisms Reported** | Microbiology only — grouped list. Set to `null` otherwise |
| `conversionFactors` | **Conversion Factors** | |
| `appendixRefs` | — | Array of appendix ids, e.g. `["appendix-7"]`. Renders as "See also" links |
| `lastReviewed` | — | Governance field. Recommended for accreditation |

### Adding a test — two ways

**With the entry form (easier).** Open `tools/entry-form.html` in a browser.
It loads your real departments, tubes and appendices, so the department is a
dropdown rather than a string you can mistype. Fill it in, press *Add to
queue*, repeat, then *Export tests.js* and replace `data/tests.js` with the
downloaded file.

It removes the three things that go wrong when typing by hand: comma errors,
forgotten fields, and curly quotes pasted out of Word. It also refuses an id
that is already used.

Two things to know. It cannot save to disk — no static page can — so it
writes a file for you to put in place. And exporting rewrites the whole
file, so any hand-written comments inside `data/tests.js` are replaced by a
standard header. Keep notes in commit messages rather than in the file.

**By hand.** Equally valid, and reading each entry as you type it is itself a
form of checking:

1. Open `data/tests.js`.
2. Scroll to the bottom, to the block marked **BLANK TEMPLATE**.
3. Copy everything between the dashed lines (it already starts with a comma).
4. Paste it **above** that comment block.
5. Fill it in. Save. Refresh.

The five entries already in the file are real content from v9.3, one from each
major department — use them as your reference for tone and level of detail:

- **ABO Group and RhD Typing** — blood bank, complete
- **APTT** — coagulation, complete
- **Full Blood Count** — a panel that points at its component tests
- **Blood Culture** — microbiology, shows the `organismsReported` structure
- **Alanine Transaminase (ALT)** — deliberately left mostly blank, as a
  practice entry to fill in

---

## 5. Writing values — three forms

Any text field accepts three shapes:

```js
// 1. A single line
methodology: "Column agglutination (gel card) or tube method",

// 2. A list — renders as bullet points
indications: [
  "Pre-transfusion testing",
  "Antenatal screening"
],

// 3. Bilingual — for when Tetun content is ready
name: { en: "Full Blood Count", tet: "Kontajen Saan Tomak" },
```

The third form works on **every** text field in every data file. Nothing needs
restructuring when translation starts.

### Turning on Tetun

1. Add `tet:` values to the fields you have translated.
2. In `data/site.js`, set `showLanguageToggle: true`.

A language button appears in the header. Any field without a `tet:` value falls
back to English automatically, so you can translate gradually rather than all
at once.

---

## 6. If the page goes blank

That means a JavaScript syntax error in one of the `data/` files. The three
common causes, in order of frequency:

1. **A missing comma** between two entries, or after a field.
2. **A stray comma** after the *last* item in a list or object.
3. **An unescaped double quote** inside text — write `\"` or use single quotes
   around the whole string.

To find it: open the browser, press **F12** (or right-click → Inspect) and look
at the **Console** tab. It names the file and the line number.

Because the data files are plain JavaScript, a text editor with syntax
highlighting (VS Code, Sublime, even TextEdit in plain-text mode) will show
most of these mistakes before you save.

---

## 7. Images, logos and PDFs

| What | Where to put it | Where to point at it |
|---|---|---|
| Organisation crest / logo | `assets/img/logo.png` | `site.js` → `logo` |
| Tube photographs | `assets/img/tubes/` | `collection.js` → each tube's `image` |
| Algorithm diagrams | `assets/img/` | `appendices.js` → an `image` block |
| Request forms (PDF) | `assets/downloads/` | `request.js` → each form's `file` |
| Full handbook (PDF) | `assets/downloads/` | `site.js` → `handbookPdf` |

Use relative paths with forward slashes, e.g. `assets/img/tubes/edta.png`.
Keep images under about 200 KB each — the site is intended to load quickly on
slow hospital connections.

---

## 8. Publishing

### Stage 1 — intranet

Copy the whole `pathology_handbook_web` folder to the intranet web server's
document root, or to a shared drive that ward computers can reach. No
installation, no database, no PHP. If it is on a shared drive, staff open
`index.html` directly.

### Stage 2 — internet

The same folder publishes to GitHub Pages unchanged:

```bash
cd pathology_handbook_web
git init
git add .
git commit -m "Initial pathology handbook site"
git branch -M main
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Source: main branch / root**.

Before publishing publicly, check that no internal telephone extensions,
staff names or intranet addresses in `site.js` should stay internal. It is
reasonable to keep two copies of `site.js` — one intranet, one public.

---

## 9. Governance

Because this replaces a controlled document, keep the version fields in
`site.js` current: `sourceDocument`, `lastReviewed`, `nextReview`,
`documentOwner`. They appear in the page footer.

Per-test `lastReviewed` dates let you show an auditor when each entry was last
checked, which the Word document could not do.

---

## 10. Folder map

```
pathology_handbook_web/
├── index.html              the page — do not edit
├── TEMPLATE_GUIDE.md       this file
├── README.md               short orientation for new developers
├── assets/
│   ├── css/style.css       colours are in the :root block at the top
│   ├── js/app.js           application code — do not edit
│   ├── img/                logos, tube photos, diagrams
│   └── downloads/          PDFs
└── data/                   ◄── EVERYTHING YOU FILL IN IS HERE
    ├── site.js
    ├── departments.js
    ├── tests.js
    ├── collection.js
    ├── request.js
    └── appendices.js
```
