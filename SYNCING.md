# Keeping the Word document and the website in step

There are now two copies of the same clinical content: `PATHOLOGY HANDBOOK
v9.x.docx` and `data/tests.js`. Both are edited. Two edited copies of clinical
content drift, and drift in a reference range or a critical value is a patient
safety problem, not a tidiness problem.

This describes how to manage that.

---

## 1. First, name a master — this costs nothing and matters most

The dangerous situation is not that the two copies differ. It is that **when
they differ, nobody knows which one is right.** A ward reads the website, a
scientist reads the document, and each believes theirs is current.

So decide, write it down, and put it where both copies can see it:

- In the Word document, on the title page
- In `data/site.js` → `sourceDocument`, which shows in the site footer

Everything below is mechanism. This is the decision.

### The full hierarchy, which has three levels, not two

| Rank | Source | Authoritative for |
|---|---|---|
| 1 | **SchuyLab** | Reference ranges and results. Analyser-specific, changes when methods change |
| 2 | **The approved handbook** (whichever copy is master) | Specimen requirements, turnaround, rejection rules, procedure |
| 3 | The other copy | Nothing. It is a derivative |

The site already tells clinicians that the LIMS report is authoritative for
ranges. That is correct and should stay, whatever you decide below.

---

## 2. Recommended: Word is master now, the website becomes master later

**While you are reviewing and while Ministry approval is pending — Word is
master.** You are editing it daily, approval processes want a document, and
the site is not approved yet. Fighting that is pointless.

**Once the handbook is approved and the site is live — the website becomes
master**, and you generate a PDF from it for formal circulation.

The reason to plan the flip now is that the arguments reverse once the content
is stable:

| | Word as master | Website as master |
|---|---|---|
| Suits daily authoring | Yes | Less so |
| Suits formal approval and signature | Yes | Needs an export |
| Validation of content | None | `check-data.js` on every change |
| Per-change history | Track changes, if remembered | Every commit, permanently |
| Who changed this value, and when | Hard | `git log` |
| Per-test review dates | Impossible | `lastReviewed` |
| Search, filter, phone, ward use | No | Yes |
| Risk when two people edit | High | Merge conflict, visible |

The second column is what an accreditation auditor asks for. The first is what
a Ministry signature process asks for. You need both, at different times.

---

## 3. The working loop while Word is master

Every time you finish a session of edits in Word:

```bash
cd ~/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web

node tools/sync-check.js        # what changed in the document?
# ...bring those changes into data/tests.js...
node tools/check-data.js        # is the result internally consistent?
git add -A && git commit -m "Sync tests with v9.4: potassium critical values"
```

`sync-check.js` reports four things:

- **In the document, not on the site** — new tests you have not entered yet
- **On the site, not in the document** — deleted from Word, or the name changed
- **Different wording or values** — the important one, shown side by side
- **In the document, blank on the site** — fields you have not filled in

It finds the newest `*HANDBOOK*.docx` in the parent folder automatically, so
it keeps working when v9.3 becomes v9.4. Pass a path to override.

Useful during a focused review:

```bash
node tools/sync-check.js --field referenceRange   # ranges only, all tests
node tools/sync-check.js --quiet                  # skip the not-yet-entered list
```

**It reports drift. It does not say which copy is right.** That is the
judgement you are paid for, and the script deliberately refuses to make it.

---

## 4. Two habits that prevent most drift

**Change one copy, then immediately the other.** Not "I will update the site
later". Later is where drift lives. If you cannot do both, note it in the
commit message so the gap is recorded rather than forgotten.

**Put the version in both.** When the document becomes v9.4, update
`site.js` → `sourceDocument` in the same sitting. The site footer then tells
any reader which document it was built from, and `sync-check.js` output shows
the document's modification date beside it. A reader can see for themselves
whether the two are plausibly in step.

---

## 5. When the flip happens

Once the content is approved:

1. Confirm `node tools/sync-check.js` reports **in sync**
2. Confirm `node tools/check-data.js` reports no errors
3. Every test has a `lastReviewed` date
4. Tag the release — `git tag -a v1.0`
5. Set `draftNotice.show: false` in `site.js`
6. Generate the PDF from the site (print to PDF, or `pandoc`) and file it as
   the approved document
7. Record in both copies that the website is now master, and that the Word
   document is archived rather than maintained

From then on, changes are made in `data/tests.js`, reviewed as pull requests,
and a fresh PDF is generated whenever the Ministry needs a document. One
source, two outputs.

---

## 6. What not to do

**Do not maintain both by hand indefinitely.** It doubles the work and
guarantees drift. `sync-check.js` exists to manage a transition, not to make a
permanent two-master arrangement survivable.

**Do not let the website be edited by someone who is not also updating the
master.** While Word is master, a change made only on the site is lost the
next time content is brought across from the document.

**Do not assume matching text means matching meaning.** The script compares
wording. It cannot tell you that a range is wrong, only that the two copies
disagree — or that they agree, which is not the same as being right.
