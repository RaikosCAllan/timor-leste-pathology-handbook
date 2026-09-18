#!/usr/bin/env node
/* =============================================================================
   sync-check.js — compare data/tests.js against the source Word document
   -----------------------------------------------------------------------------
   Run from the repository root:

       node tools/sync-check.js
       node tools/sync-check.js "../PATHOLOGY HANDBOOK_v9.4_WORKING.docx"
       node tools/sync-check.js --field referenceRange     (one field only)
       node tools/sync-check.js --quiet                    (differences only)

   Requires pandoc:  brew install pandoc

   WHAT THIS IS FOR
   The Word document and this website are two copies of the same clinical
   content. Two copies drift. This reports where they have drifted, so the
   drift is visible instead of silent.

   It does NOT say which copy is right. That is a judgement about the content,
   and it is yours. See SYNCING.md for how to decide, and for why one of the
   two should be named as master.

   Nothing is written or changed; this only reads.
   ========================================================================== */

"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

/* --- Arguments ------------------------------------------------------------ */
const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const fieldIdx = args.indexOf("--field");
const onlyField = fieldIdx > -1 ? args[fieldIdx + 1] : null;
const docArg = args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--field");

// Default: the newest "*PATHOLOGY HANDBOOK*.docx" in the parent folder.
function findSource() {
  if (docArg) return docArg;
  const dir = "..";
  let best = null;
  try {
    fs.readdirSync(dir).forEach(f => {
      if (!/\.docx$/i.test(f) || f.startsWith("~$")) return;
      if (!/handbook/i.test(f)) return;
      const st = fs.statSync(path.join(dir, f));
      if (!best || st.mtimeMs > best.mtime) best = { file: path.join(dir, f), mtime: st.mtimeMs };
    });
  } catch (e) { /* parent not readable */ }
  return best && best.file;
}

const SRC = findSource();
if (!SRC || !fs.existsSync(SRC)) {
  console.error("Could not find the source document.\n" +
    "Pass it explicitly:  node tools/sync-check.js \"../YOUR HANDBOOK.docx\"");
  process.exit(2);
}

/* --- Extract the document ------------------------------------------------- */
let md;
try {
  const tmp = path.join(os.tmpdir(), "handbook-sync-" + Date.now() + ".md");
  execFileSync("pandoc", [SRC, "-t", "markdown", "--wrap=none", "-o", tmp], { stdio: "pipe" });
  md = fs.readFileSync(tmp, "utf8");
  fs.unlinkSync(tmp);
} catch (err) {
  console.error("pandoc failed. Install it with:  brew install pandoc\n" + err.message);
  process.exit(2);
}

