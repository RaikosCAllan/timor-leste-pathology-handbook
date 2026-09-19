#!/usr/bin/env node
/* =============================================================================
   check-data.js — sanity-check the data files before you publish
   -----------------------------------------------------------------------------
   Run from the repository root:

       node tools/check-data.js

   It checks the things that go wrong when entries are typed by hand, and that
   the browser will NOT tell you about:

     ERRORS   break the page, or break a link a clinician would follow
     WARNINGS look like mistakes but may be deliberate
     NOTES    progress information

   Exit code is 1 if there are errors, otherwise 0 — so it can gate a release.
   Nothing is written or changed; this only reads.
   ========================================================================== */

"use strict";
const fs = require("fs");
const path = require("path");

const DATA = ["site", "departments", "tests", "collection", "request", "appendices"];
const errors = [], warnings = [], notes = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);
const N = (m) => notes.push(m);

/* --- Load the data files the same way the browser does -------------------- */
const win = {};
for (const name of DATA) {
  const file = path.join("data", name + ".js");
  if (!fs.existsSync(file)) { E(`${file} is missing`); continue; }
  const src = fs.readFileSync(file, "utf8");
  try {
    new Function("window", src)(win);
  } catch (err) {
    E(`${file} has a syntax error and will break the page:\n      ${err.message}` +
      `\n      Usually a missing comma between entries, a stray comma after the last` +
      `\n      item, or an unescaped " inside text.`);
  }
}
if (errors.length) { report(); process.exit(1); }   // nothing else can be trusted

const SITE   = win.SITE || {};
const DEPTS  = win.DEPARTMENTS || [];
const TESTS  = win.TESTS || [];
const COLL   = win.COLLECTION || {};
const REQ    = win.REQUEST || {};
const APPS   = win.APPENDICES || [];

/* --- Helpers -------------------------------------------------------------- */
// Resolve a value that may be a string, an array, or { en: ..., xx: ... }
function txt(v) {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map(txt).join(" ");
  if (typeof v === "object") return txt(v.en !== undefined ? v.en : Object.values(v)[0]);
  return "";
}
function dupes(list) {
  const seen = new Set(), out = new Set();
  for (const x of list) { if (seen.has(x)) out.add(x); else seen.add(x); }
  return [...out];
}
function countPlaceholders(file) {
  if (!fs.existsSync(file)) return 0;
  return (fs.readFileSync(file, "utf8").match(/\[FILL IN/g) || []).length;
}

/* --- 1. Identifiers must be unique ---------------------------------------- */
const deptIds = DEPTS.map(d => d.id);
const testIds = TESTS.map(t => t.id);
const appIds  = APPS.map(a => a.id);

dupes(deptIds).forEach(id => E(`departments.js: duplicate id "${id}"`));
dupes(appIds).forEach(id  => E(`appendices.js: duplicate id "${id}"`));
dupes(testIds).forEach(id =>
  E(`tests.js: duplicate id "${id}" — the second entry is unreachable at ` +
    `index.html#test-${id}, and one of them will be impossible to link to`));

/* --- 2. Required fields --------------------------------------------------- */
TESTS.forEach((t, i) => {
  const where = t.name ? `"${txt(t.name)}"` : `entry ${i + 1}`;
  if (!t.id)         E(`tests.js: ${where} has no id`);
  if (!t.name)       E(`tests.js: entry ${i + 1} has no name`);
  if (!t.department) E(`tests.js: ${where} has no department`);
  if (!/^[a-z0-9-]*$/.test(t.id || ""))
    W(`tests.js: id "${t.id}" — lowercase letters, digits and hyphens only, ` +
      `so the link stays readable and stable`);
});

/* --- 3. Cross-references must resolve ------------------------------------- */
TESTS.forEach(t => {
  if (t.department && !deptIds.includes(t.department))
    E(`tests.js: "${txt(t.name)}" has department "${t.department}", which is not ` +
      `an id in departments.js.\n      The test still renders but DISAPPEARS from ` +
      `the department filter. Known ids: ${deptIds.join(", ")}`);

  (t.appendixRefs || []).forEach(ref => {
    if (!appIds.includes(ref))
      E(`tests.js: "${txt(t.name)}" links to appendix "${ref}", which does not ` +
        `exist in appendices.js — the "See also" link goes nowhere`);
  });
});

/* --- 4. Container colours should match the tube table --------------------- */
const tubes = (COLL.orderOfDraw || []).map(r => txt(r.colour).toLowerCase());
TESTS.forEach(t => {
  const c = txt(t.containerColour).trim();
  if (!c || c.includes("[FILL IN")) return;
  if (!tubes.some(x => x === c.toLowerCase()))
    W(`tests.js: "${txt(t.name)}" uses container "${c}", which is not a tube in ` +
      `collection.js — staff cross-checking the order-of-draw table will not find it`);
});

/* --- 5. Critical flags vs the alert-list appendix -------------------------- */
const alertApp = APPS.find(a => /alert list|critical value/i.test(txt(a.title)));
const flaggedCritical = TESTS.filter(t => (t.flags || []).includes("critical"));

if (alertApp) {
  const alertText = (alertApp.blocks || [])
    .filter(b => b.type === "table")
    .flatMap(b => (b.rows || []).flat())
    .map(txt).join(" | ").toLowerCase();

  flaggedCritical.forEach(t => {
    const name = txt(t.name).toLowerCase().replace(/\([^)]*\)/g, "").trim();
    const key = name.split(/[\s/]+/).filter(w => w.length > 3)[0];
    if (key && alertText && !alertText.includes(key))
      W(`"${txt(t.name)}" is flagged CRITICAL in tests.js but does not appear in ` +
        `${txt(alertApp.title)}.\n      The badge promises a telephone call the ` +
        `alert list does not record. Reconcile the two.`);
  });
} else if (flaggedCritical.length) {
  W(`${flaggedCritical.length} test(s) are flagged CRITICAL but no alert-list ` +
    `appendix was found to check them against`);
}

