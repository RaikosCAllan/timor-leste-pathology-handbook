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
    { type: "file", label: "Pathology request form example.", file: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/downloads/pathology_request_form_example.pdf" },
    { type: "image", file: "", caption: "Example of how to fill out the pathology request form." }
  ]
},

{
  id: "appendix-2",
  number: 2,
  title: "Pathology Results Report",
  blocks: [
    { type: "text", body: "The pathology report contains full patient identification and details, tests requested, final results with reference ranges (corrected for age and sex), alert flags, scientist comments and the signature of the head of department." },
    { type: "file", label: "Final pathology report.", file: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/downloads/pathology_report_lns.pdf"},
    { type: "image", file: "", caption: "Example pathology report." }
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
        ["ACTH", "Adrenocorticotrophic Hormone"],
        ["AFB", "Acid-Fast Bacilli"],
        ["AKI", "Acute Kidney Injury"],
        ["AMR", "Antimicrobial Resistance"],
        ["APCR", "Activated Protein C Resistance"],
        ["APML", "Acute Promyelocytic Leukaemia"],
        ["APTT", "Activated Partial Thromboplastin Time"],
        ["CLSI", "Clinical and Laboratory Standards Institute"],
        ["CKD-EPI", "Chronic Kidney Disease - Epidemiology"],
        ["CSF", "Cerebrospinal Fluid"],
        ["DNA", "Deoxyribonucleic Acid"],
        ["DHIS2", "District Health Information Software, version 2"],
        ["DIC", "Disseminated Intravascular Coagulation"],
        ["EDTA", "Ethylenediaminetetraacetic Acid (anticoagulant)"],
        ["ELISA", "Enzyme-Linked Immunosorbent Assay"],
        ["EQA", "External Quality Assessment"],
        ["GLASS", "Global Antimicrobial Resistance Surveillance System (WHO)"],
        ["HDFN", "Haemolytic Disease of Foetus or Newborn"],
        ["HDU", "High Dependency Unit"],
        ["HL7", "Health Level 7 (interoperability standard)"],
        ["ICU", "Intensive Care Unit"],
        ["ISO", "International Organization for Standardization"],
        ["IT", "Information Technology"],
        ["KDIGO", "Kidney Disease: Improving Global Outcomes"],
        ["LIMS", "Laboratory Information Management System"],
        ["LOINC", "Logical Observation Identifiers Names and Codes"],
        ["MIC", "Minimum Inhibitory Concentration"],
        ["MRN", "Medical Record Number"],
        ["NAAT", "Nucleic Acid Amplification Test"],
        ["NATA", "National Association of Testing Authorities (Australia)"],
        ["NICU", "Neonatal Intensive Care Unit"],
        ["OPD", "Outpatient Department"],
        ["PCR", "Polymerase Chain Reaction"],
        ["POC", "Point-of-Care"],
        ["QC", "Quality Control"],
        ["QMS", "Quality Management System"],
        ["RCPA", "Royal College of Pathologists of Australasia"],
        ["RNA", "Ribonucleic Acid"],
        ["SICU", "Surgical Intensive Care Unit"],
        ["SOP", "Standard Operating Procedure"],
        ["TAT", "Turnaround Time"],
        ["VIP", "Very Important Patient"],
        ["WHO", "World Health Organization"],
      ]
    },
    { type: "table",
      heading: "Definitions",
      columns: ["Term", "Definition"],
      rows: [
        ["Analyte Test", "Substance being measured (e.g., glucose, creatinine). A single measurement that produces a result for an analyte."],
        ["Test Panel", "Defined group of tests reported together (e.g., LFTs)."],
        ["Specimen", "Material submitted for testing (serum, plasma, whole blood, urine, CSF, swab)."],
        ["Accession Number", "Unique identifier assigned to a specimen on receipt."],
        ["Order / Request", "Clinician or doctor instruction to perform one or more tests."],
        ["Result", "Numeric or categorical outcome after analysis."],
        ["Patient Identification", "Identification of the patient, including full name, date of birth, medical record number and any government issued identification document."],
        ["Specimen Labelling", "Label with patient identification, date, time and collector."],
        ["Rejection Criteria", "Reasons a specimen cannot be tested (mislabelled, insufficient volume, wrong tube, haemolysis, leakage, delayed transit)."],
        ["Stability", "Time/conditions under which an analyte remains valid (ambient, 2–8 °C, –20 °C)."],
        ["Traceability", "Documented path of a specimen from collection to result (e.g. Audit trail)."],
        ["Accuracy", "Closeness to the true value."],
        ["Precision", "Repeatability/reproducibility. "],
        ["Bias", "Systematic error causing results to differ from the true value."],
        ["Analytical Sensitivity", "Smallest amount detectable/quantifiable with stated performance."],
        ["Analytical Specificity", "Ability to measure the analyte exclusively. "],
        ["Linearity", "Range over which results are proportional to concentration."],
        ["Reportable Range", "Range of values the lab can report."],
        ["Carryover", "Contamination from a previous sample affecting the next sample."],
        ["Interference", "Substance/condition that biases a result (haemolysis, icterus, lipaemia, medication)."],
        ["Analytical Limitation", "Known constraints affecting validity/interpretation (includes interferences/method limits)."],
        ["Calibrator", "Material with assigned value to set the measurement scale."],
        ["Internal Quality Control (QC)", "Routine controls monitoring day-to-day performance."],
        ["External Quality Assessment (EQA)", "Independent results comparison with peer labs using unknown measurable samples."],
        ["Reference Interval ", "Central range for a healthy population (often 2.5th–97.5th percentile), may vary by age/sex."],
        ["Cut-off", "Threshold tied to clinical action."],
        ["Critical (Panic) Value", "Result requiring urgent clinician notification."],
        ["Delta Check", "Comparison with prior results to detect significant change or error."],
        ["Flags", "Indicators attached to results (L/H/CL/CH, comments, rerun markers)."],
        ["Collection-to-Receipt (Pre-analytical TAT)", "From collection to lab receipt."],
        ["Receipt-to-Result (Analytical/Post-analytical TAT)", "From lab receipt to result."],
        ["Total TAT", "From collection to result availability."],
        ["LIS/LIMS", "Laboratory Information (Management) System: orders, results, QC, reports."],
        ["EMR/EHR", "Electronic Medical/Health Record for patient care documentation."],
        ["SI Units:", "Default units (e.g., mmol/L, µmol/L, g/L)."],
        ["Conventional Units", "Used only if clinically standard."],
        ["Unit Conversion", "e.g., µmol/L → mg/dL by dividing by 88.4 (used internally for eGFR)."],
        ["eGFR", "Estimated glomerular filtration rate (mL/min/1.73 m²) from creatinine, age, sex using a validated equation."],
        ["CKD-EPI 2021", "Race-neutral creatinine-based eGFR equation used in this handbook."],
        ["Data Integrity", "Accuracy, completeness, consistency, and security of data across its lifecycle."],
        ["Validation / Verification", "Validation = demonstrate performance; Verification = confirm fit-for-purpose locally."],
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
      columns: ["Department", "Test", "Low critical", "High critical", "Units", "Clinical significance"],
      rows: [
        ["Biochemistry", "Potassium", "<2.5 mmol/L", ">6.5 mmol/L", "mmol/L", "Risk of arrhythmia / cardiac arrest; confirm immediately"],
        ["Biochemistry", "Sodium",    "<120 mmol/L", ">160 mmol/L", "mmol/L", "Severe electrolyte imbalance"],
        ["Biochemistry", "Glucose", "<2.5 mmol/L", "> 25 mmol/L", "mmol/L", "Hypoglycaemia / DKA / HHS"],
        ["Biochemistry", "Creatinine (new finding)", ">400 µmol/L", "", "µmol/L", "Suggest severe renal impairment"],
        ["Biochemistry", "Troponin I", "Above MI decision threshold ", "", "", "Suggestive of acute myocardial infarction"],
        ["Haematology",  "Haemoglobin","<60 g/L","> 200 g/L", "g/L",    "Severe anaemia / polycythaemia risk"],
        ["Haematology", "Platelets", "<20 ×10⁹/L", ">1000 x10⁹/L", "×10⁹/L", "Bleeding risk / thrombocytosis Urgent review required"],
        ["Haematology", "White Cell Count ", ">100 ×10⁹/L", "", "×10⁹/L", "Possible acute leukaemia "],
        ["Haematology", "Neutrophils", "<0.5 ×10⁹/L", "", "×10⁹/L", "Phone immediatelyRisk of neutropenic sepsis; treat urgently"],
        ["Microbiology", "Blood culture", "—", "Any positive Gram stain", "—", "Immediate clinical review; start empiric therapy"],
        ["Microbiology", "CSF Gram Stain", "—", "Organisms seen on Gram stain", "—", "Bacterial meningitis until proven otherwise / urgent treatment needed"],
        ["Microbiology", "Malaria Smear", "", "Any positive", "", "Urgent antimalarial therapy needed"],
        ["Coagulation", "INR", "", ">6.0 ", "ratio", "Phone immediately"],
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
      "Calls are to be documented in Schuylab for quality assurance",
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
        ["Biochemistry", "Serum / plasma",   "Refrigerated", "2–8 °C if delay >2 hr", "Centrifuge SST within 2 hr "],
        ["Haematology",  "EDTA whole blood", "Room temp", "Room temp", "Do not refrigerate (RBC morphology changes). Test within 24 hr."],
        ["Coagulation", "Citrate plasma", "Room temp", "Room temp", "Fill to line; test ideally within 4 hr."],
        ["Serology / Immunology", "Serum", "2–8 °C", "Refrigerated", "Avoid freeze–thaw cycles."],
        ["Hormones / Special Chemistry", "Serum", "2–8 °C", "Refrigerated", "See test description"],
        ["Cytology – Pap Smear", "Slide / LBC vial", "Room temp", "Room temp", "Fix slides immediately. LBC stable at room temp."],
        ["Urine (Routine)", "Urine", "Refrigerate", "Refrigerate", "Analyse within 2 hr or refrigerate ≤24 hr."],
        ["Blood Bank", "EDTA whole blood", "2–8 °C", "Refrigerate", "Sample valid ≤72 hr in transfused/ pregnant patients."],
        ["Molecular / TB (GeneXpert)", "Sputum / fluids", "2–8 °C", "Refrigerated", "Do not freeze. Process within 2–3 days."],
        ["Other body fluids (pleural, ascitic, pericardial, CSF)", "Sterile container", "Room temp, urgent", "ASAP", "Large volumes improve diagnostic yield."],
        ["Blood Bank",   "EDTA whole blood", "2–8 °C",    "Room temperature ≤ 24 hours", "[FILL IN]"],
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
      columns: ["Specimen", "Collection requirements", "Transport", "Stability", "Notes"],
      rows: [
        ["Blood Culture Adult", "2 bottles (aerobic + anaerobic) 10mL / bottle. 5mL minimum ", "Room temp, transport ASAP", "≤2 hours", "Do NOT refrigerate"],
        ["Blood Culture Pediatric", "paediatric blood culture bottle. Collect 1mL per age, maximum 5mL ", "Room temp, transport ASAP", "≤2 hours", "Do NOT refrigerate"],
        ["Blood Culture Neonates", "0.5 - 4mL ", "Room temp, transport ASAP", "≤2 hours", "Do NOT refrigerate"],
        ["Urine", "Midstream (10–20 mL)", "Refrigerate if >2 hrs delay", "≤24 hrs at 2–8°C", "-"],
        ["CSF", "Collect ≥1 mL in sterile container", "Room temp, Urgent delivery", "Immediate", "Do NOT refrigerate"],
        ["Sputum", "Early morning deep cough specimen", "Room temp, ASAP", "≤2 hrs", "Reject saliva"],
        ["Stool", "Fresh sample ", "Room temp", "≤2 hrs", "For ova & parasites: preserve if delay expected"],
        ["Wound Swab / Pus", "Sterile swab in transport medium", "Room temperature", "≤2 hrs", "Deep tissue sample preferred"],
        ["Nasopharyngeal / Throat Swab", "Collect into viral/transport medium", "2–8 °C", "48–72 hrs at 2–8 °C", "For PCR, avoid wooden swabs"],
        ["AFB Samples (TB/MTB)", "3 early morning sputum samples. 2–5 mL each", "2–8 °C", "≤5–7 days", "Do not pool samples"],
        ["Other Sterile Body Fluids (e.g., pleural, ascitic)", "Collect ≥1–5 mL in sterile containers", "Room temp; urgent", "≤1–2 hrs", "Large volume increases sensitivity"],

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
      columns: ["Analyte", "Conventional unit", "SI unit", "Conversion Factor"],
      rows: [
        ["Glucose", "1 mg/dL", "0.0555 mmol/L", "× 0.0555"],
        ["Cholesterol", "1 mg/dL", "0.0259 mmol/L", "× 0.0259"],
        ["Triglyceride", "1 mg/dL", "0.0113 mmol/L", "× 0.0113 "],
        ["Calcium (total)", "1 mg/dL", "0.249 mmol/L", "× 0.249 "],
        ["Phosphate (inorganic)", "1 mg/dL", "0.323 mmol/L", "× 0.323 "],
        ["Magnesium", "1 mg/dL", "0.411 mmol/L", "× 0.411"],
        ["Iron", "1 µg/dL", "0.179 µmol/L", "× 0.179 "],
        ["Bilirubin", "1 mg/dL", "17.1 µmol/L", "× 17.1 "],
        ["Uric Acid", "1 mg/dL", "59.5 µmol/L", "× 59.5"],
        ["Haemoglobin", "1 g/dL", "10 g/L", "× 10"],
        ["Albumin", "1 g/dL", "10 g/L", "× 10"],
        ["BUN", "1 mg/dL", "0.357 mmol/L (Urea)", "× 0.357"],
        ["Urea", "1 mmol/L", "2.8 mg/dL (BUN equivalent)", "÷ 0.357"],
        ["Creatinine", "1 mg/dL", "88.4 µmol/L", "× 88.4"],
        ["Creatinine", "1 µmol/L", "0.0113 mg/dL", "÷ 88.4 "],
      ]
    }
  ]
},

{
  id: "appendix-11",
  number: 11,
  title: "eGFR and CKD G-Stage References",
  blocks: [
    { type: "text", body: "(CKD-EPI 2021 race-neutral equation). " },
    { type: "text", body: "Estimated glomerular filtration rate (eGFR) is calculated automatically from serum creatinine, age, and sex using the CKD-EPI 2021 creatinine-based equation." },
    { type: "text", body: "Results are reported in mL/min/1.73 m², standardised to body surface area." },
    { type: "table",
      heading: "CKD G-stages",
      columns: ["Stage", "eGFR (mL/min/1.73 m²)", "Description"],
      rows: [
        ["G1",  "≥ 60",   "Normal or high (if no other evidence of kidney damage)"],
        ["G3a", "45–59",  "Mildly to moderately decreased"],
        ["G5",  "< 15",   "Kidney failure"]
      ]
    },
    { type: "text", body: "CKD diagnosis requires ≥3 months of reduced eGFR or evidence of kidney damage (e.g., proteinuria, structural abnormalities)." },
    { type: "text", body: "Single eGFR values should not be used alone to diagnose CKD or to make major treatment decisions." },
      ]
  },

  {
    id: "appendix-12",
    number: 12,
    title: "General Guide to Reference Ranges",
    blocks: [
      {
        type: "text", body: [
          "This appendix provides a concise overview of how reference ranges are managed in Laboratorio Nacional Da Saude Do INSPTL.",
          "Detailed numerical ranges are not reproduced in the handbook because:",
          "- Reference ranges may vary by analyser, methodology, and reagent lot.",
          "- CGM Schuylab (LIMS) is the authoritative and automatically updated source.",
          "- Ranges are periodically reviewed to align with RCPA, CLSI, WHO, and manufacturer guidance.",
          "- All clinicians must refer to the ranges displayed on the patient's report."
        ]
      },
      {
        type: "text", body: [
          "All LIMS-generated reports include:",
          "• Age and sex-specific reference ranges (where applicable)",
          "• SI units",
          "• Abnormal flags (L/H/Critical)",
          "• Analyser and method-specific interpretive comments",
          "The reference range printed on the patient's report is the correct value for interpretation."
        ]
      },
      {
        type: "text", body: [
          "Ranges integrated into the LIMS are derived from:",
          "• RCPA Manual – Pathology Tests",
          "• Pathology Tests Explained (Australia)",
          "• CLSI reference interval standards",
          "• Manufacturer-validated analyser ranges",
          "• WHO / international guidelines for infectious disease and microbiology",
          "• Local review by pathology specialists where population-specific adjustments are required",
          "",
          "Major Test Categories — Summary Notes",
          "1. Haematology",
          "• Full adult, paediatric, and neonatal intervals embedded in the LIMS.",
          "• Covers FBC, WBC differential, reticulocytes, ESR, coagulation screens, etc.",
          "• See LIMS report for true reference interval.",
          "",
          "2. Biochemistry",
          "• All reference intervals are analyser specific.",
          "• Includes electrolytes, renal and liver profiles, lipids, glucose, cardiac markers, iron studies.",
          "• See LIMS report for analyser-validated ranges.",
          "",
          "3. Serology / Immunology",
          "• Most tests are qualitative (Reactive / Non-reactive).",
          "• Quantitative tests (e.g., CRP, ferritin, HIV viral load) follow assay-specific ranges.",
          "• Interpretation appears automatically on LIMS reports.",
          "",
          "4. Microbiology",
          "• No numeric \"reference ranges.\"",
          "• Culture results follow CLSI/EUCAST interpretive categories:",
          "S = Susceptible, I = Intermediate, R = Resistant.",
          "• Expected microscopy values (e.g., urine WBCs, CSF counts) are displayed on the report.",
          "",
          "5. Molecular Biology",
          "• PCR assays report:",
          "Detected",
          "Not detected",
          "Invalid / Inhibited",
          "WHO standards (IU/mL) or manufacturer thresholds apply.",
          "See LIMS report for method-specific interpretation.",
          "",
          "6. Blood Bank / Transfusion",
          "No numerical ranges.",
          "Reports provide:",
          "ABO/RhD group",
          "Antibody screen",
          "Compatibility results (e.g., \"Compatible\", \"Incompatible\")",
          "Interpretation follows national transfusion guidelines.",
          "",
          "Use of Reference Ranges in This Handbook",
          "Reference ranges shown within individual test descriptions are provided for general orientation and educational purposes only. They reflect commonly used adult reference intervals and typical clinical thresholds.",
          "These examples do not replace the analyser, method, age, and sex-specific reference range printed on the patient pathology report, which remains the only authoritative range for clinical interpretation.",
          "",
          "Important Note",
          "The LIMS-generated reference range is the only authoritative reference. It supersedes all handbook examples, external textbooks, or previous versions.",
        ],
      },
    ],
  },

  {
    id: "appendix-13",
    number: 13,
    title: "Serology Reference Information",
    blocks: [
      {
        type: "table",
        heading: "Serology Reference Information",
        columns: ["Test", "Sample Type", "Stability", "Notes"],
        rows: [
          ["HIV 1/2 Ab/Ag", "Serum / Plasma (2-3 ml)", "2–8°C ≤7 days", "Avoid haemolysis. Reactive results require confirmatory testing"],
          ["HBsAg", "Serum / Plasma", "2–8°C ≤7 days", "Do not freeze/thaw repeatedly. Positive results require clinical correlation and possible HBV viral load."],
          ["Anti-HCV", "Serum or plasma", "2–8 °C ≤5–7 days", "Reactive screens require confirmatory nucleic acid testing (HCV RNA) if available."],
          ["Dengue NS1 Antigen", "Serum (2–3 mL)", "2–8°C ≤48 hrs, freeze if >48 hrs", "Optimal in days 1–7 of illness. Combine with IgM if late presentation."],
          ["Dengue IgM / IgG", "Serum (2–3 mL)", "2–8 °C ≤5 days", "IgM may remain detectable for months; interpretation must match clinical timeline"],
          ["Syphilis (RPR)", "Serum (2–3 mL)", "2–8°C ≤5 days", "Screen only – confirm by TPHA/FTA-ABS"],
          ["TPHA / TPPA", "Serum (2–3 mL)", "2–8 °C ≤7 days", "Treponemal confirmatory test; remains positive for life."],
          ["Toxoplasma IgG/IgM", "Serum (2–3 mL)", "2–8 °C ≤7 days", "IgM false positives possible; confirm if clinically important (e.g., pregnancy)."],
          ["Rubella IgG/IgM", "Serum (2–3 mL)", "2–8 °C ≤7 days", "IgM unreliable without paired samples; use IgG for immunity status."],
          ["HBsAb (Anti-HBs)", "Serum (2–3 mL)", "2–8 °C ≤7 days", "Protective immunity ≥10 IU/L."],
          ["HBcAb (Total / IgM)", "Serum (2–3 mL)", "2–8 °C ≤7 days", "IgM indicates recent infection; Total anti-HBc indicates past exposure."],
          ["HBeAg / Anti-HBe", "Serum (2–3 mL)", "2–8 °C ≤7 days", "Used for HBV infectivity / replication status."],
          ["H. pylori IgG", "Serum (2–3 mL)", "2–8 °C ≤7 days", "Cannot distinguish past vs current infection; stool antigen or urea breath test preferred if available."],
      ]
    },
  ]
 },
  {
    id: "appendix-14",
    number: 14,
    title: "Hepatitis B and C Serology Interpretation",
    blocks: [
      {
          type: "heading",
          text: "Hepatitis B Serology Interpretation"
        },
      { type: "table",
        columns: ["HBsAg", "Anti-HBs", "Anti-HBc (IgM/IgG)", "HBeAg / Anti-HBe", "HBV DNA (Viral Load)", "Interpretation"],
        rows: [
          ["-", "-", "-", "-", "-", "Susceptible (never infected, not immune)"],
          ["-", "+", "-", "-", "-", "Immune due to vaccination"],
          ["-", "+", "+ (IgG)", "Negative", "Negative", "Immune due to past natural infection"],
          ["+", "-", "+ (IgG IgM)", "+ HBeAg ", "DNA high", "Acute infection, highly infectious"],
          ["+", "-", "+ (IgG IgM)", "- HBeAg", "DNA variable", "Acute infection, lower infectivity"],
          ["+ (>6 months)", "-", "+ (IgG)", "+ HBeAg", "DNA High", "Chronic infection, active replication (high infectivity)"],
          ["+ (>6 months)", "-", "+ (IgG)", "+ Anti-HBe", "DNA low/variable", "Chronic infection, inactive carrier or pre-core mutant"],
          ["-", "-", "+ (Isolated anti-HBc IgG)", "-", "+/-", "Possible occult HBV infection or false positive – confirm with HBV DNA"],
        ]
      },
      {
        type: "heading",
        text: "Hepatitis C Serology Interpretation"
      },
      { type: "table",
        columns: ["Anti-HCV", "HCV RNA (PCR)", "Interpretation"],
        rows: [
          ["-", "-", "No evidence of infection"],
          ["+", "-", "Past resolved infection OR false positive à repeat with alternate assay"],
          ["+", "+", "Current infection (acute or chronic)"],
          ["-", "+", "Early acute infection (window period) or immunosuppression à repeat and monitor"],
        ]
      },
      {
        type: "heading",
        text: "Key Interpretation Notes"
      },
      {
        type: "text",
        body: [
          "•	HBsAg persistence >6 months = Chronic Hepatitis B.",
          "•	Anti-HBs ≥10 mIU/mL = protective immunity.",
          "•	Anti-HBc IgM = acute/recent infection marker.",
          "•	HBeAg positive = High infectivity; anti-HBe positive usually means lower infectivity.",
          "•	HBV DNA quantification is essential for monitoring therapy and detecting reactivation.",
          "•	HCV antibody alone does not indicate active infection — Detection of HCV RNA is required to confirm active infection.",
        ]
      },
    ]
  },

  {
    id: "appendix-15",
    number: 15,
    title: "HIV Testing and Interpretation",
    blocks: [
      {
        type: "table",
        heading: "HIV Screening and Diagnostic Testing",
        columns: ["Test", "Target", "Interpretation", "Notes"],
        rows: [
          ["HIV Rapid Test (Ab/Ag)", "Detects HIV-1/2 antibodies ± p24 antigen", "Negative = no evidence of infection; Positive = requires confirmatory testing", "Rapid immunochromatographic test. May miss very early infection (window period)."],
          ["HIV ELISA (4th Gen)", "HIV-1/2 antibodies and p24 antigen", "More sensitive than rapid test; Positive = requires confirmatory test", "Automated immunoassay; detects infection earlier than antibody-only tests."],
          ["Western Blot (legacy, phased out)", "HIV-1 specific proteins", "Previously used as confirmatory test", "Largely replaced by supplemental nucleic acid tests (NAT)."],
          ["HIV RNA PCR (Viral Load)", "Detects and quantifies HIV RNA", "Positive = active infection; monitors therapy effectiveness", "Also used in early infant diagnosis (maternal antibodies interfere with serology)."],
          ["HIV DNA PCR (Proviral DNA)", "Detects integrated proviral DNA", "Used for early infant diagnosis and special cases", "Specialised; not routine."],
        ]
      },
      {
        type: "table",
        heading: "HIV Infection Status – Typical Patterns",
        columns: ["HIV Rapid/ELISA", "Confirmatory (NAT/Western Blot)", "HIV RNA (PCR)", "Interpretation"],
        rows: [
          ["-", "-", "-", "No evidence of HIV infection"],
          ["+", "+", "+", "HIV infection confirmed"],
          ["+", "-", "-", "False positive (repeat testing required)"],
          ["-", "-", "+", "Acute infection (window period) – repeat and monitor"],
        ]
      },
      {
        type: "table",
        heading: "HIV Monitoring – Viral Load & CD4",
        columns: ["Test", "Reference/Target range", "Clinical significance"],
        rows: [
          ["HIV Viral Load (RNA PCR)", "Target = Undetectable (<50 copies/mL)", "Primary marker of treatment response. High levels = uncontrolled infection and transmission risk."],
          ["CD4 Count", "Adult reference range: 500–1,500 cells/µL", "Used for staging, monitoring immune function, and decision-making for opportunistic infection prophylaxis."],
        ]
      },
      {
        type: "text",
        heading: "Key Notes",
        body: [
          ["•	Window period: HIV antibodies may not be detectable for 2–6 weeks post-infection; p24 antigen and RNA appear earlier."],
          ["•	Diagnosis: A reactive rapid test must always be confirmed with a second different assay (ELISA or NAT)."],
          ["•	Monitoring: Viral load is the key test for therapy response; CD4 count is used to assess immune status."],
        ],
      },
    ]
  },

  {
    id: "appendix-16",
    number: 16,
    title: "Syphilis Testing Algorithm",
    blocks: [
      {
        type: "text",
        body: ["Purpose:", "To guide interpretation and clinical use of non-treponemal (RPR) and treponemal (TPA/Anti-TP) tests in syphilis diagnosis and follow-up."]
      },
      {
        type: "table",
        columns: ["Step", "Test", "Possible result", "Action/Interpretation", "Notes"],
        rows: [
          ["1", "RPR (non-treponemal)", "Non-reactive", "No evidence of active syphilis", "Early infection cannot be excluded; repeat if clinically indicated"],
          ["1", "RPR (non-treponemal)", "Reactive", "Proceed to treponemal test (Anti-TP / TPA)", "RPR titre essential for baseline and follow-up."],
          ["2", "Anti-TP / TPA (treponemal)", "Reactive", "Confirms syphilis (current or past infection)", "Treponemal antibodies usually remain reactive for life"],
          ["2", "Anti-TP / TPA (treponemal)", "Non-reactive", "Likely false positive RPR", "Consider clinical context and repeat testing"],
          ["3", "RPR + Treponemal (both positive)", "Active or previously treated syphilis", "Clinical history + RPR titre trend needed", "RPR titre decline expected after effective therapy"],
          ["4", "Treponemal positive, RPR negative", "Past or latent syphilis", "Treatment history essential", "May also represent very early or late infection"],
        ],
      },
    ],
  },

{
  id: "appendix-17",
  number: 17,
  title: "Common Pathology Calculations",
  blocks: [
    { type: "table",
      columns: ["Calculation", "Formula", "Notes"],
      rows: [
        ["CKD-EPI 2021 - eGFR", "eGFRcr = 142 x min(Scr/κ, 1)α x max(Scr/κ, 1)-1.200 x 0.9938Age x 1.012  ", "if female"],
        ["Serum–Ascites Albumin Gradient (SAAG)", "Serum albumin − ascitic fluid albumin", "Assessment of ascites; helps determine whether portal hypertension is likely"],
        ["Pleural Fluid/Serum Protein Ratio", "Pleural fluid total protein ÷ serum total protein", "Component of Light’s criteria"],
        ["Pleural Fluid/Serum LDH Ratio", "Pleural fluid LDH ÷ serum LDH", "Component of Light’s criteria"],
        ["Light’s Criteria", "Fluid/serum protein ratio; fluid/serum LDH ratio; pleural LDH relative to serum LDH ULN", "Classification of pleural effusions as exudative/transudative"],
        ["Corrected Calcium", "Uses measured calcium and albumin", "Estimates calcium adjusted for abnormal albumin; formula is method/unit dependent"],
        ["Calculated Globulin", "Total protein − albumin", "Assessment of globulin fraction"],
        ["Albumin/Globulin Ratio (A/G)", "Albumin ÷ globulin", "Protein pattern assessment"],
        ["Anion Gap", "Na − (Cl + HCO₃)", "Acid–base assessment"],
        ["Albumin-corrected Anion Gap", "Adjusts anion gap for serum albumin", "Acid–base assessment when albumin is reduced"],
        ["Calculated Serum Osmolality", "Commonly based on Na, glucose and urea", "Investigation of osmolar disorders and comparison with measured osmolality"],
        ["Osmolal Gap", "Measured osmolality − calculated osmolality", "Investigation of unexplained osmoles/toxic alcohol exposure"],
        ["Creatinine + age + sex using validated equation", "Urine creatinine × urine volume ÷ plasma creatinine × collection time", "Renal function; usually based on timed urine"],
        ["Urine Albumin/Creatinine Ratio (ACR)", "Urine albumin ÷ urine creatinine", "Assessment of albuminuria"],
        ["Urine Protein/Creatinine Ratio (PCR)", "Urine protein ÷ urine creatinine", "Estimation of urinary protein excretion"],
        ["Fractional Excretion of Sodium (FENa)", "Uses urine/serum sodium and creatinine", "Selected assessment of acute kidney injury"],
        ["Fractional Excretion of Urea (FEUrea)", "Uses urine/serum urea and creatinine", "Selected assessment of renal handling, particularly where FENa has limitations"],
        ["Transferrin Saturation (TSAT)", "Serum iron ÷ transferrin-derived iron-binding capacity × 100", "Iron status"],
        ["Calculated LDL Cholesterol", "Total cholesterol − HDL-C − estimated VLDL-C", "Lipid assessment; equation dependent"],
        ["Non-HDL Cholesterol", "Total cholesterol − HDL-C", "Atherogenic cholesterol estimate"],
        ["INR", "(Patient PT ÷ mean normal PT)^ISI", "Standardisation of prothrombin time"],
        ["Corrected Reticulocyte Count", "Reticulocyte % adjusted for patient haematocrit", "Assessment of marrow response to anaemia"],
        ["Absolute Cell Counts", "WBC × cell percentage", "Absolute lymphocyte, eosinophil, monocyte etc. counts"],
        ["Mentzer Index", "MCV ÷ RBC count", "Screening aid when considering iron deficiency versus thalassaemia trait; not diagnostic"],
        ["CSF/Serum Glucose Ratio", "CSF glucose ÷ serum glucose", "Interpretation of CSF glucose"],
        ["CSF/Serum Albumin Quotient", "CSF albumin ÷ serum albumin, with unit correction where required", "Assessment of blood–CSF barrier function"],
        ["Body Fluid/Serum Creatinine Ratio", "Fluid creatinine ÷ serum creatinine", "Helps investigate suspected urine leakage into a body cavity"],
        ["Body Fluid/Serum Bilirubin Ratio", "Fluid bilirubin ÷ serum bilirubin", "Helps investigate suspected bile leakage"],
        ["24-hour Urine Excretion", "Urine concentration × 24-hour urine volume", "Quantification of analyte excretion"],
        ["Bicarbonate from Blood Gas", "Calculated using pH and pCO₂", "Acid–base assessment"],
        ["Base Excess", "Derived from blood-gas parameters", "Assessment of metabolic component of acid–base disturbance"],
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
