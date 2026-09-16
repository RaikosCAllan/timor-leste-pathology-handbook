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

/* --- 7. Draft notice vs readiness ----------------------------------------- */
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

/* --- 8. Progress ---------------------------------------------------------- */
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