TESTS.forEach(t => {
  const ca = txt(t.criticalAlert).trim();
  const flagged = (t.flags || []).includes("critical");
  const meaningful = ca && !/^not applicable\.?$/i.test(ca) && !ca.includes("[FILL IN");
  if (meaningful && !flagged && !/appendi(x|ces)/i.test(ca) && !/see individual/i.test(ca))
    W(`tests.js: "${txt(t.name)}" describes a critical alert but is not flagged ` +
      `"critical", so it carries no CRITICAL badge and is missed by the filter`);
});

/* --- 6. Flags must be spelled correctly ----------------------------------- */
const VALID = ["critical", "stat", "send-away", "pending"];
TESTS.forEach(t => (t.flags || []).forEach(f => {
  if (!VALID.includes(f))
    E(`tests.js: "${txt(t.name)}" has unknown flag "${f}" — it renders no badge. ` +
      `Valid: ${VALID.join(", ")}`);
}));

/* --- 7. Internal contradictions -------------------------------------------
   Things a careful reader skims past because each half looks right on its
   own. These are the errors that survive proofreading.                     */

// Tube words that must not disagree with the chosen container.
const TUBE_WORDS = [
  { re: /\bEDTA\b/i,                     tube: /edta/i,              name: "EDTA" },
  { re: /\bcitrate\b/i,                  tube: /citrate/i,           name: "citrate" },
  { re: /\bheparin\b/i,                  tube: /heparin/i,           name: "heparin" },
  { re: /\b(SST|serum separat)/i,         tube: /(sst|serum separat)/i, name: "serum separator" },
  { re: /\b(fluoride|oxalate)\b/i,       tube: /(fluoride|oxalate)/i, name: "fluoride oxalate" },
  { re: /\bblood culture bottle/i,        tube: /blood culture/i,     name: "blood culture bottle" }
];

