#!/usr/bin/env node
/* =============================================================================
   import-docx.js — copy test text from the Word document into data/tests.js
   -----------------------------------------------------------------------------
   Run from the repository root:

       node tools/import-docx.js --dry-run     (report only, change nothing)
       node tools/import-docx.js               (update data/tests.js)
       node tools/import-docx.js "../PATHOLOGY HANDBOOK_v9.4_WORKING.docx"

   Requires pandoc.

   WHY
   The Word document is master. sync-check.js shows where the website has
   drifted from it; this tool brings the website back in line, so ~100 tests
   do not have to be retyped by hand.

   WHAT IT CHANGES — only the text that comes from the Word document:
     name, synonyms, limsCode, description, indications, referenceRange,
     analyticalLimitations, sampleRequirements, storageTransport, rejection,
     methodology, turnaround, criticalAlert, diseaseAssociations,
     conversionFactors

   WHAT IT NEVER CHANGES — fields that exist only on the website:
     id, department, flags, summary, sampleType, containerColour,
     organismsReported, appendixRefs, lastReviewed, added, updated

   It does not add or delete tests. Tests in the document but not on the
   site (and the reverse) are listed in the report for you to handle.

   A field that contains a table in the Word document is NOT imported; the
   report lists it so you can copy it by hand.

   Every change is written to a report beside the Word document:
     import_report_YYYY-MM-DD_HHMM.md
   Read the report, then review the diff in GitHub Desktop before committing.
   ========================================================================== */

"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const docArg = args.find(a => !a.startsWith("--"));

function findSource() {
  if (docArg) return docArg;
  let best = null;
  fs.readdirSync("..").forEach(f => {
    if (!/\.docx$/i.test(f) || f.startsWith("~$") || !/handbook/i.test(f)) return;
    const st = fs.statSync(path.join("..", f));
    if (!best || st.mtimeMs > best.mtime) best = { file: path.join("..", f), mtime: st.mtimeMs };
  });
  return best && best.file;
}
const SRC = findSource();
if (!SRC || !fs.existsSync(SRC)) { console.error("Could not find the Word document. Pass it as an argument."); process.exit(2); }

/* --- Word → markdown ------------------------------------------------------ */
let md;
try {
  const tmp = path.join(os.tmpdir(), "handbook-import-" + Date.now() + ".md");
  execFileSync("pandoc", [SRC, "-t", "markdown", "--wrap=none", "-o", tmp], { stdio: "pipe" });
  md = fs.readFileSync(tmp, "utf8"); fs.unlinkSync(tmp);
} catch (e) { console.error("pandoc failed: " + e.message); process.exit(2); }

