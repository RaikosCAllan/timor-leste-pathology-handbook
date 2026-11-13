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
     STYLE    house style for descriptions (STYLE_GUIDE.md) — never fails
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
const style = [];                        // { dept, test, rule, msg } — see 8c

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

  // A test matches the alert list if any distinctive word of its name, or an
  // abbreviation in brackets (INR, APTT, WBC), appears in the list.
  const GENERIC = new Set(["serum", "plasma", "test", "tests", "count", "total",
    "level", "rapid", "blood", "random", "fasting", "analyser", "specific", "entry"]);
  flaggedCritical.forEach(t => {
    // The name and the synonyms both count: a panel such as a full blood count
    // is on the alert list through its components (haemoglobin, platelets).
    const full = [txt(t.name)].concat(Array.isArray(t.synonyms) ? t.synonyms.map(txt) : [])
      .join(" / ").toLowerCase();
    const abbrev = (full.match(/\(([^)]*)\)/g) || [])
      .flatMap(x => x.replace(/[()]/g, "").split(/[\s/,]+/)).filter(w => w.length >= 3);
    const words = full.replace(/\([^)]*\)/g, " ").split(/[\s/–—-]+/)
      .filter(w => w.length > 3 && !GENERIC.has(w));
    const keys = [...words, ...abbrev].map(w => w.replace(/[^a-z0-9]/g, "")).filter(Boolean);
    const found = keys.some(k => alertText.includes(k) ||
      (k.endsWith("s") ? false : alertText.includes(k + "s")));
    if (keys.length && alertText && !found)
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
  // CRITICAL means "telephoned at a defined value" (the alert list). Text
  // alone does not earn the badge, but a numeric threshold without it may be
  // a missed flag.
  if (meaningful && !flagged && /[<>≤≥]\s*\d/.test(ca))
    W(`tests.js: "${txt(t.name)}" gives a numeric critical value but is not flagged ` +
      `"critical". If the laboratory telephones this value, add the flag and add the ` +
      `test to the alert list.`);
});

/* --- 6. Flags must be spelled correctly ----------------------------------- */
const VALID = ["critical", "stat", "send-away", "pending"];
TESTS.forEach(t => (t.flags || []).forEach(f => {
  if (!VALID.includes(f))
    E(`tests.js: "${txt(t.name)}" has unknown flag "${f}" — it renders no badge. ` +
      `Valid: ${VALID.join(", ")}`);
}));

/* --- 6b. Panel components (STYLE_GUIDE.md §8) --------------------------- */
TESTS.forEach(t => {
  if (t.components == null) return;
  const name = txt(t.name);
  if (!Array.isArray(t.components)) {
    E(`tests.js: "${name}" — components must be a list [ { name, code, unit, about }, … ]`);
    return;
  }
  t.components.forEach((c, i) => {
    if (!c || !txt(c.name).trim())
      E(`tests.js: "${name}" — component ${i + 1} has no name; its table row will be blank`);
    else if (!txt(c.code).trim() || !txt(c.unit).trim() || !txt(c.about).trim())
      W(`tests.js: "${name}" — component "${txt(c.name)}" is missing its ` +
        ["code", "unit", "about"].filter(k => !txt(c[k]).trim()).join(" and ") +
        ` — that cell of the Components table will be empty`);
  });
  dupes(t.components.map(c => txt(c.code).trim()).filter(Boolean)).forEach(c =>
    W(`tests.js: "${name}" — component code "${c}" appears twice in its Components table`));
});

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
  { re: /\bblood culture bottle/i,        tube: /(blood culture|aerobic)/i, name: "blood culture bottle" }
];