/* --- Parse the Test Description section ----------------------------------- */
// Entries look like:   ##### Test Name
// then                 **Field:** value     or     **Field**\n\nvalue
const lines = md.split("\n");
let start = lines.findIndex(l => l.trim() === "### Test Description");
let end = lines.findIndex((l, i) => i > start && /^### Appendix/.test(l));
if (start < 0) { console.error("No '### Test Description' heading found in the document."); process.exit(2); }
if (end < 0) end = lines.length;

const SRC_FIELDS = {
  "Department": "department",
  "Schuylab Code": "limsCode",
  "SchuyLab Code": "limsCode",
  "LIMS Code": "limsCode",
  "Synonyms": "synonyms",
  "Test Description": "description",
  "Clinical Use / Indications": "indications",
  "Reference Range": "referenceRange",
  "Analytical Limitations": "analyticalLimitations",
  "Sample Requirements": "sampleRequirements",
  "Storage / Transport": "storageTransport",
  "Rejection": "rejection",
  "Methodology": "methodology",
  "Turnaround Time": "turnaround",
  "Critical / Alert": "criticalAlert",
  "Disease Associations": "diseaseAssociations",
  "Conversion Factors": "conversionFactors"
};

function stripMd(s) {
  return String(s)
    .replace(/\\\s*$/, "")
    .replace(/\*\*/g, "").replace(/\*/g, "")
    .replace(/^[-–•]\s+/, "")
    .replace(/\\/g, "")
    .replace(/ /g, " ")
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

const source = [];
let cur = null, field = null;
for (let i = start; i < end; i++) {
  const raw = lines[i];
  const h = raw.match(/^#####\s+(.*?)\s*$/);
  if (h) {
    if (cur) source.push(cur);
    cur = { name: stripMd(h[1]), fields: {} };
    field = null;
    continue;
  }
  if (!cur) continue;

  // "**Field:** value" on one line
  const inline = raw.match(/^\*\*([^*:]+):\*\*\s*(.*)$/);
  if (inline && SRC_FIELDS[inline[1].trim()]) {
    const k = SRC_FIELDS[inline[1].trim()];
    const v = stripMd(inline[2]);
    if (v) cur.fields[k] = (cur.fields[k] ? cur.fields[k] + " " : "") + v;
    field = v ? null : k;
    continue;
  }
  // "**Field**" then the value on following lines
  const block = raw.match(/^\*\*([^*]+?)\*\*\s*$/);
  if (block && SRC_FIELDS[block[1].replace(/:$/, "").trim()]) {
    field = SRC_FIELDS[block[1].replace(/:$/, "").trim()];
    continue;
  }
  if (block) { field = null; continue; }        // a field we do not track

  if (field) {
    const v = stripMd(raw);
    if (v) cur.fields[field] = (cur.fields[field] ? cur.fields[field] + " " : "") + v;
  }
}
if (cur) source.push(cur);

/* --- Load the site's data ------------------------------------------------- */
const win = {};
["departments", "tests"].forEach(n => {
  const f = path.join("data", n + ".js");
  if (!fs.existsSync(f)) { console.error("Missing " + f); process.exit(2); }
  try { new Function("window", fs.readFileSync(f, "utf8"))(win); }
  catch (e) { console.error(`${f} has a syntax error — fix that first:\n  ${e.message}`); process.exit(2); }
});
const TESTS = win.TESTS || [];
const DEPTS = win.DEPARTMENTS || [];

function txt(v) {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map(txt).join(" ");
  if (typeof v === "object") return txt(v.en !== undefined ? v.en : Object.values(v)[0]);
  return "";
}
function key(s) {
  return txt(s).toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
// Comparison is deliberately loose: case, punctuation and spacing differences
// are not drift. A changed number or word is.
function norm(s) {
  return txt(s).toLowerCase()
    .replace(/–|—/g, "-")
    .replace(/[^a-z0-9.<>%\/+-]+/g, " ")
    .replace(/-{2,}/g, "-")             // pandoc writes en-dashes as --
    .replace(/\s*-\s*/g, "-")           // "2 - 5" and "2-5" are one range
    .replace(/\s*\/\s*/g, "/")          // "A / B" and "A/B" are the same
    .replace(/\bhrs?\b/g, "hours")      // hr, hrs, hours
    .replace(/\bmins?\b/g, "minutes")
    .replace(/\s+/g, " ")
    .trim();
}
const isPlaceholder = (s) => /\[fill in/i.test(txt(s));

/* --- Match site entries to source entries --------------------------------- */
const bySiteKey = new Map();
TESTS.forEach(t => {
  bySiteKey.set(key(t.name), t);
  (Array.isArray(t.synonyms) ? t.synonyms : []).forEach(sy => {
    const k = key(sy); if (k && !bySiteKey.has(k)) bySiteKey.set(k, t);
  });
});

const matched = [], missingFromSite = [], notInSource = [];
const usedIds = new Set();

source.forEach(s => {
  const t = bySiteKey.get(key(s.name));
  if (t) { matched.push({ s, t }); usedIds.add(t.id); }
  else missingFromSite.push(s);
});
TESTS.forEach(t => { if (!usedIds.has(t.id)) notInSource.push(t); });

/* --- Compare field by field ----------------------------------------------- */
const COMPARE = ["department", "limsCode", "description", "indications",
  "referenceRange", "analyticalLimitations", "sampleRequirements",
  "storageTransport", "rejection", "methodology", "turnaround",
  "criticalAlert", "diseaseAssociations", "conversionFactors"];

const deptName = (id) => {
  const d = DEPTS.find(x => x.id === id);
  return d ? txt(d.name) : id || "";
};

const diffs = [];
matched.forEach(({ s, t }) => {
  const rows = [];
  COMPARE.forEach(f => {
    if (onlyField && f !== onlyField) return;
    const sv = s.fields[f];
    if (sv === undefined) return;                  // not in the document

    let tv;
    if (f === "turnaround") tv = txt((t.turnaround || {}).routine) + " " + txt((t.turnaround || {}).urgent);
    else if (f === "department") tv = deptName(t.department);
    else tv = txt(t[f]);

    if (isPlaceholder(tv) || !txt(tv).trim()) {
      rows.push({ f, kind: "empty", src: sv, site: txt(tv) });
      return;
    }
    // Department names are collapsed deliberately, so only flag a total mismatch.
    if (f === "department") {
      const a = norm(sv).split(" ")[0], b = norm(tv).split(" ")[0];
      if (a && b && !norm(tv).includes(a) && !norm(sv).includes(b))
        rows.push({ f, kind: "differs", src: sv, site: tv });
      return;
    }
    const a = norm(sv), b = norm(tv);
    if (a && b && a !== b && !b.includes(a) && !a.includes(b))
      rows.push({ f, kind: "differs", src: sv, site: tv });
  });
  if (rows.length) diffs.push({ name: txt(t.name), id: t.id, rows });
});

/* --- Report --------------------------------------------------------------- */
const line = "=".repeat(74);
const clip = (s, n) => { s = txt(s).replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; };

console.log(`\n${line}\nSOURCE vs SITE\n${line}`);
console.log(`  document : ${SRC}`);
console.log(`             modified ${new Date(fs.statSync(SRC).mtimeMs).toISOString().slice(0, 16).replace("T", " ")}`);
console.log(`  site     : data/tests.js`);
console.log(`  entries  : ${source.length} in the document, ${TESTS.length} on the site, ${matched.length} matched`);

if (missingFromSite.length) {
  console.log(`\n${line}\nIN THE DOCUMENT, NOT ON THE SITE (${missingFromSite.length})\n${line}`);
  missingFromSite.forEach(s =>
    console.log(`  ${s.name}${s.fields.department ? "   [" + s.fields.department + "]" : ""}`));
}

if (notInSource.length) {
  console.log(`\n${line}\nON THE SITE, NOT IN THE DOCUMENT (${notInSource.length})\n${line}`);
  console.log(`  Either the document dropped them, or the name differs between the two.`);
  notInSource.forEach(t => console.log(`  ${txt(t.name)}   (${t.id})`));
}

const emptyRows = diffs.map(d => ({ ...d, rows: d.rows.filter(r => r.kind === "empty") })).filter(d => d.rows.length);
const realDiffs = diffs.map(d => ({ ...d, rows: d.rows.filter(r => r.kind === "differs") })).filter(d => d.rows.length);

if (realDiffs.length) {
  console.log(`\n${line}\nDIFFERENT WORDING OR VALUES (${realDiffs.length} tests)\n${line}`);
  realDiffs.forEach(d => {
    console.log(`\n  ${d.name}  (${d.id})`);
    d.rows.forEach(r => {
      console.log(`    ${r.f}`);
      console.log(`      document : ${clip(r.src, 150)}`);
      console.log(`      site     : ${clip(r.site, 150)}`);
    });
  });
}

if (emptyRows.length && !quiet) {
  console.log(`\n${line}\nIN THE DOCUMENT, BLANK ON THE SITE (${emptyRows.length} tests)\n${line}`);
  emptyRows.forEach(d => {
    console.log(`  ${d.name}  (${d.id})`);
    d.rows.forEach(r => console.log(`     ${r.f}: ${clip(r.src, 110)}`));
  });
}

const drift = missingFromSite.length + notInSource.length + realDiffs.length;
console.log(`\n${line}`);
if (!drift && !emptyRows.length) {
  console.log("  In sync. Every entry in the document matches the site.");
} else {
  console.log(`  ${missingFromSite.length} missing from site · ${notInSource.length} not in document · ` +
              `${realDiffs.length} differing · ${emptyRows.length} blank on site`);
  console.log("");
  console.log("  This reports drift; it does not say which copy is right.");
  console.log("  See SYNCING.md.");
}
console.log(line + "\n");

process.exit(drift ? 1 : 0);