const SUP = { "0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻","+":"⁺" };
const SUB = { "0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉" };
function clean(s) {
  return String(s)
    .replace(/\[\]\{[^}]*\}/g, "")                     // empty anchors []{#_Toc…}
    .replace(/\[([^\]]*)\]\{[^}]*\}/g, "$1")          // [text]{.mark}
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")          // [text](link)
    .replace(/\^([0-9+-]+)\^/g, (m, d) => d.split("").map(c => SUP[c] || c).join(""))
    .replace(/~([0-9]+)~/g, (m, d) => d.split("").map(c => SUB[c] || c).join(""))
    .replace(/\*\*/g, "").replace(/(^|[^\w])\*(?=\S)|(?<=\S)\*(?=[^\w]|$)/g, "$1")
    .replace(/---/g, "—").replace(/--/g, "–")
    .replace(/\\([\\`*_{}\[\]()#+\-.!<>'"|$~^&])/g, "$1")
    .replace(/\\$/, "")
    .replace(/ /g, " ").replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/\s+/g, " ").trim();
}

const FIELDS = {
  "Department": "department", "Schuylab Code": "limsCode", "SchuyLab Code": "limsCode",
  "LIMS Code": "limsCode", "Synonyms": "synonyms", "Test Description": "description",
  "Clinical Use / Indications": "indications", "Reference Range": "referenceRange",
  "Analytical Limitations": "analyticalLimitations", "Sample Requirements": "sampleRequirements",
  "Storage / Transport": "storageTransport", "Rejection": "rejection", "Methodology": "methodology",
  "Turnaround Time": "turnaround", "Critical / Alert": "criticalAlert",
  "Disease Associations": "diseaseAssociations", "Conversion Factors": "conversionFactors",
  // Sections read only so that their text is not swallowed by the field above them.
  "Organisms Reported": "_organisms", "Test Name": "_name"
};
const LIST_FIELDS = new Set(["indications", "referenceRange", "analyticalLimitations", "diseaseAssociations"]);

// Highlighting in Word ([text]{.mark}) and empty anchors would hide the field
// labels from the parser, so remove them first.
const unmark = (l) => { let prev; do { prev = l; l = l.replace(/\[\]\{[^}]*\}/g, "").replace(/\[([^\[\]]*)\]\{[^}]*\}/g, "$1"); } while (l !== prev); return l; };
const lines = md.split("\n").map(unmark);
const start = lines.findIndex(l => l.trim() === "### Test Description");
let end = lines.findIndex((l, i) => i > start && (/^### Appendix/.test(l) || /^#{1,2}\s/.test(l) ||
  (/^[-=]{3,}\s*$/.test(lines[i + 1] || "") && /^\S/.test(l))));   // "Appendices" + underline
if (start < 0) { console.error("No '### Test Description' heading in the document."); process.exit(2); }
if (end < 0) end = lines.length;

const doc = [], unstyled = [];
let cur = null, field = null;
const isTableLine = (l) => /^\s*(\+[-=+:]+\+|\|.*\||-{3,}\s+-{3,}|\s{2,}-{5,})/.test(l);
function addPara(k, text, newItem) {
  const items = cur.fields[k] || (cur.fields[k] = []);
  if (!text) return;
  if (newItem || !items.length) items.push(text); else items[items.length - 1] += " " + text;
}
for (let i = start + 1; i < end; i++) {
  const raw = lines[i];
  const h = raw.match(/^#####\s+(.*?)\s*$/);
  if (h) {
    if (cur) doc.push(cur);
    const name = clean(h[1]);
    cur = name ? { name, fields: {}, tables: new Set() } : null;
    field = null; continue;
  }
  if (!cur) continue;
  const inline = raw.match(/^\*\*([^*:]+):\*\*\s*(.*)$/);
  if (inline && FIELDS[inline[1].trim()]) {
    field = FIELDS[inline[1].trim()];
    cur.fields[field] = [];
    const v = clean(inline[2]);
    if (v) { addPara(field, v, true); field = (field === "department" || field === "limsCode" || field === "synonyms") ? null : field; }
    continue;
  }
  const block = raw.match(/^\*\*([^*]+?)\*\*\s*$/);
  if (block && FIELDS[block[1].replace(/:$/, "").trim()]) {
    field = FIELDS[block[1].replace(/:$/, "").trim()];
    cur.fields[field] = []; continue;
  }
  if (block) {
    // A bold line followed by "**Department:**" is a test heading that was
    // not given the Heading 5 style in Word. Treat it as a new test.
    let j = i + 1; while (j < end && !lines[j].trim()) j++;
    if (/^\*\*Department:\*\*/.test(lines[j] || "")) {
      if (cur) doc.push(cur);
      const name = clean(block[1]);
      cur = { name, fields: {}, tables: new Set() };
      unstyled.push(name);
      field = null; continue;
    }
    // Otherwise it is a bold sub-heading inside a field: keep it as text.
    if (field) { addPara(field, clean(block[1]), true); cur._gap = false; }
    continue;
  }
  if (!field) continue;
  if (isTableLine(raw)) { cur.tables.add(field); continue; }
  if (!raw.trim()) { cur._gap = true; continue; }
  const bullet = /^\s*([-*•]|\d+[.)])\s+/.test(raw);
  const text = clean(raw.replace(/^\s*([-*•]|\d+[.)])\s+/, ""));
  const prevEndsBreak = /\\\s*$/.test(lines[i - 1] || "");
  addPara(field, text, bullet || cur._gap || prevEndsBreak);
  cur._gap = false;
}
if (cur) doc.push(cur);

/* --- Load the site -------------------------------------------------------- */
const TESTS_FILE = path.join("data", "tests.js");
const original = fs.readFileSync(TESTS_FILE, "utf8");
const win = {};
new Function("window", original)(win);
const TESTS = win.TESTS;
const headerEnd = original.indexOf("window.TESTS");
const HEADER = original.slice(0, headerEnd);

const txt = (v) => v == null ? "" : Array.isArray(v) ? v.map(txt).join(" ") :
  typeof v === "object" ? txt(v.en !== undefined ? v.en : Object.values(v)[0]) : String(v);
const key = (s) => txt(s).toLowerCase().replace(/\([^)]*\)/g, " ").replace(/[^a-z0-9]+/g, " ").trim();
const norm = (v) => txt(v).toLowerCase().replace(/[–—]/g, "-").replace(/[^a-z0-9.<>%\/+-]+/g, " ").replace(/\s+/g, " ").trim();

const full = (s) => txt(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const byFull = new Map(TESTS.map(t => [full(t.name), t]));
const bySite = new Map();
TESTS.forEach(t => {
  bySite.set(key(t.name), t);
  (t.synonyms || []).forEach(s => { const k = key(s); if (k && !bySite.has(k)) bySite.set(k, t); });
});

/* --- Build the new values ------------------------------------------------- */
function asField(k, items) {
  items = (items || []).map(s => s.trim()).filter(Boolean);
  if (!items.length) return undefined;
  if (k === "synonyms") return items.join(", ").split(/\s*[,;]\s*/).map(s => s.replace(/\.$/, "")).filter(s => s && !/^none$/i.test(s));
  if (k === "limsCode" || k === "department") return items.join(" ");
  if (LIST_FIELDS.has(k)) return items;
  return items.length === 1 ? items[0] : items;
}
function splitTurnaround(items) {
  // Sentences (and "; " clauses) that mention urgent/STAT go to "urgent",
  // unless they are about routine requests. "Routine:" / "Urgent:" labels
  // are removed because the website shows its own labels.
  const parts = items.join(" ")
    .split(/(?<=\.)\s+(?=[A-Z<>≤≥0-9])/)
    .flatMap(s => s.split(/;\s+(?=urgent|stat)/i));
  const routine = [], urgent = [];
  parts.forEach(s => {
    const m = s.match(/^(urgent|stat)\s*:\s*(.*)$/i);
    if (m) urgent.push(m[2].charAt(0).toUpperCase() + m[2].slice(1));
    else if (/\b(urgent|stat)\b/i.test(s) && !/\broutine\b/i.test(s)) urgent.push(s.charAt(0).toUpperCase() + s.slice(1));
    else routine.push(s.replace(/^routine\s*:\s*/i, ""));
  });
  return { routine: routine.join(" "), urgent: urgent.join(" ") };
}

const IMPORT = ["name", "synonyms", "limsCode", "description", "indications", "referenceRange",
  "analyticalLimitations", "sampleRequirements", "storageTransport", "rejection", "methodology",
  "turnaround", "criticalAlert", "diseaseAssociations", "conversionFactors"];

const report = [], skipped = [], deptNotes = [];
const matchedIds = new Set(), docOnly = [];
doc.forEach(d => {
  const t = byFull.get(full(d.name)) || bySite.get(key(d.name));
  if (!t) { docOnly.push(d.name); return; }
  if (matchedIds.has(t.id)) { docOnly.push(d.name + "  (matches the same site entry as another heading)"); return; }
  matchedIds.add(t.id);
  const changes = [];
  IMPORT.forEach(k => {
    let nv;
    if (k === "name") nv = d.name;
    else if (d.tables.has(k)) { skipped.push(`${d.name} — ${k}`); return; }
    else if (!(k in d.fields)) return;
    else if (k === "turnaround") { const items = d.fields[k]; if (!items.length) return; nv = splitTurnaround(items); }
    else { nv = asField(k, d.fields[k]); if (nv === undefined) return; }
    const ov = t[k];
    const same = k === "turnaround"
      ? norm((ov || {}).routine) === norm(nv.routine) && norm((ov || {}).urgent) === norm(nv.urgent)
      : JSON.stringify(ov) === JSON.stringify(nv);
    if (same) return;
    const minor = k !== "turnaround" && norm(ov) === norm(nv);
    changes.push({ k, ov, nv, minor });
    t[k] = nv;
  });
  if (d.fields.department && d.fields.department.length) {
    const dn = d.fields.department.join(" ");
    deptNotes.push(`${d.name}: document "${dn}" · site "${t.department}"`);
  }
  if (changes.length) report.push({ name: d.name, id: t.id, changes });
});
const siteOnly = TESTS.filter(t => !matchedIds.has(t.id)).map(t => `${txt(t.name)} (${t.id})`);

/* --- Write tests.js ------------------------------------------------------- */
const ORDER = ["id", "name", "synonyms", "department", "limsCode", "schuylabCode", "flags", "summary",
  "description", "indications", "referenceRange", "analyticalLimitations", "sampleType",
  "containerColour", "sampleRequirements", "storageTransport", "rejection", "methodology",
  "turnaround", "criticalAlert", "diseaseAssociations", "conversionFactors", "organismsReported",
  "appendixRefs", "lastReviewed", "added", "updated"];
const S = (v) => JSON.stringify(v);
function val(v, ind) {
  if (v === null || v === undefined) return "null";
  if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") return S(v);
  if (Array.isArray(v)) {
    if (!v.length) return "[]";
    if (v.every(x => typeof x === "string") && S(v).length < 70) return "[" + v.map(S).join(", ") + "]";
    return "[\n" + v.map(x => ind + "  " + val(x, ind + "  ")).join(",\n") + "\n" + ind + "]";
  }
  const ks = Object.keys(v);
  if (ks.every(k => typeof v[k] === "string") && S(v).length < 90)
    return "{ " + ks.map(k => k + ": " + S(v[k])).join(", ") + " }";
  return "{\n" + ks.map(k => ind + "  " + k + ": " + val(v[k], ind + "  ")).join(",\n") + "\n" + ind + "}";
}
function entry(t) {
  const ks = ORDER.filter(k => k in t).concat(Object.keys(t).filter(k => !ORDER.includes(k)));
  return "{\n" + ks.map(k => "  " + k + ": " + val(t[k], "  ")).join(",\n") + "\n}";
}
const out = HEADER + "window.TESTS = [\n" + TESTS.map(entry).join(",\n\n") + "\n];\n";

/* --- Report --------------------------------------------------------------- */
const day = new Date().toISOString().slice(0, 10);
const stamp = new Date().toISOString().slice(0, 16).replace("T", "_").replace(":", "");
const show = (v) => v === undefined ? "*(empty)*" : "`" + (typeof v === "string" ? v : JSON.stringify(v)).replace(/`/g, "'") + "`";
let r = `# Import report — ${day}\n\nSource: \`${path.basename(SRC)}\`  \n`;
r += DRY ? "**Dry run — nothing was changed.**\n\n" : "`data/tests.js` was updated. Review the diff in GitHub Desktop before committing.\n\n";
r += `| | Count |\n|---|---|\n| Tests in the document | ${doc.length} |\n| Tests on the site | ${TESTS.length} |\n| Matched | ${matchedIds.size} |\n| Tests changed | ${report.length} |\n| Field changes | ${report.reduce((a, x) => a + x.changes.length, 0)} |\n\n`;
if (unstyled.length) r += `## Test headings not styled as Heading 5 in Word — fix the style in Word\n\n` +
  `These were found because a **Department:** line follows them. In Word, apply the same heading style as the other tests.\n\n` +
  unstyled.map(x => "- " + x).join("\n") + "\n\n";
if (docOnly.length) r += `## In the document, not on the site — add by hand\n\n` + docOnly.map(x => "- " + x).join("\n") + "\n\n";
if (siteOnly.length) r += `## On the site, not in the document — remove, or add to Word\n\n` + siteOnly.map(x => "- " + x).join("\n") + "\n\n";
if (skipped.length) r += `## Not imported because the field contains a table — copy by hand\n\n` + skipped.map(x => "- " + x).join("\n") + "\n\n";
const minorCount = report.reduce((a, x) => a + x.changes.filter(c => c.minor).length, 0);
r += `## Changes\n\n${minorCount} changes are formatting only (punctuation, bullets, spacing) and are applied but not listed. ` +
     `The changes below alter wording or values.\n\n`;
report.forEach(x => {
  const real = x.changes.filter(c => !c.minor);
  if (!real.length) return;
  r += `### ${x.name} \`${x.id}\`\n\n`;
  real.forEach(c => { r += `- **${c.k}**\n  - was: ${show(c.ov)}\n  - now: ${show(c.nv)}\n`; });
  r += "\n";
});
const reportFile = path.join(path.dirname(SRC), `import_report_${stamp}.md`);
fs.writeFileSync(reportFile, r);

// Prove the output parses before writing it.
try { new Function("window", out)({}); } catch (e) { console.error("Generated file does not parse — nothing written: " + e.message); process.exit(1); }
if (!DRY) fs.writeFileSync(TESTS_FILE, out);

console.log(`${DRY ? "DRY RUN — " : ""}${report.length} tests changed, ` +
  `${report.reduce((a, x) => a + x.changes.length, 0)} fields. ` +
  `${docOnly.length} only in document, ${siteOnly.length} only on site, ${skipped.length} table fields skipped.`);
console.log("Report: " + reportFile);
