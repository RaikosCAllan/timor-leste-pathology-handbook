#!/usr/bin/env node
/* =============================================================================
   fix-appendix-refs.js — write every appendix reference with its full title
   -----------------------------------------------------------------------------
   Run from the repository root:

       node tools/fix-appendix-refs.js          # preview only, changes nothing
       node tools/fix-appendix-refs.js --apply  # rewrite the data files

   House rule (STYLE_GUIDE.md §6): an appendix is always cited as

       Appendix 7: Sample Rejection Criteria (All Departments)

   using the title exactly as it appears in data/appendices.js. That file is
   the single source of truth — change a title there, re-run this tool, and
   every reference follows.

   The rule itself lives in tools/lib/handbook-text.js, shared with
   import-docx.js and sync-check.js.

   What it does, inside text only (comments and ids are left alone):
     "Appendices 4 and 5"       -> "Appendix 4: <title> and Appendix 5: <title>"
     "Appendix 9a and 9b"       -> "Appendix 9a: <title> and Appendix 9b: <title>"
     "Appendix 12."             -> "Appendix 12: <title>."
     "Appendix 7: <old title>"  -> "Appendix 7: <current title>"

   Safety: if an existing title looks like a DIFFERENT appendix (for example
   "Appendix 13: Critical Results Notification" when 13 is Serology), it is
   NOT changed — it is listed for a person to decide, because the number
   itself may be the mistake.
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");

const APPLY = process.argv.includes("--apply");
const FILES = ["tests", "request", "collection", "site", "departments"]
  .map(f => path.join("data", f + ".js")).filter(f => fs.existsSync(f));

const { loadAppendixTitles, expandAppendixRefs } = require("./lib/handbook-text.js");
const TITLE = loadAppendixTitles(".");

const review = [];
let changes = 0;
function fixText(s, file) {
  const r = expandAppendixRefs(s, TITLE);
  changes += r.changes;
  r.review.forEach(x => review.push(`${file}: ${x}`));
  return r.text;
}

/* --- walk the source, touching string literals only ---------------------- */
function rewrite(src, file) {
  let out = "", i = 0;
  while (i < src.length) {
    const c = src[i], d = src[i + 1];
    if (c === "/" && d === "/") { const j = src.indexOf("\n", i); const e = j < 0 ? src.length : j; out += src.slice(i, e); i = e; continue; }
    if (c === "/" && d === "*") { const j = src.indexOf("*/", i + 2); const e = j < 0 ? src.length : j + 2; out += src.slice(i, e); i = e; continue; }
    if (c === '"' || c === "'" || c === "`") {
      let j = i + 1;
      while (j < src.length && src[j] !== c) { if (src[j] === "\\") j++; j++; }
      out += c + fixText(src.slice(i + 1, j), file) + c;
      i = j + 1; continue;
    }
    out += c; i++;
  }
  return out;
}

const preview = [];
FILES.forEach(file => {
  const src = fs.readFileSync(file, "utf8");
  const before = changes;
  const next = rewrite(src, file);
  if (next === src) return;
  // The rewritten file must still load, or nothing is written.
  try { new Function("window", next)({}); }
  catch (e) { console.error(`${file}: rewrite would break the file (${e.message}) — not written`); process.exitCode = 1; return; }
  const a = src.split("\n"), b = next.split("\n");
  a.forEach((line, k) => { if (line !== b[k]) preview.push(`${file}:${k + 1}\n  - ${line.trim()}\n  + ${b[k].trim()}`); });
  console.log(`${file}: ${changes - before} reference(s) ${APPLY ? "rewritten" : "would change"}`);
  if (APPLY) fs.writeFileSync(file, next);
});

if (!APPLY && preview.length) {
  console.log("\nFirst changes (run with --apply to write them):\n");
  preview.slice(0, 12).forEach(p => console.log(p + "\n"));
  if (preview.length > 12) console.log(`  … and ${preview.length - 12} more changed lines\n`);
}
if (review.length) {
  console.log(`\nNEEDS A PERSON (${review.length}) — not changed:`);
  [...new Set(review)].forEach(r => console.log("  • " + r));
}
if (!changes) console.log("All appendix references already carry their full title.");
