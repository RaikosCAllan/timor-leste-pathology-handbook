/* =========================================================================
   tests.js — THE TEST DIRECTORY
   -------------------------------------------------------------------------
   This is the file you will spend most time in. One object per test.

   The five entries below are REAL, taken from Pathology Handbook v9.3, and
   are there as worked examples — one from each major department. Copy the
   BLANK TEMPLATE at the bottom of this file for every new test.

   Field reference is in TEMPLATE_GUIDE.md. Quick rules:
     • Every field is optional except id, name and department — but leave the
       "[FILL IN]" placeholder in rather than deleting the line, so nothing
       is silently forgotten.
     • A field may be a single string, an array of strings (renders as a
       bulleted list), or { en: "...", tet: "..." } for bilingual text.
     • `department` must match an id in departments.js.
     • Keep entries in alphabetical order by `name` — the page sorts them
       anyway, but it makes the file easier to work in.
   ========================================================================= */

window.TESTS = [

/* ============ WORKED EXAMPLE 1 — Blood Bank ============================ */
{
  id: "abo-rhd",
  name: "ABO Group and RhD Typing",
  synonyms: ["ABO/Rh Typing", "Group & Screen", "Blood Group"],
  department: "blood-bank",
  schuylabCode: "BLD GRP",

  // Badges shown on the card. Any of: "critical", "send-away", "pending", "stat"
  flags: ["stat"],

  // Short line shown in the collapsed search result — keep under ~140 chars.
  summary: "Determines ABO blood group and RhD status for transfusion, antenatal screening and donor compatibility.",

  description: "Determines ABO blood group and RhD status for transfusion, antenatal screening, transplantation and donor compatibility.",

  indications: [
    "Pre-transfusion testing",
    "Antenatal screening",
    "Donor screening",
    "Transplant compatibility"
  ],

  referenceRange: [
    "ABO: A, B, AB, O",
    "RhD: Positive / Negative"
  ],

  analyticalLimitations: [
    "Mixed-field reaction after recent transfusion",
    "Autoimmune haemolysis or paraproteins",
    "Weak D phenotypes may require molecular testing",
    "Haemolysed or clotted samples affect accuracy"
  ],

  // Used by the search box and the container cross-reference.
  sampleType: "EDTA whole blood",
  containerColour: "Pink EDTA",
  sampleRequirements: "2–5 mL EDTA",

  storageTransport: "2–8 °C; room temperature ≤ 24 hours",
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments)",
  methodology: "Column agglutination (gel card) or tube method",

  turnaround: { routine: "Same day", urgent: "STAT available" },

  criticalAlert: "See Appendix 5: Critical / High-Risk Results Policy Summary",

  diseaseAssociations: [
    "Haemolytic transfusion reactions",
    "Haemolytic disease of the fetus and newborn (RhD incompatibility)"
  ],

  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-5", "appendix-7"],
  lastReviewed: "[FILL IN — e.g. 2026-09]"
},

/* ============ WORKED EXAMPLE 2 — Haematology / Coagulation ============= */
{
  id: "aptt",
  name: "Activated Partial Thromboplastin Time (APTT)",
  synonyms: ["Partial Thromboplastin Time", "PTT"],
  department: "haematology",
  schuylabCode: "APTT",
  flags: [],

  summary: "Clotting assay evaluating the intrinsic and common pathways; used for bleeding disorders and heparin monitoring.",
  description: "Clotting assay evaluating intrinsic and common pathways; used for investigation of bleeding disorders and monitoring of heparin therapy.",

  indications: [
    "Monitoring heparin anticoagulant therapy",
    "Investigation of prolonged bleeding — extended APTT may suggest deficiency of factor VIII (haemophilia A), IX (haemophilia B), XI or XII, heparin effect, or lupus anticoagulant"
  ],

  referenceRange: "24 – 36 seconds",

  analyticalLimitations: [
    "Prolonged by heparin, lupus anticoagulant and factor inhibitors",
    "Incorrect citrate ratio (under-filled tube) invalidates the result",
    "Interference from haemolysis, lipaemia and clotting"
  ],

  sampleType: "Sodium citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: "2.7 mL sodium citrate — tube must be filled to the mark",

  storageTransport: "Centrifuge within 2–4 hours. See Appendix 9a: Storage / Transport Quick Reference.",
  rejection: "Under-filled citrate tube. See Appendix 7: Sample Rejection Criteria.",
  methodology: "Clot-based optical (manual) or mechanical",

  turnaround: { routine: "Same day", urgent: "[FILL IN — STAT turnaround if offered]" },

  criticalAlert: "[FILL IN — critical APTT value and notification rule, or reference Appendix 4]",

  diseaseAssociations: [
    "Haemophilia A and B",
    "von Willebrand disease",
    "Disseminated intravascular coagulation (DIC)",
    "Heparin therapy"
  ],

  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-7", "appendix-9a"],
  lastReviewed: "[FILL IN]"
},

