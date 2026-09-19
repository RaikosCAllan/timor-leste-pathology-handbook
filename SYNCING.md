# Keeping the Word document and the website in step

## The decision

**The Word document is master.** It is the controlled document. The website is
a published copy of it.

Nothing reaches the website that has not first been changed in the Word
document and authorised.

```
    change or new test
            ↓
    Word document  (v9.x)          ← master
            ↓
    authorised
            ↓
    data/tests.js  →  website      ← published copy
```

This is recorded in two places so that a reader of either copy can see it:

- The Word document's title page
- `data/site.js` → `sourceDocument`, which shows in the site footer

---

## Why this matters more than the tooling

The danger is not that the two copies differ. It is that **when they differ,
nobody knows which is right.** A ward reads the website, a scientist reads the
document, and each believes theirs is current.

Naming a master removes that question. Everything below is mechanism for
keeping the copy faithful; the decision above is what makes disagreements
resolvable.

### The hierarchy has three levels, not two

| Rank | Source | Authoritative for |
|---|---|---|
| 1 | **SchuyLab** | Reference ranges and results. Analyser-specific, changes when methods change |
| 2 | **The Word document** | Specimen requirements, turnaround, rejection rules, procedure |
| 3 | The website | Nothing of its own. It publishes level 2 |

The site tells clinicians that the SchuyLab report is authoritative for ranges.
That stays true regardless of anything here.

---

## The working loop

Never edit the website first. The order is always document → authorise → site.

**1. Change the Word document** and have the change authorised.

**2. See what moved:**

```bash
cd ~/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web
node tools/sync-check.js
```

It reports four things:

- **In the document, not on the site** — new tests to add
- **On the site, not in the document** — removed from the document, or renamed
- **Different wording or values** — shown side by side
- **In the document, blank on the site** — fields not yet filled

It finds the newest `*HANDBOOK*.docx` in the parent folder automatically, so it
keeps working when v9.3 becomes v9.4.

**3. Bring the change across** — by hand, or with `tools/entry-form.html`.

**4. Mark it, so readers can see it changed.** On the entry:

- A brand-new test → set `added` to today
- A revised test → set `updated` to today

**5. Check and commit:**

```bash
node tools/check-data.js
git add -A && git commit -m "Sync with v9.4: potassium critical values authorised 2026-10-02"
git push
```

Put the document version and the authorisation in the commit message. That
gives you an audit trail the Word document cannot produce on its own: who
changed which value, when, and under what authority.

**6. Update `sourceDocument`** in `data/site.js` when the document version
changes, so the footer names the document the site was built from.

---

## What readers see when something changes

Entries carry two dates, and the site turns them into markers that **expire on
their own**:

| Field | Marker | Default window |
|---|---|---|
| `added` | **NEW** | 60 days |
| `updated` | **UPDATED** | 30 days |

Both are set in `site.js` → `whatsNew`, and `show: false` turns them off.

The markers are outlined rather than filled, so they are visibly different from
the clinical badges (CRITICAL, STAT, SEND-AWAY, PENDING). A clinician should
never read **NEW** as a warning about the test itself.

The Test Directory also has a **Recently added or changed** filter, so anyone
returning from leave can see everything that moved in one view. Each card shows
its full history — *Added … · Last changed …* — under the fields.

Dates expiring by themselves is deliberate. A marker someone has to remember to
clear is still there in two years, and by then it means nothing.

---

## Two habits that prevent most drift

**Do both in the same sitting.** Change the document, then bring it across. If
you cannot, say so in the commit message so the gap is recorded rather than
forgotten.

**Run `sync-check.js` before every release**, not only after editing. It is the
evidence that the published copy still matches the controlled document — which
is exactly what an auditor will ask you to demonstrate.

---

## What not to do

**Do not edit the website first.** A change made only on the site is
unauthorised, and it will be silently overwritten the next time content comes
across from the document.

**Do not assume matching text means correct text.** `sync-check.js` compares
wording. It can tell you the two copies disagree, or that they agree. It cannot
tell you the value is right — that is the scientist's judgement, recorded in
`lastReviewed`.

**Do not let the document version drift from `sourceDocument`.** If the footer
says v9.3 and the laboratory is working from v9.5, the site is lying about its
own provenance even if every value happens to match.
