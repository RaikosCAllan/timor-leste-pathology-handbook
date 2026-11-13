# Style guide — test descriptions

The Test Directory was written across many sessions and imports, so the same
kind of information is worded differently from one entry to the next. This
guide sets one house style. It covers the **description** and **summary** of
every test, plus a few conventions that apply to every field.

Use it with the checker, which finds every entry that breaks a rule:

```
node tools/check-data.js                    # counts per rule
node tools/check-data.js --style            # full work list, by department
node tools/check-data.js --style=serology   # one department only
```

Each section below shows its rule code (**S1–S8**). The checker reports the
same codes. Style findings never fail a release; they are a work list.

---

## 1. Why this matters

- Clinicians read the description to decide **whether this is the right test**.
  The same pattern in every entry lets them find the answer quickly.
- A test card shows the summary at the top and the description underneath.
  Repetition between them is visible on screen.
- Short, regular sentences translate into Tetun faster and more reliably.
  **Standardise the English before translation starts.**

---

## 2. The description pattern — S1, S2

One paragraph, two or three sentences, **60 words or fewer** (the checker
warns above 80 and below 12).

| Sentence | What it says | Required? |
|---|---|---|
| 1. **What** | Opening verb (§3) + what is measured, detected or examined | Yes |
| 2. **Why** | What the result reflects, or what it helps to diagnose or monitor | Yes |
| 3. **Scope** | What is included in, or excluded from, the test | Only if needed |

Write the description as **one string**, not a list of paragraphs. A list
(`description: [ "...", "..." ]`) renders as separate paragraphs and is how
most of the long entries grew.

- Present tense, third person. No "we", "you", "this test" or "the test".
- One idea per sentence. Prefer two short sentences to one long one.
- Write "or" or "and", not "and/or".

---

## 3. The opening verb — S3

The first word tells the reader what kind of test this is. Use **only** these
openings:

| Test type | Opening | Example |
|---|---|---|
| Quantitative chemistry, haematology, coagulation | **Measures** | Measures albumin, the major plasma protein… |
| Viral load, quantitative molecular | **Quantifies** | Quantifies HIV ribonucleic acid (RNA) in plasma… |
| Antigen, antibody, qualitative molecular, rapid tests | **Detects** | Detects hepatitis B surface antigen (HBsAg)… |
| Blood group, typing | **Determines** | Determines the ABO blood group and RhD type… |
| Organism identification | **Identifies** | Identifies… |
| Calculated results (INR, eGFR) | **Calculates** | Calculates the international normalised ratio (INR) from… |
| Multi-parameter assessment (semen analysis, urine dipstick) | **Assesses** | Assesses urine for blood, protein, glucose… |
| Screening tests | **Screens for** | Screens for… |
| M C & S (microscopy, culture and sensitivity) | **Microscopy, culture and susceptibility testing of** | Microscopy, culture and susceptibility testing of sputum… |
| Microscopy only | **Microscopic examination of** | Microscopic examination of urine for… |
| Panels | **A panel of** | A panel of haemoglobin, red cell, white cell and platelet measurements… |

Do **not** open with:

- the analyte as the subject, e.g. "Ferritin is…" or "Enzyme predominantly found in…";
- the method, e.g. "Qualitative rapid…", "Automated nucleic acid amplification…" or "Clotting assay…";
- a noun phrase, e.g. "Measurement of…", "Assessment of…" or "Investigation of…".

---

## 4. What stays out of the description — S4

Every one of these has its own field on the card. Put it there instead.

| If the description mentions… | Move it to |
|---|---|
| Analyser, kit, brand, assay principle (immunoassay, lateral-flow, fluorescence, flocculation, "performed using/on") | `methodology` |
| Tube, additive, volume, how to collect | `sampleRequirements` |
| Reference ranges or normal values | `referenceRange` |
| Turnaround times | `turnaround` |
| Who should be tested, when to request | `indications` |
| Limitations, interferences | `analyticalLimitations` |

A **scope sentence** is allowed: "Mycobacterial culture requires a separate
request." It tells the clinician what the test does not cover.

The technique may appear when it is part of the test's name (for example
"…by RT-PCR" for *Dengue Virus Serotyping RT-PCR*). Keep it to a word or two.

---

## 5. The summary — S5

The summary is the one line shown in search results and at the top of the
card.

- **15 words or fewer.**
- **Ends with a full stop.**
- **Does not copy the description.** Say what the test is *for*, in the words
  a clinician would use.

| Avoid | Prefer |
|---|---|
| Qualitative detection of dengue virus ribonucleic acid (RNA). | Confirms dengue infection and identifies the serotype. |
| Detects rubella-specific IgG and/or IgM antibodies. | Rubella immunity status, or evidence of recent infection. |

---

## 6. Language — S6, S8

**Spelling: UK English throughout.** The checker looks for common US forms
in every field:

| Use | Not |
|---|---|
| haemoglobin, haematology, haemolysis | hemoglobin, hematology, hemolysis |
| anaemia, leukaemia, ischaemia, lipaemia | anemia, leukemia, ischemia, lipemia |
| oedema, oesophageal, oestrogen | edema, esophageal, estrogen |
| colour, centre, fibre, tumour, litre | color, center, fiber, tumor, liter |
| analyse, analyser, paediatric | analyze, analyzer, pediatric |
| gonadotrophin | gonadotropin |