/* ============ WORKED EXAMPLE 3 — Haematology (panel) =================== */
{
  id: "full-blood-count",
  name: "Full Blood Count",
  synonyms: ["FBC", "Complete Blood Count", "CBC"],
  department: "haematology",
  schuylabCode: "CBC",
  flags: [],

  summary: "Automated panel: WBC and differential, RBC and indices (HGB, HCT, MCV, MCH, MCHC) and platelet count.",
  description: "Panel of automated measurements including WBC count and differential, RBC count and indices (HGB, HCT, MCV, MCH, MCHC) and platelet count. See individual test entries for detail.",

  indications: [
    "General screening and baseline assessment",
    "Investigation of anaemia, infection, inflammation, bleeding and malignancy",
    "Monitoring chemotherapy, chronic disease and treatment response"
  ],

  referenceRange: "See Appendix 12 and the individual entries for WBC, RBC, HGB, HCT, MCV, MCH, MCHC and platelets.",

  analyticalLimitations: [
    "Affected by clotted specimens and sample age",
    "Abnormal analyser flags require blood film review",
    "Interference from lipaemia, cold agglutinins and platelet clumps may alter indices"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–5 mL EDTA",

  storageTransport: "Mix gently immediately after collection. Store and transport at room temperature; analyse within the recommended time.",
  rejection: "See Appendix 7: Sample Rejection Criteria.",
  methodology: "Automated haematology analyser with 3- or 5-part differential; manual smear review when indicated.",

  turnaround: { routine: "Same day", urgent: "[FILL IN]" },

  criticalAlert: "See individual tests, and Appendices 4, 5 and 12.",

  diseaseAssociations: "Refer to individual components (WBC, RBC, HGB, platelets and indices).",

  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-4", "appendix-5", "appendix-7", "appendix-12"],
  lastReviewed: "[FILL IN]"
},

/* ============ WORKED EXAMPLE 4 — Microbiology (with organisms) ========= */
{
  id: "blood-culture",
  name: "Blood Culture",
  synonyms: ["Blood Culture & Sensitivity", "BACTEC Culture"],
  department: "microbiology",
  schuylabCode: "BC",
  flags: ["critical"],

  summary: "Detects bacteria and fungi in bloodstream infection. Any positive Gram stain is phoned to the requesting clinician.",
  description: "Detects bacteria and fungi in bloodstream infections. Critical for diagnosing sepsis and endocarditis.",

  indications: [
    "Suspected sepsis or bacteraemia",
    "Suspected endocarditis",
    "Monitoring treatment response"
  ],

  referenceRange: "No growth",

  analyticalLimitations: [
    "Contamination causes false positives",
    "Fastidious organisms require longer incubation",
    "Prior antibiotics reduce sensitivity"
  ],

  sampleType: "Blood culture bottles",
  containerColour: "Aerobic (blue) / Anaerobic (purple) / Paediatric (pink)",
  sampleRequirements: [
    "Adult: 2 bottles (aerobic + anaerobic), 10 mL per bottle; 5 mL minimum",
    "Paediatric: paediatric bottle — 1 mL per year of age, maximum 5 mL",
    "Neonate: 0.5–4 mL"
  ],

  storageTransport: "Room temperature; incubate promptly. Do not refrigerate.",
  rejection: "Low volume, leaking bottle, delayed transport (> 4 hours). See Appendix 7.",
  methodology: "Automated continuous-monitoring system (e.g. BACTEC)",

  turnaround: { routine: "Preliminary 24–48 hours; final 5–7 days", urgent: "Positive Gram stain phoned on detection" },

  criticalAlert: "Any positive Gram stain — urgent notification to the requesting clinician.",

  // Microbiology only. Delete or set to null for non-culture tests.
  organismsReported: [
    { group: "Common pathogens", items: [
      "Staphylococcus aureus", "Streptococcus pneumoniae", "Escherichia coli",
      "Klebsiella pneumoniae", "Salmonella Typhi / Paratyphi", "Pseudomonas aeruginosa"
    ]},
    { group: "Opportunistic organisms", items: [
      "Enterococcus spp.", "Acinetobacter spp.", "Pseudomonas spp. (non-fermenters)", "Candida spp."
    ]},
    { group: "Commensal contaminants", items: [
      "Coagulase-negative staphylococci", "Corynebacterium spp.",
      "Bacillus spp. (non-anthracis)", "Viridans group streptococci"
    ], note: "Reported as contaminants unless repeated or clinically supported." }
  ],

  diseaseAssociations: [
    "Sepsis and bacteraemia",
    "Endocarditis",
    "Device-associated infection"
  ],

  conversionFactors: "Not applicable",

  appendixRefs: ["appendix-5", "appendix-7", "appendix-9b"],
  lastReviewed: "[FILL IN]"
},

/* ============ WORKED EXAMPLE 5 — Biochemistry ========================== */
{
  id: "alanine-transaminase",
  name: "Alanine Transaminase (ALT)",
  synonyms: ["SGPT"],
  department: "biochemistry",
  schuylabCode: "ALT, ALTV (analyser dependent)",
  flags: [],

  summary: "[FILL IN — one-line summary shown in search results.]",
  description: "[FILL IN — copy the 'Test Description' paragraph from Handbook v9.3.]",

  indications: [
    "[FILL IN — one bullet per indication.]"
  ],

  referenceRange: "[FILL IN — include age/sex-specific ranges if they differ.]",

  analyticalLimitations: [
    "[FILL IN]"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "[FILL IN — e.g. 3.5 mL SST]",

  storageTransport: "[FILL IN — or cite Appendix 9a]",
  rejection: "See Appendix 7: Sample Rejection Criteria.",
  methodology: "[FILL IN]",

  turnaround: { routine: "[FILL IN]", urgent: "[FILL IN]" },

  criticalAlert: "[FILL IN — or cite Appendix 4]",

  diseaseAssociations: [
    "[FILL IN]"
  ],

  conversionFactors: "[FILL IN — or 'Not applicable']",
  organismsReported: null,

  appendixRefs: ["appendix-7", "appendix-10"],
  lastReviewed: "[FILL IN]"
}

/* =========================================================================
   ▼▼▼  BLANK TEMPLATE — COPY EVERYTHING BETWEEN THE LINES  ▼▼▼
   Paste it above this comment block, and remember the comma after the
   previous entry's closing brace.
   -------------------------------------------------------------------------
,{
  id: "",                          // lowercase-with-hyphens, must be unique
  name: "",                        // full test name as it appears on reports
  synonyms: [""],                  // other names clinicians search for
  department: "",                  // must match an id in departments.js
  schuylabCode: "",                // LIMS code
  flags: [],                       // "critical" | "send-away" | "pending" | "stat"

  summary: "",                     // one line, shown in search results
  description: "",                 // full "Test Description" paragraph

  indications: [""],               // Clinical Use / Indications
  referenceRange: "",              // string, or array for multiple ranges
  analyticalLimitations: [""],

  sampleType: "",                  // e.g. "Serum", "EDTA whole blood", "Urine"
  containerColour: "",             // must match a tube in containers.js
  sampleRequirements: "",          // volume and tube

  storageTransport: "",
  rejection: "",
  methodology: "",

  turnaround: { routine: "", urgent: "" },

  criticalAlert: "",
  diseaseAssociations: [""],
  conversionFactors: "",
  organismsReported: null,         // microbiology only — see Blood Culture above

  appendixRefs: [],                // ids from appendices.js
  lastReviewed: ""
}
   -------------------------------------------------------------------------
   ▲▲▲  END OF BLANK TEMPLATE  ▲▲▲
   ========================================================================= */

];