TESTS.forEach(t => {
  const name = txt(t.name);
  const flags = t.flags || [];
  const req   = txt(t.sampleRequirements);
  const cont  = txt(t.containerColour);
  const range = txt(t.referenceRange);
  const tat   = t.turnaround || {};
  const ca    = txt(t.criticalAlert);
  const skip  = (v) => !v || v.includes("[FILL IN");

  // a) The specimen requirement names a tube the container field contradicts.
  if (!skip(req) && !skip(cont)) {
    TUBE_WORDS.forEach(w => {
      if (w.re.test(req) && !w.tube.test(cont))
        W(`tests.js: "${name}" — sample requirements say ${w.name}, but the ` +
          `container is "${cont}".\n      One of the two is wrong, and a ward ` +
          `reading the card sees both.`);
    });
  }

  // b) Referred away, yet turned around same-day.
  if (flags.includes("send-away") && /same.?day|within (1|2|3|4|a few) ?h/i.test(txt(tat.routine)))
    W(`tests.js: "${name}" is flagged SEND-AWAY but the routine turnaround is ` +
      `"${txt(tat.routine)}". A referred test cannot return same day — the badge ` +
      `and the time contradict each other.`);

  // c) Not in service, yet carries a reference range.
  if (flags.includes("pending") && !skip(range) && !/see |appendi/i.test(range))
    W(`tests.js: "${name}" is flagged PENDING but gives a reference range. ` +
      `If the test is not yet offered, a range invites clinicians to request it; ` +
      `if it is offered, remove the flag.`);

  // d) Flagged critical, but the alert field denies it.
  if (flags.includes("critical") && /^not applicable\.?$/i.test(ca))
    E(`tests.js: "${name}" is flagged CRITICAL but its critical/alert field says ` +
      `"Not applicable". The badge promises a telephone call the entry denies.`);

  // e) STAT offered with no urgent time given.
  if (flags.includes("stat") && skip(txt(tat.urgent)))
    W(`tests.js: "${name}" is flagged STAT but gives no urgent turnaround, so a ` +
      `clinician cannot tell how fast urgent actually is.`);

  // f) A numeric range with no unit — the classic transcription slip.
  if (!skip(range) && /\d/.test(range) &&
      !/[a-zA-Z]\/[a-zA-Z]|%|mmol|µmol|umol|mg|g\/|IU|U\/|mL|dL|L\b|sec|second|min|ratio|cells|fL|pg|nmol|ng|pmol|mmHg|kPa|copies|titre|index/i.test(range) &&
      !/negative|positive|no growth|not detected|A, B|absent/i.test(range))
    W(`tests.js: "${name}" — reference range "${range}" has numbers but no ` +
      `recognisable unit. Check the unit was not lost in transcription.`);

  // g) No rejection guidance at all.
  if (skip(txt(t.rejection)))
    W(`tests.js: "${name}" gives no rejection guidance. Most entries cite the ` +
      `rejection appendix; an empty one leaves reception without a rule.`);
});

// h) Two tests sharing a name, or a LIMS code, or a name used as another's synonym.
const nameKey = (v) => txt(v).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const byName = {};
TESTS.forEach(t => {
  const k = nameKey(t.name); if (!k) return;
  (byName[k] = byName[k] || []).push(t.id);
});
Object.keys(byName).forEach(k => {
  if (byName[k].length > 1)
    W(`tests.js: ${byName[k].length} tests share the name "${k}" (${byName[k].join(", ")}). ` +
      `Search results will be indistinguishable.`);
});

const byCode = {};
TESTS.forEach(t => {
  const c = txt(t.limsCode || t.schuylabCode).trim().toLowerCase();
  if (!c || c.includes("[fill in")) return;
  (byCode[c] = byCode[c] || []).push(txt(t.name));
});
Object.keys(byCode).forEach(c => {
  if (byCode[c].length > 1)
    W(`tests.js: LIMS code "${c}" is used by ${byCode[c].length} tests ` +
      `(${byCode[c].join("; ")}). Check against the LIMS — codes are normally unique.`);
});

TESTS.forEach(t => {
  const k = nameKey(t.name); if (!k) return;
  TESTS.forEach(o => {
    if (o.id === t.id) return;
    if ((txt(o.synonyms) ? toList(o.synonyms) : []).some(sy => nameKey(sy) === k))
      W(`tests.js: "${txt(t.name)}" is also listed as a synonym of ` +
        `"${txt(o.name)}". A clinician searching that term gets two cards and ` +
        `cannot tell which to follow.`);
  });
});
function toList(v) { return Array.isArray(v) ? v.map(txt) : [txt(v)]; }

