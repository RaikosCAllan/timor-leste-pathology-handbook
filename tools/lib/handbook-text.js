/* =============================================================================
   tools/lib/handbook-text.js — text rules shared by the import, sync and fix tools
   -----------------------------------------------------------------------------
   Two house rules live here so every tool applies them the same way:

   1. Appendix references carry their full title (STYLE_GUIDE.md §7)
        "See Appendix 7."  ->  "See Appendix 7: Sample Rejection Criteria (All Departments)."

   2. A panel's component lines become a `components` table (STYLE_GUIDE.md §8)
        In Word, inside the Test Description, one paragraph per component:
          Haemoglobin (Hb) — code HGB, unit g/L: Concentration of haemoglobin …
        On the website:
          components: [{ name: "Haemoglobin (Hb)", code: "HGB", unit: "g/L",
                         about: "Concentration of haemoglobin …" }]
   ========================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");

/* --- Appendix titles ------------------------------------------------------ */
// { "7": "Sample Rejection Criteria (All Departments)", "9a": … } from data/appendices.js
function loadAppendixTitles(root) {
  const win = {};
  new Function("window", fs.readFileSync(path.join(root || ".", "data", "appendices.js"), "utf8"))(win);
  const out = {};
  (win.APPENDICES || []).forEach(a => {
    const t = a.title && typeof a.title === "object" ? a.title.en : a.title;
    out[String(a.number).toLowerCase()] = String(t).trim();
  });
  return out;
}

const ID = "(\\d{1,2}[ab]?)";
const STOP = new Set(["and", "the", "of", "for", "all", "to", "a", "in"]);
const words = (s) => s.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ")
  .split(" ").map(w => w.replace(/s$/, "")).filter(w => w.length > 2 && !STOP.has(w));

// Where does an old, possibly reworded, title end?
function titleEnd(s, i) {
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    const ch = s[j], rest = s.slice(j);
    if (ch === "(") depth++;
    else if (ch === ")") { if (depth === 0) return j; depth--; }
    else if (depth === 0) {
      if (ch === "." && (j + 1 === s.length || /[\s"']/.test(s[j + 1]))) return j;
      if (ch === ";" || (ch === "," && /^,\s/.test(rest))) return j;
      if (/^\s+(and|or)\s+(Appendix|\d{1,2}[ab]?\b)/i.test(rest)) return j;
      if (/^\s+(for|where|and the|and applicable|if|which)\s/i.test(rest)) return j;
      if (ch === "\n") return j;
    }
  }
  return s.length;
}

/* expandAppendixRefs(text, titles)
   -> { text, changes, review: [messages for a person] }
   A reference whose existing title looks like a DIFFERENT appendix is left
   alone and reported, because the number itself may be the mistake.       */
function expandAppendixRefs(s, TITLE) {
  const review = [];
  let changes = 0;
  const known = (n) => TITLE[n.toLowerCase()] !== undefined;

  // "Appendices 4 and 5", "Appendix 9a and 9b", "Appendices 1, 6 and 8"
  s = s.replace(new RegExp(`\\b(Appendix|Appendices)\\s+${ID}((?:\\s*,\\s*\\d{1,2}[ab]?)*)(\\s*,?\\s+(?:and|&|or)\\s+)${ID}\\b`, "g"),
    (m, word, first, middle, conj, last) => {
      const all = [first, ...middle.split(",").map(x => x.trim()).filter(Boolean), last];
      if (!all.every(known)) return m;
      const parts = all.map(n => "Appendix " + n);
      return parts.slice(0, -1).join(", ") + (/or/.test(conj) ? " or " : " and ") + parts[parts.length - 1];
    });
  // "Appendices 9a." with one number is a typo for the singular.
  s = s.replace(new RegExp(`\\bAppendices\\s+${ID}\\b`, "g"), "Appendix $1");
  // "Appendix 9a: <title> and 9b: <title>" — the second needs its own "Appendix".
  s = s.replace(new RegExp(`(Appendix\\s+\\d{1,2}[ab]?:[^.;]*?\\s(?:and|or)\\s+)${ID}(?=\\s*:)`, "g"),
    (m, head, n) => known(n) ? `${head}Appendix ${n}` : m);

  const re = new RegExp(`\\bAppendix\\s+${ID}\\b`, "g");
  let out = "", last = 0, m;
  while ((m = re.exec(s))) {
    const n = m[1], after = m.index + m[0].length;
    if (!known(n)) { review.push(`"Appendix ${n}" — no such appendix in appendices.js`); continue; }
    const cur = TITLE[n.toLowerCase()];
    const sep = /^\s*(?::|\s[–—-])\s*/.exec(s.slice(after));
    let end = after;
    if (sep) {
      const tStart = after + sep[0].length;
      end = s.startsWith(cur, tStart) ? tStart + cur.length : titleEnd(s, tStart);
      const oldT = s.slice(tStart, end).trim().replace(/\\/g, "");
      const o = words(oldT), c = new Set(words(cur));
      if (o.length && o.filter(w => c.has(w)).length / o.length < 0.5) {
        review.push(`"Appendix ${n}: ${oldT}" — but Appendix ${n} is "${cur}". Check which appendix is meant.`);
        continue;
      }
    }
    const want = `Appendix ${n}: ${cur}`;
    if (s.slice(m.index, end) !== want) changes++;
    out += s.slice(last, m.index) + want;
    last = end;
    re.lastIndex = end;
  }
  return { text: out + s.slice(last), changes, review };
}

// Apply to every string inside a value (string, array, { en: … }, objects).
function expandDeep(v, TITLE, review) {
  if (typeof v === "string") { const r = expandAppendixRefs(v, TITLE); (review || []).push(...r.review); return r.text; }
  if (Array.isArray(v)) return v.map(x => expandDeep(x, TITLE, review));
  if (v && typeof v === "object") { const o = {}; Object.keys(v).forEach(k => { o[k] = expandDeep(v[k], TITLE, review); }); return o; }
  return v;
}

/* --- Panel components ----------------------------------------------------- */
// "Haemoglobin (Hb) — code HGB, unit g/L: Concentration of …"
const COMPONENT = /^(.+?)\s+[—–-]\s+code\s+([^,]+?),\s+units?\s+(.+?):\s+(.+)$/i;

// Split description paragraphs into { description, components }.
// Paragraphs that are not component lines stay in the description.
function splitComponents(paras) {
  const list = Array.isArray(paras) ? paras : [paras];
  const desc = [], components = [];
  list.forEach(p => {
    const m = typeof p === "string" ? p.trim().match(COMPONENT) : null;
    if (m) components.push({ name: m[1].trim(), code: m[2].trim(), unit: m[3].trim(), about: m[4].trim() });
    else desc.push(p);
  });
  return {
    description: desc.length === 1 ? desc[0] : desc,
    components: components.length ? components : null
  };
}

// The reverse, so a site entry can be compared with the Word paragraphs.
function componentLines(components, txt) {
  const t = txt || ((v) => typeof v === "string" ? v : v && v.en ? v.en : "");
  return (components || []).map(c =>
    `${t(c.name)} — code ${t(c.code)}, unit ${t(c.unit)}: ${t(c.about)}`);
}

module.exports = { loadAppendixTitles, expandAppendixRefs, expandDeep, splitComponents, componentLines };