**Abbreviations.** Write the term in full at first use in the description,
with the abbreviation in brackets: "immunoglobulin M (IgM)". After that the
abbreviation alone is fine anywhere in the same entry. Appendix 3:
Abbreviations and Definitions is the master list. (The checker cannot test
this one. Read for it.)

**Units.** SI units with a space before the unit: `5.0 mmol/L`, `120 g/L`,
`×10⁹/L`. Keep the unit's exact form: `mmol/L`, not `mmol/l` or `mM`.

**Organisms.** Full name at first use (*Staphylococcus aureus*), then
abbreviated (*S. aureus*).

**Tidy text (S8).**

- No double spaces.
- No curly quotes pasted from Word.
- No paragraph that stops mid-sentence. This comes from imports, e.g. the
  Chloride entry, which breaks after "maintaining proper body".

---

## 7. Appendix references — S7

Always cite an appendix by its **number and full title**, exactly as the title
appears in `data/appendices.js`:

> See Appendix 7: Sample Rejection Criteria (All Departments).

- One appendix per citation. Write "Appendix 4: … and Appendix 5: …", never
  "Appendices 4 and 5".
- Never abbreviate or reword a title.
- `data/appendices.js` is the single source of truth. To rename an appendix,
  change it there, then run:

```
node tools/fix-appendix-refs.js          # preview
node tools/fix-appendix-refs.js --apply  # rewrite every reference
```

The tool leaves alone any reference whose title looks like a different
appendix and lists it for a person to decide. In that case the number itself
may be the mistake.

---

## 8. Panels — the Components table

A panel (for example *Full Blood Count*) has a short description of the
panel as a whole, and a **Components** table underneath it. The table has one
row per component: Component, Code, Unit, What it shows. On a phone each row
stacks into a small block. Searching for a component's name or code (e.g.
"MCV") finds the panel.

**In Word**, keep writing each component as its own paragraph inside the
Test Description, in exactly this form:

> Haemoglobin (Hb) — code HGB, unit g/L: Concentration of haemoglobin, the
> oxygen-carrying protein in red blood cells. Identifies anaemia or raised
> haemoglobin.

That is: name, then a dash, then `code`, then a comma and `unit`, then a
colon and the explanation. `import-docx.js` turns these paragraphs into table
rows, and `sync-check.js` compares the table with them. A component
paragraph written any other way stays in the description as plain text.

**On the website**, the data looks like this (`tools/entry-form.html` also
has a Components box: one line per component, `name | code | unit | what it shows`):

```js
components: [
  { name: "Haemoglobin (Hb)", code: "HGB", unit: "g/L",
    about: "Concentration of haemoglobin, the oxygen-carrying protein in red blood cells." }
],
```

The "What it shows" text follows the description rules: present tense, one
or two short sentences, no method or sample details.

---

## 9. Worked examples

These are models for the pattern. **Every rewrite must be checked by a
laboratory reviewer** before it replaces the current text.

### Albumin (Serum) — already close

> **Description:** Measures albumin, the major plasma protein synthesised by
> the liver. Albumin maintains plasma oncotic pressure and transports
> hormones, bilirubin and medicines; low concentrations occur in liver
> disease, protein loss and malnutrition.
>
> **Summary:** Main plasma protein; reflects liver synthesis, nutrition and protein loss.

### Troponin I – POC (S1, S3, S4)

Before: two paragraphs. It opens "Cardiac troponin I (cTnI) is…" and names
the analyser and the assay principle.

> **Description:** Measures cardiac troponin I (cTnI), a protein released into
> the blood when heart muscle is injured. A raised or rising concentration
> supports the diagnosis of myocardial infarction and other myocardial injury,
> interpreted with the clinical picture and ECG.
>
> **Moved to `methodology`:** Quidel Triage MeterPro point-of-care analyser,
> Triage Troponin I test (98600EU); quantitative fluorescence immunoassay.

### M C & S – Cerebrospinal Fluid (S1, S3)

Before: three paragraphs, opening "Culture of…". The AFB stain is part of
the CSF culture and needs no separate request.

> **Description:** Microscopy, culture and susceptibility testing of
> cerebrospinal fluid (CSF) to detect bacterial causes of meningitis and
> ventriculitis. Includes appearance, white and red cell counts with
> differential, Gram stain, acid-fast bacilli (AFB) stain and culture.
> Fungal and molecular tests require a separate request.

### Dengue Rapid Test (NS1, IgG, IgM) (S1, S3, S5)

> **Description:** Detects dengue non-structural protein 1 (NS1) antigen and
> immunoglobulin M (IgM) and G (IgG) antibodies. NS1 supports early acute
> infection, IgM recent infection, and IgG past or secondary infection.
>
> **Summary:** Rapid screen for acute, recent or past dengue infection.

---

## 10. How to work through the directory

1. **One department per sitting.** Run
   `node tools/check-data.js --style=<department>` to get that department's
   list.
2. **Write one model entry per test type** in that department (§3). Get the
   reviewer to agree it, then match the others to it.
3. **Edit, save, refresh** the browser, and re-run the checker until that
   department is clear.
4. **Update `lastReviewed`** on each entry the reviewer signs off.
5. **Commit once per department**, e.g. `Style: serology descriptions (S1–S8)`.
   Each change can then be traced and reversed on its own.
6. Re-importing from Word (`tools/import-docx.js`) can bring the old wording
   back. After any import, run the checker before committing.

Department ids: `biochemistry`, `haematology`, `microbiology`, `molecular`,
`serology`, `parasitology`, `cytology`, `icu`.