// i) Handbook-history dates must parse, or the NEW/UPDATED marker silently
//    never appears — a failure you cannot see by looking at the page.
const DATE_RE = /^\d{4}-\d{2}(-\d{2})?$/;
TESTS.forEach(t => {
  ["added", "updated", "lastReviewed"].forEach(f => {
    const v = txt(t[f]).trim();
    if (!v || v.includes("[FILL IN")) return;
    if (!DATE_RE.test(v))
      W(`tests.js: "${txt(t.name)}" has ${f} "${v}", which is not YYYY-MM-DD ` +
        `or YYYY-MM.` + (f === "lastReviewed" ? "" :
        ` The ${f === "added" ? "NEW" : "UPDATED"} marker will never appear.`));
  });
  const a = txt(t.added).trim(), u = txt(t.updated).trim();
  if (DATE_RE.test(a) && DATE_RE.test(u) && u < a)
    W(`tests.js: "${txt(t.name)}" was updated (${u}) before it was added (${a}).`);
  if (DATE_RE.test(u) && !a)
    W(`tests.js: "${txt(t.name)}" has an updated date but no added date.`);
});

/* --- 8. Draft notice vs readiness ----------------------------------------- */
const totalPlaceholders = DATA.reduce((n, f) => n + countPlaceholders(path.join("data", f + ".js")), 0);
const draftOn = !!(SITE.draftNotice && SITE.draftNotice.show);

if (!draftOn && totalPlaceholders > 0)
  E(`site.js: draftNotice.show is false, but ${totalPlaceholders} [FILL IN] ` +
    `placeholder(s) remain.\n      The site is presenting unfinished content as ` +
    `approved. Set show:true until the content is complete and verified.`);

const unreviewed = TESTS.filter(t => !txt(t.lastReviewed).trim() || txt(t.lastReviewed).includes("[FILL IN"));
if (!draftOn && unreviewed.length)
  E(`site.js: draftNotice.show is false, but ${unreviewed.length} test(s) have no ` +
    `lastReviewed date — they have not been recorded as clinically verified`);

/* --- 9. Progress ---------------------------------------------------------- */
N(`${TESTS.length} tests, ${DEPTS.length} departments, ${APPS.length} appendices`);
N(`draft notice: ${draftOn ? "ON (site shows the not-for-clinical-use banner)" : "OFF"}`);
if (totalPlaceholders) {
  N(`${totalPlaceholders} [FILL IN] placeholder(s) remaining:`);
  DATA.forEach(f => {
    const n = countPlaceholders(path.join("data", f + ".js"));
    if (n) N(`    data/${f}.js — ${n}`);
  });
}
if (TESTS.length) {
  const reviewed = TESTS.length - unreviewed.length;
  N(`${reviewed}/${TESTS.length} tests have a lastReviewed date`);
}
const byDept = {};
TESTS.forEach(t => { byDept[t.department] = (byDept[t.department] || 0) + 1; });
Object.keys(byDept).sort().forEach(d => N(`    ${d}: ${byDept[d]}`));
deptIds.filter(d => !byDept[d]).forEach(d =>
  N(`    ${d}: 0  (department defined but no tests yet)`));

/* --- Report --------------------------------------------------------------- */
function report() {
  const line = "-".repeat(72);
  if (errors.length)   { console.log(`\n${line}\nERRORS (${errors.length}) — fix these\n${line}`);
                         errors.forEach((m, i) => console.log(`  ${i + 1}. ${m}`)); }
  if (warnings.length) { console.log(`\n${line}\nWARNINGS (${warnings.length}) — check these\n${line}`);
                         warnings.forEach((m, i) => console.log(`  ${i + 1}. ${m}`)); }
  if (notes.length)    { console.log(`\n${line}\nPROGRESS\n${line}`);
                         notes.forEach(m => console.log(`  ${m}`)); }
  console.log("");
  if (!errors.length && !warnings.length) console.log("  No problems found.\n");
}
report();
process.exit(errors.length ? 1 : 0);
