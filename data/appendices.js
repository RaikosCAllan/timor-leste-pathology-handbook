/* =========================================================================
   appendices.js — The 17 handbook appendices
   -------------------------------------------------------------------------
   Each appendix is built from "blocks". A block is one of:

     { type: "text",  body: "A paragraph." }
     { type: "text",  body: ["Paragraph one.", "Paragraph two."] }
     { type: "list",  heading: "Optional heading", items: ["a", "b"] }
     { type: "table", heading: "Optional heading",
                      columns: ["Col A", "Col B"],
                      rows: [ ["a1","b1"], ["a2","b2"] ] }
     { type: "note",  body: "Highlighted note or caution." }
     { type: "file",  label: "Download the form (PDF)", file: "assets/downloads/form.pdf" }
     { type: "image", file: "assets/img/algorithm.png", caption: "Optional caption" }

   Appendices 6 and 7 are rendered in full in their own sections of the site
   (Specimen Collection, Specimen Criteria) and only cross-link from here.
   ========================================================================= */

window.APPENDICES = [

{
  id: "appendix-1",
  number: 1,
  title: "Pathology Request Form",
  blocks: [
    { type: "text", body: "The standard pathology request form used across all departments." },
    { type: "file", label: "[FILL IN — Download the request form (PDF)]", file: "" },
    { type: "image", file: "", caption: "[FILL IN — scan of the request form, placed in assets/img/]" }
  ]
},

{
  id: "appendix-2",
  number: 2,
  title: "Pathology Results Report",
  blocks: [
    { type: "text", body: "[FILL IN — explain the layout of a SchuyLab report: identifiers, collection and report times, units, reference ranges, interpretive comments, previous results.]" },
    { type: "image", file: "", caption: "[FILL IN — example report]" }
  ]
},

{
  id: "appendix-3",
  number: 3,
  title: "Abbreviations and Definitions",
  blocks: [
    { type: "table",
      heading: "Abbreviations",
      columns: ["Abbreviation", "Meaning"],
      rows: [
        ["LNS", "Laboratório Nacional de Saúde"],
        ["LIMS", "Laboratory Information Management System"],
        ["MRN", "Medical Record Number"],
        ["[FILL IN]", "[FILL IN]"]
      ]
    },
    { type: "table",
      heading: "Definitions",
      columns: ["Term", "Definition"],
      rows: [
        ["[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
},

{
  id: "appendix-4",
  number: 4,
  title: "Alert List — Critical / Life-Threatening Results Requiring Immediate Notification",
  blocks: [
    { type: "text", body: "Results at or beyond these limits are telephoned to the requesting clinician or ward as soon as they are verified." },
    { type: "table",
      columns: ["Department", "Test", "Low critical", "High critical", "Units", "Action"],
      rows: [
        ["Biochemistry", "Potassium", "[FILL IN]", "[FILL IN]", "mmol/L", "Phone immediately"],
        ["Biochemistry", "Sodium",    "[FILL IN]", "[FILL IN]", "mmol/L", "Phone immediately"],
        ["Biochemistry", "Glucose",   "[FILL IN]", "[FILL IN]", "mmol/L", "Phone immediately"],
        ["Haematology",  "Haemoglobin","[FILL IN]","[FILL IN]", "g/L",    "Phone immediately"],
        ["Haematology",  "Platelets", "[FILL IN]", "[FILL IN]", "×10⁹/L", "Phone immediately"],
        ["Microbiology", "Blood culture", "—", "Any positive Gram stain", "—", "Phone immediately"],
        ["[FILL IN]",    "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]"]
      ]
    },
    { type: "note", body: "Add one row per alert-listed test. Any test appearing here should also carry the \"critical\" flag in tests.js so it is badged in the Test Directory." }
  ]
},

{
  id: "appendix-5",
  number: 5,
  title: "Critical / High-Risk Results Policy Summary",
  blocks: [
    { type: "text", body: "[FILL IN — who notifies, who may receive, how the call is documented, escalation if the clinician cannot be reached, and the time target for notification.]" },
    { type: "list", heading: "Notification record must include", items: [
      "Date and time of the call",
      "Name and role of the person notified",
      "Result communicated and read back",
      "Name of the laboratory staff member making the call",
      "[FILL IN]"
    ]}
  ]
},

{
  id: "appendix-6",
  number: 6,
  title: "Order of Draw Quick Guide and Tube Reference",
  crossLink: "#collection",
  blocks: [
    { type: "text", body: "The full order-of-draw guide and tube reference table is in the Specimen Collection section of this site." }
  ]
},

{
  id: "appendix-7",
  number: 7,
  title: "Sample Rejection Criteria (All Departments)",
  crossLink: "#criteria",
  blocks: [
    { type: "text", body: "The full rejection criteria are in the Specimen Criteria section of this site." }
  ]
},

{
  id: "appendix-8",
  number: 8,
  title: "Requesting and Reporting Basics",
  blocks: [
    { type: "list", heading: "Every request must include", items: [
      "Full name, date of birth and medical record number",
      "Requesting clinician's full name, registration number where available, and contact details",
      "Relevant symptoms, provisional diagnosis or clinical question",
      "Treatment status — antibiotics, transfusion, dialysis",
      "Clear marking of time-critical or urgent requests",
      "Correct request form or LIMS entry pathway; no ambiguous abbreviations",
      "Specimen type and site clearly stated; one patient per form"
    ]},
    { type: "list", heading: "Every report includes", items: [
      "Patient identifiers — name, date of birth, MRN",
      "Date and time of collection and of reporting",
      "Units in SI format",
      "Analyser-specific reference ranges",
      "Interpretive comments where clinically appropriate",
      "Previous results for comparison where available"
    ]},
    { type: "note", body: "Reference ranges vary with age, sex, pregnancy and method. The LIMS report always shows the correct analyser-specific range. Trend interpretation is recommended for chronic conditions." }
  ]
},

{
  id: "appendix-9a",
  number: "9a",
  title: "Storage and Transport — Quick Reference (All Disciplines)",
  blocks: [
    { type: "table",
      columns: ["Department", "Sample type", "Storage", "Transport", "Notes"],
      rows: [
        ["Haematology",  "EDTA whole blood", "[FILL IN]", "[FILL IN]", "[FILL IN]"],
        ["Coagulation",  "Citrate plasma",   "[FILL IN]", "[FILL IN]", "Centrifuge within 2–4 hours"],
        ["Biochemistry", "Serum / plasma",   "[FILL IN]", "[FILL IN]", "[FILL IN]"],
        ["Microbiology", "Blood culture",    "Room temperature", "Deliver within 4 hours", "Do not refrigerate"],
        ["Microbiology", "CSF",              "[FILL IN]", "[FILL IN]", "Never refrigerate"],
        ["Blood Bank",   "EDTA whole blood", "2–8 °C",    "Room temperature ≤ 24 hours", "[FILL IN]"],
        ["[FILL IN]",    "[FILL IN]",        "[FILL IN]", "[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
},

{
  id: "appendix-9b",
  number: "9b",
  title: "Microbiology Specimen Handling",
  blocks: [
    { type: "table",
      columns: ["Specimen", "Container", "Volume", "Transport", "Notes"],
      rows: [
        ["[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
},

{
  id: "appendix-10",
  number: 10,
  title: "Unit Conversion Factors (SI ↔ Conventional)",
  blocks: [
    { type: "table",
      columns: ["Analyte", "SI unit", "Conventional unit", "SI → Conventional", "Conventional → SI"],
      rows: [
        ["[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
},

{
  id: "appendix-11",
  number: 11,
  title: "eGFR and CKD G-Stage References",
  blocks: [
    { type: "text", body: "[FILL IN — equation in use (e.g. CKD-EPI), and any local caveats.]" },
    { type: "table",
      heading: "CKD G-stages",
      columns: ["Stage", "eGFR (mL/min/1.73 m²)", "Description"],
      rows: [
        ["G1",  "≥ 90",   "Normal or high"],
        ["G2",  "60–89",  "Mildly decreased"],
        ["G3a", "45–59",  "Mildly to moderately decreased"],
        ["G3b", "30–44",  "Moderately to severely decreased"],
        ["G4",  "15–29",  "Severely decreased"],
        ["G5",  "< 15",   "Kidney failure"]
      ]
    },
    { type: "note", body: "Confirm these stage boundaries against the source used in Handbook v9.3 before publishing." }
  ]
},

{
  id: "appendix-12",
  number: 12,
  title: "General Guide to Reference Ranges",
  blocks: [
    { type: "note", body: "The LIMS report is the authoritative source. This table is a general guide only." },
    { type: "table",
      columns: ["Test", "Units", "Adult male", "Adult female", "Paediatric", "Notes"],
      rows: [
        ["[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
},

{
  id: "appendix-13",
  number: 13,
  title: "Serology Reference Information",
  blocks: [
    { type: "text", body: "[FILL IN]" }
  ]
},

{
  id: "appendix-14",
  number: 14,
  title: "Hepatitis B and C Serology Interpretation",
  blocks: [
    { type: "table",
      columns: ["HBsAg", "Anti-HBs", "Anti-HBc", "IgM anti-HBc", "Interpretation"],
      rows: [
        ["[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
},

{
  id: "appendix-15",
  number: 15,
  title: "HIV Testing and Interpretation",
  blocks: [
    { type: "text", body: "[FILL IN — national testing algorithm and reporting rules.]" },
    { type: "image", file: "", caption: "[FILL IN — algorithm diagram]" }
  ]
},

{
  id: "appendix-16",
  number: 16,
  title: "Syphilis Testing Algorithm",
  blocks: [
    { type: "text", body: "[FILL IN]" },
    { type: "image", file: "", caption: "[FILL IN — algorithm diagram]" }
  ]
},

{
  id: "appendix-17",
  number: 17,
  title: "Calculations",
  blocks: [
    { type: "table",
      columns: ["Calculation", "Formula", "Notes"],
      rows: [
        ["[FILL IN — e.g. Anion gap]", "[FILL IN]", "[FILL IN]"]
      ]
    }
  ]
}

];

/* =========================================================================
   references.js content lives here too — the bibliography shown at the
   bottom of the Appendices section.
   ========================================================================= */

window.REFERENCES = [
  { group: "A. Core clinical and laboratory test references", items: ["[FILL IN — copy from Handbook v9.3 References section]"] },
  { group: "B. Analytical and pre-analytical standards (CLSI, WHO)", items: ["[FILL IN]"] },
  { group: "C. Governance, accreditation and national standards", items: ["[FILL IN]"] },
  { group: "D. Infectious disease and parasitology references", items: ["[FILL IN]"] }
];
