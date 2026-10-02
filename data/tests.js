/* =========================================================================
   tests.js — THE TEST DIRECTORY
   -------------------------------------------------------------------------
   Generated in part by tools/entry-form.html. Safe to edit by hand.

   Every clinical value here must be verified by a qualified scientist before
   the handbook is released, and `lastReviewed` set on each entry.

   Field reference: TEMPLATE_GUIDE.md
   Validate after editing:  node tools/check-data.js
   ========================================================================= */

window.TESTS = [
{
  id: "abo-rhd",
  name: "ABO Group and RhD Typing",
  synonyms: [
    "ABO/Rh Typing",
    "Group & Screen",
    "Blood Group"
  ],
  department: "blood-bank",
  limsCode: "BLD GRP",
  flags: ["stat"],

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
  lastReviewed: "[FILL IN — e.g. 2026-09]",
  added: "",
  updated: ""
},

{
  id: "aptt",
  name: "Activated Partial Thromboplastin Time (APTT)",
  synonyms: [
    "Partial Thromboplastin Time",
    "PTT"
  ],
  department: "haematology",
  limsCode: "APTT",
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
  lastReviewed: "[FILL IN]",
  added: "",
  updated: ""
},

{
  id: "full-blood-count",
  name: "Full Blood Count",
  synonyms: [
    "FBC",
    "Complete Blood Count",
    "CBC"
  ],
  department: "haematology",
  limsCode: "CBC",
  flags: [],

  summary: "Automated panel: WBC and differential, RBC and indices (HGB, HCT, MCV, MCH, MCHC) and platelet count.",
  description: "Panel of automated measurements including WBC count and differential, RBC count and indices (HGB, HCT, MCV, MCH, MCHC) and platelet count. See individual test entries for detail.",

  indications: [
    "General screening and baseline assessment",
    "Investigation of anaemia, infection, inflammation, bleeding and malignancy",
    "Monitoring chemotherapy, chronic disease and treatment response"
  ],
  referenceRange: "See individual tests for WBC, RBC, HGB, HCT, MCV, MCH, MCHC, Platelets. See Appendix 12. General Guide to Reference Ranges.",
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
  diseaseAssociations: ["Refer to individual components (WBC, RBC, HGB, platelets and indices)."],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-4", "appendix-5", "appendix-7", "appendix-12"],
  lastReviewed: "[FILL IN]",
  added: "",
  updated: ""
},

{
  id: "blood-culture",
  name: "Blood Culture",
  synonyms: [
    "Blood Culture & Sensitivity",
    "BACTEC Culture"
  ],
  department: "microbiology",
  limsCode: "BC",
  flags: ["critical", "stat"],

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

  turnaround: { routine: "Preliminary 24–48 hours; final 5 days", urgent: "Positive Gram stain reported on detection" },
  criticalAlert: "Any positive Gram stain — urgent notification to the requesting clinician.",
  diseaseAssociations: [
    "Sepsis and bacteraemia",
    "Endocarditis",
    "Device-associated infection"
  ],
  conversionFactors: "Not applicable",
  organismsReported: [
    { group: "Common pathogens", items: [
      "Staphylococcus aureus",
      "Streptococcus pneumoniae",
      "Escherichia coli",
      "Klebsiella pneumoniae",
      "Salmonella Typhi / Paratyphi",
      "Pseudomonas aeruginosa"
    ] },
    { group: "Opportunistic organisms", items: [
      "Enterococcus spp.",
      "Acinetobacter spp.",
      "Pseudomonas spp. (non-fermenters)",
      "Candida spp."
    ] },
    { group: "Commensal contaminants", items: [
      "Coagulase-negative staphylococci",
      "Corynebacterium spp.",
      "Bacillus spp. (non-anthracis)",
      "Viridans group streptococci"
    ], note: "Reported as contaminants unless repeated or clinically supported." }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-5", "appendix-7", "appendix-9b", "appendix-12"],
  lastReviewed: "[2026-09-28]",
  added: "",
  updated: ""
},

{
  id: "alanine-transaminase",
  name: "Alanine Transaminase (ALT)",
  synonyms: ["SGPT"],
  department: "biochemistry",
  limsCode: "ALT, ALTV (analyser dependent)",
  flags: [],

  summary: "Liver-specific enzyme ",
  description: "Liver-specific enzyme sensitive to hepatocellular injury.",

  indications: ["Diagnose/monitor liver injury",
    "Chronic liver disease assessment",
    "Included in liver function panels"],
  referenceRange: "See Appendix 12 - General Guide to Reference Ranges",
  analyticalLimitations: ["Affected by haemolysis, muscle injury, delayed separation",
    "Not disease-specific"],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "[FILL IN — or cite Appendix 9a]",
  rejection: "See Appendix 7: Sample Rejection Criteria.",
  methodology: "Enzymatic spectrophotometric",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "[FILL IN — or cite Appendix 4]",
  diseaseAssociations: ["Hepatitis, cirrhosis",
    "Muscle injury",
    "Drug-induced liver injury"],
  conversionFactors: "Not Applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a"],
  lastReviewed: "[FILL IN]",
  added: "2026-09-28",
  updated: ""
},

{
  id: "albumin",
  name: "Albumin",
  synonyms: ["Serum Albumin"],
  department: "biochemistry",
  limsCode: "ALB",
  flags: [],

  summary: "Test serum Albumin",
  description: "Major plasma protein regulating oncotic pressure and transporting multiple molecules.",

  indications: [
    "Nutritional assessment",
    "Liver synthetic function",
    "Renal protein loss (nephrotic syndrome)",
    "Chronic illness, sepsis, malabsorption"
  ],
  referenceRange: "32 - 45 g/L",
  analyticalLimitations: [
    "Interference: haemolysis, icterus, lipaemia",
    "False elevation with prolonged tourniquet"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Refrigerated ≤7 days; freeze for long term",
  rejection: "",
  methodology: "Dye-binding (BCG or BCP)",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Very low albumin <20 g/L",
  diseaseAssociations: [
    "Hypoalbuminaemia in liver disease, nephrotic syndrome, sepsis, burns",
    "Hyperalbuminaemia: dehydration"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a"],
  lastReviewed: "",
  added: "2026-09-20",
  updated: ""
},

{
  id: "alkaline-phosphatase",
  name: "Alkaline Phosphatase",
  synonyms: [
    "ALP",
    "Alk Phos"
  ],
  department: "biochemistry",
  limsCode: "ALPK",
  flags: [],

  summary: "Alkaline Phosphatase test for liver function",
  description: "Enzyme from liver and bone; elevated in cholestasis and bone disease.",

  indications: [
    "Cholestatic liver disease",
    "Biliary obstruction",
    "Bone disorders (Paget's, rickets, metastases)",
    "Pregnancy and adolescence (physiological rise)"
  ],
  referenceRange: [
    "Reference ranges vary significantly by age and sex.",
    "See Appendix 12: General Guide to Reference Ranges",
    "Units: U/L"
  ],
  analyticalLimitations: [
    "Non-specific; requires GGT/ALT correlation",
    "Elevated in normal growth/pregnancy",
    "Affected by haemolysis"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Refrigerate; stable 7 days",
  rejection: "Haemolysis",
  methodology: "Enzymatic colorimetric",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "",
  diseaseAssociations: [
    "Elevated: cholestasis, hepatitis, bone disease",
    "Decreased: hypophosphatasia, malnutrition"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-20",
  updated: ""
},

{
  id: "amylase",
  name: "Amylase",
  synonyms: [],
  department: "biochemistry",
  limsCode: "AMY",
  flags: [],

  summary: "Digestive enzyme used mainly to investigate pancreatitis.",
  description: "",

  indications: [
    "Suspected acute pancreatitis",
    "Parotitis or mumps",
    "Abdominal pain differentials"
  ],
  referenceRange: "30 – 110 U/L",
  analyticalLimitations: [
    "Poor specificity (also ↑ in salivary disease, obstruction, ectopic pregnancy)",
    "Lipase more specific",
    "Interference from haemolysis / lipaemia"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Refrigerate ≤3–5 days",
  rejection: "",
  methodology: "Enzymatic colorimetric, Spectrophotometry",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: ">200 U/L suggests acute pancreatitis",
  diseaseAssociations: [
    "Pancreatitis",
    "Obstruction",
    "Trauma",
    "Mumps",
    "Renal failure"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-20",
  updated: ""
},

{
  id: "anti-hepatitis-b-core",
  name: "Anti-Hepatitis B Core (anti-HBc)",
  synonyms: [],
  department: "serology",
  limsCode: "AHBC",
  flags: [],

  summary: "",
  description: "Detects antibodies to HBV core antigen; indicates past or present HBV infection.",

  indications: [
    "HBV infection screening",
    "Distinguish natural infection vs vaccination",
    "Occult HBV screening"
  ],
  referenceRange: [
    "Non-reactive",
    "Reactive",
    "Borderline (repeat testing)",
    "See Appendix 14: Hepatitis B & C Serology Interpretation"
  ],
  analyticalLimitations: [
    "Cannot distinguish acute vs chronic",
    "False positives (autoimmune disease)",
    "False negatives (immunocompromised)"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "2–8 °C ≤5 days",
  rejection: "",
  methodology: "ELISA/CLIA",

  turnaround: { routine: "1–3 days", urgent: "" },
  criticalAlert: "Nonnumeric; interpret with HBsAg + anti-HBs",
  diseaseAssociations: [
    "Acute/chronic HBV",
    "Resolved infection",
    "Occult HBV"
  ],
  conversionFactors: "Not Applicable",
  organismsReported: null,

  appendixRefs: ["appendix-2", "appendix-6", "appendix-7", "appendix-8", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-20",
  updated: ""
},
{
  id: "antibody-screen",
  name: "Antibody Screen (Indirect Antiglobulin Test – IAT)",
  synonyms: [],
  department: "blood-bank",
  limsCode: "IAGT",
  flags: ["critical", "stat"],

  summary: "Detects unexpected red-cell antibodies",
  description: "Detects unexpected red-cell antibodies that may cause transfusion reactions or HDFN.",

  indications: [
    "Pre-transfusion testing",
    "Antenatal screening",
    "Alloimmunisation investigation"
  ],
  referenceRange: "Negative",
  analyticalLimitations: [
    "Recent transfusion may mask antibodies",
    "Low-titre or rare antibodies may be missed",
    "Autoantibodies may interfere"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2 -5 mL  EDTA",
  storageTransport: "2–8°C ≤3 days. Freeze for long-term storage",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Column agglutination",

  turnaround: { routine: "<2 hours", urgent: "" },
  criticalAlert: "Positive = urgent transfusion review",
  diseaseAssociations: [
    "Alloimmunisation",
    "Hemolytic Disease of the Fetus and Newborn (HDFN)",
    "Haemolytic reactions"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-28",
  updated: ""
},
{
  id: "aspartate-aminotransferase",
  name: "Aspartate Aminotransferase (AST)",
  synonyms: [],
  department: "biochemistry",
  limsCode: "AST",
  flags: [],

  summary: "Enzyme found in liver, muscle, cardiac tissue; elevated with tissue injury.",
  description: "Enzyme found in liver, muscle, cardiac tissue; elevated with tissue injury.",

  indications: [
    "Hepatitis",
    "Muscle injury",
    "Historically Myocardial Infarction"
  ],
  referenceRange: [
    "Adult Male 5 – 35 U/L",
    "Adult Female 5 – 30 U/L"
  ],
  analyticalLimitations: [
    "Haemolysis causes false elevation",
    "Interference from lipaemia/icterus"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "",
  rejection: "",
  methodology: "Enzymatic colorimetric, Spectrophotometry",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Hepatitis, cirrhosis",
    "Muscle injury",
    "Haemolysis"
  ],
  conversionFactors: "",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-20",
  updated: ""
},

{
  id: "blood-film-morphology",
  name: "Blood Film Morphology",
  synonyms: [
    "Peripheral Blood Film",
    "PBS",
    "Smear Review"
  ],
  department: "haematology",
  limsCode: "BL-FILM",
  flags: [],

  summary: "Peripheral blood film and stain for blood morphology and differential count.",
  description: "Microscopic examination of stained blood smear assessing RBC, WBC and platelet morphology.",

  indications: [
    "Anaemia evaluation",
    "Suspected leukaemia/lymphoma",
    "Malaria or blood parasite screening",
    "Investigation of abnormal analyser results"
  ],
  referenceRange: "Descriptive (no numeric range)",
  analyticalLimitations: [
    "Subjective interpretation",
    "Delayed smear → artefacts",
    "Dependent on smear quality and stain quality"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "Adults 5 mL; Paediatric 2 mL",
  storageTransport: "prepare smear ≤4 hrs",
  rejection: "EDTA clotted, haemolysed sample, poor smear quality",
  methodology: "Wright–Giemsa / Romanowsky stain; manual microscopy",

  turnaround: { routine: "1–2 days", urgent: "Same day" },
  criticalAlert: "Blasts\nMalaria parasites\nSevere thrombocytopenia",
  diseaseAssociations: [
    "Iron deficiency, megaloblastic, haemolytic anaemias",
    "Leukaemia",
    "Malaria",
    "Platelet disorders"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "blood-gas-point-of-care",
  name: "Blood Gas (Arterial)-Point of Care",
  synonyms: [],
  department: "poc",
  limsCode: "ABG",
  flags: [],

  summary: "Bed side blood gas analysis",
  description: "Measures pH, pCO₂, pO₂, HCO₃⁻, base excess, and O₂ saturation. Used in respiratory and metabolic emergencies.",

  indications: [
    "Respiratory failure",
    "Mechanical ventilation monitoring",
    "Acid–base disorders",
    "Diabetic Keto-Acidosis",
    "shock",
    "sepsis",
    "ICU/post-operative monitoring"
  ],
  referenceRange: [
    "pH: 7.35–7.45",
    "pCO₂: 35–45 mmHg",
    "pO₂: 80–100 mmHg",
    "HCO₃⁻: 22–26 mmol/L"
  ],
  analyticalLimitations: [
    "Air bubbles alter gas tensions",
    "Delay → altered pH and gases",
    "Venous ≠ arterial values"
  ],

  sampleType: "Whole blood",
  containerColour: "Blood gas syringe (POC)",
  sampleRequirements: "Arterial blood in pre-heparinised syringe",
  storageTransport: "Point-of-care testing at the bedside.",
  rejection: "Clotted samples",
  methodology: "Electrochemical sensors in ABG analyser",

  turnaround: { routine: "", urgent: "Immediate (STAT)" },
  criticalAlert: "pH <7.20 or >7.60\npO₂ <60 mmHg\npCO₂ >80 mmHg",
  diseaseAssociations: [
    "Respiratory failure",
    "Shock, sepsis",
    "Diabetic Keto-Acidosis",
    "Pulmonary embolism"
  ],
  conversionFactors: "pCO₂ / pO₂: mmHg <-/-> kPa (×0.133 / ÷0.133)",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "blood-urea-nitrogen",
  name: "Blood Urea Nitrogen (BUN)",
  synonyms: [],
  department: "biochemistry",
  limsCode: "BUN",
  flags: [],

  summary: "",
  description: "Urea nitrogen is a marker of renal function, hydration status, catabolism, and Gastro-Intestinal bleeding.",

  indications: [
    "Renal function (with creatinine)",
    "Dehydration, shock",
    "GI bleeding",
    "Metabolic disturbances"
  ],
  referenceRange: [
    "Adults: 3.0–8.0 mmol/L",
    "Neonates: 1.0–4.0 mmol/L",
    "Critical: >35 mmol/L"
  ],
  analyticalLimitations: [
    "Affected by diet, liver function, hydration",
    "Prerenal vs renal vs postrenal patterns",
    "Haemolysis and prolonged storage affect results"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2-5 mL serum",
  storageTransport: "2–8°C ≤3 days. Freeze for long-term storage",
  rejection: "",
  methodology: "Enzymatic colorimetric",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: ">35 mmol/L",
  diseaseAssociations: [
    "Chronic Kidney Disease (CKD)",
    "Acute Kidney Injury (AKI)",
    "Dehydration",
    "Gastro-Intestinal bleed",
    "Heart failure",
    "Liver disease",
    "Malnutrition"
  ],
  conversionFactors: "mg/dL <-/-> mmol/L (×0.357 / ÷0.357)",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "c-reactive-protein",
  name: "C-Reactive Protein",
  synonyms: ["CRP"],
  department: "biochemistry",
  limsCode: "C-RP",
  flags: [],

  summary: "Serum CRP test for inflammation.",
  description: "An acute-phase protein produced by the liver in response to inflammation, infection, or tissue injury.",

  indications: [
    "Detect and monitor infection or inflammation.",
    "Assess response to antibiotic or anti-inflammatory therapy.",
    "Evaluate autoimmune disease activity.",
    "Provide prognostic information in sepsis."
  ],
  referenceRange: "<5 mg/L",
  analyticalLimitations: [
    "Non-specific marker; many inflammatory and non-inflammatory conditions can raise CRP.",
    "Mild elevations seen in pregnancy, smoking, obesity.",
    "Levels may be falsely low in severe liver failure (reduced synthesis)."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Stable up to 72 hrs at 2–8 °C. Freeze at –20 °C ",
  rejection: "Haemolysis",
  methodology: "Immunoturbidimetric",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "CRP >200 mg/L in suspected sepsis or severe infection should prompt urgent clinical review.",
  diseaseAssociations: [
    "Elevated: bacterial infection, autoimmune disease, inflammatory bowel disease, malignancy, trauma, post-operative state.",
    "Mild/low elevation: many viral infections, chronic inflammatory conditions."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "calcium",
  name: "Calcium",
  synonyms: [
    "Serum Calcium",
    "Total Calcium"
  ],
  department: "biochemistry",
  limsCode: "CA",
  flags: [],

  summary: "Serum calcium test",
  description: "An extracellular cation essential for neuromuscular function, coagulation, and bone metabolism. Should be interpreted with serum albumin.",

  indications: [
    "Investigate hypo- and hypercalcaemia.",
    "Monitor CKD and renal bone disease.",
    "Assess primary and secondary hyperparathyroidism.",
    "Evaluate malignancy (PTHrP-mediated hypercalcaemia).",
    "Assess vitamin D–related disorders."
  ],
  referenceRange: "Adults: 2.10 – 2.55 mmol/L",
  analyticalLimitations: [
    "Strongly influenced by albumin concentration.",
    "Haemolysis and lipaemia",
    "Prolonged tourniquet use"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Stable 2–3 days at 2–8 °C.\nFreeze at –20 °C longer storage (>5 days).",
  rejection: "Haemolysis",
  methodology: "Colorimetric assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Hypocalcaemia <1.75 mmol/L.\nHypercalcaemia >3.75 mmol/L.",
  diseaseAssociations: [
    "Low calcium: Chronic kidney disease, hypoparathyroidism, vitamin D deficiency, pancreatitis, sepsis, massive transfusion.",
    "High calcium: primary/tertiary hyperparathyroidism, malignancy (PTHrP or bone metastases), sarcoidosis, vitamin D excess, thiazide therapy."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "cancer-antigen-125",
  name: "Cancer Antigen 125 (CA 125)",
  synonyms: ["Ovarian Tumour Marker"],
  department: "biochemistry",
  limsCode: "CA-125",
  flags: [],

  summary: "",
  description: "CA-125 is a glycoprotein often elevated in epithelial ovarian cancer and a range of benign conditions. Useful for monitoring known disease.",

  indications: [
    "Monitor response to therapy in epithelial ovarian cancer.",
    "Detect recurrence / progression in known ovarian cancer.",
    "Support diagnosis when combined with imaging and clinical findings."
  ],
  referenceRange: "<35 kU/L",
  analyticalLimitations: [
    "Non-specific: can be elevated in menstruation, pregnancy, pelvic inflammatory disease, endometriosis, liver disease, and other malignancies.",
    "Heterophile antibodies may cause assay interference.",
    "Interpretation should focus on serial trends rather than single values."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Store at 2 – 8 °C if tested within 5 days. Freeze at -20°C for long term storage.",
  rejection: "See appendices",
  methodology: "Immunoassay (e.g. chemiluminescent or electrochemiluminescent).",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "No single universal critical value.\nRapid or unexpected rise in a known cancer patient should be flagged for urgent clinical review.",
  diseaseAssociations: [
    "Malignant: epithelial ovarian carcinoma (especially serous), endometrial, pancreatic, lung, GI cancers.",
    "Benign: endometriosis, menstruation, pregnancy, PID, liver disease, benign ovarian cysts."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "cancer-antigen-15-3",
  name: "Cancer Antigen 15-3 (CA 15-3)",
  synonyms: ["Breast Cancer Marker"],
  department: "biochemistry",
  limsCode: "CA15-3",
  flags: [],

  summary: "For monitoring metastatic breast cancer.",
  description: "For monitoring metastatic breast cancer.",

  indications: [
    "Monitor treatment response in metastatic breast cancer.",
    "Detect recurrence or progression after treatment.",
    "Provide prognostic information when interpreted with imaging."
  ],
  referenceRange: "<30 kU/L",
  analyticalLimitations: [
    "Not suitable as a screening test; low sensitivity in early/localised disease.",
    "Can be elevated in benign liver disease, benign breast disease, and other malignancies.",
    "Possible interference from heterophile antibodies; use same method/platform for serial monitoring."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temperature ≤2 hrs, then refrigerate at 2–8 °C if delayed.",
  rejection: "See apendicies",
  methodology: "Immunoassay.",

  turnaround: { routine: "1 – 3 working days.", urgent: "" },
  criticalAlert: "Significant rising trend in a treated breast cancer patient should prompt urgent review.",
  diseaseAssociations: [
    "Malignant: breast cancer (especially metastatic), ovarian, lung, pancreatic cancers.",
    "Benign: chronic liver disease, benign breast disease, endometriosis."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "cancer-antigen-19-9",
  name: "Cancer Antigen 19-9 (CA 19-9)",
  synonyms: ["Pancreatic Cancer Marker"],
  department: "biochemistry",
  limsCode: "CA19-9",
  flags: [],

  summary: "",
  description: "Antigen associated with pancreatic and biliary tract malignancies.",

  indications: ["Monitor treatment response and recurrence in pancreatic or biliary cancers."],
  referenceRange: "<40 kU/L",
  analyticalLimitations: [
    "Not recommended for population screening.",
    "Elevated in cholestasis, pancreatitis, cirrhosis, and other GI malignancies.",
    "5–10% of individuals (Lewis a−b− phenotype) cannot synthesise CA 19-9 and may have undetectable levels despite malignancy.",
    "For serial monitoring, results should be from the same assay platform."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temperature ≤2 hrs; refrigerate (2–8 °C) if testing delayed.",
  rejection: "See appendices.",
  methodology: "Immunoassay.",

  turnaround: { routine: "1–3 days", urgent: "" },
  criticalAlert: "Rapid or marked increase in a known cancer patient requires urgent review.",
  diseaseAssociations: [
    "Malignant: pancreatic adenocarcinoma, cholangiocarcinoma, gastric and colorectal cancers.",
    "Benign: cholestasis, pancreatitis, cirrhosis, biliary obstruction."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "carcinoembryonic-antigen",
  name: "Carcinoembryonic Antigen (CEA)",
  synonyms: ["None"],
  department: "biochemistry",
  limsCode: "CEA",
  flags: [],

  summary: "CEA is a tumour marker test.",
  description: "CEA is a glycoprotein elevated in colorectal cancer and various other malignancies and benign conditions.",

  indications: [
    "Monitor for recurrence after colorectal cancer treatment.",
    "Assess response to therapy in colorectal and some other cancers.",
    "Provide prognostic information when interpreted with imaging and staging."
  ],
  referenceRange: "<5.0 µg/L",
  analyticalLimitations: [
    "Not specific; increased in smokers, chronic liver disease, IBD, pancreatitis, and other malignancies.",
    "not sufficiently specific or sensitive to be used as a screening test for malignant disease.",
    "Serial results should be performed on the same assay platform; heterophile antibodies may interfere."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temperature ≤2 hrs; refrigerate if delayed.",
  rejection: "See appendices",
  methodology: "Immunoassay",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "New or rapid rise in CEA in a treated cancer patient should be promptly communicated.",
  diseaseAssociations: [
    "Malignant: colorectal, gastric, pancreatic, lung, breast, hepatocellular carcinoma.",
    "Benign: smoking, chronic liver disease/cirrhosis, Inflammatory Bowel Disease, pancreatitis, Chronic Obstructive Pulmonary Disease."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "cd4-count",
  name: "CD4 Count",
  synonyms: [
    "T-helper Cell Count",
    "CD4+ T Lymphocyte Count"
  ],
  department: "serology",
  limsCode: "CD4",
  flags: [],

  summary: "CD4 count",
  description: "CD4 count measures the absolute number of CD4+ T lymphocytes in peripheral blood",

  indications: [
    "Monitor immune status in HIV-positive patients.",
    "Guide initiation and monitoring of antiretroviral therapy (ART).",
    "Assess risk for opportunistic infections.",
    "Monitor immune reconstitution after ART or immune-suppressive therapy."
  ],
  referenceRange: "Adults: ~500–1,500 cells/µL (age / lab dependent; children have higher values).",
  analyticalLimitations: [
    "Diurnal variation and acute illness can affect counts.",
    "CD4% may be more informative in paediatric patients.",
    "Co-infections, steroids, and chemotherapy can reduce CD4 counts."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–3 mL EDTA",
  storageTransport: "Analyse within 24 hours of collection\nDo not refrigerate or freeze; avoid temperature extremes.",
  rejection: "Delayed analysis >24–36 hours.\nSee appendices",
  methodology: "Flow cytometry (dual or multicolour fluorescent analysis).",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "CD4 <200 cells/µL → high risk for opportunistic infections; urgent clinical review.",
  diseaseAssociations: [
    "Low: HIV infection/AIDS, immunosuppressive therapy, lymphomas, severe sepsis",
    "High: Recovery after ART initiation, reactive lymphocytosis (rare)"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-15", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "cervical-cytology",
  name: "Cervical Cytology (Pap Smear)",
  synonyms: [
    "Pap Test",
    "Cervical Smear"
  ],
  department: "cytology",
  limsCode: "PAP",
  flags: [],

  summary: "Cervical cytology (Pap smear)",
  description: "Cervical cytology (Pap smear) is a screening test that detects premalignant and malignant changes in cervical epithelial cells for early detection of cervical cancer and its precursors.",

  indications: [
    "Screening for cervical cancer and precancerous lesions.",
    "Follow-up of abnormal cytology results.",
    "Monitoring after treatment of Cervical Intraepithelial Neoplasma or cervical carcinoma."
  ],
  referenceRange: "Normal: NILM – Negative for intraepithelial lesion or malignancy.",
  analyticalLimitations: [
    "False negatives with poor sampling or obscuring blood/inflammation.",
    "Not diagnostic on its own; abnormal results require colposcopy ± biopsy.",
    "Sensitivity is lower than HPV DNA testing; combined strategies may be recommended."
  ],

  sampleType: "Tissue",
  containerColour: "Swab",
  sampleRequirements: [
    "Cervical sample collected with brush/spatula from transformation zone.",
    "Transferred to glass slide (conventional) or liquid-based cytology vial."
  ],
  storageTransport: "Slides: fix immediately with cytology fixative.\nLiquid-based vials: store and transport at room temperature.",
  rejection: "Air-dried or poorly fixed smears.\nInsufficient cellular material.\nMislabelled or unlabelled slides/vials.",
  methodology: "Conventional Pap smear (Papanicolaou stain) and/or liquid-based cytology.",

  turnaround: { routine: "2 - 3 days", urgent: "" },
  criticalAlert: "HSIL or suspicious/confirmed malignancy → urgent notification and referral.",
  diseaseAssociations: [
    "Cervical intraepithelial neoplasia (CIN I–III)",
    "Cervical carcinoma (squamous or glandular)",
    "HPV-associated lesions"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "chloride",
  name: "Chloride",
  synonyms: [],
  department: "cytology",
  limsCode: "CL",
  flags: [],

  summary: "Serum Chloride",
  description: "An anion playing a central role in maintaining fluid balance, acid–base homeostasis, and osmotic pressure.",

  indications: [
    "Investigation of electrolyte and acid–base disturbances.",
    "Assessment of metabolic acidosis/alkalosis.",
    "Monitoring patients with renal disease, dehydration, vomiting, or diarrhoea.",
    "Evaluation of acid–base status in respiratory disorders."
  ],
  referenceRange: "98 – 107 mmol/L",
  analyticalLimitations: [
    "Haemolysis or lipaemia may interfere with some methods.",
    "Prolonged tourniquet use may artifactually increase chloride.",
    "Interpretation requires correlation with Na⁺, K⁺, HCO₃⁻ and clinical context."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Stable 3–5 days at 2–8 °C. Freeze if storage >5 days.",
  rejection: "Haemolysis",
  methodology: "Ion-selective electrode (ISE) measurement.",

  turnaround: { routine: "Same day", urgent: "< 2 hours" },
  criticalAlert: "<80 mmol/L = severe hypochloraemia, urgent review.\n≥120 mmol/L = severe hyperchloraemia, urgent review.",
  diseaseAssociations: [
    "Hypochloraemia: Prolonged vomiting, metabolic alkalosis, diuretic therapy, chronic respiratory acidosis with renal compensation",
    "Hyperchloraemia: Dehydration, renal tubular acidosis, prolonged diarrhoea, metabolic acidosis, excessive saline infusion"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "cholesterol",
  name: "Cholesterol",
  synonyms: [],
  department: "biochemistry",
  limsCode: "CHOL",
  flags: [],

  summary: "Total Cholesterol",
  description: "Present in tissues and in serum/plasma either as free cholesterol or cholesterol esters bound to proteins. It is an essential structural component of cell membranes and plasma lipoproteins.",

  indications: [
    "Assess cardiovascular risk (atherosclerosis, coronary artery disease).",
    "Monitor lipid-lowering therapy.",
    "Component of lipid profile with HDL, LDL, and triglycerides."
  ],
  referenceRange: "Serum: <5.2 mmol/L desirable (adults).",
  analyticalLimitations: ["2–5 mL serum"],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Transport at room temperature (≤25 °C).\nFollow local guidance for storage if testing delayed.",
  rejection: "Haemolysis",
  methodology: "Enzymatic spectrophotometric assay.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "No universal critical cut-off; very high values require clinical review",
  diseaseAssociations: [
    "Elevated: familial hypercholesterolaemia, nephrotic syndrome, cholestatic liver disease, hypothyroidism, type 2 diabetes, pregnancy.",
    "Decreased: malnutrition, malabsorption, hyperthyroidism, advanced malignancy, chronic infection, liver failure."
  ],
  conversionFactors: "1 mg/dL = 0.0259 mmol/L.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "creatine-kinase",
  name: "Creatine Kinase",
  synonyms: [
    "Creatine Kinase",
    "Creatine Phosphokinase"
  ],
  department: "biochemistry",
  limsCode: "CPK",
  flags: [],

  summary: "Serum Creatine Phosphokinase",
  description: "Creatine kinase (CK) is an intracellular enzyme widely distributed in skeletal muscle, cardiac muscle, and brain tissue.",

  indications: [
    "Diagnose and monitor rhabdomyolysis or severe muscle injury.",
    "Assess muscular dystrophies and myositis.",
    "Evaluate suspected statin-induced myopathy.",
    "Historical role in MI diagnosis (now largely replaced by troponin)."
  ],
  referenceRange: [
    "Male: 30–135 U/L.",
    "Female: 55–170 U/L."
  ],
  analyticalLimitations: [
    "Elevated with vigorous exercise, trauma, IM injections, seizures, and statin/fibrate therapy.",
    "Haemolysis may increase results.",
    "CK falls at room temperature if processing delayed; prompt separation recommended"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Transport at room temperature (≤25 °C). Stable up to ~3 days at 2–8 °C.",
  rejection: "See appendices",
  methodology: "Enzymatic spectrophotometric assay.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Interpret with clinical picture.",
  diseaseAssociations: [
    "Markedly elevated CK: myocardial infarction, rhabdomyolysis, Duchenne muscular dystrophy, myositis, prolonged seizures, trauma/surgery, hypothyroidism, statin myopathy.",
    "Moderate elevation: chronic athletic muscle strain, alcohol abuse, neuroleptic malignant syndrome, malignant hyperthermia."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "creatinine",
  name: "Creatinine (Serum)",
  synonyms: ["Serum Creatinine"],
  department: "biochemistry",
  limsCode: "CREA",
  flags: [],

  summary: "Serum Creatinine",
  description: "Creatinine is a waste product of muscle metabolism (creatine phosphate) and is almost exclusively excreted by the kidneys. It is one of the most widely used markers of renal function, incorporated into eGFR equations, and is central in the monitoring of acute and chronic kidney disease",

  indications: [
    "Assess renal function and estimate eGFR.",
    "Monitor acute and chronic kidney disease.",
    "Detect nephrotoxic drug effects."
  ],
  referenceRange: [
    "Adult male: 58–110 µmol/L.",
    "Adult female: 46–92 µmol/L."
  ],
  analyticalLimitations: [
    "Jaffe method susceptible to interference (glucose, ketones, bilirubin, cephalosporins).",
    "Serum creatinine may remain \"normal\" until >50% renal function lost.",
    "Always interpret with eGFR, urine findings, and clinical context."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Separate within 2 hours of collection. Stable 3–5 days at 2–8 °C.",
  rejection: "",
  methodology: "Enzymatic or Jaffe reaction.",

  turnaround: { routine: "Same day", urgent: "< 2 hours" },
  criticalAlert: "Creatinine >400 µmol/L = critical value (suggest severe renal impairment).",
  diseaseAssociations: [
    "Increased: Acute kidney injury, chronic kidney disease, dehydration, urinary tract obstruction, rhabdomyolysis, nephrotoxic drugs (NSAIDs, aminoglycosides, ACE inhibitors).",
    "Decreased: Low muscle mass (elderly, cachexia), pregnancy, overhydration."
  ],
  conversionFactors: "1 mg/dL = 88.4 µmol/L. 1 µmol/L = 0.0113 mg/dL",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "crossmatch",
  name: "Crossmatch (Compatibility Testing)",
  synonyms: ["Compatibility Test, Crossmatch"],
  department: "blood-bank",
  limsCode: "X-MATCH",
  flags: [],

  summary: "A compatibility test between donor red blood cells and the recipient's plasma.",
  description: "A crossmatch is performed to ensure compatibility between donor red blood cells and the recipient's plasma. It is a critical safety step prior to transfusion, used to detect antibodies that may not be identified during routine antibody screening.",

  indications: [
    "Mandatory pre-transfusion compatibility check.",
    "Detects unexpected antibodies that could cause haemolytic transfusion reactions.",
    "Helps manage multi-transfused or alloimmunised patients."
  ],
  referenceRange: "Compatible = no agglutination or haemolysis.",
  analyticalLimitations: [
    "Difficult to find compatible units in autoantibodies/pan-agglutinins.",
    "Very low-titre antibodies may be missed.",
    "Alloantibodies may cause anamnestic responses despite apparently compatible crossmatch."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Pink EDTA",
  sampleRequirements: "2–5 mL EDTA",
  storageTransport: "Store at 2–8 °C.",
  rejection: "See appendices",
  methodology: "Immediate spin and/or antiglobulin crossmatch.\nColumn agglutination technology (CAT) or manual tube methods.",

  turnaround: { routine: "<2 hours", urgent: "<2 hours" },
  criticalAlert: "Incompatible crossmatch = critical; do not transfuse until resolved; urgent reporting required.",
  diseaseAssociations: [
    "Incompatible crossmatch = risk of haemolytic transfusion reaction.",
    "May reveal newly developed alloantibodies or warm autoantibodies"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "csf-culture",
  name: "CSF Culture",
  synonyms: ["Cerebrospinal Fluid Culture"],
  department: "microbiology",
  limsCode: "CSF",
  flags: [],

  summary: "Cerebrospinal Fluid Culture",
  description: "CSF culture is performed to identify bacteria or fungi responsible for meningitis, ventriculitis, or other CNS infections.",

  indications: [
    "Diagnose bacterial or fungal meningitis and ventriculitis",
    "Guide antimicrobial therapy in CNS infections.",
    "Investigate unexplained CSF pleocytosis or abnormal CSF chemistry."
  ],
  referenceRange: "Normal: No growth of clinically significant pathogens.",
  analyticalLimitations: [],

  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: "CSF collected aseptically into sterile container(s), ideally multiple tubes.",
  storageTransport: "Transport immediately at room temperature. Do not refrigerate before culture.",
  rejection: "Insufficient volume (<1 mL).\nLeaking container.",
  methodology: "Direct Gram stain (and India ink / cryptococcal testing if indicated).\nCulture on enriched and selective media (aerobic ± anaerobic).\nFungal culture where clinically indicated.\nIdentification\nAST (antimicrobial susceptibility testing)",

  turnaround: { routine: "Preliminary Gram stain: same day.", urgent: "Preliminary culture: 24–48 hrs. •	Final report: 2–5 days (longer for slow-growing organisms)." },
  criticalAlert: "Any clinically significant pathogen isolated from CSF is critical and must be urgently communicated.",
  diseaseAssociations: [
    "Bacterial meningitis, ventriculitis, CNS sepsis.",
    "Fungal meningitis (e.g. cryptococcal disease)."
  ],
  conversionFactors: "Not Applicable",
  organismsReported: [
    { group: "Common bacterial pathogens", items: [
      "Neisseria meningitidis",
      "Streptococcus pneumoniae",
      "Haemophilus influenzae",
      "Group B streptococcus (Streptococcus agalactiae)",
      "Listeria monocytogenes",
      "Escherichia coli and other enteric Gram-negative bacilli (especially in neonates)"
    ] },
    { group: "Opportunistic / healthcare-associated pathogens", items: [
      "Staphylococcus aureus",
      "Coagulase-negative staphylococci (from shunts or post-neurosurgery)",
      "Pseudomonas aeruginosa and other non-fermenters",
      "Enterococcus spp.",
      "Candida spp. and other yeasts/moulds (if fungal culture requested)"
    ] },
    { group: "Commensal / contaminant flora", items: [
      "Low-level skin flora (e.g. coagulase-negative staphylococci, diphtheroids) may be reported as \"likely contaminant\" depending on clinical context and repeat cultures."
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-21",
  updated: ""
},

{
  id: "csf-glucose",
  name: "CSF Glucose",
  synonyms: ["Cerebrospinal Fluid Glucose"],
  department: "biochemistry",
  limsCode: "CSFG",
  flags: ["critical", "stat"],

  summary: "Cerebrospinal Fluid Glucose",
  description: "To diagnose and differentiate causes of meningitis and other central nervous system disorders.\nThe CSF Glucose value is compared to serum glucose taken at the same time to improve diagnostic accuracy.",

  indications: [
    "Differentiate bacterial, viral, TB, and fungal meningitis.",
    "Investigate suspected CNS infection or leptomeningeal malignancy."
  ],
  referenceRange: "CSF glucose ≈ 60–70% of concurrent serum glucose.",
  analyticalLimitations: [
    "Must always be interpreted relative to serum glucose and CSF cell count/protein.",
    "Blood contamination or delayed processing can artefactually alter results."
  ],

  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: "0.5–1 mL CSF in sterile container. Concurrent serum glucose strongly recommended.",
  storageTransport: "Transport immediately to the laboratory. Do not refrigerate prior to testing.",
  rejection: "Insufficient volume.",
  methodology: "Enzymatic glucose oxidase or hexokinase method.",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Urgent in suspected meningitis. CSF glucose <40% of serum glucose strongly suggests bacterial or TB meningitis → urgent review.",
  diseaseAssociations: [
    "Low CSF glucose levels as compared with serum levels are seen in:",
    "bacterial meningitis",
    "cryptococcal meningitis",
    "malignant involvement of the meninges",
    "sarcoidosis."
  ],
  conversionFactors: "1 mg/dL = 0.0555 mmol/L.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "csf-protein",
  name: "CSF Protein",
  synonyms: [],
  department: "biochemistry",
  limsCode: "CSFP",
  flags: [],

  summary: "Cerebrospinal Fluid Protein",
  description: "Associated with infection, inflammation, or malignancy of the central nervous system.",

  indications: [
    "Support diagnosis and differentiation of meningitis.",
    "Investigate CNS inflammatory, demyelinating, or malignant disease.",
    "Support assessment of subarachnoid haemorrhage."
  ],
  referenceRange: [
    "Adults: 0.15–0.45 g/L.",
    "Newborns: higher normal values"
  ],
  analyticalLimitations: ["Haemolysed samples will result is a false elevated Protein level."],

  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: "0.5–1 mL CSF in sterile container.",
  storageTransport: "Transport immediately at room temperature. Do not refrigerate prior to analysis.",
  rejection: "Insufficient volume\nHaemolysis",
  methodology: "Spectrophotometric or turbidimetric protein assay",

  turnaround: { routine: "Same day", urgent: "< 2hours" },
  criticalAlert: "CSF protein >1.0 g/L in suspected meningitis or Subarachnoid Haemorrhage → urgent notification.",
  diseaseAssociations: [
    "Elevated:",
    "bacterial/TB/fungal meningitis, Guillain–Barré syndrome, CNS malignancy, multiple sclerosis, subarachnoid haemorrhage.",
    "Normal–mild elevation:",
    "viral meningitis, benign intracranial hypertension."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: [],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "cerebrospinal-fluid-total-cell-count",
  name: "Cerebrospinal Fluid (CSF) Total Cell Count",
  synonyms: ["None"],
  department: "microbiology",
  limsCode: "",
  flags: ["critical", "stat"],

  summary: "CSF Total Cell Count",
  description: "Diagnose and monitor meningitis (bacterial, viral, TB, fungal).\nEvaluate suspected subarachnoid or traumatic haemorrhage.\nSupport assessment of malignant/leukaemic infiltration and inflammatory CNS disease.",

  indications: [
    "Diagnose and monitor meningitis (bacterial, viral, TB, fungal).",
    "Evaluate suspected subarachnoid or traumatic haemorrhage.",
    "Support assessment of malignant/leukaemic infiltration and inflammatory CNS disease."
  ],
  referenceRange: "<5 x 106/L mononuclears; no neutrophils or red cells",
  analyticalLimitations: [
    "Traumatic tap raises RBC and may falsely raise WBC; interpret with clinical context and tube comparisons.",
    "Delays cause cellular degradation."
  ],

  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: "CSF from lumbar puncture in sterile container.",
  storageTransport: "Urgent delivery at room temperature. Process immediately; do not refrigerate.",
  rejection: "Insufficient volume\nHeavily contaminated specimen",
  methodology: "Manual haemocytometer (improved Neubauer) ± cytospin and differential if indicated.",

  turnaround: { routine: "Same day", urgent: "< 2 hours" },
  criticalAlert: "Marked pleocytosis, e.g., neutrophils >100 × 10⁶/L (suggests bacterial meningitis).\nOrganisms seen on Gram stain = critical.",
  diseaseAssociations: [
    "Bacterial meningitis: high WBC with neutrophil predominance.",
    "Viral meningitis: lymphocytic predominance.",
    "TB/fungal meningitis: mixed or lymphocytic pleocytosis.",
    "Haemorrhage: RBC present (xanthochromia, traumatic spinal tap)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "dengue-rapid-test",
  name: "Dengue Rapid Test",
  synonyms: ["Dengue Rapid Test"],
  department: "serology",
  limsCode: "DENG_IGG, DENG_IGM, DENG_NS1",
  flags: ["critical", "stat"],

  summary: "Dengue rapid test NS1, IgG and IgM",
  description: "The rapid test provides point-of-care detection of infection using either NS1 antigen (early infection, days 1–5) or IgM/IgG antibodies.",

  indications: [
    "Early diagnosis of suspected dengue fever.",
    "Differentiate primary vs secondary infection (pattern of NS1/IgM/IgG).",
    "Aid management of febrile illness during dengue outbreaks."
  ],
  referenceRange: "Qualitative: Negative / Positive.",
  analyticalLimitations: [
    "NS1 most sensitive days 1–5; may be negative later or in secondary infections.",
    "IgM often negative in first 3–5 days; IgG persists for months–years.",
    "Cross-reactivity with other flaviviruses (e.g., Zika, Yellow Fever).",
    "Not confirmatory; ELISA or PCR may be required for definitive diagnosis."
  ],

  sampleType: "",
  containerColour: "",
  sampleRequirements: "See product insert sheet for sample required.",
  storageTransport: "Transport to lab within 2 hours.",
  rejection: "See appendices.",
  methodology: "Immunochromatographic rapid test (NS1 antigen and/or IgM/IgG antibodies).",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Positive rapid test in a patient with warning signs (bleeding, abdominal pain, hypotension/shock) → urgent clinical notification.",
  diseaseAssociations: [
    "Classic dengue fever: high fever, myalgia, arthralgia, rash, nausea/vomiting.",
    "Severe dengue / DHF: abdominal pain, bleeding, lethargy.",
    "Dengue shock syndrome: circulatory collapse."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "dengue-virus-serotyping-rt-pcr",
  name: "Dengue Virus Serotyping RT-PCR",
  synonyms: ["Dengue PCR, Dengue RT-PCR, Dengue RNA, Dengue Virus Typing"],
  department: "serology",
  limsCode: "DEN-VIR1, DEN-VIR2, DEN-VIR3, DEN-VIR4",
  flags: ["stat"],

  summary: "",
  description: "The Dengue RT-PCR test detects and differentiates between the four dengue virus serotypes (DENV-1, DENV-2, DENV-3, and DENV-4).",

  indications: [
    "Early diagnosis of dengue (typically days 1–5 of illness).",
    "Serotyping (DENV-1 to DENV-4) for outbreak investigations.",
    "Support diagnosis of severe dengue (DHF/DSS).",
    "Differentiate dengue from other arboviral febrile illnesses."
  ],
  referenceRange: "Negative: no dengue virus RNA detected.",
  analyticalLimitations: [
    "Highest sensitivity in early acute phase; negative result later does not exclude dengue.",
    "Cannot distinguish primary vs secondary infection (requires serology).",
    "Primer mismatch may rarely miss variant strains."
  ],

  sampleType: "",
  containerColour: "",
  sampleRequirements: "Serum or EDTA plasma collected within first ~5 days of illness.",
  storageTransport: "Refrigerate at 2–8 °C; process within 48 hours.",
  rejection: "prolonged delay",
  methodology: "Real-time RT-PCR with serotype-specific primers/probes.",

  turnaround: { routine: "1–3 days", urgent: "" },
  criticalAlert: "Dengue RNA detected (any serotype) should be communicated promptly, especially in severe or high-risk cases.",
  diseaseAssociations: [
    "Acute dengue virus infection.",
    "Identification of serotype (DENV-1–4) for epidemiological control.",
    "Severe dengue complications (haemorrhagic fever, shock syndrome)"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "direct-antiglobulin-test",
  name: "Direct Antiglobulin Test (DAT / Direct Coombs)",
  synonyms: [],
  department: "blood-bank",
  limsCode: "DAT",
  flags: ["critical", "stat"],

  summary: "Direct Coombs Test",
  description: "Detects immunoglobulin or complement bound directly to red blood cells in vivo. Used to identify immune-mediated haemolysis.",

  indications: [
    "Autoimmune haemolytic anaemia (AIHA)",
    "Haemolytic transfusion reactions",
    "Haemolytic disease of the newborn (HDN)",
    "Drug-induced immune haemolysis"
  ],
  referenceRange: "Negative (no RBC-bound antibodies)",
  analyticalLimitations: [
    "Some weak autoantibodies may require enhanced methods",
    "Complement-only reactions require poly-specific reagents",
    "False positives: recent transfusion, high protein states"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Pink EDTA",
  sampleRequirements: "2–5 mL EDTA",
  storageTransport: "Transport to lab within 2 hours",
  rejection: "wrong tube",
  methodology: "Column agglutination (gel) or tube method with anti-human globulin (AHG)",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Strong positive DAT → urgent haematology/clinical review",
  diseaseAssociations: [
    "Autoimmune Haemolytic Anaemia (warm or cold type)",
    "HDN (maternal allo-antibodies)",
    "Delayed haemolytic transfusion reactions",
    "Drug-induced haemolysis"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "direct-high-density-lipoprotein",
  name: "Direct High-Density Lipoprotein",
  synonyms: ["HDL Cholesterol"],
  department: "biochemistry",
  limsCode: "DHDLC",
  flags: [],

  summary: "",
  description: "Measures the concentration of high-density lipoprotein (HDL) cholesterol, a key marker of cardiovascular risk. Direct assays allow measurement without requiring fasting.",

  indications: [
    "Assess cardiovascular risk as part of lipid profile.",
    "Monitor lipid-lowering / lifestyle therapy.",
    "Risk stratification in metabolic syndrome and diabetes."
  ],
  referenceRange: [
    "Adult males: >1.0 mmol/L desirable.",
    "Adult females: >1.2 mmol/L desirable.",
    "HDL <1.0 mmol/L associated with increased CardioVascular risk."
  ],
  analyticalLimitations: [
    "Severe hypertriglyceridaemia (>4.5 mmol/L) may interfere",
    "HDL must be interpreted with LDL, triglycerides and full lipid profile"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "2–5 mL serum",
    "Fasting sample not required"
  ],
  storageTransport: "Transport to laboratory 2–8 °C\nStable 3–5 days at 2–8 °C.",
  rejection: "See appendices",
  methodology: "Homogeneous enzymatic colorimetric assay (direct HDL).",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Low HDL:",
    "metabolic syndrome, diabetes, obesity, smoking, sedentary lifestyle → increased CV risk.",
    "High HDL (>2.0 mmol/L):",
    "usually protective; may occur in genetic conditions or chronic alcohol use."
  ],
  conversionFactors: "Cholesterol: 1 mg/dL = 0.0259 mmol/L.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "erythrocyte-sedimentation-rate",
  name: "Erythrocyte Sedimentation Rate (ESR)",
  synonyms: ["Sedimentation Rate"],
  department: "haematology",
  limsCode: "ESR",
  flags: ["critical"],

  summary: "",
  description: "ESR measures the rate at which red blood cells settle in anticoagulated whole blood over one hour. It is a non-specific marker of inflammation, affected primarily by fibrinogen and immunoglobulin concentrations.",

  indications: [
    "Diagnose and monitor chronic inflammatory and autoimmune diseases",
    "Monitor response to therapy",
    "Support diagnosis of infection, malignancy, or anaemia of chronic disease"
  ],
  referenceRange: [
    "Adult males: <15 mm/hr",
    "Adult females: <20 mm/hr",
    "Higher normal values may be seen in elderly patients"
  ],
  analyticalLimitations: [
    "Non-specific; elevated in infection, inflammation, pregnancy, anaemia, malignancy",
    "Affected by haematocrit, RBC morphology",
    "Slower response than CRP for acute inflammation"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–3 mL EDTA",
  storageTransport: "Test within 4 hours at room temp. Stable up to 24 hours at 2–8 °C.",
  rejection: "See appendices 7",
  methodology: "Manual: Westergren method",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "ESR >100 mm/hr → requires urgent clinical review",
  diseaseAssociations: [
    "Increased ESR:",
    "infections, inflammatory/autoimmune disease, malignancy, pregnancy, anaemia",
    "Decreased ESR:",
    "polycythaemia, sickle cell disease, spherocytosis, hypofibrinogenaemia"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "ferritin",
  name: "Ferritin",
  synonyms: ["Serum Ferritin"],
  department: "biochemistry",
  limsCode: "FERRITIN",
  flags: [],

  summary: "Serum Ferritin",
  description: "Ferritin is the major intracellular iron-storage protein. Serum ferritin reflects total body iron stores and is the most sensitive and specific test for iron deficiency. It may also rise in inflammation, liver disease, infection, or malignancy.",

  indications: [
    "Diagnose iron-deficiency anaemia",
    "Assess iron overload (haemochromatosis, transfusional iron load)",
    "Monitor iron status in chronic disease",
    "Interpret iron studies with transferrin saturation & CRP"
  ],
  referenceRange: [
    "Adults: >30 µg/L",
    "Age and sex dependent"
  ],
  analyticalLimitations: [
    "Elevated in inflammation, independent of iron status",
    "Elevated in liver disease, infection, malignancy",
    "Interpretation requires CRP/ESR in suspected inflammation"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum, 2–5 mL",
  storageTransport: "Transport 2–8 °C. Storage  2–8 °C",
  rejection: "See appendices.",
  methodology: "Immunoassay (chemiluminescence)",

  turnaround: { routine: "1 – 2 working days", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Decreased:",
    "Iron deficiency, chronic blood loss, malabsorption, inadequate intake",
    "Increased:",
    "Haemochromatosis, chronic liver disease, malignancy, inflammation, haemolytic anaemia"
  ],
  conversionFactors: "1 ng/mL = 1 µg/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fibrinogen",
  name: "Fibrinogen",
  synonyms: [],
  department: "haematology",
  limsCode: "FIB",
  flags: ["critical"],

  summary: "",
  description: "Liver-synthesised glycoprotein essential for clot formation. Thrombin converts fibrinogen to fibrin during coagulation.",

  indications: [
    "Investigation of bleeding disorders",
    "Diagnosis and monitoring of DIC",
    "Assessment of liver disease",
    "Evaluation of acute-phase response (inflammation, infection)",
    "Cardiovascular risk assessment"
  ],
  referenceRange: "Adults: 1.5–4.0 g/L",
  analyticalLimitations: [
    "Lipemic, icteric or haemolysed plasma may interfere with optical methods",
    "Heparin contamination may affect results",
    "Very high fibrinogen can cause clot-detection errors",
    "Acute-phase reactant: rises in inflammation/infection"
  ],

  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: "2.7 mL citrated plasma",
  storageTransport: "Transport at room temperature\nTest within 4 hours of collection",
  rejection: "Under-filled citrate tube",
  methodology: "Claus functional fibrinogen assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Fibrinogen <1.0 g/L = critical (risk of DIC/severe bleeding)",
  diseaseAssociations: [
    "Low Fibrinogen:",
    "DIC, severe liver disease/failure, congenital afibrinogenaemia/hypofibrinogenaemia, fibrinolysis.",
    "High Fibrinogen",
    "Inflammation, infection, trauma, surgery, pregnancy, nephrotic syndrome, cardiovascular disease."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fine-needle-aspiration",
  name: "Fine Needle Aspiration (FNA)",
  synonyms: ["FNA"],
  department: "cytology",
  limsCode: "FNAB",
  flags: ["critical", "stat"],

  summary: "Minimally evasive fine needle aspiration",
  description: "Procedure to obtain cells from palpable or imaged lesions (thyroid, lymph nodes, breast, salivary glands, soft tissue). Smears are stained and examined microscopically for benign, malignant, inflammatory or infectious pathology.",

  indications: [
    "Evaluation of thyroid nodules",
    "Assessment of lymphadenopathy (TB, lymphoma, metastasis)",
    "Investigation of breast lumps",
    "Salivary gland and soft tissue lesion evaluation",
    "Diagnosis of granulomatous and infectious diseases"
  ],
  referenceRange: "Not applicable (cytological test).",
  analyticalLimitations: [
    "Limited assessment of tissue structure",
    "Sampling error or poor smear technique reduces accuracy",
    "Requires correlation with imaging and clinical history",
    "False negatives possible, especially in cystic/fibrotic lesions"
  ],

  sampleType: "Tissue",
  containerColour: "Fine needle aspirate",
  sampleRequirements: [
    "Aspirated material using 22–25G needle",
    "Smears on glass slides (alcohol-fixed and/or air-dried)",
    "Optional cell block for histology/immunocytochemistry"
  ],
  storageTransport: "Fix slides immediately in alcohol or air-dry as required\nStore slides at room temperature in slide boxes\nCell blocks/residual fluid at 2–8 °C if delay expected",
  rejection: "Inadequate cellularity\nPoorly spread, unstained, broken, or unlabelled slides\nSmears obscured by blood or necrosis",
  methodology: "Microscopic examination with Papanicolaou and/or Giemsa staining; special stains or immunocytochemistry as required",

  turnaround: { routine: "2–5 working days", urgent: "" },
  criticalAlert: "Presence of malignant cells must be urgently reported to the requesting clinician",
  diseaseAssociations: [
    "Thyroid nodules (benign vs malignant)",
    "Tuberculosis and other granulomatous infections",
    "Lymphomas and metastatic cancers",
    "Salivary gland and breast lesions"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fluid-amylase",
  name: "Fluid Amylase",
  synonyms: [
    "Ascitic Amylase",
    "Pleural Fluid Amylase"
  ],
  department: "biochemistry",
  limsCode: "FLAMY",
  flags: ["critical", "stat"],

  summary: "",
  description: "Measures amylase activity in body fluids (pleural, peritoneal, pericardial) to investigate pancreatic disease, GI perforation and other causes of amylase-rich effusions. Always interpret with serum amylase.",

  indications: [
    "Suspected pancreatitis with fluid leakage",
    "Pancreatic pseudocyst rupture",
    "Support diagnosis of Gastro-intestinal perforation (oesophageal/ duodenal)",
    "Assessment of malignant or infectious effusions"
  ],
  referenceRange: [
    "Typically <100 U/L in pleural/peritoneal fluids without pathology",
    "Interpretation relative to paired serum amylase"
  ],
  analyticalLimitations: [
    "Blood contamination may falsely elevate results",
    "Lipaemic or viscous fluids may interfere with spectrophotometric methods",
    "High amylase can arise from non-pancreatic sources (salivary, malignancy)",
    "Interpretation requires correlation with serum amylase and clinical findings"
  ],

  sampleType: "Body fluid",
  containerColour: "Specimen jar",
  sampleRequirements: [
    "2–5 mL pleural, peritoneal or other sterile fluid in plain container",
    "Paired serum sample recommended to measure serum Amylase (See Amylase)."
  ],
  storageTransport: "Transport at 2–8 °C. Stable up to 5 days refrigerated.",
  rejection: "Leaking container\nInsufficient volume",
  methodology: "Spectrophotometric amylase assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Markedly elevated fluid amylase in suspected perforation or pseudocyst rupture is clinically urgent.",
  diseaseAssociations: [
    "Acute pancreatitis with fluid leakage",
    "Pancreatic pseudocyst rupture",
    "GI perforation",
    "Malignancy (pancreas, lung, GI tract)",
    "Occasionally tuberculous pleuritis"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fluid-creatinine",
  name: "Fluid Creatinine",
  synonyms: ["Peritoneal Fluid Creatinine, Ascitic Fluid Creatinine, Urine Leak Test"],
  department: "biochemistry",
  limsCode: "FLCREA",
  flags: ["critical", "stat"],

  summary: "Creatinine measurement in peritoneal or ascitic fluids",
  description: "Creatinine measurement in peritoneal/ascitic fluids is used to investigate suspected urinary tract injury or leakage. A fluid:serum creatinine ratio >1.0 strongly suggests presence of urine in the fluid.",

  indications: [
    "Detection of urinary ascites (bladder rupture, trauma)",
    "Diagnosis of ureteral injury or leakage post-surgery",
    "Evaluation of vesicoperitoneal/ureteroperitoneal fistulae",
    "Assessment of peritoneal dialysis complications"
  ],
  referenceRange: [
    "Interpretation relative to serum creatinine.",
    "Fluid:serum creatinine ratio >1.0 suggests urine leak"
  ],
  analyticalLimitations: [
    "Haemolysis or contamination may affect accuracy.",
    "Dilution by large collections may lower concentration.",
    "Delayed collection post-leak may reduce diagnostic value."
  ],

  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: "Peritoneal/ascitic or other relevant fluid in sterile plain container",
  storageTransport: "2–8 °C; room temp ≤24 hrs\nAvoid contamination with urine at collection",
  rejection: "Contaminated collection",
  methodology: "Enzymatic or Jaffe creatinine assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Fluid:serum creatinine ratio >1.0 in trauma or postoperative context should be urgently reported.",
  diseaseAssociations: [
    "Bladder rupture",
    "Ureteral injury (traumatic or postoperative)",
    "Urinary fistula",
    "Peritoneal dialysis complications"
  ],
  conversionFactors: "Creatinine: 1 mg/dL = 88.4 µmol/L, 1 µmol/L = 0.0113 mg/dL",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fluid-culture",
  name: "Fluid Culture",
  synonyms: [],
  department: "microbiology",
  limsCode: "FLUID",
  flags: ["critical", "stat"],

  summary: "Microbiological culture of normally sterile body fluids",
  description: "Microbiological culture of normally sterile body fluids (excluding blood and CSF).\nThis test detects:\nAerobic bacteria\nAnaerobic bacteria (where requested / clinically indicated)\nYeasts (if clinically indicated)\nGram stain is performed on all sterile fluid specimens.",

  indications: ["Investigation of suspected infection in normally sterile body cavities (e.g., peritonitis, septic arthritis, empyema, pericarditis, biliary infection, post-surgical infection)."],
  referenceRange: "No growth.",
  analyticalLimitations: [
    "Prior antibiotic therapy may reduce culture yield",
    "Small specimen volume reduces sensitivity",
    "Swab specimens significantly reduce recovery rate",
    "Contamination during collection may lead to false-positive results",
    "Some fastidious organisms may require extended incubation"
  ],

  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Preferred specimen:",
    "Sterile aspirated fluid collected by clinician.",
    "1–5 mL minimum, 10–20 mL preferred (higher yield)",
    "Collection:",
    "Use sterile container",
    "Do not use swabs (poor sensitivity)",
    "Avoid contamination from skin flora",
    "Clearly label specimen type",
    "For ascitic fluid:",
    "Inoculation into blood culture bottles at bedside improves yield (if protocol allows)."
  ],
  storageTransport: "Transport to laboratory immediately\nDo not refrigerate unless delay >2 hours\nProcess as soon as possible (within 2 hours preferred)",
  rejection: "Unlabelled specimen\nLeaking container\nSwab specimen (unless unavoidable)\nInsufficient volume\nNon-sterile container\nSpecimen received >24 hours after collection without refrigeration",
  methodology: "Gram stain + aerobic culture ± anaerobic culture; identification and antimicrobial susceptibility testing (AST) where clinically significant.",

  turnaround: { routine: "2 - 3 days", urgent: "" },
  criticalAlert: "Organisms seen on Gram stain in sterile fluid\nGrowth of significant pathogens\nMultidrug-resistant organisms\nStreptococcus pneumoniae in pleural fluid\nStaphylococcus aureus in joint fluid\nAny organism in pericardial fluid",
  diseaseAssociations: [
    "Spontaneous bacterial peritonitis (SBP)",
    "Septic arthritis",
    "Empyema",
    "Pericarditis",
    "Intra-abdominal abscess",
    "Biliary sepsis"
  ],
  conversionFactors: "Not applicable",
  organismsReported: [
    { group: "Examples include", items: [
      "Staphylococcus aureus",
      "Streptococcus pneumoniae",
      "Streptococcus spp.",
      "Enterococcus spp.",
      "Escherichia coli",
      "Klebsiella spp.",
      "Pseudomonas aeruginosa",
      "Anaerobes (e.g., Bacteroides spp.)",
      "Candida spp.",
      "Skin commensals (e.g., coagulase-negative staphylococci) are interpreted cautiously and correlated clinically."
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fluid-glucose",
  name: "Fluid Glucose",
  synonyms: [],
  department: "biochemistry",
  limsCode: "FLGLUC",
  flags: [],

  summary: "Body Fluid Glucose",
  description: "Measures glucose in body fluids (pleural, peritoneal, synovial). Interpretation requires paired serum glucose. Lower fluid glucose relative to serum suggests high cellular/metabolic activity (infection, inflammation, malignancy).",

  indications: [
    "Evaluate suspected infectious or malignant effusions (empyema, TB, malignancy)",
    "Support assessment of ascites/peritoneal fluid for infection or perforation",
    "Assess synovial fluid in suspected septic or inflammatory arthritis."
  ],
  referenceRange: [
    "Fluid glucose ≈ serum glucose",
    "Low fluid glucose (<3.3 mmol/L pleural) suggests exudative/infective process.",
    "Very low (<2.2 mmol/L) strongly suggests complicated parapneumonic effusion/empyema."
  ],
  analyticalLimitations: [
    "Delay to analysis → cellular/microbial glycolysis → falsely low results",
    "Blood contamination may lower glucose.",
    "Must always interpret against paired serum glucose."
  ],

  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "1–5 mL body fluid (pleural, peritoneal/ascitic, synovial) in plain sterile container.",
    "Serum glucose required."
  ],
  storageTransport: "Immediate transport. If delay, refrigerate (2–8 °C) and separate cells.",
  rejection: "Gross haemolysis\nProlonged delay without cooling/separation",
  methodology: "",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Low fluid glucose relative to serum, suggesting life-threatening infection (e.g. empyema)",
  diseaseAssociations: [
    "Low fluid glucose to serum glucose:",
    "Bacterial infection",
    "TB",
    "Malignancy",
    "Rheumatoid effusion",
    "Near-serum:",
    "transudative",
    "non-infective"
  ],
  conversionFactors: "1 mg/dL = 0.0555 mmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "fluid-protein",
  name: "Fluid Protein",
  synonyms: [],
  department: "biochemistry",
  limsCode: "FLPROT",
  flags: ["critical", "stat"],

  summary: "Body Fluid Protein",
  description: "Protein measurement in body fluids helps classify effusions as transudates or exudates and supports diagnosis of underlying conditions (infection, malignancy, liver or heart disease).",

  indications: [
    "Differentiate transudate vs exudate in pleural/ascitic effusions",
    "Assess malignant, tuberculous, or bacterial effusions",
    "Evaluate liver disease, heart failure, nephrotic syndrome"
  ],
  referenceRange: [
    "Transudate: <25 g/L",
    "Exudate: ≥30 g/L or fluid:serum protein ratio >0.5"
  ],
  analyticalLimitations: [
    "Borderline results (25–30 g/L) require correlation with Light's criteria and clinical context",
    "Dilution with blood or IV fluids may alter results",
    "Haemolysis or contamination may interfere with assays"
  ],

  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: "2–5 mL pleural, peritoneal or other body fluid in sterile plain container",
  storageTransport: "Stable at 2–8 °C up to 5 days\nTransport refrigerated; avoid bacterial contamination",
  rejection: "Leaking container\nInsufficient volume\nGross haemolysis/contamination",
  methodology: "Biuret or dye-binding spectrophotometric assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Clearly exudative protein (≥30 g/L, fluid:serum >0.5g/L) in suspected infection or malignancy should be treated as a critical result.",
  diseaseAssociations: [
    "Transudates: Congestive Cardiac Failure, cirrhosis, nephrotic syndrome",
    "Exudates: Malignancy, bacterial pneumonia/empyema, Tuberculosis, pancreatitis, pleural effusion"
  ],
  conversionFactors: "See appendices",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "folate",
  name: "Folate",
  synonyms: ["Serum Folate, Folic Acid"],
  department: "biochemistry",
  limsCode: "FOLATE",
  flags: ["critical"],

  summary: "Serum Folate",
  description: "Used to investigate macrocytic anaemia.",

  indications: [
    "Investigation of macrocytic anaemia",
    "Assessment of nutritional deficiency",
    "Monitoring increased requirements (pregnancy, haemolysis, malignancy)",
    "Evaluation of malabsorption"
  ],
  referenceRange: "Adults: 7–40 nmol/L",
  analyticalLimitations: [
    "Reflects short-term intake; fluctuates with recent meals",
    "Haemolysis falsely elevates",
    "Interpret with vitamin B12",
    "High-dose biotin and heterophile antibodies may interfere"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Protect from light\nTransport at room temp if ≤24 hrs; refrigerate (2–8 °C)\nFreeze if >48 hrs",
  rejection: "See appendices",
  methodology: "Immunoassay (chemiluminescence)",

  turnaround: { routine: "2–3 working days", urgent: "" },
  criticalAlert: "Deficiency in pregnancy should be communicated (neural tube defect risk)",
  diseaseAssociations: [
    "•	Low folate: poor diet, alcohol use, elderly, malabsorption (coeliac, tropical sprue), pregnancy, haemolysis, malignancy, drug effects (methotrexate, trimethoprim, anticonvulsants)",
    "Clinical:",
    "megaloblastic anaemia",
    "glossitis",
    "fatigue",
    "Increase homocysteine",
    "neural tube defects"
  ],
  conversionFactors: "1 ng/mL = 2.266 nmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "follicle-stimulating-hormone",
  name: "Follicle-Stimulating Hormone (FSH)",
  synonyms: [],
  department: "biochemistry",
  limsCode: "FSH",
  flags: [],

  summary: "Test for fertility.",
  description: "Hormone that regulates reproductive processes; measured in infertility or pituitary disorders.",

  indications: [
    "Assessment of ovarian reserve and female fertility",
    "Investigation of menstrual irregularities and suspected ovarian failure",
    "Evaluation of delayed or precocious puberty",
    "Diagnosis of primary vs secondary hypogonadism in men",
    "Monitoring therapy in infertility and gonadal disorders"
  ],
  referenceRange: [
    "Male: 1.0–5.0 U/L",
    "Female: 1.0–8.0 U/L",
    "Post-menopausal female: >18.0 U/L"
  ],
  analyticalLimitations: [
    "Pulsatile secretion; varies during day and cycle",
    "Affected by pregnancy, hormonal contraception, HRT",
    "Interference from heterophile antibodies and high-dose biotin",
    "Interpret with LH, oestradiol/testosterone and clinical context"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temp if tested within 24 hrs\nRefrigerate (2–8 °C) if delayed; freeze if >48 hrs",
  rejection: "See appendices",
  methodology: "Immunoassay (chemiluminescence)",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Females:",
    "decreased ovarian reserve, menopause, premature ovarian failure, gonadal dysgenesis",
    "hypopituitarism, hypothalamic dysfunction, PCOS",
    "Males:",
    "primary testicular failure, Klinefelter syndrome, orchitis, chemo/radiation damage.",
    "pituitary/hypothalamic insufficiency, anabolic steroid use"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "free-prostate-specific-antigen",
  name: "Free Prostate-Specific Antigen (Free PSA, fPSA)",
  synonyms: ["Free and Total PSA (F/T PSA)"],
  department: "biochemistry",
  limsCode: "FPSA",
  flags: ["critical"],

  summary: "Test for the unbound fraction of PSA",
  description: "Free PSA is the unbound fraction of PSA; total PSA includes free + bound",

  indications: [
    "Differentiate malignancy vs benign disease when total PSA elevated",
    "Risk stratification by %fPSA with total PSA and clinical findings"
  ],
  referenceRange: [
    "No standalone reference interval; interpret %fPSA with total PSA",
    "Typical %fPSA risk bands:",
    "25%: low risk",
    "10–25%: moderate risk",
    "<10%: higher risk"
  ],
  analyticalLimitations: [
    "Only interpretable with total PSA and clinical context",
    "Less reliable if total PSA >10 µg/L",
    "Free PSA less stable pre-analytically – prompt processing needed",
    "Interference: heterophile antibodies, high-dose biotin, recent prostate manipulation"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temp if test promptly\nRefrigerate (2–8 °C) if delayed; freeze if >48 hrs",
  rejection: "See appendices",
  methodology: "Immunoassay (chemiluminescence)",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Low %fPSA: higher probability of prostate cancer",
    "Higher %fPSA: more consistent with BPH/prostatitis",
    "Not all prostate cancers show abnormal free PSA"
  ],
  conversionFactors: "ng/mL = µg/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "ft3",
  name: "FT3",
  synonyms: [
    "Free Triiodothyronine",
    "Free T3"
  ],
  department: "biochemistry",
  limsCode: "FT3",
  flags: [],

  summary: "Biologically active thyroid hormone regulating metabolism",
  description: "Biologically active thyroid hormone regulating metabolism, growth and development. Mostly generated by peripheral conversion of T4. Always interpret with TSH and FT4.",

  indications: [
    "Evaluate thyroid function with TSH and FT4",
    "Diagnose hyperthyroidism, especially T3 thyrotoxicosis",
    "Monitor established thyroid disease",
    "Investigate pituitary/hypothalamic thyroid dysfunction"
  ],
  referenceRange: "Adults: 4.0 – 8.0 pmol/L",
  analyticalLimitations: [
    "High-dose biotin interferes; withhold ≥48 hrs before sampling",
    "Possible heterophile/HAAA interference",
    "May be normal in early/subclinical disease – interpret with TSH/FT4",
    "Often low in critical illness (non-thyroidal illness)",
    "Affected by drugs (amiodarone, steroids, propranolol, etc.)",
    "Unreliable test for hypothyroidism."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temp if analysed promptly\nRefrigerate (2–8 °C) if delayed",
  rejection: "",
  methodology: "Immunoassay (chemiluminescence)",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "None",
  diseaseAssociations: [
    "Elevate FT3:",
    "Graves' disease",
    "toxic nodular goitre",
    "T3 thyrotoxicosis",
    "early thyroiditis",
    "Reduced FT3:",
    "Primary hypothyroidism",
    "pituitary/hypothalamic dysfunction",
    "non-thyroidal illness",
    "drug effects"
  ],
  conversionFactors: "1 pg/mL = 1.54 pmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-22",
  updated: ""
},

{
  id: "ft4",
  name: "FT4",
  synonyms: [
    "Free Thyroxine",
    "Free T4"
  ],
  department: "biochemistry",
  limsCode: "FT4",
  flags: [],

  summary: "Reflects thyroid metabolic activity",
  description: "Reflects thyroid metabolic activity. FT4 with TSH is the mainstay of thyroid function testing.",

  indications: [
    "Diagnosis and monitoring of hypo- and hyperthyroidism",
    "Assessment of thyroid status in pituitary/hypothalamic disease",
    "Investigation of abnormal TSH results",
    "Monitoring thyroid hormone replacement/suppression therapy"
  ],
  referenceRange: "Adults: 9–24 pmol/L",
  analyticalLimitations: [
    "Biotin interference; withhold ≥48 hrs pre-test",
    "Influenced by severe illness, pregnancy, altered binding proteins",
    "Heterophile antibodies/autoantibodies may interfere",
    "Interpret with TSH and clinical findings"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temp if tested promptly\nRefrigerate (2–8 °C) if delayed; freeze if >48 hrs",
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments)",
  methodology: "Immunoassay (chemiluminescence)",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Elevated FT4:",
    "Graves' disease",
    "toxic nodular goitre",
    "thyroiditis",
    "excessive thyroxine therapy",
    "Reduced FT4:",
    "Primary hypothyroidism",
    "pituitary/hypothalamic insufficiency",
    "iodine deficiency",
    "non-thyroidal illness"
  ],
  conversionFactors: "1 ng/dL = 12.9 pmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "tuberculosis pcr-genexpert-mtb-rif",
  name: "Tuberculosis PCR GeneXpert MTB/RIF",
  synonyms: [
    "Xpert MTB/RIF",
    "MTB PCR",
    "TB Molecular Test"
  ],
  department: "molecular",
  limsCode: "TB-PCR",
  flags: [],

  summary: "Automated nucleic acid amplification",
  description: "Automated nucleic acid amplification test (NAAT) that detects Mycobacterium tuberculosis complex DNA and determines rifampicin resistance.",

  indications: [
    "Rapid diagnosis of pulmonary tuberculosis.",
    "Detect rifampicin resistance (indicator for MDR-TB).",
    "Assess suspected treatment failure or relapse.",
    "Test extrapulmonary specimens (CSF, tissue, lymph node aspirate, BAL) where appropriate."
  ],
  referenceRange: [
    "MTB not detected",
    "MTB detected, rifampicin resistance not detected",
    "MTB detected, rifampicin resistance detected (probable MDR-TB)",
    "Invalid / error = repeat"
  ],
  analyticalLimitations: [
    "Detects only rifampicin resistance; does not identify isoniazid or other drug resistances.",
    "False positives possible from dead bacilli (post-treatment).",
    "Cannot differentiate viable vs nonviable organisms.",
    "Reduced sensitivity in smear-negative, culture-positive cases.",
    "May miss extrapulmonary TB or very low bacillary loads"
  ],

  sampleType: "",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Sputum (preferred)",
    "Gastric aspirate",
    "BAL",
    "CSF",
    "lymph node aspirate",
    "tissue biopsy (acceptable)"
  ],
  storageTransport: "Store at 2–8 °C if not processed immediately.\nAvoid freezing.\nTransport in sterile, leak-proof containers.\nProcess within 2–3 days for optimal sensitivity",
  rejection: "Dry swab or insufficient sample.\nContaminated or leaking container.\nMislabelled or inappropriate sample (e.g., saliva).",
  methodology: "Automated real-time PCR (Cepheid GeneXpert system).",

  turnaround: { routine: "Same day", urgent: "<4 hours" },
  criticalAlert: "MTB detected with rifampicin resistance → Urgent notification to treating clinician and National TB Program.",
  diseaseAssociations: [
    "Pulmonary and extrapulmonary tuberculosis.",
    "Multidrug-resistant TB (MDR-TB)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "gfr-glomerular-filtration-rate",
  name: "GFR – Glomerular Filtration Rate (estimated)",
  synonyms: ["CKD-EPI eGFR"],
  department: "biochemistry",
  limsCode: "EGFR21",
  flags: ["critical"],

  summary: "Estimated glomerular filtration rate",
  description: "Estimated glomerular filtration rate calculated automatically from serum creatinine using the CKD-EPI 2021 race-neutral equation.",

  indications: [
    "Screening and diagnosis of chronic kidney disease (CKD).",
    "Staging and monitoring progression of CKD.",
    "Assessing renal function prior to prescribing nephrotoxic drugs or contrast media.",
    "Monitoring renal recovery after acute kidney injury (AKI).",
    "Risk stratification for cardiovascular disease and renal complications."
  ],
  referenceRange: [
    "See Appendix 11 eGFR Reference Ranges & CKD G-Stages",
    "Reported as mL/min/1.73 m² and used as a marker of renal filtration function."
  ],
  analyticalLimitations: [
    "Not validated in: AKI, pregnancy, <18 years, extremes of muscle mass, amputation, paraplegia, severe malnutrition ",
    "Requires IDMS-traceable creatinine",
    "Jaffe creatinine subject to interference (bilirubin, ketones, glucose)",
    "eGFR may over- or under-estimate true GFR in some clinical settings",
    "Consider confirmatory testing (repeat eGFR or measured GFR) when accuracy is critical",
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum 2 - 5mL",
  storageTransport: "Stable as per serum creatinine method",
  rejection: "See serum Creatinine",
  methodology: "CKD-EPI 2021 creatinine-based equation",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Markedly reduced eGFR (<15 mL/min/1.73 m², G5), especially if acute → urgent clinical review.",
  diseaseAssociations: [
    "CKD:",
    "diabetic nephropathy",
    "hypertensive nephrosclerosis",
    "glomerulonephritis",
    "chronic tubulointerstitial nephritis",
    "PKD",
    "reflux nephropathy",
    "Systemic:",
    "SLE",
    "ANCA vasculitis",
    "multiple myeloma",
    "HIV-associated nephropathy",
    "hepatorenal syndrome",
    "AKI:",
    "sepsis",
    "hypovolaemia",
    "shock",
    "nephrotoxins",
    "rhabdomyolysis",
    "severe malaria",
    "Hyperfiltration states:",
    "early diabetes",
    "obesity",
    "high-protein diet",
    "pregnancy (CKD-EPI not validated in pregnancy)",
    "Complications:",
    "cardiovascular disease",
    "metabolic acidosis",
    "hyperkalaemia",
    "CKD-MBD",
    "anaemia"
  ],
  conversionFactors: "Creatinine: µmol/L → mg/dL ÷ 88.4 (internal use for eGFR calculation).",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-11", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "ggt-gamma-glutamyl-transferase",
  name: "GGT – Gamma Glutamyl transferase",
  synonyms: ["Gamma-GT"],
  department: "biochemistry",
  limsCode: "GGT",
  flags: [],

  summary: "GGT is an enzyme present in liver, bile ducts, pancreas, and kidneys",
  description: "Gamma-glutamyl transferase (GGT) is an enzyme present in liver, bile ducts, pancreas, and kidneys. It is used to assess hepatobiliary function, particularly cholestasis and alcohol-related liver injury, and to help differentiate hepatic from bone sources of elevated ALP.",

  indications: [
    "Evaluate cholestasis and biliary obstruction",
    "Detect and monitor alcohol-related liver injury",
    "Differentiate liver vs. bone causes of elevated ALP",
    "Monitor hepatotoxic medications (e.g., anti-epileptics)"
  ],
  referenceRange: [
    "Age-specific ranges; adult example: 9–64 U/L",
    "See appendices"
  ],
  analyticalLimitations: [
    "Non-specific — elevated in pancreatic, renal, prostate disease",
    "Induced by alcohol and enzyme-inducing drugs (phenytoin and phenobarbital).",
    "Mild elevations seen in obesity, diabetes, metabolic syndrome.",
    "May be normal in early liver disease; interpret alongside ALP, ALT, AST."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Stable 2–3 days at 2–8 °C. Freeze for long-term storage. Transport refrigerated; avoid haemolysis.",
  rejection: "Haemolysis",
  methodology: "Enzymatic colorimetric assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Elevated:",
    "cholestasis",
    "alcoholic liver disease",
    "NAFLD",
    "hepatitis",
    "cirrhosis",
    "pancreatic disease",
    "heart failure",
    "Mild isolated elevations:",
    "obesity",
    "diabetes",
    "recent alcohol use"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "glucose",
  name: "Glucose (Random)",
  synonyms: [
    "Random Blood Glucose",
    "RBG",
    "Blood sugar"
  ],
  department: "biochemistry",
  limsCode: "RGLU",
  flags: ["critical", "stat"],

  summary: "Random plasma glucose at any time of day.",
  description: "Measures plasma glucose at any time of day. Used for detecting hyperglycaemia, screening for diabetes, and assessing acute metabolic emergencies.",

  indications: [
    "Diagnose hyperglycaemia or hypoglycaemia",
    "Screen for diabetes when fasting not possible",
    "Evaluate symptomatic patients (polyuria, polydipsia, weight loss)",
    "Support monitoring in known diabetics (not a long-term control test)"
  ],
  referenceRange: "Adult reference: 3.9–7.7 mmol/L",
  analyticalLimitations: [
    "Elevated result requires confirmation with fasting glucose or HbA1c",
    "Haemolysis or delayed separation ↓ glucose (glycolysis)",
    "Not suitable for long-term monitoring (HbA1c preferred)"
  ],

  sampleType: "Plasma",
  containerColour: "Grey Fluoride Oxalate",
  sampleRequirements: [
    "2–5 mL fluoride-oxalate",
    "2–5 mL Serum is acceptable. Spin sample after clotting."
  ],
  storageTransport: "Separate plasma or serum within 1 hr, stable 1–2 days at 2–8 °C\nTransport in 2–8 °C and seperate plasma/serum from cells.",
  rejection: "See appendices",
  methodology: "Enzymatic (glucose oxidase or hexokinase)",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "<2.5 mmol/L\n>25 mmol/L",
  diseaseAssociations: [
    "Elevated: diabetes mellitus, stress response, infection, Cushing's syndrome, hyperthyroidism, steroid therapy",
    "Decreased: Addison's disease, insulinoma, sepsis, prolonged fasting"
  ],
  conversionFactors: "1 mg/dL = 0.0555 mmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "fasting-glucose",
  name: "Glucose (Fasting)",
  synonyms: ["Fasting Blood Glucose"],
  department: "biochemistry",
  limsCode: "GLU",
  flags: ["critical"],

  summary: "Plasma glucose after 8–12 hr fast",
  description: "Measures plasma glucose after 8–12 hr fast. Standard diagnostic test for diabetes and impaired fasting glucose.",

  indications: [
    "Diagnose diabetes mellitus and impaired fasting glucose",
    "Evaluate hypoglycaemia",
    "Monitor therapy in diabetes mellitus",
    "Screening for high-risk individuals"
  ],
  referenceRange: "3.9 – 5.5 mmol/L",
  analyticalLimitations: [
    "Fasting <8 hrs or >12 hrs affects accuracy",
    "Stress, illness, or medications can alter glucose",
    "Glycolysis reduces glucose if separation delayed"
  ],

  sampleType: "Plasma",
  containerColour: "Grey Fluoride Oxalate",
  sampleRequirements: [
    "2–5 mL  fluoride-oxalate.",
    "2 – 5 mL serum acceptable using SST or spin and separate serum."
  ],
  storageTransport: "Separate within 1 hr\nStable 1–2 days at 2–8 °C",
  rejection: "See appendices",
  methodology: "Enzymatic (glucose oxidase or hexokinase)",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "<2.5 mmol/L\n>25 mmol/L",
  diseaseAssociations: [
    "Elevated:",
    "diabetes mellitus",
    "Cushing's syndrome",
    "acromegaly",
    "pheochromocytoma",
    "Decreased:",
    "hypopituitarism",
    "Addison's disease",
    "insulinoma",
    "severe sepsis"
  ],
  conversionFactors: "1 mg/dL = 0.0555 mmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "haematocrit",
  name: "Haematocrit (HCT)",
  synonyms: ["Packed Cell Volume (PCV)"],
  department: "haematology",
  limsCode: "HCT",
  flags: ["critical"],

  summary: "Proportion of blood volume occupied by red cells (L/L)",
  description: "Proportion of blood volume occupied by red cells (L/L). Reflects both RBC number and size.\nPart of the Full Blood Count.",

  indications: [
    "Assess anaemia and polycythaemia",
    "Evaluate hydration status (dilution vs concentration)",
    "Monitor treatment of haematological disorders",
    "Aid transfusion decisions"
  ],
  referenceRange: [
    "Falsely elevated with dehydration or poor plasma separation",
    "Falsely decreased with haemodilution (IV fluids)",
    "Interference from cold agglutinins, clots, haemolysis",
    "Interpret with Hb and red cell indices"
  ],
  analyticalLimitations: [],

  sampleType: "",
  containerColour: "",
  sampleRequirements: "2–5 mL EDTA",
  storageTransport: "Store at room temperature, analyse within 24 hours",
  rejection: "",
  methodology: "Automated haematology analyser (impedance/optical)",

  turnaround: { routine: "", urgent: "" },
  criticalAlert: "<0.20 L/L\n>0.60 L/L",
  diseaseAssociations: [
    "Low HCT:",
    "Anaemia (iron deficiency, haemolysis, marrow failure)",
    "acute/chronic blood loss",
    "haemodilution",
    "High HCT:",
    "Polycythaemia vera",
    "chronic hypoxia (COPD, cyanotic heart disease)",
    "dehydration",
    "EPO use."
  ],
  conversionFactors: "HCT (L/L) X 100 = %",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-17"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "haemoglobin",
  name: "Haemoglobin (Hb)",
  synonyms: ["Hb"],
  department: "haematology",
  limsCode: "HGB",
  flags: ["critical", "stat"],

  summary: "Iron-containing protein in Red Blood Cells",
  description: "Iron-containing protein in RBCs responsible for oxygen transport. Core parameter for diagnosing anaemia/polycythaemia.\nPart of FBC.",

  indications: [
    "Diagnose/classify anaemia",
    "Detect polycythaemia",
    "Monitor iron therapy, transfusion, chemotherapy",
    "Assess severity of blood loss"
  ],
  referenceRange: [
    "Age and sex dependant",
    "See appendices."
  ],
  analyticalLimitations: [
    "Haemolysis may reduce results",
    "Lipemia and very high WBC may interfere",
    "Type of anaemia requires indices/iron studies",
    "Inadequate mixing can give inaccurate values"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–5 mL EDTA",
  storageTransport: "Room temperature if analysed ≤24 h\nRefrigerate (2–8 °C) if longer; mix gently before analysis",
  rejection: "See appendices\nClot",
  methodology: "Automated haematology analyser (cyanmetHb/spectrophotometric)",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Hb <60 g/L\nHb >200 g/L",
  diseaseAssociations: [
    "Reduced HGB:",
    "Iron deficiency",
    "thalassaemia",
    "marrow failure",
    "chronic disease",
    "haemorrhage",
    "B12/folate deficiency",
    "renal disease",
    "Raised HGB:",
    "Polycythaemia vera",
    "chronic hypoxia",
    "dehydration",
    "EPO use"
  ],
  conversionFactors: "1 g/dL = 10 g/L, 1 g/dL = 0.6206 mmol/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hba1c-glycated-haemoglobin",
  name: "HbA1c – Glycated Haemoglobin",
  synonyms: [
    "Glycated Haemoglobin (GHB)",
    "Glycosylated Haemoglobin"
  ],
  department: "biochemistry",
  limsCode: "HBA1C",
  flags: ["critical"],

  summary: "Average blood glucose concentration over previous 2–3 months.",
  description: "HbA1c measures the proportion of haemoglobin that has glucose attached to it. The result reflects the average blood glucose concentration over approximately the previous 2–3 months.",

  indications: [
    "Diagnosis and long-term monitoring of diabetes mellitus.",
    "Monitoring long-term glycaemic control in patients with diabetes.",
    "Assessment of response to diabetes treatment.",
    "Identification of patients at increased risk of developing diabetes.",
    "Monitoring does not require the patient to be fasting."
  ],
  referenceRange: [
    "Non-diabetic: < 6.0% (< 42 mmol/mol)",
    "Increased risk / prediabetes: 6.0 – 6.4% (42–47 mmol/mol)",
    "Diabetes: ≥ 6.5% (≥ 48 mmol/mol)"
  ],
  analyticalLimitations: [
    "Interpret with caution in:",
    "recent blood transfusion",
    "significant blood loss",
    "haemolytic anaemia",
    "iron deficiency anaemia",
    "haemoglobin variants or haemoglobinopathies",
    "conditions associated with altered red blood cell survival",
    "advanced renal disease",
    "pregnancy.",
    "HbA1c should not be used to diagnose diabetes where rapid-onset hyperglycaemia or Type 1 diabetes is suspected."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "2–5 mL EDTA",
    "Fasting is not required."
  ],
  storageTransport: "Room temperature if analysed ≤24 h\nRefrigerate (2–8 °C) if longer; mix gently before analysis",
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments)",
  methodology: "HbA1c assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Very high results indicating severe chronic hyperglycaemia should be reviewed in conjunction with current blood glucose and the patient's clinical condition.",
  diseaseAssociations: [
    "Increased HbA1c:",
    "diabetes mellitus",
    "persistent hyperglycaemia",
    "poor glycaemic control",
    "some conditions associated with prolonged red blood cell survival.",
    "Decreased or falsely low HbA1c:",
    "•	haemolysis",
    "•	recent significant blood loss",
    "•	recent blood transfusion",
    "•	shortened red blood cell survival",
    "•	some haemoglobinopathies."
  ],
  conversionFactors: "Appendix 10: Unit Conversion Factors (SI Conventional Units)",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hct-hb-estimation",
  name: "HCT/HB Estimation (Manual)",
  synonyms: ["Haematocrit–Haemoglobin Estimation"],
  department: "haematology",
  limsCode: "HGB, HCT",
  flags: ["critical"],

  summary: "Haematocrit–Haemoglobin Estimation",
  description: "Manual microhaematocrit with Hb estimated from HCT:\nEstimated Hb (g/L) = HCT (L/L) × 300.\nUsed when analysers unavailable.",

  indications: [
    "Rapid Hb estimate where no analyser is available",
    "Cross-check of analyser results",
    "Field, outreach, or disaster settings"
  ],
  referenceRange: "Use Hb and HCT reference ranges.",
  analyticalLimitations: [
    "Accuracy depends on correct anticoagulation, mixing, filling, centrifugation",
    "Haemolysis, clotting, or poor technique significantly affect results",
    "Provides only an estimate – not a substitute for direct Hb"
  ],

  sampleType: "Whole blood",
  containerColour: "",
  sampleRequirements: "Capillary blood in microhaematocrit tube for manual method",
  storageTransport: "Room temperature, analyse within 24 h",
  rejection: "See appendix 7",
  methodology: "Manual centrifugation to measure HCT\nHb estimated mathematically from HCT",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Hb <60 or >200 g/L\nHCT <0.20 or >0.60 L/L",
  diseaseAssociations: ["See Hb and HCT entries."],
  conversionFactors: "See Appendix 10",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hep-be-antibody-antigen",
  name: "Hep Be Antibody/Antigen",
  synonyms: ["Hepatitis B e Antigen, anti-HBe"],
  department: "haematology",
  limsCode: "HBEAG, AHBE",
  flags: [],

  summary: "HBeAg antigen indicating active HBV",
  description: "HBeAg is a secreted antigen indicating active HBV replication and high infectivity. Anti-HBe usually appears as replication decreases. Used with other HBV markers to stage infection.",

  indications: [
    "Assess infectivity in HBV carriers",
    "Monitor transition from replicative → non-replicative infection",
    "Aid prognosis and treatment monitoring in chronic HBV",
    "Combine with HBsAg, anti-HBc, HBV DNA",
    "See Appendix 13 and 14."
  ],
  referenceRange: [
    "HBeAg: Negative (non-reactive)",
    "anti-HBe: Negative (non-reactive)"
  ],
  analyticalLimitations: [
    "HBeAg may persist in inactive carriers",
    "Precore mutants may replicate without HBeAg",
    "False results possible in immunocompromised patients"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "2–8 °C ≤72 h, freeze at –20 °C if longer, transport refrigerated",
  rejection: "",
  methodology: "EIA or CLIA",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "HBeAg positive = high infectivity",
  diseaseAssociations: [
    "HBeAg positive: active replication, high infectivity, chronic active hepatitis",
    "anti-HBe positive: resolution of acute infection, inactive carrier state, or precore mutant infection"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-b-core-igg-igm-antibodies",
  name: "Hepatitis B Core IgG/IgM Antibodies (anti-HBc)",
  synonyms: [],
  department: "serology",
  limsCode: "AHBC",
  flags: [],

  summary: "Antibodies to HBc appear during acute HBV infection",
  description: "Antibodies to HBc appear during acute HBV infection and persist for life.\nIgM anti-HBc → recent/acute infection\nIgG anti-HBc → past or chronic infection",

  indications: [
    "Diagnose acute HBV (IgM anti-HBc)",
    "Evidence of past exposure or chronic infection (IgG)",
    "Evaluate \"isolated anti-HBc\" profiles (occult infection)",
    "Used with HBsAg, anti-HBs, HBeAg, HBV DNA"
  ],
  referenceRange: [
    "Negative: no evidence of exposure",
    "IgM anti-HBc positive: acute/recent infection",
    "IgG anti-HBc positive, HBsAg negative: past infection & immunity",
    "IgG anti-HBc positive, HBsAg positive: chronic infection"
  ],
  analyticalLimitations: [
    "False positives (isolated anti-HBc)",
    "May be absent in immunocompromised despite infection",
    "Cannot alone distinguish current vs past infection"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "2–8 °C ≤72 h; freeze at –20 °C if longer",
  rejection: "See appendices",
  methodology: "EIA or CLIA",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "IgM anti-HBc positive = acute HBV",
  diseaseAssociations: [
    "Acute Hep B Virus (IgM)",
    "Chronic Hep B Virus (IgG + HBsAg)",
    "Past resolved Hep B Virus (IgG + HBsAg negative)"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-b-surface-antigen-rapid-test",
  name: "Hepatitis B Surface Antigen – Rapid Test (HBsAg-RT)",
  synonyms: [
    "HBsAg Rapid",
    "Hep B Surface Antigen Rapid"
  ],
  department: "serology",
  limsCode: "HEPB-RT",
  flags: [],

  summary: "Qualitative lateral-flow test detecting HBsAg",
  description: "Qualitative lateral-flow test detecting HBsAg, the earliest marker of HBV infection. Used for rapid screening; positives need confirmation.",

  indications: [
    "Rapid screening for acute or chronic HBV",
    "Blood donor and antenatal screening (where rapid tests used)",
    "Initial assessment in clinics/outreach"
  ],
  referenceRange: [
    "Negative: no evidence of current infection",
    "Positive: suggests acute or chronic infection"
  ],
  analyticalLimitations: [
    "Window period may give false negatives",
    "Low antigen levels may be missed",
    "Haemolysed/lipaemic/icteric samples can interfere",
    "Positive rapid results require ELISA/CLIA or HBV DNA confirmation"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temp ≤24 h, 2–8 °C ≤7 days if delayed",
  rejection: "See Appendices",
  methodology: "Qualitative rapid lateral-flow immunoassay (with confirmatory ELISA/CLIA if positive)",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Any positive HBsAg is reportable",
  diseaseAssociations: [
    "Acute or chronic HBV:",
    "cirrhosis",
    "hepatocellular carcinoma"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-c-rapid-test",
  name: "Hepatitis C Rapid Test (anti-HCV)",
  synonyms: ["HCV Rapid Test"],
  department: "serology",
  limsCode: "HCV-RT",
  flags: [],

  summary: "Qualitative rapid immunoassay detecting antibodies to HCV",
  description: "Qualitative rapid immunoassay detecting antibodies to HCV. Indicates exposure but not whether infection is current or past. Requires confirmatory HCV RNA testing.",

  indications: [
    "Screening for HCV exposure",
    "Workup of liver disease",
    "At-risk groups (PWID, transfusion history, healthcare exposure)"
  ],
  referenceRange: [
    "Negative: no detectable anti-HCV",
    "Positive: exposure to HCV → confirm with HCV RNA",
    "Indeterminate: repeat/confirm"
  ],
  analyticalLimitations: [
    "Cannot distinguish current vs resolved infection",
    "False negatives in window period or immunocompromised",
    "False positives in low-prevalence settings",
    "Positive rapid must be confirmed by HCV RNA PCR"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Room temp ≤24 h; refrigerate (2–8 °C) if delayed",
  rejection: "See Appendix 7.",
  methodology: "Rapid lateral-flow immunochromatographic assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Acute HCV",
    "Chronic HCV with risks of cirrhosis and hepatocellular carcinoma",
    "Extrahepatic manifestations (e.g. cryoglobulinaemia)"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-b-surface-antigen",
  name: "Hepatitis B Surface Antigen (HBsAg)",
  synonyms: ["HepBsAg"],
  department: "serology",
  limsCode: "HBSAG",
  flags: [],

  summary: "Rapid-test-based assay for HBsAg",
  description: "Rapid-test-based assay for HBsAg, earliest marker of acute HBV and marker of chronic carriage when persistent >6 months.",

  indications: [
    "Diagnose acute or chronic HBV infection",
    "Screen blood donors and pregnant women",
    "Monitor chronic carriers and treatment"
  ],
  referenceRange: "Negative: no infection",
  analyticalLimitations: [
    "•	Window period may give false negatives",
    "Low antigen levels may be missed by less sensitive assays",
    "Haemolysed/icteric/lipaemic samples may interfere",
    "Positive rapid tests must be confirmed"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Stable ≤7 days at 2–8 °C",
  rejection: "See Appendix 7.",
  methodology: "Qualitative rapid assay and/or CLIA/ELISA, depending on platform",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Positive: acute or chronic HBV",
    "Long-term risks: cirrhosis, hepatocellular carcinoma, liver failure"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-b-surface-antibody",
  name: "Hepatitis B Surface Antibody (Anti-HBs)",
  synonyms: ["Hep B Surface Antibody,"],
  department: "serology",
  limsCode: "HBSAB",
  flags: [],

  summary: "Anti-HBs indicates immunity to HBV",
  description: "Anti-HBs indicates immunity to HBV through vaccination or past infection. Levels ≥10 mIU/mL are considered protective.",

  indications: [
    "Assess post-vaccination immunity",
    "Confirm recovery from HBV infection",
    "Part of HBV serology panel"
  ],
  referenceRange: [
    "<10 mIU/mL: non-immune",
    "≥10 mIU/mL: immune"
  ],
  analyticalLimitations: [
    "Cannot distinguish vaccine vs natural immunity unless combined with anti-HBc",
    "Window period: both HBsAg and anti-HBs may be negative",
    "False results in immunocompromised/low-prevalence settings"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "2–8 °C up to 5 days; freeze ≤–20 °C for longer",
  rejection: "See Appendix 7.",
  methodology: "Quantitative/qualitative immunoassay (CLIA/ELISA or rapid)",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Positive only: vaccine-induced immunity",
    "Anti-HBs + anti-HBc: natural immunity",
    "Negative: susceptible to HBV"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepb-viral-load",
  name: "HepB Viral load",
  synonyms: [
    "HBV DNA",
    "HBV PCR"
  ],
  department: "serology",
  limsCode: "HEPB-VL",
  flags: [],

  summary: "Quantitative measurement of HBV DNA",
  description: "Quantitative measurement of HBV DNA in blood using real-time PCR. Indicates degree of viral replication and infectivity; guides treatment and monitoring.",

  indications: [
    "Assess HBV replication activity",
    "Guide initiation and monitoring of antiviral therapy",
    "Monitor disease progression and infectivity",
    "Assess treatment response; decisions on continuation/cessation",
    "High-risk situations (antenatal, immunocompromised)"
  ],
  referenceRange: [
    "Undetectable: no active replication",
    "Detectable/quantifiable: active replication",
    "Thresholds (e.g. >2,000 IU/mL) depend on guidelines"
  ],
  analyticalLimitations: [
    "Requires specialised molecular facility",
    "False negatives with very low viral load or degraded samples",
    "Does not distinguish wild-type vs mutant strains",
    "Interpret with HBsAg, HBeAg, ALT, clinical findings"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "Plasma (EDTA preferred) or serum",
  storageTransport: "2–8 °C short term, freeze ≤–20 °C (better ≤–70 °C) for longer",
  rejection: "See appendix 7",
  methodology: "Quantitative real-time PCR (IU/mL or copies/mL)",

  turnaround: { routine: "3–7 working days", urgent: "" },
  criticalAlert: "High viral load in antenatal or immunocompromised patients",
  diseaseAssociations: [
    "High viral load: active replication, high infectivity, increased risk of cirrhosis/HCC",
    "Low/undetectable: inactive carrier or effective therapy"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-14"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hiv-1-2-antibody",
  name: "HIV 1/2 antibody",
  synonyms: ["HIV Antibody Test"],
  department: "serology",
  limsCode: "HIV",
  flags: [],

  summary: "Assay detecting antibodies to HIV-1 and HIV-2",
  description: "Laboratory assay detecting antibodies to HIV-1 and HIV-2. Main screening test for HIV infection.",

  indications: [
    "Screen blood donors, antenatal patients, and at-risk groups",
    "Diagnose HIV in symptomatic patients",
    "Surveillance and contact tracing"
  ],
  referenceRange: [
    "Non-reactive: no detectable HIV antibodies",
    "Reactive: presumptive HIV infection, confirmatory testing required"
  ],
  analyticalLimitations: [
    "Window period (approx. 3–6 weeks) may give false negatives",
    "Cannot distinguish HIV-1 vs HIV-2 without specific tests",
    "False positives (e.g. autoimmune disease, pregnancy)",
    "All reactive results must be confirmed (Antigen/Antibody combination, Western Blot, Nucleic Acid Testing)"
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "2–8 °C ≤5 days; freeze at –20 °C if longer",
  rejection: "See appendix 7",
  methodology: "ELISA, CLIA",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: ["Positive antibodies indicate HIV-1 or HIV-2 infection (chronic)"],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-15"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hiv-rapid-tests",
  name: "HIV Rapid Tests",
  synonyms: ["HIV Rapid Diagnostic Test (RDT)"],
  department: "serology",
  limsCode: "HIV-RT",
  flags: [],

  summary: "Qualitative lateral-flow assay detecting HIV-1/2 antibodies",
  description: "Qualitative lateral-flow assay detecting HIV-1/2 antibodies (and sometimes p24 antigen). Used at point of care for quick screening; positive results must be confirmed.",

  indications: [
    "Rapid screening in high-risk or outreach settings",
    "Antenatal and blood donor rapid screening",
    "Field/clinic testing in low-resource settings",
    "Part of national HIV testing algorithm"
  ],
  referenceRange: [
    "Non-reactive: no antibodies/antigen detected",
    "Reactive: presumptive positive → confirm with ELISA/CLIA/NAT"
  ],
  analyticalLimitations: [
    "Miss very early infection (window 2–6 weeks)",
    "False positives (pregnancy, autoimmune disease, cross-reactivity)",
    "Sensitivity/specificity vary by kit",
    "Not a confirmatory test"
  ],

  sampleType: "Plasma",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Finger-prick capillary whole blood",
    "SST or EDTA acceptable"
  ],
  storageTransport: "Rapid kits must be within expiry and stored as per manufacturer\nSerum/plasma: 2–8 °C ≤5 days; freeze ≤–20 °C if longer\nCapillary whole blood: test immediately",
  rejection: "See Appendices",
  methodology: "Lateral-flow immunochromatographic RDT",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Positive: HIV-1 or HIV-2 infection (requires confirmation)",
    "Negative does not exclude very recent infection"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-15"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hiv-viral-load",
  name: "HIV Viral Load (HIV RNA PCR)",
  synonyms: [
    "HIV RNA",
    "HIV PCR",
    "HIV Viral Load"
  ],
  department: "serology",
  limsCode: "HIV-VL",
  flags: [],

  summary: "Quantitative RT-PCR measuring HIV RNA",
  description: "Quantitative RT-PCR measuring HIV RNA in plasma. Primary marker of HIV replication and response to Anti-retroviral therapy.",

  indications: [
    "Confirm active infection",
    "Guide initiation of ART",
    "Monitor treatment response",
    "Assess maternal viral load",
    "Estimate infectivity"
  ],
  referenceRange: [
    "Undetectable (<assay threshold, e.g. <50 copies/mL): effective suppression",
    "Detectable: active infection"
  ],
  analyticalLimitations: [
    "False negatives with very low viral load or poor sample handling",
    "RNA degrades if not processed promptly",
    "Does not distinguish HIV-1 vs HIV-2 without specific assays",
    "Inter-laboratory variation between platforms"
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "Plasma (EDTA), ≥4 mL whole blood",
  storageTransport: "Separate plasma within 6 h\nStore plasma 2–8 °C ≤72 h\nFor longer storage: freeze ≤–70 °C; avoid freeze–thaw",
  rejection: "See Appendix 7.",
  methodology: "Quantitative real-time RT-PCR (copies/mL or IU/mL)",

  turnaround: { routine: "7–14 working days", urgent: "" },
  criticalAlert: "High viral load (>100,000 copies/mL), especially in antenatal or severely immunocompromised patients, requires urgent notification\nAll confirmed positive viral loads",
  diseaseAssociations: [
    "High viral load: active replication, high infectivity, poor ART response",
    "Undetectable: effective ART, markedly reduced transmission risk.",
    "Persistent low-level viraemia: possible treatment failure or resistance"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13", "appendix-15"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "international-normalised-ratio",
  name: "International Normalised Ratio (INR)",
  synonyms: ["Prothrombin Time Ratio"],
  department: "haematology",
  limsCode: "INR",
  flags: ["critical", "stat"],

  summary: "Primarily used to monitor warfarin therapy",
  description: "The International Normalised Ratio (INR) is a standardised calculation derived from the Prothrombin Time (PT). Primarily used to monitor warfarin therapy.",

  indications: [
    "Monitoring of warfarin therapy.",
    "Screening for coagulation defects.",
    "Assessment of liver synthetic function.",
    "Pre-operative coagulation screening."
  ],
  referenceRange: [
    "INR ≈ 0.9 – 1.2 Not on anticoagulants",
    "INR 2.0 – 3.0 Atrial fibrillation, DVT/PE prophylaxis",
    "INR 2.5 – 3.5 Mechanical prosthetic heart valves"
  ],
  analyticalLimitations: [
    "Haemolysis, lipaemia, or under-filled citrate tubes can affect accuracy.",
    "INR is only valid for patients on vitamin K antagonists (not direct oral anticoagulants).",
    "Heparin contamination can falsely prolong PT/INR.",
    "High bilirubin or paraproteins may interfere with optical clot-detection methods."
  ],

  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: "Sodium citrate filled to the black line",
  storageTransport: "Transport to the laboratory within 2–4 hours of collection.\nStore at room temperature; do not refrigerate whole blood.",
  rejection: "Under-filled citrate tube.",
  methodology: "INR calculated from Prothrombin Time.",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "INR >5.0",
  diseaseAssociations: [
    "Prolonged INR:",
    "warfarin therapy",
    "vitamin K deficiency",
    "liver failure",
    "Disseminated intravascular coagulation",
    "factor VII or common-pathway factor deficiencies",
    "some anticoagulant drugs",
    "Near-normal INR in a patient on warfarin may indicate sub-therapeutic anticoagulation or poor adherence."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: [],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "japanese-encephalitis-virus-igm-antibody",
  name: "Japanese Encephalitis Virus (JEV) IgM Antibody",
  synonyms: ["Japanese Encephalitis Serology"],
  department: "molecular",
  limsCode: "JEV-IgM",
  flags: [],

  summary: "Detection of IgM antibodies to Japanese Encephalitis Virus (JEV) in serum or CSF",
  description: "Detection of IgM antibodies to Japanese Encephalitis Virus (JEV) in serum or CSF. JEV is a mosquito-borne flavivirus endemic in Asia and is a major cause of viral encephalitis with significant morbidity and mortality.",

  indications: [
    "Diagnosis of acute JEV infection in febrile patients with neurological symptoms.",
    "Differential diagnosis of viral encephalitis.",
    "Epidemiological surveillance in endemic areas.",
    "Public health monitoring during outbreaks."
  ],
  referenceRange: [
    "Negative – No JEV IgM detected.",
    "Positive – Suggests recent/acute infection.",
    "Equivocal – Repeat testing or refer to reference laboratory."
  ],
  analyticalLimitations: [
    "•	Cross-reactivity with other flaviviruses (Dengue, West Nile, Zika) may cause false positives.",
    "IgM may remain detectable for months after infection.",
    "Negative results early in illness do not exclude infection → repeat after 3–5 days or request PCR.",
    "Confirmatory neutralisation assays (PRNT) may be required at reference laboratories."
  ],

  sampleType: "2–5 mL serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "2–5 mL serum",
    "CSF: 1–2 mL (if encephalitis suspected)."
  ],
  storageTransport: "Store/transport at 2–8 °C if tested ≤7 days.\n≤–20 °C for longer storage.",
  rejection: "See Appendix 7",
  methodology: "Enzyme-linked immunosorbent assay (ELISA) for JEV IgM.",

  turnaround: { routine: "3–7 working days", urgent: "" },
  criticalAlert: "Positive JEV IgM in CSF imust be reported immediately",
  diseaseAssociations: [
    "Positive: Acute Japanese Encephalitis.",
    "Negative: No evidence of acute infection or early collection.",
    "Possible cross-reactive result: Dengue or other flaviviruses."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "ldh-lactate-dehydrogenase",
  name: "LDH - Lactate Dehydrogenase",
  synonyms: [],
  department: "biochemistry",
  limsCode: "LDH",
  flags: [],

  summary: "LHD is found in most tissues and is released into serum with cell injury",
  description: "LDH is an intracellular enzyme found in most tissues and is released into serum with cell injury, making it a non-specific marker of tissue damage. LDH supports assessment of haemolysis, malignancy, inflammation, and organ injury.",

  indications: [
    "General marker of tissue injury or haemolysis.",
    "Support for suspected haemolytic anaemia.",
    "Assess tumour burden or monitor malignancies (lymphoma, leukaemia).",
    "Support differential diagnosis in CSF/pleural/peritoneal fluids."
  ],
  referenceRange: "~100–250 U/L",
  analyticalLimitations: [
    "Haemolysis strongly increases LDH (RBCs rich in LDH).",
    "Non-specific—interpret with other clinical and laboratory findings",
    "Delayed sample separation increases LDH.",
    "Interference: lipaemia, improper storage."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Stable 2–3 days at 2–8 °C.\nSeparate serum within 2 hrs.",
  rejection: "Haemolysis",
  methodology: "Spectrophotometric enzymatic assay.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "LDH >1,000 U/L may indicate tumour lysis syndrome, massive haemolysis, or severe tissue necrosis → urgent review required.",
  diseaseAssociations: [
    "Elevated LDH:",
    "haemolysis",
    "liver disease",
    "lymphoma/leukaemia",
    "muscle injury",
    "infection/sepsis",
    "tissue necrosis",
    "Low LDH: rare; limited clinical significance."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "magnesium",
  name: "Magnesium",
  synonyms: [],
  department: "biochemistry",
  limsCode: "MG",
  flags: ["critical"],

  summary: "Magnesium test measuring an essential intracellular cation.",
  description: "An essential intracellular cation involved in neuromuscular function, enzyme activity, and bone metabolism.",

  indications: [
    "Diagnose and monitor hypo- or hypermagnesaemia.",
    "Investigate unexplained hypocalcaemia or hypokalaemia.",
    "Monitor renal disease, critical illness, diuretic therapy, digitalis toxicity.",
    "Assess malnutrition, alcoholism, malabsorption."
  ],
  referenceRange: "0.7 – 1.0 mmol/L.",
  analyticalLimitations: [
    "Haemolysis may result in falsely high magnesium.",
    "Prolonged tourniquet use may increase levels.",
    "Serum magnesium does not reflect total body stores.",
    "Lipaemia and icterus may interfere."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Stable 7 days at 2–8 °C\nSeparate from cells",
  rejection: "See Appendix 7",
  methodology: "Colorimetric dye-binding",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "<0.4 mmol/L or >2.0 mmol/L = critical.",
  diseaseAssociations: [
    "Low Mg: malnutrition, malabsorption, renal wasting, diarrhoea, diuretics, alcoholism.",
    "High Mg: renal failure, excessive intake, IV supplementation."
  ],
  conversionFactors: "1 mg/dL = 0.411 mmol/L.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "malaria-examination-microscopy",
  name: "Malaria Examination / Microscopy (Thick and Thin Film)",
  synonyms: [
    "Malaria Smear",
    "Thick/Thin Film",
    "Blood Parasite Microscopy"
  ],
  department: "haematology",
  limsCode: "MALTK, MALTN",
  flags: ["critical"],

  summary: "Manual test for detection, identification, and quantification of Plasmodium species.",
  description: "Microscopic examination of thick and thin blood films for detection, identification, and quantification of Plasmodium species. Thick film increases sensitivity; thin film allows species identification and parasite staging.",

  indications: [
    "Suspected malaria (fever, chills, recent travel/exposure).",
    "Monitoring parasite density during treatment.",
    "Assessment of severe malaria (parasitaemia >2%).",
    "Follow-up of known positive cases."
  ],
  referenceRange: [
    "Normal: No parasites seen.",
    "Positive results reported with:",
    "Species (if identifiable)",
    "Parasite density (% parasitaemia or parasites/µL)",
    "Stage (rings, trophozoites, schizonts, gametocytes)"
  ],
  analyticalLimitations: [
    "Low parasitaemia may be missed without adequate smear quality.",
    "Thick films with artefact/debris may obscure parasites.",
    "Recent antimalarial treatment reduces detection.",
    "Poor staining or delayed smear preparation reduces sensitivity."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA 1–2 mL",
    "Collect before antimalarial treatment."
  ],
  storageTransport: "Process immediately at room temperature.\nDo not refrigerate blood for malaria microscopy.\nTransport promptly to laboratory.",
  rejection: "See appendix 7",
  methodology: "Giemsa-stained thick and thin films\nMicroscopy at 1000× (oil immersion)\nParasite density quantified by WBC-based or RBC-based counting\nSpecies determination on thin film",

  turnaround: { routine: "same day", urgent: "<2 hours" },
  criticalAlert: "Any positive result = urgent notification\nHigh parasitaemia (>2%)\nDetection of Plasmodium falciparum",
  diseaseAssociations: [
    "P. falciparum: severe malaria, cerebral malaria, high mortality",
    "P. vivax: relapsing malaria (hypnozoites)",
    "P. malariae: chronic low-level infection (long latency)",
    "P. ovale: relapse possible (hypnozoites)"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "malaria-rapid-diagnostics-test-rdt",
  name: "Malaria Rapid Diagnostics Test – RDT",
  synonyms: ["Malaria Antigen Rapid Test"],
  department: "parasitology",
  limsCode: "MAL-RAP",
  flags: ["critical"],

  summary: "Immunochromatographic test detecting malaria parasite antigens",
  description: "Immunochromatographic test detecting malaria parasite antigens (HRP-2 and pan-Plasmodium antigens). Provides rapid results (15–30 min) for early diagnosis.",

  indications: [
    "Diagnose malaria in febrile patients.",
    "Field/emergency screening when microscopy unavailable.",
    "Guide initial treatment pending blood film confirmation."
  ],
  referenceRange: [
    "Negative: No antigens detected.",
    "Positive: Malaria antigens detected → confirm with microscopy. See Malaria Examination / Microscopy (Thick and Thin Film)"
  ],
  analyticalLimitations: [
    "Low sensitivity at low parasitaemia (<100 parasites/µL).",
    "False negatives: HRP-2 gene deletions.",
    "False positives: rheumatoid factor, other infections.",
    "Cannot quantify parasites."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "Capillary blood OR EDTA whole blood.",
  storageTransport: "Test immediately.\nDo not refrigerate whole blood for RDTs.",
  rejection: "Expired or damaged kits.",
  methodology: "Lateral flow immunochromatographic RDT.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "P. falciparum-positive = requires notification.",
  diseaseAssociations: ["Positive: malaria (species confirmed by microscopy)."],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "mean-corpuscular-haemoglobin",
  name: "Mean Corpuscular Haemoglobin (MCH)",
  synonyms: [],
  department: "parasitology",
  limsCode: "MCH",
  flags: ["critical"],

  summary: "Average Haemoglobin Content",
  description: "Calculated red cell index reflecting the average Hb content per red blood cell.",

  indications: [
    "Classify anaemia (microcytic/macrocytic).",
    "Assess hypochromia.",
    "Support thalassaemia and iron deficiency diagnosis."
  ],
  referenceRange: [
    "27 – 33 pg",
    "Age and sex dependant."
  ],
  analyticalLimitations: [
    "Derived value—depends on Hb and RBC accuracy.",
    "Abnormal morphology affects calculations.",
    "Must be interpreted with MCV, MCHC, RDW."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "EDTA 2 – 5 mL",
  storageTransport: "Room Temperature ≤24 hrs; 2–8 °C ≤48 hrs.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Calculated index.",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "",
  diseaseAssociations: [
    "Low HCT: IDA, thalassaemia.",
    "High HCT: B12/folate deficiency, reticulocytosis."
  ],
  conversionFactors: "",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "mean-corpuscular-haemoglobin-concentration",
  name: "Mean Corpuscular Haemoglobin Concentration (MCHC)",
  synonyms: [],
  department: "haematology",
  limsCode: "MCHC",
  flags: [],

  summary: "Average Haemoglobin Concentration",
  description: "Represents the average concentration of Hb within RBCs.",

  indications: [
    "Classify anaemia.",
    "Detect hypochromia.",
    "Support hereditary spherocytosis diagnosis."
  ],
  referenceRange: "320 – 360 g/L.",
  analyticalLimitations: [
    "Affected by lipaemia, haemolysis, cold agglutinins.",
    "Depends on accurate Hb and Hct."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "EDTA 2 – 5 mL",
  storageTransport: "See FBC",
  rejection: "",
  methodology: "Calculated index.",

  turnaround: { routine: "", urgent: "" },
  criticalAlert: "",
  diseaseAssociations: [
    "Low MCHC: IDA, thalassaemia.",
    "High MCHC: spherocytosis, haemolysis, artefacts."
  ],
  conversionFactors: "Not Applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},
{
  id: "mean-corpuscular-volume",
  name: "Mean Corpuscular Volume (MCV)",
  synonyms: ["Average Red Cell Volume"],
  department: "haematology",
  limsCode: "MCV",
  flags: [],

  summary: "Measures average RBC volume.",
  description: "Measures average RBC volume.",

  indications: [
    "Classify anaemia.",
    "Monitor treatment response.",
    "Support diagnosis of thalassaemia and marrow disorders."
  ],
  referenceRange: "80 – 100 fL.",
  analyticalLimitations: [
    "Affected by cold agglutinins, hyperglycaemia, leucocytosis.",
    "Must correlate with RBC morphology."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2 – 5 mL EDTA",
  storageTransport: "See Appendix 9a. Storage and Transport — Quick Reference",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Calculated index.",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Interpretation incorporated into FBC and anaemia classification.",
  diseaseAssociations: [
    "Low MCV (microcytic): Iron deficiency anaemia, thalassaemia, chronic disease anaemia.",
    "High MCV (macrocytic): Vitamin B12 or folate deficiency, alcoholism, liver disease, hypothyroidism, bone marrow disorders.",
    "Normal MCV: Normocytic anaemia (haemolysis, acute blood loss, chronic disease)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-28",
  updated: ""
},
{
  id: "measles-rna",
  name: "Measles RNA",
  synonyms: ["Measles PCR"],
  department: "molecular",
  limsCode: "MEA-RNA",
  flags: [],

  summary: "RT-PCR detection of measles RNA",
  description: "RT-PCR detection of measles RNA for early confirmation of acute infection.",

  indications: [
    "Early-phase diagnosis.",
    "Public health outbreak surveillance.",
    "Differentiation from other febrile rash illnesses."
  ],
  referenceRange: "Negative / Positive",
  analyticalLimitations: [
    "RNA decreases after ~7 days of rash.",
    "Delayed transport reduces sensitivity."
  ],

  sampleType: "Swab",
  containerColour: "Swab",
  sampleRequirements: "Throat/nasopharyngeal swab (preferred), urine, or EDTA blood.",
  storageTransport: "Keep swabs/urine refrigerated (2–8 °C) and transport within 48 hrs.\nFreeze at ≤–70 °C for longer storage.",
  rejection: "Leaking/contaminated containers.\nSee appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Real-time RT-PCR targeting measles RNA.",

  turnaround: { routine: "3–7 working days", urgent: "" },
  criticalAlert: "All positive measles RNA results are notifiable to public health authorities",
  diseaseAssociations: [
    "Positive: Acute measles infection (confirm clinically and with epidemiology).",
    "Negative: No measles detected, or testing performed too late after symptom onset."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "measles-serology",
  name: "Measles Serology (IgM/IgG)",
  synonyms: ["Measles Antibody"],
  department: "serology",
  limsCode: "MEA-AB",
  flags: [],

  summary: "Testing for measles antibodies",
  description: "Testing for measles antibodies to diagnose acute or past infection, confirm immunity, and assist in outbreak investigations.",

  indications: [
    "•	Confirm diagnosis of acute measles infection.",
    "Determine immune status (pre- or post-vaccination, occupational screening).",
    "Public health surveillance and outbreak control.",
    "Support diagnosis where molecular testing is not available."
  ],
  referenceRange: [
    "IgM: Negative = no evidence of acute infection. Positive = recent or current infection.",
    "IgG: Positive = immunity due to past infection or vaccination."
  ],
  analyticalLimitations: [
    "IgM may be falsely negative in early prodrome (test ≥3 days after rash onset recommended).",
    "False positives can occur with rubella, parvovirus, or rheumatoid factor.",
    "IgG serology cannot distinguish between past infection and vaccination.",
    "Interpretation must consider vaccination history and clinical features."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Stable at 2–8 °C for up to 7 days.\nFreeze at –20 °C for longer storage.",
  rejection: "See appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Enzyme-linked immunosorbent assay (ELISA) or chemiluminescent immunoassay (CLIA).",

  turnaround: { routine: "3–5 working days", urgent: "" },
  criticalAlert: "Positive IgM in suspected measles case is notifiable to public health",
  diseaseAssociations: [
    "IgM positive: Recent or current measles infection.",
    "IgG positive: Past infection or vaccination (immunity).",
    "IgG negative: Non-immune, susceptible to measles."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
  },
  {
    id: "mosquito-borne-panel",
    name: "Mosquito Borne Panel",
    synonyms: ["Arbovirus Panel PCR"],
    department: "molecular",
    limsCode: "MOSQUITO",
    flags: [],

    summary: "Mosquito-Borne Disease Panel PCR",
    description: "The Mosquito-Borne Disease Panel is a molecular multiplex PCR assay for detection of nucleic acids from mosquito-transmitted viruses. The panel covers:\nDengue virus (DENV)\nRoss River virus (RRV)\nChikungunya virus (CHIKV)\nBarmah Forest virus (BFV)\nWest Nile virus (WNV)\nZika virus (ZIKV)\nMurray Valley Encephalitis virus (MVEV)\nJapanese Encephalitis virus (JEV)\nKunjin virus (KUNV)\nMalaria",

    indications: [
      "Rapid diagnosis in febrile patients and outbreak investigations.",
      "Diagnosis of acute febrile illness with suspected arboviral cause.",
      "Differentiation of overlapping syndromes (e.g., Dengue vs. Chikungunya vs. Zika).",
      "Outbreak investigation and public health surveillance.",
      "Screening in returning travellers from endemic regions."
    ],
    referenceRange: [
      "Negative: No arbovirus RNA detected.",
      "Positive: Arbovirus RNA detected, indicates acute infection."
    ],
    analyticalLimitations: [
      "Sensitivity decreases outside viraemic window (PCR best in first 7 days of illness).",
      "Cross-reactivity between flaviviruses (DENV, JEV, ZIKV, MVEV, WNV, KUNV).",
      "Limited to pathogens included in the panel.",
      "Negative result does not exclude infection if sample collected too late or at low viraemia.",
      "Does not provide antibody information (IgM/IgG)."
    ],

    sampleType: "Serum",
    containerColour: "Gold/Yellow SST II",
    sampleRequirements: "2 – 5 mL serum",
    storageTransport: "Serum stable for 2 – 3 days at 2 – 8 °C.\nFreeze at –20 °C or below if delayed.\nTransport refrigerated or frozen.",
    rejection: "See Appendix 7. Sample Rejection Criteria (All Department)",
    methodology: "Real-time RT-PCR multiplex assay (e.g., Cepheid GeneXpert, equivalent molecular platform).",

    turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
    criticalAlert: "",
    diseaseAssociations: [
      "Dengue: Febrile illness, myalgia, thrombocytopenia, haemorrhagic complications.",
      "Ross River & Barmah Forest: Polyarthritis, fever, rash.",
      "Chikungunya: High fever, severe arthralgia.",
      "Zika: Mild febrile illness, rash, congenital malformations, neurological syndromes.",
      "West Nile, MVE, JEV, Kunjin: Encephalitis, neurological disease."
    ],
    conversionFactors: "Not applicable.",
    organismsReported: null,

    appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
    lastReviewed: "",
    added: "2026-09-28",
    updated: ""
  },

  {
    id: "oestradiol",
    name: "Oestradiol (E2)",
    synonyms: [
      "17β-Estradiol",
      "Estradiol"
    ],
    department: "biochemistry",
    limsCode: "E2",
    flags: [],

    summary: "Oestradiol is the main circulating form of oestrogen",
    description: "Oestradiol is the main circulating form of oestrogen in premenopausal women, produced by the ovaries. It regulates the menstrual cycle, fertility, and bone and metabolic health. Measurement assists in assessing ovarian function, puberty disorders, and hormone therapy monitoring.",

    indications: [
      "Assess ovarian function and ovulation induction.",
      "Investigate menstrual irregularities or amenorrhoea.",
      "Monitor ART cycles.",
      "Evaluate hypogonadism or pubertal disorders.",
      "Assess feminising/virilising syndromes.",
      "Monitor hormone therapy or aromatase inhibitor treatment."
    ],
    referenceRange: [
      "Values vary by age, sex, and menstrual cycle phase.",
      "See Appendix 12. General Guide to Reference Ranges"
    ],
    analyticalLimitations: [
      "Immunoassays may cross-react with other steroids.",
      "Very low levels in men/postmenopausal women approach assay limits.",
      "Biotin supplements may interfere.",
      "Interpret with cycle phase or menopausal status."
    ],

    sampleType: "Serum",
    containerColour: "Gold/Yellow SST II",
    sampleRequirements: "2–5 mL serum",
    storageTransport: "Stable 2–3 days at 2–8 °C, Freeze –20 °C for extended storage.",
    rejection: "See Appendix 7. Sample Rejection Criteria (All Department)",
    methodology: "Immunoassay (CLIA/ELISA)",

    turnaround: { routine: "3 - 5 days", urgent: "" },
    criticalAlert: "very high results in children or suspected oestrogen-secreting tumours require urgent review.",
    diseaseAssociations: [
      "High: ovarian hyperstimulation, estrogen-secreting tumours, feminisation, pregnancy.",
      "Low: ovarian failure, menopause, hypogonadism, Turner syndrome."
    ],
    conversionFactors: "1 pg/mL = 3.671 pmol/L",
    organismsReported: null,

    appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
    lastReviewed: "",
    added: "2026-09-28",
    updated: ""
  },

  {
    id: "ova-cysts-and-parasites-stool-microscopy",
    name: "Ova, Cysts, and Parasites (OCP) – Stool Microscopy",
    synonyms: ["O&P Exam"],
    department: "parasitology",
    limsCode: "",
    flags: [],

    summary: "Microscopic examination of stool",
    description: "Microscopic examination of stool to detect protozoa, helminth eggs, and larvae. Gold-standard test for diagnosing intestinal parasitic infections.",

    indications: [
      "Diagnose intestinal parasitic infections (Giardia, Entamoeba, hookworm, Ascaris, Trichuris).",
      "Investigate chronic diarrhoea, abdominal pain, malnutrition.",
      "Screening in outbreaks or epidemiological surveys.",
      "Evaluate immunocompromised patients with GI symptoms."
    ],
    referenceRange: "No ova or parasites detected.",
    analyticalLimitations: [
      "Sensitivity depends on parasite burden and stool consistency.",
      "Some parasites require concentration techniques or special stains.",
      "Requires skilled microscopy; observer variation occurs.",
      "Some parasites detectable only by antigen or molecular tests."
    ],

    sampleType: "Stool",
    containerColour: "Sterile collection jar",
    sampleRequirements: [
      "Fresh stool.",
      "Collect ≥3 specimens on separate days improve yield."
    ],
    storageTransport: "Fresh stool: process within 2 hrs.\nPreserved samples: stable several days at room temperature.\nDo not refrigerate if motile protozoa required.",
    rejection: "Unpreserved stool >24 hrs old\nLeaking or contaminated containers.\nSee Appendix 7. Sample Rejection Criteria (All Dep",
    methodology: "Direct wet mount (saline/iodine).\nConcentration methods (formalin–ethyl acetate, zinc sulphate).\nPermanent stains (trichrome, modified ZN).",

    turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
    criticalAlert: "Detection of pathogenic parasites (e.g., Giardia, E. histolytica, Cryptosporidium) to be urgently reported.",
    diseaseAssociations: [
      "hookworms, Trichuris and other roundworms (nematodes):",
      "- Enterobius vermicularis",
      "- Ascaris lumbricoides",
      "- Fasciola hepatica",
      "flat flukes (trematodes):",
      "- Fasciola hepatica",
      "- Clonorchis Sinensis",
      "tape worms:",
      "- Taenia saginata",
      "- Taenia solium",
      "Larvae of hookworm or strongyloides can also be present.",
      "Oocysts of Cryptosporidium spp",
      "Cysts or trophozoites of Giardia duodenalis",
      "cysts of Entamoeba histolytica and Entamoeba histolytica trophozoites"
    ],
    conversionFactors: "Not applicable.",
    organismsReported: null,

    appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
    lastReviewed: "",
    added: "2026-09-28",
    updated: ""
  },

  {
    id: "phosphorus",
    name: "Phosphorus",
    synonyms: ["Inorganic Phosphate"],
    department: "biochemistry",
    limsCode: "PHOS",
    flags: ["critical"],

    summary: "Measures inorganic phosphate, essential for bone metabolism",
    description: "Measures inorganic phosphate, essential for bone metabolism, ATP energy storage, and cellular signalling. Used to assess renal function, calcium–phosphate balance, and metabolic bone disease.",

    indications: [
      "Assess renal disease and monitoring in dialysis.",
      "Evaluate metabolic bone disorders (rickets, osteomalacia, hyperparathyroidism).",
      "Investigate hypocalcaemia.",
      "Monitor DKA and critical illness.",
      "Detect tumour lysis syndrome."
    ],
    referenceRange: "0.8 – 1.5 mmol/L.",
    analyticalLimitations: [
      "Haemolysis falsely elevates phosphate.",
      "Delayed separation can result in falsely high levels.",
      "Lipaemia and bilirubin may interfere."
    ],

    sampleType: "Serum",
    containerColour: "Gold/Yellow SST II",
    sampleRequirements: "2 – 5 mL serum or plasma.",
    storageTransport: "Centrifuge within 2 hrs, stable 3 days at 2 – 8 °C.",
    rejection: "See Appendix 7. Sample Rejection Criteria (All Dep",
    methodology: "Colorimetric (molybdate UV)",

    turnaround: { routine: "Same day", urgent: "<2 hours" },
    criticalAlert: "<0.4 mmol/L or >2.5 mmol/L = critical.",
    diseaseAssociations: [
      "Low Phos: malnutrition, vitamin D deficiency, hyperparathyroidism, renal wasting, refeeding syndrome.",
      "High Phos: CKD, tumour lysis syndrome, hypoparathyroidism, acidosis."
    ],
    conversionFactors: "1 mg/dL = 0.323 mmol/L.",
    organismsReported: null,

    appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
    lastReviewed: "",
    added: "2026-09-28",
    updated: ""
  },

  {
    id: "platelet-count",
    name: "Platelet Count",
    synonyms: ["Thrombocyte Count"],
    department: "haematology",
    limsCode: "PLAT",
    flags: ["critical", "stat"],

    summary: "Measures number of circulating platelets",
    description: "Measures number of circulating platelets. Part of the Full Blood Count. Essential for diagnosing bleeding disorders, monitoring chemotherapy, and assessing marrow function.",

    indications: [
      "Diagnose thrombocytopenia or thrombocytosis.",
      "Assess bleeding and clotting disorders.",
      "Pre-operative evaluation."
    ],
    referenceRange: "150 – 400 × 10⁹/L.",
    analyticalLimitations: [
      "EDTA-induced clumping → falsely low counts.",
      "Giant platelets may be misclassified.",
      "Red cell fragments may increase counts falsely.",
      "Abnormal results require blood film review."
    ],

    sampleType: "EDTA whole blood",
    containerColour: "Lavender EDTA",
    sampleRequirements: "2 – 3 mL EDTA",
    storageTransport: "Stable 24 hrs at room temperature. Refrigeration may cause clumping.",
    rejection: "See Appendix 7. Sample Rejection Criteria (All Dep",
    methodology: "Automated analyser (impedance/optical).",

    turnaround: { routine: "Same day", urgent: "<2 hours" },
    criticalAlert: "<20 × 10⁹/L (risk of spontaneous bleeding).\n>1,000 × 10⁹/L (risk of thrombosis).",
    diseaseAssociations: [
      "Low PLT: marrow failure, sepsis, viral infections (Dengue), ITP, drugs, hypersplenism.",
      "High PLT: iron deficiency, post-splenectomy, inflammation, myeloproliferative disease."
    ],
    conversionFactors: "Not applicable.",
    organismsReported: null,

    appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
    lastReviewed: "",
    added: "2026-09-28",
    updated: ""
  },
  {
    id: "potassium",
    name: "Potassium (K+)",
    synonyms: ["Serum or Plasma potassium"],
    department: "biochemistry",
    limsCode: "K",
    flags: ["critical", "stat"],

    summary: "Measures potassium, a major intracellular cation and critical for acute care.",
    description: "Major intracellular cation vital for cardiac conduction, neuromuscular activity, and metabolic processes. Critical test in acute care.",

    indications: [
      "Diagnose and monitor hypo/hyperkalaemia.",
      "Monitor renal or cardiac patients, diuretic therapy.",
      "Assess acid–base disorders.",
      "Manage DKA.",
      "Essential in IV therapy monitoring."
    ],
    referenceRange: "3.5 – 5.0 mmol/L.",
    analyticalLimitations: [
      "Haemolysis → falsely high potassium.",
      "Delayed separation or fist clenching increases results.",
      "Serum slightly higher than plasma due to platelet potassium release.",
      "Pseudohyperkalaemia in leukocytosis or thrombocytosis."
    ],

    sampleType: "Serum",
    containerColour: "Gold/Yellow SST II",
    sampleRequirements: "2 – 5 mL serum",
    storageTransport: "Centrifuge within 2 hrs.\nStable 1–2 days at 2–8 °C after separation.",
    rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
    methodology: "Ion-selective electrode (ISE)",

    turnaround: { routine: "Same day", urgent: "<2 hours" },
    criticalAlert: "<2.5 mmol/L = critical hypokalaemia.\n>6.5 mmol/L = critical hyperkalaemia.",
    diseaseAssociations: [
      "Low K+: Gastro-Intestinal (GI) loss, diuretics, alkalosis, insulin therapy.",
      "High K+: renal failure, acidosis, tissue breakdown, ACE inhibitors, spironolactone."
    ],
    conversionFactors: "Not applicable.",
    organismsReported: null,

    appendixRefs: ["appendix-1", "appendix-2", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
    lastReviewed: "",
    added: "2026-09-28",
    updated: ""
  },

  {
    id: "pregnancy-test",
    name: "Pregnancy Test",
    synonyms: [
      "Pregnancy Test - rapid test",
      "HCG"
    ],
    department: "biochemistry",
    limsCode: "HCG",
    flags: ["critical", "stat"],

  summary: "for early pregnancy diagnosis",
  description: "Detects human chorionic gonadotropin (hCG) for early pregnancy diagnosis. Detected in urine or serum.",

  indications: [
    "Confirm pregnancy.",
    "Investigate amenorrhoea.",
    "Support diagnosis of ectopic/molar pregnancy.",
    "Monitor trophoblastic or germ cell tumours."
  ],
  referenceRange: [
    "Negative: hCG not detected.",
    "Positive: hCG detected."
  ],
  analyticalLimitations: [
    "False negatives very early in pregnancy.",
    "False positives in trophoblastic disease, tumours, heterophile antibodies.",
    "Urine tests less sensitive.",
    "Rare hook effect at extremely high hCG."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "2–5 mL serum",
    "Urine (early-morning sample best)."
  ],
  storageTransport: "Stable 1–2 days at 2–8 °C after separation.",
  rejection: "See appendix 7",
  methodology: "Rapid test (immunochromatographic).",

  turnaround: { routine: "1 hour", urgent: "" },
  criticalAlert: "hCG in non-pregnant women/men → possible tumour.\nUrgent notification in suspected ectopic pregnancy.",
  diseaseAssociations: [
    "Positive: pregnancy, ectopic/molar pregnancy, trophoblastic tumours.",
    "Negative: no pregnancy or very early pregnancy."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-28",
  updated: ""
},

{
  id: "progesterone",
  name: "Progesterone",
  synonyms: [],
  department: "biochemistry",
  limsCode: "PROG",
  flags: [],

  summary: "Test measures the level of progesterone in the blood",
  description: "Steroid hormone produced by the corpus luteum and placenta. Essential for implantation, pregnancy maintenance, and menstrual cycle regulation.",

  indications: [
    "Confirm ovulation.",
    "Assess luteal phase function.",
    "Evaluate amenorrhoea/infertility.",
    "Monitor high-risk pregnancy.",
    "Assess ovarian/adrenal tumours.",
    "Monitor Assisted Reproductive Technology cycles."
  ],
  referenceRange: "Varies by cycle phase, menopause, and pregnancy.",
  analyticalLimitations: [
    "Diurnal variation.",
    "Must be interpreted with menstrual cycle day.",
    "Cross-reactivity with other steroids in immunoassays.",
    "Very low levels near assay limits in men/postmenopause."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum",
  storageTransport: "Separate within 2 hrs.\nStable 1–2 days at 2–8 °C after separation.",
  rejection: "",
  methodology: "Immunoassay",

  turnaround: { routine: "1 - 3 days", urgent: "" },
  criticalAlert: "use clinical context (e.g., threatened miscarriage).",
  diseaseAssociations: [
    "Low: anovulation, luteal failure, non-viable pregnancy, menopause.",
    "High: pregnancy, ovarian/adrenal tumours, congenital adrenal hyperplasia (CAH)."
  ],
  conversionFactors: "1 ng/mL = 3.18 nmol/L.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "prostate-specific-antigen",
  name: "Prostate-Specific Antigen (PSA)",
  synonyms: ["Total PSA"],
  department: "biochemistry",
  limsCode: "PSA",
  flags: ["critical"],

  summary: "Prostate-derived glycoprotein used as a tumour marker",
  description: "Prostate-derived glycoprotein used as a tumour marker for prostate cancer diagnosis, screening, monitoring, and recurrence detection.",

  indications: [
    "Screening (as clinically appropriate).",
    "Diagnosis/monitoring of prostate cancer.",
    "Detect recurrence post-treatment.",
    "Assess BPH or prostatitis."
  ],
  referenceRange: "See Appendix 12. General Guide to Reference Ranges",
  analyticalLimitations: [
    "Not cancer-specific; raised in Benign Prostatic Hyperplasia (BPH), infection, instrumentation.",
    "PSA and free/total ratio improve discrimination."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Separate within 2 hrs.\nStable 1 – 2 days at 2 – 8 °C after separation.",
  rejection: "",
  methodology: "Immunoassay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Urgent discussion recommended if PSA is significantly elevated for age group or rapidly rising in known prostate cancer.",
  diseaseAssociations: [
    "Elevated: Prostate cancer, benign prostatic hyperplasia, prostatitis, urinary tract infection, after prostate manipulation.",
    "Decreased: Effective therapy or prostatectomy."
  ],
  conversionFactors: "1 ng/mL = 1 µg/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "prothrombin-time",
  name: "Prothrombin Time",
  synonyms: ["INR"],
  department: "haematology",
  limsCode: "PT",
  flags: ["critical", "stat"],

  summary: "Measures extrinsic and common coagulation pathways",
  description: "Measures extrinsic and common coagulation pathways using thromboplastin. Reported as PT seconds and INR.",

  indications: [
    "Monitor warfarin/vitamin K antagonist therapy.",
    "Diagnose bleeding disorders.",
    "Assess liver synthetic function.",
    "Pre-operative coagulation testing."
  ],
  referenceRange: "PT: 11–14 sec",
  analyticalLimitations: [
    "PT varies by reagent/analyser → INR corrects.",
    "Underfilled citrate tubes invalidate results."
  ],

  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: "Citrate 2 – 5 mL",
  storageTransport: "Avoid delay.",
  rejection: "Underfilled citrate sample",
  methodology: "Optical/mechanical clot detection.",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "PT >40 sec",
  diseaseAssociations: [
    "Prolonged PT: vitamin K deficiency, liver disease, warfarin, DIC, factor VII deficiency.",
    "Short PT: possible pre-analytical error."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "red-blood-cell-count",
  name: "Red Blood Cell (RBC) Count",
  synonyms: ["Erythrocyte Count"],
  department: "haematology",
  limsCode: "RBC",
  flags: ["critical"],

  summary: "Measures the number of erythrocytes per unit volume of blood",
  description: "Measures the number of erythrocytes per unit volume of blood. Core FBC parameter used to assess oxygen-carrying capacity and detect anaemia or polycythaemia.",

  indications: [
    "Diagnose and classify anaemia.",
    "Monitor polycythaemia/erythrocytosis.",
    "Monitor therapy (iron, transfusion).",
    "Evaluate bone marrow function (production)."
  ],
  referenceRange: [
    "See Appendix 12. General Guide to Reference Ranges",
    "Adult males: ~4.5–6.0 × 10¹²/L.",
    "Adult females: ~3.8–5.2 × 10¹²/L."
  ],
  analyticalLimitations: [
    "Cold agglutinins leads to RBC clumping, falsely low count.",
    "Dehydration/overhydration alters concentration.",
    "High WBC or platelet clumps may interfere."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–3 mL EDTA",
  storageTransport: "Stable 24 hrs at room temperature.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Dep",
  methodology: "Automated haematology analyser (impedance/optical).",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "RBC <2.0 × 10¹²/L = severe anaemia → urgent review.",
  diseaseAssociations: [
    "Low: iron deficiency, haemolysis, marrow failure, chronic disease.",
    "High: polycythaemia vera, chronic hypoxia, dehydration, high altitude."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "red-cell-distribution-width",
  name: "Red Cell Distribution Width (RDW)",
  synonyms: [],
  department: "haematology",
  limsCode: "RDW",
  flags: [],

  summary: "Index of variation in RBC size",
  description: "Index of variation in RBC size (anisocytosis), reported as part of FBC. Used with MCV, MCH, and MCHC to classify anaemias.",

  indications: [
    "Differentiate anaemias (iron deficiency vs thalassaemia trait).",
    "Monitor response to iron/B12/folate therapy.",
    "Evaluate unexplained anaemia and mixed deficiencies."
  ],
  referenceRange: [
    "11.5–14.5 %",
    "See Appendix 12. General Guide to Reference Ranges"
  ],
  analyticalLimitations: [
    "Haemolysis, cold agglutinins, or clumps can distort indices.",
    "Must be interpreted with MCV, Hb, and blood film."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–3 mL EDTA",
  storageTransport: "Stable 24 hrs at room temperature.",
  rejection: "See Appendix 7",
  methodology: "Automated haematology analyser.",

  turnaround: { routine: "Same day", urgent: "<2 hour" },
  criticalAlert: "RDW >20% should prompt urgent film review.",
  diseaseAssociations: [
    "Increased: iron deficiency, mixed deficiencies, recent transfusion, myelodysplasia.",
    "Normal RDW + microcytosis: thalassaemia trait.",
    "Normal RDW + macrocytosis: liver disease, aplastic anaemia."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "respiratory-panel",
  name: "Respiratory Panel (Influenza / RSV / COVID-19 PCR)",
  synonyms: [
    "Respiratory Virus PCR Panel",
    "Flu/RSV/COVID Panel"
  ],
  department: "molecular",
  limsCode: "",
  flags: [],

  summary: "Multiplex real-time RT-PCR panel for Respiratory Virus",
  description: "Multiplex real-time RT-PCR on Cepheid GeneXpert (or equivalent) detecting and differentiating influenza A, influenza B, RSV, and SARS-CoV-2 RNA from respiratory specimens.",

  indications: [
    "Diagnose acute respiratory infection in symptomatic patients.",
    "Guide antiviral/antibiotic use and isolation measures.",
    "Support outbreak investigations in wards or communities."
  ],
  referenceRange: [
    "Negative: No viral RNA detected.",
    "Positive: Viral RNA detected (organism reported)."
  ],
  analyticalLimitations: [
    "False negatives: low viral load, poor sampling, early/late collection.",
    "Mutations in target regions may affect primer/probe binding.",
    "Does not distinguish viable vs non-viable virus.",
    "Co-infection with other pathogens not excluded."
  ],

  sampleType: "Swab",
  containerColour: "Swab",
  sampleRequirements: [
    "Nasopharyngeal swab (preferred).",
    "Oropharyngeal swab or lower respiratory samples (sputum, tracheal aspirate) in Viral Transport Media (VTM)/Universal Transport Media (UTM)."
  ],
  storageTransport: "Transport to lab within 4 hrs at room temperature (or 2–8 °C)",
  rejection: "Wrong swab type\nDry swab\nSee Appendix 7. Sample Rejection Criteria (All Dep",
  methodology: "Multiplex real-time RT-PCR cartridge-based assay (GeneXpert).",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "Positive results in high-risk patients (ICU, antenatal, immunocompromised) require prompt notification and infection-control action.",
  diseaseAssociations: [
    "Influenza A/B: seasonal influenza, pneumonia, myocarditis.",
    "RSV: bronchiolitis and pneumonia in infants, elderly, immunocompromised.",
    "SARS-CoV-2: COVID-19 (spectrum from mild illness to ARDS, multi-organ failure)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "reticulocyte-count",
  name: "Reticulocyte Count",
  synonyms: [],
  department: "haematology",
  limsCode: "RETIC",
  flags: ["critical"],

  summary: "Measures proportion of immature red blood cells",
  description: "Measures proportion or absolute number of immature RBCs (reticulocytes) in blood, reflecting bone marrow erythropoietic activity.",

  indications: [
    "Distinguish regenerative vs hypoproliferative anaemia.",
    "Monitor marrow recovery after chemotherapy, transplant, or therapy for iron/B12/folate deficiency.",
    "Assess haemolysis and acute blood loss."
  ],
  referenceRange: "Reticulocyte %: ~0.5–2.5 %.",
  analyticalLimitations: [
    "Corrected reticulocyte count and RPI needed in anaemia.",
    "Automated methods more accurate than manual.",
    "High WBC/platelet counts may cause false increases."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2 – 3 mL EDTA",
  storageTransport: "Stable <24 hrs at room temperature",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Department)",
  methodology: "Manual supravital staining (new methylene blue).\nAutomated flow cytometry (fluorescent RNA dyes).",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Very high (>10%) may indicate severe haemolysis/acute blood loss.\nVery low (<0.1%) may indicate marrow failure or severe suppression.",
  diseaseAssociations: [
    "Increased: haemolysis, acute blood loss, marrow recovery.",
    "Decreased: aplastic anaemia, marrow suppression, untreated iron/B12/folate deficiency."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "rotavirus-antigen-test",
  name: "Rotavirus Antigen Test",
  synonyms: ["Rotavirus Stool Antigen"],
  department: "microbiology",
  limsCode: "ROTA",
  flags: ["critical", "stat"],

  summary: "Detects rotavirus antigen in stool",
  description: "Detects rotavirus antigen in stool via rapid immunochromatography or ELISA to diagnose viral gastroenteritis in children.",

  indications: [
    "Diagnose acute viral diarrhoea in infants/children.",
    "Support ward or childcare outbreak investigations.",
    "Help distinguish viral from bacterial/parasitic diarrhoea."
  ],
  referenceRange: [
    "Negative: No rotavirus antigen detected.",
    "Positive: Rotavirus antigen detected."
  ],
  analyticalLimitations: [
    "Antigen may be low early or late in illness.",
    "Possible cross-reactivity with other enteric viruses.",
    "Cannot genotype virus; PCR may be required in reference labs."
  ],

  sampleType: "Stool",
  containerColour: "Stool jar",
  sampleRequirements: "Fresh stool",
  storageTransport: "2 – 8 °C ≤24 hrs; freeze –20 °C if longer.",
  rejection: "Leaking\nFormed stool (non-diarrhoeal).",
  methodology: "Lateral-flow rapid test",

  turnaround: { routine: "4 hours", urgent: "1 hour" },
  criticalAlert: "Positive in hospitalised infants/immunocompromised patients require prompt infection-control notification.",
  diseaseAssociations: ["Rotavirus gastroenteritis."],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-28",
  updated: ""
},

{
  id: "rubella-antibody",
  name: "Rubella Antibody (IgG and/or IgM)",
  synonyms: ["German Measles Antibody"],
  department: "serology",
  limsCode: "RUB-AB",
  flags: [],

  summary: "Serological detection of rubella",
  description: "Serological detection of rubella IgM and/or IgG to diagnose acute infection and determine immune status.",

  indications: [
    "Diagnose acute rubella (IgM).",
    "Determine immunity in women of child-bearing age and antenatally (IgG).",
    "Investigate febrile rash illness.",
    "Support outbreak investigations."
  ],
  referenceRange: [
    "IgM:",
    "Negative = no acute infection;",
    "Positive = recent/current infection.",
    "IgG:",
    "Positive = immune;",
    "Negative = non-immune."
  ],
  analyticalLimitations: [
    "IgM may be negative early; sample ≥3–5 days post-rash preferred.",
    "Cross-reactivity (parvovirus B19, EBV) and rheumatoid factor may cause false positives.",
    "Vaccination may transiently produce IgM.",
    "IgG avidity sometimes needed to time infection."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "See Appendix 9a. Storage and Transport — Quick Reference",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "ELISA or CLIA.",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "IgM positive in pregnancy → urgent notification",
  diseaseAssociations: [
    "IgM positive: recent/acute rubella.",
    "IgG positive: immune (past infection or vaccination).",
    "IgG negative: non-immune, at risk (especially important in pregnancy)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "rubella-igg-antibody",
  name: "Rubella IgG Antibody (Immunity Status)",
  synonyms: ["Rubella Immunity"],
  department: "serology",
  limsCode: "RUB-IgG",
  flags: [],

  summary: "Measures rubella IgG to determine immunity",
  description: "Measures rubella IgG to determine immunity from past infection or vaccination, especially for antenatal and occupational screening.",

  indications: [
    "Antenatal screening of women for rubella immunity.",
    "Confirm immunity post-vaccination.",
    "Screen healthcare and childcare workers."
  ],
  referenceRange: [
    "Positive: Immune.",
    "Negative: Non-immune."
  ],
  analyticalLimitations: [
    "Cannot distinguish vaccine vs natural infection.",
    "Possible false negatives if tested before IgG seroconversion."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "See Appendix 9a Storage and Transport — Quick Reference",
  rejection: "",
  methodology: "ELISA or CLIA.",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "Negative IgG (non-immune) in pregnancy should be highlighted to the clinician.",
  diseaseAssociations: [
    "Positive: immunity to rubella.",
    "Negative: susceptible to infection."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "rubella-rna",
  name: "Rubella RNA",
  synonyms: ["Rubella PCR"],
  department: "serology",
  limsCode: "RUB-RNA",
  flags: [],

  summary: "Rubella RNA Detection",
  description: "Real-time RT-PCR for detection of rubella virus RNA. Confirms acute infection, especially early, and is important for CRS and outbreak investigations.",

  indications: [
    "Confirm acute rubella.",
    "Diagnose congenital rubella syndrome (CRS) in neonates.",
    "Support public-health surveillance and outbreak control."
  ],
  referenceRange: [
    "Negative: No rubella RNA detected.",
    "Positive: Current rubella infection."
  ],
  analyticalLimitations: [
    "Sensitivity falls after ~7 days post-rash.",
    "Poor sampling or delayed/untreated specimens → false negatives.",
    "Requires molecular laboratory and cold-chain transport."
  ],

  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Throat/nasopharyngeal swab in VTM.",
    "Urine (10–50 mL, early infection).",
    "EDTA whole blood (for RNA)."
  ],
  storageTransport: "2–8 °C and transport within 48 hrs.\nFreeze ≤–70 °C if delayed longer",
  rejection: "Delayed transport without refrigeration.\nSee Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Real-time RT-PCR for rubella RNA.",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "All positive results, especially in pregnancy or suspected Congenital Rubella Syndrome (CRS), are notifiable.",
  diseaseAssociations: [
    "Positive: acute rubella infection or Congenital Rubella Syndrome.",
    "Negative: no detectable RNA (or late sampling)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "sars-covid-19-igg",
  name: "SARS-Covid-19 IgG",
  synonyms: [],
  department: "serology",
  limsCode: "COVID-IgG",
  flags: [],

  summary: "Test to detect SARS-CoV-2 IgG",
  description: "Detects IgG antibodies to SARS-CoV-2. Indicates past infection or vaccination; not for diagnosis of acute COVID-19.",

  indications: [
    "Assess prior SARS-CoV-2 infection.",
    "Assess antibody response to COVID-19 vaccination.",
    "Sero-surveillance / epidemiological studies.",
    "Support investigation of post-acute COVID (\"long COVID\") syndromes."
  ],
  referenceRange: [
    "Negative: No IgG detected.",
    "Positive: Evidence of previous infection or vaccination."
  ],
  analyticalLimitations: [
    "Usually cannot distinguish vaccine vs infection (unless spike vs nucleocapsid assay specified).",
    "Presence of IgG does not confirm protective immunity.",
    "Not suitable for acute diagnosis (PCR/antigen required).",
    "False negatives in early infection or immunosuppressed patients."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "2 – 3 days at 2 – 8 °C; freeze –20 °C for longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "ELISA",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "Results in high-risk or immunocompromised patients may require clinician discussion",
  diseaseAssociations: [
    "Positive: Previous infection or vaccination.",
    "Negative: No detectable IgG (could be early infection, waning immunity, or non-response)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12", "appendix-13"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "semen-analysis",
  name: "Semen Analysis",
  synonyms: [],
  department: "microbiology",
  limsCode: "SEMEN",
  flags: [],

  summary: "Seminal Fluid Analysis",
  description: "Comprehensive assessment of semen including volume, sperm concentration, motility, and morphology, mainly for male fertility evaluation and post-vasectomy follow-up.",

  indications: [
    "Investigate male infertility.",
    "Confirm post-vasectomy success (azoospermia).",
    "Assess semen quality before assisted reproductive procedures.",
    "Evaluate suspected testicular or accessory gland dysfunction."
  ],
  referenceRange: [
    "WHO 2021 typical reference values:",
    "Volume ≥1.4 mL.",
    "Concentration ≥16 × 10⁶/mL.",
    "Progressive motility ≥30%; total motility ≥42%.",
    "Normal morphology ≥4%."
  ],
  analyticalLimitations: [
    "Strongly affected by abstinence period (2–7 days recommended).",
    "Results vary with collection/transport conditions.",
    "Morphology assessment subject to observer variability.",
    "Requires WHO-standardised methods."
  ],

  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: "Fresh semen collected into sterile container",
  storageTransport: "Deliver within 1 hr of collection. Keep at ~37 °C; do not refrigerate.",
  rejection: "Incomplete sample, delay >1 hr, non-sterile/condom collection",
  methodology: "Microscopic assessment of count, motility, morphology, and other parameters.",

  turnaround: { routine: "", urgent: "<2 hours" },
  criticalAlert: "Azoospermia on post-vasectomy testing requires confirmation.\nMarked oligospermia or immotility for fertility testing should be flagged.",
  diseaseAssociations: [
    "Oligospermia",
    "azoospermia",
    "asthenozoospermia",
    "teratozoospermia associated with varicocele",
    "endocrine disorders",
    "obstruction",
    "infection",
    "testicular damage",
    "systemic illness."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "sodium",
  name: "Sodium",
  synonyms: [
    "Serum Sodium",
    "Plasma Sodium"
  ],
  department: "biochemistry",
  limsCode: "NA",
  flags: ["critical", "stat"],

  summary: "Assessment and monitoring of fluid and electrolytes.",
  description: "Major extracellular cation crucial for fluid balance, osmotic pressure, and acid–base homeostasis. Core electrolyte test.",

  indications: [
    "Diagnose and monitor hyponatraemia / hypernatraemia.",
    "Assess renal, adrenal, pituitary function.",
    "Monitor patients with dehydration, SIADH, heart failure, cirrhosis.",
    "Critically ill patients and IV fluid management."
  ],
  referenceRange: "Adults: ~135 – 145 mmol/L.",
  analyticalLimitations: [
    "Indirect ISE methods affected by marked hyperlipidaemia/hyperproteinaemia can result in pseudohyponatraemia.",
    "Interpret with osmolality, potassium, and renal function."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "2 – 5 mL serum or Lithium heparinised plasma.",
    "Do not use Sodium Heparin tube."
  ],
  storageTransport: "Stable 2–3 days at 2–8 °C; transport refrigerated if delayed.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Ion-selective electrode (ISE)",

  turnaround: { routine: "Same day.", urgent: "<2 hours" },
  criticalAlert: "Na <120 mmol/L or >160 mmol/L = critical; urgent notification required.",
  diseaseAssociations: [
    "Hyponatraemia: SIADH, heart failure, cirrhosis, renal failure, diuretics, GI loss.",
    "Hypernatraemia: dehydration, diabetes insipidus, osmotic diuresis, excess sodium."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-24",
  updated: ""
},

{
  id: "sputum-culture",
  name: "Sputum Culture",
  synonyms: ["Sputum for Culture and Sensitivity"],
  department: "microbiology",
  limsCode: "SPUT",
  flags: ["critical"],

  summary: "Culture of sputum or lower respiratory specimens",
  description: "Culture of sputum or lower respiratory specimens to identify bacterial pathogens causing pneumonia, bronchitis, or lung abscess. Gram stain used to assess specimen quality and guide interpretation.",

  indications: [
    "Investigate suspected lower respiratory tract infection.",
    "Guide antibiotic therapy in CAP/HAP, bronchiectasis exacerbation.",
    "Support investigation of lung abscess and severe pneumonia."
  ],
  referenceRange: "Normal: No significant pathogen; normal upper respiratory flora only.",
  analyticalLimitations: [
    "Poor-quality, saliva-contaminated specimens give misleading results.",
    "Normal flora/colonisers may overgrow pathogens.",
    "Anaerobes, mycobacteria, and fungi require specific requests.",
    "Prior antibiotics reduce yield."
  ],

  sampleType: "Sputum",
  containerColour: "Sterile collection jar",
  sampleRequirements: "Expectorated sputum, tracheal aspirate, or BAL in sterile container.",
  storageTransport: "Transport within 1–2 hrs; refrigerate at 2–8 °C up to 24 hrs if delayed.",
  rejection: "Salivary specimen (few/no pus cells on Gram stain).\nDry swab, non-sterile container, leaking or unlabelled specimen, delayed transport without refrigeration.",
  methodology: "Gram stain.\nCulture on appropriate media (blood, MacConkey, chocolate, etc.).\nIdentification by biochemical/automated methods; AST on significant isolates.",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "Isolation of significant respiratory pathogens (e.g., MRSA, multidrug-resistant Gram-negatives) from severe cases should be urgently communicated.",
  diseaseAssociations: [
    "Community-acquired pneumonia (CAP), hospital-acquired pneumonia HAP, bronchiectasis exacerbation, lung abscess.",
    "Tuberculosis (TB) requires separate Acid-Fast Bacillus (AFB) tests."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "stool-routine-microscopy",
  name: "Stool Routine Microscopy",
  synonyms: ["Faeces Microscopy"],
  department: "microbiology",
  limsCode: "STOOL-MIC",
  flags: ["critical"],

  summary: "Direct microscopic exam of fresh stool",
  description: "Direct microscopic exam of fresh stool to assess cells (WBC/RBC), mucus, fat droplets, yeast, and to screen for obvious ova/cysts/larvae.",

  indications: [
    "Initial work-up of acute or persistent diarrhoea.",
    "Detect faecal leukocytes/RBCs suggesting inflammatory diarrhoea.",
    "Rapid screen for obvious parasites before full O&P, culture, or antigen/PCR testing."
  ],
  referenceRange: "Normal: No WBC, no RBC, no pathogenic parasites seen on direct prep.",
  analyticalLimitations: [
    "Low sensitivity, especially at low parasite burden.",
    "Trophozoites degrade quickly; rapid processing essential.",
    "Requires trained staff to distinguish yeasts vs cysts etc.",
    "Negative direct microscopy does not exclude parasites (O&P needed)."
  ],

  sampleType: "Stool",
  containerColour: "Stool jar",
  sampleRequirements: "Fresh stool (≥5 g) in clean, leak-proof container",
  storageTransport: "Fresh: deliver/process within ~2 hrs.",
  rejection: "Leaking/contaminated or unlabelled containers.\nProlonged room-temperature delay without preservative.",
  methodology: "Direct saline and iodine wet mounts; basic semi-quantitative reporting of cells and parasites.\nReflex to Ova & Parasite examination with concentration and special stains when indicated.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Heavy parasite load or numerous WBC/RBC suggesting dysentery, especially in infants or immunocompromised patients, should be urgently reported.",
  diseaseAssociations: ["Inflammatory diarrhoea, amoebic dysentery, helminth infections, malabsorption (fat droplets – screening only)."],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "stool-culture",
  name: "Stool Culture",
  synonyms: [],
  department: "microbiology",
  limsCode: "STOOL",
  flags: ["critical"],

  summary: "Stool culture to identify enteric bacterial pathogens.",
  description: "Stool culture detects and identifies enteric bacterial pathogens that cause diarrhoeal disease. It targets organisms of clinical and public health importance.",

  indications: [
    "Diagnose acute bacterial gastroenteritis and dysentery.",
    "Identify pathogens in foodborne illness or outbreak settings.",
    "Guide antimicrobial therapy",
    "Fulfil public health reporting obligations."
  ],
  referenceRange: "Normal: No significant enteric bacterial pathogen isolated.",
  analyticalLimitations: [
    "Abundant commensal flora may obscure pathogen recovery.",
    "Sensitivity reduced if patient on antibiotics.",
    "Viral and parasitic causes not detected.",
    "Some organisms (e.g., Vibrio, Yersinia) only recovered with specific request."
  ],

  sampleType: "Stool",
  containerColour: "Stool jar",
  sampleRequirements: [
    "Fresh stool (5–10 g) in sterile leak-proof container.",
    "Rectal swab acceptable if stool unobtainable."
  ],
  storageTransport: "Refrigerate at 2–8 °C if delayed >2 hrs.",
  rejection: "Formed stool not suitable for acute bacterial diarrhoea.",
  methodology: "Selective and differential culture media (e.g., XLD, MacConkey, Campylobacter agar).\nAST (antimicrobial susceptibility testing).",

  turnaround: { routine: "2 - 3 days.", urgent: "" },
  criticalAlert: "Isolation of Salmonella Typhi/Paratyphi, Shigella spp., or Shiga toxin-producing E. coli (STEC) requires urgent clinician notification.",
  diseaseAssociations: [
    "Salmonella generally associated with gastroenteritis, typhoid fever.",
    "Shigella generally associated with bacillary dysentery.",
    "Campylobacter generally associated with bacterial enteritis, possible Guillain-Barré syndrome.",
    "Pathogenic E. coli generally associated with haemorrhagic colitis, HUS.",
    "Vibrio cholerae generally associated with cholera.",
    "Yersinia generally associated with enterocolitis, mesenteric adenitis."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    { group: "Reported organisms", items: [
      "Salmonella spp. (non-typhoidal and typhoidal)",
      "Shigella spp.",
      "Campylobacter spp.",
      "Enteropathogenic E. coli (EHEC, ETEC, EPEC, EAEC – as test platform allows)",
      "Vibrio cholerae (if requested)",
      "Yersinia enterocolitica (if requested)",
      "Other unusual enteric Gram-negatives as clinically significant"
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "syphilis-rapid-plasma-reagin",
  name: "Syphilis – Rapid Plasma Reagin (RPR)",
  synonyms: ["Non-treponemal Syphilis Test"],
  department: "serology",
  limsCode: "RPR",
  flags: [],

  summary: "Screening for syphilis.",
  description: "Non-treponemal card test detecting \"reagin\" antibodies to lipoidal antigens released in syphilis. Used for screening and monitoring, not specific for Treponema pallidum.",

  indications: [
    "Screen for syphilis.",
    "Monitor treatment (falling titre = response).",
    "Assess reinfection or treatment failure.",
    "Part of antenatal screening."
  ],
  referenceRange: [
    "Non-reactive: No detectable reagin.",
    "Reactive: Requires treponemal confirmatory test."
  ],
  analyticalLimitations: [
    "Biological false positives (autoimmune disease, pregnancy, infections).",
    "Prozone effect at very high titres → false negative if not diluted.",
    "Lower sensitivity in very early primary and late latent syphilis.",
    "Cannot distinguish active vs past infection alone."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Up to 72 hrs at 2 – 8 °C; freeze –20 °C for longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Manual macroscopic flocculation card test: reactive sera titrated.",

  turnaround: { routine: "Confirm with testing laboratory", urgent: "" },
  criticalAlert: "New reactive RPR in antenatal patients must be urgently communicated and confirmed.",
  diseaseAssociations: [
    "Reactive: syphilis infection (requires treponemal test + clinical correlation).",
    "Non-reactive: no serological evidence, though early/late syphilis not fully excluded."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: [],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "tb-culture",
  name: "TB Culture",
  synonyms: [
    "Mycobacterial Culture",
    "Mycobacterium tuberculosis Culture"
  ],
  department: "microbiology",
  limsCode: "TB",
  flags: [],

  summary: "Culture for Mycobacterium tuberculosis (MTB)",
  description: "Gold-standard culture for Mycobacterium tuberculosis (MTB) and non-tuberculous mycobacteria (NTM). Allows definitive identification and drug susceptibility testing.",

  indications: [
    "Confirm pulmonary or extrapulmonary TB.",
    "Monitor treatment (culture conversion).",
    "Detect NTM infections (e.g., MAC).",
    "Perform phenotypic/molecular AST for first- and second-line TB drugs.",
    "Public health/infection control surveillance."
  ],
  referenceRange: "Negative: No mycobacteria isolated.",
  analyticalLimitations: [
    "Slow growth: MTB may take up to 6–8 weeks on solid media.",
    "Reduced sensitivity with prior anti-TB therapy.",
    "Requires BSL-3 facilities and strict biosafety.",
    "Non-sterile specimens risk contamination."
  ],

  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Sputum (ideally 3 early-morning samples).",
    "Bronchoalveolar lavage, gastric aspirate, pleural fluid, CSF, lymph node aspirate, tissue, or other sterile fluids."
  ],
  storageTransport: "Transport promptly to laboratory\nRefrigerate 2–8 °C if delay >1 hr;",
  rejection: "Prolonged delay without refrigeration (>24 hrs).",
  methodology: "Decontamination/concentration (e.g., N-acetyl-L-cysteine (NALC)-NaOH, (NALC–NaOH)).\nCulture on solid (Löwenstein-Jensen (LJ)) and liquid (Mycobacteria Growth Indicator Tubes MGIT) media.\nIdentification by molecular methods or MALDI-TOF.\nAST on positive isolates.",

  turnaround: { routine: "Confirm with laboratory.", urgent: "" },
  criticalAlert: "Any positive MTB culture is notifiable",
  diseaseAssociations: [
    "Pulmonary and extrapulmonary TB.",
    "NTM disease in immunocompromised hosts."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    { group: "Mycobacterium tuberculosis complex", items: [
      "(M. tuberculosis, M. bovis, etc.)."
    ] },
    { group: "Nontuberculous mycobacteria", items: [
      "(e.g., Mycobacterium avium complex, M. kansasii, M. fortuitum)."
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "acid-fast-bacillus-stain",
  name: "Acid-Fast Bacillus Stain",
  synonyms: ["AFB Smear"],
  department: "microbiology",
  limsCode: "AFB",
  flags: [],

  summary: "Direct microscopy for acid-fast bacilli",
  description: "Direct microscopy for acid-fast bacilli (AFB) on clinical specimens.",

  indications: [
    "Rapid presumptive diagnosis of pulmonary TB",
    "Identify infectious patients for isolation.",
    "Monitor treatment response.",
    "Screen extrapulmonary specimens for AFB."
  ],
  referenceRange: [
    "Negative: No AFB seen.",
    "Positive: AFB detected"
  ],
  analyticalLimitations: [
    "•	Less sensitive than culture or molecular tests.",
    "Cannot distinguish MTB from NTM.",
    "Requires good-quality specimen and adequate volume.",
    "False negatives with low bacillary load"
  ],

  sampleType: "Sputum",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Sputum (preferably 3 early-morning).",
    "BAL",
    "sterile body fluids (CSF, pleural, ascitic)"
  ],
  storageTransport: "Transport promptly; refrigerate 2–8 °C if delay >1 hr.",
  rejection: "Saliva instead of sputum.",
  methodology: "Ziehl–Neelsen smear with light microscopy.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Any positive AFB smear in suspected TB is critical; urgent notification to clinician",
  diseaseAssociations: [
    "Pulmonary and extrapulmonary TB.",
    "NTM infections in immunocompromised patients."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    { group: "Reported organisms", items: [
      "AFB present/absent; species identification requires culture/molecular tests."
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "testosterone",
  name: "Testosterone",
  synonyms: ["Total Testosterone"],
  department: "biochemistry",
  limsCode: "TESTO",
  flags: [],

  summary: "Serum Testosterone",
  description: "Primary androgen hormone produced mainly by testes (men) and adrenals (both sexes). Important in sexual development, fertility, muscle/bone mass, and general health.",

  indications: [
    "Evaluate hypogonadism in men.",
    "Investigate male infertility and erectile dysfunction.",
    "Monitor testosterone replacement therapy.",
    "Assess androgen excess (e.g., polycystic ovary syndrome (PCOS), virilisation) in women.",
    "Evaluate androgen-secreting tumours."
  ],
  referenceRange: [
    "Adult male: ~10–30 nmol/L.",
    "Adult female: ~0.3–2.5 nmol/L."
  ],
  analyticalLimitations: [
    "Diurnal variation (peak morning) – collect 07:00–10:00.",
    "Results affected by SHBG; free/biologically active testosterone may require calculation.",
    "Immunoassays less accurate at low levels (females/children); LC-MS/MS preferred."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "2–5 mL serum",
    "Morning sample recommended."
  ],
  storageTransport: "Stable up to 5 days at 2–8 °C; freeze –20 °C for longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Immunoassay",

  turnaround: { routine: "1–3 working days.", urgent: "" },
  criticalAlert: "Markedly low levels in boys/young men or markedly high levels in women/children require urgent review for endocrine or neoplastic causes.",
  diseaseAssociations: [
    "Low: Primary/secondary hypogonadism, pituitary disease, chronic illness, obesity",
    "High: Androgen-secreting tumours, congenital adrenal hyperplasia, anabolic steroid use, PCOS."
  ],
  conversionFactors: "1 ng/dL = 0.0347 nmol/L. 1 nmol/L = 28.8 ng/dL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "thyroid-stimulating-hormone",
  name: "Thyroid Stimulating Hormone (TSH)",
  synonyms: ["Thyrotropin"],
  department: "biochemistry",
  limsCode: "TSH",
  flags: ["critical"],

  summary: "Pituitary hormone responsible for thyroid production .",
  description: "Pituitary hormone regulating thyroid production of T4 and T3. Most sensitive single test for thyroid function.",

  indications: [
    "Diagnose primary hypo- and hyperthyroidism.",
    "Monitor levothyroxine replacement or antithyroid therapy.",
    "Screen neonates and high-risk groups (autoimmune disease, family history).",
    "Part of thyroid function tests with FT4/FT3."
  ],
  referenceRange: "0.4 – 4.0 mIU/L",
  analyticalLimitations: [
    "Altered by acute illness (\"non-thyroidal illness\").",
    "Interference from heterophile antibodies or high-dose biotin.",
    "TSH alone does not distinguish pituitary vs hypothalamic disease.",
    "Always interpret with FT4 (± FT3)."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum.",
  storageTransport: "Stable 3 – 5 days at 2 – 8 °C; freeze –20 °C if longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Chemiluminescent",

  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "Very high TSH in neonates → urgent suspicion of congenital hypothyroidism.\nMarkedly suppressed TSH (<0.01 mIU/L) in pregnancy or severe illness may require rapid review.",
  diseaseAssociations: [
    "Increased: Primary hypothyroidism, Hashimoto thyroiditis, thyroid ablation.",
    "Decreased: Hyperthyroidism (Graves', toxic nodular goitre), pituitary/hypothalamic failure, thyroxine over-replacement."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "total-bilirubin",
  name: "Total Bilirubin",
  synonyms: ["Serum Bilirubin"],
  department: "biochemistry",
  limsCode: "TBIL",
  flags: ["critical"],

  summary: "Measures total (conjugated + unconjugated) bilirubin",
  description: "Measures total (conjugated + unconjugated) bilirubin, a breakdown product of haem. Key marker of liver function and haemolysis.",

  indications: [
    "Evaluate and monitor jaundice in neonates and adults.",
    "Assess liver disease (hepatitis, cirrhosis, cholestasis).",
    "Investigate haemolytic anaemia.",
    "Monitor neonatal hyperbilirubinaemia therapy."
  ],
  referenceRange: "Adults: <20 µmol/L.",
  analyticalLimitations: [
    "Haemolysis may falsely raise bilirubin.",
    "Bilirubin is light-sensitive; protect specimens from light.",
    "Lipemic samples may interfere with spectrophotometry.",
    "Mild isolated hyperbilirubinaemia may be benign (e.g., Gilbert syndrome)."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2–5 mL serum, protected from light;",
  storageTransport: "Up to 48 hrs at 2–8 °C,  freeze –20 °C for longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Department)",
  methodology: "Spectrophotometric",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Marked elevation (e.g., >200 µmol/L in neonates or adults) report urgently for clinical assessment.",
  diseaseAssociations: [
    "Increased:",
    "Haemolysis",
    "Neonatal jaundice",
    "Hepatitis",
    "Cirrhosis",
    "Biliary obstruction",
    "Gilbert/Crigler–Najjar syndromes."
  ],
  conversionFactors: "1 mg/dL = 17.1 µmol/L, 1 µmol/L = 0.0585 mg/dL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "total-protein",
  name: "Total Protein",
  synonyms: [],
  department: "biochemistry",
  limsCode: "TP",
  flags: [],

  summary: "Serum Total Protein",
  description: "Measures combined albumin and globulins in serum. General indicator of nutritional status, liver function, renal protein loss, and gammopathies.",

  indications: [
    "Assess nutrition and chronic disease.",
    "Support evaluation of liver and kidney disease.",
    "Detect/monitor multiple myeloma and other gammopathies.",
    "Investigate oedema, ascites, hypoalbuminaemia (with albumin and A/Globulin ratio)."
  ],
  referenceRange: "~60 – 80 g/L.",
  analyticalLimitations: [
    "Haemolysis, lipaemia, and high bilirubin can interfere.",
    "Non-specific; must be interpreted with albumin, electrophoresis, and clinical context."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum.",
  storageTransport: "Stable up to 7 days at 2–8 °C; freeze –20 °C longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Biuret spectrophotometric assay.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Very low total protein (<40 g/L) in critically ill patients should prompt urgent review.",
  diseaseAssociations: [
    "Increased: Dehydration, multiple myeloma, chronic inflammation.",
    "Decreased: Malnutrition, liver disease, nephrotic syndrome, protein-losing enteropathy."
  ],
  conversionFactors: "",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "triglyceride",
  name: "Triglyceride",
  synonyms: [],
  department: "biochemistry",
  limsCode: "TRIG",
  flags: [],

  summary: "Measures plasma triglycerides",
  description: "Measures plasma triglycerides, the main storage form of lipid (in chylomicrons and VLDL). Important for cardiovascular risk assessment and pancreatitis risk.",

  indications: [
    "Part of lipid profile for cardiovascular risk.",
    "Diagnose and monitor hypertriglyceridaemia.",
    "Investigate suspected hyperlipidaemic pancreatitis.",
    "Monitor dietary and pharmacologic treatment of dyslipidaemia"
  ],
  referenceRange: "desirable fasting value <1.7 mmol/L.",
  analyticalLimitations: [
    "Non-fasting samples may be falsely elevated; 8 – 12 hr fast recommended for diagnosis.",
    "Haemolysed or grossly lipaemic samples can interfere.",
    "Influenced by alcohol intake, diabetes, renal disease, and many drugs."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum.",
  storageTransport: "Stable up to 3 days at 2 – 8 °C; freeze –20 °C for longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Department)",
  methodology: "Enzymatic spectrophotometric assay",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Triglycerides >10 mmol/L → high risk of acute pancreatitis; urgent clinical review required.",
  diseaseAssociations: [
    "Increased: Primary hypertriglyceridaemia, poorly controlled diabetes, obesity, metabolic syndrome, hypothyroidism, alcohol excess, renal disease, certain drugs.",
    "Decreased: Malnutrition, malabsorption, hyperthyroidism."
  ],
  conversionFactors: "1 mg/dL = 0.0113 mmol/L, 1 mmol/L = 88.6 mg/dL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
  },

{
  id: "troponin-i-poc-quidel-triage",
  name: "Troponin I - POC Quidel-Triage (Analyser specific test entry)",
  synonyms: [
    "Cardiac Troponin I",
    "cTnI",
    "TnI",
    "Troponin I"
  ],
  department: "biochemistry",
  limsCode: "TROP",
  flags: ["critical", "stat"],

  summary: "Cardiac troponin I (cTnI) is a cardiac-specific protein released into the circulation following myocardial injury",
  description: "Cardiac troponin I (cTnI) is a cardiac-specific protein released into the circulation following myocardial injury. Measurement of cTnI is used as an aid in the diagnosis of myocardial infarction and other conditions associated with myocardial injury.",

  indications: [
    "Investigation of patients with symptoms suggestive of acute coronary syndrome or myocardial infarction, including acute chest pain.",
    "Detection and assessment of myocardial injury.",
    "Serial troponin measurements may be required to demonstrate a rise and/or fall in troponin concentration.",
    "Troponin results must be interpreted together with the patient's clinical presentation, ECG findings and timing of symptom onset.",
    "An elevated troponin indicates myocardial injury but does not, by itself, establish a diagnosis of myocardial infarction."
  ],
  referenceRange: "cut-off: 0.02 ng/mL",
  analyticalLimitations: [
    "Troponin I elevation indicates myocardial injury but is not specific for myocardial infarction. Clinical features, ECG findings and serial troponin measurements should be considered when establishing the diagnosis.",
    "Avoid grossly haemolysed specimens.",
    "This specific platform is validated for EDTA specimens only."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2 - 5 mL EDTA - ONLY",
  storageTransport: "For point-of-care testing, specimens should preferably be tested as soon as possible following collection.",
  rejection: "EDTA samples only\nAvoid gross haemolysis",
  methodology: "Fluorescence immunoassay using the QUIDEL TRIAGE Troponin I Test (98600EU) on the QUIDEL TRIAGE MeterPro point-of-care analyser.",

  turnaround: { routine: "", urgent: "Urgent – approximately 20 minutes" },
  criticalAlert: "Results above >0.02 ng/mL / >20 ng/L indicate myocardial injury and require clinical assessment.\nA troponin result must not be interpreted in isolation. An elevated troponin result indicates myocardial injury.",
  diseaseAssociations: [
    "Acute myocardial infarction / acute coronary syndrome",
    "Myocarditis",
    "Acute or chronic heart failure",
    "Cardiac arrhythmias",
    "Pulmonary embolism",
    "Severe hypertension or hypotension",
    "Shock or critical illness",
    "Sepsis",
    "Renal disease",
    "Cardiac trauma or cardiac procedures",
    "Other conditions causing myocardial oxygen supply/demand imbalance"
  ],
  conversionFactors: "1 ng/mL = 1 µg/L = 1000 ng/L  Therefore:  0.02 ng/mL = 0.02 µg/L = 20 ng/L",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-28",
  updated: ""
},

{
  id: "uric-acid",
  name: "Uric Acid",
  synonyms: ["Serum Uric Acid"],
  department: "biochemistry",
  limsCode: "URIC",
  flags: [],

  summary: "Serum Uric acid test for purine metabolism.",
  description: "Final product of purine metabolism, excreted mainly via kidneys. Used to assess hyperuricaemia, gout risk, renal function, and tumour lysis.",

  indications: [
    "Diagnose and monitor gout.",
    "Evaluate hyperuricaemia in renal disease, hypertension, metabolic syndrome.",
    "Monitor patients on cytotoxic therapy (tumour lysis syndrome).",
    "Assess risk and cause of renal stones."
  ],
  referenceRange: [
    "Adult male: ~0.20 – 0.45 mmol/L.",
    "Adult female: ~0.15 – 0.36 mmol/L."
  ],
  analyticalLimitations: [
    "Haemolysis and lipaemia may interfere.",
    "Influenced by diet, alcohol, and drugs (diuretics, aspirin, allopurinol, uricosurics).",
    "Not all hyperuricaemic patients develop gout; interpret with clinical picture."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Stable 3 – 5 days at 2 – 8 °C; freeze –20 °C for longer storage.",
  rejection: "See Appedix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Enzymatic uricase method",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Very high uric acid (>0.60 mmol/L), especially in chemotherapy patients, may indicate tumour lysis syndrome → urgent action.",
  diseaseAssociations: [
    "Increased: Gout, renal impairment, tumour lysis syndrome, metabolic syndrome, hypertension, pre-eclampsia.",
    "Decreased: Syndrome of inappropriate antidiuretic hormone secretion (SIADH), severe liver disease, effect of allopurinol/uricosuric drugs."
  ],
  conversionFactors: "1 mg/dL = 59.5 µmol/L. , 1 µmol/L = 0.0168 mg/dL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "urine-analysis-dipstick",
  name: "Urine Analysis – Dipstick",
  synonyms: [
    "Urinalysis",
    "Dipstick Urine Test"
  ],
  department: "microbiology",
  limsCode: "UA-DIP",
  flags: [],

  summary: "Dipstick Urine Test",
  description: "Multi-parameter semi-quantitative dipstick screen for urinary analytes (blood, protein, glucose, ketones, nitrites, leukocytes, bilirubin, urobilinogen, pH, specific gravity). First-line test for renal, urinary, metabolic, and hepatic disorders.",

  indications: [
    "Screen for UTI.",
    "Detect and monitor proteinuria/renal disease.",
    "Screen for diabetes (glucose, ketones).",
    "Support assessment of liver disease (bilirubin, urobilinogen).",
    "Routine health and antenatal screening."
  ],
  referenceRange: "",
  analyticalLimitations: [
    "Semi-quantitative; abnormal results often need microscopy or quantitative assays.",
    "False positives/negatives (e.g., vitamin C interference with blood/glucose).",
    "Affected by urine concentration, pH, medications, and storage conditions."
  ],

  sampleType: "Urine",
  containerColour: "Specimen jar",
  sampleRequirements: "Fresh midstream urine (MSU) in sterile container.",
  storageTransport: "Test within 2 hrs. If delay >2 hrs, refrigerate at 2 – 8 °C (≤24 hrs",
  rejection: ">24 hrs old at room temperature",
  methodology: "Dipstick colour change (semi-quantitative).",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Positive nitrites + leukocytes may suggest UTI.\n≥3+ protein may suggest nephrotic-range proteinuria.\nIncrease ketones may suggest risk of Diabetic Ketoacidosis.\nSignificant glucose may suggest uncontrolled diabetes.",
  diseaseAssociations: [
    "Haematuria,",
    "proteinuria,",
    "glycosuria,",
    "ketonuria,",
    "abnormal pH or Specific Gravity as per clinical context (Urinary Track Infection, kidney stones, Glomerulonephritis, Chronic Kidney Disease, diabetes, diabetic ketoacidosis, tubular disorders, dehydration)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "urine-microscopy",
  name: "Urine Microscopy (RBC, WBC, Casts, Crystals)",
  synonyms: [],
  department: "microbiology",
  limsCode: "UMIC",
  flags: [],

  summary: "Microscopic examination of urinary",
  description: "Microscopic examination of urinary sediment after centrifugation. Confirms dipstick findings and detects cells, casts, crystals, bacteria, and other formed elements.",

  indications: [
    "•	Confirm blood, leucocytes, protein, or nitrites from dipstick.",
    "Investigate haematuria, proteinuria, unexplained renal dysfunction.",
    "Diagnose UTI (WBCs, bacteria).",
    "Detect renal parenchymal disease (casts).",
    "Assess crystal-related metabolic/stone disorders."
  ],
  referenceRange: [
    "RBC: 0–2 / HPF.",
    "WBC: 0–5 / HPF.",
    "Casts: None.",
    "Crystals: Variable."
  ],
  analyticalLimitations: [
    "Must be analysed promptly (ideally within 2 hrs).",
    "Concentrated urine may exaggerate counts; dilute urine may underestimate.",
    "Contamination (menstrual blood, vaginal discharge) gives false positives.",
    "Semi-quantitative; not a precise cell count."
  ],

  sampleType: "Urine",
  containerColour: "Sterile collection jar",
  sampleRequirements: "Fresh Mid-stream urine in sterile container.",
  storageTransport: "Analyse within 2 hrs; if delay, refrigerate 2–8 °C (≤24 hrs).",
  rejection: "Old samples (>24 hrs at room temperature).",
  methodology: "Centrifugation; examination of sediment under low- and high-power microscopy.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Heavy haematuria.\nRed cell casts → acute glomerulonephritis.\nWBC casts or WBC clumps → severe pyelonephritis.",
  diseaseAssociations: [
    "RBCs: GN, stones, malignancy, trauma, UTI.",
    "WBCs: UTI, interstitial nephritis.",
    "Casts:",
    "Hyaline (non-specific)",
    "RBC casts (GN)",
    "WBC casts (pyelonephritis)",
    "Granular/waxy (chronic renal disease)",
    "Crystals (uric acid, oxalate, triple phosphate, cystine):",
    "stone risk/metabolic disorders.",
    "Bacteria/yeast: UTI vs contamination."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "urine-creatinine",
  name: "Urine Creatinine",
  synonyms: ["24-hour Urine Creatinine"],
  department: "biochemistry",
  limsCode: "UCRE",
  flags: [],

  summary: "Measures creatinine excretion in urine.",
  description: "Measures creatinine excretion in urine. Used to assess completeness of timed collections, estimate creatinine clearance, and calculate urinary ratios (e.g., protein:creatinine, albumin:creatinine).",

  indications: [
    "Check completeness of 24-hr urine collections.",
    "Calculate creatinine clearance (with serum creatinine).",
    "Monitor renal function in CKD.",
    "Evaluate nephrotic syndrome (protein:creatinine ratio).",
    "Metabolic studies of urinary excretion."
  ],
  referenceRange: [
    "Daily excretion (approx.):",
    "Adult male: ~9 – 18 mmol/day.",
    "Adult female: ~6 – 12 mmol/day."
  ],
  analyticalLimitations: [
    "Accuracy depends on correct timing and complete collection.",
    "Affected by muscle mass, diet, hydration.",
    "Jaffe method can be interfered with by glucose, ketones, bilirubin, cephalosporins."
  ],

  sampleType: "Urine",
  containerColour: "Specimen jar",
  sampleRequirements: [
    "24-hour urine collection (preferred).",
    "Spot urine for ratio calculations."
  ],
  storageTransport: "Refrigerate at 2 – 8 °C during collection and transport.\nStable up to 3 days refrigerated; freeze –20 °C for longer.",
  rejection: "Incomplete/incorrectly timed 24-hr collections.",
  methodology: "Jaffe spectrophotometric method",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Very low 24-hr creatinine suggests incomplete collection or very low muscle mass; interpret with serum creatinine/eGFR.",
  diseaseAssociations: [
    "Increased excretion: High muscle mass, high protein intake, strenuous exercise.",
    "Decreased excretion: Renal impairment, reduced muscle mass, malnutrition, incomplete collection."
  ],
  conversionFactors: "1 mg/dL = 88.4 µmol/L, 1 µmol/L = 0.0113 mg/dL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-11", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "urine-culture",
  name: "Urine Culture",
  synonyms: [],
  department: "microbiology",
  limsCode: "Urine",
  flags: [],

  summary: "Semi-quantitative culture of urine",
  description: "Semi-quantitative culture of urine to detect and identify bacterial pathogens causing UTI and to perform antimicrobial susceptibility testing (AST). Includes cell count and urine dipstick.",

  indications: [
    "Diagnose uncomplicated or complicated UTI.",
    "Distinguish contamination, colonisation, and infection.",
    "Guide antibiotic therapy (AST).",
    "Monitor response in recurrent or complicated UTIs."
  ],
  referenceRange: "No significant growth = normal.",
  analyticalLimitations: [
    "Common contamination from periurethral flora (poor collection).",
    "Asymptomatic bacteriuria may not require treatment except in specific groups (e.g., pregnancy).",
    "Does not detect viral/fungal/mycobacterial causes unless specifically requested."
  ],

  sampleType: "Urine",
  containerColour: "Sterile collection jar",
  sampleRequirements: "MSU in sterile container (preferred).",
  storageTransport: "Transport within 2 hrs. If delay >2 hrs, refrigerate 2–8 °C (≤24 hrs).",
  rejection: "Inadequate volume (<10 mL MSU).\n>24 hrs old without refrigeration.",
  methodology: "Semi-quantitative plating on chromogenic/differential media.\nIdentification by biochemical or MALDI-TOF.\nAST by disc diffusion or automated systems (CLSI/EUCAST).",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "" },
  criticalAlert: "Multidrug-resistant organisms (ESBL, CRE, MRSA, etc.): urgent notification and infection control.",
  diseaseAssociations: [
    "Lower UTI (cystitis).",
    "Upper UTI (pyelonephritis).",
    "Catheter-associated UTI.",
    "Asymptomatic bacteriuria (context dependent)."
  ],
  conversionFactors: "Not applicable",
  organismsReported: [
    { group: "Common pathogens", items: [
      "E. coli",
      "Klebsiella",
      "Proteus",
      "Enterococcus",
      "S. saprophyticus",
      "Pseudomonas and Candida in complicated cases."
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "urine-electrolytes",
  name: "Urine Electrolytes (Sodium, Potassium)",
  synonyms: [],
  department: "biochemistry",
  limsCode: "U_K+, U_NA",
  flags: [],

  summary: "Measurement of urinary Na⁺ and K⁺",
  description: "Measurement of urinary Na⁺ and K⁺ in timed or 24-hr collections. Used to assess renal tubular handling, volume status, and electrolyte balance alongside serum electrolytes.",

  indications: [
    "Differentiate pre-renal vs intrinsic renal acute kidney injury.",
    "Assess dehydration or salt-wasting states.",
    "Evaluate hyponatraemia, hyperkalaemia, and renal tubular disorders.",
    "Monitor effects of diuretics and IV fluids."
  ],
  referenceRange: [
    "(24-hr collections, approximate):",
    "Urine Sodium: 40–220 mmol/day.",
    "Urine Potassium: 25–125 mmol/day."
  ],
  analyticalLimitations: [
    "Spot samples can be misleading without serum values and clinical context.",
    "Incomplete or poor 24-hr collections reduce accuracy.",
    "Strongly affected by diet, hydration, and medication use (e.g., diuretics)."
  ],

  sampleType: "Urine",
  containerColour: "Specimen jar",
  sampleRequirements: "24-hr urine (preferred)",
  storageTransport: "Store at 2–8 °C during collection and transport. Freeze –20 °C for longer storage",
  rejection: "Incomplete or incorrectly timed collections",
  methodology: "Ion-selective electrode (ISE).",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Very low urine Na (<20 mmol/L) in AKI → suggests pre-renal failure.\nMarkedly elevated urinary K loss in hypokalaemic patients → may require urgent correction.",
  diseaseAssociations: [
    "Urine Na+:",
    "Low: Pre-renal azotaemia, dehydration.",
    "High: Diuretics, salt-wasting nephropathies.",
    "Urine K+:",
    "High: Hyperkalaemia, renal tubular acidosis, mineralocorticoid excess.",
    "Low: GI losses, diuretic use, Bartter/Gitelman syndromes."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "urine-protein",
  name: "Urine Protein",
  synonyms: ["Urinary Protein"],
  department: "biochemistry",
  limsCode: "UPROT",
  flags: [],

  summary: "Quantitation of total protein excretion in urine",
  description: "Quantitation of total protein excretion in urine using 24-hr collection or spot protein:creatinine ratio (UPCR). Marker of glomerular or tubular renal disease and nephrotic syndrome.",

  indications: [
    "Screen for and monitor proteinuria in renal disease.",
    "Differentiate glomerular vs tubular proteinuria.",
    "Diagnose and monitor nephrotic syndrome.",
    "Monitor Chronic Kidney Disease progression.",
    "Evaluate proteinuria in pregnancy (pre-eclampsia)."
  ],
  referenceRange: [
    "Total protein: <150 mg/24 hrs (adults).",
    "Protein:Creatinine ratio: <30 mg/mmol creatinine."
  ],
  analyticalLimitations: [
    "Requires complete and correctly timed 24-hr collection for accurate totals.",
    "False positives with alkaline urine, gross haematuria, contamination.",
    "Dipstick is only semi-quantitative; confirm with quantitative methods."
  ],

  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "24-hr urine (preferred)",
    "spot urine sample acceptable",
    "2 – 5 mL Serum for serum Total Protein and Creatinine"
  ],
  storageTransport: "Refrigerate during and after collection at 2–8 °C (≤3 days)\nFreeze –20 °C for longer storage",
  rejection: "Incomplete 24-hr collections",
  methodology: "Biuret or dye-binding methods (spectrophotometric).\nCalculation of 24-hr total or protein:creatinine ratio.",

  turnaround: { routine: "Same day", urgent: "" },
  criticalAlert: "Heavy proteinuria (>3.5 g/24 hrs) consistent with nephrotic syndrome → urgent review",
  diseaseAssociations: [
    "Increased: Glomerulonephritis, nephrotic syndrome, diabetic nephropathy, hypertensive nephrosclerosis, pre-eclampsia, myeloma (consider Bence Jones testing).",
    "Decreased: Not clinically significant."
  ],
  conversionFactors: "1 mg/dL = 0.01 g/L, 1 g/L = 100 mg/dL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "vancomycin",
  name: "Vancomycin",
  synonyms: [],
  department: "biochemistry",
  limsCode: "VANC_TDM",
  flags: ["critical", "stat"],

  summary: "Therapeutic drug monitoring of patients receiving vancomycin",
  description: "Vancomycin is an antibiotic used to treat infections caused by susceptible Gram-positive organisms, particularly infections caused by methicillin-resistant Staphylococcus aureus (MRSA).",

  indications: [
    "Therapeutic drug monitoring of patients receiving vancomycin.",
    "Detection of excessive concentrations associated with increased risk of toxicity.",
    "Assistance with dose adjustment, particularly in patients with impaired or changing renal function.",
    "This test is urgent when required for clinical dosing decisions."
  ],
  referenceRange: "recommended target trough level is 15 +/- 3 mg/L (12 – 18 mg/L) for intermittent dosing",
  analyticalLimitations: [
    "Incorrect sample timing can significantly affect interpretation.",
    "Samples collected during or shortly after vancomycin administration may produce concentrations that are not representative of a trough level.",
    "Results must be interpreted with the dose, dosing interval, sampling time and clinical condition of the patient.",
    "Renal impairment or rapidly changing renal function can significantly alter vancomycin clearance.",
    "Refer to the manufacturer's current assay instructions for method-specific interference and analytical measurement limitations."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "3- 5 mL serum.",
    "Trough samples should be collected immediately before the next scheduled dose."
  ],
  storageTransport: "Transport to laboratory immediately.\nStable 3 – 5 days at 2 – 8 °C; freeze at –20 °C for longer.",
  rejection: "See Appendix 7Sample Rejection Criteria (All Departments)",
  methodology: "Immunoassay",

  turnaround: { routine: "<2 hours", urgent: "1 hour" },
  criticalAlert: "High vancomycin concentrations should be reported immediately",
  diseaseAssociations: [
    "Vancomycin is commonly used in the management of serious Gram-positive bacterial infections, including:",
    "MRSA infections",
    "bacteraemia/sepsis",
    "endocarditis",
    "osteomyelitis",
    "serious skin and soft-tissue infections",
    "hospital-acquired infections caused by susceptible Gram-positive organisms",
    "selected central nervous system infections.",
    "Vancomycin accumulation is associated particularly with renal impairment and may increase the risk of nephrotoxicity."
  ],
  conversionFactors: "mg/L = µg/mL, therefore 15 mg/L = 15 µg/mL",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "vitamin-b12",
  name: "Vitamin B12",
  synonyms: ["Cobalamin"],
  department: "biochemistry",
  limsCode: "VIT-B12",
  flags: [],

  summary: "Measures serum Vitamin B12 to diagnose deficiencies.",
  description: "Water-soluble vitamin essential for DNA synthesis, neurological function, and red blood cell production. Deficiency causes megaloblastic anaemia and potentially irreversible neuropathy/neuropsychiatric changes.",

  indications: [
    "Investigate megaloblastic anaemia.",
    "Assess nutritional deficiency (malnutrition, vegan diet, malabsorption).",
    "Monitor pernicious anaemia.",
    "Evaluate neurological symptoms (neuropathy, cognitive decline).",
    "Monitor B12 replacement therapy."
  ],
  referenceRange: "Adults: ~150 – 650 pmol/L.",
  analyticalLimitations: [
    "Serum B12 may not reflect tissue stores.",
    "Borderline results require functional markers (MMA, homocysteine).",
    "Recent supplementation can transiently elevate levels.",
    "Affected by pregnancy, oral contraceptives, and some medicines."
  ],

  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "2 – 5 mL serum",
  storageTransport: "Stable 3 – 5 days at 2 – 8 °C; freeze at –20 °C for longer.",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Dep",
  methodology: "Immunoassay",

  turnaround: { routine: "1-3 days", urgent: "" },
  criticalAlert: "Very low B12 (<100 pmol/L) in symptomatic patients → urgent treatment to prevent irreversible neurological damage.",
  diseaseAssociations: [
    "Deficiency: Pernicious anaemia, coeliac disease, IBD, gastric surgery, strict vegan diet, nitrous oxide abuse.",
    "Increased: Recent supplementation, liver disease, myeloproliferative disorders."
  ],
  conversionFactors: "1 pg/mL = 0.738 pmol/L, 1 pmol/L = 1.355 pg/mL.",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-10", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "white-blood-cell-count",
  name: "White Blood Cell Count (WBC)",
  synonyms: ["Total Leucocyte Count"],
  department: "haematology",
  limsCode: "WBC",
  flags: ["critical", "stat"],

  summary: "Total leucocytes count in blood.",
  description: "Total leucocytes count in blood. Core FBC parameter reflecting immune and inflammatory status; interpreted with differential.",

  indications: [
    "Diagnose and monitor infections and inflammatory conditions.",
    "Assess bone marrow function (chemotherapy, marrow suppression, aplastic anaemia).",
    "Aid diagnosis of leukaemias and other haematological malignancies.",
    "Monitor treatment response in infection/haematological disease."
  ],
  referenceRange: [
    "Adults: ~4.0–11.0 × 10⁹/L.",
    "See Appendix 12. General Guide to Reference Ranges",
    "Age and sex dependant."
  ],
  analyticalLimitations: [
    "Affected by stress, exercise, steroids, and other drugs.",
    "Clotted samples invalid.",
    "Nucleated RBCs or abnormal cells can affect automated counts."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2 – 3 mL EDTA",
  storageTransport: "Room temperature (18 – 25 °C). Analyse within 6 – 8 hrs (max 24 hrs).",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Dep",
  methodology: "Automated haematology analyser (impedance, optical, or flow-based).",

  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "<2.0 × 10⁹/L , >50 × 10⁹/L, require urgent clinical review",
  diseaseAssociations: [
    "Increased: Bacterial infection, inflammation, stress, steroids, leukaemia, myeloproliferative disorders.",
    "Decreased: Viral infections, sepsis, marrow suppression, chemotherapy, aplastic anaemia, autoimmune disease."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "white-blood-cell-count-differential",
  name: "White Blood Cell Count & Differential (Manual Differential)",
  synonyms: [
    "Manual WBC differential",
    "Blood Film Morphology"
  ],
  department: "haematology",
  limsCode: "WBCC",
  flags: ["critical", "stat"],

  summary: "Measures relative and absolute white blood cells.",
  description: "Measures relative and absolute counts of neutrophils, lymphocytes, monocytes, eosinophils, and basophils. Provides detailed information on type of immune response and underlying pathology. Performed if analyser flags are present.",

  indications: [
    "Distinguish bacterial vs viral infection and assess severity.",
    "Monitor marrow function in chemotherapy/immunosuppression.",
    "Detect leukaemia, myelodysplastic syndromes, and other marrow disorders.",
    "Monitor allergic and parasitic disease.",
    "Assess systemic inflammation and immune status."
  ],
  referenceRange: "See patient report.",
  analyticalLimitations: [
    "Abnormal/immature cells (blasts, atypical lymphocytes) may be misclassified; film review required if analyser flags present.",
    "Must be analysed within 6–8 hrs.",
    "Corticosteroids, stress, pregnancy alter differential."
  ],

  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: "2–3 mL EDTA",
  storageTransport: "Room temperature (18–25 °C), analyse within 6–8 hrs (max 24 hrs).",
  rejection: "See Appendix 7. Sample Rejection Criteria (All Departments)",
  methodology: "Automated 5-part differential on haematology analyser (flow cytometry/optical scatter/impedance).\nManual peripheral blood film when indicated.",

  turnaround: { routine: "Confirm with testing laboratory.", urgent: "Same day" },
  criticalAlert: "Neutrophils <0.5 × 10⁹/L (severe neutropenia).\nWBC >50 × 10⁹/L with blasts/abnormal populations.",
  diseaseAssociations: [
    "Neutrophilia: Acute bacterial infection, inflammation, stress, steroids, myeloproliferative disease.",
    "Neutropenia: Sepsis, viral infection, chemotherapy, aplastic anaemia.",
    "Lymphocytosis: Viral infections (EBV, CMV, HIV), CLL.",
    "Lymphopenia: Immunodeficiency, steroids, chemotherapy.",
    "Eosinophilia: Allergy, asthma, parasitic infection, hypereosinophilic syndromes.",
    "Monocytosis: Chronic infection (TB), autoimmune disease, haematological malignancy.",
    "Basophilia: Myeloproliferative disorders, hypersensitivity reactions."
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "wound-swab-culture",
  name: "Wound Swab Culture",
  synonyms: [],
  department: "microbiology",
  limsCode: "WOUND",
  flags: [],

  summary: "Culture of wound",
  description: "Culture of wound, pus, or surgical-site material to detect significant pathogens and perform AST. Helps distinguish colonisation from true infection when combined with clinical information.",

  indications: [
    "Suspected skin/soft tissue or surgical site infection.",
    "Chronic/non-healing wounds (e.g., diabetic foot ulcer).",
    "Abscess with discharge; post-operative wound sepsis.",
    "Monitor response to antibiotic therapy."
  ],
  referenceRange: "Expected: No significant growth",
  analyticalLimitations: [
    "Superficial swabs often reflect colonisation; deep tissue or aspirate is preferred.",
    "Prior antibiotics reduce yield.",
    "Anaerobes and fungi need appropriate sampling/transport and explicit request.",
    "Mixed growth may be hard to interpret without clinical details."
  ],

  sampleType: "Swab",
  containerColour: "Swab",
  sampleRequirements: [
    "Sterile wound swab in transport medium (surface or deep margin).",
    "Aspirated pus or tissue sample (preferred)."
  ],
  storageTransport: "Transport to lab within 2 hrs, if delayed, store at 2–8 °C (≤24 hrs).",
  rejection: "Dry swab with no visible material.",
  methodology: "Culture on non-selective and selective media; aerobic ± anaerobic incubation as indicated.\nIdentification by biochemical methods or MALDI-TOF.\nAST according to CLSI/EUCAST.",

  turnaround: { routine: "2 - 3 days", urgent: "" },
  criticalAlert: "Multidrug-resistant organisms (MRSA, ESBL, CRE, etc.) or invasive pathogens from deep samples → urgent notification and infection control alert.",
  diseaseAssociations: [
    "Cellulitis, abscess, diabetic foot infection.",
    "Post-operative/surgical site infection.",
    "Necrotising soft tissue infection."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    { group: "Typical organisms", items: [
    ] },
    { group: "Gram-positive", items: [
      "Staphylococcus aureus (incl. MRSA)",
      "β-haemolytic Streptococcus spp.",
      "Enterococcus spp."
    ] },
    { group: "Gram-negative", items: [
      "E. coli",
      "Klebsiella spp.",
      "Proteus spp.",
      "P. aeruginosa",
      "other non-fermenters."
    ] },
    { group: "Reported organisms", items: [
      "Anaerobes and yeasts/moulds if clinically indicated and requested."
    ] }
  ],

  appendixRefs: ["appendix-1", "appendix-2", "appendix-3", "appendix-4", "appendix-5", "appendix-6", "appendix-7", "appendix-8", "appendix-9a", "appendix-9b", "appendix-12"],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
}
];