// A sentence that names a tube only as an alternative, or as something to
// avoid, is not a contradiction: "Lithium-heparin plasma is acceptable",
// "EDTA contamination falsely raises potassium". Only the sentences that say
// what to collect are compared with the container.
const QUALIFIED = /\b(acceptable|accepted|may be|can be|alternative|alternatively|if validated|where validated|validated for|not |avoid|unsuitable|reject|contaminat|unless|interfere|instead)/i;
// Containers that are not blood collection tubes (slides, syringes, jars, swabs)
// are not compared with tube words.
const NOT_A_TUBE = /\b(slide|syringe|jar|swab|cup|pot|container|strip|point-of-care|none)\b/i;
const sentences = (v) => v.split(/(?<=[.;:])\s+|\n/).filter(Boolean);

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
  if (!skip(req) && !skip(cont) && !NOT_A_TUBE.test(cont)) {
    // "Serum or lithium-heparin plasma" with an SST container: the sentence
    // names the container's own type, so the other tube is an alternative.
    const isSerumTube = /(sst|serum|gold|yellow|plain)/i.test(cont);
    const ownType = (x) => TUBE_WORDS.some(w => w.re.test(x) && w.tube.test(cont)) ||
                           (isSerumTube && /\bserum\b/i.test(x));
    const direct = sentences(req)
      .filter(x => !QUALIFIED.test(x) && !(/\bor\b/i.test(x) && ownType(x)))
      .join(" ");
    TUBE_WORDS.forEach(w => {
      if (w.re.test(direct) && !w.tube.test(cont))
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

/* --- 8b. Page wording (assets/js/strings.js) ----------------------------- */
// Every key the page asks for must exist in English, or the label shows as
// its key. Other languages may be partial — missing keys fall back to
// English — so they are reported as progress, not as faults.
const STR_FILE = path.join("assets", "js", "strings.js");
let UI = null;
if (!fs.existsSync(STR_FILE)) {
  E(`${STR_FILE} is missing — menus, headings and field labels will show as keys`);
} else {
  try { const w = {}; new Function("window", fs.readFileSync(STR_FILE, "utf8"))(w); UI = w.UI_STRINGS || {}; }
  catch (err) { E(`${STR_FILE} has a syntax error and will break the page:\n      ${err.message}`); }
}
if (UI) {
  const en = UI.en || {};
  const used = new Set();
  const html = fs.existsSync("index.html") ? fs.readFileSync("index.html", "utf8") : "";
  for (const m of html.matchAll(/data-ui(?:-placeholder|-aria-label|-content)?="([^"]+)"/g)) used.add(m[1]);
  const app = path.join("assets", "js", "app.js");
  const js = fs.existsSync(app) ? fs.readFileSync(app, "utf8") : "";
  for (const m of js.matchAll(/ui\("([a-zA-Z]+\.[a-zA-Z]+)"/g)) used.add(m[1]);
  for (const m of js.matchAll(/"(badge\.[a-zA-Z]+|count\.[a-zA-Z]+)"/g)) used.add(m[1]);
  const missing = [...used].filter(k => !en[k]);
  if (missing.length)
    E(`strings.js: ${missing.length} key(s) used by the page have no English text: ${missing.join(", ")}`);
  const langs = (SITE.languages || []).map(l => l.code).filter(c => c && c !== "en");
  langs.forEach(c => {
    const tr = UI[c] || {};
    const done = Object.keys(en).filter(k => tr[k] && String(tr[k]).trim()).length;
    N(`page wording, ${c}: ${done}/${Object.keys(en).length} translated` +
      (done < Object.keys(en).length ? " (the rest shows in English)" : ""));
    Object.keys(en).forEach(k => {
      if (!tr[k]) return;
      const need = (en[k].match(/\{\w+\}/g) || []).sort().join(" ");
      const have = (String(tr[k]).match(/\{\w+\}/g) || []).sort().join(" ");
      if (need !== have)
        W(`strings.js: "${c}" text for ${k} must keep ${need || "no {placeholders}"} — it has ${have || "none"}`);
    });
  });
}

/* --- 8c. Writing style (STYLE_GUIDE.md) -----------------------------------
   These do not break the page, so they never fail a release. They are the
   house style for test descriptions, collected into a work list.

       node tools/check-data.js                    counts per rule only
       node tools/check-data.js --style            the full list, by department
       node tools/check-data.js --style=serology   one department only

   Each rule code (S1–S8) is shown against its section in STYLE_GUIDE.md.  */
const STYLE_ARG = process.argv.find(a => a.startsWith("--style"));
const STYLE_DEPT = STYLE_ARG && STYLE_ARG.includes("=") ? STYLE_ARG.split("=")[1] : null;
const S = (t, rule, msg) => style.push({ dept: t.department, test: txt(t.name), rule, msg });
const RULES = {
  "S1": "description is one paragraph",
  "S2": "description length (12–80 words)",
  "S3": "description opens with an approved verb",
  "S4": "description holds content that has its own field",
  "S5": "summary: 15 words or fewer, ends with a full stop, not a copy",
  "S6": "UK spelling",
  "S7": "appendix cited with its full, current title",
  "S8": "tidy text (spaces, quotes, broken paragraphs)"
};

// §3 of the guide — the only ways a description may begin.
const OPENINGS = /^(Measures|Detects|Quantifies|Determines|Identifies|Calculates|Assesses|Screens for|Microscopy, culture and susceptibility testing of|Microscopic examination of|A panel of)\b/;

// §4 — wording that belongs in another field. [pattern, field it belongs in]
const MISPLACED = [
  [/\b(performed (using|on)|analy[sz]er|immunoassay|lateral[- ]flow|immunochromatograph|fluorescen|chemiluminesc|spectrophotomet|turbidimetr|colorimetr|flocculation|®|™)/i, "methodology"],
  [/\b(EDTA|citrate|heparin|SST|serum separator|fluoride|collect(ed|ion)? (in|into)|tube)\b/i, "sampleRequirements"],
  [/\b(reference (range|interval)|normal range)\b/i, "referenceRange"],
  [/\b(turnaround|within \d+ ?(h|hours|days))\b/i, "turnaround"]
];
// A scope sentence ("Fungal culture requires a separate request") IS allowed
// in the description — it tells the clinician what the test does not cover.

// §5 — US spellings and their house forms. Word starts only, so "anaemia" is safe.
const US_UK = [
  [/\bhem(o|a|ato)/i, "haem$1"], [/\banemi/i, "anaemi"], [/\bleukemi/i, "leukaemi"],
  [/\bischemi/i, "ischaemi"], [/\bedema/i, "oedema"], [/\besophag/i, "oesophag"],
  [/\bestrogen/i, "oestrogen"], [/\blipemi/i, "lipaemi"], [/\bglycemi/i, "glycaemi"],
  [/\bcolor(?=s?\b|ed\b|ing\b|less\b)/i, "colour"], [/\bcenter/i, "centre"], [/\bbehavior/i, "behaviour"],
  [/\banalyz/i, "analys"], [/\bcatheteriz/i, "catheteris"], [/\bpediatric/i, "paediatric"],
  [/\bfiber/i, "fibre"], [/\btumor/i, "tumour"], [/\bliter\b/i, "litre"], [/\bgonadotropin/i, "gonadotrophin"]
];

const words = (s) => s.trim().split(/\s+/).filter(Boolean);
const norm  = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const firstSentence = (s) => (s.match(/^.*?[.!?](\s|$)/) || [s])[0].trim();

// Every text value in a test, with the field it came from (English only).
function texts(t) {
  const out = [];
  const walk = (v, field) => {
    if (v == null) return;
    if (typeof v === "string") out.push([field, v]);
    else if (Array.isArray(v)) v.forEach(x => walk(x, field));
    else if (typeof v === "object") v.en !== undefined ? walk(v.en, field)
      : Object.keys(v).forEach(k => walk(v[k], field));
  };
  Object.keys(t).forEach(k => { if (!["id", "department", "flags", "appendixRefs"].includes(k)) walk(t[k], k); });
  return out;
}

// Exact appendix titles, keyed by number ("7", "9a").
const APP_TITLE = {};
APPS.forEach(a => { APP_TITLE[String(a.number).toLowerCase()] = txt(a.title).trim(); });
function checkAppendixRefs(s, report) {
  if (/\bAppendices\b/.test(s))
    report(`writes "Appendices …" — cite each one as "Appendix N: <title>"`);
  for (const m of s.matchAll(/\bAppendix\s+(\d{1,2}[ab]?)\b/g)) {
    const n = m[1].toLowerCase(), title = APP_TITLE[n];
    if (title === undefined) { report(`cites Appendix ${m[1]}, which does not exist`); continue; }
    const want = `Appendix ${m[1]}: ${title}`;
    if (s.slice(m.index, m.index + want.length) !== want)
      report(`"${s.slice(m.index, m.index + want.length + 4).trim()}…" — should read "${want}"`);
  }
}

TESTS.forEach(t => {
  const d = t.description == null ? "" : t.description;
  const dEn = d && typeof d === "object" && !Array.isArray(d) ? d.en : d;
  const paras = (Array.isArray(dEn) ? dEn : [dEn]).map(txt).filter(x => x.trim());
  const desc = paras.join(" ");
  const sum = txt(t.summary).trim();

  if (desc && !desc.includes("[FILL IN")) {
    // S1 one paragraph
    if (paras.length > 1)
      S(t, "S1", `description is split into ${paras.length} paragraphs — merge into one, ` +
        `and move lists of components or extra notes to the field they belong in`);
    // S2 length
    const n = words(desc).length;
    if (n > 80) S(t, "S2", `description is ${n} words — aim for 60 or fewer (what, why, scope)`);
    if (n < 12) S(t, "S2", `description is only ${n} words — add what the result reflects`);
    // S3 opening
    if (!OPENINGS.test(desc))
      S(t, "S3", `opens "${words(desc).slice(0, 4).join(" ")}…" — start with an approved verb ` +
        `(Measures, Detects, Quantifies, Determines, …)`);
    // S4 misplaced content
    MISPLACED.forEach(([re, field]) => {
      const m = desc.match(re);
      if (m) S(t, "S4", `description mentions "${m[0]}" — this belongs in ${field}`);
    });
    // S8 a paragraph that stops mid-sentence (an import artefact)
    paras.slice(0, -1).forEach(p => {
      if (!/[.!?:)]$/.test(p.trim()))
        S(t, "S8", `a description paragraph ends mid-sentence ("…${p.trim().slice(-25)}") — rejoin it`);
    });
  }

  // S5 summary
  if (sum && !sum.includes("[FILL IN")) {
    if (!/[.]$/.test(sum)) S(t, "S5", `summary does not end with a full stop`);
    if (words(sum).length > 15) S(t, "S5", `summary is ${words(sum).length} words — 15 or fewer`);
    const s1 = norm(firstSentence(desc)), sn = norm(sum);
    if (sn && (s1 === sn || s1.startsWith(sn)))
      S(t, "S5", `summary repeats the start of the description — say it differently, in clinician's terms`);
  }

  // S6, S7, S8 across every field of the entry
  texts(t).forEach(([field, s]) => {
    US_UK.forEach(([re, uk]) => {
      const m = s.match(re);
      if (m) S(t, "S6", `${field}: "${m[0]}…" — UK spelling is "${m[0].replace(re, uk)}…"`);
    });
    checkAppendixRefs(s, (msg) => S(t, "S7", `${field}: ${msg}`));
    if (/ {2,}/.test(s.trim())) S(t, "S8", `${field}: double space`);
    if (/[“”‘’]/.test(s))       S(t, "S8", `${field}: curly quotes pasted from Word — use straight quotes`);
  });
});

// Appendix references outside the test directory (request.js, site.js …).
[["request", REQ], ["collection", COLL], ["site", SITE]].forEach(([file, obj]) => {
  const seen = [];
  const walk = (v) => {
    if (typeof v === "string") seen.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") (v.en !== undefined ? walk(v.en) : Object.values(v).forEach(walk));
  };
  walk(obj);
  seen.forEach(s => checkAppendixRefs(s, (msg) =>
    style.push({ dept: `(${file}.js)`, test: file + ".js", rule: "S7", msg })));
});

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
  if (style.length) {
    const byRule = {};
    style.forEach(x => { byRule[x.rule] = (byRule[x.rule] || 0) + 1; });
    const tests = new Set(style.map(x => x.test)).size;
    console.log(`\n${line}\nSTYLE (${style.length} in ${tests} entries) — see STYLE_GUIDE.md\n${line}`);
    Object.keys(RULES).forEach(r => { if (byRule[r]) console.log(`  ${r}  ${String(byRule[r]).padStart(4)}  ${RULES[r]}`); });
    if (!STYLE_ARG) {
      console.log(`\n  Full work list:   node tools/check-data.js --style`);
      console.log(`  One department:   node tools/check-data.js --style=${deptIds[0] || "haematology"}`);
    } else {
      const list = style.filter(x => !STYLE_DEPT || x.dept === STYLE_DEPT);
      let dept = null, test = null;
      list.sort((a, b) => (a.dept + a.test + a.rule).localeCompare(b.dept + b.test + b.rule))
        .forEach(x => {
          if (x.dept !== dept) { dept = x.dept; test = null; console.log(`\n  ══ ${dept} ══`); }
          if (x.test !== test) { test = x.test; console.log(`\n  ${test}`); }
          console.log(`     ${x.rule}  ${x.msg}`);
        });
      if (STYLE_DEPT && !list.length) console.log(`\n  Nothing for "${STYLE_DEPT}". Known: ${deptIds.join(", ")}`);
    }
  }
  if (notes.length)    { console.log(`\n${line}\nPROGRESS\n${line}`);
                         notes.forEach(m => console.log(`  ${m}`)); }
  console.log("");
  if (!errors.length && !warnings.length && !style.length) console.log("  No problems found.\n");
}
report();
process.exit(errors.length ? 1 : 0);
