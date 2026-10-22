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
  synonyms: ["ABO/RhD Blood Group", "Blood Group Typing", "ABO and RhD Grouping"],
  department: "blood-bank",
  limsCode: "BLD GRP",
  flags: ["stat"],
  summary: "Determines ABO blood group and RhD status for transfusion, antenatal screening and donor compatibility.",
  description: "Determines the patient's ABO blood group (A, B, AB or O) and Rhesus D (RhD) antigen status using red cell agglutination testing.",
  indications: [
    "Pre-transfusion blood grouping",
    "Antenatal screening",
    "Blood donor grouping",
    "Pre-transplant assessment",
    "Investigation of haemolytic disease of the fetus and newborn (HDFN)"
  ],
  referenceRange: [
    "Not applicable. Results are reported as:",
    "ABO: A, B, AB or O",
    "RhD: Positive or Negative"
  ],
  analyticalLimitations: [
    "Recent transfusion or stem cell transplantation may cause mixed-field reactions.",
    "Weak or variant ABO/RhD antigen expression may require additional investigation.",
    "Autoantibodies, cold agglutinins or paraproteins may interfere with grouping.",
    "ABO discrepancies must be resolved before routine blood group assignment."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Pink EDTA",
  sampleRequirements: [
    "EDTA whole blood, typically 4–6 mL for adults, or an appropriately validated paediatric volume.",
    "Positive patient identification and correct specimen labelling are essential."
  ],
  storageTransport: "Transport promptly. Store at 2–8 °C if testing is delayed. Follow local validated specimen stability and pre-transfusion sample validity requirements.",
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments).",
  methodology: "Forward and reverse ABO grouping and RhD typing using tube or column agglutination methods, as validated by the laboratory.",
  turnaround: {
    routine: "Same day.",
    urgent: "Urgent testing available according to laboratory capability."
  },
  criticalAlert: [
    "Unresolved ABO/RhD discrepancies, suspected incorrect patient identification or transfusion incompatibility require immediate laboratory investigation and communication.",
    "See Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Acute haemolytic transfusion reactions due to ABO-incompatible transfusion",
    "Haemolytic disease of the fetus and newborn (HDFN) due to maternal red cell alloantibodies"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-7"
  ],
  lastReviewed: "2026-09",
  added: "2026-10-02",
  updated: "2026-10-12"
},

{
  id: "acid-fast-bacilli-stain",
  name: "Acid-Fast Bacilli (AFB) Stain",
  synonyms: ["AFB Smear", "Acid-Fast Smear Microscopy", "Ziehl–Neelsen Stain"],
  department: "microbiology",
  limsCode: "AFB",
  flags: ["stat"],
  summary: "Microscopic detection of acid-fast bacilli.",
  description: "Microscopic detection of acid-fast bacilli in clinical specimens, primarily for the investigation of tuberculosis (TB) and other mycobacterial infections.",
  indications: [
    "Investigation of suspected pulmonary or extrapulmonary TB.",
    "Assessment of potential infectiousness in pulmonary TB.",
    "Treatment monitoring when indicated by national TB guidelines.",
    "Investigation of suspected non-tuberculous mycobacterial infection."
  ],
  referenceRange: [
    "Negative: No acid-fast bacilli seen.",
    "Positive: Acid-fast bacilli detected; graded according to the validated microscopy reporting system."
  ],
  analyticalLimitations: [
    "Less sensitive than mycobacterial culture or WHO-recommended molecular diagnostic tests.",
    "Cannot differentiate Mycobacterium tuberculosis complex from non-tuberculous mycobacteria.",
    "A negative smear does not exclude TB, particularly in patients with low bacillary loads.",
    "Cannot distinguish viable from non-viable bacilli or determine drug resistance.",
    "Sensitivity depends on specimen quality, bacillary concentration and staining technique."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Sputum collected in a sterile, leak-proof container; number and timing of specimens according to the national TB diagnostic algorithm.",
    "Other specimens: bronchoalveolar lavage, cerebrospinal fluid, pleural fluid, tissue or aspirates, as clinically indicated.",
    "Submit adequate specimen volume according to laboratory requirements."
  ],
  storageTransport: [
    "Transport promptly in a sealed, leak-proof container. Refrigerate at 2–8 °C if processing is delayed, according to local specimen stability requirements.",
    "See Appendices 9a and 9b."
  ],
  rejection: [
    "Unlabelled or incorrectly labelled specimens.",
    "Leaking or unsuitable containers.",
    "Inadequate specimen quantity or quality, according to laboratory criteria.",
    "Salivary specimens may require recollection when sputum is requested.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Ziehl–Neelsen staining with bright-field microscopy.",
  turnaround: {
    routine: "Same day, subject to laboratory operating hours and specimen receipt.",
    urgent: ""
  },
  criticalAlert: [
    "New positive AFB smear results in patients with suspected pulmonary TB require prompt notification to the requesting clinician and relevant TB/infection prevention services, according to local policy.",
    "Organisms Reported",
    "Acid-fast bacilli detected or not detected, with smear grading where applicable. Species identification requires additional molecular testing or culture."
  ],
  diseaseAssociations: [
    "Pulmonary and extrapulmonary tuberculosis.",
    "Non-tuberculous mycobacterial infections.",
    "Other acid-fast organisms, depending on staining method."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Acid-fast bacilli detected or not detected, with smear grading where applicable. Species identification requires additional molecular testing or culture."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "activated-partial-thromboplastin-time",
  name: "Activated Partial Thromboplastin Time (APTT)",
  synonyms: ["Partial Thromboplastin Time (PTT)", "Activated PTT"],
  department: "haematology",
  limsCode: "APTT",
  flags: ["critical", "stat"],
  summary: "Assay assessing the intrinsic and common coagulation pathways.",
  description: "Clotting assay assessing the intrinsic and common coagulation pathways. Used to investigate bleeding disorders and monitor unfractionated heparin therapy.",
  indications: [
    "Investigation of unexplained bleeding or suspected coagulation factor deficiencies.",
    "Monitoring intravenous unfractionated heparin (UFH) therapy.",
    "Investigation of prolonged clotting times, including suspected lupus anticoagulant or factor inhibitors.",
    "Assessment of suspected disseminated intravascular coagulation (DIC), alongside other coagulation tests."
  ],
  referenceRange: [
    "24–36 seconds (general guide only).",
    "Refer to the analyser- and reagent-specific reference interval reported by the LIMS. Therapeutic APTT ranges for heparin monitoring must be locally validated."
  ],
  analyticalLimitations: [
    "Prolonged by heparin, some other anticoagulants, lupus anticoagulant and coagulation factor inhibitors.",
    "A normal APTT does not exclude mild coagulation factor deficiencies or von Willebrand disease.",
    "Incorrect citrate-to-blood ratio, including underfilled tubes, may cause inaccurate results.",
    "Haemolysis, lipaemia, clotted specimens and heparin contamination may interfere with testing.",
    "APTT is not suitable for routine monitoring of low-molecular-weight heparin."
  ],
  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: [
    "Whole blood collected into a correctly filled 3.2% sodium citrate tube (typically 2.7 mL blood, depending on tube specification).",
    "Maintain a 9:1 blood-to-citrate ratio."
  ],
  storageTransport: [
    "Transport promptly at room temperature (18–25 °C).",
    "Routine APTT: test within 4 hours of collection.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Underfilled or clotted citrate specimens.",
    "Incorrect anticoagulant or unsuitable collection tube.",
    "Specimens exceeding validated stability limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Clot-based assay using optical or mechanical clot detection, depending on the analyser.",
  turnaround: { routine: "Same day.", urgent: "Urgent testing according to laboratory availability." },
  criticalAlert: [
    "Markedly prolonged or unexpected APTT results, particularly in patients with active bleeding or receiving anticoagulant therapy, require prompt review and notification according to laboratory critical-result thresholds.",
    "See Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Haemophilia A and B",
    "von Willebrand disease",
    "Disseminated intravascular coagulation (DIC)",
    "Coagulation factor deficiencies or inhibitors",
    "Lupus anticoagulant"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "full-blood-count",
  name: "Full Blood Count",
  synonyms: [
    "Full Blood Count (FBC)",
    "Complete Blood Count (CBC)",
    "Full Blood Examination (FBE)"
  ],
  department: "haematology",
  limsCode: "CBC",
  flags: ["critical", "stat"],
  summary: "Complete Blood Count",
  description: [
    "Measures haemoglobin, red blood cell count, haematocrit, red cell indices, white blood cell count and platelet count. A white cell differential is reported according to the validated local service.",
    "Blood film examination is performed when indicated. See individual component entries for interpretation."
  ],
  indications: [
    "Investigation of suspected anaemia, infection, bleeding or haematological disease.",
    "Assessment of unexplained symptoms or clinically indicated baseline testing.",
    "Monitoring chronic disease, chemotherapy and other treatments affecting blood cells.",
    "FBC findings support assessment but do not independently establish the cause of an abnormality."
  ],
  referenceRange: [
    "Refer to the validated LIMS report and individual component entries. Intervals depend on age, sex and relevant physiological circumstances, including pregnancy.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Clotting, inadequate mixing, unsuitable tube filling and collection-related dilution can produce unreliable results.",
    "Storage delay may alter cell size, differential results and blood film morphology.",
    "Lipaemia, cold agglutinins and other interferences may affect haemoglobin or red cell indices.",
    "Platelet clumping may cause a falsely low platelet count and requires laboratory verification.",
    "Analyser flags suggest possible abnormalities; they are not diagnoses. Blood film review follows validated local criteria.",
    "A normal FBC does not exclude all haematological disease."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Whole blood collected into an approved ethylenediaminetetraacetic acid (EDTA) tube.",
    "Fill to the tube's specified volume; confirm minimum volume and paediatric collection requirements locally.",
    "Mix gently by inversion immediately after collection according to tube instructions.",
    "Avoid contamination or dilution from intravenous infusions.",
    "Do not centrifuge the specimen.",
    "See Appendix 6: Order of Draw Quick Guide and Tube Reference."
  ],
  storageTransport: [
    "Transport promptly and analyse within locally validated limits.",
    "Protect from excessive heat and freezing. If testing is delayed, follow approved storage instructions; requirements may differ for counts, differential and morphology.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Clotted specimen or incorrect anticoagulant.",
    "Insufficient or unsuitable tube filling that compromises testing.",
    "Deterioration, contamination or interference preventing reliable results.",
    "Platelet clumping requires investigation and may require recollection under laboratory direction.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: [
    "Automated haematology analyser for cell counts, haemoglobin and red cell indices, with differential classification according to local capability.",
    "Manual differential and blood film examination are performed when indicated."
  ],
  turnaround: {
    routine: "Usually same day.",
    urgent: "Urgent testing and additional blood film review depend on local service arrangements."
  },
  criticalAlert: [
    "Refer to individual component entries and approved thresholds.",
    "Critical counts or significant blood film findings require prompt notification according to Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "Suspected artefacts require verification without unnecessary delay in clinical communication."
  ],
  diseaseAssociations: [
    "Refer to individual components. Relevant conditions include anaemia, infection, cytopenias, marrow disorders and haematological malignancy."
  ],
  conversionFactors: "No single conversion factor applies to the complete panel. Refer to individual component entries and Appendix 10: Unit Conversion Factors (SI Conventional Units).",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "alanine-aminotransferase",
  name: "Alanine Aminotransferase (ALT)",
  synonyms: ["Alanine Transaminase", "Serum Glutamic-Pyruvic Transaminase (SGPT)"],
  department: "biochemistry",
  limsCode: "ALT, ALTV (analyser-dependent)",
  flags: [],
  summary: "Enzyme found in the liver.",
  description: "Enzyme predominantly found in the liver. Elevated ALT activity is an indicator of hepatocellular injury.",
  indications: [
    "Detection and monitoring of hepatocellular injury.",
    "Investigation of suspected acute or chronic liver disease.",
    "Monitoring potential drug-induced liver injury.",
    "Component of liver function test (LFT) panels."
  ],
  referenceRange: [
    "See Appendix 12: General Guide to Reference Ranges.",
    "Refer to the analyser-specific reference interval reported by the LIMS."
  ],
  analyticalLimitations: [
    "ALT is not disease-specific and may also be elevated in skeletal muscle injury.",
    "Haemolysis, lipaemia and delayed sample separation may affect results, depending on the analytical method.",
    "ALT activity does not reliably indicate the severity of liver dysfunction.",
    "Results should be interpreted alongside other liver tests and clinical findings."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum, typically 2–5 mL whole blood collected in a serum tube. Lithium-heparin plasma may be acceptable where validated.",
  storageTransport: [
    "Separate serum or plasma from cells promptly according to laboratory procedures.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Incorrect specimen type or collection tube.",
    "Significant haemolysis or other interference exceeding analyser limits.",
    "Inadequate specimen volume or unsuitable storage conditions.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Enzymatic spectrophotometric assay.",
  turnaround: { routine: "Same day.", urgent: "" },
  criticalAlert: [
    "Markedly elevated ALT may indicate acute hepatocellular injury and should be assessed alongside clinical findings and other liver tests.",
    "See Appendices 4 and 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Viral hepatitis",
    "Metabolic dysfunction-associated steatotic liver disease (MASLD)",
    "Drug-induced liver injury",
    "Ischaemic hepatitis",
    "Cirrhosis and other chronic liver diseases",
    "Skeletal muscle injury"
  ],
  conversionFactors: "Not applicable. Reported in U/L.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "albumin",
  name: "Albumin",
  synonyms: ["Serum Albumin", "Plasma Albumin"],
  department: "biochemistry",
  limsCode: "ALB",
  flags: [],
  summary: "Major plasma protein regulating oncotic pressure and transporting multiple molecules",
  description: "Measures albumin, the major plasma protein synthesised by the liver. Albumin maintains plasma oncotic pressure and transports substances including hormones, bilirubin and medications.",
  indications: [
    "Support assessment of hepatic synthetic function, particularly in chronic liver disease.",
    "Investigate hypoalbuminaemia, including suspected renal or gastrointestinal protein loss.",
    "Assist assessment of oedema and chronic or inflammatory illness, alongside clinical findings and other tests."
  ],
  referenceRange: [
    "See Appendix 12: General Guide to Reference Ranges.",
    "Refer to the validated, analyser-specific reference interval on the laboratory information management system (LIMS) report."
  ],
  analyticalLimitations: [
    "Low albumin is non-specific; inflammation, protein loss and fluid balance affect its concentration. Albumin should not be used to diagnose malnutrition or monitor nutritional response.",
    "Prolonged venous stasis may increase the measured concentration through haemoconcentration.",
    "Haemolysis, icterus and lipaemia may interfere, depending on the method and degree of interference.",
    "Bromocresol green (BCG) methods may overestimate albumin, particularly at low concentrations with increased acute-phase globulins. Results from different methods may not be directly comparable."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum or lithium-heparin plasma, as validated for the laboratory's assay.",
    "Use the approved collection tube and locally specified minimum volume. Avoid prolonged venous stasis.",
    "See Appendix 6: Order of Draw Quick Guide and Tube Reference."
  ],
  storageTransport: [
    "Separate serum or plasma from cells promptly. Follow validated laboratory storage and stability requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess haemolysis, icterus and lipaemia against validated assay interference limits; their presence alone does not require rejection."
  ],
  methodology: "Colourimetric dye-binding assay, commonly using bromocresol green (BCG) or bromocresol purple (BCP). Confirm the method used locally.",
  turnaround: { routine: "Same day, subject to local laboratory service arrangements.", urgent: "" },
  criticalAlert: [
    "Marked hypoalbuminaemia warrants clinical assessment. Immediate notification is required only where the result meets approved local critical or high-risk reporting criteria.",
    "See Appendix 4: Alert List (Critical / Life-Threatening Results Requiring Immediate Notification), and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Hypoalbuminaemia: advanced chronic liver disease, nephrotic syndrome, protein-losing enteropathy, inflammation, sepsis and extensive burns. It may coexist with malnutrition but does not establish the diagnosis.",
    "Hyperalbuminaemia: usually dehydration or haemoconcentration."
  ],
  conversionFactors: [
    "Reported in g/L.",
    "g/L ÷ 10 = g/dL.",
    "g/dL × 10 = g/L.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "alkaline-phosphatase",
  name: "Alkaline Phosphatase (ALP)",
  synonyms: ["ALP", "Alk Phos"],
  department: "biochemistry",
  limsCode: "ALPK",
  flags: [],
  summary: "Enzyme predominantly derived from liver and bone.",
  description: "Enzyme predominantly derived from liver and bone, used to investigate hepatobiliary disease and disorders of bone metabolism.",
  indications: [
    "Investigation of cholestatic liver disease and biliary obstruction.",
    "Assessment of bone disorders associated with increased bone turnover, including Paget disease, rickets and bone metastases.",
    "Investigation of unexplained elevated ALP.",
    "Assessment of physiological elevations during childhood, adolescence and pregnancy."
  ],
  referenceRange: [
    "See Appendix 12: General Guide to Reference Ranges.",
    "Refer to the age-, sex- and analyser-specific reference interval reported by the LIMS.",
    "Units: U/L."
  ],
  analyticalLimitations: [
    "ALP is not tissue-specific; elevated results may originate from liver, bone, intestine or placenta.",
    "Gamma-glutamyl transferase (GGT) assists in identifying hepatobiliary sources of elevated ALP.",
    "Haemolysis and other specimen interferences may affect results depending on the analytical method.",
    "EDTA and citrate anticoagulants may falsely decrease ALP activity."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum or lithium-heparin plasma, as validated by the laboratory. Typically 2–5 mL blood, depending on collection tube and analyser requirements.",
  storageTransport: [
    "Separate serum or plasma from cells promptly. Refrigerate at 2–8 °C if testing is delayed, according to validated laboratory stability requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Incorrect specimen type or anticoagulant.",
    "Significant haemolysis or interference exceeding analyser limits.",
    "Inadequate volume or unsuitable specimen condition.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Enzymatic colorimetric assay using spectrophotometric measurement.",
  turnaround: { routine: "Same day.", urgent: "" },
  criticalAlert: [
    "No universal critical ALP threshold. Markedly abnormal results should be assessed with clinical findings and other laboratory investigations.",
    "See Appendices 4 and 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Elevated: Cholestasis, biliary obstruction, Paget disease, rickets, osteomalacia and bone metastases.",
    "Decreased: Hypophosphatasia, malnutrition and certain mineral deficiencies.",
    "Physiological elevation: Bone growth during childhood/adolescence and pregnancy."
  ],
  conversionFactors: "Not applicable. Reported in U/L.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "amylase",
  name: "Amylase",
  synonyms: ["Serum Amylase", "Total Amylase"],
  department: "biochemistry",
  limsCode: "AMY",
  flags: [],
  summary: "Digestive enzyme used mainly to investigate pancreatitis",
  description: "Digestive enzyme produced mainly by the pancreas and salivary glands. Measurement assists in the investigation of pancreatic and other abdominal disorders.",
  indications: [
    "Investigation of suspected acute pancreatitis when lipase is unavailable.",
    "Investigation of salivary gland inflammation, including parotitis.",
    "Assessment of selected acute abdominal conditions."
  ],
  referenceRange: [
    "See Appendix 12: General Guide to Reference Ranges.",
    "Refer to the analyser-specific reference interval reported by the LIMS.",
    "Units: U/L."
  ],
  analyticalLimitations: [
    "Less sensitive and specific than lipase for acute pancreatitis.",
    "Normal amylase does not exclude acute pancreatitis, particularly with delayed presentation or hypertriglyceridaemia.",
    "Elevated amylase is not specific to pancreatic disease and may occur with salivary gland disorders, renal impairment and other abdominal conditions.",
    "Haemolysis and lipaemia may interfere, depending on the analytical method.",
    "Amylase levels do not reliably indicate pancreatitis severity."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum or lithium-heparin plasma, as validated by the laboratory. Typically 2–5 mL blood, depending on collection tube and analyser requirements.",
  storageTransport: [
    "Separate serum or plasma from cells promptly. Refrigerate at 2–8 °C if testing is delayed, according to validated laboratory stability requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments).",
  methodology: "Enzymatic colorimetric assay with spectrophotometric measurement.",
  turnaround: { routine: "Same day.", urgent: "" },
  criticalAlert: [
    "Amylase greater than three times the assay-specific upper reference limit supports acute pancreatitis when accompanied by compatible clinical findings. This is a diagnostic criterion, not an automatic critical-result threshold.",
    "See Appendices 4 and 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Acute pancreatitis and pancreatic complications",
    "Salivary gland inflammation, including mumps",
    "Intestinal obstruction or perforation",
    "Renal impairment",
    "Macroamylasaemia"
  ],
  conversionFactors: "Not applicable. Reported in U/L.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "hepatitis-b-core-antibody",
  name: "Hepatitis B Core Antibody (Anti-HBc)",
  synonyms: [
    "Anti-HBc",
    "HBcAb",
    "Hepatitis B Core Total Antibody (if total antibody assay)"
  ],
  department: "serology",
  limsCode: "AHBC",
  flags: [],
  summary: "Detects antibodies to hepatitis B virus.",
  description: "Detects antibodies to hepatitis B virus (HBV) core antigen, indicating previous or current natural HBV infection. Total anti-HBc detects IgM and IgG antibodies.",
  indications: [
    "Assessment of previous or current HBV infection as part of hepatitis B serology.",
    "Differentiation of natural infection from vaccine-induced immunity.",
    "Investigation of isolated anti-HBc reactivity or suspected occult HBV infection.",
    "Assessment of HBV reactivation risk before immunosuppressive treatment."
  ],
  referenceRange: [
    "Non-reactive: Anti-HBc not detected.",
    "Reactive: Anti-HBc detected.",
    "Equivocal: Repeat or investigate according to assay instructions, where applicable.",
    "See Appendix 14: Hepatitis B & C Serology Interpretation."
  ],
  analyticalLimitations: [
    "Total anti-HBc alone cannot distinguish acute, chronic or resolved HBV infection.",
    "False-positive or false-negative results may occur, particularly with low antibody concentrations or immunosuppression.",
    "Reactive anti-HBc alone does not establish active infection or immunity.",
    "Recent HBV infection may not yet produce detectable antibodies.",
    "Occult HBV infection requires HBV DNA testing for confirmation."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum, collected in an appropriate serum tube. Typically 2–5 mL blood, depending on assay requirements.",
  storageTransport: [
    "Separate serum promptly. Refrigerate at 2–8 °C if testing is delayed, according to manufacturer-validated stability requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments).",
  methodology: "Enzyme-linked immunosorbent assay (ELISA) or chemiluminescent immunoassay (CLIA), depending on the laboratory platform.",
  turnaround: { routine: "1–3 days, subject to laboratory testing schedules.", urgent: "" },
  criticalAlert: [
    "Reactive anti-HBc alone is not an automatic critical result. Interpret with HBsAg and anti-HBs. Additional testing or clinical follow-up may be required, particularly before immunosuppressive treatment.",
    "See Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Acute or chronic hepatitis B infection",
    "Resolved hepatitis B infection",
    "Occult hepatitis B infection",
    "Risk of HBV reactivation during immunosuppression"
  ],
  conversionFactors: "Not applicable. Qualitative result.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "red-cell-antibody-screen",
  name: "Red Cell Antibody Screen (Indirect Antiglobulin Test – IAT)",
  synonyms: [
    "Antibody Screen",
    "Indirect Coombs Test",
    "Red Cell Alloantibody Screen"
  ],
  department: "blood-bank",
  limsCode: "IAGT",
  flags: ["stat"],
  summary: "Detects unexpected red cell antibodies in patient plasma.",
  description: "Detects unexpected red cell antibodies in patient plasma that may cause haemolytic transfusion reactions or haemolytic disease of the fetus and newborn (HDFN).",
  indications: [
    "Pre-transfusion compatibility assessment.",
    "Routine antenatal antibody screening.",
    "Investigation of red cell alloimmunisation following pregnancy or transfusion.",
    "Investigation of suspected immune-mediated haemolysis."
  ],
  referenceRange: [
    "Negative: No red cell antibodies detected by the screening method.",
    "Positive: Red cell antibody reactivity detected; further identification required."
  ],
  analyticalLimitations: [
    "Low-concentration or weakly reactive antibodies may not be detected.",
    "Previously formed antibodies may become undetectable over time but remain clinically significant.",
    "Autoantibodies may interfere with antibody screening and identification.",
    "A negative screen does not exclude all clinically significant red cell antibodies."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA whole blood in a correctly filled tube, typically 4–10 mL for adults or an appropriately validated paediatric volume.",
    "Correct patient identification, specimen labelling and collection date/time are essential."
  ],
  storageTransport: [
    "Transport promptly. Refrigerate at 2–8 °C if testing is delayed, according to laboratory procedures.",
    "Pre-transfusion specimen validity must follow the laboratory's approved policy, including the 72-hour requirement where applicable."
  ],
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments).",
  methodology: "Indirect antiglobulin test using column agglutination (gel card) or conventional tube technique, as validated by the laboratory.",
  turnaround: {
    routine: "Same day. Positive screens requiring antibody identification may take longer.",
    urgent: "Urgent testing according to laboratory capability."
  },
  criticalAlert: [
    "A positive antibody screen requires further investigation before routine issue of compatible red cells. Clinically significant antibodies must be communicated to the transfusion service and requesting clinician as appropriate.",
    "See Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Red cell alloimmunisation following pregnancy or transfusion",
    "Haemolytic transfusion reactions",
    "Haemolytic disease of the fetus and newborn (HDFN)",
    "Immune-mediated haemolysis"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "aspartate-aminotransferase",
  name: "Aspartate Aminotransferase (AST)",
  synonyms: [
    "Aspartate Transaminase",
    "Serum Glutamic-Oxaloacetic Transaminase (SGOT)"
  ],
  department: "biochemistry",
  limsCode: "AST",
  flags: [""],
  summary: "Enzymatic test for cellular injury.",
  description: "Enzyme found in the liver, skeletal muscle, cardiac muscle and red blood cells. Elevated levels indicate cellular injury but are not specific to liver disease.",
  indications: [
    "Investigation and monitoring of hepatocellular injury, including hepatitis.",
    "Assessment of liver disease alongside ALT and other liver tests.",
    "Investigation of suspected muscle injury when clinically indicated."
  ],
  referenceRange: [
    "See Appendix 12: General Guide to Reference Ranges.",
    "Refer to the age-, sex- and analyser-specific reference interval reported by the LIMS.",
    "Units: U/L."
  ],
  analyticalLimitations: [
    "AST is less liver-specific than ALT and may increase with skeletal or cardiac muscle injury.",
    "Haemolysis may cause falsely elevated results.",
    "Lipaemia and icterus may interfere depending on the analytical method.",
    "AST levels alone do not establish the cause or severity of liver disease."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum or lithium-heparin plasma, as validated by the laboratory. Typically 5 mL blood, depending on collection tube and analyser requirements.",
  storageTransport: [
    "Separate serum or plasma promptly. Store and transport according to validated laboratory requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: "See Appendix 7: Sample Rejection Criteria (All Departments).",
  methodology: "Enzymatic multipoint rate assay.",
  turnaround: { routine: "Same day.", urgent: "" },
  criticalAlert: [
    "No universal AST critical threshold. Markedly elevated results should be interpreted with clinical findings and other investigations.",
    "See Appendices 4 and 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Acute and chronic hepatitis",
    "Cirrhosis and other hepatocellular diseases",
    "Skeletal muscle injury or rhabdomyolysis",
    "Cardiac muscle injury",
    "Haemolysis"
  ],
  conversionFactors: "Not applicable. Reported in U/L.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "bilirubin-unconjugated-conjugated",
  name: "Bilirubin – Unconjugated/Conjugated",
  synonyms: [
    "Bilirubin Fractions",
    "Indirect Bilirubin and Direct Bilirubin (method-dependent terminology)"
  ],
  department: "biochemistry",
  limsCode: "BILI-U (Unconjugated), BILI-C (Conjugated)",
  flags: ["stat"],
  summary: "Test measuring the breakdown of haem to investigate jaundice.",
  description: "Bilirubin is produced during haem breakdown. Measurement of total bilirubin and its fractions support investigation of jaundice, haemolysis and hepatobiliary disease. Indirect bilirubin is usually calculated as total minus direct; routine direct assays also measure delta bilirubin.",
  indications: [
    "Investigate jaundice and distinguish predominantly unconjugated from conjugated hyperbilirubinaemia.",
    "Assess suspected haemolysis, hepatocellular disease or cholestasis alongside other laboratory findings.",
    "Investigate prolonged neonatal jaundice or suspected neonatal cholestasis.",
    "Assess neonatal hyperbilirubinaemia using total serum bilirubin and the approved neonatal guideline."
  ],
  referenceRange: [
    "Refer to the validated, age- and method-specific reference intervals reported by the LIMS. Neonatal clinical decision limits depend on postnatal age in hours, gestational age and risk factors.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Light exposure degrades bilirubin and may falsely lower results.",
    "Haemolysis and lipaemia may interfere; effects and acceptable limits depend on the assay.",
    "Direct bilirubin is not identical to conjugated bilirubin because routine assays also detect delta bilirubin.",
    "Calculated indirect bilirubin depends on the accuracy of both total and direct measurements."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum; lithium-heparin plasma is acceptable.",
    "Use an approved tube and the laboratory's minimum collection volume. Neonatal microcollection requires an approved container and adequate sample volume.",
    "Protect from light from collection onwards.",
    "For neonates, provide date/time of birth, gestational age and collection date/time."
  ],
  storageTransport: [
    "Protect from light and transport promptly. Separate serum or plasma from cells promptly. Follow locally validated temperature, stability and freezing requirements for each fraction.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Assess unsuitable containers, insufficient volume, excessive light exposure and storage outside validated limits. Haemolysed or lipaemic specimens require assessment against validated interference limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)"
  ],
  methodology: "Automated colorimetric measurement of total and direct bilirubin; diazo methodology if confirmed locally. Indirect bilirubin is usually calculated as total minus direct. Confirm whether BILI-U and BILI-C represent calculated indirect/direct results or specifically measured fractions.",
  turnaround: {
    routine: "Same day for routine requests, subject to local service availability.",
    urgent: "Urgent neonatal requests require prioritised processing under the local pathway."
  },
  criticalAlert: [
    "Notify results meeting approved laboratory alert criteria. See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "No single bilirubin concentration defines neonatal risk across all ages and gestations. Interpret total serum bilirubin using the approved neonatal guideline; do not subtract the direct/conjugated fraction.",
    "Jaundice within the first 24 hours requires urgent clinical assessment and serum bilirubin measurement.",
    "Raised direct/conjugated bilirubin in an infant requires prompt clinical assessment for cholestasis."
  ],
  diseaseAssociations: [
    "Predominantly unconjugated: haemolysis, Gilbert syndrome and neonatal unconjugated hyperbilirubinaemia.",
    "Predominantly conjugated/direct: cholestasis, biliary obstruction and hepatocellular disease."
  ],
  conversionFactors: [
    "μmol/L × 0.0585 = mg/dL.",
    "mg/dL × 17.1 ≈ μmol/L.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "blood-culture",
  name: "Blood Culture",
  synonyms: ["Blood Culture and Sensitivity", "Blood C&S", "Bacteraemia Culture"],
  department: "microbiology",
  limsCode: "BC",
  flags: ["critical", "stat"],
  summary: "Detects bacteria and yeasts in the bloodstream.",
  description: "Detects bacteria and yeasts in the bloodstream. Essential for investigating suspected bloodstream infection, sepsis and infective endocarditis.",
  indications: [
    "Suspected sepsis or bloodstream infection.",
    "Suspected infective endocarditis.",
    "Suspected catheter-related bloodstream infection.",
    "Follow-up of selected bloodstream infections, including Staphylococcus aureus bacteraemia."
  ],
  referenceRange: ["No growth after the validated incubation period."],
  analyticalLimitations: [
    "Inadequate blood volume reduces sensitivity.",
    "Prior antimicrobial treatment may reduce organism recovery.",
    "Contamination during collection may produce false-positive results.",
    "Some fastidious organisms require specialised culture methods or additional investigations.",
    "Negative cultures do not exclude bloodstream infection."
  ],
  sampleType: "Whole blood",
  containerColour: "Aerobic (blue) / Anaerobic (purple) / Paediatric (pink)",
  sampleRequirements: [
    "Collect aseptically, preferably before antimicrobial treatment without delaying urgent therapy.",
    "Adults: Preferably two blood culture sets from separate venepunctures. Each set generally contains one aerobic and one anaerobic bottle, with 8–10 mL blood per bottle.",
    "Paediatric: Use appropriate paediatric blood culture bottles. Collection volume depends on patient weight and bottle specifications.",
    "Neonates: Use a validated neonatal/paediatric bottle with weight-appropriate collection volume.",
    "Record collection time, collection site and relevant antimicrobial treatment."
  ],
  storageTransport: [
    "Transport promptly at room temperature. Do not refrigerate or freeze inoculated blood culture bottles. Load into the automated culture system as soon as possible.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Leaking, damaged, incorrectly identified or unsuitable containers must be assessed according to laboratory policy.",
    "Underfilled bottles or delayed specimens should generally be processed with appropriate documentation rather than automatically rejected.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Automated continuous-monitoring blood culture system, followed by Gram stain, organism identification and antimicrobial susceptibility testing when growth is detected.",
  turnaround: {
    routine: "Positive culture: Preliminary Gram stain reported promptly when growth is detected; identification and susceptibility results follow. Negative culture: Final report generally after 5 days, or according to the validated incubation protocol. Special investigations: Additional incubation or referral testing may be required.",
    urgent: ""
  },
  criticalAlert: [
    "Positive blood culture Gram stain findings require urgent notification to the treating clinician according to laboratory policy.",
    "See Appendix 4: Alert List (Critical / Life-Threatening Results Requiring Immediate Notification) and Appendix 5: Critical / High-Risk Results Policy Summary",
    "Organisms Reported",
    "Common bloodstream pathogens:",
    "Staphylococcus aureus",
    "Streptococcus pneumoniae",
    "Escherichia coli",
    "Klebsiella pneumoniae",
    "Salmonella Typhi and Paratyphi",
    "Pseudomonas aeruginosa",
    "Other clinically significant organisms:",
    "Enterococcus spp.",
    "Acinetobacter spp.",
    "Candida spp.",
    "Potential skin contaminants:",
    "Coagulase-negative staphylococci",
    "Corynebacterium spp.",
    "Bacillus spp. (excluding B. anthracis)",
    "Cutibacterium acnes",
    "These organisms may also cause genuine bloodstream infection. Interpretation requires clinical correlation and consideration of the number of positive sets."
  ],
  diseaseAssociations: [
    "Sepsis and bacteraemia",
    "Infective endocarditis",
    "Catheter-related bloodstream infection",
    "Fungaemia"
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Common bloodstream pathogens",
      items: [
        "Staphylococcus aureus",
        "Streptococcus pneumoniae",
        "Escherichia coli",
        "Klebsiella pneumoniae",
        "Salmonella Typhi and Paratyphi",
        "Pseudomonas aeruginosa"
      ]
    },
    {
      group: "Other clinically significant organisms",
      items: ["Enterococcus spp.", "Acinetobacter spp.", "Candida spp."]
    },
    {
      group: "Potential skin contaminants",
      items: [
        "Coagulase-negative staphylococci",
        "Corynebacterium spp.",
        "Bacillus spp. (excluding B. anthracis)",
        "Cutibacterium acnes",
        "These organisms may also cause genuine bloodstream infection. Interpretation requires clinical correlation and consideration of the number of positive sets."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-14",
  updated: ""
},

{
  id: "blood-film-morphology",
  name: "Blood Film Morphology",
  synonyms: [
    "Peripheral Blood Film",
    "Peripheral Blood Smear (PBS)",
    "Blood Smear Review"
  ],
  department: "haematology",
  limsCode: "BL-FILM",
  flags: ["stat"],
  summary: "Microscopic examination of a stained peripheral blood film.",
  description: "Microscopic examination of a stained peripheral blood film to assess red blood cell, white blood cell and platelet morphology, and identify abnormal cells or blood parasites.",
  indications: [
    "Investigation of anaemia and other haematological abnormalities.",
    "Assessment of suspected leukaemia or other haematological malignancies.",
    "Investigation of abnormal full blood count (FBC) or analyser findings.",
    "Detection of blood parasites, with dedicated malaria testing when clinically indicated."
  ],
  referenceRange: [
    "Descriptive morphological assessment; no numerical reference interval."
  ],
  analyticalLimitations: [
    "Interpretation depends on film preparation, staining quality and examiner expertise.",
    "Delayed film preparation may produce cellular artefacts.",
    "Low numbers of abnormal cells or parasites may not be detected.",
    "A normal blood film does not exclude haematological disease."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Glass slide",
  sampleRequirements: [
    "EDTA whole blood:",
    "Adults: Approximately 5 mL.",
    "Paediatric: Approximately 2 mL in an appropriate paediatric EDTA tube.",
    "Smaller validated volumes may be acceptable."
  ],
  storageTransport: [
    "Prepare the blood film promptly after collection, preferably within 2 hours.",
    "If examination is delayed, store EDTA blood according to validated laboratory procedures. Refrigeration does not prevent all morphological changes.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Clotted or incorrectly identified specimens.",
    "Poorly prepared or stained films unsuitable for interpretation.",
    "Specimens with significant storage-related morphological artefacts.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Manual light microscopy of a peripheral blood film stained using a Romanowsky-type stain (e.g. Wright–Giemsa).",
  turnaround: { routine: "1–2 days.", urgent: "Same day." },
  criticalAlert: [
    "Urgent notification of significant findings, including:",
    "Circulating blasts suggestive of acute leukaemia.",
    "Schistocytes suggestive of thrombotic microangiopathy.",
    "Suspected malaria parasites, according to the malaria notification protocol.",
    "Severe thrombocytopenia requires urgent notification according to the platelet count and laboratory critical-result policy.",
    "See Appendix 13: Critical Results Notification."
  ],
  diseaseAssociations: [
    "Iron deficiency, megaloblastic and haemolytic anaemias.",
    "Leukaemia and other haematological malignancies.",
    "Thrombotic microangiopathy.",
    "Malaria and other blood parasite infections.",
    "Platelet disorders."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "blood-gas-point-of-care",
  name: "Blood Gas (Arterial)-Point of Care",
  synonyms: ["Arterial blood gas", "ABG"],
  department: "icu",
  limsCode: "(POC analyser-specific)",
  flags: ["stat"],
  summary: "Point-of-care testing for arterial blood gas.",
  description: "Measures arterial blood pH and partial pressures of carbon dioxide (pCO₂) and oxygen (pO₂) to assess acid–base balance, ventilation and oxygenation. Bicarbonate (HCO₃⁻) and base excess are generally calculated. Oxygen saturation is calculated or measured by co-oximetry, depending on the analyser.",
  indications: [
    "Suspected respiratory failure.",
    "Assessment and monitoring of oxygen therapy or mechanical ventilation.",
    "Significant acid–base disturbances, including DKA, shock and sepsis.",
    "Selected critically ill or postoperative patients.",
    "Venous blood gases may suffice for acid–base assessment in DKA when arterial oxygenation assessment is not required."
  ],
  referenceRange: [
    "Use the locally validated arterial reference intervals on the analyser/LIMS report; see Appendix 12.",
    "Interpret pO₂ with age, inspired oxygen concentration and altitude. Reference intervals are distinct from oxygen-treatment targets and critical-result thresholds."
  ],
  analyticalLimitations: [
    "Air contamination, delayed analysis, inadequate mixing and clots can produce unreliable results.",
    "Excess liquid heparin or arterial-line flush contamination may dilute the specimen.",
    "Venous results are not interchangeable with arterial results; venous pO₂ cannot assess arterial oxygenation.",
    "Calculated oxygen saturation may be unreliable, particularly at low pO₂, and does not identify abnormal haemoglobin fractions.",
    "Blood gas findings alone do not diagnose or exclude pulmonary embolism."
  ],
  sampleType: "Whole blood",
  containerColour: "Blood gas syringe (POC)",
  sampleRequirements: [
    "Arterial whole blood collected anaerobically in an approved pre-heparinised blood gas syringe, preferably containing dry electrolyte-balanced heparin.",
    "Fill to the syringe's specified volume; remove air promptly, cap securely and mix gently.",
    "Prevent flush contamination when sampling from an arterial line.",
    "Record patient identifiers, arterial sampling site, collection time, oxygen delivery/estimated inspired oxygen concentration and relevant ventilator settings."
  ],
  storageTransport: [
    "Analyse immediately at the point of care. If transport is necessary, send promptly in the sealed syringe.",
    "Follow locally validated syringe/analyser instructions for maximum delay and temperature. Do not routinely place plastic blood gas syringes on ice. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Examples include identification errors, clotted specimens, unsuitable containers, insufficient filling for the collection device, persistent air contamination or delay beyond validated limits.",
    "A venous specimen must not be reported as arterial."
  ],
  methodology: "Analyser-specific electrochemical measurement of pH, pCO₂ and pO₂, with calculated acid–base parameters. Co-oximetry, where available, measures haemoglobin fractions and permits measured oxygen saturation reporting.",
  turnaround: {
    routine: "Confirm local availability and reporting arrangements.",
    urgent: "Urgent point-of-care testing; results usually available within minutes after analysis."
  },
  criticalAlert: [
    "Immediately communicate results meeting locally approved blood gas critical thresholds, with documented notification according to Appendices 4 and 5.",
    "Interpret marked acid–base or oxygenation abnormalities promptly in the clinical context."
  ],
  diseaseAssociations: [
    "Respiratory failure.",
    "Shock and sepsis.",
    "DKA and other metabolic acid–base disorders."
  ],
  conversionFactors: [
    "For pCO₂ and pO₂:",
    "mmHg → kPa: multiply by 0.1333.",
    "kPa → mmHg: multiply by 7.5006."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "blood-urea-nitrogen",
  name: "Blood Urea Nitrogen (BUN)",
  synonyms: ["Urea nitrogen", "blood urea"],
  department: "biochemistry",
  limsCode: "BUN",
  flags: ["stat"],
  summary: "Measures the nitrogen component of urea in serum.",
  description: "Measures the nitrogen component of urea, a product of protein metabolism formed in the liver and excreted mainly by the kidneys. Supports assessment of renal function but is also influenced by hydration, protein intake and catabolism.",
  indications: [
    "Assessment of renal impairment alongside creatinine and electrolytes.",
    "Assessment of dehydration or reduced renal perfusion.",
    "Supportive investigation of gastrointestinal bleeding or increased protein catabolism; not diagnostic alone."
  ],
  referenceRange: [
    "Use the validated age-appropriate reference interval and units on the LIMS report; see Appendix 12."
  ],
  analyticalLimitations: [
    "Limited specificity for reduced glomerular filtration: protein intake, catabolism, gastrointestinal bleeding, hydration and liver function affect results.",
    "An elevated result alone cannot distinguish prerenal, intrinsic renal and postrenal causes.",
    "Haemolysis, lipaemia and icterus may interfere depending on the assay; apply validated method-specific limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube. Lithium-heparin plasma may be used if validated for the local assay.",
    "Use the locally specified collection and minimum sample volumes. See Appendix 6 for tube guidance."
  ],
  storageTransport: [
    "Separate serum or plasma from cells promptly and transport according to locally validated requirements.",
    "For delayed analysis, follow the reagent instructions and local policy for refrigeration, freezing and permitted storage duration. See Appendix 9a."
  ],
  rejection: [
    "Apply local criteria for identification, container, sample volume and specimen integrity.",
    "Do not automatically reject haemolysed, lipaemic or icteric specimens unless interference exceeds validated assay limits.",
    "See Appendix 7."
  ],
  methodology: "Enzymatic urea assay with photometric detection; confirm the local analyser/reagent method and whether results are reported as urea or BUN.",
  turnaround: {
    routine: "Same day for routine requests; confirm local urgent-testing availability.",
    urgent: ""
  },
  criticalAlert: [
    "Notify results meeting locally approved critical or high-risk criteria according to Appendices 4 and 5.",
    "Interpret markedly elevated results with creatinine, electrolytes, urine output and clinical condition."
  ],
  diseaseAssociations: [
    "Increased: acute kidney injury, chronic kidney disease, reduced renal perfusion, urinary tract obstruction, gastrointestinal bleeding and increased protein catabolism.",
    "Decreased: severe liver disease, low protein intake or overhydration; lower values also occur in pregnancy. A low result alone does not diagnose malnutrition."
  ],
  conversionFactors: [
    "BUN (mg/dL) → urea (mmol/L): multiply by 0.357.",
    "Urea (mmol/L) → BUN (mg/dL): divide by 0.357.",
    "These factors do not apply to urea expressed in mg/dL. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "c-reactive-protein",
  name: "C-Reactive Protein",
  synonyms: ["CRP"],
  department: "biochemistry",
  limsCode: "C-RP",
  flags: ["stat"],
  summary: "Measures C-reactive protein",
  description: [
    "Measures C-reactive protein, an acute-phase protein produced mainly by the liver in response to inflammation, infection or tissue injury.",
    "Routine CRP testing is distinct from high-sensitivity CRP testing used for selected cardiovascular risk assessments."
  ],
  indications: [
    "Support investigation of suspected infection or inflammation.",
    "Monitor selected inflammatory conditions and response to treatment, alongside clinical assessment.",
    "Assess activity in selected autoimmune or inflammatory diseases; sensitivity varies by condition.",
    "CRP alone should not determine antibiotic initiation, continuation or cessation."
  ],
  referenceRange: [
    "Use the validated reference interval on the LIMS report; see Appendix 12."
  ],
  analyticalLimitations: [
    "Nonspecific: elevation does not identify the cause or site of inflammation or reliably distinguish bacterial from viral infection.",
    "A normal result does not exclude early infection or active inflammatory disease.",
    "The response may be blunted in severe liver disease because of reduced synthesis.",
    "Haemolysis, lipaemia, icterus and other assay interferences must be assessed against validated method-specific limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube; plasma may be accepted if validated.",
    "Allow serum to clot and separate from cells promptly. See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and follow locally validated requirements for separated serum or plasma.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Apply local criteria for identification, container, sample volume and specimen integrity.",
    "Do not automatically reject haemolysed, lipaemic or icteric specimens unless interference exceeds validated limits. Residual fibrin in serum or clotted plasma requires assessment before analysis."
  ],
  methodology: "The immuno-rate format for CRP is based on an enzymatic heterogeneous, sandwich immunoassay format.",
  turnaround: { routine: "Same day for routine requests.", urgent: "<2 hours if urgent." },
  criticalAlert: [
    "No universal CRP critical threshold is specified. Follow any locally approved notification criteria in Appendices 4 and 5.",
    "Marked elevation requires interpretation with the clinical findings. Suspected sepsis requires urgent clinical assessment regardless of the CRP result."
  ],
  diseaseAssociations: [
    "Elevated: infections, inflammatory and autoimmune diseases, inflammatory bowel disease, tissue injury, postoperative inflammation and some malignancies.",
    "The magnitude of elevation varies and is not diagnostic of a specific condition."
  ],
  conversionFactors: [
    "mg/dL → mg/L: multiply by 10.",
    "mg/L → mg/dL: divide by 10.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "calcium",
  name: "Calcium",
  synonyms: ["Serum calcium; total calcium"],
  department: "biochemistry",
  limsCode: "CA",
  flags: ["critical", "stat"],
  summary: "Measures total calcium, including protein-bound, complexed and free (ionised) calcium.",
  description: "Measures total calcium, including protein-bound, complexed and free (ionised) calcium. Calcium is essential for neuromuscular function, coagulation and bone metabolism.\nInterpret with albumin and the clinical context. Total calcium may not accurately reflect ionised calcium when protein binding is abnormal.",
  indications: [
    "Investigate suspected hypocalcaemia or hypercalcaemia.",
    "Assess parathyroid and vitamin D–related disorders.",
    "Monitor calcium disturbances in chronic kidney disease.",
    "Investigate suspected malignancy-associated hypercalcaemia.",
    "Interpret with parathyroid hormone, phosphate, magnesium, renal function and vitamin D where indicated."
  ],
  referenceRange: [
    "Use the validated age-appropriate total calcium reference interval on the LIMS report; see Appendix 12.",
    "Total and ionised calcium have different reference intervals. Reference intervals are distinct from critical notification thresholds."
  ],
  analyticalLimitations: [
    "Albumin changes can alter total calcium without a corresponding change in ionised calcium.",
    "Albumin-adjustment formulas may misclassify calcium status, particularly in hypoalbuminaemia, critical illness and advanced kidney disease.",
    "Consider direct ionised calcium measurement when total calcium is inconsistent with the clinical picture or accurate assessment is urgent.",
    "Prolonged venous stasis may increase total calcium through haemoconcentration.",
    "EDTA, citrate or oxalate contamination can cause spuriously low results.",
    "Haemolysis, lipaemia and icterus effects depend on the assay; apply validated interference limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube. Lithium-heparin plasma may be accepted if validated for the local assay.",
    "Minimise venous stasis and avoid anticoagulant or infusion contamination. Allow serum to clot and separate from cells promptly. Use locally specified collection and minimum sample volumes; see Appendix 6.",
    "Ionised calcium is a separate test with specific collection and handling requirements. Currently, ionised Calcium is not available."
  ],
  storageTransport: "Transport promptly. Follow locally validated requirements for separated serum or plasma, including refrigeration, maximum storage duration and freezing conditions.\nSee Appendix 9a. These instructions do not apply to ionised calcium specimens.",
  rejection: "See Appendix 7. Examples include identification errors, unsuitable containers, insufficient sample volume and suspected EDTA, citrate or oxalate contamination.\nAssess residual fibrin in serum or clotted plasma before analysis. Do not automatically reject haemolysed, lipaemic or icteric specimens unless interference exceeds validated limits.",
  methodology: "Colorimetric assay",
  turnaround: { routine: "Same day", urgent: "<2 hours" },
  criticalAlert: "Immediately notify results meeting locally approved calcium critical thresholds according to Appendices 4 and 5.\nSymptomatic hypocalcaemia or hypercalcaemia requires urgent clinical assessment regardless of notification thresholds.",
  diseaseAssociations: [
    "Low: hypoparathyroidism, vitamin D deficiency, chronic kidney disease, hypomagnesaemia, acute pancreatitis and critical illness. Hypoalbuminaemia may lower total calcium while ionised calcium remains normal.",
    "High: primary or tertiary hyperparathyroidism, malignancy, sarcoidosis, vitamin D excess and thiazide therapy."
  ],
  conversionFactors: "mmol/L → mg/dL: multiply by 4.008. mg/dL → mmol/L: multiply by 0.2495. See Appendix 10.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "cancer-antigen-125",
  name: "Cancer Antigen 125 (CA 125)",
  synonyms: [
    "CA125; carbohydrate antigen 125; ovarian cancer-associated tumour marker"
  ],
  department: "biochemistry",
  limsCode: "CA-125",
  flags: [],
  summary: "For monitoring serious carcinomas.",
  description: "Measures a glycoprotein antigen that may be elevated in epithelial ovarian cancer, particularly serous carcinoma, and in several benign conditions. Used mainly for specialist monitoring of known disease.",
  indications: [
    "Monitor treatment response in epithelial ovarian cancer, particularly when elevated at baseline.",
    "Support assessment of recurrence or progression under an agreed oncology follow-up plan.",
    "Support investigation of suspected ovarian malignancy or an adnexal mass alongside clinical assessment and pelvic imaging.",
    "Not recommended for population screening or diagnosis in isolation. Do not initiate or change treatment solely because of a rising result."
  ],
  referenceRange: [
    "Use the validated assay-specific reference limit on the LIMS report; see Appendix 12.",
    "35 kU/L is a commonly used limit but requires local confirmation. Diagnostic decision limits in ovarian cancer assessment pathways are distinct from laboratory reference limits and critical thresholds."
  ],
  analyticalLimitations: [
    "Nonspecific: elevation can occur with menstruation, pregnancy, endometriosis, pelvic inflammatory disease, liver disease and other malignancies.",
    "Peritoneal or pleural inflammation and fluid accumulation may elevate CA 125 without malignancy.",
    "A normal result does not exclude ovarian cancer or recurrence.",
    "Interpret serial trends with clinical findings and imaging. Use the same laboratory and assay wherever possible; different methods are not interchangeable.",
    "Heterophile antibodies and other assay-specific interferences may cause misleading results. Biotin interference is possible with susceptible assays."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube; plasma only if accepted by the performing laboratory.",
    "Allow serum to clot and separate from cells promptly. Use locally specified collection and minimum sample volumes; see Appendix 6."
  ],
  storageTransport: [
    "Transport promptly. Follow the performing laboratory's validated requirements for separated specimens, refrigeration, maximum storage duration and freezing.",
    "See Appendix 9a. Confirm referral transport requirements if testing is not performed locally."
  ],
  rejection: [
    "See Appendix 7. Apply local criteria for identification, container, sample volume and specimen integrity.",
    "Assess residual fibrin in serum or clotted plasma before analysis. Do not automatically reject haemolysed, lipaemic or icteric specimens unless interference exceeds validated assay limits."
  ],
  methodology: "Immunometric immunoassay technique.",
  turnaround: {
    routine: "1–3 working days, subject to confirmation. Referral testing may require additional time.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numerical critical threshold.",
    "An unexpected or persistently rising result warrants review by the treating team alongside clinical findings and imaging. Investigate possible assay interference when results are inconsistent with the clinical picture.",
    "Notification urgency follows local policy; see Appendices 4 and 5 where applicable."
  ],
  diseaseAssociations: [
    "Malignant: epithelial ovarian, fallopian tube and primary peritoneal carcinoma, particularly serous carcinoma; some other malignancies.",
    "Benign or physiological: endometriosis, pelvic inflammatory disease, benign ovarian cysts, menstruation, pregnancy, liver disease and nonmalignant serosal inflammation or effusions."
  ],
  conversionFactors: [
    "1 U/mL = 1 kU/L; numerical values are unchanged.",
    "Equivalent units do not make results from different assays interchangeable. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "cancer-antigen-15-3",
  name: "Cancer Antigen 15-3 (CA 15-3)",
  synonyms: [
    "CA 15-3",
    "cancer antigen 15-3",
    "breast cancer-associated tumour marker"
  ],
  department: "biochemistry",
  limsCode: "CA15-3",
  flags: [],
  summary: "For monitoring metastatic breast cancer.",
  description: "Measures a circulating mucin-associated antigen that may be elevated in breast cancer, particularly metastatic disease. Used as an adjunct to clinical assessment and imaging during specialist monitoring.",
  indications: [
    "Support monitoring of treatment response and disease course in metastatic breast cancer, particularly when elevated at baseline.",
    "Assess trends alongside symptoms, examination and imaging.",
    "Not recommended for breast cancer screening, diagnosis or routine recurrence surveillance in asymptomatic patients after primary treatment. Do not change treatment solely on the result."
  ],
  referenceRange: [
    "Use the validated assay-specific reference limit on the LIMS report; see Appendix 12.",
    "An upper reference limit of 30 kU/L is used by some assays but requires local confirmation. A result above the reference limit does not establish malignancy."
  ],
  analyticalLimitations: [
    "Low sensitivity in early/localised breast cancer; a normal result does not exclude metastatic disease.",
    "May be elevated in benign conditions and other malignancies.",
    "Results from different methods may not be directly comparable; use the same laboratory and assay for serial monitoring wherever possible.",
    "Heterophile antibodies and other assay-specific interferences may cause misleading results. Biotin interference is possible with susceptible assays.",
    "Transient rises may occur early after starting treatment and do not necessarily indicate progression."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube; plasma only if accepted by the performing laboratory.",
    "Allow serum to clot and separate from cells promptly. Use locally specified collection and minimum sample volumes; see Appendix 6.",
    "Follow assay-specific preparation advice concerning biotin supplements where applicable."
  ],
  storageTransport: [
    "Transport promptly. Follow the performing laboratory's validated requirements for separation, refrigeration, maximum storage duration and freezing.",
    "See Appendix 9a. Confirm referral transport requirements if testing is not performed locally."
  ],
  rejection: [
    "See Appendix 7. Examples include identification errors, unsuitable containers and insufficient sample volume.",
    "Assess residual fibrin in serum or clotted plasma before analysis. Apply validated assay-specific interference limits for haemolysis, lipaemia and icterus."
  ],
  methodology: "Immunometric test.",
  turnaround: {
    routine: "1–3 working days, subject to confirmation. Referral testing may require additional time.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numerical critical threshold.",
    "A confirmed rising trend warrants review by the treating oncology team alongside clinical findings and imaging. Notification urgency follows local policy; see Appendices 4 and 5 where applicable."
  ],
  diseaseAssociations: [
    "Elevated: breast cancer, particularly metastatic disease; some other malignancies, including ovarian, lung and pancreatic cancers.",
    "Benign elevations may occur in chronic liver disease and benign breast or ovarian conditions."
  ],
  conversionFactors: [
    "1 U/mL = 1 kU/L; numerical values are unchanged.",
    "Equivalent units do not make results from different assays interchangeable. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "cancer-antigen-19-9",
  name: "Cancer Antigen 19-9 (CA 19-9)",
  synonyms: [
    "Carbohydrate antigen 19-9",
    "CA19-9",
    "pancreatic cancer-associated tumour marker"
  ],
  department: "biochemistry",
  limsCode: "CA19-9",
  flags: [],
  summary: "Test antigen associated with pancreatic and biliary tract cancers.",
  description: "Measures a carbohydrate antigen associated with pancreatic and biliary tract cancers. Used mainly as an adjunct to clinical assessment and imaging for monitoring known disease.",
  indications: [
    "Support monitoring of treatment response and disease course in pancreatic or biliary tract cancer, particularly when elevated at baseline.",
    "Support assessment of suspected recurrence under a specialist follow-up plan.",
    "Not recommended for population screening or diagnosis in isolation. Do not change treatment solely on the result."
  ],
  referenceRange: [
    "Use the validated assay-specific reference limit on the LIMS report; see Appendix 12.",
    "An elevated result does not establish malignancy, and a normal result does not exclude it."
  ],
  analyticalLimitations: [
    "Nonspecific: cholestasis, biliary obstruction or inflammation, pancreatitis and liver disease can elevate CA 19-9.",
    "Interpret with bilirubin, liver tests and imaging. Consider reassessment after biliary obstruction or inflammation resolves.",
    "Some individuals, particularly those with Lewis-negative status, produce little or no CA 19-9 despite malignancy; monitoring is unreliable in non-producers.",
    "Use the same laboratory and assay for serial testing wherever possible; different methods are not interchangeable.",
    "Heterophile antibodies and other assay-specific interferences may cause misleading results. Biotin interference is possible with susceptible assays."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube; plasma only if accepted.",
    "Allow serum to clot and separate from cells promptly. Use locally specified collection and minimum sample volumes; see Appendix 6."
  ],
  storageTransport: [
    "Transport promptly. Follow the performing laboratory's validated requirements for specimen separation, refrigeration, maximum storage duration and freezing.",
    "See Appendix 9a. Confirm referral transport requirements if testing is not performed locally."
  ],
  rejection: [
    "See Appendix 7. Examples include identification errors, unsuitable containers and insufficient sample volume.",
    "Assess residual fibrin in serum or clotted plasma before analysis. Apply validated assay-specific interference limits for haemolysis, lipaemia and icterus."
  ],
  methodology: "Immunometric assay.",
  turnaround: {
    routine: "1–3 days, subject to confirmation. Referral testing may require additional time.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numerical critical threshold.",
    "An unexpected or persistently rising result warrants review by the treating team, considering biliary obstruction, inflammation, clinical findings and imaging. Investigate possible assay interference if results are inconsistent with the clinical picture.",
    "Notification urgency follows local policy; see Appendices 4 and 5 where applicable."
  ],
  diseaseAssociations: [
    "Malignant: pancreatic ductal adenocarcinoma, cholangiocarcinoma and some other gastrointestinal cancers.",
    "Benign: biliary obstruction, cholestasis, cholangitis, pancreatitis and chronic liver disease."
  ],
  conversionFactors: [
    "1 U/mL = 1 kU/L; numerical values are unchanged.",
    "Equivalent units do not make results from different assays interchangeable. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "carcinoembryonic-antigen",
  name: "Carcinoembryonic Antigen (CEA)",
  synonyms: ["CEA", "serum CEA"],
  department: "biochemistry",
  limsCode: "CEA",
  flags: [],
  summary: "Measures carcinoembryonic antigen.",
  description: "Measures carcinoembryonic antigen, a glycoprotein tumour marker that may be elevated in colorectal cancer, other malignancies and some benign conditions. Used mainly for monitoring known cancer.",
  indications: [
    "Support detection of recurrence after potentially curative colorectal cancer treatment, as part of a specialist follow-up programme including imaging.",
    "Monitor treatment response and disease course in colorectal cancer and selected other cancers.",
    "Provide baseline prognostic information alongside clinical assessment and staging.",
    "Not suitable for population screening or diagnosis in isolation. Do not change treatment solely on the result."
  ],
  referenceRange: [
    "Use the validated assay-specific reference limit on the LIMS report; see Appendix 12.",
    "Smoking may increase CEA and influence interpretation.",
    "Reference limits are distinct from investigation or notification thresholds."
  ],
  analyticalLimitations: [
    "Nonspecific: smoking, chronic liver disease, inflammatory bowel disease, pancreatitis and some chronic lung diseases may increase CEA.",
    "Not all cancers produce elevated CEA; a normal result does not exclude malignancy or recurrence.",
    "Interpret serial trends with clinical findings and imaging. Use the same laboratory and assay wherever possible; different methods are not interchangeable.",
    "Heterophile antibodies and other assay-specific interferences may cause misleading results. Biotin interference is possible with susceptible assays."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved serum tube; plasma only if accepted by the performing laboratory.",
    "Allow serum to clot and separate from cells promptly. Use locally specified collection and minimum sample volumes; see Appendix 6.",
    "Record smoking status. Follow assay-specific preparation advice concerning biotin supplements where applicable."
  ],
  storageTransport: [
    "Transport promptly. Follow the performing laboratory's validated requirements for specimen separation, refrigeration, maximum storage duration and freezing.",
    "See Appendix 9a. Confirm referral transport requirements if testing is not performed locally."
  ],
  rejection: [
    "See Appendix 7. Examples include identification errors, unsuitable containers and insufficient sample volume.",
    "Assess residual fibrin in serum or clotted plasma before analysis. Apply validated assay-specific interference limits for haemolysis, lipaemia and icterus."
  ],
  methodology: "Immunometric immunoassay test.",
  turnaround: {
    routine: "Typically 1–3 working days; confirm local batching and reporting arrangements. Referral testing may require additional time.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numerical critical threshold.",
    "A confirmed new elevation or rising trend in a patient with treated cancer warrants timely review and further assessment by the treating team. It does not independently establish recurrence.",
    "Follow locally agreed notification arrangements; see Appendices 4 and 5 where applicable."
  ],
  diseaseAssociations: [
    "Malignant: colorectal cancer; selected other cancers, including gastric, pancreatic, lung, breast and medullary thyroid carcinoma.",
    "Benign: chronic liver disease/cirrhosis, inflammatory bowel disease, pancreatitis and chronic obstructive pulmonary disease. Smoking may also increase CEA."
  ],
  conversionFactors: [
    "1 ng/mL = 1 µg/L; numerical values are unchanged.",
    "Equivalent units do not make results from different assays interchangeable. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "cd4-count",
  name: "CD4 Count",
  synonyms: ["CD4+ T-lymphocyte count", "T-helper cell count"],
  department: "serology",
  limsCode: "CD4",
  flags: ["critical"],
  summary: "Measures the absolute number of CD4-positive T lymphocytes",
  description: [
    "Measures the absolute number of CD4-positive T lymphocytes in peripheral blood. CD4 percentage may also be reported as the proportion of lymphocytes that are CD4-positive T cells.",
    "Used principally to assess immune suppression in people living with HIV."
  ],
  indications: [
    "Assess immune status at HIV diagnosis, entry or re-entry to care.",
    "Identify advanced HIV disease and support decisions on opportunistic infection screening and prophylaxis.",
    "Assess immune recovery or suspected deterioration when clinically indicated.",
    "Assess selected non-HIV immunodeficiency states under specialist guidance.",
    "ART eligibility is independent of CD4 count. Viral load is preferred for monitoring ART efficacy; routine CD4 monitoring is generally unnecessary in clinically stable patients when viral load monitoring is available."
  ],
  referenceRange: [
    "Use validated age-appropriate intervals for absolute CD4 count and CD4 percentage on the LIMS report; see Appendix 12.",
    "Children, particularly infants, normally have higher absolute counts than adults. HIV clinical decision thresholds are separate from reference intervals."
  ],
  analyticalLimitations: [
    "Counts vary with time of day, acute illness and changes in total lymphocyte count; interpret trends in clinical context.",
    "Corticosteroids, chemotherapy and other immunosuppressive treatments may reduce counts.",
    "CD4 percentage can provide complementary information, particularly in children or when absolute counts fluctuate.",
    "Delayed processing, unsuitable temperatures and poor specimen integrity may affect results.",
    "CD4 count does not diagnose HIV infection or independently establish ART failure."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA whole blood in an approved tube, usually purple/lavender-top.",
    "Fill and mix according to tube instructions. Use locally specified collection and minimum volumes, including paediatric requirements; see Appendix 6.",
    "Record collection date and time. Do not separate plasma or serum."
  ],
  storageTransport: [
    "Send promptly and arrange collection around the testing or referral schedule.",
    "Maintain the validated transport temperature specified by the performing laboratory; uncontrolled tropical ambient temperature may exceed acceptable limits.",
    "Do not freeze. Refrigeration and maximum collection-to-processing time must follow the specific assay's validated instructions; many conventional flow-cytometry methods require unrefrigerated specimens.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Reject clotted or frozen specimens, identification errors, unsuitable containers and samples insufficient for validated testing.",
    "Assess haemolysis, temperature exposure and delayed receipt against method-specific acceptance criteria. Do not apply an unverified universal 24–36-hour rejection limit."
  ],
  methodology: "Flow cytometric enumeration using fluorescent-labelled antibodies.",
  turnaround: {
    routine: "1–3 working days, subject to local batching or referral arrangements. Specimen processing must still occur within validated stability limits.",
    urgent: ""
  },
  criticalAlert: [
    "In people living with HIV aged five years or older, CD4 ≤200 cells/µL meets the WHO 2025 immunological definition of advanced HIV disease and warrants prompt clinical assessment and linkage to the advanced HIV care pathway.",
    "Children younger than five years require age-specific assessment under current HIV guidance.",
    "This is a clinical decision threshold, not automatically a laboratory critical value. Follow approved notification arrangements in Appendices 4 and 5 where applicable."
  ],
  diseaseAssociations: [
    "Low: HIV-associated immune suppression, selected primary or secondary immunodeficiencies, immunosuppressive treatment and severe acute illness.",
    "Recovery towards the reference interval may occur with effective ART; interpret alongside viral load and clinical findings."
  ],
  conversionFactors: [
    "1 cell/µL = 1 cell/mm³.",
    "Cells/µL → ×10⁹/L: divide by 1,000.",
    "×10⁹/L → cells/µL: multiply by 1,000.",
    "CD4 percentage is a separate measurement, not a unit conversion. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "cervical-cytology",
  name: "Cervical Cytology (Pap Smear)",
  synonyms: ["Pap test", "cervical smear", "cervical cytology"],
  department: "cytology",
  limsCode: "PAP",
  flags: [],
  summary: "Microscopic examination of cervical epithelial cells.",
  description: [
    "Microscopic examination of cervical epithelial cells to identify squamous or glandular abnormalities associated with cervical precancer or cancer.",
    "Cytology evaluates cellular changes; it does not establish tissue invasion."
  ],
  indications: [
    "Cervical screening where cytology is included in the approved local programme.",
    "Triage following a positive high-risk HPV test, where indicated.",
    "Follow-up of abnormal screening results or treated cervical precancer under an approved pathway.",
    "Follow-up after cervical cancer treatment is specialist-directed. Screening eligibility and intervals follow national policy."
  ],
  referenceRange: [
    "Qualitative report; no numerical reference interval.",
    "If Bethesda terminology is used: NILM — negative for intraepithelial lesion or malignancy.",
    "The report should state specimen adequacy and any epithelial abnormality. NILM does not mean HPV-negative."
  ],
  analyticalLimitations: [
    "Poor sampling, low cellularity, obscuring blood/inflammation and fixation artefact may reduce sensitivity.",
    "Negative cytology does not exclude precancer or cancer, particularly when symptoms or a suspicious lesion are present.",
    "Cytology is less sensitive than high-risk HPV testing for cervical precancer.",
    "Management of abnormal findings depends on the result category, HPV status, previous history and approved pathway.",
    "Histology is required to confirm tissue invasion; cytology does not assign definitive CIN grades."
  ],
  sampleType: "Tissue",
  containerColour: "Swab",
  sampleRequirements: [
    "Clinician-collected cervical sample using an approved brush/spatula or broom device, sampling the transformation zone according to device instructions.",
    "Conventional cytology: spread onto a labelled glass slide and fix immediately.",
    "Liquid-based cytology: transfer into the approved preservative vial according to the collection system instructions.",
    "Provide relevant symptoms, pregnancy status, previous screening/treatment history and sampling site. A self-collected vaginal HPV sample is not a substitute for a cervical cytology specimen."
  ],
  storageTransport: [
    "Conventional slides: fix immediately with an approved cytology fixative and transport in a protective slide container.",
    "Liquid-based vials: seal securely and follow the specific preservative's validated temperature and stability requirements; avoid excessive heat.",
    "See Appendix 9a. Confirm referral transport requirements where applicable."
  ],
  rejection: [
    "See Appendix 7. Identification errors, unsuitable containers, leakage or damaged slides require laboratory assessment under local policy.",
    "Low cellularity, obscuring material or poor fixation should be assessed for adequacy and reported as unsatisfactory where appropriate, with repeat sampling advice."
  ],
  methodology: "Papanicolaou staining and microscopic assessment of conventional smears or liquid-based preparations.",
  turnaround: {
    routine: "Typically 1–2 weeks; confirm local processing, specialist review and referral arrangements.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate high-grade squamous abnormalities, significant glandular abnormalities or findings suspicious for malignancy according to approved policy, with expedited specialist referral.",
    "Suspected invasive cancer requires urgent clinical assessment. See Appendices 4 and 5 where applicable."
  ],
  diseaseAssociations: [
    "HPV-associated squamous intraepithelial lesions.",
    "Cervical intraepithelial neoplasia, confirmed and graded histologically.",
    "Glandular precancer, including adenocarcinoma in situ.",
    "Cervical squamous cell carcinoma or adenocarcinoma."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "chloride",
  name: "Chloride",
  synonyms: ["Serum chloride"],
  department: "biochemistry",
  limsCode: "CL",
  flags: [],
  summary: "Chloride test for major extracellular anion.",
  description: [
    "Chloride is the major anion in the extracellular water space; its physiological significance is in maintaining proper body",
    "water distribution, osmotic pressure, and normal anion-cation balance in the extracellular fluid compartment."
  ],
  indications: [
    "Investigate electrolyte and acid–base disturbances alongside sodium, potassium and bicarbonate.",
    "Support calculation and interpretation of the anion gap.",
    "Monitor patients with renal disease, gastrointestinal fluid losses or disturbances related to fluid therapy."
  ],
  referenceRange: [
    "Use the age-appropriate reference interval on the validated LIMS report. See Appendix 12."
  ],
  analyticalLimitations: [
    "Interpret with sodium, potassium, bicarbonate, renal function and clinical findings; chloride alone does not establish an acid–base diagnosis.",
    "Contamination with intravenous fluids, particularly saline, may distort results.",
    "Other halides, including bromide, may cause falsely elevated results with some ion-selective electrodes.",
    "Haemolysis, lipaemia and other interference must be assessed against validated method-specific limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum. Lithium heparin plasma may be used if validated for the local method.",
    "Use the laboratory-approved tube and minimum volume; see Appendix 6. Avoid contamination from intravenous infusions."
  ],
  storageTransport: [
    "Separate serum or plasma from cells promptly. Follow locally validated temperature and stability requirements; refrigerate separated specimens if required for delayed testing.",
    "Freeze only where permitted by the validated method. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Reject identification errors, unsuitable specimens, insufficient volume or confirmed contamination according to laboratory policy.",
    "Haemolysed, lipaemic or icteric specimens require assessment against validated interference limits."
  ],
  methodology: "Potentiometric assay.",
  turnaround: {
    routine: "Same day for routine testing.",
    urgent: "Urgent availability and turnaround time depend on the local service."
  },
  criticalAlert: [
    "See Appendices 4 and 5.",
    "Marked abnormalities require clinical assessment alongside other electrolytes, acid–base findings and the patient's condition."
  ],
  diseaseAssociations: [
    "Low: prolonged vomiting, metabolic alkalosis, diuretic therapy and renal compensation for chronic respiratory acidosis.",
    "High: gastrointestinal bicarbonate loss, renal tubular acidosis, excessive chloride-rich fluid administration and dehydration, particularly with hypernatraemia."
  ],
  conversionFactors: "For chloride: 1 mmol/L = 1 mEq/L. See Appendix 10.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "cholesterol",
  name: "Cholesterol",
  synonyms: ["Total cholesterol"],
  department: "biochemistry",
  limsCode: "CHOL",
  flags: [],
  summary: "Measure cholesterol (CHOL) concentration in serum and plasma",
  description: "Measures total cholesterol carried in circulating lipoproteins, including free and esterified cholesterol.",
  indications: [
    "Assess cardiovascular risk as part of a lipid profile.",
    "Investigate suspected inherited or secondary lipid disorders.",
    "Monitor lipid-lowering therapy alongside other lipid results, particularly low-density lipoprotein (LDL) cholesterol."
  ],
  referenceRange: [
    "Interpret using locally adopted, age-appropriate clinical decision limits and the validated LIMS report. See Appendix 12.",
    "Adult total cholesterol <5.2 mmol/L is a commonly used desirable decision limit; it is not a universal reference interval or individual treatment target."
  ],
  analyticalLimitations: [
    "Total cholesterol alone does not distinguish the contributions of different lipoproteins; interpret with high-density lipoprotein (HDL) cholesterol, LDL cholesterol, triglycerides and clinical risk.",
    "Acute illness may temporarily lower concentrations and obscure the usual lipid status.",
    "Haemolysis, lipaemia, icterus and drug-related interference depend on the assay; apply validated method-specific limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved tube. Use the locally validated minimum volume; see Appendix 6.",
    "Fasting is not routinely required for total cholesterol. Follow collection instructions for accompanying tests and any specifically requested fasting lipid profile."
  ],
  storageTransport: [
    "Separate serum from cells promptly. Follow locally validated transport temperatures and storage limits; refrigerate separated serum if required when testing is delayed.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Reject identification errors, unsuitable specimens or insufficient volume according to laboratory policy.",
    "Assess haemolysed, lipaemic or icteric specimens against validated interference limits."
  ],
  methodology: "Colorimetric assay.",
  turnaround: { routine: "Same day.", urgent: "" },
  criticalAlert: [
    "No universal numeric critical threshold.",
    "Markedly elevated results require clinical assessment for inherited or secondary lipid disorders. Apply any locally approved notification requirements; see Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Elevated: familial hypercholesterolaemia, hypothyroidism, nephrotic syndrome and cholestatic liver disease. Pregnancy may cause a physiological increase.",
    "Decreased: hyperthyroidism, malnutrition or malabsorption, severe liver disease and acute or severe systemic illness."
  ],
  conversionFactors: [
    "mg/dL × 0.0259 = mmol/L.",
    "mmol/L × 38.67 = mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "creatine-kinase",
  name: "Creatine Kinase",
  synonyms: ["CK", "creatine phosphokinase", "total creatine kinase"],
  department: "biochemistry",
  limsCode: "CPK",
  flags: ["critical"],
  summary: "Measures total creatine kinase (CK).",
  description: "Measures total creatine kinase (CK) enzyme activity. Circulating CK predominantly reflects skeletal muscle; increased activity commonly indicates muscle injury.",
  indications: [
    "Investigate and monitor rhabdomyolysis or significant muscle injury.",
    "Assess suspected myositis, muscular dystrophy or other myopathy.",
    "Evaluate suspected drug-related muscle injury, including statin-associated myopathy.",
    "Cardiac troponin is preferred for suspected myocardial infarction."
  ],
  referenceRange: [
    "Use the validated age- and sex-appropriate reference interval on the LIMS report. See Appendix 12."
  ],
  analyticalLimitations: [
    "Exercise, trauma, intramuscular injections, seizures and muscle-toxic drugs may genuinely increase CK.",
    "CK may be normal early after acute muscle injury; serial testing may be required.",
    "Macro-CK may cause persistent elevation without acute muscle injury.",
    "Haemolysis may cause falsely increased activity with some methods."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved tube. Lithium heparin plasma may be accepted if validated for the local method.",
    "Use the locally approved collection volume; see Appendix 6. Record relevant recent exercise, injury and medicines."
  ],
  storageTransport: [
    "Separate serum or plasma from cells promptly. Follow locally validated transport temperatures and stability limits; refrigerate separated specimens if required when testing is delayed.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Reject identification errors, unsuitable specimens or insufficient volume according to laboratory policy.",
    "Assess haemolysed, lipaemic or icteric specimens against validated interference limits."
  ],
  methodology: "Multipoint rate assay.",
  turnaround: { routine: "Same day.", urgent: "Confirm urgent testing availability locally." },
  criticalAlert: [
    "No universal CK-specific critical threshold. Apply locally approved notification requirements; see Appendices 4 and 5.",
    "CK >5 times the upper reference limit or >1,000 U/L commonly supports rhabdomyolysis in the appropriate clinical context; this is not an automatic critical-result threshold.",
    "Suspected rhabdomyolysis requires prompt assessment of renal function, potassium and other relevant electrolytes."
  ],
  diseaseAssociations: [
    "Elevated CK: rhabdomyolysis, inflammatory or inherited myopathies, muscle trauma, prolonged seizures, hypothyroidism and drug- or toxin-related muscle injury.",
    "Malignant hyperthermia and neuroleptic malignant syndrome may cause severe muscle injury."
  ],
  conversionFactors: ["U/L × 0.0167 = µkat/L.", "µkat/L × 60 = U/L.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "creatinine",
  name: "Creatinine (Serum)",
  synonyms: ["Serum creatinine", "Cr"],
  department: "biochemistry",
  limsCode: "CREA",
  flags: ["critical", "stat"],
  summary: "quantitatively measure creatinine (CREA) concentration in serum, plasma, and urine",
  description: "Creatinine is produced from creatine and creatine phosphate metabolism and eliminated mainly by glomerular filtration, with some tubular secretion. Serum creatinine supports assessment of kidney function and calculation of estimated glomerular filtration rate (eGFR).",
  indications: [
    "Assess kidney function and calculate eGFR where appropriate.",
    "Investigate and monitor acute kidney injury (AKI) and chronic kidney disease (CKD).",
    "Monitor kidney function during potentially nephrotoxic treatment.",
    "Interpret with previous results, urine output, urine findings and clinical context."
  ],
  referenceRange: [
    "Use the age- and sex-appropriate reference interval on the validated LIMS report. See Appendix 12.",
    "For eGFR interpretation and CKD G-stages, see Appendix 11."
  ],
  analyticalLimitations: [
    "Low muscle mass may conceal impaired kidney function; diet, muscle injury and creatine supplements may also affect results.",
    "Creatinine may lag behind an acute decline in kidney function. Creatinine-based eGFR is unreliable when creatinine is changing rapidly and has limitations in pregnancy and extremes of muscle mass.",
    "Jaffé assays may be affected by glucose, ketones, bilirubin and some cephalosporins. Enzymatic assays also have method-specific interference.",
    "Some medicines, including trimethoprim, increase creatinine by reducing tubular secretion without reducing glomerular filtration.",
    "A single abnormal creatinine or eGFR does not establish CKD; evidence of chronicity is required."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved tube. Lithium heparin plasma may be accepted if validated for the local method.",
    "Use the locally approved collection volume; see Appendix 6."
  ],
  storageTransport: [
    "Separate serum or plasma from cells promptly. Follow locally validated separation times, transport temperatures and stability limits.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Reject identification errors, unsuitable tubes, insufficient volume or confirmed contamination according to laboratory policy.",
    "Assess haemolysis, lipaemia and icterus against validated interference limits. Clotting during serum preparation is expected; clotted anticoagulated specimens are unsuitable."
  ],
  methodology: "Two-point rate assay.",
  turnaround: { routine: "2–6 hours.", urgent: "<2 hour" },
  criticalAlert: [
    "Apply locally approved absolute-value and significant-change notification criteria. See Appendices 4 and 5.",
    "A new or rapidly rising creatinine may require urgent assessment even below an absolute alert threshold. Interpret with urine output, potassium and clinical findings."
  ],
  diseaseAssociations: [
    "Increased: AKI, CKD, reduced renal perfusion, urinary tract obstruction and rhabdomyolysis.",
    "Decreased: low muscle mass, malnutrition or cachexia; pregnancy may cause a physiological decrease."
  ],
  conversionFactors: [
    "mg/dL × 88.4 = µmol/L.",
    "µmol/L × 0.0113 = mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-11",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "crossmatch",
  name: "Crossmatch (Compatibility Testing)",
  synonyms: ["Red cell compatibility testing", "crossmatch"],
  department: "blood-bank",
  limsCode: "X-MATCH",
  flags: ["stat"],
  summary: "Assesses compatibility between the recipient and selected donor red cells.",
  description: [
    "Assesses compatibility between the recipient and selected donor red cell units before transfusion. Serological crossmatching tests recipient plasma against donor red cells; validated electronic crossmatching checks compatibility using laboratory information system rules.",
    "Crossmatching forms part of pretransfusion testing alongside ABO/RhD typing, antibody screening and review of previous results."
  ],
  indications: [
    "Select compatible red cell units for planned transfusion.",
    "Support transfusion in patients with current or historical clinically significant red cell antibodies.",
    "Investigate incompatibility identified during pretransfusion testing.",
    "Emergency transfusion may require release before testing is complete under an approved protocol."
  ],
  referenceRange: [
    "Expected result: compatible with the selected donor unit using the approved method.",
    "For serological testing, no incompatible reaction is detected."
  ],
  analyticalLimitations: [
    "Compatibility does not exclude all acute or delayed transfusion reactions.",
    "Previously detected antibodies may become undetectable; antibody history remains important.",
    "Autoantibodies or panreactivity may obscure clinically significant alloantibodies and require specialist investigation.",
    "Incorrect patient identification can invalidate otherwise satisfactory compatibility testing."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Pink EDTA",
  sampleRequirements: [
    "EDTA whole blood in the approved transfusion tube; confirm the required volume locally. See Appendix 6.",
    "Positively identify the patient and label immediately at the bedside after collection. Include approved patient identifiers, collection date/time and collector identification.",
    "Provide transfusion and pregnancy history, previous antibodies, urgency, number of units and special requirements."
  ],
  storageTransport: [
    "Transport promptly and store according to validated blood bank requirements. See Appendix 9a.",
    "Specimen validity is separate from storage stability. Recent red cell transfusion or pregnancy within the preceding three months normally requires a specimen valid for no more than 72 hours after collection. Apply the approved local expiry policy and obtain a new specimen when required."
  ],
  rejection: [
    "See Appendix 7 and the blood bank identification policy.",
    "Reject unlabelled or mismatched specimens, unsuitable tubes, clotted EDTA samples, insufficient volume or specimens outside the approved validity period."
  ],
  methodology: [
    "Serological rapid tests and tube or column agglutination techniques.",
    "Immediate-spin crossmatch: restricted to eligible patients with a negative current antibody screen and no history of clinically significant antibodies.",
    "Indirect antiglobulin crossmatch: used when clinically significant antibodies are present or historical; select appropriately antigen-negative units."
  ],
  turnaround: {
    routine: "1–2 hours. Antibody investigation or referral may cause substantial delays. For life-threatening urgency, contact the blood bank immediately.",
    urgent: "approximately 30–60 minutes, subject to local confirmation and suitable unit availability."
  },
  criticalAlert: [
    "An incompatible crossmatch requires immediate communication to the treating team and blood bank senior staff. Do not routinely release the implicated unit as compatible. See Appendices 4 and 5.",
    "If transfusion is life-saving and compatible blood cannot be provided in time, emergency release requires documented clinical authorisation and blood bank consultation under the approved protocol."
  ],
  diseaseAssociations: [
    "Incompatibility may reflect ABO incompatibility, red cell alloantibodies or autoantibodies; it is not itself a diagnosis of a haemolytic transfusion reaction."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "csf-culture",
  name: "CSF Culture",
  synonyms: ["Cerebrospinal fluid culture"],
  department: "microbiology",
  limsCode: "CSF",
  flags: ["critical", "stat"],
  summary: "Culture of cerebrospinal fluid (CSF)",
  description: [
    "Culture of cerebrospinal fluid (CSF) to detect bacterial causes of meningitis and ventriculitis, with organism identification and antimicrobial susceptibility testing where appropriate.",
    "Fungal, mycobacterial and molecular investigations require specific requests."
  ],
  indications: [
    "Investigate suspected bacterial meningitis or ventriculitis.",
    "Identify pathogens and support selection of antimicrobial therapy.",
    "Investigate possible infection associated with neurosurgery, CSF shunts or drains.",
    "Investigate suspected fungal infection using specifically requested tests."
  ],
  referenceRange: [
    "Expected result: no growth.",
    "A negative culture does not exclude central nervous system infection."
  ],
  analyticalLimitations: [
    "Prior antimicrobial treatment, small specimen volume and delayed transport may reduce recovery.",
    "Negative Gram stain or culture does not exclude infection.",
    "Routine bacterial culture does not adequately investigate viral, tuberculous or all fungal causes.",
    "Interpret possible skin contaminants with clinical findings, CSF results, collection source and repeat cultures; these organisms may cause shunt-associated infection."
  ],
  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Collect aseptically into sterile, leak-proof screw-cap container(s), without preservative. Identify the collection source and number tubes sequentially where multiple tubes are collected.",
    "Confirm volume and tube allocation locally. Contact microbiology when volume is limited or additional investigations are required.",
    "Include suspected diagnosis, antimicrobial exposure, immune status and any neurosurgical device. Obtain before antibiotics where feasible, without delaying urgent treatment."
  ],
  storageTransport: [
    "Notify the laboratory and transport immediately at room temperature for routine bacterial culture.",
    "Do not refrigerate or freeze the specimen intended for routine bacterial culture. If transport is delayed, contact microbiology for instructions. Separate aliquots for other tests may require different handling.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Identification errors, leakage, inappropriate containers or suspected contamination require urgent laboratory assessment.",
    "Do not automatically discard low-volume or otherwise compromised CSF. Discuss with the microbiologist, document limitations and prioritise testing under the approved policy. Identity must be resolved before patient-specific reporting."
  ],
  methodology: [
    "Direct Gram stain and bacterial culture using validated media and incubation methods.",
    "Identification of isolates and antimicrobial susceptibility testing (AST)",
    "Additional anaerobic or prolonged culture where indicated, particularly for device-associated infection.",
    "Fungal culture and cryptococcal antigen (CrAg) testing when indicated; CrAg is preferred to India ink where available.",
    "Suspected tuberculous meningitis requires a WHO-recommended molecular test and dedicated mycobacterial investigations.",
    "Confirm which additional tests are performed locally and which require referral."
  ],
  turnaround: {
    routine: "Preliminary bacterial culture: usually 24–48 hours. Routine final report: typically 2–5 days, subject to local confirmation. Device-associated, fungal and mycobacterial investigations may require longer incubation or referral.",
    urgent: "Gram stain: urgent, as soon as possible after receipt."
  },
  criticalAlert: [
    "Immediately communicate organisms seen on Gram stain and clinically significant positive culture results to the treating team, with documented notification.",
    "Do not wait for final identification or AST before reporting an important preliminary finding. Escalate uncertain positive results promptly to the microbiologist.",
    "See Appendices 4 and 5.",
    "Organisms Reported",
    "Identify recovered organisms to the level supported by the validated method. Important examples include:",
    "Community-acquired infection: Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae, Streptococcus agalactiae, Listeria monocytogenes and enteric Gram-negative bacilli.",
    "Healthcare/device-associated infection: Staphylococcus aureus, coagulase-negative staphylococci, Cutibacterium acnes, Pseudomonas aeruginosa and other Gram-negative bacilli.",
    "Fungal investigations: Cryptococcus species, Candida species and other fungi recovered by the requested method.",
    "Do not classify skin organisms as contaminants solely because growth is scanty."
  ],
  diseaseAssociations: [
    "Bacterial meningitis, ventriculitis and CSF shunt-associated infection. Fungal meningitis where appropriately investigated."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Identify recovered organisms to the level supported by the validated method. Important examples include",
      items: [
        "•\tCommunity-acquired infection: Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae, Streptococcus agalactiae, Listeria monocytogenes and enteric Gram-negative bacilli.",
        "•\tHealthcare/device-associated infection: Staphylococcus aureus, coagulase-negative staphylococci, Cutibacterium acnes, Pseudomonas aeruginosa and other Gram-negative bacilli.",
        "•\tFungal investigations: Cryptococcus species, Candida species and other fungi recovered by the requested method.",
        "Do not classify skin organisms as contaminants solely because growth is scanty."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "csf-glucose",
  name: "CSF Glucose",
  synonyms: ["Cerebrospinal Fluid Glucose"],
  department: "biochemistry",
  limsCode: "CSFG",
  flags: ["critical", "stat"],
  summary: "Measurement of glucose in cerebrospinal fluid (CSF)",
  description: "Measurement of glucose in cerebrospinal fluid (CSF), interpreted with paired blood glucose and other CSF findings to support investigation of meningitis and other meningeal disorders.",
  indications: [
    "Support assessment of suspected bacterial, tuberculous, fungal or viral meningitis.",
    "Investigate suspected leptomeningeal malignancy alongside appropriate CSF investigations."
  ],
  referenceRange: [
    "CSF glucose is usually approximately 60–70% of paired plasma/serum glucose. This is an interpretative guide, not a universal reference interval.",
    "Use the validated LIMS report and Appendix 12 for locally applicable reference intervals."
  ],
  analyticalLimitations: [
    "Interpret with paired blood glucose, CSF cell count, protein and microbiological findings. Glucose alone cannot determine the cause of meningitis.",
    "Normal CSF glucose does not exclude meningitis.",
    "Cells and microorganisms may consume glucose during delayed processing, producing a falsely low result.",
    "Blood contamination may affect interpretation; assess analytical interference against the method's validated limits."
  ],
  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "CSF collected aseptically into a sterile, plain, leak-proof container without additives.",
    "Confirm the minimum volume with the laboratory, especially when several CSF tests are requested.",
    "Collect paired blood glucose immediately before lumbar puncture where practicable, using the laboratory-approved blood collection tube. Record both collection times."
  ],
  storageTransport: [
    "Transport immediately to the laboratory for urgent processing.",
    "If testing is delayed, contact the laboratory for validated processing, temperature and stability requirements.",
    "Refrigeration may be appropriate for the separated chemistry aliquot; follow separate requirements for CSF requested for microbiological testing.",
    "See Appendix 9a."
  ],
  rejection: [
    "Identification discrepancies, unsuitable or leaking containers, or inadequate volume require immediate laboratory assessment.",
    "Discuss suitability and test prioritisation before rejecting a difficult-to-recollect CSF specimen.",
    "See Appendix 7."
  ],
  methodology: "Colorimetric.",
  turnaround: {
    routine: "",
    urgent: "Urgent processing and reporting for suspected meningitis. Same-day reporting is the stated service target; confirm local availability and urgent turnaround time."
  },
  criticalAlert: [
    "Low CSF glucose or a CSF-to-blood glucose ratio ≤0.4 warrants prompt clinical assessment in suspected meningitis. This is a diagnostic finding, not a universal critical-result threshold.",
    "Notify results according to the approved local alert criteria and communication policy; see Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Reduced CSF glucose relative to blood glucose may occur in:",
    "Bacterial or tuberculous meningitis.",
    "Fungal meningitis, including cryptococcal meningitis.",
    "Leptomeningeal malignancy.",
    "Neurosarcoidosis.",
    "CSF glucose is usually normal in viral meningitis."
  ],
  conversionFactors: [
    "mg/dL × 0.0555 = mmol/L.",
    "mmol/L × 18.0 = mg/dL.",
    "CSF-to-blood glucose ratio = CSF glucose ÷ paired blood glucose, using the same units.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "csf-protein",
  name: "CSF Protein",
  synonyms: ["Cerebrospinal Fluid Protein", "CSF Total Protein"],
  department: "biochemistry",
  limsCode: "CSFP",
  flags: ["stat"],
  summary: "Measurement of protein in cerebrospinal fluid (CSF)",
  description: "Measurement of total protein in cerebrospinal fluid (CSF). Increased concentrations may reflect altered blood–CSF barrier function, inflammation, impaired CSF circulation or blood contamination.",
  indications: [
    "Support investigation of meningitis alongside CSF cell count, glucose and microbiological testing.",
    "Support assessment of neurological inflammatory disorders, including Guillain–Barré syndrome.",
    "Contribute to investigation of suspected CNS malignancy or demyelinating disease alongside appropriate specialist tests."
  ],
  referenceRange: [
    "Use the age- and method-appropriate interval on the validated LIMS report; see Appendix 12.",
    "A commonly cited adult lumbar CSF interval is 0.15–0.45 g/L, but it should be used only if locally validated. Neonatal concentrations are higher and require age-appropriate intervals."
  ],
  analyticalLimitations: [
    "Increased total protein is non-specific; interpret with clinical findings and other CSF results.",
    "Blood contamination during collection can increase protein and limit interpretation.",
    "Haemoglobin and intrathecal contrast media may cause additional method-dependent interference.",
    "Total protein alone cannot diagnose or exclude meningitis, multiple sclerosis or subarachnoid haemorrhage."
  ],
  sampleType: "CSF",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "CSF collected aseptically into a sterile, plain, leak-proof container without additives.",
    "Confirm the minimum volume with the laboratory, particularly when several CSF tests are requested.",
    "Record the collection site if other than lumbar CSF."
  ],
  storageTransport: [
    "Transport immediately to the laboratory, particularly when meningitis is suspected.",
    "If analysis is delayed, follow locally validated processing, refrigeration and stability requirements for the chemistry aliquot.",
    "Follow separate handling requirements for CSF requested for microbiological testing.",
    "See Appendix 9a."
  ],
  rejection: [
    "Identification discrepancies, unsuitable or leaking containers, contamination or inadequate volume require immediate laboratory assessment.",
    "Discuss suitability and test prioritisation before rejecting a difficult-to-recollect CSF specimen.",
    "Assess blood contamination and analytical interference against validated limits.",
    "See Appendix 7."
  ],
  methodology: "Colorimetric assay.",
  turnaround: {
    routine: "",
    urgent: "Urgent processing for suspected meningitis. Same-day reporting is the stated service target; confirm local urgent turnaround time and availability."
  },
  criticalAlert: [
    "No universal critical threshold is specified for CSF total protein.",
    "Communicate results requiring urgent clinical action according to the approved local alert criteria and notification policy; see Appendices 4 and 5. Suspected meningitis or subarachnoid haemorrhage requires urgent clinical assessment regardless of the protein result."
  ],
  diseaseAssociations: [
    "Increased CSF protein may occur in:",
    "Bacterial, tuberculous, fungal or viral meningitis.",
    "Guillain–Barré syndrome.",
    "CNS malignancy or impaired CSF circulation.",
    "CNS haemorrhage.",
    "Inflammatory or demyelinating disorders; total protein may remain normal in multiple sclerosis."
  ],
  conversionFactors: ["mg/dL × 0.01 = g/L.", "g/L × 100 = mg/dL.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "dengue-rapid-test",
  name: "Dengue Rapid Test (NS1, IgG, IgM)",
  synonyms: ["Dengue NS1 Antigen", "Dengue IgM Antibody", "Dengue IgG Antibody"],
  department: "serology",
  limsCode: "DENG_IGG, DENG_IGM, DENG_NS1",
  flags: [],
  summary: "Qualitative rapid detection of dengue.",
  description: [
    "Qualitative rapid detection of dengue non-structural protein 1 (NS1) antigen and/or immunoglobulin M (IgM) and immunoglobulin G (IgG) antibodies to support investigation of suspected dengue.",
    "Interpret each marker separately in relation to symptom onset and clinical findings."
  ],
  indications: [
    "Investigate suspected dengue, including during outbreaks.",
    "NS1: support early diagnosis, particularly within the first 7 days after symptom onset.",
    "IgM: support detection of recent infection, particularly after the first week.",
    "IgG: provide evidence of previous exposure; an isolated positive result does not establish acute infection."
  ],
  referenceRange: [
    "Qualitative: Negative / Positive for each marker.",
    "An invalid test is not interpretable and requires repeat testing according to the manufacturer's instructions. No numerical reference interval applies."
  ],
  analyticalLimitations: [
    "Negative rapid-test results do not exclude dengue, particularly when sampling is early or outside the marker's detection window.",
    "NS1 sensitivity varies by kit and may be lower in secondary infection.",
    "IgM commonly becomes detectable around days 4–5 and may persist for several months.",
    "IgG may persist for years; rapid IgM/IgG patterns alone cannot reliably classify primary versus secondary infection.",
    "Antibody tests may cross-react with other flaviviruses or be affected by previous infection or vaccination.",
    "Further laboratory testing may be required for uncertain or discordant findings. Confirm the locally available referral pathway."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Use only specimen types approved for the specific kit: serum, plasma and/or whole blood, as applicable.",
    "Confirm the collection tube, anticoagulant and minimum volume with the laboratory.",
    "Include the date of symptom onset and relevant previous dengue/flavivirus infection or vaccination history."
  ],
  storageTransport: [
    "Transport promptly.",
    "Follow the kit instructions and locally validated specimen storage temperatures and time limits.",
    "Do not freeze whole blood.",
    "See Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mismatched specimens, incorrect specimen type/tube, leakage or inadequate volume.",
    "Clotted specimens are unsuitable when anticoagulated whole blood or plasma is required; clot formation is expected during serum preparation.",
    "Assess haemolysis, lipaemia and other interference against validated kit limits.",
    "Repeat requests require assessment of clinical need and sampling interval, rather than automatic rejection as duplicates.",
    "See Appendix 7."
  ],
  methodology: "Immunochromatographic rapid assay for NS1 antigen and/or IgM/IgG antibodies, using the locally approved kit.",
  turnaround: {
    routine: "Same-day reporting is the stated service target.",
    urgent: "Urgent testing where available; confirm the kit reading time and local service availability."
  },
  criticalAlert: [
    "Suspected dengue with warning signs or evidence of severe disease requires urgent clinical assessment regardless of rapid-test results.",
    "Promptly communicate relevant results in clinically high-risk cases according to the approved local notification policy; see Appendices 4 and 5. Follow national dengue reporting requirements."
  ],
  diseaseAssociations: [
    "Dengue with or without warning signs.",
    "Severe dengue: severe plasma leakage causing shock or respiratory distress, severe bleeding, or severe organ involvement.",
    "A positive rapid test does not determine disease severity."
  ],
  conversionFactors: "Not applicable — qualitative test.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "dengue-virus-serotyping-rt-pcr",
  name: "Dengue Virus Serotyping RT-PCR",
  synonyms: [
    "Dengue PCR",
    "Dengue RT-PCR",
    "Dengue Virus RNA Detection and Serotyping",
    "Dengue Virus Typing"
  ],
  department: "molecular",
  limsCode: "DEN-VIR1, DEN-VIR2, DEN-VIR3, DEN-VIR4",
  flags: [],
  summary: "Qualitative detection of dengue virus ribonucleic acid (RNA).",
  description: "Qualitative detection of dengue virus ribonucleic acid (RNA) and differentiation of the four serotypes, DENV-1, DENV-2, DENV-3 and DENV-4, using reverse transcription polymerase chain reaction (RT-PCR).",
  indications: [
    "Confirm suspected acute dengue, particularly within the first 7 days after symptom onset.",
    "Identify circulating serotypes for surveillance and outbreak investigation.",
    "Establish dengue infection in clinically suspected cases, including patients with severe illness."
  ],
  referenceRange: [
    "Not detected: dengue virus RNA not detected.",
    "Report the serotype when detected. An invalid or inconclusive result requires further assessment and is not equivalent to a negative result."
  ],
  analyticalLimitations: [
    "A negative result does not exclude dengue, particularly with later sampling, low viral RNA concentration or specimen deterioration.",
    "Interpret alongside illness timing and appropriately timed antigen/antibody testing.",
    "Amplification inhibition or sequence variation affecting primer/probe binding may reduce detection.",
    "Contamination may cause false-positive results.",
    "RT-PCR does not distinguish primary from secondary infection, determine disease severity or exclude other infections."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum is generally preferred. Plasma is acceptable only with an anticoagulant validated for the local assay.",
    "Collect as early as practicable, preferably within the first 7 days after symptom onset.",
    "Record symptom onset and collection dates.",
    "Confirm the collection tube and minimum volume with the performing laboratory."
  ],
  storageTransport: [
    "Transport promptly using the performing laboratory's validated cold-chain requirements.",
    "Confirm refrigerated stability, permitted delay before processing and freezing requirements with the laboratory.",
    "Avoid repeated freeze–thaw cycles.",
    "See Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mismatched specimens, leakage, incorrect specimen type/tube or inadequate volume.",
    "Assess storage deviations and potential interference against validated acceptance criteria.",
    "Clotted anticoagulated specimens may be unsuitable; clot formation is expected during serum preparation.",
    "Do not automatically reject haemolysed specimens or specimens collected after day 5. Discuss suitability and alternative testing with the laboratory.",
    "See Appendix 7."
  ],
  methodology: "Real-time RT-PCR using serotype-specific primers and probes, with appropriate assay controls. Confirm the locally validated assay and whether testing is performed locally or by referral.",
  turnaround: {
    routine: "The stated turnaround time is 1–3 days; confirm local testing frequency and whether referral transport is included.",
    urgent: "Urgent testing depends on service availability."
  },
  criticalAlert: [
    "Promptly communicate positive results according to the approved local clinical and public-health notification requirements; see Appendices 4 and 5.",
    "Suspected dengue with warning signs or severe disease requires urgent clinical assessment regardless of PCR availability or results. Do not await serotyping before clinical action.",
    "Organisms Reported",
    "Dengue virus serotypes DENV-1, DENV-2, DENV-3 and DENV-4, where identified."
  ],
  diseaseAssociations: [
    "Acute dengue virus infection.",
    "Dengue with or without warning signs, or severe dengue.",
    "Serotype identification supports epidemiological investigation but does not determine an individual patient's disease severity."
  ],
  conversionFactors: "Not applicable — qualitative molecular test.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Dengue virus serotypes DENV-1, DENV-2, DENV-3 and DENV-4, where identified."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "direct-antiglobulin-test",
  name: "Direct Antiglobulin Test (DAT / Direct Coombs)",
  synonyms: ["Direct Coombs Test", "Direct Antiglobulin Test"],
  department: "blood-bank",
  limsCode: "DAT",
  flags: [],
  summary: "Detects immunoglobulin and/or complement bound to red blood cells",
  description: "Detects immunoglobulin and/or complement bound to red blood cells in vivo. Supports investigation of immune-mediated haemolysis but does not, by itself, demonstrate haemolysis.",
  indications: [
    "Suspected autoimmune haemolytic anaemia.",
    "Investigation of acute or delayed haemolytic transfusion reactions.",
    "Investigation of haemolytic disease of the fetus and newborn.",
    "Suspected drug-induced immune haemolysis."
  ],
  referenceRange: [
    "Negative: no red-cell-bound immunoglobulin or complement detected by the reagents used."
  ],
  analyticalLimitations: [
    "A positive DAT may occur without haemolysis. Interpret with clinical findings and available haemolysis investigations.",
    "A negative routine DAT does not completely exclude immune haemolysis; specialist testing may be required when suspicion remains high.",
    "Detection depends on reagent specificity and method sensitivity. Anti-IgG-only testing does not detect complement-only sensitisation.",
    "Recent transfusion, medications or passive antibodies may affect interpretation; these do not necessarily represent analytical false positives.",
    "Reaction strength alone does not reliably indicate the severity of haemolysis."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Pink EDTA",
  sampleRequirements: [
    "EDTA whole blood in the laboratory-approved tube.",
    "Confirm minimum volume and tube fill requirements locally, particularly for neonates and children.",
    "Include recent transfusion history, suspected reaction, relevant medications and neonatal/maternal details where applicable."
  ],
  storageTransport: [
    "Transport promptly, urgently if a transfusion reaction or significant haemolysis is suspected.",
    "Follow locally validated temperature and specimen stability requirements.",
    "Avoid collection-related haemolysis; do not freeze whole blood.",
    "See Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mismatched specimens, incorrect tube, clotted EDTA blood, leakage or inadequate volume.",
    "Assess haemolysed specimens with the blood bank: haemolysis may reflect the patient's condition or a transfusion reaction.",
    "Assess repeat requests according to clinical need rather than automatically rejecting duplicates.",
    "See Appendix 7 and blood bank identification requirements."
  ],
  methodology: [
    "Antiglobulin testing by column agglutination or tube method.",
    "Polyspecific testing and/or monospecific anti-IgG and anti-C3d testing may be used to characterise sensitisation. Confirm local availability; further antibody investigation may require referral."
  ],
  turnaround: {
    routine: "Same-day reporting is the stated service target.",
    urgent: "Urgent testing for suspected transfusion reactions or significant haemolysis; confirm local availability and turnaround time."
  },
  criticalAlert: [
    "Promptly communicate clinically significant findings in suspected haemolysis or transfusion reactions according to approved local policy; see Appendices 4 and 5.",
    "A strong positive DAT alone is not a universal critical result. Suspected acute transfusion reactions require immediate clinical and blood bank assessment without awaiting the DAT."
  ],
  diseaseAssociations: [
    "Warm autoimmune haemolytic anaemia.",
    "Cold antibody-mediated haemolysis, including cold agglutinin disease.",
    "Haemolytic disease of the fetus and newborn.",
    "Acute or delayed immune haemolytic transfusion reactions.",
    "Drug-induced immune haemolytic anaemia."
  ],
  conversionFactors: "Not applicable — qualitative test, with reaction grading where reported.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "direct-high-density-lipoprotein",
  name: "Direct High-Density Lipoprotein",
  synonyms: ["HDL Cholesterol", "HDL-C", "Direct HDL Cholesterol"],
  department: "biochemistry",
  limsCode: "DHDLC",
  flags: [],
  summary: "Measures cholesterol carried in high-density lipoproteins.",
  description: "Measures cholesterol carried in high-density lipoproteins using a direct assay. Used as part of the lipid profile and overall cardiovascular risk assessment; it does not measure HDL particle function.",
  indications: [
    "Assess cardiovascular risk alongside other lipid measurements and clinical risk factors.",
    "Investigate dyslipidaemia, including in diabetes and metabolic syndrome.",
    "Review lipid profiles during lifestyle or lipid-lowering treatment; HDL-C is not a standalone treatment target."
  ],
  referenceRange: [
    "Commonly cited adult desirable values:",
    "Males: >1.0 mmol/L.",
    "Females: >1.2 mmol/L.",
    "These are risk-based interpretative values, not universal reference intervals or treatment targets. Use the validated LIMS report and Appendix 12 for locally adopted interpretation.",
    "High HDL-C does not exclude cardiovascular risk."
  ],
  analyticalLimitations: [
    "Interpret with total cholesterol, LDL cholesterol, triglycerides, non-HDL cholesterol and overall cardiovascular risk.",
    "HDL-C concentration does not establish HDL function or guarantee cardiovascular protection.",
    "Marked hypertriglyceridaemia and abnormal lipoprotein composition may affect direct assays; interference limits are method-dependent.",
    "Assess haemolysis, icterus and lipaemia against validated assay limits.",
    "Acute illness and medications may alter circulating lipid concentrations; distinguish these biological changes from analytical interference."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum, or plasma with an anticoagulant validated for the local assay.",
    "Confirm the collection tube, required blood volume and minimum specimen volume with the laboratory.",
    "Fasting is generally unnecessary for HDL-C; follow any fasting requirements for the accompanying lipid investigations.",
    "Record fasting status."
  ],
  storageTransport: [
    "Transport promptly and separate serum/plasma according to local requirements.",
    "Follow locally validated temperature, stability and freezing requirements.",
    "Avoid repeated freeze–thaw cycles where freezing is permitted.",
    "See Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mismatched specimens, incorrect tube, leakage or inadequate volume.",
    "Clotted anticoagulated specimens or residual fibrin that compromises analysis; clot formation is expected during serum preparation.",
    "Reject or qualify specimens only when interference or storage deviations exceed validated limits.",
    "Assess repeat requests according to clinical need rather than automatically rejecting duplicates.",
    "See Appendix 7."
  ],
  methodology: "Homogeneous enzymatic colourimetric assay for direct HDL cholesterol.",
  turnaround: {
    routine: "Same-day reporting is the stated service target; confirm local testing availability.",
    urgent: ""
  },
  criticalAlert: "No universal critical-result threshold is specified for HDL-C. Follow any approved local notification criteria; see Appendices 4 and 5.",
  diseaseAssociations: [
    "Low HDL-C may accompany insulin resistance, metabolic syndrome, type 2 diabetes, obesity and smoking, and is associated with increased cardiovascular risk.",
    "High HDL-C may reflect genetic factors, alcohol exposure or other biological influences; it should not automatically be interpreted as protective."
  ],
  conversionFactors: [
    "mg/dL × 0.0259 = mmol/L.",
    "mmol/L × 38.67 = mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "erythrocyte-sedimentation-rate",
  name: "Erythrocyte Sedimentation Rate (ESR)",
  synonyms: ["Sedimentation Rate", "Westergren ESR"],
  department: "haematology",
  limsCode: "ESR",
  flags: ["critical"],
  summary: "Measures red blood cell sedimentation.",
  description: "Measures red blood cell sedimentation in anticoagulated whole blood over one hour. ESR is a non-specific marker influenced by plasma proteins, particularly fibrinogen and immunoglobulins, and by red blood cell characteristics.",
  indications: [
    "Support assessment and monitoring of selected inflammatory conditions, including giant cell arteritis, polymyalgia rheumatica and rheumatoid arthritis.",
    "Monitor disease activity or response to treatment when ESR is clinically informative.",
    "Contribute to targeted investigation of suspected infection or other inflammatory disease alongside clinical findings and other tests."
  ],
  referenceRange: [
    "Use the locally validated, method-, age- and sex-appropriate reference interval displayed on the LIMS report. See Appendix 12."
  ],
  analyticalLimitations: [
    "Non-specific: an elevated result does not identify the cause, and a normal result does not exclude inflammatory disease.",
    "Anaemia, pregnancy, increasing age and raised immunoglobulins may increase ESR independently of inflammation; haematocrit and red blood cell morphology also affect results.",
    "ESR generally rises and falls more slowly than C-reactive protein (CRP), limiting assessment of rapid changes in acute inflammation.",
    "Delayed testing, inadequate mixing, incorrect blood-to-anticoagulant ratio, temperature variation, vibration or tube tilt may affect results."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Anticoagulated venous whole blood in the locally approved ESR collection tube. Use EDTA whole blood if validated for the method in use.",
    "Fill to the required mark and mix gently after collection. Confirm the minimum volume locally. See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly. Follow the locally validated time and temperature limits for the collection tube and ESR method; avoid excessive heat and do not freeze.",
    "See Appendix 9a."
  ],
  rejection: "Clotted specimens, incorrect collection tubes, incorrect fill or anticoagulant ratio, and specimens outside validated stability limits. Apply identification and other rejection requirements in Appendix 7.",
  methodology: "Manual Westergren method, as stated in the existing entry; confirm the local collection and dilution procedure.",
  turnaround: { routine: "Same day, subject to the local testing schedule.", urgent: "" },
  criticalAlert: [
    "No universal numerical critical threshold.",
    "A markedly elevated ESR, such as >100 mm/h, warrants clinical assessment for an underlying cause. Urgency depends on the clinical presentation; immediate notification follows approved local policy in Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Increased ESR: inflammatory/autoimmune disease, infection and some malignancies, particularly plasma cell myeloma. Anaemia and pregnancy may also increase ESR.",
    "Decreased ESR: polycythaemia, sickle cell disease, spherocytosis and hypofibrinogenaemia."
  ],
  conversionFactors: "Not applicable. Report in millimetres per hour (mm/h).",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "ferritin",
  name: "Ferritin",
  synonyms: ["Serum Ferritin", "Fer"],
  department: "biochemistry",
  limsCode: "FERRITIN",
  flags: [],
  summary: "Ferritin is an intracellular iron-storage protein.",
  description: "Ferritin is an intracellular iron-storage protein. Serum ferritin is the preferred initial marker for assessing iron stores. Low ferritin indicates iron deficiency; normal or elevated concentrations may mask deficiency during inflammation or liver disease.",
  indications: [
    "Diagnose iron deficiency, with or without anaemia.",
    "Assess suspected iron overload alongside transferrin saturation.",
    "Monitor iron stores during iron replacement or management of established iron overload.",
    "Assess iron status in chronic disease alongside the full blood count, transferrin saturation and inflammatory markers when indicated."
  ],
  referenceRange: [
    "Use the validated, method-, age- and sex-appropriate reference interval on the LIMS report. See Appendix 12.",
    "Diagnostic interpretation: ferritin <30 µg/L in adults supports iron deficiency. This is a clinical decision limit, not a reference interval. Higher concentrations do not exclude deficiency when inflammation is present; paediatric, pregnancy and disease-specific interpretation may differ."
  ],
  analyticalLimitations: [
    "Ferritin is an acute-phase reactant: inflammation, infection, liver disease and malignancy may increase concentrations independently of iron stores.",
    "Interpret with C-reactive protein (CRP) when inflammation is suspected, and transferrin saturation where appropriate.",
    "Elevated ferritin alone does not diagnose iron overload.",
    "Assay interference is method-dependent."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in the locally approved collection tube. Plasma may be acceptable if validated for the assay.",
    "Confirm the required collection volume locally. See Appendix 6."
  ],
  storageTransport: [
    "Separate serum from cells promptly after clotting and centrifugation. Follow locally validated separation, storage and transport requirements for the assay.",
    "See Appendix 9a."
  ],
  rejection: "See Appendix 7. Apply assay-specific interference limits; haemolysis, lipaemia or icterus alone does not automatically require rejection.",
  methodology: "2 step immunometric assay.",
  turnaround: {
    routine: "1–3 working days, subject to the local testing schedule and any referral arrangements.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numerical critical threshold. Notify results according to approved local policy in Appendices 4 and 5.",
    "Marked or persistent elevation warrants clinical assessment; urgency depends on the clinical presentation."
  ],
  diseaseAssociations: [
    "Decreased: iron deficiency associated with blood loss, malabsorption, inadequate intake or increased requirements.",
    "Increased: iron overload, including haemochromatosis and repeated transfusions; liver disease, inflammation, infection and malignancy."
  ],
  conversionFactors: ["1 ng/mL = 1 µg/L.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fibrinogen",
  name: "Fibrinogen",
  synonyms: ["Plasma Fibrinogen", "Factor I"],
  department: "haematology",
  limsCode: "FIB",
  flags: ["critical", "pending"],
  summary: "Fibrinogen is a liver-synthesised protein essential for clot formation.",
  description: "Fibrinogen is a liver-synthesised protein essential for clot formation. Thrombin converts fibrinogen to fibrin. The functional assay assesses its ability to form a clot.",
  indications: [
    "Investigate suspected acquired or congenital fibrinogen deficiency or dysfunction.",
    "Support diagnosis and monitoring of disseminated intravascular coagulation (DIC), alongside other coagulation tests and clinical findings.",
    "Assess and monitor major haemorrhage, including obstetric bleeding, and response to fibrinogen replacement.",
    "Assess coagulopathy associated with severe liver disease."
  ],
  referenceRange: [
    "Use the validated, method- and age-appropriate reference interval on the LIMS report. See Appendix 12.",
    "Pregnancy increases fibrinogen concentrations; interpret results in the clinical context."
  ],
  analyticalLimitations: [
    "Haemolysis, lipaemia and icterus may affect results, particularly with optical clot detection; effects depend on the reagent and analyser.",
    "Heparin contamination, high heparin concentrations and direct thrombin inhibitors may cause falsely low functional results, depending on the assay.",
    "Incorrect citrate filling, high haematocrit without citrate adjustment and specimen clotting may produce unreliable results.",
    "Fibrinogen is an acute-phase reactant. Normal or elevated concentrations do not exclude DIC; serial results may be informative."
  ],
  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: [
    "Venous blood collected into a 3.2% sodium citrate tube, maintaining a 9:1 blood-to-citrate ratio. Fill to the marked volume and mix gently immediately after collection.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly at room temperature, avoiding excessive heat. Process and test within locally validated limits.",
    "Do not refrigerate or freeze whole blood. If testing is delayed, separated plasma may require freezing under the laboratory's validated procedure.",
    "See Appendix 9a."
  ],
  rejection: "Clotted specimens, incorrect anticoagulant, unacceptable tube filling or specimens outside validated stability limits. See Appendix 7.",
  methodology: "Clauss functional fibrinogen assay.",
  turnaround: {
    routine: "Same day for routine requests.",
    urgent: "Suspected DIC or major haemorrhage requires urgent testing; confirm availability with the laboratory."
  },
  criticalAlert: [
    "Fibrinogen <1.0 g/L represents severe hypofibrinogenaemia and warrants urgent clinical assessment, particularly with bleeding.",
    "Confirm the approved local critical notification threshold in Appendices 4 and 5. Major haemorrhage protocols may require action at higher concentrations; these are clinical decision limits."
  ],
  diseaseAssociations: [
    "Decreased: DIC, major haemorrhage with consumption or dilution, severe liver disease, excessive fibrinolysis and congenital fibrinogen deficiency or dysfunction.",
    "Increased: inflammation, infection, trauma, surgery, pregnancy and nephrotic syndrome."
  ],
  conversionFactors: ["1 g/L = 100 mg/dL.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fine-needle-aspiration",
  name: "Fine Needle Aspiration (FNA)",
  synonyms: [
    "Fine Needle Aspiration Cytology (FNAC)",
    "Fine Needle Aspiration Biopsy (FNAB)",
    "Aspiration Cytology"
  ],
  department: "cytology",
  limsCode: "FNAB",
  flags: [],
  summary: "Procedure obtaining cells from lesions for Cytology examination.",
  description: "A minimally invasive procedure obtaining cells from palpable or image-guided lesions. Cytological examination assesses benign, malignant, inflammatory or infectious processes.",
  indications: [
    "Assess selected thyroid nodules.",
    "Investigate lymphadenopathy, including suspected metastatic malignancy or infection.",
    "Assess selected breast, salivary gland and soft tissue lesions.",
    "Investigate suspected granulomatous disease, with microbiological testing when indicated."
  ],
  referenceRange: [
    "Not applicable. A descriptive cytological diagnosis and specimen adequacy assessment are reported."
  ],
  analyticalLimitations: [
    "Limited tissue architecture; some diagnoses require core or excision biopsy.",
    "Sampling error, scant cellularity, blood, necrosis or poor preparation may limit interpretation. A benign or non-diagnostic result does not exclude malignancy when clinical or imaging findings remain suspicious.",
    "FNA cytology alone cannot reliably exclude or fully classify lymphoma; additional testing and tissue biopsy may be required.",
    "Thyroid follicular adenoma and carcinoma cannot be reliably distinguished by cytology alone.",
    "Granulomatous inflammation is not specific for tuberculosis. Correlate with clinical findings, imaging and microbiological results."
  ],
  sampleType: "Tissue",
  containerColour: "Specimen jar",
  sampleRequirements: [
    "Aspirated material collected by a trained practitioner, with image guidance where appropriate. Needle size depends on the lesion and technique.",
    "Submit clearly labelled direct smears, air-dried and/or immediately alcohol-fixed as agreed with the laboratory.",
    "Provide patient identifiers, exact anatomical site, laterality where applicable, and relevant clinical/imaging information.",
    "Arrange residual aspirate for cell-block preparation when indicated.",
    "If lymphoma or infection is suspected, contact the laboratory before collection to arrange separate fresh material for appropriate additional tests."
  ],
  storageTransport: [
    "Immediately alcohol-fix smears intended for Papanicolaou staining; rapidly air-dry smears intended for Romanowsky-type staining.",
    "Protect slides in rigid slide carriers. Transport air-dried slides separately from alcohol-fixed material and formalin-containing specimens.",
    "Follow laboratory instructions for residual aspirate, cell-block material and fresh samples; do not apply one refrigeration rule to all preparations.",
    "See Appendix 9a."
  ],
  rejection: [
    "Apply identification, labelling and transport requirements in Appendix 7. Discuss compromised or irreplaceable specimens with the laboratory before rejection.",
    "Unstained slides are acceptable. Scant cellularity, obscuring blood or necrosis, and preparation artefacts may result in a limited or non-diagnostic report rather than automatic rejection."
  ],
  methodology: [
    "Microscopic examination using Papanicolaou and/or Romanowsky-type stains, including Giemsa. Cell-block examination and additional stains or immunocytochemistry may be used when indicated and available.",
    "Flow cytometry, microbiological and molecular testing require appropriate separate specimens and may require referral."
  ],
  turnaround: {
    routine: "2–5 working days, subject to the local service. Additional testing or specialist referral may extend reporting time.",
    urgent: ""
  },
  criticalAlert: [
    "Malignant or suspicious findings require prompt communication and documented clinical follow-up.",
    "Immediately communicate findings requiring urgent clinical action according to approved local policy in Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Benign and malignant thyroid, breast, salivary gland and soft tissue lesions; reactive lymphadenopathy, metastatic malignancy, suspected lymphoma and granulomatous/infectious disease."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fluid-amylase",
  name: "Fluid Amylase",
  synonyms: [
    "Body Fluid Amylase",
    "Ascitic Fluid Amylase",
    "Pleural Fluid Amylase",
    "Drain Fluid Amylase"
  ],
  department: "biochemistry",
  limsCode: "FLAMY",
  flags: [],
  summary: "Measures amylase activity in body fluid.",
  description: [
    "Measures amylase activity in body fluid to support investigation of pancreatic leakage, pancreatic fistula or oesophageal rupture. Increased activity may also occur in some malignant effusions.",
    "Interpret with paired serum amylase, the fluid source, clinical findings and imaging."
  ],
  indications: [
    "Investigate suspected pancreatic ascites or pancreaticopleural fistula.",
    "Assess suspected pancreatic duct leakage or pseudocyst rupture.",
    "Support investigation of oesophageal rupture when pleural fluid is available.",
    "Assess suspected postoperative pancreatic leakage using drain fluid.",
    "Investigate selected unexplained amylase-rich effusions."
  ],
  referenceRange: [
    "No universal reference interval applies to all body fluids.",
    "In pleural fluid, activity above the serum upper reference limit or a fluid amylase ratio >1 indicates an amylase-rich effusion, but does not identify its cause.",
    "Interpret peritoneal and drain fluid according to the clinical indication. Use identical units when calculating ratios. See Appendix 12 for general reference-interval guidance."
  ],
  analyticalLimitations: [
    "Total amylase does not distinguish pancreatic from salivary sources. Isoenzyme analysis may assist selected cases but may require specialist referral.",
    "Blood admixture may alter fluid activity towards the blood value; dilution or sampling away from a leak may reduce diagnostic yield.",
    "Haemolysis, lipaemia, icterus and fluid viscosity may affect measurement, depending on the method.",
    "Confirm assay performance for the relevant body fluid. A low result does not independently exclude leakage or perforation."
  ],
  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Pleural, peritoneal/ascitic, drain or other laboratory-approved fluid in a sterile, plain, leakproof container without additives.",
    "Specify the fluid source, collection time and clinical indication. Submit paired serum for amylase collected at approximately the same time.",
    "Confirm the minimum volume locally. Pancreatic cyst aspirates require separate collection and interpretation arrangements."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated temperature and stability requirements; refrigerate delayed specimens at 2–8 °C if instructed by the laboratory.",
    "Avoid contamination or dilution with irrigation fluid. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Apply local criteria for identification, leaking containers, unsuitable additives, insufficient volume and storage outside validated limits.",
    "Assess haemolysis, lipaemia and icterus against validated interference limits rather than automatically rejecting specimens."
  ],
  methodology: "Enzymatic amylase activity assay with spectrophotometric detection. Confirm the local method and its suitability for body fluids.",
  turnaround: {
    routine: "Same day, subject to local availability.",
    urgent: "Discuss urgent requests directly with the laboratory."
  },
  criticalAlert: [
    "No universal numerical critical threshold.",
    "Results supporting suspected perforation or pancreatic leakage require prompt communication according to approved local policy in Appendices 4 and 5. Suspected perforation requires urgent clinical assessment regardless of the amylase result."
  ],
  diseaseAssociations: [
    "Pancreatic duct disruption, pancreatic ascites, pancreaticopleural fistula, pseudocyst leakage or rupture, postoperative pancreatic fistula, oesophageal rupture and some malignant effusions."
  ],
  conversionFactors: ["Not applicable. Report in U/L.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fluid-creatinine",
  name: "Fluid Creatinine",
  synonyms: [
    "Body Fluid Creatinine",
    "Peritoneal Fluid Creatinine",
    "Ascitic Fluid Creatinine",
    "Drain Fluid Creatinine"
  ],
  department: "biochemistry",
  limsCode: "FLCREA",
  flags: [],
  summary: "Measures creatinine in body fluid.",
  description: "Measures creatinine in body fluid to support investigation of suspected urine leakage. Interpretation requires comparison with a blood creatinine result collected at approximately the same time, together with clinical findings and appropriate imaging.",
  indications: [
    "Investigate suspected urinary ascites following bladder injury or rupture.",
    "Assess suspected postoperative urinary leakage, including ureteric injury or anastomotic leakage.",
    "Investigate suspected urinary fistula or urinoma.",
    "Measure peritoneal dialysate creatinine for prescribed peritoneal transport studies, if offered locally."
  ],
  referenceRange: [
    "No established universal reference interval for body fluid creatinine. Interpret according to the fluid source and clinical indication.",
    "Fluid creatinine ratio = fluid creatinine ÷ serum creatinine, using the same units.",
    "A ratio >1.0 may support the presence of urine but is not independently diagnostic. A small elevation requires cautious interpretation; a ratio near or below 1.0 does not reliably exclude leakage.",
    "For peritoneal dialysate, use the prescribed timed-test interpretation. See Appendix 12 for general reference-interval guidance."
  ],
  analyticalLimitations: [
    "Dilution by other fluid, sampling away from the leak and timing of collection may reduce diagnostic sensitivity.",
    "Absorption of leaked urinary creatinine into the circulation may raise serum creatinine and reduce the ratio.",
    "Haemolysis, lipaemia, icterus and other substances may interfere, depending on the assay.",
    "High glucose concentrations in peritoneal dialysate may interfere with some creatinine methods.",
    "The assay must be validated or verified for the relevant body fluid; serum assay performance cannot automatically be assumed."
  ],
  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Peritoneal/ascitic, drain or other relevant fluid in a sterile, plain, leakproof container without additives.",
    "State the exact fluid source, collection time and clinical indication. Collect a paired blood sample for creatinine at approximately the same time.",
    "Avoid contamination with externally introduced urine or irrigation fluid. Confirm the minimum volume locally."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated storage and transport requirements for the fluid type and assay; refrigerate delayed specimens only as instructed by the laboratory.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7. Incorrect identification, unsuitable containers or additives, and storage outside validated limits require laboratory assessment.",
    "Apply validated interference limits rather than automatically rejecting haemolysed, lipaemic or icteric fluids. Discuss suspected contamination or irreplaceable specimens with the laboratory."
  ],
  methodology: "Enzymatic or Jaffé creatinine assay; confirm the local method and its validation for body fluid testing.",
  turnaround: {
    routine: "Same day, subject to the local testing schedule.",
    urgent: "Discuss urgent trauma or postoperative requests directly with the laboratory."
  },
  criticalAlert: [
    "No universal numerical critical threshold for fluid creatinine or the fluid ratio.",
    "Results supporting suspected urinary leakage require prompt clinical review and communication according to approved local policy in Appendices 4 and 5. Urgency depends on the clinical presentation."
  ],
  diseaseAssociations: [
    "Bladder rupture, ureteric injury, postoperative urinary leakage, urinary fistula and urinoma."
  ],
  conversionFactors: [
    "1 mg/dL = 88.4 µmol/L.",
    "1 µmol/L = 0.0113 mg/dL.",
    "The fluid creatinine ratio is dimensionless.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fluid-culture",
  name: "Fluid Culture",
  synonyms: [
    "Sterile Body Fluid Culture",
    "Abdominal Fluid Culture",
    "Ascitic Fluid Culture",
    "Joint / Synovial Fluid Culture",
    "Bile Culture",
    "Pericardial Fluid Culture",
    "Pleural Fluid Culture"
  ],
  department: "microbiology",
  limsCode: "FLUID",
  flags: [],
  summary: "Microscopy and culture of normally sterile body fluids.",
  description: [
    "Microscopy and culture of normally sterile body fluids to investigate infection, excluding blood and cerebrospinal fluid (CSF). Bile specimens are assessed according to the collection site and clinical context.",
    "Gram stain and bacterial culture are performed. Anaerobic and dedicated fungal investigations depend on clinical indications and laboratory capability."
  ],
  indications: [
    "Suspected peritonitis, septic arthritis, empyema or infective pericarditis.",
    "Suspected biliary or postoperative intra-abdominal infection.",
    "Identification of pathogens and antimicrobial susceptibility to guide treatment."
  ],
  referenceRange: [
    "Expected result: No growth.",
    "A negative result does not exclude infection. Interpret with clinical findings and other fluid investigations."
  ],
  analyticalLimitations: [
    "Prior antimicrobial therapy, low specimen volume and transport delays may reduce recovery.",
    "A negative Gram stain does not exclude infection.",
    "Collection contamination may produce misleading positive results.",
    "Routine bacterial culture does not exclude tuberculosis or other infections requiring specific methods.",
    "Organisms recovered from established drains may reflect colonisation."
  ],
  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Aseptically aspirated fluid in a sterile, leak-proof container; fluid is preferred to a swab.",
    "Collect before antimicrobial therapy where feasible, without delaying urgent treatment.",
    "Clearly identify the anatomical site, collection time and relevant clinical details.",
    "Submit sufficient fluid for the requested investigations; confirm volume requirements with the laboratory.",
    "For suspected spontaneous bacterial peritonitis (SBP), inoculate ascitic fluid into approved blood culture bottles at the bedside according to local protocol. Also retain fluid separately for microscopy and cell count.",
    "For suspected septic arthritis, request cell count and crystal examination in addition to culture; confirm separate specimen requirements.",
    "Discuss suspected anaerobic, fungal or mycobacterial infection with the laboratory before collection where possible."
  ],
  storageTransport: [
    "Transport immediately and process promptly.",
    "If delay is unavoidable, follow validated instructions for the fluid and container; contact the laboratory for advice.",
    "Do not refrigerate inoculated blood culture bottles.",
    "Use approved transport conditions for anaerobic investigations.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimens, leaking containers, unsuitable containers and compromised transport require assessment under Appendix 7: Sample Rejection Criteria (All Departments).",
    "Small-volume, delayed or difficult-to-recollect specimens require laboratory consultation before rejection. Document limitations where testing proceeds. Swabs are suboptimal and require assessment if fluid cannot be obtained."
  ],
  methodology: [
    "Direct Gram stain, bacterial culture, organism identification and antimicrobial susceptibility testing (AST) for clinically significant isolates.",
    "Anaerobic culture and dedicated fungal or mycobacterial investigations are performed or referred according to clinical indications and available validated services."
  ],
  turnaround: {
    routine: "Preliminary culture: Commonly 24–48 hours. Final culture and AST: Dependent on growth, identification and validated incubation protocol; some specimens require longer than 72 hours. Specialist or referral investigations take longer.",
    urgent: "Gram stain: Urgent reporting after processing; usually same day."
  },
  criticalAlert: [
    "Organisms detected on Gram stain or clinically significant growth from a normally sterile site require prompt clinical communication according to the approved local policy.",
    "Notify designated resistant organisms according to local alert requirements.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "Organisms Reported",
    "Examples include Staphylococcus aureus, Streptococcus pneumoniae, other Streptococcus species, Enterococcus species, Escherichia coli, Klebsiella species, Pseudomonas aeruginosa, anaerobes and Candida species.",
    "Interpret skin commensals in context; they may represent contamination or true infection, particularly with prosthetic material. Report identification to the level supported by validated methods."
  ],
  diseaseAssociations: [
    "Spontaneous or secondary bacterial peritonitis.",
    "Septic arthritis.",
    "Empyema.",
    "Infective pericarditis.",
    "Intra-abdominal infection and biliary sepsis."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Examples include Staphylococcus aureus, Streptococcus pneumoniae, other Streptococcus species, Enterococcus species, Escherichia coli, Klebsiella species, Pseudomonas aeruginosa, anaerobes and Candida species.",
        "Interpret skin commensals in context; they may represent contamination or true infection, particularly with prosthetic material. Report identification to the level supported by validated methods."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fluid-glucose",
  name: "Fluid Glucose",
  synonyms: [
    "Body Fluid Glucose",
    "Pleural Fluid Glucose",
    "Ascitic / Peritoneal Fluid Glucose",
    "Synovial Fluid Glucose"
  ],
  department: "biochemistry",
  limsCode: "FLGLUC",
  flags: [],
  summary: "Measures glucose in pleural, peritoneal/ascitic or synovial fluid",
  description: [
    "Measures glucose in pleural, peritoneal/ascitic or synovial fluid. Reduced concentrations may occur with infection, inflammation or malignancy.",
    "Interpret according to fluid type, blood glucose and accompanying investigations."
  ],
  indications: [
    "Support assessment of suspected pleural infection alongside pleural pH, lactate dehydrogenase (LDH), microscopy and culture.",
    "Selected investigation of ascites when secondary peritonitis or bowel perforation is suspected.",
    "Adjunctive assessment of suspected septic or inflammatory arthritis; culture, cell count and crystal examination take priority."
  ],
  referenceRange: [
    "No universal reference interval applies across body fluids. Concentrations often approximate blood glucose but vary with fluid type, disease and sampling conditions.",
    "Pleural fluid glucose <3.3 mmol/L is a clinical decision limit supporting possible complicated parapneumonic effusion in suspected pleural infection when immediate pH measurement is unavailable. Low glucose is not specific for infection.",
    "Refer to Appendix 12: General Guide to Reference Ranges and the validated LIMS report for applicable interpretive information."
  ],
  analyticalLimitations: [
    "Cells and microorganisms may consume glucose after collection, causing falsely low results if processing is delayed.",
    "Blood contamination may affect interpretation and increase cellular glucose consumption during storage.",
    "Blood glucose changes and incomplete equilibration between blood and fluid can affect comparison.",
    "Haemolysis, lipaemia and icterus interference depend on the assay and validated limits.",
    "Normal glucose does not exclude infection, malignancy or inflammatory disease."
  ],
  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Aseptically collected fluid in the laboratory-approved container; clearly identify the anatomical source.",
    "Confirm the accepted container and minimum volume locally.",
    "Collect paired blood glucose close to fluid collection when comparison is required, particularly for ascitic or synovial fluid.",
    "Submit separate specimens for microbiology and other investigations as required."
  ],
  storageTransport: [
    "Transport promptly. Separate fluid from cells promptly in the laboratory according to the validated procedure.",
    "For unavoidable delays, follow locally validated temperature and stability requirements; refrigeration alone does not prevent all glucose consumption.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Unsuitable container, additive or specimen contamination.",
    "Interference exceeding validated assay limits.",
    "Handling or delay that compromises result reliability.",
    "Consult the laboratory before rejecting difficult-to-recollect specimens.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Enzymatic glucose measurement.",
  turnaround: {
    routine: "Usually same day",
    urgent: "Urgent testing where clinically indicated, subject to local service availability."
  },
  criticalAlert: [
    "No universal critical glucose threshold applies to all body fluids.",
    "Low pleural glucose in suspected infection warrants timely clinical review. Critical-result notification follows approved local criteria.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Low pleural glucose: pleural infection, rheumatoid pleuritis, malignancy or tuberculosis.",
    "Low ascitic glucose: may support secondary peritonitis when interpreted with other findings.",
    "Low synovial glucose: septic or inflammatory arthritis."
  ],
  conversionFactors: [
    "mg/dL × 0.0555 = mmol/L.",
    "mmol/L × 18.0 = mg/dL.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "fluid-protein",
  name: "Fluid Protein",
  synonyms: [
    "Body Fluid Total Protein",
    "Pleural Fluid Protein",
    "Ascitic / Peritoneal Fluid Protein"
  ],
  department: "biochemistry",
  limsCode: "FLPROT",
  flags: [],
  summary: "Measures total protein in body fluids.",
  description: [
    "Measures total protein in body fluids. Pleural fluid protein contributes to effusion classification using Light's criteria. Ascitic fluid protein assists interpretation alongside the serum–ascites albumin gradient (SAAG).",
    "Protein alone does not diagnose infection or malignancy."
  ],
  indications: [
    "Classify pleural effusions alongside fluid and serum lactate dehydrogenase (LDH) and serum total protein.",
    "Investigate ascites alongside fluid and serum albumin, cell count and other clinically indicated tests.",
    "Support differentiation of cardiac and cirrhotic ascites when interpreted with SAAG."
  ],
  referenceRange: [
    "No universal reference interval applies across body fluids.",
    "Pleural fluid — Light's criteria: An effusion is classified as exudative if any one criterion is met:",
    "Pleural fluid / serum total protein ratio >0.5.",
    "Pleural fluid / serum LDH ratio >0.6.",
    "Pleural fluid LDH >two-thirds of the serum LDH upper reference limit.",
    "These are classification criteria, not critical thresholds.",
    "Ascitic fluid: Use SAAG rather than transudate/exudate protein cut-offs. SAAG ≥11 g/L supports portal hypertension. Higher ascitic protein in this setting may support a cardiac cause.",
    "Refer to Appendix 12: General Guide to Reference Ranges and the validated LIMS report for applicable interpretive information."
  ],
  analyticalLimitations: [
    "Protein concentration alone cannot determine the cause of an effusion.",
    "Diuretic-treated cardiac effusions may meet Light's criteria despite a transudative origin.",
    "Blood contamination may increase protein; irrigation or other introduced fluid may dilute the specimen.",
    "Haemolysis, lipaemia and icterus interference depend on the assay and validated limits.",
    "Methods must be validated for the submitted fluid type and concentration range."
  ],
  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Pleural or peritoneal/ascitic fluid in a sterile, leak-proof plain container approved by the laboratory.",
    "Clearly identify the anatomical source and collection time.",
    "Confirm minimum volume locally; other fluid types require laboratory confirmation.",
    "For Light's criteria, request paired serum total protein and LDH collected close to fluid sampling.",
    "For SAAG, request separate fluid and serum albumin measurements, preferably from simultaneous sampling.",
    "Submit separate specimens for microbiology where indicated."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated requirements for processing, refrigeration and maximum storage time.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, leaking container or unsuitable additive.",
    "Insufficient volume for reliable testing.",
    "Contamination, deterioration or interference exceeding validated limits.",
    "Consult the laboratory before rejecting difficult-to-recollect specimens.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Colorimetric total protein assay validated for the fluid type.",
  turnaround: { routine: "Usually same day, subject to local service availability.", urgent: "" },
  criticalAlert: [
    "No universal numeric critical threshold applies to fluid total protein.",
    "An exudative classification alone does not require critical-result notification. Follow approved local criteria in Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Pleural transudative effusions: heart failure, cirrhosis or nephrotic syndrome.",
    "Pleural exudative effusions: infection, malignancy, tuberculosis or inflammatory disease.",
    "Ascites: cirrhosis, cardiac disease, malignancy or peritoneal infection; interpret with SAAG and accompanying investigations."
  ],
  conversionFactors: [
    "g/dL × 10 = g/L.",
    "g/L ÷ 10 = g/dL.",
    "Fluid / serum protein ratios are dimensionless; both concentrations must use the same units.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-10",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "serum-folate",
  name: "Serum Folate",
  synonyms: ["Folic Acid", "Vitamin B9"],
  department: "biochemistry",
  limsCode: "FOLATE",
  flags: [],
  summary: "Measures serum folate to investigate suspected deficiency.",
  description: [
    "Measures serum folate to investigate suspected deficiency, particularly in macrocytic or megaloblastic anaemia.",
    "Interpret alongside vitamin B12, full blood count (FBC), dietary history and supplement use."
  ],
  indications: [
    "Investigation of unexplained macrocytosis or suspected megaloblastic anaemia.",
    "Suspected deficiency associated with inadequate intake, malabsorption or alcohol use.",
    "Selected assessment where increased requirements or medicines raise concern for deficiency.",
    "Routine testing solely because of pregnancy or increased requirements is not generally necessary without clinical suspicion."
  ],
  referenceRange: [
    "Use the assay-specific reference interval and deficiency decision limits on the validated LIMS report.",
    "A low serum result may reflect recent reduced intake; recent supplementation may obscure deficiency.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Serum folate reflects recent intake and may rise after meals or supplementation.",
    "Haemolysis may falsely increase folate through release from red blood cells.",
    "Biotin, heterophile antibodies and folate-antagonist medicines may affect some assays; effects are method-dependent.",
    "Coexisting iron deficiency may mask macrocytosis.",
    "Assess vitamin B12 before attributing anaemia solely to folate deficiency. Folic acid may correct anaemia while untreated vitamin B12-related neurological injury continues."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain or serum separator tube.",
    "Confirm minimum serum volume locally.",
    "A fasting sample is preferred where feasible; follow local preparation instructions.",
    "Record recent folate supplements, biotin and relevant medicines.",
    "Allow complete clotting before centrifugation; separate serum promptly according to the validated procedure."
  ],
  storageTransport: [
    "Transport promptly. Store separated serum and protect from light according to the assay's validated requirements.",
    "Confirm permitted refrigeration, freezing and maximum storage times locally.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Incorrect tube, insufficient volume or compromised handling.",
    "Haemolysis or other interference exceeding validated acceptance limits.",
    "Normal clotting in a serum collection tube is not a rejection criterion. Residual fibrin requires laboratory assessment.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Competitive folate-binding assay with chemiluminescent detection.",
  turnaround: {
    routine: "Batched; 2–3 working days, subject to confirmation of the local testing schedule. Referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numeric critical threshold applies to serum folate.",
    "Deficiency in pregnancy warrants timely clinical review but is not automatically a critical laboratory result. Notification follows approved local criteria.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Deficiency: inadequate intake, alcohol use, malabsorption such as coeliac disease, increased requirements or relevant medicines.",
    "Clinical manifestations: megaloblastic anaemia and glossitis.",
    "Inadequate maternal folate around conception is associated with neural tube defects; serum testing does not determine individual fetal risk."
  ],
  conversionFactors: [
    "ng/mL × 2.266 = nmol/L.",
    "nmol/L × 0.441 = ng/mL.",
    "1 ng/mL = 1 µg/L.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "follicle-stimulating-hormone",
  name: "Follicle-Stimulating Hormone (FSH)",
  synonyms: ["Serum FSH", "Follitropin"],
  department: "biochemistry",
  limsCode: "FSH",
  flags: [],
  summary: "Measures a pituitary gonadotrophin.",
  description: [
    "Measures a pituitary gonadotrophin that supports ovarian follicle development and sperm production.",
    "Used to assess gonadal function alongside luteinising hormone (LH), oestradiol or testosterone and clinical findings."
  ],
  indications: [
    "Investigation of amenorrhoea, menstrual irregularities or suspected ovarian insufficiency.",
    "Selected ovarian reserve assessment during infertility evaluation.",
    "Evaluation of male hypogonadism or impaired sperm production.",
    "Specialist assessment of delayed or precocious puberty.",
    "Selected monitoring under specialist reproductive or endocrine protocols.",
    "FSH alone does not establish fertility or diagnose the cause of infertility."
  ],
  referenceRange: [
    "Use the assay-specific intervals on the validated LIMS report, appropriate to age, sex, pubertal stage, menstrual phase and menopausal status.",
    "Postmenopausal FSH is usually raised, but a single concentration is not a universal diagnostic threshold.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "FSH varies with menstrual phase and between cycles; a single result may be misleading.",
    "Pregnancy, hormonal contraception, hormone replacement therapy (HRT) and other hormonal treatments affect concentrations.",
    "For ovarian reserve assessment, elevated oestradiol may suppress FSH and obscure an abnormal basal result.",
    "Heterophile antibodies and biotin may interfere with some assays; susceptibility is method dependent.",
    "Low or apparently normal FSH may be inappropriate when sex hormone concentrations are low."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain or serum separator tube; confirm minimum volume locally.",
    "Record the indication, menstrual cycle day or last menstrual period, menopausal status and relevant hormonal treatment.",
    "For basal ovarian reserve assessment, collect FSH with oestradiol on cycle days 2–4 where applicable.",
    "Other indications may require different timing or specialist-directed testing.",
    "Separate serum according to the validated laboratory procedure."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated refrigeration, freezing and maximum storage requirements for separated serum.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, insufficient volume, compromised handling or interference exceeding validated assay limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Immunoassay with chemiluminescent detection.",
  turnaround: {
    routine: "Batched; 1–3 working days, subject to confirmation of the local schedule. Referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numeric critical threshold applies.",
    "Abnormal FSH requires clinical interpretation and appropriate follow-up. Critical-result notification follows approved local criteria.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Raised FSH: primary ovarian or testicular dysfunction; menopause; premature ovarian insufficiency; gonadal dysgenesis or damage.",
    "Low or inappropriately normal FSH with low sex hormones: hypothalamic or pituitary dysfunction, functional hypothalamic suppression or exogenous hormone effects.",
    "FSH alone does not diagnose polycystic ovary syndrome (PCOS)."
  ],
  conversionFactors: [
    "1 IU/L = 1 mIU/mL.",
    "Use the reporting units specified by the validated assay.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "free-prostate-specific-antigen",
  name: "Free Prostate-Specific Antigen (Free PSA, fPSA)",
  synonyms: ["Free PSA", "Unbound Prostate-Specific Antigen"],
  department: "biochemistry",
  limsCode: "FPSA",
  flags: [],
  summary: "Measures the unbound fraction of prostate-specific antigen (PSA).",
  description: [
    "Measures the unbound fraction of prostate-specific antigen (PSA). When measured with total PSA, it permits calculation of percentage free PSA:",
    "%fPSA = (free PSA ÷ total PSA) × 100.",
    "This provides additional prostate cancer risk information in selected patients with raised total PSA."
  ],
  indications: [
    "Adjunctive risk assessment when total PSA is persistently moderately raised.",
    "Support decisions about further assessment or urology referral alongside age, examination, family history and other findings.",
    "Free PSA is not a standalone screening or diagnostic test and is not routinely used to monitor established prostate cancer."
  ],
  referenceRange: [
    "No standalone diagnostic reference interval applies to free PSA.",
    "Lower %fPSA generally indicates greater prostate cancer likelihood. Common interpretive bands, mainly studied with total PSA 4–10 µg/L, are:",
    "≤10%: relatively higher likelihood.",
    "10–25%: intermediate likelihood.",
    "25%: relatively lower likelihood.",
    "These are contextual risk bands, not diagnostic or critical thresholds. A higher percentage does not exclude cancer.",
    "Use locally approved interpretive guidance. See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Interpret only with total PSA; usefulness depends on the total PSA range and clinical setting.",
    "Free and total PSA must be measured using validated compatible assays; results from different methods are not interchangeable.",
    "Delayed processing or inappropriate storage may alter free PSA and the calculated percentage.",
    "Heterophile antibodies and biotin may interfere with some assays.",
    "Prostatitis, urinary infection, urinary retention and recent prostate procedures can affect interpretation.",
    "Record medicines affecting PSA."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain or serum separator tube; confirm minimum volume locally.",
    "Measure free and total PSA from the same specimen.",
    "Record relevant infection, prostate procedures and medicines.",
    "Follow local preparation instructions concerning ejaculation and recent prostate procedures.",
    "Separate serum promptly according to the validated protocol."
  ],
  storageTransport: [
    "Transport promptly and follow validated free-PSA requirements for refrigeration, freezing and maximum storage time.",
    "For batched or referral testing, confirm that transport and storage preserve both free and total PSA.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, insufficient volume, compromised handling or interference exceeding validated assay limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Immunoassay with chemiluminescent detection. Percentage free PSA is calculated from matched free and total PSA measurements.",
  turnaround: {
    routine: "Batched; 1–3 working days, subject to confirmation of the local schedule. Referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numeric critical threshold applies to free PSA or %fPSA.",
    "Concerning results require appropriate clinical follow-up rather than automatic emergency notification. Follow approved local criteria in Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Lower %fPSA: increased likelihood of prostate cancer in the appropriate clinical setting.",
    "Higher %fPSA: more commonly associated with benign prostatic hyperplasia (BPH).",
    "Prostatic inflammation may overlap with cancer-associated patterns."
  ],
  conversionFactors: [
    "1 ng/mL = 1 µg/L.",
    "Calculate the ratio using identical concentration units. A free/total ratio of 0.25 equals 25%.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "free-t3",
  name: "Free T3 (FT3)",
  synonyms: ["Free T3", "Free Triiodothyronine"],
  department: "biochemistry",
  limsCode: "FT3",
  flags: [],
  summary: "Measures the unbound fraction of triiodothyronine.",
  description: [
    "Measures the unbound fraction of triiodothyronine, an active thyroid hormone produced largely by conversion of thyroxine (T4).",
    "Interpret with thyroid-stimulating hormone (TSH), free thyroxine (FT4) and clinical findings."
  ],
  indications: [
    "Investigation of suspected hyperthyroidism, particularly when TSH is suppressed but FT4 is normal.",
    "Identification of T3 thyrotoxicosis.",
    "Selected monitoring of treated hyperthyroidism alongside TSH and FT4.",
    "FT3 is not a routine screening test and has limited value in diagnosing or monitoring hypothyroidism. Suspected pituitary/hypothalamic thyroid dysfunction is assessed primarily with TSH and FT4."
  ],
  referenceRange: [
    "Use the assay-specific, age-appropriate interval on the validated LIMS report. Apply pregnancy-specific guidance where relevant and available.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "FT3 immunoassays have method-dependent limitations; investigate results inconsistent with TSH, FT4 or the clinical presentation.",
    "Biotin, heterophile antibodies and other assay-reactive antibodies may cause misleading results.",
    "Acute illness may lower FT3 without primary thyroid disease.",
    "Amiodarone, glucocorticoids and some other medicines alter thyroid hormone metabolism or thyroid function; these are physiological effects rather than necessarily assay interference.",
    "Normal FT3 does not exclude hypothyroidism or subclinical thyroid dysfunction."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain or serum separator tube; confirm minimum volume locally.",
    "Record relevant medicines, thyroid hormone treatment and biotin supplements.",
    "Follow laboratory advice on biotin withholding; no single interval applies to every dose and assay.",
    "If taking liothyronine (T3), record the last dose and follow the clinician's sampling instructions.",
    "Separate serum according to the validated laboratory procedure."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated temperature and stability requirements for separated serum, including refrigeration or freezing when indicated.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, insufficient volume, compromised handling or interference exceeding validated assay limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Immunoassay with chemiluminescent detection.",
  turnaround: {
    routine: "Batched; typically 1–3 working days, subject to confirmation of the local schedule.",
    urgent: "Discuss urgent testing arrangements with the laboratory when clinically required."
  },
  criticalAlert: [
    "No universal numeric critical threshold applies to FT3.",
    "Markedly abnormal results require clinical assessment and notification where specified by approved local policy.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Raised FT3: Graves' disease, toxic nodular disease, T3 thyrotoxicosis or excess thyroid hormone exposure; may occur during the thyrotoxic phase of thyroiditis.",
    "Reduced FT3: non-thyroidal illness, medicine effects or hypothyroidism; an isolated low result is not diagnostic."
  ],
  conversionFactors: [
    "pg/mL × 1.54 = pmol/L.",
    "pmol/L × 0.651 = pg/mL.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "free-t4",
  name: "Free T4 (FT4)",
  synonyms: ["Free T4", "Free Thyroxine"],
  department: "biochemistry",
  limsCode: "FT4",
  flags: [],
  summary: "Measures the unbound fraction of circulating thyroxine.",
  description: "Measures the unbound fraction of circulating thyroxine. FT4 supports assessment of thyroid function when interpreted with thyroid-stimulating hormone (TSH) and clinical findings.",
  indications: [
    "Investigation of abnormal TSH or suspected thyroid dysfunction.",
    "Diagnosis and selected monitoring of hypothyroidism and hyperthyroidism.",
    "Assessment and monitoring of central hypothyroidism due to pituitary/hypothalamic disease.",
    "Selected monitoring of thyroid hormone replacement or suppression therapy.",
    "TSH usually guides monitoring of primary hypothyroidism; FT4 is particularly important when TSH is unreliable, including central hypothyroidism."
  ],
  referenceRange: [
    "Use the assay-specific, age-appropriate interval on the validated LIMS report.",
    "In pregnancy, apply validated method- and trimester-specific interpretation; seek laboratory advice if suitable intervals are unavailable.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Biotin, heterophile antibodies and thyroid hormone or other assay-reactive antibodies may cause misleading results.",
    "Severe illness and abnormal hormone-binding proteins may complicate FT4 immunoassay interpretation.",
    "Pregnancy-related changes require appropriate reference intervals.",
    "Recent levothyroxine dosing and medicines affecting thyroid function can alter results.",
    "Normal FT4 does not exclude subclinical thyroid dysfunction or T3 thyrotoxicosis.",
    "Discuss results inconsistent with TSH or the clinical presentation with the laboratory."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain or serum separator tube; confirm minimum volume locally.",
    "Record thyroid medicines, relevant supplements and biotin use.",
    "Follow laboratory advice on biotin withholding; the interval depends on dose, assay and patient factors.",
    "For replacement monitoring, use consistent sampling relative to the levothyroxine dose and record the last dose.",
    "In central hypothyroidism, sampling before the daily dose is preferred; follow specialist instructions.",
    "Separate serum according to the validated laboratory procedure."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated temperature and stability requirements for separated serum, including refrigeration or freezing when indicated.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, insufficient volume, compromised handling or interference exceeding validated assay limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Immunoassay with chemiluminescent detection.",
  turnaround: {
    routine: "Batched; typically 1–3 working days, subject to confirmation of the local schedule.",
    urgent: "Discuss urgent testing arrangements with the laboratory when clinically required."
  },
  criticalAlert: [
    "No universal numeric critical threshold applies to FT4.",
    "Urgent notification follows approved local criteria and clinical context.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Raised FT4: Graves' disease, toxic nodular disease, thyrotoxic-phase thyroiditis or excess thyroxine exposure.",
    "Low FT4 with raised TSH: primary hypothyroidism.",
    "Low FT4 with inappropriately low or normal TSH: possible central hypothyroidism.",
    "Non-thyroidal illness and medicine effects may produce abnormal patterns without primary thyroid disease."
  ],
  conversionFactors: [
    "ng/dL × 12.87 = pmol/L.",
    "pmol/L × 0.0777 = ng/dL.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "gfr-glomerular-filtration-rate",
  name: "GFR – Glomerular Filtration Rate (estimated)",
  synonyms: ["Estimated GFR", "Creatinine-Based eGFR", "CKD-EPI 2021 eGFR"],
  department: "biochemistry",
  limsCode: "EGFR21",
  flags: ["critical"],
  summary: "Estimates renal filtration.",
  description: [
    "Estimates renal filtration from serum creatinine, age and sex using the CKD-EPI 2021 equation without a race coefficient.",
    "Reported in mL/min/1.73 m², indexed to a standard body surface area. It is an estimate rather than a direct measurement of filtration."
  ],
  indications: [
    "Detection, classification and monitoring of chronic kidney disease (CKD), alongside urine albumin-to-creatinine ratio (uACR).",
    "Assessment of kidney function for medication and contrast-related decisions, subject to the relevant clinical guidance.",
    "Assessment of kidney and cardiovascular risk in established CKD.",
    "During acute kidney injury (AKI) or early recovery, assess serial creatinine, urine output and clinical findings rather than relying on routine eGFR."
  ],
  referenceRange: [
    "GFR categories are classification thresholds, not a universal reference interval.",
    "CKD requires abnormalities of kidney structure or function persisting for at least three months. Persistent eGFR <60 mL/min/1.73 m² supports CKD; values ≥60 do not exclude CKD when other markers of kidney damage are present.",
    "G1 and G2 alone do not establish CKD.",
    "See Appendix 11: eGFR & CKD G-Stages References and Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Intended for adults aged ≥18 years; use an appropriate validated equation for younger patients.",
    "Not valid for assessing kidney function in pregnancy.",
    "Unreliable when creatinine is changing rapidly, including AKI and early recovery.",
    "Altered muscle mass, amputation, paralysis or severe malnutrition may cause substantial error.",
    "Diet, creatine supplements and medicines affecting creatinine secretion may alter the estimate without an equivalent change in GFR.",
    "Requires isotope dilution mass spectrometry (IDMS)-traceable creatinine; assay interference affects the calculation.",
    "Consider combined creatinine–cystatin C estimation or measured GFR when greater accuracy is needed and available.",
    "Drug dosing may require a different kidney-function estimate or adjustment for body surface area."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "No additional specimen beyond the sample required for creatinine.",
    "Use the locally approved serum specimen and volume. Accurate age and the sex variable required by the equation must be available."
  ],
  storageTransport: [
    "Follow the validated requirements for the creatinine assay.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Follow the Creatinine entry and Appendix 7: Sample Rejection Criteria (All Departments).",
    "Do not calculate an unqualified numerical eGFR from an invalid creatinine result or missing required demographic data."
  ],
  methodology: [
    "Automatic LIMS calculation using the CKD-EPI 2021 creatinine-based equation and IDMS-traceable creatinine.",
    "Confirm the implemented equation, units and reporting rules locally."
  ],
  turnaround: { routine: "Reported with creatinine, usually same day.", urgent: "" },
  criticalAlert: [
    "A new or unexpected markedly reduced result, particularly <15 mL/min/1.73 m², or suspected acute deterioration requires prompt clinical assessment.",
    "G5 is a CKD classification category, not automatically a critical laboratory threshold. Routine eGFR is unreliable during AKI.",
    "Notification follows Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Reduced filtration may occur with diabetic or hypertensive kidney disease, glomerular disease, tubulointerstitial disease, inherited kidney disease or urinary obstruction.",
    "eGFR does not identify the underlying cause. Interpret with history, urine findings and other investigations."
  ],
  conversionFactors: [
    "Creatinine µmol/L ÷ 88.4 = mg/dL, where required by the calculation.",
    "Indexed eGFR is reported in mL/min/1.73 m². Conversion to an unindexed estimate in mL/min requires the patient's body surface area and clinical justification.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-11",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-15",
  updated: ""
},

{
  id: "ggt-gamma-glutamyl-transferase",
  name: "GGT – Gamma Glutamyl transferase",
  synonyms: ["Gamma-GT", "Gamma-Glutamyl Transpeptidase", "GGTP"],
  department: "biochemistry",
  limsCode: "GGT",
  flags: [],
  summary: "Measures an enzyme used in assessing hepatobiliary disease.",
  description: [
    "Measures an enzyme used in assessing hepatobiliary disease, particularly cholestasis, and in evaluating the source of raised alkaline phosphatase (ALP).",
    "GGT is not a measure of liver synthetic function."
  ],
  indications: [
    "Support assessment of suspected cholestasis or biliary obstruction.",
    "Help determine whether raised ALP has a hepatobiliary origin.",
    "Selected assessment and monitoring of liver disease alongside other liver blood tests.",
    "GGT alone should not be used to diagnose alcohol-related disease or medicine-induced liver injury."
  ],
  referenceRange: [
    "Use the validated age-, sex- and assay-specific interval on the LIMS report.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Raised GGT is nonspecific; interpret with ALP, alanine aminotransferase (ALT), aspartate aminotransferase (AST), bilirubin and clinical findings.",
    "Alcohol and enzyme-inducing medicines, including phenytoin and phenobarbital, may increase GGT without equivalent liver injury.",
    "Metabolic risk factors may accompany raised GGT.",
    "Normal GGT does not exclude liver disease.",
    "Raised ALP with raised GGT supports a hepatobiliary source; normal GGT suggests a non-hepatic source but is not definitive.",
    "Haemolysis, lipaemia and icterus interference depend on the assay and validated limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain or serum separator tube.",
    "Confirm minimum volume locally.",
    "Record relevant medicines and clinical information.",
    "Separate serum according to the validated laboratory procedure."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated temperature and stability requirements for separated serum.",
    "Confirm refrigeration and freezing requirements where testing is delayed.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, insufficient volume, compromised handling or interference exceeding validated assay limits.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Enzymatic kinetic colorimetric assay.",
  turnaround: { routine: "Usually same day, subject to local service availability.", urgent: "" },
  criticalAlert: [
    "No universal numeric critical threshold applies to GGT.",
    "Interpret concerning results with the clinical presentation and accompanying tests. Notification follows approved local criteria.",
    "See Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary."
  ],
  diseaseAssociations: [
    "Cholestatic or obstructive hepatobiliary disease.",
    "Alcohol-related liver disease.",
    "Metabolic dysfunction-associated steatotic liver disease (MASLD; formerly NAFLD).",
    "Hepatitis, cirrhosis or hepatic congestion.",
    "An isolated elevation does not establish a specific diagnosis."
  ],
  conversionFactors: [
    "Reported in U/L; no routine conversion is required.",
    "If needed: U/L × 0.0167 = µkat/L.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "glucose-random",
  name: "Glucose (Random)",
  synonyms: [
    "Random Plasma Glucose",
    "Random Blood Glucose (RBG)",
    "Non-Fasting Glucose"
  ],
  department: "biochemistry",
  limsCode: "RGLU",
  flags: ["critical"],
  summary: "Measures glucose without fasting.",
  description: "Measures glucose without a fasting requirement. Assesses current glycaemia and supports investigation of symptomatic hyperglycaemia, hypoglycaemia and acute metabolic illness.",
  indications: [
    "Immediate assessment of suspected hypoglycaemia or hyperglycaemia.",
    "Assessment of polyuria, polydipsia or unexplained weight loss.",
    "Opportunistic assessment when fasting testing is impractical.",
    "Selected monitoring of current glycaemia in people with diabetes.",
    "HbA1c assesses longer-term glycaemia where appropriate."
  ],
  referenceRange: [
    "Use laboratory interpretive guidance; no single random interval reliably excludes diabetes.",
    "For non-pregnant individuals, random venous plasma glucose ≥11.1 mmol/L with classic hyperglycaemic symptoms or hyperglycaemic crisis meets a diabetes diagnostic criterion.",
    "Without unequivocal symptoms or crisis, arrange confirmation using an appropriate diagnostic test. A lower random result does not exclude diabetes.",
    "Pregnancy requires separate diagnostic criteria.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Meals, activity, stress, acute illness and medicines affect interpretation.",
    "Delayed cell separation causes falsely low glucose through glycolysis.",
    "Glucose-containing infusion contamination may cause falsely high results.",
    "Haemolysis and other assay interferences are method-dependent.",
    "Random glucose cannot independently classify impaired fasting glucose or impaired glucose tolerance.",
    "A single result does not assess long-term glycaemic control."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "No fasting requirement; record meal timing where relevant.",
    "Venous plasma in the approved glucose tube is preferred for diagnosis.",
    "Confirm minimum volume locally.",
    "Serum may be used where accepted under a validated processing protocol.",
    "Avoid contamination from intravenous infusions."
  ],
  storageTransport: [
    "Transport immediately and follow validated glycolysis-prevention and cell-separation requirements.",
    "Fluoride alone does not immediately stabilise glucose. Subsequent storage depends on specimen type and method.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, compromised handling or interference exceeding validated limits.",
    "Clots in an anticoagulated specimen require assessment; normal clotting for serum preparation is expected. Repeat requests are managed under local ordering policy.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Enzymatic assay, glucose oxidase.",
  turnaround: {
    routine: "Usually same day",
    urgent: "Urgent testing for suspected acute metabolic disturbance."
  },
  criticalAlert: [
    "Notify results meeting approved local limits in Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "Proposed <2.5 or >25 mmol/L limits require confirmation. Symptomatic hypoglycaemia or suspected metabolic crisis requires urgent clinical assessment even outside notification thresholds."
  ],
  diseaseAssociations: [
    "Raised glucose: diabetes, stress hyperglycaemia, acute illness or medicine effects.",
    "Low glucose: insulin or other glucose-lowering medicines, severe illness, endocrine deficiency or other causes."
  ],
  conversionFactors: [
    "mg/dL × 0.0555 = mmol/L.",
    "mmol/L × 18.0 = mg/dL.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "glucose-fasting",
  name: "Glucose (Fasting)",
  synonyms: ["Fasting Plasma Glucose (FPG)", "Fasting Blood Glucose (FBG)"],
  department: "biochemistry",
  limsCode: "GLU",
  flags: ["critical"],
  summary: "Measures glucose after an overnight fast.",
  description: [
    "Measures glucose after an overnight fast of at least eight hours without caloric intake; water is permitted.",
    "Used to assess fasting glycaemia and investigate diabetes."
  ],
  indications: [
    "Screening for diabetes in clinically appropriate patients.",
    "Diagnosis of diabetes and impaired fasting glucose.",
    "Selected assessment of fasting glycaemia during diabetes management.",
    "Suspected acute hypoglycaemia requires immediate glucose assessment, not waiting for a fasting appointment."
  ],
  referenceRange: [
    "Use the validated laboratory reference interval; distinguish this from diagnostic decision limits.",
    "For non-pregnant adults:",
    "Fasting plasma glucose ≥7.0 mmol/L meets a diabetes diagnostic criterion. Confirmation is generally required unless hyperglycaemia is unequivocal.",
    "WHO impaired fasting glucose: 6.1–6.9 mmol/L.",
    "ADA impaired fasting glucose: 5.6–6.9 mmol/L.",
    "Use the locally adopted definition consistently. Pregnancy requires separate diagnostic criteria.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Incomplete fasting affects diagnostic interpretation.",
    "Stress, acute illness and medicines may alter glucose physiologically.",
    "Continued cellular glycolysis after collection causes falsely low results; fluoride alone does not immediately prevent this.",
    "Contamination from glucose-containing infusions may cause falsely high results.",
    "Haemolysis, lipaemia and icterus interference depend on the assay.",
    "A single glucose result does not assess long-term glycaemic control."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Venous plasma is preferred for diagnostic testing.",
    "Use the laboratory-approved glucose collection tube; confirm minimum volume and filling requirements locally.",
    "Serum is acceptable only under a validated protocol with prompt separation from cells.",
    "Record fasting status and duration.",
    "Avoid collection contamination from intravenous infusions."
  ],
  storageTransport: [
    "Transport immediately and use validated measures to prevent glycolysis.",
    "Fluoride-oxalate collection does not replace prompt processing. Confirm the permitted time to cell separation and subsequent storage locally.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, unsuitable tube, compromised handling or interference exceeding validated limits.",
    "Incomplete fasting requires clarification or reporting as non-fasting rather than automatic specimen rejection.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Enzymatic assay, colorimetric, glucose oxidase.",
  turnaround: {
    routine: "Usually same day",
    urgent: "Urgent testing according to clinical need and local availability."
  },
  criticalAlert: [
    "Notify results meeting approved local limits in Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "Proposed limits of <2.5 or >25 mmol/L require local confirmation. Diagnostic limits and treatment targets are not critical-notification thresholds."
  ],
  diseaseAssociations: [
    "Raised glucose: diabetes, acute illness or medicine effects.",
    "Low glucose: glucose-lowering medicines, endocrine deficiency, severe illness or other causes requiring clinical assessment."
  ],
  conversionFactors: [
    "mg/dL × 0.0555 = mmol/L.",
    "mmol/L × 18.0 = mg/dL.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "haematocrit",
  name: "Haematocrit (HCT)",
  synonyms: ["Haematocrit", "Packed Cell Volume (PCV)"],
  department: "haematology",
  limsCode: "HCT",
  flags: [],
  summary: "Measure the proportion of whole blood volume occupied by red blood cells.",
  description: [
    "The proportion of whole blood volume occupied by red blood cells, reported in L/L or as a percentage.",
    "Reflects red cell number and volume and is usually reported within the full blood count (FBC)."
  ],
  indications: [
    "Support assessment of anaemia and erythrocytosis.",
    "Interpret changes associated with plasma volume, including dehydration or haemodilution.",
    "Monitor relevant haematological disorders and treatment.",
    "HCT alone should not determine transfusion need."
  ],
  referenceRange: [
    "Use the validated age- and sex-appropriate interval on the LIMS report, with pregnancy and other relevant physiological circumstances considered.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Dehydration may increase HCT through haemoconcentration; haemodilution may lower it.",
    "Intravenous fluid contamination can produce falsely low results.",
    "Cold agglutinins, specimen clotting and haemolysis may compromise automated results.",
    "Delayed analysis can alter red cell volume and HCT.",
    "HCT may initially remain normal after acute blood loss.",
    "Interpret with haemoglobin (Hb), red blood cell count and red cell indices.",
    "Centrifuged PCV methods may be affected by trapped plasma or inadequate centrifugation."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Whole blood in an approved ethylenediaminetetraacetic acid (EDTA) tube.",
    "Fill to the specified tube volume; confirm minimum and paediatric volumes locally.",
    "Mix gently by inversion immediately after collection according to tube instructions.",
    "Avoid contamination from intravenous infusions.",
    "Do not centrifuge specimens intended for automated FBC analysis.",
    "See Appendix 6: Order of Draw Quick Guide and Tube Reference."
  ],
  storageTransport: [
    "Transport promptly and analyse within locally validated limits for HCT and red cell indices.",
    "Protect from excessive heat and freezing. Follow approved storage instructions if analysis is delayed.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Clotted specimen or incorrect anticoagulant.",
    "Unsuitable tube filling, contamination or deterioration preventing reliable testing.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: [
    "Automated haematology analyser: HCT is calculated or derived from red cell volume measurements according to the platform.",
    "Manual centrifuged PCV may be used where locally validated. Confirm the routine method."
  ],
  turnaround: { routine: "Usually same day", urgent: "Urgent testing according to local arrangements." },
  criticalAlert: [
    "Notify results meeting approved criteria in Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "Proposed limits of HCT <0.20 L/L or >0.60 L/L require confirmation against local policy, including age-specific requirements.",
    "These are notification limits, not standalone transfusion or treatment thresholds."
  ],
  diseaseAssociations: [
    "Reduced HCT: anaemia, blood loss or haemodilution.",
    "Increased HCT: polycythaemia vera, secondary erythrocytosis associated with hypoxia or erythropoietin exposure, or relative erythrocytosis from reduced plasma volume."
  ],
  conversionFactors: [
    "HCT in L/L × 100 = HCT in %.",
    "HCT in % ÷ 100 = HCT in L/L.",
    "Example: 0.40 L/L = 40%.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "haemoglobin",
  name: "Haemoglobin (Hb)",
  synonyms: ["Hb", "Haemoglobin Concentration"],
  department: "haematology",
  limsCode: "HGB",
  flags: ["critical", "stat"],
  summary: "Measures the concentration of haemoglobin.",
  description: [
    "Measures the concentration of haemoglobin, the oxygen-carrying protein in red blood cells. Usually reported as part of the full blood count (FBC).",
    "Used to identify anaemia or raised haemoglobin; the concentration also depends on plasma volume."
  ],
  indications: [
    "Identify anaemia and assess its severity.",
    "Support investigation of erythrocytosis.",
    "Monitor treatment of anaemia and therapies affecting blood cell production.",
    "Assess patients with suspected blood loss alongside clinical findings.",
    "Support transfusion assessment with symptoms, bleeding and other patient factors.",
    "Hb alone does not identify the cause of anaemia or determine transfusion need."
  ],
  referenceRange: [
    "Use the validated age- and sex-appropriate interval on the LIMS report, considering pregnancy and relevant physiological circumstances.",
    "Anaemia diagnostic cut-offs, severity categories and transfusion or critical-notification thresholds serve different purposes.",
    "See Appendix 12: General Guide to Reference Ranges."
  ],
  analyticalLimitations: [
    "Inadequate mixing, clotting or intravenous fluid contamination may produce unreliable results.",
    "Lipaemia and marked leucocytosis may falsely increase Hb in some photometric methods.",
    "Specimen haemolysis may compromise FBC interpretation but does not necessarily lower measured Hb.",
    "Dehydration increases concentration; haemodilution lowers it.",
    "Hb may initially remain normal after acute haemorrhage.",
    "Interpret with red cell indices, reticulocytes, blood film and targeted investigations as indicated."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Whole blood in an approved ethylenediaminetetraacetic acid (EDTA) tube.",
    "Fill to the specified tube volume; confirm minimum and paediatric volumes locally.",
    "Mix gently by inversion immediately after collection according to tube instructions.",
    "Avoid contamination from intravenous infusions.",
    "Do not centrifuge specimens intended for automated FBC analysis.",
    "See Appendix 6: Order of Draw Quick Guide and Tube Reference."
  ],
  storageTransport: [
    "Transport promptly and follow validated FBC storage and stability requirements.",
    "Protect from excessive heat and freezing. Delayed storage must preserve the other requested FBC parameters as well as Hb.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen, clotting, incorrect anticoagulant or other specimen defects preventing reliable testing.",
    "Assess haemolysis and interference according to the validated method and local policy.",
    "See Appendix 7: Sample Rejection Criteria (All Departments)."
  ],
  methodology: "Photometric measurement after red cell lysis on an automated haematology analyser.",
  turnaround: { routine: "Usually same day", urgent: "Urgent testing according to local arrangements." },
  criticalAlert: [
    "Notify results meeting approved criteria in Appendix 4: Alert List and Appendix 5: Critical / High-Risk Results Policy Summary.",
    "Proposed limits of Hb <60 g/L or >200 g/L require confirmation against local policy, including age-specific requirements.",
    "Notification limits are not standalone transfusion or treatment thresholds."
  ],
  diseaseAssociations: [
    "Reduced Hb: iron deficiency, haemoglobinopathies, haemolysis, blood loss, marrow disease, chronic inflammation, vitamin B12/folate deficiency or kidney disease.",
    "Raised Hb: polycythaemia vera, secondary erythrocytosis associated with hypoxia or erythropoietin exposure, or haemoconcentration."
  ],
  conversionFactors: [
    "g/dL × 10 = g/L.",
    "g/L ÷ 10 = g/dL.",
    "If molar units are required: g/dL × 0.6206 = mmol/L using the haemoglobin monomer/haem-equivalent convention. Do not apply this factor to tetramer-based reporting.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hba1c-glycated-haemoglobin",
  name: "HbA1c – Glycated Haemoglobin",
  synonyms: ["HbA1c", "A1c", "Glycated Haemoglobin", "Glycosylated Haemoglobin"],
  department: "biochemistry",
  limsCode: "HBA1C",
  flags: [],
  summary: "Measures glycated haemoglobin for type 2 diabetes.",
  description: "Measures glycated haemoglobin as a proportion of total haemoglobin. Reflects average glycaemia over approximately 2–3 months, with greater weighting towards recent weeks.",
  indications: [
    "Diagnosis of type 2 diabetes in suitable patients.",
    "Monitoring long-term glycaemic control and response to treatment.",
    "Assessment of increased risk of developing type 2 diabetes."
  ],
  referenceRange: [
    "Diagnostic decision limits, rather than reference intervals:",
    "Diabetes: ≥6.5% (≥48 mmol/mol).",
    "Increased risk: 6.0–6.4% (42–47 mmol/mol) under Australian guidance; some guidelines use 5.7–6.4% (39–47 mmol/mol). Apply the locally adopted criteria.",
    "HbA1c below 6.5% does not exclude diabetes diagnosed by plasma glucose criteria.",
    "In the absence of unequivocal hyperglycaemia, confirm a diagnostic result with repeat HbA1c or another accepted diagnostic test.",
    "Treatment targets are individualised and differ from diagnostic limits. See Appendix 12 and the validated LIMS report for laboratory reporting guidance."
  ],
  analyticalLimitations: [
    "Shortened red cell survival, haemolytic anaemia, recent blood loss or erythropoietin treatment may produce misleadingly low results.",
    "Significant iron deficiency anaemia may produce misleadingly high results.",
    "Recent transfusion may make results unreliable; the direction of the effect varies.",
    "Haemoglobin variants and elevated fetal haemoglobin may cause method-dependent interference; some haemoglobinopathies also alter red cell survival.",
    "Advanced kidney disease, particularly with anaemia, dialysis or erythropoietin treatment, may reduce reliability.",
    "Pregnancy affects interpretation. HbA1c does not replace glucose-based testing for gestational diabetes.",
    "Do not rely on HbA1c to diagnose suspected rapid-onset or type 1 diabetes, or to assess acute hyperglycaemia or hypoglycaemia.",
    "Investigate discordance with glucose results. Use glucose-based diagnostic testing when HbA1c is unreliable.",
    "Refer to the manufacturer's instructions for assay-specific interference."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA whole blood in the laboratory-approved tube, filled to the required volume. Mix gently after collection; do not centrifuge.",
    "Fasting is not required."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated whole-blood storage temperatures and stability limits for the HbA1c method. Mix gently before analysis.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Clotted specimens, incorrect specimen type, inadequate volume or exceeded validated stability limits require assessment under laboratory policy."
  ],
  methodology: "Validated HbA1c assay with appropriate international standardisation, internal quality control and external quality assessment.",
  turnaround: {
    routine: "Within 24 hours, subject to the confirmed local testing schedule.",
    urgent: ""
  },
  criticalAlert: [
    "No universal numeric critical threshold. Apply approved local notification criteria in Appendices 4 and 5.",
    "Markedly elevated HbA1c requires clinical follow-up. Suspected acute metabolic emergencies require immediate assessment using current glucose and other appropriate tests."
  ],
  diseaseAssociations: [
    "Increased HbA1c: diabetes mellitus and sustained hyperglycaemia.",
    "Unexpectedly high or low results: consider altered red cell survival or assay interference as described above."
  ],
  conversionFactors: [
    "Report as NGSP/DCCT % and/or IFCC mmol/mol, according to laboratory policy.",
    "IFCC mmol/mol = (10.93 × NGSP %) − 23.50.",
    "Approximate equivalents:",
    "6.0% = 42 mmol/mol",
    "6.5% = 48 mmol/mol",
    "7.0% = 53 mmol/mol",
    "8.0% = 64 mmol/mol",
    "9.0% = 75 mmol/mol",
    "10.0% = 86 mmol/mol",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hep-be-antibody-antigen",
  name: "Hep Be Antibody/Antigen",
  synonyms: ["Hepatitis B e Antigen", "anti-HBe"],
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
    "anti-HBe: Negative (non-reactive)",
    "Interpretation depends on full HBV profile."
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
  rejection: "See Appendix 7",
  methodology: "EIA or CLIA",
  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "HBeAg positive = high infectivity → report immediately.",
  diseaseAssociations: [
    "HBeAg positive: active replication, high infectivity, chronic active hepatitis",
    "anti-HBe positive: resolution of acute infection, inactive carrier state, or precore mutant infection"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-13",
    "appendix-14"
  ],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-b-core-igg-igm-antibodies",
  name: "Hepatitis B Core IgG/IgM Antibodies (anti-HBc)",
  synonyms: ["anti-HBc IgG/IgM", "Hepatitis B Core Antibody"],
  department: "serology",
  limsCode: "AHBC",
  flags: [],
  summary: "Antibodies to HBc appear during acute HBV infection",
  description: [
    "Antibodies to HBc appear during acute HBV infection and persist for life.",
    "IgM anti-HBc → recent/acute infection",
    "IgG anti-HBc → past or chronic infection"
  ],
  indications: [
    "Diagnose acute HBV (IgM anti-HBc)",
    "Evidence of past exposure or chronic infection (IgG)",
    "Evaluate \"isolated anti-HBc\" profiles (occult infection)",
    "Used with HBsAg, anti-HBs, HBeAg, HBV DNA"
  ],
  referenceRange: [
    "See Appendix 13 and 14.",
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
  rejection: "See Appendix 7",
  methodology: "EIA or CLIA",
  turnaround: { routine: "1–3 working days", urgent: "" },
  criticalAlert: "IgM anti-HBc positive = acute HBV → urgent notification",
  diseaseAssociations: [
    "Acute HBV (IgM)",
    "Chronic HBV (IgG + HBsAg)",
    "Past resolved HBV (IgG + HBsAg negative)",
    "Occult HBV (isolated anti-HBc, HBV DNA ±)"
  ],
  conversionFactors: "Not applicable",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-13",
    "appendix-14"
  ],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hepatitis-b-surface-antigen-rapid-test",
  name: "Hepatitis B Surface Antigen – Rapid Test (HBsAg-RT)",
  synonyms: ["HBsAg Rapid Test", "Hepatitis B Surface Antigen Rapid Test"],
  department: "serology",
  limsCode: "HEPB-RT",
  flags: [],
  summary: "Qualitative rapid test detecting hepatitis B surface antigen (HBsAg).",
  description: "Qualitative rapid test detecting hepatitis B surface antigen (HBsAg), an early serological marker of hepatitis B virus (HBV) infection. Reactive results indicate possible current infection and require assessment under the approved diagnostic algorithm.",
  indications: [
    "Initial testing for suspected HBV infection.",
    "Antenatal screening within the approved testing pathway.",
    "Testing in clinics or outreach settings where rapid results improve access and linkage to care.",
    "Use for blood donation screening only within an approved, validated blood-service programme. This clinical test entry does not establish donation release requirements."
  ],
  referenceRange: [
    "Qualitative interpretation:",
    "Non-reactive: HBsAg not detected; HBV infection is not excluded.",
    "Reactive: HBsAg detected by the screening assay; assess according to the approved diagnostic algorithm.",
    "Invalid: no reportable result; repeat testing according to the kit instructions.",
    "HBsAg alone does not establish immunity or distinguish acute from chronic infection."
  ],
  analyticalLimitations: [
    "Recent infection, low antigen concentrations or some viral variants may produce non-reactive results.",
    "Occult HBV infection may occur with undetectable HBsAg.",
    "False-reactive results can occur. Recent hepatitis B vaccination may cause transient HBsAg detection.",
    "Sensitivity, specimen interference and interpretation depend on the specific kit. Assess haemolysis, lipaemia and icterus against validated limits.",
    "Incorrect specimen volume, storage or reading time may affect results.",
    "If infection remains suspected despite a non-reactive result, arrange further testing according to exposure timing and clinical findings."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum in the laboratory-approved collection tube; confirm minimum volume locally. Record recent exposure and hepatitis B vaccination where relevant.",
  storageTransport: [
    "Transport promptly. Follow the kit instructions and locally validated specimen storage temperatures, stability limits and freeze–thaw restrictions.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess incorrect specimen type, inadequate volume, exceeded stability limits and assay interference according to the validated kit requirements."
  ],
  methodology: "Qualitative lateral-flow immunoassay using the approved HBsAg rapid-test kit.",
  turnaround: {
    routine: "Rapid result: same day, using the manufacturer-specified reading time. Supplementary or referral testing: according to the confirmed laboratory schedule.",
    urgent: ""
  },
  criticalAlert: [
    "No numeric critical threshold.",
    "Communicate reactive results promptly according to approved policy, particularly in antenatal, peripartum and exposure-related testing. Apply Appendices 4 and 5 where listed.",
    "Follow local public-health notification requirements. For donor specimens, notify the blood service immediately and follow its donation quarantine and release policy."
  ],
  diseaseAssociations: [
    "Acute or chronic HBV infection.",
    "Persistence of HBsAg for at least six months supports chronic infection.",
    "Chronic HBV infection may lead to cirrhosis and hepatocellular carcinoma; this test does not assess disease severity."
  ],
  conversionFactors: "Not applicable; qualitative result.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hepatitis-c-rapid-test",
  name: "Hepatitis C Rapid Test (anti-HCV)",
  synonyms: ["Anti-HCV Rapid Test", "HCV Rapid Antibody Test"],
  department: "serology",
  limsCode: "HCV-RT",
  flags: [],
  summary: "Qualitative rapid immunoassay detecting antibodies to hepatitis C virus.",
  description: "Qualitative rapid immunoassay detecting antibodies to hepatitis C virus (HCV). A reactive result may indicate current or past infection, or false reactivity. Antibody testing alone cannot establish current infection.",
  indications: [
    "Initial screening for HCV infection.",
    "Investigation of unexplained liver disease.",
    "Testing following relevant blood exposure or in people at increased risk, including people who inject drugs."
  ],
  referenceRange: [
    "Qualitative interpretation:",
    "Non-reactive: anti-HCV not detected; recent infection or infection with an impaired antibody response is not excluded.",
    "Reactive: arrange HCV RNA testing to determine current infection.",
    "Invalid: no reportable result; repeat according to the kit instructions.",
    "Use the manufacturer-defined interpretation and validated LIMS report."
  ],
  analyticalLimitations: [
    "Antibody testing cannot distinguish current from resolved infection or establish whether infection is acute or chronic.",
    "Antibodies usually become detectable approximately 8–11 weeks after infection; detection may be delayed in immunocompromised patients.",
    "If recent exposure or acute infection is suspected, consider HCV RNA testing despite a non-reactive antibody result.",
    "Anti-HCV may remain detectable after spontaneous clearance or successful treatment. It is unsuitable for assessing cure or reinfection.",
    "False-reactive results occur; their proportion among reactive results is greater in low-prevalence populations.",
    "Interference, specimen acceptance and reading-time requirements are kit-dependent."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Serum in the laboratory-approved collection tube.",
  storageTransport: [
    "Transport promptly. Follow manufacturer-supported, locally validated specimen temperatures and stability limits.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess incorrect specimen type, insufficient volume, exceeded stability and assay interference against validated kit requirements."
  ],
  methodology: [
    "Qualitative lateral-flow immunochromatographic assay using the approved anti-HCV kit.",
    "Reactive results require follow-up HCV RNA nucleic acid testing. A validated HCV core antigen assay may be an alternative within an approved diagnostic pathway. Confirm local availability and referral arrangements."
  ],
  turnaround: { routine: "Same day.", urgent: "" },
  criticalAlert: [
    "No numeric critical threshold. Communicate reactive results and arrange follow-up according to approved policy.",
    "Apply Appendices 4 and 5 where listed. Follow verified local public-health notification requirements."
  ],
  diseaseAssociations: [
    "Current or resolved HCV infection.",
    "Chronic infection may cause cirrhosis, hepatocellular carcinoma and extrahepatic disease, including mixed cryoglobulinaemia.",
    "A reactive antibody result alone does not establish these diagnoses."
  ],
  conversionFactors: "Not applicable; qualitative result.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12",
    "appendix-13",
    "appendix-14"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hepatitis-b-surface-antigen",
  name: "Hepatitis B Surface Antigen (HBsAg)",
  synonyms: ["HepBsAg", "Hepatitis B Surface Antigen"],
  department: "serology",
  limsCode: "HBSAG",
  flags: [],
  summary: "Detects hepatitis B surface antigen.",
  description: "Detects hepatitis B surface antigen, an early serological marker of hepatitis B virus (HBV) infection. Confirmed positivity generally indicates current infection. Persistence for at least six months supports chronic HBV infection.",
  indications: [
    "Investigation of suspected acute or chronic HBV infection.",
    "Antenatal screening during each pregnancy.",
    "Assessment of HBsAg persistence or loss in established infection.",
    "Blood donation screening only within the approved blood-service testing programme.",
    "HBsAg testing contributes to treatment monitoring but does not replace HBV DNA testing and other clinical assessments."
  ],
  referenceRange: [
    "Qualitative interpretation:",
    "Non-reactive: HBsAg not detected; HBV infection is not excluded.",
    "Reactive: requires interpretation and any supplementary testing specified by the approved assay and diagnostic algorithm.",
    "Interpret with hepatitis B core antibody (anti-HBc), hepatitis B surface antibody (anti-HBs) and clinical history where indicated. Request IgM anti-HBc when acute infection is suspected.",
    "See Appendix 12 and the validated LIMS report for assay-specific reporting guidance."
  ],
  analyticalLimitations: [
    "Early infection, the resolving-infection window period, low antigen concentrations or occult infection may produce non-reactive results.",
    "Some viral variants may escape detection, depending on the assay.",
    "Recent hepatitis B vaccination may cause transient HBsAg detection.",
    "False-reactive results and analytical interference are method-dependent. Assess haemolysis, lipaemia and icterus against validated limits.",
    "A single HBsAg result does not distinguish acute from chronic infection or assess liver disease severity.",
    "Qualitative HBsAg results and signal-to-cut-off values are not measurements of viral load.",
    "If clinical suspicion remains despite a non-reactive result, arrange further testing according to exposure timing and the local diagnostic pathway."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in the laboratory-approved collection tube. Confirm minimum volume locally.",
    "Plasma is acceptable only where authorised by the assay and locally validated.",
    "Provide relevant exposure history, previous HBV results and recent hepatitis B vaccination."
  ],
  storageTransport: [
    "Separate serum and transport promptly. Follow manufacturer-supported, locally validated storage temperatures, stability limits and freeze–thaw restrictions.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess specimen interference against validated assay limits."
  ],
  methodology: "Validated HBsAg immunoassay.",
  turnaround: { routine: "Same day, subject to the local testing schedule.", urgent: "" },
  criticalAlert: [
    "No numeric critical threshold.",
    "Communicate newly reactive results promptly according to approved policy, particularly in antenatal, peripartum and exposure-related testing. Apply Appendices 4 and 5 where listed.",
    "Follow local public-health notification requirements. Donor results require immediate blood-service notification and action under its donation quarantine and release policy."
  ],
  diseaseAssociations: [
    "Acute or chronic HBV infection.",
    "Chronic infection may lead to cirrhosis, hepatocellular carcinoma and liver failure."
  ],
  conversionFactors: "Not applicable to qualitative reporting.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hepatitis-b-surface-antibody",
  name: "Hepatitis B Surface Antibody (Anti-HBs)",
  synonyms: ["Hepatitis B Surface Antibody", "Anti-HBs", "HBsAb"],
  department: "serology",
  limsCode: "HBSAB",
  flags: [],
  summary: "Detects antibodies to hepatitis B surface antigen.",
  description: "Detects antibodies to hepatitis B surface antigen. Anti-HBs usually develops after successful vaccination or recovery from infection. Interpret with vaccination history and other hepatitis B markers where indicated.",
  indications: [
    "Assess vaccine response in groups requiring documented immunity, including healthcare workers and selected immunocompromised patients.",
    "Support identification of resolved infection when interpreted with hepatitis B surface antigen (HBsAg) and total hepatitis B core antibody (anti-HBc).",
    "Contribute to hepatitis B serological assessment.",
    "For routine post-vaccination response testing in indicated adults, collect 4–8 weeks after completing the vaccine course. Perinatally exposed infants require a separate testing schedule."
  ],
  referenceRange: [
    "Post-vaccination decision threshold:",
    "≥10 mIU/mL: adequate antibody response after a completed vaccine course.",
    "<10 mIU/mL: adequate response is not demonstrated at the time of testing; interpret with vaccination history and previous results.",
    "A low or undetectable result does not necessarily indicate loss of protection in an immunocompetent person with a documented previous adequate response.",
    "For qualitative assays, use the validated assay interpretation; confirm that the method can assess the protective threshold.",
    "See Appendix 12 and the validated LIMS report."
  ],
  analyticalLimitations: [
    "Anti-HBs alone cannot distinguish vaccine-induced immunity from resolved infection or exclude current infection.",
    "Anti-HBs may be absent during acute infection, including the serological window period; additional markers are required.",
    "Immunocompromised patients may have reduced or absent antibody responses.",
    "Recent hepatitis B immunoglobulin or other antibody-containing products may cause transient passive anti-HBs detection.",
    "False-reactive or false-negative results and analytical interference are assay-dependent. Investigate unexpected or discordant results according to laboratory policy."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in the laboratory-approved collection tube. Confirm minimum volume locally.",
    "Provide vaccination dates, previous antibody results and recent immunoglobulin administration where relevant."
  ],
  storageTransport: [
    "Separate serum and transport promptly. Follow locally validated assay requirements for refrigeration, freezing and maximum transport delay.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess haemolysis, lipaemia and icterus against validated assay interference limits."
  ],
  methodology: [
    "Validated anti-HBs immunoassay. Confirm the local platform and whether results are quantitative or qualitative.",
    "Post-vaccination assessment requires a method capable of determining whether anti-HBs meets the 10 mIU/mL threshold."
  ],
  turnaround: { routine: "1 - 3 working days, subject to the testing schedule.", urgent: "" },
  criticalAlert: [
    "No universal numeric critical threshold. Apply approved local notification criteria in Appendices 4 and 5.",
    "A low result may require follow-up in occupational exposure or vaccination assessment. Anti-HBs does not replace HBsAg testing for antenatal infection screening."
  ],
  diseaseAssociations: [
    "HBsAg negative, total anti-HBc negative, anti-HBs positive: consistent with vaccine-induced immunity.",
    "HBsAg negative, total anti-HBc positive, anti-HBs positive: consistent with resolved infection; reactivation remains possible during immunosuppression.",
    "Anti-HBs negative alone: insufficient to determine susceptibility or infection status."
  ],
  conversionFactors: [
    "1 mIU/mL = 1 IU/L.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hepb-viral-load",
  name: "HepB Viral load",
  synonyms: [
    "Quantitative HBV DNA",
    "HBV Quantitative PCR",
    "Hepatitis B Viral Load"
  ],
  department: "serology",
  limsCode: "HEPB-VL",
  flags: [],
  summary: "Quantifies hepatitis B virus (HBV) DNA in plasma or serum.",
  description: "Quantifies hepatitis B virus (HBV) DNA in plasma or serum. Assesses circulating viral load and supports treatment decisions and monitoring. Interpret with hepatitis B serology, liver tests and clinical findings.",
  indications: [
    "Assess viral replication in established HBV infection.",
    "Support assessment of antiviral treatment eligibility.",
    "Monitor viral suppression, breakthrough or reactivation.",
    "Assess mother-to-child transmission risk in HBsAg-positive pregnant patients.",
    "Support assessment before and during immunosuppressive treatment where indicated.",
    "Treatment cessation requires specialist assessment; viral load alone is insufficient."
  ],
  referenceRange: [
    "No conventional reference interval. Interpret using the validated assay report:",
    "Not detected: HBV DNA not detected; this does not exclude infection or low-level viraemia.",
    "Detected below the lower limit of quantification: HBV DNA detected, but no reliable numeric concentration can be assigned.",
    "Quantifiable: report the concentration in IU/mL.",
    "Above the upper quantification limit: report according to the validated assay procedure.",
    "Treatment decision thresholds depend on the adopted guideline and clinical context. In HBsAg-positive pregnancy, ≥200,000 IU/mL is a WHO decision threshold for transmission-prevention assessment.",
    "See the validated LIMS report for assay limits and reporting comments."
  ],
  analyticalLimitations: [
    "Low concentrations near the detection limit may be detected inconsistently.",
    "Inhibition, unsuitable specimen handling or contamination may affect results.",
    "Results may differ between assays; use the same method for serial monitoring where possible.",
    "Viral load testing does not determine HBV genotype or identify antiviral resistance mutations; these require separate testing when indicated.",
    "A single result does not establish infection phase, liver disease severity or transmission risk in isolation.",
    "Suppressed or undetectable HBV DNA does not establish cure or eliminate reactivation risk."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA plasma or serum.",
    "Confirm collection tube, minimum volume, separation requirements and whether a dedicated specimen is required. Use only validated anticoagulants and collection tubes."
  ],
  storageTransport: [
    "Separate plasma or serum within the performing laboratory's validated time limit. Follow its requirements for refrigerated transport, freezing and freeze–thaw restrictions.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments). Confirm additional referral requirements where applicable."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Apply assay-specific criteria for specimen type, volume, stability and interference. Inhibited or invalid tests require repeat testing or recollection according to laboratory policy."
  ],
  methodology: [
    "Quantitative nucleic acid amplification, usually real-time polymerase chain reaction (PCR), standardised to WHO international reference material.",
    "Report in IU/mL, with log10 IU/mL where provided. Confirm the assay and whether testing is performed locally or by referral."
  ],
  turnaround: { routine: "1 -3 working days, subject to the local schedule.", urgent: "" },
  criticalAlert: [
    "No universal numeric critical threshold. Apply approved notification criteria in Appendices 4 and 5.",
    "Results relevant to pregnancy, suspected reactivation or treatment breakthrough require timely clinical review. Arrange expedited testing or communication where clinically necessary."
  ],
  diseaseAssociations: [
    "Acute or chronic HBV infection.",
    "Increasing or high viral load may accompany active replication, reactivation or treatment breakthrough.",
    "Low viral load may occur during effective treatment or some phases of untreated infection; it does not alone establish inactive disease."
  ],
  conversionFactors: [
    "log10 IU/mL = log10 of the concentration in IU/mL.",
    "A change of 1 log10 represents a tenfold change.",
    "Conversion between copies/mL and IU/mL is assay-specific; use only the performing laboratory's validated factor.",
    "See Appendix 10: Unit Conversion Factors (SI Conventional Units)."
  ],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hiv-1-2-antibody",
  name: "HIV 1/2 antibody",
  synonyms: ["HIV Antibody Test", "HIV-1/2 Serology"],
  department: "serology",
  limsCode: "HIV",
  flags: ["critical"],
  summary: "Detects antibodies to human immunodeficiency virus.",
  description: "Detects antibodies to human immunodeficiency virus types 1 and 2 (HIV-1 and HIV-2). Used within an approved diagnostic testing algorithm. A single reactive screening result does not establish HIV infection.",
  indications: [
    "HIV testing in symptomatic patients and people with relevant exposure or increased risk.",
    "Antenatal testing within the national programme.",
    "Assessment following occupational or other potential exposure.",
    "Testing within approved partner services and surveillance programmes.",
    "Blood donation screening only within the approved blood-service testing programme."
  ],
  referenceRange: [
    "Qualitative interpretation:",
    "Non-reactive: HIV antibodies not detected; recent infection is not excluded.",
    "Reactive: screening reactivity requiring completion of the approved diagnostic algorithm.",
    "Inconclusive or discordant supplementary results: follow the national repeat-testing or referral pathway; do not report as confirmed infection.",
    "Use the validated assay interpretation and LIMS report."
  ],
  analyticalLimitations: [
    "Antibody-only tests usually detect infection 23–90 days after exposure; timing varies by assay and patient.",
    "Antiretroviral treatment, pre-exposure prophylaxis (PrEP) or post-exposure prophylaxis (PEP) may delay detection.",
    "If acute HIV infection is suspected despite non-reactive serology, seek prompt assessment using antigen/antibody testing and/or appropriate nucleic acid testing.",
    "False-reactive results can occur. A reactive screening result requires further testing regardless of presumed cause.",
    "HIV-1/HIV-2 differentiation depends on the assay and supplementary testing.",
    "Maternal antibodies limit interpretation in children younger than 18 months; virological testing is required to diagnose infection.",
    "Antibody results do not establish infection duration, disease stage or viral load.",
    "Assay interference is method-dependent; refer to the manufacturer's instructions."
  ],
  sampleType: "Serum",
  containerColour: "",
  sampleRequirements: [
    "Serum in the laboratory-approved collection tube. Confirm minimum volume locally.",
    "Plasma is acceptable only where authorised by the assay and locally validated.",
    "Provide exposure date, previous HIV results and relevant antiretroviral medicine use."
  ],
  storageTransport: [
    "Separate serum and transport promptly. Follow manufacturer-supported, locally validated refrigeration, freezing and freeze–thaw requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess haemolysis, lipaemia and icterus against validated assay interference limits."
  ],
  methodology: [
    "Validated HIV-1/2 immunoassay.",
    "Complete reactive-result assessment using the approved national algorithm. WHO recommends three consecutive reactive results using a validated serial combination of assays for serological diagnosis, with retesting to verify the diagnosis before treatment."
  ],
  turnaround: {
    routine: "1–3 working days, subject to the confirmed local schedule. Supplementary or referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "No numeric critical threshold.",
    "Communicate newly reactive or confirmed positive results promptly and confidentially according to approved policy, particularly in antenatal, peripartum or suspected acute infection settings.",
    "Apply Appendices 4 and 5 where listed. Follow verified national notification requirements. Donor specimens require immediate blood-service notification and action under its donation quarantine and release policy."
  ],
  diseaseAssociations: [
    "Confirmed HIV-1 or HIV-2 infection. Antibody detection alone does not distinguish recent from longstanding infection or establish acquired immunodeficiency syndrome (AIDS)."
  ],
  conversionFactors: "Not applicable; qualitative result.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-13",
    "appendix-15"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "hiv-rapid-tests",
  name: "HIV Rapid Tests",
  synonyms: ["HIV Antibody Test", "HIV-1/2 Serology"],
  department: "serology",
  limsCode: "HIV-RT",
  flags: ["stat"],
  summary: "Qualitative lateral-flow assay detecting HIV-1/2 antibodies",
  description: [
    "Detects antibodies to human immunodeficiency virus types 1 and 2 (HIV-1/2). Used as part of a validated HIV diagnostic testing algorithm.",
    "Confirm whether the local assay detects antibodies alone or also HIV p24 antigen; combined antigen/antibody testing requires appropriate naming and interpretation."
  ],
  indications: [
    "Initial testing for suspected HIV infection or relevant exposure.",
    "Antenatal testing according to the national programme.",
    "Testing associated with voluntary partner services and prevention programmes.",
    "Blood donation screening only within the approved blood-service testing programme."
  ],
  referenceRange: [
    "Qualitative interpretation:",
    "Non-reactive: HIV antibodies not detected; recent infection is not excluded.",
    "Reactive: preliminary screening result; complete the approved diagnostic algorithm before reporting confirmed HIV infection.",
    "Inconclusive or discordant diagnostic results: further testing and/or repeat sampling according to the national algorithm.",
    "Refer to the validated LIMS report for assay-specific interpretation."
  ],
  analyticalLimitations: [
    "Antibody-only tests usually detect infection 23–90 days after exposure in the absence of antiretroviral medication. Detection timing varies by assay and specimen.",
    "Suspected acute infection requires assessment for earlier-detecting antigen/antibody or nucleic acid testing, where available.",
    "Pre-exposure prophylaxis, post-exposure prophylaxis or early antiretroviral treatment may alter detection timing.",
    "False-reactive results can occur; one reactive assay is insufficient for diagnosis.",
    "A combined screening result may not distinguish HIV-1 from HIV-2; differentiation requires appropriate supplementary testing.",
    "Maternal antibodies limit interpretation in perinatally exposed children younger than 18 months; use the approved virological diagnostic pathway.",
    "Antibody testing does not determine infection duration, viral load or disease stage.",
    "Analytical interference is assay-dependent; follow the manufacturer's instructions and validated laboratory limits."
  ],
  sampleType: "Plasma",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Serum in the laboratory-approved collection tube. Confirm minimum volume locally.",
    "Plasma may be accepted if authorised by the assay and locally validated.",
    "Provide relevant exposure timing, previous results and antiretroviral medication history."
  ],
  storageTransport: [
    "Separate serum and transport promptly. Follow manufacturer-supported, locally validated refrigeration, freezing and stability requirements.",
    "See Appendix 9a: Storage / Transport – Quick Reference Table (All Departments)."
  ],
  rejection: [
    "See Appendix 7: Sample Rejection Criteria (All Departments).",
    "Assess haemolysis, lipaemia and icterus against validated assay interference limits."
  ],
  methodology: [
    "Validated HIV-1/2 antibody immunoassay.",
    "Reactive results proceed through the approved national algorithm. WHO recommends a validated three-test serial strategy; repeated testing with the same assay does not constitute three independent diagnostic tests."
  ],
  turnaround: {
    routine: "1–3 working days, subject to the confirmed testing schedule. Supplementary or referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "No numeric critical threshold.",
    "Communicate newly reactive screening results and confirmed diagnoses promptly and confidentially according to approved policy. Clearly identify results awaiting diagnostic completion.",
    "Expedite assessment where pregnancy, labour or suspected acute infection makes the result time-sensitive. Apply Appendices 4 and 5 where listed.",
    "Donor results require immediate blood-service notification and action under its donation quarantine and release policy."
  ],
  diseaseAssociations: [
    "Confirmed HIV-1 or HIV-2 infection.",
    "Antibody detection alone does not establish chronicity or diagnose acquired immunodeficiency syndrome (AIDS)."
  ],
  conversionFactors: "Not applicable; qualitative result.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-13",
    "appendix-15"
  ],
  lastReviewed: "",
  added: "2026-09-23",
  updated: ""
},

{
  id: "hiv-viral-load",
  name: "HIV Viral Load (HIV RNA PCR)",
  synonyms: [
    "HIV RNA Quantification",
    "HIV Viral Load",
    "HIV-1 RNA Viral Load (where applicable)"
  ],
  department: "serology",
  limsCode: "HIV-VL",
  flags: [],
  summary: "Quantifies human immunodeficiency virus (HIV) ribonucleic acid (RNA) in plasma.",
  description: "Quantifies human immunodeficiency virus (HIV) ribonucleic acid (RNA) in plasma to assess viral replication and response to antiretroviral therapy (ART). Most routine assays measure HIV-1 RNA.",
  indications: [
    "Baseline assessment and monitoring of established HIV infection.",
    "Monitor response to ART and investigate suspected virological failure.",
    "Assess maternal viral load during pregnancy to inform prevention of mother-to-child transmission.",
    "Support investigation of suspected acute infection or inconclusive serology only where the assay is validated for diagnostic use and the national testing algorithm permits.",
    "ART eligibility does not depend on viral load."
  ],
  referenceRange: [
    "No conventional reference interval applies. Interpret using the assay's reporting limits and the validated laboratory information management system (LIMS) report; see Appendix 12.",
    "Not detected: HIV RNA was not detected; does not exclude HIV infection or indicate cure.",
    "Detected below the lower limit of quantification: RNA is detected but cannot be reliably quantified.",
    "Quantifiable: report the measured viral load in copies/mL, with log₁₀ copies/mL where provided.",
    "The treatment goal is sustained viral suppression. WHO programme categories are: undetectable (not detected), suppressed (detected but ≤1,000 copies/mL), and unsuppressed (>1,000 copies/mL). These are programme decision categories, not reference intervals or critical-result thresholds."
  ],
  analyticalLimitations: [
    "HIV-1 viral load assays generally do not measure HIV-2; specialist testing is required where indicated.",
    "Very low viral concentrations, RNA degradation, amplification inhibitors or viral sequence variation may cause underestimation or non-detection.",
    "Results can vary between platforms; use the same method for serial monitoring where practicable.",
    "A single low-level detectable result does not establish treatment failure. Interpret trends with treatment history and adherence.",
    "Viral load does not directly measure immune function; assess separately where clinically indicated."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA plasma using a collection tube accepted by the testing laboratory.",
    "Confirm the required whole-blood collection volume and minimum plasma volume before collection.",
    "Alternative specimens, including dried blood spots, require a specifically validated assay and approved testing pathway.",
    "See Appendix 6 for tube guidance."
  ],
  storageTransport: [
    "Separate plasma and transport within the testing laboratory's validated time and temperature limits.",
    "Refrigerate or freeze according to the applicable assay and referral requirements.",
    "Maintain the required cold chain and minimise repeated freeze–thaw cycles.",
    "See Appendix 9a for locally approved requirements."
  ],
  rejection: [
    "See Appendix 7. Unsuitable specimens include incorrect identification, unacceptable specimen type or tube, insufficient volume, leakage, or handling outside validated stability limits.",
    "Assess haemolysis, lipaemia and icterus against assay-specific interference limits rather than rejecting automatically."
  ],
  methodology: "Quantitative nucleic acid amplification testing, commonly real-time reverse transcription polymerase chain reaction (RT-PCR). Report in copies/mL and, where applicable, log₁₀ copies/mL.",
  turnaround: {
    routine: "Confirm the local or referral turnaround time, including batching and transport. The proposed 7–14 working days requires verification.",
    urgent: "Discuss urgent pregnancy-related or diagnostic requests with the laboratory."
  },
  criticalAlert: [
    "Notify according to the approved alert list and high-risk results policy; see Appendices 4 and 5.",
    "Unexpected results suggesting new infection, significant virological rebound or unsuppressed viraemia during pregnancy require prompt clinical review and communication according to the agreed pathway.",
    "Do not classify every detectable result or >100,000 copies/mL as automatically critical."
  ],
  diseaseAssociations: [
    "HIV infection; serial viral load reflects viral replication and response to ART.",
    "Persistent or rising viraemia during ART may indicate adherence difficulties, inadequate drug exposure or resistance; viral load alone cannot identify the cause.",
    "Sustained viral suppression on ART prevents sexual transmission (Undetectable = Untransmittable; U=U). This does not indicate cure or guarantee prevention of transmission through breastfeeding or other routes."
  ],
  conversionFactors: [
    "No universal conversion between copies/mL and international units/mL; use an assay-specific validated factor if required.",
    "log₁₀ copies/mL = log₁₀ of the viral load in copies/mL. Do not calculate a logarithm for \"not detected\"."
  ],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "international-normalised-ratio",
  name: "International Normalised Ratio (INR)",
  synonyms: ["INR", "Standardised Prothrombin Time Ratio"],
  department: "haematology",
  limsCode: "INR",
  flags: ["critical", "stat"],
  summary: "The international normalised ratio (INR) is calculated from the prothrombin time (PT).",
  description: "The international normalised ratio (INR) is calculated from the prothrombin time (PT), using the thromboplastin reagent's international sensitivity index (ISI). It standardises PT results primarily for monitoring vitamin K antagonists such as warfarin.",
  indications: [
    "Monitor warfarin therapy.",
    "Assess suspected coagulation abnormalities alongside other appropriate tests.",
    "Support assessment of liver synthetic dysfunction and vitamin K deficiency.",
    "Pre-operative assessment when clinically indicated by bleeding history, liver disease, anticoagulant use or procedure requirements."
  ],
  referenceRange: [
    "For patients not receiving anticoagulants, use the locally validated reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "Warfarin therapeutic ranges — not reference intervals:",
    "Atrial fibrillation and treatment or secondary prevention of deep vein thrombosis/pulmonary embolism: commonly INR 2.0–3.0.",
    "Mechanical heart valves: target depends on valve type, position and thromboembolic risk. Many current-generation mechanical aortic valves use 2.0–3.0; mechanical mitral valves commonly use 2.5–3.5.",
    "Always interpret against the patient's prescribed target."
  ],
  analyticalLimitations: [
    "INR standardisation is intended for vitamin K antagonist monitoring; results may be less comparable between methods in other causes of prolonged PT.",
    "INR does not reliably measure direct oral anticoagulant (DOAC) activity. A normal result does not exclude a clinically significant drug concentration.",
    "Underfilling, unadjusted high haematocrit, clotting or heparin contamination may produce misleading results.",
    "Haemolysis, lipaemia, icterus and paraproteins may affect some methods; assess against validated assay limits.",
    "A normal PT/INR does not exclude all bleeding disorders.",
    "INR alone does not reliably predict bleeding risk in liver disease or before invasive procedures."
  ],
  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: [
    "Venous blood collected into a laboratory-approved 3.2% sodium citrate tube.",
    "Fill to the marked volume to maintain a 9:1 blood-to-citrate ratio; mix gently immediately after collection.",
    "If haematocrit is >0.55 L/L (55%), contact the laboratory before collection for citrate adjustment.",
    "Avoid contamination from anticoagulant-containing intravenous lines.",
    "See Appendix 6 for tube and order-of-draw."
  ],
  storageTransport: [
    "Transport promptly at controlled ambient temperature; avoid excessive heat.",
    "Do not refrigerate or place citrated whole blood on ice.",
    "Follow locally validated collection-to-testing limits. If delay is expected, contact the laboratory for plasma separation and storage instructions.",
    "See Appendix 9a for approved local requirements."
  ],
  rejection: [
    "See Appendix 7.",
    "Unlabelled or mismatched specimen.",
    "Clotted specimen, incorrect tube or unacceptable filling volume.",
    "Handling or transport outside validated stability limits.",
    "Interference exceeding validated assay limits.",
    "Haemolysis alone is not an automatic rejection criterion. Duplicate requests should be assessed according to clinical need and local requesting policy."
  ],
  methodology: [
    "PT measured by a clot-based assay after adding thromboplastin and calcium to citrated plasma.",
    "INR = (patient PT ÷ mean normal PT)^ISI, using the validated reagent–instrument system."
  ],
  turnaround: {
    routine: "Same day for routine testing, subject to local service arrangements.",
    urgent: "Confirm availability and turnaround time for urgent requests."
  },
  criticalAlert: [
    "Apply the approved alert threshold and notification procedure in Appendices 4 and 5.",
    "The proposed INR >5.0 threshold requires local confirmation. Significant bleeding requires urgent clinical assessment regardless of INR."
  ],
  diseaseAssociations: [
    "Increased INR: warfarin effect, vitamin K deficiency, liver dysfunction, disseminated intravascular coagulation or deficiencies of factor VII/common-pathway factors.",
    "Some other anticoagulants may prolong PT/INR, depending on the reagent.",
    "INR below the prescribed warfarin target indicates subtherapeutic anticoagulation; possible causes include missed doses, drug interactions or changes in vitamin K intake."
  ],
  conversionFactors: "Not applicable. INR is dimensionless; there is no universal conversion between INR and PT in seconds.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "japanese-encephalitis-virus-igm-antibody",
  name: "Japanese Encephalitis Virus (JEV) IgM Antibody",
  synonyms: ["JEV IgM", "Japanese Encephalitis Serology"],
  department: "serology",
  limsCode: "JEV-IgM",
  flags: [],
  summary: "Detects immunoglobulin M (IgM) antibodies to Japanese encephalitis virus (JEV).",
  description: "Detects immunoglobulin M (IgM) antibodies to Japanese encephalitis virus (JEV) in serum or cerebrospinal fluid (CSF). Supports diagnosis of recent infection with this mosquito-borne flavivirus.",
  indications: [
    "Investigate suspected Japanese encephalitis in patients with compatible neurological illness and exposure history.",
    "Differential diagnosis of encephalitis or meningoencephalitis.",
    "Support case-based surveillance and outbreak investigation."
  ],
  referenceRange: [
    "Expected result: Negative — JEV-specific IgM not detected.",
    "Positive: supports recent infection when consistent with clinical findings and exposure history. CSF positivity provides stronger evidence that JEV caused the neurological illness; serum positivity alone is less specific.",
    "Negative: does not exclude infection, particularly early in illness.",
    "Equivocal: inconclusive; arrange repeat or reference-laboratory testing.",
    "Use assay-specific reporting criteria on the validated laboratory information management system (LIMS) report; see Appendix 12."
  ],
  analyticalLimitations: [
    "Cross-reactivity with other flaviviruses, particularly dengue, may produce false-positive results.",
    "IgM may persist for months; serum positivity may reflect previous infection or recent vaccination.",
    "Early specimens may be negative. If initial serum was collected before day 10 of illness, obtain a follow-up specimen at or after day 10, or as advised by the testing laboratory.",
    "Positive or equivocal results may require additional flavivirus testing and specialist confirmation, including plaque reduction neutralisation testing (PRNT).",
    "JEV polymerase chain reaction (PCR) has limited sensitivity in established neurological illness; a negative PCR does not exclude infection."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Serum collected into a laboratory-approved serum tube.",
    "CSF collected into a sterile, leak-proof container when lumbar puncture is clinically indicated and safe; submit accompanying serum where practicable.",
    "Confirm minimum volumes with the testing/referral laboratory, particularly for children.",
    "Record illness onset, collection date, exposure/travel history and relevant flavivirus infection or vaccination history on the request.",
    "See Appendices 1 and 8."
  ],
  storageTransport: [
    "Refrigerate separated serum and the CSF aliquot designated for JEV serology at 2–8 °C pending prompt transport.",
    "Confirm allowable refrigerated storage time and freezing requirements with the testing/referral laboratory.",
    "Maintain the required cold chain and avoid repeated freeze–thaw cycles.",
    "Keep CSF for bacterial culture separate and follow its immediate transport requirements.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, unacceptable specimen type, insufficient volume or handling outside validated stability limits may make testing unsuitable.",
    "Assess haemolysis, lipaemia and icterus against assay-specific interference limits. Discuss irreplaceable or limited-volume CSF specimens with the laboratory before rejection."
  ],
  methodology: [
    "JEV-specific IgM-capture enzyme-linked immunosorbent assay (ELISA), or another validated antibody assay.",
    "Confirm the method and specimen types accepted locally. Specialist confirmatory testing requires an established reference-laboratory pathway."
  ],
  turnaround: { routine: "3–7 working days; specialist confirmation may take longer.", urgent: "" },
  criticalAlert: [
    "Promptly communicate positive CSF IgM and other results suggesting recent JEV infection in a clinically compatible case.",
    "Follow the approved clinical notification pathway and applicable national public health reporting requirements. Clearly identify presumptive results while confirmation is pending.",
    "See Appendices 4 and 5 for locally approved alert criteria."
  ],
  diseaseAssociations: [
    "Japanese encephalitis, including encephalitis or meningoencephalitis.",
    "A positive IgM result alone does not establish that JEV caused the current illness."
  ],
  conversionFactors: "Not applicable. Assay indices or antibody units are method-specific and are not interchangeable between platforms.",
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "ldh-lactate-dehydrogenase",
  name: "LDH - Lactate Dehydrogenase",
  synonyms: ["LD", "Lactic Dehydrogenase"],
  department: "biochemistry",
  limsCode: "LDH",
  flags: ["critical"],
  summary: "Measures lactate dehydrogenase (LDH) activity in serum.",
  description: "Measures lactate dehydrogenase (LDH) activity in serum or accepted plasma. LDH is present in many tissues and increases with cell injury or increased cell turnover. It is a non-specific marker and does not identify the affected tissue.",
  indications: [
    "Support investigation of haemolytic anaemia or ineffective erythropoiesis, alongside other appropriate tests.",
    "Prognostic assessment and monitoring of selected malignancies, particularly lymphoma, according to specialist protocols.",
    "Contribute to tumour lysis risk assessment and monitoring in an appropriate oncology setting.",
    "Pleural-fluid assessment using paired serum LDH and protein measurements as part of Light's criteria, where fluid testing is available and validated.",
    "Testing other body fluids requires a specific indication and confirmation with the laboratory."
  ],
  referenceRange: [
    "Use the locally validated, age-appropriate reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "Results depend on the assay method and measurement temperature. Do not apply the serum reference interval to body fluids."
  ],
  analyticalLimitations: [
    "Haemolysis during collection or processing may falsely increase LDH because red cells contain high LDH activity. Distinguish this artefact from haemolysis occurring in the patient.",
    "Delayed separation or residual blood cells may cause falsely elevated results.",
    "Lipaemia and icterus may interfere, depending on the assay.",
    "Cooling or freezing may reduce the activity of some LDH isoenzymes; follow validated storage requirements.",
    "Results are non-specific and should be interpreted with clinical findings and other laboratory tests."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum, or lithium-heparin plasma where accepted by the local assay.",
    "Use a laboratory-approved tube and collection volume; confirm the minimum sample volume.",
    "Avoid traumatic collection and separate serum/plasma from cells promptly.",
    "Body-fluid testing requires an approved container, clearly identified fluid type and validated assay application.",
    "See Appendix 6 for blood collection tube guidance."
  ],
  storageTransport: [
    "Transport promptly and separate serum/plasma from cells within the locally validated interval.",
    "Avoid refrigeration of unseparated blood.",
    "Store separated specimens at the temperature and for the duration validated for the local assay; do not assume refrigeration or freezing preserves LDH activity.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, unacceptable specimen type, insufficient volume or handling outside validated stability limits may make testing unsuitable.",
    "Assess haemolysis, lipaemia and icterus against assay-specific limits. Where specimen haemolysis compromises interpretation, request recollection where clinically feasible."
  ],
  methodology: "Spectrophotometric enzymatic measurement of LDH activity.",
  turnaround: {
    routine: "Same day for routine testing, subject to local service arrangements.",
    urgent: "Confirm availability and turnaround time for urgent requests."
  },
  criticalAlert: [
    "Apply locally approved notification criteria; see Appendices 4 and 5.",
    "A markedly elevated or rapidly rising LDH warrants clinical interpretation, but LDH >1,000 U/L alone is not a universal critical threshold.",
    "Suspected tumour lysis syndrome requires urgent assessment of potassium, phosphate, calcium, urate and renal function; LDH alone is not diagnostic."
  ],
  diseaseAssociations: [
    "Increased LDH: haemolysis, ineffective erythropoiesis, selected malignancies, liver disease and other causes of tissue injury.",
    "Low LDH generally has limited clinical significance."
  ],
  conversionFactors: [
    "U/L × 0.01667 = µkat/L.",
    "µkat/L × 60 = U/L.",
    "See Appendix 10. Unit conversion does not make results from different assay methods interchangeable."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-16",
  updated: ""
},

{
  id: "magnesium",
  name: "Magnesium",
  synonyms: ["Serum Magnesium", "Total Magnesium"],
  department: "biochemistry",
  limsCode: "MG",
  flags: ["critical"],
  summary: "Measures total magnesium concentration in serum.",
  description: "Measures total magnesium concentration in serum or accepted plasma. Magnesium is predominantly intracellular and stored in bone; it supports neuromuscular function and enzyme activity. Blood concentrations do not reliably indicate total body stores.",
  indications: [
    "Diagnose and monitor hypomagnesaemia or hypermagnesaemia.",
    "Investigate unexplained or refractory hypokalaemia/hypocalcaemia, cardiac arrhythmias or neuromuscular symptoms.",
    "Assess suspected deficiency associated with gastrointestinal losses, malabsorption, poor intake or renal magnesium wasting.",
    "Monitor magnesium replacement and medicines associated with magnesium loss, when clinically indicated.",
    "Assess patients receiving magnesium sulphate when required by the clinical protocol, particularly with renal impairment or suspected toxicity.",
    "Support electrolyte assessment in suspected digoxin toxicity; magnesium does not measure digoxin concentration."
  ],
  referenceRange: [
    "Use the locally validated, age-appropriate reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "Therapeutic concentrations during magnesium sulphate treatment differ from the usual reference interval. Interpret according to the prescribed treatment protocol."
  ],
  analyticalLimitations: [
    "A normal serum magnesium result does not exclude depleted body stores.",
    "Specimen haemolysis may falsely increase magnesium.",
    "Contamination with chelating anticoagulants, such as EDTA, may cause falsely low results.",
    "Collection near a magnesium-containing infusion may cause falsely high results.",
    "Lipaemia and icterus may interfere, depending on the assay; apply validated interference limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum, or lithium-heparin plasma where accepted by the local assay.",
    "Use a laboratory-approved collection tube and volume; confirm the minimum sample volume.",
    "Avoid EDTA, citrate and oxalate tubes.",
    "Avoid sampling from a line or limb receiving magnesium-containing infusions.",
    "Separate serum/plasma from cells within the locally validated interval.",
    "See Appendix 6 for tube and order-of-draw guidance."
  ],
  storageTransport: [
    "Transport promptly. Store separated serum/plasma according to locally validated time and temperature limits.",
    "The proposed seven-day stability at 2–8 °C requires confirmation for the local assay and collection system.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, unacceptable specimen type, insufficient volume or handling outside validated stability limits may make testing unsuitable.",
    "Assess haemolysis, lipaemia and icterus against assay-specific limits rather than rejecting automatically. Suspected anticoagulant or infusion contamination requires assessment and recollection where appropriate."
  ],
  methodology: "Colorimetric assay, commonly using a magnesium-binding dye.",
  turnaround: {
    routine: "Same day for routine testing, subject to local service arrangements.",
    urgent: "Confirm availability and turnaround time for urgent requests."
  },
  criticalAlert: [
    "Apply approved notification thresholds and procedures in Appendices 4 and 5.",
    "The proposed thresholds of <0.4 mmol/L and >2.0 mmol/L.",
    "Severe neurological, respiratory or cardiac symptoms require urgent clinical assessment regardless of the numerical result."
  ],
  diseaseAssociations: [
    "Low magnesium: reduced intake, malabsorption, diarrhoea, renal wasting, diuretic use and alcohol-related illness.",
    "High magnesium: impaired renal excretion, particularly with magnesium-containing medicines or excessive supplementation."
  ],
  conversionFactors: [
    "mg/dL × 0.4114 = mmol/L.",
    "mmol/L × 2.4305 = mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-17",
  updated: ""
},

{
  id: "malaria-examination-microscopy",
  name: "Malaria Examination / Microscopy (Thick and Thin Film)",
  synonyms: [
    "Malaria Smear",
    "Malaria Thick and Thin Films",
    "Blood Parasite Microscopy"
  ],
  department: "parasitology",
  limsCode: "MALTK, MALTN",
  flags: ["critical"],
  summary: "Malaria Smear, Malaria Thick and Thin Films, Blood Parasite Microscopy.",
  description: "Microscopic examination of thick and thin blood films to detect malaria parasites, identify Plasmodium species and quantify parasite density. Thick films improve detection at low parasite densities; thin films assist species identification and percentage parasitaemia assessment.",
  indications: [
    "Urgent investigation of suspected malaria, including compatible fever or neurological illness with relevant exposure/travel history.",
    "Determine species and parasite density to support clinical assessment.",
    "Monitor asexual parasite clearance during treatment when clinically indicated.",
    "Investigate suspected recurrent malaria."
  ],
  referenceRange: [
    "Expected result: No malaria parasites seen.",
    "Positive reports should include:",
    "Species, where reliably identifiable, including mixed infection.",
    "Asexual parasite density in parasites/µL and/or percentage of infected red cells, according to the validated reporting method.",
    "Gametocytes reported separately, where present.",
    "Any uncertainty in species identification."
  ],
  analyticalLimitations: [
    "One negative examination does not exclude malaria, particularly at low parasite density.",
    "If suspicion persists, repeat thick and thin films at 12–24-hour intervals, usually for a total of three examinations, with clinical review.",
    "Sensitivity depends on film quality, staining, examination time and microscopist competence.",
    "Delayed film preparation alters parasite morphology; prior antimalarial treatment may reduce detection.",
    "Mixed infections may be missed.",
    "Plasmodium knowlesi may resemble P. malariae or P. falciparum; uncertain species require expert review and molecular confirmation where available.",
    "Peripheral parasite density may underestimate disease severity, particularly in P. falciparum infection.",
    "Gametocytes may persist after successful treatment and should not be included in the asexual parasite count."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Fresh EDTA-anticoagulated venous blood in a correctly filled, laboratory-approved tube; confirm the minimum volume locally.",
    "Fresh capillary blood may be used for immediate film preparation through an approved collection pathway.",
    "Collect before antimalarial treatment where feasible, without delaying emergency care.",
    "Record collection time, travel/exposure history and recent antimalarial treatment.",
    "See Appendices 1, 6 and 8."
  ],
  storageTransport: [
    "Send immediately to the laboratory service responsible for malaria microscopy.",
    "Prepare thick and thin films as soon as possible, ideally within one hour of collection.",
    "Transport blood promptly at controlled ambient temperature; avoid excessive heat.",
    "Do not refrigerate blood before initial film preparation.",
    "If transport will be delayed, contact the laboratory about preparing films at the collection site and preserving blood for additional testing.",
    "Protect prepared, air-dried slides from moisture, dust and breakage.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, clotting or films unsuitable for interpretation require laboratory assessment and urgent recollection where necessary.",
    "Delayed specimens or poor-quality films should be discussed promptly with the requesting clinician; do not allow recollection or referral arrangements to delay urgent assessment."
  ],
  methodology: [
    "Giemsa-stained thick and thin blood films examined by light microscopy, usually at 1,000× magnification with oil immersion.",
    "Species identification using parasite morphology.",
    "Thick-film parasite density estimated against white cells; thin-film percentage parasitaemia determined from infected red cells.",
    "Expert review or molecular testing for uncertain species or mixed infection, where available."
  ],
  turnaround: {
    routine: "Proposed local target: initial microscopy result within 1–2 hours of laboratory receipt, subject to confirmation of service capability. Species confirmation or referral testing may follow the preliminary result; do not delay communication of parasite detection.",
    urgent: "Suspected malaria requires urgent testing and prompt reporting."
  },
  criticalAlert: [
    "Urgently notify the treating clinician when malaria parasites are first detected, including a preliminary positive result while species identification is pending.",
    "Communicate species and parasite density promptly, with particular attention to P. falciparum, suspected P. knowlesi, mixed infection or rising/high parasite density.",
    "Apply the approved repeat-positive and parasite-density notification criteria in Appendices 4 and 5. Parasitaemia >2% is not a universal definition of severe malaria.",
    "Follow the applicable national malaria surveillance/reporting pathway.",
    "Organisms Reported",
    "Plasmodium falciparum",
    "Plasmodium vivax",
    "Plasmodium malariae",
    "Plasmodium ovale",
    "Plasmodium knowlesi, where reliably identified or confirmed",
    "Mixed Plasmodium infection",
    "Plasmodium species, identification pending or uncertain"
  ],
  diseaseAssociations: [
    "P. falciparum and P. knowlesi can cause rapidly progressive severe malaria.",
    "P. vivax and P. ovale may relapse from dormant liver stages; P. vivax can also cause severe disease.",
    "P. malariae may persist as a chronic low-density blood-stage infection."
  ],
  conversionFactors: [
    "No fixed conversion exists between percentage parasitaemia and parasites/µL; conversion requires the patient's red-cell concentration and the counting method.",
    "Percentage parasitaemia = (infected red cells ÷ total red cells counted) × 100."
  ],
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "•\tPlasmodium falciparum",
        "•\tPlasmodium vivax",
        "•\tPlasmodium malariae",
        "•\tPlasmodium ovale",
        "•\tPlasmodium knowlesi, where reliably identified or confirmed",
        "•\tMixed Plasmodium infection",
        "•\tPlasmodium species, identification pending or uncertain"
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-17",
  updated: ""
},

{
  id: "malaria-rapid-diagnostics-test-rdt",
  name: "Malaria Rapid Diagnostics Test – RDT",
  synonyms: ["Malaria RDT", "Malaria Antigen Rapid Test"],
  department: "serology",
  limsCode: "MAL-RAP",
  flags: ["stat"],
  summary: "Qualitative rapid test detecting malaria parasite antigens.",
  description: "Qualitative rapid test detecting malaria parasite antigens in whole blood. Targets depend on the kit and may include Plasmodium falciparum histidine-rich protein 2 (HRP2), parasite lactate dehydrogenase (pLDH) or other Plasmodium antigens.",
  indications: [
    "Rapid investigation of suspected malaria in patients with compatible illness and exposure/travel history.",
    "Parasite-based diagnosis where timely, reliable microscopy is unavailable.",
    "Support urgent initial assessment while microscopy is arranged for species identification and parasite density.",
    "Not suitable for monitoring treatment response or confirming parasite clearance."
  ],
  referenceRange: [
    "Expected result: Negative — malaria antigens not detected.",
    "Positive: target antigen detected; report the kit-specific antigen pattern. Interpret with clinical findings and recent treatment history.",
    "Negative: does not exclude malaria.",
    "Invalid: required procedural control absent or test otherwise invalid; repeat using a new device.",
    "If suspicion persists despite a negative RDT, arrange urgent thick and thin blood films and repeat microscopy."
  ],
  analyticalLimitations: [
    "Sensitivity varies with the kit, species and parasite density; low-density infections may be missed.",
    "P. falciparum parasites with pfhrp2/pfhrp3 gene deletions may produce false-negative HRP2-based results.",
    "HRP2 may remain detectable for weeks after effective treatment; persistent positivity does not establish ongoing infection or treatment failure.",
    "RDTs do not quantify parasites, identify developmental stages or reliably establish all species and mixed infections.",
    "Pan-antigen positivity does not identify a specific species. For Pf/pan kits, positivity of both lines does not by itself prove mixed infection.",
    "False-positive or false-negative results may arise from assay-specific interference, incorrect technique, inappropriate reading time or damaged/degraded kits."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "Fresh capillary whole blood, or EDTA-anticoagulated venous whole blood where accepted by the kit.",
    "Use the manufacturer-specified blood volume and approved transfer device.",
    "Other anticoagulants are acceptable only where specified by the manufacturer.",
    "Record recent antimalarial treatment and relevant exposure/travel history.",
    "See Appendices 1, 6 and 8."
  ],
  storageTransport: [
    "Test promptly; use fresh capillary blood immediately.",
    "If venous blood testing is delayed, follow the kit's validated specimen temperature and stability limits. Refrigeration may be permitted.",
    "If microscopy is also required, prepare blood films promptly before storage.",
    "Store unopened kits within the manufacturer's temperature limits and protect from heat and humidity.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, unacceptable specimen type, insufficient volume or storage outside validated limits may make specimens unsuitable.",
    "Do not use expired, damaged or improperly stored devices. An invalid test must be repeated and must not be reported as negative.",
    "Assess haemolysis, lipaemia and icterus according to the kit instructions rather than rejecting automatically."
  ],
  methodology: "Lateral-flow immunochromatographic antigen detection.",
  turnaround: {
    routine: "Results are generally available within approximately 15–30 minutes of starting the test, depending on the kit; confirm the local reporting time.",
    urgent: "Urgent testing on receipt."
  },
  criticalAlert: [
    "Urgently notify the treating clinician of an initial positive malaria RDT, including pan-antigen-only results.",
    "Arrange microscopy promptly where available for species identification and parasite quantification.",
    "Organisms Reported",
    "Report only antigen categories supported by the kit, such as:",
    "P. falciparum-associated antigen detected.",
    "Pan-Plasmodium antigen detected.",
    "Other species-specific antigen detected, where applicable."
  ],
  diseaseAssociations: [
    "Malaria. Positive results may also reflect persistent antigen following recently treated infection."
  ],
  conversionFactors: "Not applicable. Results are qualitative.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "•\tP. falciparum-associated antigen detected.",
        "•\tPan-Plasmodium antigen detected.",
        "•\tOther species-specific antigen detected, where applicable."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-17",
  updated: ""
},

{
  id: "mean-corpuscular-haemoglobin",
  name: "Mean Corpuscular Haemoglobin (MCH)",
  synonyms: ["Mean Cell Haemoglobin", "Average Haemoglobin Content per Red Cell"],
  department: "haematology",
  limsCode: "MCH",
  flags: [],
  summary: "Measures average mass of haemoglobin.",
  description: "Calculated red-cell index representing the average mass of haemoglobin (Hb) per red blood cell (RBC), reported in picograms (pg). Usually reported as part of the full blood count (FBC).",
  indications: [
    "Support investigation of anaemia alongside Hb, mean corpuscular volume (MCV), mean corpuscular haemoglobin concentration (MCHC), red-cell distribution width (RDW) and blood-film findings.",
    "Identify reduced haemoglobin content per cell, supporting investigation of iron deficiency or thalassaemia.",
    "Contribute to assessment of microcytic or macrocytic patterns; cell-size classification is based primarily on MCV.",
    "MCH alone does not diagnose anaemia or distinguish its cause."
  ],
  referenceRange: [
    "Use the locally validated, age-appropriate reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "The proposed adult interval of 27–33 pg requires local confirmation."
  ],
  analyticalLimitations: [
    "Calculated from Hb and RBC count; errors in either measurement affect MCH.",
    "Cold agglutination may reduce the measured RBC count and falsely increase MCH.",
    "Lipaemia or other turbidity affecting Hb measurement may falsely increase MCH, depending on the analyser.",
    "Specimen haemolysis may disrupt the relationship between intact RBC count and measured Hb.",
    "Mixed red-cell populations may produce a normal average despite clinically important abnormalities.",
    "Interpret with the other FBC results, analyser flags and blood-film findings where indicated."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a correctly filled, laboratory-approved tube.",
    "Confirm the collection volume and paediatric tube requirements locally.",
    "Mix gently immediately after collection to prevent clotting.",
    "See Appendix 6 for tube guidance."
  ],
  storageTransport: [
    "Transport promptly and analyse within the locally validated FBC stability limits.",
    "If delayed, follow the laboratory's approved temperature and storage requirements. The proposed limits of 24 hours at room temperature and 48 hours at 2–8 °C require validation for the local analyser.",
    "Prepare a blood film promptly if morphology assessment is required; acceptable numerical stability does not guarantee preserved cell morphology.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, clotted specimens, unacceptable tube or filling volume, leakage, or handling outside validated stability limits may make testing unsuitable.",
    "Investigate suspected interference according to laboratory policy; haemolysis, lipaemia or icterus should not trigger automatic rejection without assessing their effect on reportable results."
  ],
  methodology: [
    "Calculated from measured Hb concentration and RBC count:",
    "MCH (pg) = Hb (g/L) ÷ RBC count (×10¹²/L)."
  ],
  turnaround: {
    routine: "Same day as part of the FBC, subject to local service arrangements.",
    urgent: "Urgent reporting follows the FBC service pathway."
  },
  criticalAlert: [
    "No generally established independent critical threshold for MCH.",
    "Apply approved FBC alert criteria, including Hb and other clinically significant findings; see Appendices 4 and 5. Unexpected or implausible MCH results require laboratory verification."
  ],
  diseaseAssociations: [
    "Low MCH: commonly associated with iron deficiency and thalassaemia.",
    "High MCH: commonly accompanies macrocytosis, including vitamin B12/folate deficiency or reticulocytosis; does not establish the cause."
  ],
  conversionFactors: [
    "Reported in pg per cell.",
    "If Hb is expressed in g/dL:",
    "MCH (pg) = [Hb (g/dL) × 10] ÷ RBC count (×10¹²/L).",
    "See Appendix 10 and 17 where applicable."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-17",
  updated: ""
},

{
  id: "mean-corpuscular-haemoglobin-concentration",
  name: "Mean Corpuscular Haemoglobin Concentration (MCHC)",
  synonyms: [
    "Mean Cell Haemoglobin Concentration",
    "Average Red-Cell Haemoglobin Concentration"
  ],
  department: "haematology",
  limsCode: "MCHC",
  flags: [],
  summary: "Measure average haemoglobin (Hb) concentration.",
  description: "Calculated red-cell index representing the average haemoglobin (Hb) concentration within the red-cell volume, reported in g/L. Reported as part of the full blood count (FBC).",
  indications: [
    "Assess hypochromia and support interpretation of anaemia alongside other red-cell indices and blood-film findings.",
    "Support investigation of spherocytosis when consistent with the clinical history and blood film.",
    "Help identify potentially unreliable Hb or haematocrit results when MCHC is unexpectedly high.",
    "MCHC alone does not diagnose anaemia, iron deficiency, thalassaemia or hereditary spherocytosis."
  ],
  referenceRange: [
    "Use the locally validated, age-appropriate reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "The proposed interval of 320–360 g/L requires local confirmation."
  ],
  analyticalLimitations: [
    "Depends on accurate Hb and haematocrit (Hct) measurements.",
    "Lipaemia or other turbidity may falsely increase measured Hb and calculated MCHC.",
    "Cold agglutination may distort red-cell measurements and falsely increase MCHC.",
    "Specimen haemolysis may increase calculated MCHC by disrupting the relationship between measured Hb and intact red-cell volume.",
    "Delayed analysis may alter cell volume and Hct, affecting MCHC.",
    "Unexpected results require review of analyser flags, specimen quality and blood-film findings where indicated."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a correctly filled, laboratory-approved tube.",
    "Confirm the collection volume and paediatric tube requirements locally.",
    "Mix gently immediately after collection to prevent clotting.",
    "See the FBC entry and Appendix 6."
  ],
  storageTransport: [
    "Follow the locally validated FBC storage and transport requirements; see the FBC entry and Appendix 9a.",
    "Transport promptly. Prepare a blood film promptly if morphology assessment is required; numerical stability does not guarantee preserved cell morphology."
  ],
  rejection: [
    "See the FBC entry and Appendix 7.",
    "Incorrect identification, clotting, unacceptable tube or filling volume, leakage, or handling outside validated stability limits may make testing unsuitable.",
    "Assess suspected haemolysis, lipaemia, icterus or agglutination according to their effect on reliable reporting rather than rejecting automatically."
  ],
  methodology: "Calculated from Hb concentration and Hct: MCHC (g/L) = Hb (g/L) ÷ Hct (L/L).",
  turnaround: {
    routine: "Same day as part of the FBC, subject to local service arrangements.",
    urgent: "Urgent reporting follows the FBC service pathway."
  },
  criticalAlert: [
    "No generally established independent critical threshold for MCHC.",
    "Unexpectedly high or implausible results require laboratory verification before release. Clinical notification follows approved FBC alert criteria; see Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Low MCHC: hypochromic red cells, commonly associated with iron deficiency and some thalassaemias.",
    "Raised MCHC: may occur with spherocytosis or red-cell dehydration.",
    "Apparent elevation may instead reflect analytical interference; exclude artefact before attributing it to disease."
  ],
  conversionFactors: ["g/dL × 10 = g/L.", "g/L ÷ 10 = g/dL.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-17",
  updated: ""
},

{
  id: "mean-corpuscular-volume",
  name: "Mean Corpuscular Volume (MCV)",
  synonyms: ["Mean Cell Volume", "Average Red-Cell Volume"],
  department: "haematology",
  limsCode: "MCV",
  flags: [],
  summary: "",
  description: "Represents the average volume of red blood cells (RBCs), reported in femtolitres (fL). Usually reported as part of the full blood count (FBC).",
  indications: [
    "Classify anaemia as microcytic, normocytic or macrocytic.",
    "Guide further investigation of anaemia alongside haemoglobin (Hb), other red-cell indices, reticulocyte count and blood-film findings.",
    "Support investigation of suspected iron deficiency, thalassaemia, vitamin B12/folate deficiency or marrow disorders.",
    "Assess changes in red-cell size during follow-up, alongside other measures of treatment response.",
    "MCV alone does not diagnose anaemia or determine its cause."
  ],
  referenceRange: [
    "Use the locally validated, age-appropriate reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "Adult anaemia is commonly classified using MCV <80 fL as microcytic and >100 fL as macrocytic. These conventions should not replace the local interval or be applied to children."
  ],
  analyticalLimitations: [
    "Cold agglutination may falsely increase MCV and reduce the measured RBC count.",
    "Marked hyperglycaemia or extreme leucocytosis may cause misleading results, depending on the analyser.",
    "Delayed analysis may cause red-cell swelling and increase MCV.",
    "Mixed microcytic and macrocytic populations may produce a normal average.",
    "Recent transfusion may alter the red-cell population and obscure the underlying pattern.",
    "Normal MCV does not exclude iron deficiency or vitamin B12/folate deficiency.",
    "Interpret with red-cell distribution width (RDW), analyser flags and blood-film findings where indicated."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a correctly filled, laboratory-approved tube.",
    "Confirm the collection volume and paediatric tube requirements locally.",
    "Mix gently immediately after collection to prevent clotting.",
    "See the FBC entry and Appendix 6."
  ],
  storageTransport: [
    "Follow the locally validated FBC storage and transport requirements; see the FBC entry and Appendix 9a.",
    "Transport promptly. Storage time and temperature can affect MCV; prepare a blood film promptly if morphology assessment is required."
  ],
  rejection: [
    "See the FBC entry and Appendix 7.",
    "Incorrect identification, clotting, unacceptable tube or filling volume, leakage, or handling outside validated stability limits may make testing unsuitable.",
    "Assess suspected interference according to its effect on reliable reporting rather than rejecting automatically."
  ],
  methodology: "Automated red-cell sizing, commonly using electrical impedance or optical methods. MCV may be reported from cell-volume measurements or calculated from haematocrit and RBC count, depending on the analyser.",
  turnaround: {
    routine: "Same day as part of the FBC, subject to local service arrangements.",
    urgent: "Urgent reporting follows the FBC service pathway."
  },
  criticalAlert: [
    "No generally established independent critical threshold for MCV.",
    "Unexpected or implausible results require laboratory verification. Clinical notification follows approved FBC alert criteria; see Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Low MCV: iron deficiency, thalassaemia and some cases of anaemia of chronic inflammation.",
    "High MCV: vitamin B12/folate deficiency, reticulocytosis, alcohol-related effects, liver disease, hypothyroidism, selected medicines or marrow disorders.",
    "Anaemia with normal MCV: may occur with renal disease, chronic inflammation, acute blood loss, haemolysis or early/mixed nutritional deficiency.",
    "Haemolysis may produce an increased MCV when accompanied by reticulocytosis."
  ],
  conversionFactors: [
    "1 fL = 10⁻¹⁵ L.",
    "Where calculated: MCV (fL) = [haematocrit (L/L) × 1,000] ÷ RBC count (×10¹²/L)."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-17",
  updated: ""
},

{
  id: "measles-rna",
  name: "Measles RNA",
  synonyms: ["Measles PCR", "Measles Virus RNA Detection"],
  department: "molecular",
  limsCode: "MEA-RNA",
  flags: [],
  summary: "Detects measles virus RNA.",
  description: "Detects measles virus ribonucleic acid (RNA) by reverse transcription polymerase chain reaction (RT-PCR). Supports confirmation of acute infection and public health investigation.",
  indications: [
    "Investigate suspected measles in patients with compatible illness and exposure history.",
    "Confirm infection during outbreak investigation.",
    "Support investigation of atypical presentations, including previously vaccinated patients.",
    "Provide specimens for specialist strain identification or genotyping where indicated.",
    "Not a test of immunity."
  ],
  referenceRange: [
    "Expected result: Not detected.",
    "Detected: measles virus RNA identified; supports infection, but recent measles-containing vaccination may require vaccine-strain discrimination.",
    "Not detected: does not exclude measles; interpret with collection timing, specimen quality and clinical/epidemiological findings.",
    "Invalid/inconclusive: further testing or recollection may be required."
  ],
  analyticalLimitations: [
    "Sensitivity is highest with early collection. Obtain specimens at first presentation, ideally within three days of rash onset.",
    "RNA may remain detectable up to 10–14 days after rash onset; later specimens may still be considered after laboratory consultation.",
    "Poor collection, RNA degradation, inappropriate transport or amplification inhibitors may cause false-negative or invalid results.",
    "Standard RT-PCR may not distinguish vaccine-derived from wild-type virus; specialist PCR or sequencing may be required.",
    "A negative result in a strongly suspected case requires laboratory/public health review, potentially including repeat sampling and serology."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Preferred: throat or nasopharyngeal swab using a swab and transport medium approved by the testing laboratory.",
    "Urine may provide an additional specimen; confirm collection volume and handling requirements.",
    "EDTA whole blood or other specimens only where accepted by the testing/referral laboratory.",
    "Obtain serum for accompanying measles serology where recommended.",
    "Record rash onset, collection date, exposure/travel history and dates of recent measles-containing vaccination.",
    "Alert the receiving service to suspected measles before collection or referral.",
    "See Appendices 1 and 8."
  ],
  storageTransport: [
    "Transport promptly using the testing laboratory's validated specimen-specific requirements.",
    "Respiratory swabs and urine are generally refrigerated at 2–8 °C pending prompt transport; confirm the permitted interval locally.",
    "If delay requires freezing, confirm specimen preparation, temperature and frozen transport requirements before proceeding.",
    "Do not freeze whole blood or unprocessed urine unless specifically directed by the testing laboratory.",
    "Avoid repeated freeze–thaw cycles.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, unsuitable specimen/swab/transport medium, insufficient volume or handling outside validated stability limits may make testing unsuitable.",
    "Do not reject a dry swab solely because it is dry if the receiving laboratory accepts that collection system. Discuss compromised specimens promptly and arrange recollection where necessary."
  ],
  methodology: [
    "Qualitative real-time RT-PCR for measles virus RNA.",
    "Vaccine-strain discrimination and genotyping are separate specialist investigations, where available."
  ],
  turnaround: {
    routine: "Confirm the local or referral turnaround time, including transport. The proposed 3–7 working days requires verification; discuss expedited testing with the laboratory.",
    urgent: "Urgent testing/referral for suspected measles."
  },
  criticalAlert: [
    "Promptly communicate detected measles RNA to the treating clinician and designated public health service through the approved pathway.",
    "Suspected measles requires immediate infection-control assessment and prompt public health communication; do not await laboratory confirmation.",
    "Follow the applicable Timor-Leste surveillance requirements and approved notification procedures in Appendices 4 and 5.",
    "Organisms Reported",
    "Measles virus RNA: detected or not detected.",
    "Report vaccine/wild-type discrimination or genotype only when established by appropriate specialist testing."
  ],
  diseaseAssociations: [
    "Measles virus infection.",
    "Recent measles-containing vaccination may produce detectable vaccine-strain RNA and must be considered when interpreting a positive result."
  ],
  conversionFactors: "Not applicable. This is a qualitative assay; cycle-threshold values are method-dependent and should not be treated as a standardised viral load or measure of infectiousness.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Measles virus RNA: detected or not detected.",
        "Report vaccine/wild-type discrimination or genotype only when established by appropriate specialist testing."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "measles-serology",
  name: "Measles Serology (IgM/IgG)",
  synonyms: ["Measles Antibody", "Measles IgM", "Measles IgG"],
  department: "serology",
  limsCode: "MEA-AB",
  flags: [],
  summary: "Detects measles-specific IgM and/or IgG antibodies.",
  description: "Detects measles-specific immunoglobulin M (IgM) and/or immunoglobulin G (IgG) antibodies. IgM supports investigation of recent infection; IgG provides evidence of previous immune exposure and is used for selected immunity assessments.",
  indications: [
    "Investigate suspected acute measles, preferably alongside measles RNA testing.",
    "Support case confirmation and outbreak investigation.",
    "Assess evidence of immunity where vaccination documentation is uncertain or a specific clinical/occupational indication exists.",
    "Request IgG alone for immunity assessment."
  ],
  referenceRange: [
    "Use assay-specific negative, equivocal and positive reporting criteria on the validated laboratory information management system (LIMS) report; see Appendix 12.",
    "IgM positive: supports recent infection but requires clinical/epidemiological interpretation and consideration of recent vaccination or false positivity.",
    "IgM negative: does not exclude measles, particularly with early collection or pre-existing immunity.",
    "IgG positive: evidence of previous infection or vaccination in an immunity assessment; a single positive result does not establish acute infection.",
    "IgG negative/equivocal: no clear serological evidence of immunity by this assay. Interpret with vaccination records and clinical context rather than automatically classifying a vaccinated person as susceptible.",
    "Equivocal result: further sampling or reference-laboratory assessment may be required."
  ],
  analyticalLimitations: [
    "IgM may be undetectable during the first 72 hours after rash onset. Collect at presentation; if an early result is negative, arrange repeat serum at or after 72 hours as advised by the laboratory.",
    "Previously vaccinated patients with measles may have a delayed, transient or absent IgM response.",
    "False-positive IgM can occur with other rash illnesses or rheumatoid-factor interference; specificity varies by assay.",
    "Recent vaccination may produce IgM and IgG responses indistinguishable from infection by routine serology.",
    "IgG cannot distinguish previous natural infection from vaccination.",
    "Commercial IgG assays may miss low concentrations of vaccine-induced antibodies.",
    "Strongly suspected cases with negative or discordant results require PCR and/or specialist assessment. Paired sera or specialised antibody testing may be needed."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum collected in SST.",
    "Confirm collection and minimum serum volumes locally, particularly for children.",
    "Record rash onset, collection date, exposure/travel history and recent vaccination dates.",
    "For suspected acute measles, collect an appropriate respiratory specimen for PCR at first presentation; see the Measles RNA entry.",
    "See Appendices 1 and 8."
  ],
  storageTransport: [
    "Separate serum and transport promptly according to the testing/referral laboratory's validated requirements.",
    "Confirm refrigerated stability and freezing requirements locally. The proposed seven days at 2–8 °C and longer storage at −20 °C must match the actual assay.",
    "Avoid repeated freeze–thaw cycles. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Incorrect identification, leakage, insufficient volume, unsuitable specimen or handling outside validated stability limits may make testing unsuitable.",
    "Assess haemolysis, lipaemia and icterus against assay-specific limits; do not reject automatically."
  ],
  methodology: [
    "Validated antibody immunoassay, such as enzyme-linked immunosorbent assay (ELISA) or chemiluminescent immunoassay (CLIA).",
    "Confirm the local methods and whether IgM, IgG or both are performed under MEA-AB. Specialist confirmation requires an established referral pathway."
  ],
  turnaround: {
    routine: "Confirm local or referral turnaround time; the proposed 3–5 working days requires verification. Suspected acute measles requires an expedited testing and communication pathway.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate positive or significant equivocal IgM results in a suspected case to the treating clinician and designated public health service.",
    "Suspected measles requires immediate infection-control assessment and prompt public health communication.",
    "IgG positivity alone is not an acute measles alert."
  ],
  diseaseAssociations: [
    "Measles infection.",
    "IgM may also reflect recent vaccination or non-specific reactivity. IgG commonly reflects previous infection or vaccination; interpretation depends on the testing purpose and clinical context."
  ],
  conversionFactors: "No universal conversion between assay indices, arbitrary units or antibody concentrations. Results from different platforms are not necessarily interchangeable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "mosquito-borne-panel",
  name: "Mosquito Borne Panel",
  synonyms: ["Arbovirus Molecular Panel", "Multiplex Mosquito-Borne Virus PCR"],
  department: "molecular",
  limsCode: "MOSQUITO",
  flags: [],
  summary: "Molecular panel detecting RNA from selected mosquito-transmitted viruses.",
  description: [
    "Molecular panel detecting RNA from selected mosquito-transmitted viruses. Coverage depends on the validated assay used by the testing laboratory.",
    "The supplied target list, requiring laboratory confirmation, comprises dengue virus, Ross River virus, chikungunya virus, Barmah Forest virus, West Nile virus, Zika virus, Murray Valley encephalitis virus, Japanese encephalitis virus and Kunjin virus."
  ],
  indications: [
    "Investigate acute febrile illness with compatible mosquito exposure, residence or travel history.",
    "Differentiate selected arboviral infections with overlapping clinical features.",
    "Support outbreak investigation and public health surveillance.",
    "Investigate suspected arboviral neurological disease alongside virus-specific antibody testing and other appropriate investigations.",
    "Not intended for routine screening of asymptomatic travellers."
  ],
  referenceRange: [
    "Qualitative result for each validated target:",
    "Not detected: Target viral RNA not detected; infection is not excluded.",
    "Detected: Target viral RNA detected, supporting current or recent infection in the appropriate clinical context.",
    "Invalid / indeterminate: No definitive interpretation; repeat testing or recollection may be required.",
    "Refer to the validated LIMS report and Appendix 12. Numerical reference intervals do not apply."
  ],
  analyticalLimitations: [
    "Sensitivity depends on the virus, specimen type, timing of collection and viral RNA concentration.",
    "Dengue RNA is usually detectable during the first seven days of illness; this window must not be applied to all panel targets.",
    "Negative results do not exclude infection, particularly after viraemia has declined.",
    "PCR has limited sensitivity for some arboviral encephalitides, particularly Japanese encephalitis. Appropriate serum and/or cerebrospinal fluid antibody testing may be required.",
    "The panel detects only validated targets and does not measure antibodies or establish immunity.",
    "Specimen degradation, amplification inhibitors and viral sequence variation may reduce detection.",
    "Molecular cross-reactivity is assay-dependent. Flavivirus antibody cross-reactivity primarily concerns serological testing."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Serum or another specimen type accepted for the validated assay; confirm container and minimum volume with the testing laboratory.",
    "EDTA blood/plasma, cerebrospinal fluid or urine may be appropriate for selected viruses only where validated.",
    "Collect promptly and document symptom-onset date, clinical syndrome, residence/travel history and pregnancy status where relevant.",
    "Discuss suspected encephalitis or pregnancy-associated Zika investigation with the laboratory before collection.",
    "See Appendix 1 and Appendix 6."
  ],
  storageTransport: [
    "Transport promptly under the testing laboratory's validated conditions.",
    "Confirm specimen separation requirements, refrigeration period and freezing temperature before delayed transport or referral. Avoid repeated freeze–thaw cycles.",
    "See Appendix 9a and Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Unaccepted specimen types, unsuitable containers, insufficient volume or storage outside validated limits require laboratory assessment. Haemolysis, lipaemia or icterus should be assessed against validated assay limits rather than automatically rejected."
  ],
  methodology: [
    "Validated multiplex reverse-transcription polymerase chain reaction (RT-PCR) or equivalent nucleic acid amplification method.",
    "Confirm the assay, platform, reportable targets and whether testing is performed locally or by referral."
  ],
  turnaround: {
    routine: "Confirm with the testing laboratory. Referral transport, batching and confirmatory testing may extend reporting time.",
    urgent: ""
  },
  criticalAlert: [
    "Public health notification is separate from critical-result reporting and must follow applicable local requirements.",
    "Organisms Reported",
    "Each detected viral target is reported according to the validated panel. Confirm whether dengue serotypes and West Nile/Kunjin targets are distinguished."
  ],
  diseaseAssociations: [
    "Dengue: Acute febrile illness; severe dengue may involve plasma leakage, bleeding or organ impairment.",
    "Ross River and Barmah Forest: Febrile illness, rash and arthralgia/polyarthritis.",
    "Chikungunya: Acute fever and prominent arthralgia, sometimes persistent.",
    "Zika: Often mild febrile illness or rash; associated with congenital Zika syndrome and neurological complications.",
    "West Nile, including Kunjin; Murray Valley encephalitis; Japanese encephalitis: Febrile illness or neuroinvasive disease."
  ],
  conversionFactors: "Not applicable; qualitative molecular results.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Each detected viral target is reported according to the validated panel. Confirm whether dengue serotypes and West Nile/Kunjin targets are distinguished."
      ]
    }
  ],
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "oestradiol",
  name: "Oestradiol",
  synonyms: ["Estradiol", "17β-Oestradiol", "17β-Estradiol"],
  department: "biochemistry",
  limsCode: "E2",
  flags: [],
  summary: "Measures circulating oestradiol.",
  description: "Measures circulating oestradiol, the principal ovarian oestrogen during the reproductive years. Used to assess ovarian function and selected reproductive or endocrine disorders, and to monitor treatment where clinically indicated.",
  indications: [
    "Investigate amenorrhoea, menstrual irregularities and suspected ovarian insufficiency, alongside other appropriate tests.",
    "Assess follicular development during ovulation induction and assisted reproductive technology (ART).",
    "Investigate selected pubertal disorders and hypogonadism.",
    "Investigate feminisation, gynaecomastia or suspected oestrogen-secreting tumours.",
    "Monitor selected hormone treatments or ovarian suppression under specialist guidance; confirm assay suitability when very low concentrations are expected.",
    "Not routinely required to diagnose menopause in otherwise typical presentations after age 45."
  ],
  referenceRange: [
    "Use the analyser-specific reference intervals on the validated LIMS report; see Appendix 12.",
    "Intervals depend on age, sex, pubertal stage, menstrual-cycle phase and menopausal status. Pregnancy and exogenous hormone treatment require appropriate clinical interpretation.",
    "Interpret alongside follicle-stimulating hormone (FSH), luteinising hormone (LH) and other relevant findings. A single result does not establish ovarian failure or menopause."
  ],
  analyticalLimitations: [
    "Routine immunoassays may have limited accuracy at low concentrations, particularly in children, men, postmenopausal women and during oestrogen-suppressing treatment.",
    "A suitably sensitive liquid chromatography–tandem mass spectrometry (LC-MS/MS) assay may be required, usually through specialist referral.",
    "Cross-reacting steroids or medicines and interfering antibodies may produce misleading immunoassay results.",
    "Fulvestrant can cause falsely elevated results with some immunoassays; discuss an alternative method with the laboratory.",
    "Biotin may interfere with susceptible assays. Follow the testing laboratory's assay-specific preparation advice.",
    "Results from different methods may not be directly comparable; use the same method for serial monitoring where practicable."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a collection tube accepted by the testing laboratory. Confirm minimum volume, particularly for paediatric specimens or referral testing.",
    "Record menstrual-cycle day or last menstrual period, menopausal status and relevant hormone treatment. For treatment monitoring, document sampling time relative to the dose where applicable.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Separate serum and transport promptly according to the testing laboratory's validated requirements.",
    "Confirm refrigeration duration and freezing conditions for delayed testing or referral. Avoid repeated freeze–thaw cycles.",
    "See Appendix 9a and Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess haemolysis, lipaemia and icterus against validated assay interference limits rather than automatically rejecting affected specimens."
  ],
  methodology: "Competitive immunoassay.",
  turnaround: { routine: "1 -3 days", urgent: "" },
  criticalAlert: "Unexpectedly high results, particularly in children or suspected hormone-secreting tumours, require timely clinical review and consideration of assay interference. An elevated result alone does not establish a critical result.",
  diseaseAssociations: [
    "Increased: May occur with oestrogen-secreting tumours or ovarian stimulation. Physiological increases occur during the menstrual cycle and pregnancy; exogenous oestradiol also increases concentrations.",
    "Decreased: May occur with primary ovarian insufficiency or hypothalamic/pituitary dysfunction. Low concentrations are also expected after menopause and during effective oestrogen-suppressing treatment."
  ],
  conversionFactors: "1 pg/mL = 3.671 pmol/L; 1 pmol/L ÷ 3.671 = pg/mL; See Appendix 10.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "ova-cysts-and-parasites-stool-microscopy",
  name: "Ova, Cysts, and Parasites (OCP) – Stool Microscopy",
  synonyms: [
    "Stool Parasite Microscopy",
    "Faecal Parasite Microscopy",
    "Ova and Parasites Examination"
  ],
  department: "microbiology",
  limsCode: "O&P",
  flags: [],
  summary: "Microscopic examination of stool.",
  description: [
    "Microscopic examination of stool for protozoal cysts, trophozoites and oocysts, and helminth eggs or larvae.",
    "Detection depends on specimen quality and the techniques performed. Additional staining, antigen detection or molecular testing may be required for selected parasites."
  ],
  indications: [
    "Investigate persistent diarrhoea, dysentery or other gastrointestinal symptoms with suspected parasitic infection.",
    "Investigate suspected parasitic causes of malabsorption, poor growth or unexplained eosinophilia, according to clinical and exposure history.",
    "Assess immunocompromised patients with gastrointestinal symptoms; specify suspected opportunistic parasites.",
    "Support targeted outbreak investigations or epidemiological surveys."
  ],
  referenceRange: [
    "No ova, cysts or parasites detected by the methods performed.",
    "A negative result does not exclude parasitic infection."
  ],
  analyticalLimitations: [
    "Sensitivity depends on parasite burden, intermittent shedding, specimen handling, examination techniques and microscopist expertise.",
    "Additional specimens collected on separate days may improve detection when suspicion persists; confirm the number required with the laboratory.",
    "Routine microscopy cannot reliably distinguish Entamoeba histolytica from E. dispar and E. moshkovskii. Species-specific antigen or molecular testing may be required.",
    "Taenia species cannot be distinguished by egg morphology alone.",
    "Routine stool microscopy has limited sensitivity for Strongyloides. Targeted stool methods and/or serology may be required.",
    "Stool examination is insensitive for Enterobius vermicularis; request a perianal adhesive-tape test.",
    "Coccidian parasites and microsporidia may require specifically requested stains or other tests.",
    "Recent antiparasitic treatment and some medicines or contrast agents may reduce diagnostic yield."
  ],
  sampleType: "Stool",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Fresh stool in a clean, dry, leakproof container accepted by the laboratory.",
    "Avoid contamination with urine, toilet water or disinfectant.",
    "Confirm the required quantity; do not assume a universal minimum of 5 g.",
    "If delay is expected, use a laboratory-approved preservative, such as formalin or sodium acetate–acetic acid–formalin (SAF), where appropriate.",
    "Preservatives are not interchangeable for all microscopy, antigen or molecular methods; additional unpreserved stool may be required.",
    "Record collection date/time, symptoms, relevant exposure/travel, immunosuppression and recent treatment."
  ],
  storageTransport: [
    "Deliver fresh stool promptly.",
    "For motile trophozoite examination, liquid stool should ideally be examined within 30 minutes of passage and soft stool within one hour.",
    "Do not refrigerate specimens intended for immediate motility examination. If rapid examination is impossible, arrange approved preservation.",
    "Refrigeration may be appropriate for formed stool or other investigations under locally validated requirements.",
    "Follow the laboratory's validated storage conditions for preserved specimens.",
    "See Appendix 9a and Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Unsuitable containers, contamination, inadequate quantity, inappropriate preservative or excessive delay require laboratory assessment. Acceptance depends on the requested examination and validated specimen requirements."
  ],
  methodology: [
    "Methods may include:",
    "Direct saline and iodine wet mounts.",
    "Validated concentration techniques.",
    "Permanent staining for protozoa, where available.",
    "Modified acid-fast staining or another validated method for coccidian parasites when indicated.",
    "Confirm which methods are performed locally. Antigen detection, molecular testing and specialist parasite identification may require separate requests or referral."
  ],
  turnaround: {
    routine: "Confirm with the testing laboratory. Additional specimens, special stains or referral testing may extend reporting time.",
    urgent: ""
  },
  criticalAlert: [
    "Report pathogenic parasites promptly.",
    "Detection of Strongyloides in an immunocompromised patient or suspected hyperinfection requires urgent reporting.",
    "Organisms Reported",
    "Report organisms and developmental stages to the level reliably supported by the methods used. Examples include:",
    "Protozoa: Giardia duodenalis cysts/trophozoites; Entamoeba histolytica/dispar complex cysts/trophozoites, with a comment explaining the limits of microscopy.",
    "Coccidia: Cryptosporidium spp. oocysts, where a suitable detection method is performed.",
    "Nematodes: Ascaris lumbricoides and Trichuris trichiura eggs; hookworm eggs; Strongyloides larvae.",
    "Cestodes: Taenia spp. eggs; species identification requires additional evidence.",
    "Trematodes: Eggs compatible with Fasciola spp. or Clonorchis/Opisthorchis, with specialist confirmation where required.",
    "Enterobius: Eggs may occasionally be detected in stool, but perianal tape testing is preferred.",
    "Other parasites or non-pathogenic protozoa may be reported according to laboratory policy. The list does not imply that every organism is routinely tested for or reliably excluded."
  ],
  diseaseAssociations: [
    "Intestinal protozoal and helminth infections. Clinical significance depends on the organism, burden and patient context.",
    "Detection of non-pathogenic protozoa does not establish the cause of symptoms."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Report organisms and developmental stages to the level reliably supported by the methods used. Examples include",
      items: [
        "•\tProtozoa: Giardia duodenalis cysts/trophozoites; Entamoeba histolytica/dispar complex cysts/trophozoites, with a comment explaining the limits of microscopy.",
        "•\tCoccidia: Cryptosporidium spp. oocysts, where a suitable detection method is performed.",
        "•\tNematodes: Ascaris lumbricoides and Trichuris trichiura eggs; hookworm eggs; Strongyloides larvae.",
        "•\tCestodes: Taenia spp. eggs; species identification requires additional evidence.",
        "•\tTrematodes: Eggs compatible with Fasciola spp. or Clonorchis/Opisthorchis, with specialist confirmation where required.",
        "•\tEnterobius: Eggs may occasionally be detected in stool, but perianal tape testing is preferred.",
        "Other parasites or non-pathogenic protozoa may be reported according to laboratory policy. The list does not imply that every organism is routinely tested for or reliably excluded."
      ]
    }
  ],
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "phosphorus",
  name: "Phosphorus",
  synonyms: ["Inorganic Phosphate", "Serum Phosphate", "Inorganic Phosphorus"],
  department: "biochemistry",
  limsCode: "PHOS",
  flags: [],
  summary: "Measures circulating inorganic serum phosphate.",
  description: [
    "Measures circulating inorganic serum phosphate, which is important for bone mineralisation, energy metabolism and cellular function.",
    "Used to investigate phosphate imbalance and assess renal, parathyroid and metabolic bone disorders. It is not a standalone measure of renal function."
  ],
  indications: [
    "Assess phosphate balance in kidney disease and monitor patients receiving dialysis.",
    "Investigate metabolic bone disorders, including rickets and osteomalacia.",
    "Investigate calcium abnormalities and suspected parathyroid disorders.",
    "Monitor patients at risk of refeeding syndrome, including those with significant malnutrition.",
    "Assess phosphate disturbances during DKA, its treatment and selected critical illnesses.",
    "Investigate and monitor tumour lysis syndrome."
  ],
  referenceRange: [
    "Use the age-appropriate reference interval on the validated LIMS report; see Appendix 12.",
    "Children generally have higher phosphate concentrations than adults. Do not apply an adult interval to infants or children.",
    "Interpret alongside calcium, renal function and, where indicated, magnesium, parathyroid hormone and vitamin D results."
  ],
  analyticalLimitations: [
    "Haemolysis may cause falsely elevated results.",
    "Prolonged contact with blood cells may alter phosphate concentrations, including falsely high results with substantial delay.",
    "Lipaemia and bilirubin interference depend on the assay and validated limits.",
    "Contamination from phosphate-containing infusions may produce misleading results.",
    "Concentrations vary with time of day, food intake and recent phosphate administration; consider these factors when comparing serial results."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum, or heparinised plasma are accepted.",
    "Confirm the collection tube and minimum volume with the laboratory, particularly for paediatric samples.",
    "Avoid collection from an access site receiving phosphate-containing fluids.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Separate serum or plasma from blood cells promptly within the laboratory's validated interval.",
    "Transport promptly. Refrigeration duration and freezing conditions for delayed testing must follow validated local requirements.",
    "See Appendix 9a and Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess haemolysis, lipaemia and icterus against validated assay limits. Recollection may be required when interference, contamination or delayed separation makes the result unreliable."
  ],
  methodology: "Colorimetric.",
  turnaround: {
    routine: "Same day, if confirmed by the local laboratory.",
    urgent: "Confirm availability and reporting time for urgent requests."
  },
  criticalAlert: [
    "Immediately notify results meeting approved phosphate thresholds in Appendix 4 and Appendix 5.",
    "Severe hypophosphataemia may be life-threatening. Marked hyperphosphataemia may be associated with clinically significant hypocalcaemia."
  ],
  diseaseAssociations: [
    "Low: Malnutrition, malabsorption or vitamin D deficiency; hyperparathyroidism; renal phosphate wasting; refeeding syndrome; respiratory alkalosis; and intracellular redistribution during insulin treatment.",
    "High: Acute kidney injury or advanced chronic kidney disease; hypoparathyroidism; tumour lysis syndrome; rhabdomyolysis; and excessive phosphate administration.",
    "In Diabetic Keto-Acidosis, serum phosphate may initially be normal or elevated despite total-body depletion and may fall during treatment."
  ],
  conversionFactors: [
    "1 mg/dL = approximately 0.323 mmol/L.",
    "mg/dL × 0.323 = mmol/L.",
    "mmol/L × 3.10 = mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "platelet-count",
  name: "Platelet Count",
  synonyms: ["Thrombocyte Count", "PLT Count"],
  department: "microbiology",
  limsCode: "PLAT",
  flags: ["critical"],
  summary: "Measures the number of circulating platelets.",
  description: [
    "Measures the number of circulating platelets, usually as part of the full blood count (FBC).",
    "Used to identify thrombocytopenia or thrombocytosis and support assessment of bleeding, platelet consumption and bone marrow disorders. It does not measure platelet function."
  ],
  indications: [
    "Investigate bleeding, bruising or petechiae.",
    "Identify and monitor thrombocytopenia or thrombocytosis.",
    "Monitor chemotherapy, marrow disorders and treatments affecting platelet production or survival.",
    "Monitor selected infections, including dengue, and suspected platelet-consumption disorders.",
    "Assess patients before surgery or invasive procedures when clinically indicated.",
    "Assess response to platelet transfusion where indicated."
  ],
  referenceRange: [
    "Use the validated reference interval on the LIMS report; see Appendix 12.",
    "Interpret with the clinical presentation, other FBC results and previous counts. A normal count does not exclude a platelet-function disorder."
  ],
  analyticalLimitations: [
    "EDTA-associated platelet clumping may cause a falsely low count (pseudothrombocytopenia).",
    "Giant platelets may be undercounted, particularly by impedance methods.",
    "Red-cell fragments or very small red cells may be misclassified as platelets and cause falsely high counts.",
    "Clots, poor mixing and specimen deterioration may produce unreliable results.",
    "New or unexplained thrombocytopenia, relevant analyser flags or unexpected changes require assessment for artefact and blood-film review according to laboratory criteria.",
    "If clumping prevents reliable counting, recollection in an alternative tube or another validated counting method may be required. Follow laboratory advice; alternative anticoagulants do not always resolve clumping."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a correctly filled collection tube.",
    "Mix gently immediately after collection. Confirm the required volume and acceptable paediatric tubes with the laboratory.",
    "Do not separate or centrifuge the specimen.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and analyse within the laboratory's validated interval.",
    "Storage temperature and maximum delay depend on the analyser, specimen condition and whether blood-film morphology is required. Prepare films promptly when indicated.",
    "Do not freeze. Confirm refrigeration requirements with the laboratory.",
    "See Appendix 9a and Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Reject clotted specimens for platelet counting. Incorrect tubes, unacceptable filling or storage outside validated limits require laboratory assessment.",
    "Platelet clumping requires investigation and an appropriate reporting comment; an unreliable count must not be presented as confirmed thrombocytopenia."
  ],
  methodology: [
    "Automated counting using impedance, optical and/or fluorescence methods, depending on the analyser.",
    "Blood-film examination and an alternative validated counting method may be used to investigate unreliable results."
  ],
  turnaround: {
    routine: "Same day, if confirmed locally.",
    urgent: "Confirm urgent testing availability with the laboratory."
  },
  criticalAlert: [
    "Immediately notify results meeting approved criteria in Appendix 4 and Appendix 5.",
    "Severe thrombocytopenia, active bleeding or a rapid unexplained fall may require urgent clinical assessment. Extreme thrombocytosis requires assessment of the underlying cause and possible bleeding or thrombotic complications.",
    "Critical notification thresholds, transfusion thresholds and procedural targets are distinct. Platelet count alone does not determine the need for transfusion."
  ],
  diseaseAssociations: [
    "Low: Marrow failure or suppression; sepsis and other infections, including dengue; immune thrombocytopenia; drug-related thrombocytopenia; platelet consumption; and hypersplenism.",
    "High: Reactive thrombocytosis associated with inflammation, infection or iron deficiency; post-splenectomy states; and myeloproliferative neoplasms.",
    "EDTA-associated pseudothrombocytopenia is a specimen-related artefact, not a clinical cause of thrombocytopenia."
  ],
  conversionFactors: [
    "1 × 10⁹/L = 1 × 10³/µL.",
    "For example, 150 × 10⁹/L = 150,000 platelets/µL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "potassium",
  name: "Potassium",
  synonyms: ["Serum Potassium", "Plasma Potassium", "K⁺"],
  department: "biochemistry",
  limsCode: "K",
  flags: ["critical", "stat"],
  summary: "Measures circulating potassium.",
  description: [
    "Measures circulating potassium, an electrolyte essential for cardiac conduction and neuromuscular function.",
    "Used to investigate and monitor potassium disturbances. Serum or plasma concentrations do not directly measure total-body potassium stores."
  ],
  indications: [
    "Investigate and monitor hypokalaemia or hyperkalaemia.",
    "Assess kidney disease, arrhythmias and unexplained muscle weakness.",
    "Monitor medicines affecting potassium, including diuretics and renin–angiotensin–aldosterone system inhibitors.",
    "Assess electrolyte disturbances associated with acid–base disorders.",
    "Monitor diabetic ketoacidosis (DKA) and its treatment.",
    "Monitor potassium replacement and relevant intravenous fluid therapy."
  ],
  referenceRange: [
    "Use the age- and specimen-appropriate reference interval on the validated LIMS report; see Appendix 12.",
    "Serum potassium is usually slightly higher than plasma potassium because potassium is released during clotting.",
    "Interpret alongside renal function, acid–base status, glucose, relevant medicines and previous results."
  ],
  analyticalLimitations: [
    "Haemolysis during collection or handling may falsely elevate potassium.",
    "Repeated fist clenching/pumping, prolonged venous stasis and delayed separation may cause misleading elevations.",
    "Inappropriate temperature exposure before separation may alter results.",
    "Potassium-EDTA contamination or contamination from potassium-containing infusions may cause falsely high results.",
    "Thrombocytosis and marked leucocytosis may cause pseudohyperkalaemia; the effect depends on specimen type and handling.",
    "Unexpected results require assessment of specimen quality and clinical context. Repeat testing using an appropriate specimen may be necessary."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum or lithium-heparin plasma, according to the locally validated assay.",
    "Confirm collection tube and minimum volume, particularly for paediatric specimens. Potassium-EDTA specimens are unsuitable.",
    "Avoid repeated fist pumping and prolonged tourniquet application. Avoid collection from an access site receiving potassium-containing fluids.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and separate serum or plasma from blood cells within the laboratory's validated interval.",
    "Avoid inappropriate chilling or excessive heat before separation. Refrigerated transport should be used only where validated for the specimen's processing stage.",
    "After separation, follow locally validated refrigeration and stability requirements.",
    "See Appendix 9a and Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess haemolysis against validated interference limits. Recollect when haemolysis, contamination or handling makes potassium unreliable.",
    "Potentially dangerous results or urgent recollection must be communicated urgently."
  ],
  methodology: "Potentiometric.",
  turnaround: {
    routine: "Same day, if confirmed locally.",
    urgent: "Urgent requests require prioritised testing; confirm emergency availability with the laboratory."
  },
  criticalAlert: [
    "Severe potassium disturbances may cause life-threatening arrhythmias. Symptoms, electrocardiogram (ECG) changes or a rapid change require urgent clinical assessment.",
    "A normal ECG does not exclude dangerous hyperkalaemia. When severe hyperkalaemia is clinically plausible, urgent assessment and management must not be delayed while awaiting repeat testing."
  ],
  diseaseAssociations: [
    "Low: Gastrointestinal losses; renal losses, including diuretic effects; mineralocorticoid excess; hypomagnesaemia; and intracellular shifts associated with alkalosis, insulin or beta₂-agonists.",
    "High: Acute kidney injury or advanced chronic kidney disease; mineralocorticoid deficiency; tissue breakdown; selected acid–base disturbances; and medicines such as ACE inhibitors, angiotensin receptor blockers and potassium-sparing diuretics.",
    "In Diabetic Keto-Acidosis, potassium may initially be normal or elevated despite total-body depletion and may fall during treatment."
  ],
  conversionFactors: ["1 mmol/L = 1 mEq/L for potassium.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "pregnancy-test",
  name: "Pregnancy Test",
  synonyms: [
    "Qualitative hCG Test",
    "Rapid Pregnancy Test",
    "Human Chorionic Gonadotrophin Test"
  ],
  department: "biochemistry",
  limsCode: "HCG",
  flags: ["stat"],
  summary: "Qualitative rapid test detecting human chorionic gonadotrophin (hCG).",
  description: [
    "Qualitative rapid test detecting human chorionic gonadotrophin (hCG) in an accepted specimen to support pregnancy diagnosis.",
    "Reports positive or negative results rather than an hCG concentration. It cannot determine pregnancy location, gestational age or viability."
  ],
  indications: [
    "Support pregnancy diagnosis in patients with a missed period or suspected pregnancy.",
    "Investigate amenorrhoea where pregnancy is possible.",
    "Assess possible pregnancy in patients with abdominal/pelvic pain or vaginal bleeding, alongside clinical assessment.",
    "Assess pregnancy status before procedures or medicines where clinically indicated.",
    "Not suitable for quantitative monitoring of ectopic pregnancy, trophoblastic disease or germ cell tumours."
  ],
  referenceRange: [
    "Qualitative interpretation according to the validated kit:",
    "Negative: hCG not detected at or above the test's detection threshold; early pregnancy is not excluded.",
    "Positive: hCG detected; usually consistent with pregnancy in the appropriate clinical context.",
    "Invalid: Required control criteria are not met; repeat with a new device according to laboratory procedure.",
    "Refer to the validated LIMS report and Appendix 12. Numerical reference intervals do not apply."
  ],
  analyticalLimitations: [
    "Early testing or dilute urine may produce a false-negative result.",
    "A negative rapid urine test does not reliably exclude pregnancy, including ectopic pregnancy, when clinical suspicion persists.",
    "The test does not distinguish intrauterine from ectopic pregnancy or viable from non-viable pregnancy.",
    "hCG may remain detectable after recent pregnancy, miscarriage or termination. hCG-containing fertility treatment may also produce a positive result.",
    "Trophoblastic disease and some tumours can produce genuine hCG; a positive result is not specific to pregnancy.",
    "Heterophile antibodies may interfere with susceptible serum assays. Unexpected or discordant results require laboratory investigation.",
    "Very high hCG concentrations or hCG variants may cause false-negative results with some devices; susceptibility is kit-dependent.",
    "Incorrect timing or interpretation outside the manufacturer's reading window may produce misleading results."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Urine: Fresh urine in a clean, dry container accepted by the laboratory. First-morning urine is preferable when early pregnancy is suspected.",
    "Serum: Accepted only if validated for the actual rapid kit. Confirm collection tube and minimum volume.",
    "Record relevant symptoms, last menstrual period and recent pregnancy or hCG treatment.",
    "For suspected ectopic pregnancy or persistent suspicion despite a negative rapid test, discuss appropriate quantitative serum hCG testing."
  ],
  storageTransport: [
    "Transport promptly.",
    "Follow the actual kit's validated storage limits for urine and, where accepted, separated serum. Confirm refrigeration and allowable delay with the laboratory.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Unaccepted specimen types, unsuitable containers, contamination, insufficient volume or storage outside validated limits require laboratory assessment.",
    "Assess serum haemolysis, lipaemia and icterus against kit-specific limits rather than automatically rejecting affected specimens."
  ],
  methodology: "Qualitative immunochromatographic rapid assay.",
  turnaround: {
    routine: "Same-day reporting, if confirmed locally.",
    urgent: "Prioritise clinically urgent requests."
  },
  criticalAlert: [
    "Suspected ectopic pregnancy requires urgent clinical assessment irrespective of the rapid result. A positive test alone does not diagnose ectopic pregnancy.",
    "Unexpected positive results where pregnancy is not expected require confirmation and clinical investigation; they do not automatically establish a tumour or critical result."
  ],
  diseaseAssociations: [
    "Pregnancy, including ectopic pregnancy; gestational trophoblastic disease; and selected hCG-producing tumours.",
    "A negative result may reflect absence of pregnancy, early pregnancy or another cause of false-negative testing."
  ],
  conversionFactors: "Not applicable; qualitative results.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "progesterone",
  name: "Progesterone",
  synonyms: ["Serum Progesterone", "P4"],
  department: "biochemistry",
  limsCode: "PROG",
  flags: [],
  summary: "Measures circulating progesterone to track ovulation and pregancy.",
  description: [
    "Measures circulating progesterone, produced mainly by the corpus luteum after ovulation and by the placenta during pregnancy.",
    "Used principally to support assessment of recent ovulation and selected fertility-treatment protocols."
  ],
  indications: [
    "Support confirmation of recent ovulation when clinically indicated.",
    "Investigate suspected ovulatory dysfunction as part of infertility assessment.",
    "Monitor selected assisted reproductive technology (ART) cycles according to specialist protocols.",
    "Support selected specialist investigations of ovarian or adrenal steroid production.",
    "Not a standalone test for pregnancy viability or location, or a routine test for monitoring all high-risk pregnancies."
  ],
  referenceRange: [
    "Use the analyser-specific reference intervals on the validated LIMS report; see Appendix 12.",
    "Interpret according to menstrual-cycle phase, age, menopausal status, pregnancy stage and hormone treatment.",
    "For ovulation assessment, use the laboratory's validated interpretive guidance. An ovulation decision limit is distinct from a reference interval."
  ],
  analyticalLimitations: [
    "Progesterone secretion is pulsatile, causing substantial variation over short periods.",
    "A suitably timed result can support recent ovulation, but a single measurement cannot reliably assess luteal phase quality or diagnose luteal phase deficiency.",
    "A low result may reflect incorrect sampling time rather than anovulation.",
    "Exogenous progesterone affects interpretation; document formulation, route and timing of the last dose.",
    "Immunoassay cross-reactivity and interfering antibodies may produce misleading results; susceptibility is method-dependent.",
    "Very low concentrations may approach the assay's quantification limit.",
    "Results from different methods may not be directly comparable."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a collection tube accepted by the testing laboratory. Confirm minimum volume rather than assuming a universal requirement of 2–5 mL.",
    "For ovulation assessment, collect approximately seven days before the expected next menstrual period. Day 21 is appropriate only for an approximately 28-day cycle; irregular cycles may require individualised timing.",
    "Record the last menstrual period, usual cycle length, estimated ovulation date where known, pregnancy status and relevant hormone treatment.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Separate serum and transport promptly according to validated laboratory requirements.",
    "Confirm the allowable separation delay, refrigerated stability and freezing conditions for delayed testing or referral.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess haemolysis, lipaemia and icterus against validated assay limits rather than automatically rejecting affected specimens."
  ],
  methodology: "Competative immunoassay.",
  turnaround: {
    routine: "Confirm whether testing is performed daily or in batches and the expected local reporting interval. Referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "An isolated low progesterone result does not establish miscarriage or constitute a critical result by itself.",
    "Suspected ectopic pregnancy or significant early-pregnancy pain or bleeding requires clinical assessment irrespective of the progesterone result."
  ],
  diseaseAssociations: [
    "Low when appropriately timed: May support anovulation, but does not independently establish its cause or diagnose luteal phase deficiency. Low concentrations are physiologically expected during the follicular phase and after menopause.",
    "Increased: Expected during the luteal phase and pregnancy, and with progesterone treatment. Rare ovarian or adrenal steroid-producing disorders may also increase concentrations."
  ],
  conversionFactors: [
    "1 ng/mL = approximately 3.18 nmol/L.",
    "ng/mL × 3.18 = nmol/L.",
    "nmol/L ÷ 3.18 = ng/mL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "prostate-specific-antigen",
  name: "Prostate-Specific Antigen (PSA)",
  synonyms: ["Total PSA", "Serum PSA"],
  department: "biochemistry",
  limsCode: "PSA",
  flags: [],
  summary: "Measures total circulating prostate-specific antigen.",
  description: [
    "Measures total circulating prostate-specific antigen, a protein produced mainly by the prostate.",
    "Used to assess the likelihood of prostate cancer and monitor established disease. PSA is not cancer-specific and cannot independently confirm or exclude prostate cancer."
  ],
  indications: [
    "Support investigation of suspected prostate cancer.",
    "Support early detection in asymptomatic patients after informed discussion of benefits, harms and appropriate follow-up.",
    "Monitor established prostate cancer, treatment response and post-treatment recurrence.",
    "Support active surveillance according to specialist protocols.",
    "Not a standalone diagnostic test for benign prostatic hyperplasia (BPH) or prostatitis."
  ],
  referenceRange: [
    "Refer to the validated LIMS report and Appendix 12.",
    "Interpret according to age, clinical findings, medicines, previous results and treatment history. A result within the reported interval does not exclude prostate cancer.",
    "Cancer-investigation decision limits and post-treatment recurrence criteria are distinct from reference intervals. After radical prostatectomy, PSA is expected to become undetectable; interpretation after radiotherapy differs."
  ],
  analyticalLimitations: [
    "Results vary between assay methods; use the same laboratory and method for serial monitoring where practicable.",
    "Interfering antibodies may cause misleading immunoassay results. Discuss results inconsistent with the clinical picture with the laboratory.",
    "Clinical interpretation considerations:",
    "BPH, prostatitis, urinary tract infection, acute urinary retention and recent prostate procedures may increase PSA.",
    "Ejaculation may cause a transient increase.",
    "Finasteride and dutasteride lower PSA and require adjusted clinical interpretation.",
    "A newly elevated result may require repeat testing after transient causes have resolved, according to the clinical pathway.",
    "Free-to-total PSA ratio may assist risk assessment in selected patients with moderately elevated total PSA. It is a separate investigation and does not establish a diagnosis."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a collection tube accepted by the laboratory. Confirm minimum volume.",
    "Record age, testing indication, previous prostate cancer treatment, relevant medicines, infection/retention and recent prostate procedures.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Separate serum and transport promptly according to validated laboratory requirements.",
    "Confirm separation limits, refrigerated stability and freezing conditions for delayed testing. Free PSA may require different handling if also requested.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess haemolysis, lipaemia and icterus against validated assay limits rather than automatically rejecting affected specimens."
  ],
  methodology: [
    "Immunoassay; confirm the locally used platform.",
    "This entry describes total PSA. Confirm whether free PSA or ultrasensitive PSA requires a separate request or specialist referral."
  ],
  turnaround: { routine: "1 - 3 days. Confirm batch testing turnaround.", urgent: "" },
  criticalAlert: [
    "Markedly elevated PSA or a confirmed significant rise, particularly after prostate cancer treatment, requires timely clinical or specialist review.",
    "An elevated PSA alone is not an immediate life-threatening result. Investigation and referral thresholds must not be labelled critical-result thresholds unless approved locally."
  ],
  diseaseAssociations: [
    "Increased: Prostate cancer, BPH, prostatitis, urinary tract infection involving the prostate, acute urinary retention and recent prostate procedures.",
    "Reduced following intervention: May reflect effective treatment, radical prostatectomy or medicines suppressing PSA production; interpretation depends on the treatment and assay."
  ],
  conversionFactors: ["1 ng/mL = 1 µg/L.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "prothrombin-time",
  name: "Prothrombin Time",
  synonyms: [
    "PT",
    "PT/INR",
    "Prothrombin Time with International Normalised Ratio"
  ],
  department: "haematology",
  limsCode: "PT",
  flags: ["stat"],
  summary: "Measures the time for citrated plasma to clot.",
  description: [
    "Measures the time for citrated plasma to clot after addition of thromboplastin and calcium, assessing the extrinsic and common coagulation pathways.",
    "Reported in seconds. The international normalised ratio (INR) is calculated from PT and is used principally to monitor vitamin K antagonist therapy, such as warfarin."
  ],
  indications: [
    "Monitor warfarin or other vitamin K antagonist therapy using INR.",
    "Investigate suspected coagulation disorders alongside the activated partial thromboplastin time (APTT) and other appropriate tests.",
    "Assess impaired hepatic clotting-factor synthesis in the appropriate clinical context.",
    "Support investigation of vitamin K deficiency and disseminated intravascular coagulation (DIC).",
    "Assess coagulation before procedures when indicated by bleeding history, medicines, disease or procedural requirements."
  ],
  referenceRange: [
    "Use the reagent- and analyser-specific PT and non-anticoagulated INR reference intervals on the validated LIMS report; see Appendix 12.",
    "For patients receiving warfarin, interpret INR against the prescribed therapeutic target. This target is distinct from the reference interval and depends on the treatment indication."
  ],
  analyticalLimitations: [
    "PT sensitivity varies with the reagent and analyser. INR improves comparability principally for vitamin K antagonist monitoring.",
    "A normal PT does not exclude platelet disorders, von Willebrand disease, haemophilia or other bleeding disorders.",
    "Direct oral anticoagulants may prolong PT to a variable extent. PT/INR must not be used to quantify their anticoagulant effect; a normal result does not exclude a clinically relevant drug concentration.",
    "Underfilling, clotting, incorrect anticoagulant or contamination from an anticoagulated line may produce unreliable results.",
    "High haematocrit alters the plasma-to-citrate balance and may falsely prolong clotting times unless citrate is adjusted.",
    "Haemolysis, lipaemia and icterus may affect results, particularly optical detection; assess against validated method limits.",
    "PT/INR alone does not reliably predict procedural bleeding risk, particularly in liver disease."
  ],
  sampleType: "Citrate plasma",
  containerColour: "Light blue Sodium Citrate",
  sampleRequirements: [
    "Whole blood collected into a 3.2% sodium citrate tube, maintaining nine parts blood to one part citrate.",
    "Fill to the marked level and mix gently immediately after collection.",
    "Confirm the correct tube size and minimum acceptable filling with the laboratory.",
    "For haematocrit above 0.55 L/L (55%), contact the laboratory before collection to arrange citrate adjustment.",
    "Avoid anticoagulant contamination.",
    "Record anticoagulant medicines, treatment indication and relevant recent dosing.",
    "The laboratory prepares citrated plasma for testing.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly under validated laboratory conditions.",
    "Fresh coagulation specimens are generally transported at controlled room temperature; confirm the acceptable temperature and testing interval locally. Do not refrigerate or freeze whole blood unless specifically directed by the laboratory.",
    "For delayed or referral testing, the laboratory should arrange validated plasma preparation, freezing and transport.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Reject clotted specimens, incorrect anticoagulant tubes and specimens outside validated filling limits.",
    "Assess excessive delay, contamination, haemolysis, lipaemia and icterus according to laboratory policy and assay-specific limits."
  ],
  methodology: [
    "Clot-based assay using thromboplastin and calcium, with optical or mechanical clot detection.",
    "INR is calculated using the mean normal PT and the international sensitivity index (ISI) for the validated reagent–instrument combination."
  ],
  turnaround: {
    routine: "Confirm the local routine reporting interval and urgent testing availability.",
    urgent: ""
  },
  criticalAlert: [
    "Markedly elevated INR during warfarin therapy requires prompt clinical assessment. Active significant bleeding requires urgent assessment irrespective of the INR.",
    "PT/INR abnormalities alone do not determine the need for plasma transfusion or anticoagulant reversal."
  ],
  diseaseAssociations: [
    "Prolonged PT: Vitamin K deficiency; vitamin K antagonist therapy; liver disease; DIC; factor VII deficiency; common-pathway factor deficiency or inhibitors; and selected anticoagulant effects.",
    "Shortened PT: Usually of limited diagnostic significance. Review specimen quality and clinical context; it does not independently establish a thrombotic disorder."
  ],
  conversionFactors: [
    "PT is reported in seconds; INR is dimensionless.",
    "INR = (patient PT ÷ mean normal PT)^ISI.",
    "There is no fixed conversion from PT seconds to INR."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "red-blood-cell-count",
  name: "Red Blood Cell (RBC) Count",
  synonyms: ["Erythrocyte Count", "Red Cell Count", "RCC"],
  department: "haematology",
  limsCode: "RBC",
  flags: ["stat"],
  summary: "Measures the number of circulating erythrocytes per unit volume of blood.",
  description: [
    "Measures the number of circulating erythrocytes per unit volume of blood, usually as part of the full blood count (FBC).",
    "Supports assessment of anaemia and erythrocytosis when interpreted with haemoglobin, haematocrit and red-cell indices. RBC count alone does not determine oxygen-carrying capacity or anaemia severity."
  ],
  indications: [
    "Support investigation and classification of anaemia as part of the FBC.",
    "Investigate and monitor suspected erythrocytosis.",
    "Monitor changes during treatment affecting red cells, alongside haemoglobin and other appropriate tests.",
    "Support assessment of microcytosis, including possible thalassaemia trait.",
    "Contribute to investigation of marrow disorders; reticulocyte count is required when assessing red-cell production or marrow response."
  ],
  referenceRange: [
    "Use the age- and sex-appropriate reference interval on the validated LIMS report; see Appendix 12.",
    "Interpret with pregnancy status, hydration, haemoglobin, haematocrit and red-cell indices.",
    "A normal or increased RBC count does not exclude anaemia, particularly when cells are small or contain less haemoglobin."
  ],
  analyticalLimitations: [
    "Cold agglutinins may cause red-cell clumping, a falsely low RBC count and misleading calculated indices.",
    "Specimen haemolysis, clotting, poor mixing or dilution by intravenous fluids may produce unreliable results.",
    "Analyser flags or discordance between RBC count, haemoglobin, haematocrit and indices require laboratory review, with blood-film examination where indicated.",
    "Dehydration and haemodilution alter circulating cell concentrations; these are clinical interpretation factors rather than assay interference."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a correctly filled collection tube.",
    "Mix gently immediately after collection. Confirm required volume and accepted paediatric tubes with the laboratory.",
    "Avoid contamination or dilution from intravenous fluids. Do not separate or centrifuge the specimen.",
    "If cold agglutination is suspected, discuss collection and transport with the laboratory.",
    "See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and analyse within the laboratory's validated interval.",
    "Confirm allowable storage temperature and delay for the actual analyser. Blood-film morphology may require earlier preparation than automated counting.",
    "Do not freeze.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Reject clotted specimens. Assess incorrect tubes, unacceptable filling, significant specimen haemolysis, contamination and excessive delay according to validated laboratory criteria.",
    "Suspected cold agglutination requires investigation before reporting an unreliable count."
  ],
  methodology: [
    "Automated haematology analyser using impedance and/or optical methods, depending on the platform.",
    "Blood-film examination may be used to investigate counting artefacts or abnormal morphology."
  ],
  turnaround: {
    routine: "Same day, if confirmed locally.",
    urgent: "Confirm urgent testing availability with the laboratory."
  },
  criticalAlert: [
    "Assess anaemia urgency using haemoglobin, symptoms, active bleeding and clinical context. RBC count alone must not be used to define severe anaemia or determine transfusion need.",
    "A markedly abnormal or unexpected count requires verification and appropriate clinical review."
  ],
  diseaseAssociations: [
    "Reduced: May accompany blood loss, haemolysis, nutritional deficiencies, chronic kidney disease, chronic inflammation or marrow failure/suppression.",
    "Increased: May occur with polycythaemia vera, secondary erythrocytosis associated with hypoxia or high altitude, and relative haemoconcentration from dehydration.",
    "Microcytosis with a relatively preserved or increased count: May suggest thalassaemia trait; confirm with appropriate investigations."
  ],
  conversionFactors: [
    "1 × 10¹²/L = 1 × 10⁶/µL.",
    "For example, 4.5 × 10¹²/L = 4.5 million cells/µL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "red-cell-distribution-width",
  name: "Red Cell Distribution Width (RDW)",
  synonyms: ["Red Cell Size Variation", "Anisocytosis Index"],
  department: "haematology",
  limsCode: "RDW",
  flags: [],
  summary: "Measures variation in red blood cell size.",
  description: [
    "Measures variation in red blood cell size (anisocytosis), usually as part of the full blood count (FBC).",
    "Depending on the analyser, it may be reported as RDW-CV, a relative measure expressed as a percentage, or RDW-SD, an absolute distribution width expressed in femtolitres."
  ],
  indications: [
    "Support assessment of anaemia alongside haemoglobin, red-cell indices and blood-film findings.",
    "Support investigation of microcytosis, including iron deficiency and thalassaemia.",
    "Identify variation in cell size associated with mixed deficiencies or mixed red-cell populations.",
    "Provide supplementary information during treatment; haemoglobin and, where indicated, reticulocyte count are more direct measures of response."
  ],
  referenceRange: [
    "Use the analyser-specific reference interval on the validated LIMS report; see Appendix 12.",
    "Confirm which parameter is reported:",
    "RDW-CV: Percentage (%).",
    "RDW-SD: Femtolitres (fL).",
    "These parameters and their reference intervals are not interchangeable."
  ],
  analyticalLimitations: [
    "RDW is non-specific and cannot independently diagnose the cause or severity of anaemia.",
    "RDW-CV is influenced by mean cell volume (MCV); interpret both together.",
    "Cold agglutination, specimen haemolysis, clotting or an abnormal red-cell distribution may produce unreliable results.",
    "Delayed analysis and unsuitable storage may alter cell volumes and derived indices.",
    "Results may differ between analyser methods; use the same method for serial comparisons where practicable.",
    "Recent transfusion, reticulocytosis and treatment-related changes may increase RDW without indicating a new deficiency.",
    "A normal RDW does not exclude iron deficiency, thalassaemia or other causes of anaemia."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a correctly filled collection tube.",
    "Mix gently immediately after collection. Confirm required volume and accepted paediatric tubes with the laboratory.",
    "Record recent transfusion and relevant treatment when interpreting serial results.",
    "Do not separate or centrifuge the specimen. See Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and analyse within the laboratory's validated interval for red-cell indices.",
    "Confirm acceptable storage temperature and maximum delay for the actual analyser. Prepare blood films promptly where indicated.",
    "Do not freeze. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Reject clotted specimens. Assess incorrect tubes, unacceptable filling, significant specimen haemolysis and excessive delay against validated laboratory requirements."
  ],
  methodology: [
    "Derived from the red-cell volume distribution measured by an automated haematology analyser.",
    "Confirm whether the local analyser and LIMS report RDW-CV, RDW-SD or both."
  ],
  turnaround: { routine: "Same day as the FBC, if confirmed locally.", urgent: "" },
  criticalAlert: [
    "An isolated increased RDW is not a standalone critical result.",
    "Assess clinical urgency using haemoglobin, symptoms, associated cytopenias, analyser flags and blood-film findings. Apply approved notification criteria in Appendix 4 and Appendix 5.",
    "Film review should follow validated laboratory criteria rather than an assumed universal RDW threshold."
  ],
  diseaseAssociations: [
    "Increased: May occur with iron deficiency, vitamin B12 or folate deficiency, mixed deficiencies, reticulocytosis, myelodysplastic disorders or mixed red-cell populations following transfusion.",
    "Microcytosis with normal RDW: May support consideration of thalassaemia trait, but is not diagnostic.",
    "Macrocytosis: Investigate using the complete FBC, film, clinical history and appropriate additional tests; RDW alone does not identify the cause."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "respiratory-panel",
  name: "Respiratory Panel (Influenza / RSV / COVID-19 PCR)",
  synonyms: ["Respiratory Virus PCR Panel", "Flu/RSV/COVID Panel"],
  department: "molecular",
  limsCode: "(to be confirmed)",
  flags: [],
  summary: "RT-PCR for detecting Influenza A, B; RSV abd SARS-CoV-2.",
  description: [
    "Qualitative multiplex reverse-transcription polymerase chain reaction (RT-PCR) detecting and differentiating influenza A, influenza B, respiratory syncytial virus (RSV) and severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).",
    "This is a limited four-target panel, not a comprehensive respiratory-pathogen screen."
  ],
  indications: [
    "Investigate suspected acute respiratory viral infection when results will influence clinical care or infection-control decisions.",
    "Support timely antiviral assessment and patient placement/cohorting.",
    "Investigate respiratory outbreaks according to laboratory and public health protocols.",
    "Support investigation of severe respiratory illness or illness in patients at increased risk of complications.",
    "A detected virus does not exclude bacterial infection or independently determine whether antibiotics are required."
  ],
  referenceRange: [
    "Qualitative result for each target:",
    "Not detected: Target viral RNA not detected; infection is not excluded.",
    "Detected: Target viral RNA detected; interpret with symptoms, illness timing and exposure history.",
    "Invalid / error / no result: No definitive result for the affected test; repeat testing or recollection may be required.",
    "Refer to the validated LIMS report."
  ],
  analyticalLimitations: [
    "Poor collection, low viral concentration, inappropriate specimen handling or collection early/late in illness may cause false-negative results.",
    "A negative upper-respiratory result may not exclude lower-respiratory infection.",
    "Target-region mutations and amplification inhibitors may affect detection.",
    "RNA detection does not establish the presence of viable virus or the patient's infectiousness.",
    "RNA may remain detectable after the acute illness.",
    "Co-infection with another panel target or a pathogen outside the panel is possible.",
    "The panel does not establish disease severity or identify all causes of respiratory infection."
  ],
  sampleType: "Swab",
  containerColour: "Swab",
  sampleRequirements: [
    "Use the swab, specimen site and transport medium accepted for the exact assay.",
    "For the checked Xpert Xpress CoV-2/Flu/RSV plus assay, accepted specimens are nasopharyngeal or anterior nasal swabs.",
    "Only submit laboratory validated samples. Confirm with laboratory if unsure.",
    "Record symptom-onset date, specimen site and relevant clinical details."
  ],
  storageTransport: [
    "Transport promptly in a secure, leakproof container.",
    "Follow the exact assay's validated temperature and time limits for the approved transport medium. Confirm refrigerated transport requirements and arrangements for delayed referral.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Unlabelled or mislabelled specimens.",
    "Leaking containers.",
    "Unaccepted specimen sites, swabs or transport media.",
    "Insufficient material or storage outside validated limits."
  ],
  methodology: "Multiplex real-time RT-PCR.",
  turnaround: {
    routine: "Confirm with the testing laboratory. Reporting time includes transport, laboratory workload and any repeat testing, not just cartridge run time.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate results requiring clinical or infection-control action according to approved local policy.",
    "Organisms Reported",
    "Influenza A virus.",
    "Influenza B virus.",
    "Respiratory syncytial virus.",
    "SARS-CoV-2."
  ],
  diseaseAssociations: [
    "Influenza A/B: Influenza and associated respiratory complications, including pneumonia.",
    "RSV: Upper-respiratory infection, bronchiolitis and pneumonia; severe disease may occur in infants, older adults and immunocompromised patients.",
    "SARS-CoV-2: COVID-19, ranging from mild respiratory illness to severe pneumonia and respiratory failure."
  ],
  conversionFactors: "Not applicable; qualitative molecular results.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "•\tInfluenza A virus.",
        "•\tInfluenza B virus.",
        "•\tRespiratory syncytial virus.",
        "•\tSARS-CoV-2."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "reticulocyte-count",
  name: "Reticulocyte Count",
  synonyms: [
    "Reticulocyte Percentage",
    "Absolute Reticulocyte Count",
    "Retic Count"
  ],
  department: "haematology",
  limsCode: "RETIC",
  flags: [],
  summary: "Measures circulating immature red blood cells.",
  description: "Measures circulating immature red blood cells (reticulocytes), reported as an absolute count and/or percentage of red blood cells. Reflects bone marrow red cell production.",
  indications: [
    "Assess the marrow response in anaemia and help distinguish reduced red cell production from haemolysis or blood loss.",
    "Monitor recovery after marrow suppression, chemotherapy or transplantation.",
    "Assess response to treatment of iron, vitamin B12 or folate deficiency.",
    "Monitor haemolytic anaemia."
  ],
  referenceRange: [
    "Use the locally validated, age-appropriate reference intervals on the LIMS report; see Appendix 12.",
    "The absolute count (× 10⁹/L) is preferred for interpretation. In anaemia, a count within the reference interval may still indicate an inadequate marrow response."
  ],
  analyticalLimitations: [
    "Reticulocyte percentage alone may overstate the marrow response in anaemia. Corrected reticulocyte percentage or the reticulocyte production index may assist interpretation.",
    "A raised count may not be present immediately after acute blood loss; a low count does not exclude haemolysis when marrow response is impaired.",
    "Manual counting has greater observer and sampling variability than validated automated counting.",
    "Cellular interference and analyser flags are method-dependent; unexpected results require laboratory review."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood. Fill the collection tube appropriately and mix gently.",
    "The same specimen used for the full blood count may be suitable if sufficient volume and acceptable stability remain. Confirm minimum volume, including paediatric requirements, with the laboratory; see Appendix 6."
  ],
  storageTransport: [
    "Transport promptly. Follow locally validated time and temperature limits for the method in use; see Appendix 9a.",
    "For manual counting, use fresh blood for supravital staining and examination."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Clotted specimen or unsuitable anticoagulant.",
    "Insufficient volume or unacceptable tube fill.",
    "Specimen outside validated stability limits.",
    "Haemolysis or other specimen deterioration that prevents reliable counting.",
    "Apply departmental criteria; see Appendix 7."
  ],
  methodology: [
    "Depending on the locally available method:",
    "Manual microscopy following supravital staining, such as new methylene blue.",
    "Automated reticulocyte counting using RNA-binding dyes and optical/flow-cytometric detection."
  ],
  turnaround: {
    routine: "Same day, subject to local testing availability and laboratory confirmation.",
    urgent: ""
  },
  criticalAlert: "Marked reticulocytopenia with severe or rapidly worsening anaemia warrants prompt clinical review. Interpret high or low counts alongside haemoglobin, other blood count findings and the clinical presentation.",
  diseaseAssociations: [
    "Increased: haemolysis, blood loss after a marrow response develops, and recovery following treatment or marrow suppression.",
    "Reduced or inappropriately normal in anaemia: marrow failure/suppression and untreated iron, vitamin B12 or folate deficiency."
  ],
  conversionFactors: ["Absolute count: 1 × 10⁹/L = 1,000 cells/µL.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "rotavirus-antigen-test",
  name: "Rotavirus Antigen Test",
  synonyms: ["Rotavirus Rapid Test", "Rotavirus Stool Antigen"],
  department: "microbiology",
  limsCode: "ROTA",
  flags: [],
  summary: "Qualitative detection of rotavirus antigen in stool.",
  description: "Qualitative detection of rotavirus antigen in stool by a rapid lateral-flow immunoassay, supporting diagnosis of rotavirus gastroenteritis, particularly in infants and young children.",
  indications: [
    "Investigate suspected rotavirus gastroenteritis when the result will support clinical assessment or infection-control decisions.",
    "Support investigation of suspected healthcare-associated or childcare outbreaks.",
    "Support surveillance where an approved programme is established."
  ],
  referenceRange: [
    "Negative: Rotavirus antigen not detected.",
    "Positive: Rotavirus antigen detected.",
    "Interpret alongside symptoms and clinical history."
  ],
  analyticalLimitations: [
    "A negative result does not exclude rotavirus infection, particularly with low antigen concentrations, late collection or inadequate sampling.",
    "A positive result does not exclude another enteric infection.",
    "Recent oral rotavirus vaccination may result in vaccine-virus shedding; the antigen test cannot distinguish vaccine from wild-type virus.",
    "Sensitivity, specificity and interference depend on the kit used. Unexpected or clinically discordant results may require referral for molecular confirmation.",
    "The test does not determine viral genotype or disease severity."
  ],
  sampleType: "Stool",
  containerColour: "Stool jar",
  sampleRequirements: [
    "Fresh stool, preferably loose or watery, collected during acute illness into a clean, dry, leak-proof screw-cap container.",
    "Avoid contamination with urine or toilet water. Do not add fixatives or transport medium unless accepted by the kit instructions. Confirm the minimum quantity with the laboratory."
  ],
  storageTransport: [
    "Transport promptly. If delayed, refrigerate at 2–8 °C.",
    "See Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container or insufficient specimen.",
    "Unacceptable contamination, preservative or transport medium.",
    "Storage or transport outside validated limits.",
    "Formed stool is not automatically unsuitable; acceptance depends on the clinical indication, kit instructions and local policy. See Appendix 7."
  ],
  methodology: "Rapid lateral-flow immunochromatographic assay for stool rotavirus antigen.",
  turnaround: { routine: "Same day.", urgent: "<2 hour." },
  criticalAlert: [
    "Communicate positive results promptly to the treating team and infection-control service where required by local policy, particularly for hospitalised patients or suspected outbreaks.",
    "A positive result is not automatically a critical laboratory result.",
    "Organisms Reported",
    "Rotavirus antigen detected or not detected."
  ],
  diseaseAssociations: ["Rotavirus gastroenteritis."],
  conversionFactors: "Not applicable — qualitative test.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: ["Rotavirus antigen detected or not detected."]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "rubella-antibody",
  name: "Rubella Antibody (IgG and/or IgM)",
  synonyms: [
    "Rubella Serology",
    "Rubella IgG",
    "Rubella IgM",
    "German Measles Antibody"
  ],
  department: "serology",
  limsCode: "RUB-AB",
  flags: [],
  summary: "Detects rubella-specific IgG and/or IgM antibodies.",
  description: "Detects rubella-specific immunoglobulin G (IgG) and/or immunoglobulin M (IgM) antibodies. IgG assesses evidence of immunity; IgM supports investigation of suspected recent infection.",
  indications: [
    "IgG: assess immunity before pregnancy or during antenatal care.",
    "IgM with IgG: investigate suspected rubella or relevant exposure, particularly during pregnancy.",
    "Support investigation of compatible febrile rash illness and outbreaks.",
    "Do not request IgM routinely for immunity screening in asymptomatic, unexposed patients."
  ],
  referenceRange: [
    "see Appendix 12.",
    "IgG positive: evidence of previous infection or vaccination; supports immunity assessment.",
    "IgG negative: no detectable serological evidence of immunity; generally considered susceptible unless other accepted evidence of immunity exists.",
    "IgG equivocal: immunity not established by this result; follow the laboratory's repeat-testing advice.",
    "IgM negative: no IgM detected; does not exclude early infection.",
    "IgM positive/equivocal: requires assessment of symptoms, exposure, vaccination history and confirmatory testing where indicated."
  ],
  analyticalLimitations: [
    "IgM may be undetectable during the first four days after rash onset. If an early specimen is negative and suspicion remains, repeat at least five days after rash onset.",
    "False-positive IgM may occur with other viral infections, including parvovirus B19 and Epstein–Barr virus, or rheumatoid factor.",
    "IgM may persist after infection or appear following recent vaccination; positivity alone does not establish acute infection.",
    "A single positive IgG result does not establish when infection occurred. Results near the decision limit may differ between assays.",
    "Specialist IgG avidity testing may help distinguish recent from past exposure but cannot precisely date infection."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum collected in a plain or SST tube. Confirm the minimum volume with the testing laboratory.",
    "Specify whether immunity assessment or investigation of infection is required. Include rash-onset date, exposure history, recent vaccination and pregnancy status/gestation.",
    "Indicate when infection is suspected."
  ],
  storageTransport: "Separate serum and follow the testing laboratory's validated storage and transport requirements; see Appendix 9a.",
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container, insufficient volume or unsuitable specimen/container.",
    "Storage or transport outside validated limits.",
    "Interference exceeding the assay's validated acceptance limits.",
    "Do not automatically reject haemolysed, lipaemic or icteric specimens. See Appendix 7."
  ],
  methodology: "IgM Immunometric Test (Class capture); IgG Immunometric immunoassay.",
  turnaround: { routine: "1 - 3 days. Confirm with the testing laboratory.", urgent: "" },
  criticalAlert: "Suspected rubella infection or a reactive IgM result in pregnancy requires urgent communication with the treating clinician.",
  diseaseAssociations: [
    "Rubella infection; maternal infection may cause congenital rubella syndrome."
  ],
  conversionFactors: "Not applicable to qualitative results. Where IgG is reported quantitatively: 1 IU/mL = 1,000 IU/L.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "rubella-igg-antibody",
  name: "Rubella IgG Antibody (Immunity Status)",
  synonyms: ["Rubella Immunity", "German Measles IgG"],
  department: "serology",
  limsCode: "RUB-IgG",
  flags: [],
  summary: "Measures rubella-specific IgG antibodies.",
  description: "Measures rubella-specific immunoglobulin G (IgG) antibodies to assess evidence of immunity following previous infection or vaccination.",
  indications: [
    "Assess rubella immunity before pregnancy and during antenatal care.",
    "Assess immunity in healthcare or childcare workers.",
    "Assess response after vaccination.",
    "> Routine testing after every vaccination is not required."
  ],
  referenceRange: [
    "Use the assay-specific diagnostic decision limits and interpretation on the validated LIMS report; see Appendix 12.",
    "Positive: serological evidence of previous infection or vaccination; generally accepted as evidence of immunity.",
    "Negative: no detectable serological evidence of immunity; assess alongside documented vaccination history and applicable policy.",
    "Equivocal: immunity is not established by this result; follow laboratory advice regarding repeat or additional testing.",
    "These are immunity decision limits, not a physiological reference interval."
  ],
  analyticalLimitations: [
    "Cannot distinguish antibodies from vaccination from those following natural infection.",
    "A single positive result does not establish recent infection or its timing.",
    "Testing before seroconversion may give a negative result.",
    "Low vaccine-induced antibody concentrations may be undetectable by some assays despite previous vaccination.",
    "Results near the decision limit may differ between assays; quantitative results are not necessarily interchangeable.",
    "IgG alone is insufficient to investigate suspected acute rubella. Seek laboratory advice if symptoms or relevant exposure are present, particularly during pregnancy."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum collected in a plain or serum-separator tube. Confirm the minimum volume with the testing laboratory.",
    "Include the reason for testing, pregnancy status and relevant vaccination history. For suspected infection, include symptoms, rash-onset date and exposure history."
  ],
  storageTransport: "Follow the testing laboratory's validated serum storage and transport requirements; see Appendix 9a.",
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container, insufficient volume or unsuitable specimen/container.",
    "Storage or transport outside validated limits.",
    "Interference exceeding the assay's validated acceptance limits.",
    "Do not automatically reject haemolysed, lipaemic or icteric specimens. See Appendix 7."
  ],
  methodology: "Immunometric immunoassay.",
  turnaround: { routine: "Confirm with the testing laboratory.", urgent: "" },
  criticalAlert: [
    "Negative or equivocal antenatal results should be clearly reported for clinician review and follow-up. They are not automatically critical laboratory results.",
    "Suspected rubella exposure or illness during pregnancy requires prompt clinical assessment."
  ],
  diseaseAssociations: [
    "Rubella infection. IgG positivity generally reflects previous infection or vaccination and does not by itself indicate active disease."
  ],
  conversionFactors: [
    "Not applicable to qualitative results.",
    "Where reported quantitatively: 1 IU/mL = 1,000 IU/L. Unit conversion does not make results from different assays interchangeable; see Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-13"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "rubella-rna",
  name: "Rubella RNA",
  synonyms: ["Rubella PCR", "Rubella RNA Detection", "Rubella Virus RT-PCR"],
  department: "serology",
  limsCode: "RUB-RNA",
  flags: [],
  summary: "Detects rubella virus ribonucleic acid (RNA).",
  description: "Detects rubella virus ribonucleic acid (RNA) by reverse transcription polymerase chain reaction (RT-PCR). Provides laboratory evidence of infection and supports investigation of acute rubella, congenital infection and outbreaks.",
  indications: [
    "Confirm suspected acute rubella, particularly early in illness or when serology is inconclusive.",
    "Investigate suspected congenital rubella infection or congenital rubella syndrome (CRS).",
    "Support public-health surveillance and molecular epidemiological investigations."
  ],
  referenceRange: [
    "Not detected: rubella RNA not detected in the specimen; infection is not excluded.",
    "Detected: rubella RNA detected; interpret with clinical findings, specimen timing and vaccination history."
  ],
  analyticalLimitations: [
    "Detection depends on specimen type, collection timing and sample quality. Yield declines with later collection in acquired infection, particularly after the first week.",
    "Poor sampling, RNA degradation or amplification inhibitors may cause false-negative or invalid results.",
    "Infants with congenital infection may shed virus for months; the acute rash-related collection window does not apply to them.",
    "RNA detection alone does not establish disease severity or confirm the clinical syndrome of CRS.",
    "Routine detection does not necessarily distinguish vaccine from wild-type virus; specialist sequencing may be required."
  ],
  sampleType: "Swab",
  containerColour: "Swab",
  sampleRequirements: [
    "Throat or nasopharyngeal swab using the receiving laboratory's approved swab and viral transport medium.",
    "Urine in a sterile, leak-proof container; confirm the required quantity, particularly for infants.",
    "For acquired infection, collect promptly, preferably within three days of rash onset. Discuss later collection with the laboratory.",
    "For suspected congenital infection, collect respiratory and urine specimens as early as possible after birth or first presentation. Concurrent serum for rubella antibody testing may be required.",
    "Include rash-onset and collection dates, exposure and vaccination history, pregnancy status/gestation, or infant age and relevant maternal history."
  ],
  storageTransport: [
    "Transport promptly under the receiving laboratory's validated conditions; see Appendix 9a.",
    "Respiratory swabs in approved transport medium are generally refrigerated at 2–8 °C for short transport. Confirm the permitted duration and freezing requirements before referral."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container, insufficient quantity or unsuitable specimen/container.",
    "Unapproved swab or transport medium.",
    "Storage or transport outside validated acceptance limits.",
    "Dry swabs are unsuitable unless specifically accepted by the testing laboratory. Discuss compromised, difficult-to-recollect specimens before rejection. See Appendix 7."
  ],
  methodology: "Real-time RT-PCR for rubella virus RNA.",
  turnaround: { routine: "Confirm with the testing laboratory.", urgent: "" },
  criticalAlert: [
    "Communicate positive results promptly to the treating clinician and designated public-health/infection-control service, especially in pregnancy or suspected congenital infection.",
    "Organisms Reported",
    "Rubella virus RNA detected or not detected."
  ],
  diseaseAssociations: [
    "Acquired rubella infection; congenital rubella infection, with or without congenital rubella syndrome."
  ],
  conversionFactors: "Not applicable — qualitative test.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: ["Rubella virus RNA detected or not detected."]
    }
  ],
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "sars-covid-19-igg",
  name: "SARS-Covid-19 IgG",
  synonyms: ["COVID-19 IgG", "SARS-CoV-2 Serology", "SARS-CoV-2 IgG"],
  department: "serology",
  limsCode: "COVID-IgG",
  flags: [],
  summary: "Detects IgG antibodies to a specified SARS-CoV-2 antigen.",
  description: [
    "Detects immunoglobulin G (IgG) antibodies to a specified SARS-CoV-2 antigen. Results may reflect previous infection or vaccination, depending on the assay target and vaccine received.",
    "Not suitable for diagnosing acute COVID-19 or establishing protective immunity."
  ],
  indications: [
    "Seek evidence of previous infection in selected cases following clinical or laboratory specialist advice.",
    "Support approved serosurveillance or epidemiological studies.",
    "Routine testing to assess vaccine response, determine further vaccine doses or diagnose long COVID is not recommended."
  ],
  referenceRange: [
    "Use the assay-specific decision limits and interpretation on the validated LIMS report; see Appendix 12.",
    "Negative: IgG to the assay's target antigen not detected above the decision limit.",
    "Positive: IgG to the target antigen detected; interpretation depends on vaccination and infection history.",
    "Equivocal/borderline, where applicable: follow laboratory advice regarding repeat or additional testing.",
    "These are assay decision limits, not protective-immunity thresholds."
  ],
  analyticalLimitations: [
    "Anti-spike antibodies may follow infection or vaccination with a spike-based vaccine.",
    "Anti-nucleocapsid antibodies generally support previous infection after spike-only vaccination but may also follow inactivated whole-virus vaccination.",
    "Antibodies may be undetectable early after infection, decline over time or remain low in immunocompromised patients. A negative result does not exclude previous infection.",
    "A positive result does not establish infection timing, current infectiousness or protective immunity.",
    "Serology cannot diagnose or exclude long COVID.",
    "False-positive results and interference are assay-dependent. Results from different assays are not necessarily interchangeable."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum collected in a plain or SST. Confirm the minimum volume with the testing laboratory.",
    "Include the reason for testing, relevant infection dates, vaccination dates/type and immunocompromising conditions."
  ],
  storageTransport: "Separate serum and follow the testing laboratory's validated time and temperature limits, including freezing requirements where applicable. See Appendix 9a.",
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container, insufficient volume or unsuitable specimen/container.",
    "Storage or transport outside validated limits.",
    "Interference exceeding the assay's validated acceptance limits.",
    "Do not automatically reject haemolysed, lipaemic or icteric specimens. See Appendix 7."
  ],
  methodology: "Immunometric assay",
  turnaround: {
    routine: "Confirm with the testing laboratory, including referral time where applicable.",
    urgent: ""
  },
  criticalAlert: [
    "No routine critical threshold applies to SARS-CoV-2 IgG alone.",
    "Discuss clinically discordant results or specialist requests with the treating clinician and laboratory. Follow approved local notification criteria; see Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Previous SARS-CoV-2 infection. Antibody positivity may also reflect vaccination and does not by itself indicate active COVID-19."
  ],
  conversionFactors: [
    "Not applicable to qualitative results.",
    "For quantitative assays, use only manufacturer-validated conversions. Do not apply a universal conversion between arbitrary units and binding antibody units."
  ],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "semen-analysis",
  name: "Semen Analysis",
  synonyms: ["Seminal Fluid Analysis", "Sperm Count"],
  department: "microbiology",
  limsCode: "SEMEN",
  flags: [],
  summary: "Assessment of semen in male fertility.",
  description: "Assessment of semen volume, sperm concentration, total sperm number, motility and morphology for male fertility evaluation.",
  indications: [
    "Investigate male-factor infertility.",
    "Assess semen before assisted reproductive procedures.",
    "Assess residual sperm after vasectomy.",
    "Support investigation of suspected impaired sperm production or reproductive tract obstruction."
  ],
  referenceRange: [
    "For fertility assessment, WHO sixth edition (2021) lower fifth-percentile reference values are:",
    "Semen volume: 1.4 mL.",
    "Sperm concentration: 16 × 10⁶/mL.",
    "Total sperm number: 39 × 10⁶ per ejaculate.",
    "Progressive motility: 30%.",
    "Total motility: 42%.",
    "Normal morphology: 4%.",
    "These values do not distinguish fertile from infertile men. Interpret all parameters together with clinical history and the validated laboratory report; see Appendix 12.",
    "Post-vasectomy results must be interpreted against the approved clearance protocol, not fertility reference values."
  ],
  analyticalLimitations: [
    "Semen parameters vary between ejaculates; an abnormal result may require repeat testing.",
    "Abstinence duration, incomplete collection, recent febrile illness and transport conditions can affect results.",
    "Delayed examination particularly affects motility and vitality.",
    "Morphology assessment requires standardised criteria and trained observers.",
    "Immotility does not necessarily mean sperm are dead; vitality testing may be required.",
    "Semen analysis alone does not identify the cause of infertility or confirm infection."
  ],
  sampleType: "Body fluid",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Collect into a laboratory-approved, wide-mouthed, leak-proof container that is non-toxic to sperm.",
    "Avoid ordinary condoms and lubricants.",
    "Record collection time, abstinence duration and any sample loss.",
    "Arrange collection and delivery with the laboratory beforehand."
  ],
  storageTransport: [
    "Maintain at 20–37 °C during transport; do not refrigerate, freeze or expose to excessive heat.",
    "Deliver promptly enough for examination to begin within one hour of collection, preferably earlier. Collection near the testing laboratory is preferred. See Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking or unsuitable container.",
    "Collection with unapproved condoms, lubricants or other substances that compromise testing.",
    "Incomplete collection or delayed transport requires assessment, documentation and possible recollection rather than automatic rejection. Results may need qualification or restriction to reliable parameters. See Appendix 7."
  ],
  methodology: [
    "Macroscopic assessment and standardised microscopy according to validated WHO-based methods.",
    "Fertility testing includes sperm concentration/number, motility and morphology; additional assessment such as vitality is performed were indicated and available."
  ],
  turnaround: {
    routine: "Same day, subject to local availability. Confirm timing for the complete report, including morphology.",
    urgent: ""
  },
  criticalAlert: [
    "No routine life-threatening critical threshold applies.",
    "Azoospermia or markedly abnormal fertility results require clinician review and appropriate confirmation.",
    "For post-vasectomy testing, clearly report any residual sperm and motility. Continue contraception until the responsible clinician confirms clearance under the approved protocol. See Appendices 4 and 5 for any locally adopted notification criteria."
  ],
  diseaseAssociations: [
    "Male-factor infertility associated with impaired sperm production, obstruction, endocrine disorders, varicocele or testicular damage. Abnormal parameters are not specific to any one cause."
  ],
  conversionFactors: "1 × 10⁶ sperm/mL = 1 × 10⁹ sperm/L.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12",
    "appendix-17"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "serum-sodium",
  name: "Serum Sodium",
  synonyms: ["Plasma Sodium", "Na⁺"],
  department: "biochemistry",
  limsCode: "NA",
  flags: ["critical", "stat"],
  summary: "Measures sodium concentration in serum or plasma.",
  description: [
    "Measures sodium concentration in serum or plasma. Sodium is the principal extracellular cation; its concentration reflects water balance relative to sodium and contributes to extracellular osmolality.",
    "Measured as part of an electrolyte profile."
  ],
  indications: [
    "Diagnose and monitor hyponatraemia and hypernatraemia.",
    "Assess fluid and electrolyte disturbances in renal, cardiac or hepatic disease.",
    "Support investigation of suspected inappropriate antidiuresis, adrenal insufficiency or diabetes insipidus.",
    "Monitor critically ill patients and those receiving intravenous fluids or diuretics."
  ],
  referenceRange: [
    "Use the age-appropriate reference interval on the validated LIMS report; see Appendix 12.",
    "A commonly used adult interval is 135–145 mmol/L, subject to local validation. Reference intervals are distinct from critical-result thresholds."
  ],
  analyticalLimitations: [
    "Marked hyperlipidaemia or hyperproteinaemia may cause falsely low sodium with indirect ion-selective electrode methods (pseudohyponatraemia). Direct measurement may help resolve suspected artefact.",
    "Hyperglycaemia can lower sodium through an osmotic water shift; this is not pseudohyponatraemia.",
    "Contamination with intravenous fluids or sodium-containing additives may produce misleading results.",
    "Interpret with glucose, renal function, fluid status and, where indicated, serum osmolality, urine osmolality and urine sodium.",
    "Method differences may affect comparison of central laboratory and blood-gas analyser results."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain/serum-separator tube or lithium-heparin plasma. Confirm minimum volume with the laboratory.",
    "Do not use sodium-heparin or other sodium-containing collection additives. Avoid contamination from intravenous infusions; see Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and separate serum or plasma from cells according to local requirements.",
    "Keep separated specimens capped. Follow validated storage temperatures and stability limits; see Appendix 9a."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Wrong tube/additive, leaking container or insufficient volume.",
    "Clotted anticoagulated plasma specimen or residual fibrin that prevents reliable analysis.",
    "Suspected infusion/additive contamination.",
    "Storage outside validated limits or interference exceeding validated acceptance limits.",
    "Clotting during serum preparation is expected. Do not automatically reject haemolysed, lipaemic or icteric specimens; assess suitability for the method used. See Appendix 7."
  ],
  methodology: "Potentiometric assay.",
  turnaround: {
    routine: "Same day.",
    urgent: "Confirm urgent testing availability and reporting time with the laboratory."
  },
  criticalAlert: [
    "<120 mmol/L and >160 mmol/L",
    "Clinical urgency also depends on symptoms and the rate of sodium change."
  ],
  diseaseAssociations: [
    "Hyponatraemia: inappropriate antidiuresis, diuretic use, adrenal insufficiency, heart failure, cirrhosis, renal disease and sodium losses with water replacement or retention.",
    "Hypernatraemia: inadequate water intake or excess water loss, diabetes insipidus, osmotic diuresis or excess sodium administration."
  ],
  conversionFactors: ["For sodium: 1 mmol/L = 1 mEq/L.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "sputum-culture",
  name: "Sputum Culture",
  synonyms: [
    "Sputum Microscopy",
    "Culture and Susceptibility",
    "Sputum MCS",
    "Sputum Culture and Sensitivity"
  ],
  department: "microbiology",
  limsCode: "SPUT",
  flags: [],
  summary: "Gram stain and routine bacterial culture of sputum.",
  description: [
    "Gram stain and routine bacterial culture of sputum to identify potentially significant respiratory pathogens. Antimicrobial susceptibility testing is performed on clinically significant isolates.",
    "Interpretation depends on specimen quality, microscopy, culture findings and clinical context."
  ],
  indications: [
    "Investigate severe pneumonia, hospital-acquired pneumonia or treatment failure.",
    "Investigate selected community-acquired pneumonia cases, particularly where resistant pathogens are suspected.",
    "Guide antimicrobial selection in bronchiectasis exacerbations.",
    "Support investigation of suspected lung abscess, recognising the limitations of expectorated sputum.",
    "Not routinely indicated for uncomplicated acute bronchitis."
  ],
  referenceRange: [
    "No clinically significant bacterial pathogen isolated; normal respiratory flora may be present.",
    "A negative culture does not exclude lower respiratory tract infection. There is no numerical reference interval."
  ],
  analyticalLimitations: [
    "Salivary contamination and airway colonisation may produce misleading results.",
    "Prior antimicrobial treatment reduces culture yield.",
    "Isolation of an organism does not by itself establish that it is causing infection.",
    "Routine culture does not reliably detect mycobacteria, respiratory viruses or atypical bacterial pathogens. Fungal and other specialist investigations require specific requests.",
    "Expectorated sputum is unsuitable for reliable anaerobic culture because of oral contamination; discuss an appropriate specimen if anaerobic infection is suspected.",
    "BAL and tracheal aspirates require specimen-specific processing and interpretation."
  ],
  sampleType: "Sputum",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Fresh sputum obtained by deep coughing into a sterile, leak-proof screw-cap container. Rinse the mouth with water beforehand; avoid submitting saliva.",
    "Collect before antibiotics where practical, without delaying necessary treatment. Confirm the minimum quantity with the laboratory.",
    "Tracheal aspirate or BAL may be accepted for lower respiratory culture: clearly identify the specimen and confirm the correct local request/code.",
    "Include suspected diagnosis, antimicrobial treatment and relevant information such as bronchiectasis, ventilation or immunocompromise."
  ],
  storageTransport: [
    "Transport promptly, preferably within two hours. If delayed, refrigerate at 2–8 °C within locally validated limits; see Appendices 9a and 9b.",
    "Confirm maximum storage time and any additional requirements for specialist testing with the testing laboratory."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking or unsuitable container, or insufficient specimen.",
    "Swab submitted instead of a respiratory specimen.",
    "Storage or transport outside validated limits.",
    "Expectorated sputum failing validated microscopic quality criteria.",
    "Few or no inflammatory cells alone is not a sufficient reason for rejection. Do not automatically apply sputum-quality rejection rules to BAL, tracheal aspirates, immunocompromised/neutropenic patients or specimens for tuberculosis testing. Discuss exceptions with the laboratory; see Appendix 7."
  ],
  methodology: [
    "Gram stain, routine bacterial culture, organism identification and antimicrobial susceptibility testing using validated laboratory methods and the adopted susceptibility standard.",
    "Additional molecular, mycobacterial, fungal or specialist testing requires an appropriate request and may require referral."
  ],
  turnaround: {
    routine: "Gram stain: confirm local availability and reporting time. Preliminary culture: usually 24–48 hours. Final routine culture and susceptibility: usually 48–72 hours. Confirm with laboratory; complex isolates may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate clinically significant findings or important resistance patterns according to local policy, particularly in severe infection or suspected healthcare-associated transmission.",
    "MRSA or resistant Gram-negative growth may represent colonisation; interpret with clinical findings.",
    "Organisms Reported",
    "Clinically significant isolates may include Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis, Staphylococcus aureus, Pseudomonas aeruginosa and other Gram-negative bacilli.",
    "Reporting and susceptibility testing depend on specimen type, predominance, microscopy and clinical relevance. Candida in respiratory specimens usually represents colonisation rather than pneumonia."
  ],
  diseaseAssociations: [
    "Bacterial pneumonia, bronchiectasis exacerbation and selected suppurative respiratory infections.",
    "Suspected tuberculosis requires a separate diagnostic request/pathway, including WHO-recommended rapid molecular testing where available; routine sputum culture does not exclude TB."
  ],
  conversionFactors: "Not applicable to routine qualitative culture reporting.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Clinically significant isolates may include Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis, Staphylococcus aureus, Pseudomonas aeruginosa and other Gram-negative bacilli.",
        "Reporting and susceptibility testing depend on specimen type, predominance, microscopy and clinical relevance. Candida in respiratory specimens usually represents colonisation rather than pneumonia."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "stool-routine-microscopy",
  name: "Stool Routine Microscopy",
  synonyms: ["Faeces Microscopy"],
  department: "microbiology",
  limsCode: "STOOL-MIC",
  flags: [],
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
  diseaseAssociations: [
    "Inflammatory diarrhoea, amoebic dysentery, helminth infections, malabsorption (fat droplets – screening only)."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-09-25",
  updated: ""
},

{
  id: "stool-culture",
  name: "Stool Culture",
  synonyms: ["Faeces Culture", "Bacterial Enteric Culture"],
  department: "microbiology",
  limsCode: "STOOL",
  flags: [],
  summary: "Culture of faeces to detect selected enteric bacterial pathogens.",
  description: [
    "Culture of faeces to detect selected enteric bacterial pathogens. The organisms investigated depend on the laboratory's culture methods and clinical information supplied.",
    "Additional toxin or molecular testing is required for some pathogens."
  ],
  indications: [
    "Investigate suspected bacterial diarrhoea, particularly with blood, fever, severe symptoms or immunocompromise.",
    "Investigate suspected foodborne illness or outbreaks.",
    "Support targeted antimicrobial selection where treatment is indicated.",
    "Investigate carriage or perform clearance testing when requested through an approved public-health pathway.",
    "If enteric fever or systemic infection is suspected, request blood cultures as well; stool culture alone is insufficient."
  ],
  referenceRange: [
    "No enteric bacterial pathogen isolated within the scope of testing performed.",
    "A negative result does not exclude infectious diarrhoea."
  ],
  analyticalLimitations: [
    "Prior antibiotics, delayed transport and low organism numbers reduce recovery.",
    "Routine culture does not detect viral or parasitic causes, or establish Clostridioides difficile infection.",
    "Recovery of Vibrio, Yersinia and other less common pathogens may require additional methods or a specific request.",
    "Routine culture alone cannot identify all diarrhoeagenic Escherichia coli pathotypes. STEC investigation requires validated Shiga toxin/toxin-gene testing and appropriate culture.",
    "A positive result may reflect prolonged shedding or carriage rather than the cause of current symptoms.",
    "Stool culture does not reliably exclude typhoid or paratyphoid fever."
  ],
  sampleType: "Stool",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Fresh diarrhoeal stool in a sterile, leak-proof screw-cap container. Confirm the minimum quantity with the laboratory.",
    "Avoid contamination with urine, toilet water or disinfectant. Collect early in illness and before antibiotics where practical, without delaying necessary treatment.",
    "A rectal swab containing visible faecal material may be accepted in approved enteric transport medium if stool cannot be obtained; confirm suitability first.",
    "Include symptom duration, blood in stool, antibiotic use, travel/exposure history and suspected outbreak or cholera. State any specific pathogens or public-health indication."
  ],
  storageTransport: [
    "Transport promptly.",
    "For anticipated delays, use laboratory-approved enteric transport medium, such as Cary–Blair. Follow validated temperature and maximum transport-time requirements; refrigeration at 2–8 °C may be required.",
    "See Appendices 9a and 9b. Confirm arrangements for referral specimens."
  ],
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container, insufficient material or unsuitable collection system.",
    "Unacceptable contamination, preservative or transport conditions.",
    "Formed stool submitted for routine acute-diarrhoea investigation, unless an approved clinical/public-health exception applies.",
    "See Appendix 7."
  ],
  methodology: [
    "Selective/differential bacterial culture and organism identification using validated methods.",
    "Antimicrobial susceptibility testing is performed on relevant isolates according to the laboratory's adopted standard and clinical/public-health indication.",
    "Shiga toxin assays, molecular testing, serotyping and specialist confirmation are additional investigations; confirm local or referral availability."
  ],
  turnaround: {
    routine: "Preliminary: usually 24–48 hours. Final routine culture: usually 48–72 hours. Confirm with the testing laboratory. Susceptibility testing, specialist identification may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate suspected or confirmed Salmonella Typhi/Paratyphi, Shigella, STEC/Shiga toxin detection and suspected cholera according to approved local policy.",
    "Organisms Reported",
    "Subject to confirmed local testing coverage:",
    "Salmonella species.",
    "Shigella species.",
    "Campylobacter species.",
    "Vibrio and Yersinia species where specifically investigated.",
    "STEC and other diarrhoeagenic E. coli pathotypes should be reported only when demonstrated by validated additional testing. Do not classify ordinary stool E. coli growth as pathogenic."
  ],
  diseaseAssociations: [
    "Non-typhoidal Salmonella: gastroenteritis, sometimes invasive infection.",
    "Salmonella Typhi/Paratyphi: enteric fever.",
    "Shigella: shigellosis, including bacillary dysentery.",
    "Campylobacter: enteritis.",
    "STEC: diarrhoea, haemorrhagic colitis and haemolytic uraemic syndrome.",
    "Toxigenic Vibrio cholerae: cholera.",
    "Yersinia enterocolitica: enterocolitis and mesenteric adenitis."
  ],
  conversionFactors: "Not applicable — qualitative culture reporting.",
  organismsReported: [
    {
      group: "Subject to confirmed local testing coverage",
      items: [
        "•\tSalmonella species.",
        "•\tShigella species.",
        "•\tCampylobacter species.",
        "•\tVibrio and Yersinia species where specifically investigated.",
        "STEC and other diarrhoeagenic E. coli pathotypes should be reported only when demonstrated by validated additional testing. Do not classify ordinary stool E. coli growth as pathogenic."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "syphilis-rapid-plasma-reagin",
  name: "Syphilis – Rapid Plasma Reagin (RPR)",
  synonyms: ["Non-treponemal Syphilis Test", "RPR Titre"],
  department: "serology",
  limsCode: "RPR",
  flags: [],
  summary: "Non-treponemal flocculation test to support syphilis diagnosis.",
  description: [
    "Non-treponemal flocculation test detecting antibodies to lipoidal antigens. Used with treponemal testing and clinical assessment to support syphilis diagnosis and monitor treatment.",
    "RPR is not specific for Treponema pallidum."
  ],
  indications: [
    "Support syphilis diagnosis within the approved laboratory testing algorithm.",
    "Establish a baseline titre and monitor response after treatment.",
    "Support assessment of suspected reinfection or treatment failure.",
    "Contribute to antenatal syphilis testing alongside treponemal testing."
  ],
  referenceRange: [
    "Non-reactive: no detectable RPR reactivity; syphilis is not excluded.",
    "Reactive: report the endpoint titre and interpret with treponemal results, clinical findings and previous treatment history.",
    "Qualitative reactivity and titres are used."
  ],
  analyticalLimitations: [
    "Biological false-positive reactions occur with other infections, autoimmune conditions, pregnancy and other circumstances.",
    "Sensitivity is reduced in very early infection and some late infections.",
    "Excess antibody may cause a false-negative prozone effect. Request dilution testing when clinical suspicion remains despite a non-reactive result.",
    "Persistent reactivity after adequate treatment may represent a serofast state; it does not automatically establish treatment failure.",
    "A titre alone cannot determine disease stage, infectiousness or distinguish active from previously treated infection.",
    "Compare serial results using the same method, preferably at the same laboratory. RPR and VDRL titres are not interchangeable."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in an approved plain tube or SST. Confirm minimum volume with the laboratory.",
    "Include pregnancy status, symptoms/exposure, previous syphilis results and treatment history. Identify whether testing is for diagnosis or treatment follow-up."
  ],
  storageTransport: "Separate serum and follow the kit and laboratory's validated storage, transport and freezing requirements; see Appendix 9a.",
  rejection: [
    "Unlabelled or mislabelled specimen.",
    "Leaking container, insufficient volume or unsuitable specimen/container.",
    "Storage or transport outside validated limits.",
    "Interference exceeding the method's validated acceptance limits.",
    "Do not automatically reject haemolysed, lipaemic or icteric specimens. See Appendix 7."
  ],
  methodology: [
    "Manual macroscopic flocculation card test. Reactive specimens are serially diluted to determine the endpoint titre.",
    "Treponemal testing is performed according to the approved diagnostic algorithm; confirm local or referral availability."
  ],
  turnaround: {
    routine: "Same day for RPR, subject to local availability. Treponemal confirmation may require additional time.",
    urgent: ""
  },
  criticalAlert: "Promptly communicate a newly reactive RPR in pregnancy and arrange treponemal testing and clinical review.",
  diseaseAssociations: [
    "Syphilis; reactive results may also occur with other treponematoses or biological false-positive reactions.",
    "Treatment monitoring: a fourfold titre change represents two dilution steps, for example 1:32 to 1:8 or 1:8 to 1:32. Interpret direction and timing with disease stage, treatment and exposure history."
  ],
  conversionFactors: "Not applicable — titres are dilution ratios, not concentrations.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12",
    "appendix-13",
    "appendix-16"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "syphilis-anti-treponemal-antibody",
  name: "Syphilis Anti-Treponemal Antibody (anti-TP)",
  synonyms: [
    "Treponema pallidum Antibody",
    "Treponemal Antibody Test",
    "Syphilis-Specific Antibody"
  ],
  department: "serology",
  limsCode: "TPAB",
  flags: [],
  summary: "Detecting antibodies to Treponema pallidum",
  description: [
    "Detects antibodies to Treponema pallidum. Used for syphilis screening or supplemental testing within an approved serological algorithm.",
    "A reactive result does not distinguish untreated infection from previously treated infection."
  ],
  indications: [
    "Investigate suspected syphilis or exposure to an infected partner.",
    "Antenatal and sexual-health screening, including detection of asymptomatic infection.",
    "Investigate a reactive rapid plasma reagin (RPR) or Venereal Disease Research Laboratory (VDRL) test.",
    "Support interpretation of discordant syphilis serology."
  ],
  referenceRange: [
    "Expected result: Non-reactive.",
    "Non-reactive: No treponemal antibodies detected; early infection remains possible.",
    "Reactive: May indicate current or previously treated infection; interpret with quantitative RPR/VDRL, clinical findings and documented treatment history.",
    "Equivocal or indeterminate, where applicable: Further testing according to the assay and laboratory algorithm.",
    "Use the validated LIMS report and Appendix 12 for assay-specific cutoffs. Treponemal antibody levels are not measures of disease activity."
  ],
  analyticalLimitations: [
    "Antibodies usually remain detectable for many years, often lifelong, after treatment.",
    "Not suitable for monitoring treatment response or diagnosing reinfection on its own.",
    "Early primary syphilis may be non-reactive. If suspicion remains, arrange repeat serology and consider lesion testing where available.",
    "False-reactive results occur; an isolated reactive screening result requires further interpretation.",
    "Cannot distinguish syphilis from other treponemal infections, including yaws.",
    "Passively transferred maternal antibodies limit interpretation in infants; a reactive treponemal result alone does not diagnose congenital syphilis."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum collected into a tube accepted for the local assay. Plasma is acceptable only where validated.",
    "Confirm the required blood collection volume and minimum serum volume with the laboratory; these are not interchangeable.",
    "Include pregnancy status, symptoms or exposure, previous syphilis results and treatment history on the request."
  ],
  storageTransport: [
    "Transport promptly. Store separated serum at 2–8 °C when testing is delayed, within the assay's validated stability limits.",
    "For longer storage, freeze only according to the applicable assay instructions. Avoid repeated freeze–thaw cycles.",
    "See Appendices 9a and 9b."
  ],
  rejection: [
    "Unlabelled or mislabelled specimens, leaking containers, unsuitable tubes or insufficient quantity.",
    "Specimens outside validated storage limits or with significant contamination.",
    "Haemolysis, lipaemia or icterus warrant rejection only when they exceed validated assay interference limits.",
    "See Appendix 7."
  ],
  methodology: [
    "Validated treponemal antibody assay; confirm the method used locally. Methods include immunoassays, Treponema pallidum particle agglutination (TPPA) and Treponema pallidum haemagglutination (TPHA).",
    "Reactive screens undergo quantitative RPR/VDRL and supplemental treponemal testing as required. A reactive treponemal screen with non-reactive RPR/VDRL generally requires a different treponemal assay, such as TPPA.",
    "Specialist supplemental testing may require referral."
  ],
  turnaround: {
    routine: "Confirm routine and urgent turnaround times with the testing laboratory. Supplemental or referral testing may extend reporting time.",
    urgent: ""
  },
  criticalAlert: [
    "A newly reactive result during pregnancy, or one without documented adequate previous treatment, requires prompt communication and urgent clinical follow-up to prevent congenital syphilis.",
    "Apply the approved alert and notification policy; persistent reactivity after documented treatment is not automatically a critical result. See Appendices 4 and 5."
  ],
  diseaseAssociations: [
    "Current or previous syphilis infection, including latent infection."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10"
  ],
  lastReviewed: "",
  added: "2026-10-07",
  updated: ""
},

{
  id: "testosterone",
  name: "Testosterone",
  synonyms: ["Total Testosterone", "Serum Testosterone"],
  department: "biochemistry",
  limsCode: "TESTO",
  flags: [],
  summary: "Measures total circulating testosterone, including protein-bound and free testosterone.",
  description: "Measures total circulating testosterone, including protein-bound and free testosterone. Testosterone is produced mainly by the testes in men; in women, it derives from ovarian and adrenal androgen production and peripheral conversion.",
  indications: [
    "Investigate suspected male hypogonadism.",
    "Assess selected patients with male infertility or erectile dysfunction where androgen deficiency is suspected.",
    "Monitor testosterone replacement therapy.",
    "Investigate androgen excess in women, including hirsutism, virilisation and suspected polycystic ovary syndrome (PCOS).",
    "Investigate suspected androgen-secreting tumours or abnormal pubertal development."
  ],
  referenceRange: [
    "Use the method-, age-, sex- and pubertal-stage-specific reference intervals on the validated LIMS report; see Appendix 12.",
    "In men, hypogonadism requires compatible clinical features and consistently low testosterone on separate morning fasting samples"
  ],
  analyticalLimitations: [
    "Testosterone varies with collection time, sleep, food intake and acute illness. A single low result does not establish hypogonadism.",
    "Changes in sex hormone-binding globulin (SHBG) may cause total testosterone to differ from androgen availability. Where indicated, calculate free testosterone using total testosterone, SHBG and albumin with a validated equation.",
    "Immunoassays may have limited accuracy at low concentrations, particularly in women and children.",
    "Cross-reactivity and other immunoassay interference, including biotin in susceptible assays, may produce misleading results.",
    "Hormonal medicines and androgen use affect interpretation; provide relevant medication details."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a SST. See Appendix 6.",
    "For suspected male hypogonadism, collect in the morning after an overnight fast and usual sleep. Confirm a low result on a separate morning when the patient is not acutely ill.",
    "For investigation of androgen excess in women, morning fasting collection is preferred; collect in the early follicular phase where feasible.",
    "Record collection time. For treatment monitoring, record the testosterone preparation and timing of the last dose; sampling time depends on the formulation."
  ],
  storageTransport: [
    "Separate serum and transport according to the laboratory's validated assay requirements. Confirm refrigerated stability, freezing requirements and permitted freeze–thaw cycles locally.",
    "See Appendix 9a"
  ],
  rejection: [
    "See Appendix 7. Assess insufficient volume, unsuitable collection tubes and specimens outside validated stability limits.",
    "Haemolysis, lipaemia or icterus require rejection only where interference exceeds the assay's validated acceptance limits."
  ],
  methodology: "",
  turnaround: {
    routine: "Proposed routine turnaround: 1–3 working days, subject to laboratory confirmation. Referral testing may take longer.",
    urgent: ""
  },
  criticalAlert: "Severe androgen excess or rapidly progressive virilisation in women warrants prompt clinician communication and urgent specialist assessment. Unexpected results should undergo laboratory review and appropriate confirmation.",
  diseaseAssociations: [
    "Low in men: primary testicular failure, hypothalamic–pituitary disease, obesity and acute or chronic illness.",
    "High in women: PCOS, androgen-secreting ovarian or adrenal tumours, and congenital adrenal hyperplasia.",
    "Exogenous testosterone or anabolic steroids may alter concentrations and suppress endogenous testosterone production."
  ],
  conversionFactors: [
    "1 ng/dL = 0.0347 nmol/L.",
    "1 nmol/L = 28.8 ng/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "thyroid-stimulating-hormone",
  name: "Thyroid Stimulating Hormone (TSH)",
  synonyms: ["Thyrotropin", "Thyrotrophin"],
  department: "biochemistry",
  limsCode: "TSH",
  flags: [],
  summary: "Measures thyroid stimulating hormone, produced by the anterior pituitary.",
  description: "Measures thyroid stimulating hormone, produced by the anterior pituitary to regulate thyroid hormone production. Preferred initial test for suspected primary thyroid dysfunction in clinically stable adults.",
  indications: [
    "Investigate suspected primary hypothyroidism or hyperthyroidism.",
    "Monitor levothyroxine replacement in primary hypothyroidism.",
    "Monitor antithyroid treatment alongside thyroid hormone measurements.",
    "Targeted testing in patients at increased risk of thyroid disease.",
    "Assess suspected congenital hypothyroidism with free thyroxine (FT4); newborn screening follows a separate programme-specific pathway.",
    "For initial adult assessment:",
    "Raised TSH: measure FT4.",
    "Suppressed TSH: measure FT4 and free triiodothyronine (FT3).",
    "Suspected pituitary or hypothalamic disease: request TSH and FT4 together."
  ],
  referenceRange: [
    "Use the method- and age-specific reference interval on the validated LIMS report; see Appendix 12.",
    "Pregnancy requires appropriate pregnancy-specific interpretation. Neonatal results require age-specific intervals, including age after birth."
  ],
  analyticalLimitations: [
    "Acute illness and recovery may alter TSH without primary thyroid disease; avoid routine testing during acute illness unless thyroid dysfunction is suspected.",
    "Normal TSH does not exclude central hypothyroidism. Low FT4 with an inappropriately low, normal or mildly raised TSH requires assessment for pituitary or hypothalamic disease.",
    "TSH may take several weeks to respond to treatment changes and may remain suppressed during early antithyroid treatment; interpret with FT4/FT3.",
    "Biotin in susceptible assays and heterophile antibodies may cause misleading results. Discuss results inconsistent with the clinical picture with the laboratory.",
    "Medicines may alter thyroid function or TSH secretion; provide relevant medication and supplement details."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved collection tube. Confirm minimum volume locally, particularly for infants; see Appendix 6.",
    "Provide age, pregnancy status and gestation where applicable, relevant treatment and suspected pituitary disease."
  ],
  storageTransport: [
    "Separate serum and transport according to validated local assay requirements. Confirm refrigerated stability and freezing requirements locally.",
    "See Appendix 9a and applicable guidance in Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unsuitable tubes, insufficient volume and specimens outside validated stability limits. Reject haemolysed, lipaemic or icteric specimens only where interference exceeds validated assay acceptance limits."
  ],
  methodology: "Immunometric immunoassay.",
  turnaround: {
    routine: "Proposed routine turnaround: 1–2 working days, subject to laboratory confirmation.",
    urgent: "Suspected congenital hypothyroidism requires an urgent testing and communication pathway."
  },
  criticalAlert: [
    "Results suggesting congenital hypothyroidism require urgent clinician notification, FT4 assessment and paediatric review according to the neonatal pathway.",
    "An isolated suppressed TSH is not automatically critical, including in pregnancy. Assess thyroid hormone results and clinical status; suspected thyroid storm or severe hypothyroidism requires emergency clinical assessment."
  ],
  diseaseAssociations: [
    "Raised TSH: primary hypothyroidism, including Hashimoto's thyroiditis and hypothyroidism following thyroid surgery or radioiodine treatment.",
    "Suppressed TSH: primary hyperthyroidism, including Graves' disease and toxic nodular goitre; thyroid hormone over-replacement.",
    "Low or inappropriately normal TSH with low FT4: central hypothyroidism."
  ],
  conversionFactors: "1 mIU/L = 1 µIU/mL.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "total-bilirubin",
  name: "Total Bilirubin",
  synonyms: ["Serum Bilirubin", "Total Serum Bilirubin"],
  department: "biochemistry",
  limsCode: "TBIL",
  flags: ["stat"],
  summary: "Measures total circulating bilirubin.",
  description: [
    "Measures total circulating bilirubin, comprising unconjugated and conjugated fractions. Bilirubin is formed during haem breakdown and processed by the liver for biliary excretion.",
    "Used to assess jaundice, hepatobiliary disease and increased red cell breakdown."
  ],
  indications: [
    "Investigate and monitor jaundice in adults and children.",
    "Assess hepatocellular disease, cholestasis and biliary obstruction.",
    "Support investigation of haemolytic anaemia alongside other haemolysis tests.",
    "Assess neonatal hyperbilirubinaemia and monitor response to phototherapy.",
    "Direct bilirubin measurement may be required to clarify the pattern of hyperbilirubinaemia, particularly in unexplained or prolonged jaundice."
  ],
  referenceRange: [
    "Use the age-appropriate reference interval on the validated LIMS report; see Appendix 12.",
    "Neonatal bilirubin requires interpretation against the approved neonatal assessment charts using postnatal age in hours, gestational age and relevant risk factors. Treatment thresholds are not reference intervals."
  ],
  analyticalLimitations: [
    "Total bilirubin alone does not distinguish haemolysis, impaired conjugation, hepatocellular disease and biliary obstruction.",
    "Normal bilirubin does not exclude significant liver disease.",
    "Light exposure degrades bilirubin and may produce falsely low results.",
    "Specimen haemolysis and lipaemia may interfere; the magnitude and direction of bias depend on the assay.",
    "Haemolysis occurring in the patient can genuinely increase predominantly unconjugated bilirubin; this differs from specimen interference."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved collection tube. Plasma may be acceptable if validated for the local assay.",
    "Confirm minimum volume locally, particularly for neonatal specimens; see Appendix 6.",
    "For neonates, provide birth date and time, collection date and time, gestational age and current phototherapy status."
  ],
  storageTransport: [
    "Protect the specimen from light from collection until analysis. Separate serum or plasma from cells promptly and transport immediately.",
    "See Appendix 9a"
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unsuitable specimens, insufficient volume, significant light exposure and storage outside validated limits. Reject haemolysed or lipaemic specimens only when interference exceeds validated assay acceptance limits.",
    "An icteric specimen is expected when bilirubin is raised and is not itself a reason for rejection."
  ],
  methodology: [
    "Photometric measurement by a diazo reaction bilirubin assay.",
    "\"Direct bilirubin\" is a separate measurement and should not be confused with a method for total bilirubin."
  ],
  turnaround: {
    routine: "Same day, subject to laboratory confirmation.",
    urgent: "Neonatal samples requiring urgent assessment must follow the agreed urgent testing pathway."
  },
  criticalAlert: [
    "For neonates, use the locally approved thresholds and escalation pathway based on age in hours, gestational age and relevant risk factors. Jaundice within the first 24 hours requires urgent bilirubin measurement and clinical assessment.",
    "Adult urgency depends on the clinical presentation and approved notification policy."
  ],
  diseaseAssociations: [
    "Predominantly unconjugated elevation: haemolysis, neonatal hyperbilirubinaemia, Gilbert syndrome and Crigler–Najjar syndrome.",
    "Conjugated or mixed elevation: hepatitis, other hepatocellular disease, cholestasis and biliary obstruction.",
    "Low bilirubin generally has no diagnostic significance."
  ],
  conversionFactors: [
    "1 mg/dL = 17.1 µmol/L.",
    "1 µmol/L = 0.0585 mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-18",
  updated: ""
},

{
  id: "total-protein",
  name: "Total Protein",
  synonyms: ["Serum Total Protein"],
  department: "biochemistry",
  limsCode: "TP",
  flags: [],
  summary: "Measures the combined concentration of albumin and globulins in serum.",
  description: [
    "Measures the combined concentration of albumin and globulins in serum. Used with albumin and clinical findings to assess abnormalities of circulating proteins.",
    "Total protein is non-specific and is not a standalone measure of nutritional status or liver function."
  ],
  indications: [
    "Investigate unexplained hyperproteinaemia or hypoproteinaemia.",
    "Support assessment of liver disease and renal or gastrointestinal protein loss.",
    "Assess abnormal globulin concentrations alongside albumin.",
    "Support investigation of suspected gammopathy; specific protein studies are required for diagnosis and monitoring.",
    "Investigate oedema or ascites alongside albumin and assessment of the underlying cause.",
    "Calculated globulin = total protein − albumin, using the same units."
  ],
  referenceRange: [
    "Use the validated age-appropriate reference interval on the LIMS report; see Appendix 12."
  ],
  analyticalLimitations: [
    "Hydration, fluid administration, posture and prolonged venous stasis can alter protein concentrations.",
    "A normal total protein may conceal opposing changes in albumin and globulins.",
    "Normal total protein does not exclude multiple myeloma or another monoclonal gammopathy.",
    "Haemolysis, lipaemia and bilirubin may interfere depending on the assay and concentration; apply validated interference limits.",
    "Interpret with albumin and clinical context. Electrophoresis and other protein studies are indicated selectively, rather than for every result."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved collection tube. Confirm minimum volume locally; see Appendix 6.",
    "Avoid prolonged tourniquet application. Avoid contamination by intravenous fluids."
  ],
  storageTransport: [
    "Separate serum from cells and transport according to validated local assay requirements.",
    "Confirm refrigerated stability, freezing requirements and permitted freeze–thaw cycles locally. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unsuitable specimens, insufficient volume, suspected intravenous-fluid contamination and storage outside validated limits.",
    "Reject haemolysed, lipaemic or icteric specimens only where interference exceeds validated assay acceptance limits."
  ],
  methodology: "Biuret colourimetric assay with photometric measurement.",
  turnaround: { routine: "Same day, subject to laboratory confirmation.", urgent: "" },
  criticalAlert: "Markedly abnormal or unexpected results warrant clinical assessment and, where appropriate, laboratory review for specimen or analytical problems.",
  diseaseAssociations: [
    "Increased: dehydration, polyclonal immunoglobulin elevation in chronic inflammation or infection, and monoclonal gammopathies.",
    "Decreased: renal or gastrointestinal protein loss, advanced liver disease, hypogammaglobulinaemia and haemodilution.",
    "Severe undernutrition may contribute to low concentrations, but total protein alone cannot establish malnutrition."
  ],
  conversionFactors: ["1 g/dL = 10 g/L.", "1 g/L = 0.1 g/dL.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "triglyceride",
  name: "Triglyceride",
  synonyms: ["Serum Triglycerides", "Triacylglycerols"],
  department: "biochemistry",
  limsCode: "TRIG",
  flags: ["critical"],
  summary: "Measures circulating serum triglycerides.",
  description: "Measures circulating serum triglycerides, transported mainly in chylomicrons and very-low-density lipoproteins (VLDL). Used in lipid assessment and investigation of severe hypertriglyceridaemia associated with pancreatitis risk.",
  indications: [
    "Assess cardiovascular risk as part of a lipid profile.",
    "Investigate and monitor hypertriglyceridaemia.",
    "Assess a possible hypertriglyceridaemic cause of acute pancreatitis.",
    "Monitor response to dietary measures and lipid-lowering treatment."
  ],
  referenceRange: [
    "Adult desirable fasting concentration: <1.7 mmol/L. This is a clinical decision limit rather than a population reference interval.",
    "Interpret according to fasting status, the complete lipid profile and overall cardiovascular risk. Refer to the validated LIMS report and Appendix 12 for locally adopted interpretation and age-specific guidance."
  ],
  analyticalLimitations: [
    "Meals cause physiological changes in triglycerides; non-fasting results are not inherently erroneous.",
    "Alcohol, poorly controlled diabetes, other illnesses and medicines may genuinely raise concentrations.",
    "Haemolysis, bilirubin and marked lipaemia may interfere depending on the assay; apply validated limits.",
    "Extremely high triglyceride concentrations may exceed the assay's measuring range or produce falsely low results; laboratory review and validated dilution may be required.",
    "Free glycerol may falsely increase results in assays without glycerol blanking."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved collection tube; confirm minimum volume locally. Plasma is acceptable only were validated for the assay. See Appendix 6.",
    "Non-fasting sampling is suitable for routine lipid assessment. Fasting sampling may be requested to confirm marked elevation or assess suspected severe or inherited hypertriglyceridaemia; follow local fasting instructions.",
    "Record fasting status. Do not delay testing for suspected acute pancreatitis to obtain a fasting specimen."
  ],
  storageTransport: [
    "Separate serum or plasma from cells and transport according to validated local assay requirements.",
    "Confirm refrigerated stability, freezing requirements and permitted freeze–thaw cycles locally. See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unsuitable specimens, insufficient volume and storage outside validated limits.",
    "Do not reject a specimen solely because it is non-fasting or visibly lipaemic. Where interference or measuring-range limits are exceeded, use the laboratory's validated investigation and reporting procedure."
  ],
  methodology: "Enzymatic colourimetric assay with photometric measurement.",
  turnaround: {
    routine: "Same day, subject to laboratory confirmation.",
    urgent: "Suspected acute pancreatitis follows the urgent testing pathway."
  },
  criticalAlert: [
    "Marked elevation, particularly ≥10 mmol/L, warrants prompt clinical assessment because pancreatitis risk increases with severe hypertriglyceridaemia. This is a clinical risk flag, not automatically a local critical-result threshold.",
    "Severe abdominal pain or other features suggesting acute pancreatitis require urgent assessment regardless of fasting status."
  ],
  diseaseAssociations: [
    "Increased: inherited hypertriglyceridaemia, poorly controlled diabetes, obesity, metabolic syndrome, hypothyroidism, alcohol excess, renal disease and certain medicines.",
    "Decreased: may occur with undernutrition, malabsorption or hyperthyroidism; usually not a primary diagnostic finding."
  ],
  conversionFactors: [
    "1 mg/dL = 0.0113 mmol/L.",
    "1 mmol/L = 88.6 mg/dL.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "troponin-i-poc-quidel-triage",
  name: "Troponin I - POC Quidel-Triage (Analyser specific test entry)",
  synonyms: ["Cardiac Troponin I; cTnI; TnI; Troponin I"],
  department: "icu",
  limsCode: "TROP",
  flags: ["critical", "stat"],
  summary: "Measures the Cardiac troponin I (cTnI) protein released into the circulation following myocardial injury.",
  description: [
    "Cardiac troponin I (cTnI) is a cardiac-specific protein released into the circulation following myocardial injury. Measurement of cTnI is used as an aid in the diagnosis of myocardial infarction and other conditions associated with myocardial injury.",
    "This test is performed using the QUIDEL TRIAGE Troponin I Test (98600EU) on the QUIDEL TRIAGE MeterPro point-of-care analyser. The assay provides a quantitative measurement of cardiac troponin I using a fluorescence immunoassay."
  ],
  indications: [
    "Investigation of patients with symptoms suggestive of acute coronary syndrome or myocardial infarction, including acute chest pain.",
    "Detection and assessment of myocardial injury.",
    "Serial troponin measurements may be required to demonstrate a rise and/or fall in troponin concentration.",
    "Troponin results must be interpreted together with the patient's clinical presentation, ECG findings and timing of symptom onset.",
    "An elevated troponin indicates myocardial injury but does not, by itself, establish a diagnosis of myocardial infarction."
  ],
  referenceRange: [
    "99th percentile upper reference limit / cut-off: 0.02 ng/mL",
    "Equivalent to 20 ng/L.",
    "Results should be interpreted using the assay-specific reference limit.",
    "A result above the 99th percentile indicates myocardial injury. Diagnosis of acute myocardial infarction requires appropriate clinical evidence and, where applicable, demonstration of a rise and/or fall in cardiac troponin."
  ],
  analyticalLimitations: [
    "Troponin I elevation indicates myocardial injury but is not specific for myocardial infarction. Clinical features, ECG findings and serial troponin measurements should be considered when establishing the diagnosis.",
    "Troponin concentrations may be normal early following the onset of myocardial injury. A single result below the assay cut-off does not necessarily exclude acute myocardial infarction, particularly when testing is performed soon after symptom onset. Repeat testing should be undertaken according to the appropriate clinical protocol.",
    "Diagnostic thresholds and timing of serial testing are assay dependent. Results obtained using different troponin assays or platforms should not be considered directly interchangeable.",
    "This entry applies specifically to the QUIDEL TRIAGE Troponin I Test (98600EU) and not to the QUIDEL TRIAGETRUE High Sensitivity Troponin I assay.",
    "Avoid grossly haemolysed specimens.",
    "This analyser/test combination is validated for EDTA-anticoagulated whole blood or EDTA plasma only. Other specimen types or anticoagulants must not be used unless specifically validated by the laboratory.",
    "Results must always be interpreted in the context of the patient's clinical presentation.",
    "Sample Type",
    "EDTA whole blood or EDTA plasma only.",
    "Collect 2–5 mL whole blood into an EDTA tube.",
    "Ensure the specimen is adequately mixed before testing. Follow the manufacturer's instructions and local laboratory procedure for the volume transferred to the test device."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA whole blood or EDTA plasma only.",
    "Collect into an EDTA tube (2–5 mL, local tube to be confirmed – see Appendix 6). Fill the tube correctly and mix gently by inversion.",
    "Lithium heparin, serum and other anticoagulants are not acceptable for this test.",
    "Sample volume applied to the test device: as per manufacturer's Instructions for Use (IFU) and local procedure."
  ],
  storageTransport: [
    "For point-of-care testing, specimens should preferably be tested as soon as possible following collection.",
    "Transport specimens promptly to the testing location and maintain appropriate specimen integrity.",
    "Where testing is delayed or plasma is separated for later analysis, storage conditions must follow the current QUIDEL TRIAGE Troponin I (98600EU) manufacturer's Instructions for Use and the laboratory's validated procedure.",
    "Do not use specimens that have been stored or transported outside validated conditions."
  ],
  rejection: [
    "See Appendix 7 – Sample Rejection Criteria.",
    "For this specific analyser and test, specimens collected must be in EDTA tubes."
  ],
  methodology: [
    "Fluorescence immunoassay using the QUIDEL TRIAGE Troponin I Test (98600EU) on the QUIDEL TRIAGE MeterPro point-of-care analyser.",
    "The assay provides a quantitative measurement of cardiac troponin I in EDTA-anticoagulated whole blood or plasma."
  ],
  turnaround: {
    routine: "",
    urgent: "Urgent – approximately 20 minutes from commencement of analysis. Testing is performed as an urgent/point-of-care investigation."
  },
  criticalAlert: [
    "Results above the assay-specific 99th percentile (>0.02 ng/mL / >20 ng/L) indicate myocardial injury and require clinical assessment.",
    "Critical-result notification should follow the laboratory's approved Critical/Alert Results Policy and locally validated notification threshold.",
    "A troponin result must not be interpreted in isolation. The magnitude of the result, change on serial testing, clinical presentation, ECG findings and time from symptom onset should be considered."
  ],
  diseaseAssociations: [
    "Elevated cardiac troponin I may occur with myocardial injury associated with Acute myocardial infarction / acute coronary syndrome, myocarditis, Acute or chronic heart, cardiac arrhythmias, pulmonary embolism, severe hypertension or hypotension, shock or critical illness, sepsis, renal disease, cardiac trauma or cardiac procedures.",
    "Other conditions causing myocardial oxygen supply/demand imbalance",
    "An elevated troponin result therefore indicates myocardial injury rather than a specific underlying disease."
  ],
  conversionFactors: "1 ng/mL = 1 µg/L = 1000 ng/L",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "tuberculosis-culture",
  name: "Tuberculosis Culture",
  synonyms: [
    "Mycobacterial Culture",
    "Mycobacterium tuberculosis Culture",
    "Acid-Fast Bacilli Culture"
  ],
  department: "microbiology",
  limsCode: "TB",
  flags: [],
  summary: "Culture to detect viable Mycobacterium tuberculosis.",
  description: [
    "Culture to detect viable Mycobacterium tuberculosis complex (MTBC) and non-tuberculous mycobacteria (NTM). Positive cultures support organism identification and, where indicated, drug susceptibility testing (DST).",
    "Culture complements rapid molecular testing and may require referral to a designated TB reference laboratory."
  ],
  indications: [
    "Investigate pulmonary or extrapulmonary tuberculosis (TB), including persistent clinical suspicion despite negative initial testing.",
    "Obtain isolates for identification and DST.",
    "Monitor culture conversion or investigate suspected treatment failure according to the National TB Programme.",
    "Investigate suspected NTM disease."
  ],
  referenceRange: [
    "Expected result: No mycobacteria isolated after completion of the validated incubation period.",
    "A negative culture does not exclude TB. NTM isolation requires interpretation with the specimen source, clinical findings and, for pulmonary disease, radiological findings and repeat cultures where appropriate."
  ],
  analyticalLimitations: [
    "Slow-growing mycobacteria may require several weeks for detection.",
    "Low organism numbers, poor sampling and prior anti-TB treatment reduce sensitivity.",
    "Bacterial or fungal overgrowth may make cultures uninterpretable; recollection may be required.",
    "Laboratory cross-contamination can occasionally cause false-positive results.",
    "Some NTM require specialised culture conditions; discuss unusual, suspected infections with the laboratory."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Deep-cough sputum collected into a sterile, leak-proof screw-cap container; avoid saliva. Confirm the number and timing of specimens with the receiving laboratory.",
    "Other specimens include bronchoalveolar lavage (BAL), gastric aspirate, cerebrospinal fluid (CSF), pleural fluid, lymph node aspirate, pus and fresh tissue, according to the suspected infection site.",
    "Send tissue without formalin or other fixative.",
    "Confirm specimen volumes and special collection requirements before sampling. Gastric aspirates require prompt handling under the receiving laboratory's protocol.",
    "Include specimen site, collection date/time, previous TB and current or recent anti-TB treatment on the request."
  ],
  storageTransport: [
    "Transport promptly to the designated laboratory using approved infectious-specimen packaging.",
    "Refrigerate sputum at 2–8 °C if transport or processing is delayed.",
    "For other specimens, follow the receiving laboratory's validated storage requirements. Do not freeze unless specifically instructed.",
    "See Appendices 9a and 9b."
  ],
  rejection: [
    "Unlabelled or mislabelled specimens, leaking containers, or unsuitable containers.",
    "Formalin-fixed tissue is unsuitable for culture.",
    "Insufficient quantity, unsuitable specimen type or transport outside validated limits: discuss with the laboratory.",
    "Discuss irreplaceable specimens before rejection; do not apply an assumed universal 24-hour cutoff.",
    "See Appendix 7."
  ],
  methodology: [
    "Mycobacterial culture using validated liquid and/or solid media.",
    "Positive cultures undergo validated identification and appropriate DST locally or by referral."
  ],
  turnaround: {
    routine: "Positive cultures are reported when detected and appropriately confirmed. Final negative results commonly require approximately 6–8 weeks, depending on the culture system and organism sought. Identification, DST and referral transport may add time.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate newly identified MTBC and clinically significant drug resistance.",
    "Follow the National TB Programme's reporting and notification requirements.",
    "Organisms Reported",
    "Mycobacterium tuberculosis complex; individual species identification where available and indicated.",
    "NTM identified to the level supported by the laboratory or reference service, for example Mycobacterium avium complex, M. kansasii and M. fortuitum."
  ],
  diseaseAssociations: [
    "Pulmonary and extrapulmonary TB.",
    "NTM pulmonary, localised or disseminated disease; NTM disease is not restricted to immunocompromised patients."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "•\tMycobacterium tuberculosis complex; individual species identification where available and indicated.",
        "•\tNTM identified to the level supported by the laboratory or reference service, for example Mycobacterium avium complex, M. kansasii and M. fortuitum."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "tuberculosis-pcr-genexpert-mtb-rif",
  name: "Tuberculosis PCR – GeneXpert MTB/RIF",
  synonyms: ["Xpert MTB/RIF", "MTB PCR", "TB Molecular Test"],
  department: "molecular",
  limsCode: "TB-PCR",
  flags: [],
  summary: "Automated nucleic acid amplification test (NAAT) detecting Mycobacterium tuberculosis complex.",
  description: [
    "Automated nucleic acid amplification test (NAAT) detecting Mycobacterium tuberculosis complex (MTBC) DNA and mutations associated with rifampicin resistance.",
    "Performed using the Xpert MTB/RIF cartridge on the Cepheid GeneXpert platform. This entry does not cover Xpert MTB/RIF Ultra."
  ],
  indications: [
    "Rapid investigation of suspected pulmonary tuberculosis (TB).",
    "Rapid detection of rifampicin resistance to guide further investigation and management.",
    "Investigation of extrapulmonary TB using specimens accepted under the laboratory's approved diagnostic pathway.",
    "May contribute to investigation of suspected relapse or treatment failure alongside culture and drug susceptibility testing (DST); not suitable for monitoring treatment response."
  ],
  referenceRange: [
    "Expected result: MTB not detected.",
    "Other reportable results:",
    "MTB detected; rifampicin resistance not detected.",
    "MTB detected; rifampicin resistance detected.",
    "MTB detected; rifampicin resistance indeterminate.",
    "Invalid, error or no result: no valid diagnostic result; repeat testing or recollection may be required.",
    "Rifampicin resistance detected indicates rifampicin-resistant TB (RR-TB); it does not alone establish multidrug-resistant TB (MDR-TB), which requires resistance to both rifampicin and isoniazid."
  ],
  analyticalLimitations: [
    "A negative result does not exclude TB, particularly with low organism numbers, poor sampling or extrapulmonary disease.",
    "Detects DNA from viable and non-viable organisms; results may remain positive after treatment.",
    "Does not determine isoniazid resistance or provide a complete drug-resistance profile.",
    "Rifampicin resistance not detected does not exclude all resistance mechanisms.",
    "Does not differentiate individual MTBC species or diagnose non-tuberculous mycobacterial infection.",
    "Inhibition, processing problems or instrument faults may produce unsuccessful results."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Sputum collected into a sterile, leak-proof screw-cap container; obtain a deep-cough specimen and avoid saliva.",
    "BAL, gastric aspirate, CSF, lymph node aspirate and fresh tissue may be accepted under specimen-specific protocols. Confirm acceptance and minimum volume before collection.",
    "Send fresh tissue without formalin unless a separate validated fixed-tissue molecular service has been arranged.",
    "Include specimen site, previous TB, and current or recent anti-TB treatment on the request."
  ],
  storageTransport: [
    "Transport promptly in approved infectious-specimen packaging.",
    "Refrigerate sputum at 2–8 °C when testing is delayed, according to the applicable cartridge instructions and local protocol.",
    "Storage limits differ between unprocessed sputum, processed sediment and extrapulmonary specimens. Confirm requirements with the laboratory.",
    "Do not freeze unless permitted by the validated specimen-specific protocol.",
    "See Appendices 9a and 9b."
  ],
  rejection: [
    "Unlabelled or mislabelled specimens, leaking containers, or unsuitable containers.",
    "Insufficient quantity or a specimen type not accepted by the laboratory.",
    "Specimens outside validated transport or stability limits.",
    "Formalin-fixed tissue or swabs unless specifically accepted for a validated testing pathway.",
    "Discuss poor-quality or irreplaceable specimens with the laboratory before rejection.",
    "See Appendix 7."
  ],
  methodology: [
    "Automated cartridge-based real-time polymerase chain reaction (PCR), detecting MTBC DNA and rifampicin-resistance-associated changes in the rpoB gene.",
    "Further molecular and/or culture-based DST is arranged according to the National TB Programme algorithm. This assay alone does not provide a complete resistance profile."
  ],
  turnaround: {
    routine: "Rapid assay; same-day reporting may be achievable after receipt.",
    urgent: ""
  },
  criticalAlert: [
    "Promptly communicate newly detected MTBC according to the approved laboratory alert policy.",
    "MTB detected with rifampicin resistance requires urgent communication to the treating clinician and National TB Programme, with further resistance testing arranged through the approved pathway.",
    "Rifampicin resistance indeterminate requires timely follow-up; do not report it as susceptible.",
    "Organisms Reported",
    "Mycobacterium tuberculosis complex DNA detected or not detected."
  ],
  diseaseAssociations: [
    "Pulmonary and extrapulmonary TB, including rifampicin-resistant TB."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: ["Mycobacterium tuberculosis complex DNA detected or not detected."]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "uric-acid",
  name: "Uric Acid",
  synonyms: ["Serum Uric Acid", "Serum Urate", "Urate"],
  department: "biochemistry",
  limsCode: "URIC",
  flags: [],
  summary: "Measures urate, the final product of purine metabolism",
  description: [
    "Measures urate, the final product of purine metabolism, eliminated mainly through the kidneys.",
    "Used in the assessment of hyperuricaemia, monitoring of urate-lowering treatment and evaluation of increased cell breakdown. It is not a standalone measure of renal function."
  ],
  indications: [
    "Support assessment of suspected gout and monitor urate-lowering treatment.",
    "Investigate unexplained hyperuricaemia or hypouricaemia.",
    "Monitor patients at risk of tumour lysis syndrome (TLS), including those receiving anticancer therapy.",
    "Support selected renal stone investigations alongside urine studies and stone analysis."
  ],
  referenceRange: [
    "Use the validated age- and sex-specific reference intervals on the LIMS report; see Appendix 12.",
    "For patients receiving urate-lowering treatment for gout, the usual target is <360 µmol/L (0.36 mmol/L). A lower target of <300 µmol/L (0.30 mmol/L) may be considered for tophi, chronic gouty arthritis or persistent frequent flares."
  ],
  analyticalLimitations: [
    "Hyperuricaemia alone does not diagnose gout; normal urate during an acute flare does not exclude it.",
    "If gout remains strongly suspected despite a low or normal result during a flare, repeat testing at least two weeks after the flare has settled.",
    "Diet, alcohol, renal clearance and medicines can genuinely alter urate concentrations.",
    "Haemolysis, lipaemia, bilirubin and certain medicines may interfere depending on the assay; apply validated limits."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: "Routine testing: serum in a laboratory-approved collection tube; plasma may be acceptable if validated. Confirm minimum volume locally; see Appendix 6.",
  storageTransport: [
    "Routine specimens: separate serum or plasma from cells and follow locally validated temperature and stability requirements.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unsuitable tubes, insufficient volume and storage outside validated limits. Reject haemolysed, lipaemic or icteric specimens only where interference exceeds validated acceptance limits."
  ],
  methodology: "Commonly an enzymatic uricase assay with photometric measurement.",
  turnaround: { routine: "Same day, subject to laboratory confirmation.", urgent: "" },
  criticalAlert: "In patients at risk of TLS, rising or elevated urate—particularly with hyperkalaemia, hyperphosphataemia, hypocalcaemia or deteriorating renal function—requires urgent assessment.",
  diseaseAssociations: [
    "Increased: reduced renal clearance, increased cell turnover or TLS, inherited disorders of purine metabolism and gout-associated hyperuricaemia.",
    "Hyperuricaemia may also accompany metabolic syndrome or pre-eclampsia; urate alone is not diagnostic of either.",
    "Decreased: urate-lowering treatment, increased renal urate loss, severe liver disease and syndrome of inappropriate antidiuretic hormone secretion (SIADH)."
  ],
  conversionFactors: [
    "1 mg/dL = 59.5 µmol/L = 0.0595 mmol/L.",
    "1 µmol/L = 0.0168 mg/dL.",
    "1 mmol/L = 1,000 µmol/L.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "urine-analysis-dipstick",
  name: "Urine Analysis – Dipstick",
  synonyms: ["Dipstick Urinalysis", "Urine Dipstick Test"],
  department: "biochemistry",
  limsCode: "UA-DIP",
  flags: [],
  summary: "Qualitative or semi-quantitative assessment of urine chemistry.",
  description: [
    "Qualitative or semi-quantitative assessment of urine chemistry. Depending on the strip used, parameters include blood, protein, glucose, ketones, nitrite, leucocyte esterase, bilirubin, urobilinogen, pH and specific gravity.",
    "Dipstick testing is different from urine microscopy and culture."
  ],
  indications: [
    "Support assessment of suspected urinary tract infection (UTI) in appropriate symptomatic patients.",
    "Detect possible haematuria or proteinuria requiring further investigation.",
    "Assess glycosuria and ketonuria in the appropriate clinical context.",
    "Support assessment of urinary abnormalities during antenatal care according to local policy.",
    "Provide supplementary information on bilirubin excretion and urine concentration.",
    "Use urine albumin-to-creatinine ratio (ACR) for assessment of albuminuria where indicated. Use blood-based testing to diagnose diabetes."
  ],
  referenceRange: [
    "Expected findings in most healthy individuals:",
    "Blood, glucose, ketones, nitrite, leucocyte esterase and bilirubin: negative.",
    "Protein: usually negative; a trace result requires interpretation according to urine concentration and clinical context.",
    "Urobilinogen: small amounts may normally be present.",
    "pH and specific gravity: variable with diet, hydration and physiological state.",
    "Use the strip-specific reporting scale and validated LIMS interpretation; see Appendix 12."
  ],
  analyticalLimitations: [
    "Negative nitrite does not exclude UTI; positive nitrite or leucocyte esterase alone does not establish symptomatic infection.",
    "Dipsticks are unreliable for diagnosing UTI in catheterised patients and many older adults.",
    "The blood pad detects haem activity from red cells, haemoglobin or myoglobin; a positive result does not by itself confirm haematuria.",
    "Standard protein pads mainly detect albumin and may miss low-level albuminuria or other proteins. Dipstick grades do not quantify daily protein loss.",
    "Urine ketone pads primarily detect acetoacetate, not β-hydroxybutyrate. Results may underestimate early DKA and remain positive during recovery.",
    "Glycosuria may occur without hyperglycaemia, including with renal tubular disorders or sodium–glucose cotransporter 2 (SGLT2) inhibitor treatment.",
    "Urine concentration, pH, contamination, medicines, pigments and vitamin C may affect results, depending on the strip.",
    "Delayed testing and incorrect reading times can alter results."
  ],
  sampleType: "Urine",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Freshly voided urine in a clean, dry, leakproof, laboratory-approved container. Midstream urine (MSU) is preferred when investigating UTI; use a sterile container if culture may be required.",
    "Record collection date and time and collection method. Avoid contamination with detergents, disinfectants, menstrual blood or vaginal secretions.",
    "Confirm minimum volume locally. First-morning urine may be useful when reassessing proteinuria."
  ],
  storageTransport: [
    "Send promptly and test as soon as possible, preferably within two hours of collection, subject to the local strip instructions.",
    "If delayed, refrigerate at 2–8 °C according to validated local requirements. Do not assume all parameters remain reliable for 24 hours.",
    "Protect from excessive light where bilirubin or urobilinogen is assessed. Refrigerated specimens require preparation according to the manufacturer's instructions before testing.",
    "See Appendix 9a and applicable guidance in Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unlabelled or mislabelled specimens, leaking containers, insufficient volume, interfering contamination and specimens outside validated time or temperature limits.",
    "Do not accept prolonged room-temperature storage simply because the specimen is less than 24 hours old."
  ],
  methodology: "Reagent-strip colour reactions, read visually or by a validated urine chemistry analyser. Confirm the strip brand, available parameters and reading method.",
  turnaround: {
    routine: "Same day, subject to local service arrangements.",
    urgent: "Urgent clinical assessment may require immediate testing."
  },
  criticalAlert: [
    "Dipstick positivity alone is not automatically a critical result.",
    "Ketones with symptoms suggesting DKA require urgent blood glucose, blood ketones where available, and assessment of acid–base status.",
    "Marked protein positivity requires quantitative confirmation; it does not establish nephrotic-range proteinuria.",
    "Nitrite or leucocyte esterase positivity requires interpretation with symptoms and urine culture where indicated.",
    "Glycosuria requires appropriate blood glucose assessment; it does not alone establish uncontrolled diabetes.",
    "Proteinuria in pregnancy with hypertension or concerning symptoms requires prompt obstetric assessment."
  ],
  diseaseAssociations: [
    "Findings may accompany UTI, urinary tract stones, glomerular or tubular disease, diabetes, ketosis, hepatobiliary disease and altered hydration.",
    "Abnormal findings require clinical correlation; a negative dipstick does not exclude these conditions."
  ],
  conversionFactors: "Interpret each parameter using its reported units and strip-specific scale.",
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "urine-microscopy",
  name: "Urine Microscopy (RBC, WBC, Casts, Crystals)",
  synonyms: ["Urine Sediment Examination", "Urine Microscopy"],
  department: "microbiology",
  limsCode: "UMIC",
  flags: [],
  summary: "Microscopic examination of urine.",
  description: [
    "Examines urine for red blood cells (RBC), white blood cells (WBC), epithelial cells, casts, crystals and microorganisms.",
    "Complements dipstick testing in the assessment of urinary tract and renal disease. Microscopy does not replace urine culture or quantitative protein measurement."
  ],
  indications: [
    "Investigate haematuria and assess positive dipstick blood or leucocyte findings.",
    "Assess suspected urinary tract infection (UTI) alongside symptoms and culture where indicated.",
    "Investigate unexplained renal dysfunction or suspected renal parenchymal disease.",
    "Assess casts and other sediment findings in patients with proteinuria.",
    "Investigate clinically relevant crystalluria or recurrent stone disease."
  ],
  referenceRange: [
    "Use the method-specific cell limits and reporting units on the validated LIMS report; see Appendix 12.",
    "RBC and WBC: normally absent or present in small numbers.",
    "Casts: small numbers of hyaline casts may occur physiologically; cellular casts are abnormal.",
    "Crystals: common crystals may occur without disease; significance depends on type and clinical context.",
    "Counts per high-power field and counts per unit volume are not directly interchangeable."
  ],
  analyticalLimitations: [
    "Dilute or alkaline urine and delayed analysis may cause cell lysis and cast deterioration.",
    "Hydration changes particle concentrations; collection and sediment preparation affect counts.",
    "Menstrual blood, vaginal secretions and collection contamination may introduce cells or microorganisms.",
    "Manual sediment assessment is operator-dependent; quantitative accuracy depends on a standardised method.",
    "Crystals may form after collection, particularly during cooling.",
    "Absence of casts does not exclude renal disease.",
    "Microscopy does not quantify proteinuria or confirm nitrite positivity."
  ],
  sampleType: "Urine",
  containerColour: "Sterile collection jar",
  sampleRequirements: [
    "Fresh clean-catch or midstream urine in a sterile, leakproof container.",
    "Record collection date and time and collection method. Provide relevant symptoms and suspected renal disease.",
    "Confirm minimum volume locally. If catheter urine is required, collect from the sampling port, not from the drainage bag."
  ],
  storageTransport: [
    "Transport promptly; aim to examine fresh urine within two hours.",
    "If delay is unavoidable, refrigerate at 2–8 °C according to validated local requirements. Confirm acceptable holding time for cells, casts and crystals; do not assume all remain reliable for 24 hours.",
    "See Appendix 9a and applicable guidance in Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unlabelled or mislabelled specimens, leaking containers, insufficient volume, significant contamination and storage outside validated limits.",
    "Prolonged room-temperature storage may make microscopy unreliable well before 24 hours."
  ],
  methodology: [
    "Manual urine microscopy using the laboratory's standardised preparation and reporting method, commonly examination of centrifuged sediment under low and high power.",
    "Quantitative chamber counting or automated particle analysis may be used where locally validated. Confirm whether specialist morphology assessment requires referral."
  ],
  turnaround: {
    routine: "Same day, subject to laboratory confirmation.",
    urgent: "Suspected acute renal disease may require urgent examination."
  },
  criticalAlert: [
    "Confirmed RBC casts or other significant pathological sediment findings warrant prompt clinician communication, particularly with acute kidney injury.",
    "WBC casts require clinical assessment for renal inflammation; they do not alone establish severe pyelonephritis. WBC clumps are not equivalent to casts.",
    "Marked microscopic haematuria is not automatically a critical result.",
    "Organisms Reported",
    "Bacteria or yeast may be described when observed. Microscopy generally does not identify the organism or antimicrobial susceptibility.",
    "Interpret with collection quality, symptoms and culture where indicated."
  ],
  diseaseAssociations: [
    "RBC: glomerular disease, stones, urinary tract lesions, trauma or UTI.",
    "WBC: urinary infection or inflammation, including interstitial nephritis.",
    "RBC casts: strongly suggest glomerular bleeding.",
    "WBC casts: pyelonephritis, interstitial nephritis or other renal inflammation.",
    "Granular or tubular epithelial casts: may indicate tubular injury.",
    "Waxy casts: associated with advanced renal disease.",
    "Hyaline casts: non-specific; may occur with dehydration or exercise.",
    "Crystals: significance depends on type; common crystals do not establish stone disease. Cystine crystals warrant investigation for cystinuria."
  ],
  conversionFactors: [
    "No universal conversion exists between counts per high-power field (HPF), low-power field (LPF) and counts per unit volume.",
    "Where quantitative counts are reported: 1 cell/µL = 1 × 10⁶ cells/L."
  ],
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Bacteria or yeast may be described when observed. Microscopy generally does not identify the organism or antimicrobial susceptibility.",
        "Interpret with collection quality, symptoms and culture where indicated."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "urine-creatinine",
  name: "Urine Creatinine",
  synonyms: [
    "Urinary Creatinine",
    "Spot Urine Creatinine",
    "24-hour Urine Creatinine"
  ],
  department: "biochemistry",
  limsCode: "UCRE",
  flags: [],
  summary: "Measures creatinine concentration in urine.",
  description: [
    "Measures creatinine concentration in urine. With a timed collection and total urine volume, it permits calculation of creatinine excretion.",
    "Used in urinary analyte-to-creatinine ratios, assessment of timed collection plausibility and calculation of creatinine clearance with paired serum creatinine."
  ],
  indications: [
    "Calculate urine albumin-to-creatinine ratio (ACR) or protein-to-creatinine ratio (PCR), using measurements from the same specimen.",
    "Support assessment of completeness of timed urine collections.",
    "Calculate measured creatinine clearance when clinically indicated.",
    "Normalise selected urinary analyte measurements to creatinine.",
    "Urine creatinine alone is not a measure of kidney function. Routine CKD assessment generally uses serum creatinine-based eGFR and urine ACR; see Appendix 11."
  ],
  referenceRange: [
    "Use locally validated, age- and sex-appropriate interpretation; see Appendix 12.",
    "Spot urine concentration varies substantially with urine dilution; there is no single diagnostic \"normal\" concentration.",
    "Timed excretion depends on muscle mass, body size, age, diet and collection completeness.",
    "Urine concentration, daily excretion and creatinine clearance require different units and interpretation."
  ],
  analyticalLimitations: [
    "Missed urine, incorrect timing or inaccurate total volume invalidate timed excretion and clearance calculations.",
    "Creatinine excretion provides a plausibility check but cannot prove collection completeness.",
    "Low muscle mass or unusual meat/creatine intake may alter excretion. Hydration primarily affects spot urine concentration.",
    "Creatinine clearance may overestimate glomerular filtration rate because creatinine is also secreted by renal tubules.",
    "Rapidly changing kidney function complicates clearance interpretation.",
    "Very low urine creatinine may reduce the reliability of analyte-to-creatinine ratios."
  ],
  sampleType: "Urine",
  containerColour: "Specimen jar",
  sampleRequirements: [
    "For ratios: spot urine; first-morning midstream urine is preferred for ACR where feasible.",
    "For daily excretion or clearance: a complete, accurately timed collection, commonly 24 hours, following laboratory instructions.",
    "Record collection start/end times and total volume. Report missed portions.",
    "For clearance: obtain paired serum creatinine according to the laboratory's timing requirements; supply height and weight if body-surface-area adjustment is required.",
    "Confirm container, minimum volume and preservative compatibility, especially when other analytes are requested."
  ],
  storageTransport: [
    "Follow laboratory-approved collection and storage instructions. Refrigerated storage at 2–8 °C may be required during timed collection and transport.",
    "Confirm validated stability, freezing requirements and compatibility with other requested tests. See Appendix 9a and applicable guidance in Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unlabelled or mislabelled specimens, insufficient volume, contamination, unsuitable preservatives and storage outside validated limits.",
    "Incomplete or incorrectly timed collections require recollection or qualified reporting. Do not calculate daily excretion or clearance without reliable volume and duration."
  ],
  methodology: "As per Creatinine test; enzymatic 2-point rate assay.",
  turnaround: {
    routine: "Same day after receipt of the specimen and required collection information, subject to laboratory confirmation.",
    urgent: ""
  },
  criticalAlert: [
    "An isolated low urine creatinine concentration or low daily excretion is not automatically critical. Review collection quality, dilution and muscle mass.",
    "Interpret abnormal creatinine clearance with clinical findings and serum results; do not infer urgency from urine creatinine alone."
  ],
  diseaseAssociations: [
    "Urine creatinine has no specific disease association in isolation.",
    "Lower daily excretion may accompany reduced muscle mass or wasting; incomplete collection is an important alternative explanation.",
    "Higher excretion may reflect greater muscle mass, meat or creatine intake, or collection error.",
    "Renal disease is assessed through appropriate kidney function measurements and urine protein/albumin findings, rather than daily creatinine excretion alone."
  ],
  conversionFactors: [
    "Concentration:",
    "1 mg/dL = 88.4 µmol/L = 0.0884 mmol/L.",
    "1 mmol/L = 11.3 mg/dL.",
    "Timed excretion:",
    "1 mmol/day = 113.1 mg/day.",
    "1 mg/day = 0.00884 mmol/day.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "urine-culture",
  name: "Urine Culture",
  synonyms: [
    "Urine Bacterial Culture",
    "Urine MCS where microscopy and susceptibility testing are included"
  ],
  department: "microbiology",
  limsCode: "URINE",
  flags: [],
  summary: "Culture of urine to detect and identify clinically relevant microorganisms.",
  description: [
    "Culture of urine to detect and identify clinically relevant microorganisms, estimate bacterial concentration and perform antimicrobial susceptibility testing (AST) where indicated.",
    "Interpretation requires symptoms, collection method and relevant clinical information."
  ],
  indications: [
    "Investigate suspected UTI when culture is indicated, including recurrent infection, suspected pyelonephritis, treatment failure or complicated presentations.",
    "Investigate suspected UTI in pregnancy, children and catheterised patients according to clinical guidance.",
    "Guide antimicrobial selection.",
    "Screen for asymptomatic bacteriuria in pregnancy or before selected urological procedures involving mucosal trauma.",
    "Repeat testing when persistent symptoms, recurrence or a specific follow-up indication warrants it.",
    "Culture is not always necessary for a first uncomplicated cystitis episode in a non-pregnant woman. Routine test-of-cure is generally unnecessary when symptoms resolve, unless specifically indicated."
  ],
  referenceRange: [
    "Expected finding: no clinically significant growth.",
    "There is no single colony-count threshold applicable to every specimen. Interpret growth according to symptoms, organism, collection method, prior antibiotics and microscopy where available.",
    "Lower colony counts may be significant in symptomatic patients or appropriately collected invasive specimens. Mixed growth commonly suggests contamination but may represent genuine polymicrobial infection in selected patients."
  ],
  analyticalLimitations: [
    "Poor collection may introduce periurethral or genital flora.",
    "Delayed unrefrigerated transport may allow bacterial multiplication and distort colony counts.",
    "Antibiotics before collection may suppress growth; a negative culture does not always exclude infection.",
    "Positive culture, with or without pyuria, does not by itself establish symptomatic UTI.",
    "Asymptomatic bacteriuria usually does not require treatment outside specific indications.",
    "Routine culture may recover yeasts but does not replace specialist fungal investigation.",
    "Mycobacterial, viral, parasitic and sexually transmitted infection investigations require separate requests and appropriate specimens."
  ],
  sampleType: "",
  containerColour: "",
  sampleRequirements: [
    "Clean-catch midstream urine (MSU) in a sterile, leakproof container.",
    "Catheter specimen of urine (CSU): collect aseptically from the sampling port, not the drainage bag.",
    "Suprapubic aspirate (SPA) or other appropriate collection methods may be used in selected patients, including children.",
    "Collect before antibiotics where feasible; do not delay urgent treatment in a severely ill patient.",
    "Record collection date/time, collection method, symptoms, pregnancy status and current or recent antibiotics.",
    "Confirm minimum volume locally; do not assume 10 mL is essential.",
    "If using a preservative container, fill to the manufacturer's specified volume."
  ],
  storageTransport: [
    "Transport promptly, preferably within two hours.",
    "If delayed, refrigerate at 2–8 °C or use an approved culture-preservative container according to validated local requirements. Confirm the maximum holding time; underfilled preservative containers may inhibit organisms.",
    "See Appendix 9a and applicable guidance in Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unlabelled or mislabelled specimens, leaking containers, unsuitable collection methods, insufficient volume for the requested work and storage outside validated limits.",
    "Discuss irreplaceable or small-volume invasive specimens with microbiology before rejection. Do not use 24 hours at room temperature as an acceptable transport allowance."
  ],
  methodology: [
    "Semi-quantitative culture on validated media, followed by organism identification and AST where indicated.",
    "Confirm local media, identification methods and susceptibility-testing capability. Use the laboratory's adopted CLSI or EUCAST methods and interpretive criteria consistently."
  ],
  turnaround: {
    routine: "Proposed routine turnaround, subject to laboratory confirmation: Microscopy: same day, if included. Culture: usually 1–2 days. Identification and AST: usually within 2–3 days. Additional testing or referral may take longer.",
    urgent: ""
  },
  criticalAlert: [
    "Prompt communication may be required for clinically important resistant organisms, unexpected pathogens or findings affecting immediate management.",
    "A positive urine culture or resistance phenotype alone is not automatically a critical result. Interpret with the patient's clinical condition.",
    "Organisms Reported",
    "Common isolates include Escherichia coli, Klebsiella species, Proteus species, Enterococcus species and Staphylococcus saprophyticus.",
    "Pseudomonas aeruginosa and other organisms may occur in complicated or catheter-associated infection.",
    "Candida species may represent contamination, colonisation or infection. Report identification, growth quantity and susceptibility results according to local policy and clinical significance."
  ],
  diseaseAssociations: [
    "Cystitis.",
    "Pyelonephritis.",
    "Catheter-associated UTI.",
    "Asymptomatic bacteriuria.",
    "Culture findings require clinical correlation; colonisation and contamination are not equivalent to infection."
  ],
  conversionFactors: [
    "1 CFU/mL = 1,000 CFU/L.",
    "10⁵ CFU/mL = 10⁸ CFU/L.",
    "CFU: Colony-Forming Units",
    "See Appendix 10."
  ],
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Common isolates include Escherichia coli, Klebsiella species, Proteus species, Enterococcus species and Staphylococcus saprophyticus.",
        "Pseudomonas aeruginosa and other organisms may occur in complicated or catheter-associated infection.",
        "Candida species may represent contamination, colonisation or infection. Report identification, growth quantity and susceptibility results according to local policy and clinical significance."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "urine-electrolytes",
  name: "Urine Electrolytes (Sodium, Potassium)",
  synonyms: ["Urine Sodium", "Urine Potassium", "Urinary Sodium and Potassium"],
  department: "biochemistry",
  limsCode: "U_K+, U_NA",
  flags: [],
  summary: "Measures sodium and potassium concentrations in urine.",
  description: [
    "Measures sodium and potassium concentrations in urine. Timed collections permit calculation of excretion over the collection period.",
    "Used to assess renal electrolyte handling alongside blood electrolytes, kidney function and clinical findings."
  ],
  indications: [
    "Investigate hyponatraemia using urine sodium and urine osmolality alongside blood measurements.",
    "Assess renal potassium conservation or loss in hypokalaemia; support selected hyperkalaemia investigations.",
    "Investigate suspected renal salt wasting or tubular disorders.",
    "Support assessment of selected patients with AKI, recognising the limitations of urinary indices.",
    "Assess sodium intake or electrolyte excretion using a timed collection when specifically indicated."
  ],
  referenceRange: [
    "Timed sodium and potassium excretion depend strongly on intake, non-renal losses and physiological state.",
    "Interpret whether the renal response is appropriate for the blood electrolyte concentration and clinical condition."
  ],
  analyticalLimitations: [
    "Diuretics, intravenous fluids, electrolyte supplements, diet and recent treatment may substantially alter results.",
    "Spot concentrations vary with urine dilution and must be interpreted with relevant blood measurements.",
    "Low urine sodium may reflect sodium conservation but does not prove pre-renal accute kidney injury (AKI) or exclude intrinsic kidney injury.",
    "Fractional excretion of sodium has reduced diagnostic reliability in patients receiving diuretics or with chronic kidney disease.",
    "Urinary potassium must be assessed relative to serum potassium; an apparently ordinary excretion rate may be inappropriate during hypokalaemia.",
    "Incomplete collections, incorrect timing or inaccurate total volume invalidate timed excretion calculations."
  ],
  sampleType: "Urine",
  containerColour: "",
  sampleRequirements: [
    "Acute electrolyte assessment: spot urine in a laboratory-approved leakproof container, with blood samples collected close to the same time where required.",
    "Timed excretion: complete, accurately timed urine collection, commonly 24 hours, following laboratory instructions.",
    "Record collection type, date/time and, for timed specimens, duration and total volume.",
    "Provide diuretic use, intravenous fluid administration and electrolyte replacement details.",
    "Urine creatinine may be required for potassium-to-creatinine ratios or fractional excretion calculations.",
    "Confirm minimum volume and preservative compatibility locally.",
    "Collect before treatment."
  ],
  storageTransport: [
    "Follow validated local collection and transport requirements. Refrigerate at 2–8 °C where specified.",
    "Confirm maximum storage time and whether freezing is appropriate, including compatibility with other requested urine tests.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unlabelled or mislabelled specimens, insufficient volume, interfering contamination, unsuitable preservatives and storage outside validated limits.",
    "Incomplete or incorrectly timed collections require recollection or qualified reporting. Do not calculate timed excretion without reliable volume and duration."
  ],
  methodology: "Same as serum Sodium and Potassium testing; potentiometric assay.",
  turnaround: {
    routine: "Confirm with the testing laboratory.",
    urgent: "Acute electrolyte investigations require an appropriate urgent service pathway."
  },
  criticalAlert: [
    "There is no universal critical urine sodium or potassium concentration. Urgency depends on blood electrolyte abnormalities, symptoms and clinical condition.",
    "Inappropriate renal potassium loss during significant hypokalaemia warrants prompt assessment. Low urine sodium alone is not a critical result or a diagnosis of pre-renal failure."
  ],
  diseaseAssociations: [
    "Sodium conservation: reduced effective circulating volume, including hypovolaemia, heart failure or cirrhosis.",
    "Higher urine sodium in the relevant context: diuretic effects, renal salt wasting, adrenal insufficiency or syndrome of inappropriate antidiuresis.",
    "Renal potassium wasting during hypokalaemia: active loop/thiazide diuretic effects, mineralocorticoid excess, Bartter/Gitelman syndromes and selected tubular disorders.",
    "Appropriate potassium conservation during hypokalaemia may accompany reduced intake, gastrointestinal losses or intracellular shifts; interpretation remains context dependent."
  ],
  conversionFactors: [
    "For sodium and potassium:",
    "1 mmol/L = 1 mEq/L.",
    "1 mmol/day = 1 mEq/day."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "urine-protein",
  name: "Urine Protein",
  synonyms: ["Urinary Total Protein", "Quantitative Urine Protein"],
  department: "biochemistry",
  limsCode: "UPROT",
  flags: ["critical"],
  summary: "Measures total protein concentration in urine.",
  description: [
    "Measures total protein concentration in urine. With urine creatinine from the same specimen, a protein-to-creatinine ratio (PCR) can be calculated. A complete timed collection permits calculation of protein excretion.",
    "Used to quantify proteinuria; total protein alone does not identify its source."
  ],
  indications: [
    "Quantify and monitor proteinuria in known or suspected renal disease.",
    "Assess suspected nephrotic syndrome.",
    "Evaluate proteinuria in pregnancy alongside blood pressure and other clinical findings.",
    "Support investigation of suspected non-albumin proteinuria.",
    "Urine albumin-to-creatinine ratio (ACR) is generally preferred for initial adult chronic kidney disease (CKD) assessment, including diabetic kidney disease. Specialist studies may be required for tubular or monoclonal proteinuria."
  ],
  referenceRange: [
    "Use validated age-appropriate limits on the LIMS report; see Appendix 12.",
    "Common adult guides:",
    "Timed total protein excretion: <150 mg/24 hours.",
    "Non-pregnant adult PCR: commonly <15 mg/mmol creatinine; confirm locally.",
    "In hypertensive pregnancy, PCR ≥30 mg/mmol indicates significant proteinuria requiring clinical interpretation.",
    "These measures are not interchangeable. Pregnancy decision limits and nephrotic-range thresholds are distinct from reference intervals."
  ],
  analyticalLimitations: [
    "Timed excretion requires complete collection, accurate duration and total volume.",
    "PCR estimates protein excretion and is influenced by creatinine excretion, including muscle mass; it is not an exact daily total.",
    "Exercise, fever or postural proteinuria may cause transient elevation; repeat testing may be needed.",
    "Blood, genital secretions or other contamination may add protein unrelated to renal protein loss.",
    "Assay response to different proteins varies; total protein testing does not reliably characterise tubular proteins or monoclonal light chains.",
    "Alkaline-urine false positivity principally concerns dipstick testing; quantitative assay interference is method-specific.",
    "A normal total protein result does not exclude clinically important low-level albuminuria."
  ],
  sampleType: "Urine",
  containerColour: "Specimen jar",
  sampleRequirements: [
    "Spot urine for PCR, with protein and creatinine measured in the same specimen.",
    "First-morning urine is generally preferred for renal proteinuria assessment where appropriate.",
    "For suspected pre-eclampsia, follow the obstetric pathway; a random spot specimen is suitable, and routine 24-hour collection is usually unnecessary.",
    "Timed urine when specifically requested; record duration, total volume and missed portions.",
    "Confirm container, minimum volume and preservative requirements locally.",
    "Serum is not a specimen for this test."
  ],
  storageTransport: [
    "Follow validated local collection and transport requirements. Refrigerate at 2–8 °C where specified.",
    "Confirm acceptable holding time, freezing requirements and preservative compatibility. See Appendix 9a and applicable guidance in Appendix 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unlabelled or mislabelled specimens, unsuitable containers or preservatives, insufficient volume, significant contamination and storage outside validated limits.",
    "Incomplete timed collections require recollection or qualified reporting. Do not calculate daily excretion without reliable duration and total volume."
  ],
  methodology: [
    "Quantitative urine protein assay dye-binding measurement.",
    "Protein-Creatinine Ration requires urine creatinine measurement; timed excretion requires collection volume and duration."
  ],
  turnaround: {
    routine: "Same day, subject to laboratory confirmation.",
    urgent: "Suspected pre-eclampsia or acute renal disease may require urgent testing."
  },
  criticalAlert: [
    "Nephrotic-range proteinuria (>3.5 g/24 h) warrants prompt assessment of serum albumin, renal function, and oedema. This threshold defines nephrotic-range proteinuria in adults but does not, by itself, constitute a diagnosis of nephrotic syndrome.",
    "In pregnancy, new proteinuria accompanied by hypertension or other concerning symptoms requires urgent obstetric review. Note that pre-eclampsia may present without proteinuria."
  ],
  diseaseAssociations: [
    "Increased protein excretion may occur with glomerular disease, diabetic kidney disease, tubular disorders, monoclonal protein disorders and pre-eclampsia.",
    "Transient or postural proteinuria may occur without persistent renal disease. Low urine protein generally has no adverse diagnostic significance."
  ],
  conversionFactors: [
    "1 mg/dL = 0.01 g/L.",
    "1 g/L = 100 mg/dL.",
    "1 g/24 hours = 1,000 mg/24 hours.",
    "Concentration cannot be converted to daily excretion without collection volume and duration. See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "vancomycin",
  name: "Vancomycin",
  synonyms: [
    "Vancomycin Concentration",
    "Vancomycin Level",
    "Vancomycin Therapeutic Drug Monitoring"
  ],
  department: "biochemistry",
  limsCode: "VANC_TDM",
  flags: ["stat"],
  summary: "Measures vancomycin concentration in blood.",
  description: "Measures vancomycin concentration in blood to support safe and effective treatment. Vancomycin is used against susceptible Gram-positive organisms, including meticillin-resistant Staphylococcus aureus (MRSA).",
  indications: [
    "Support therapeutic drug monitoring (TDM) and individualised dosing.",
    "Assess potentially excessive or inadequate drug exposure.",
    "Monitor patients with impaired or changing renal function, critical illness or increased risk of nephrotoxicity.",
    "Provide concentrations for the locally approved trough- or exposure-based monitoring programme.",
    "Testing should be prioritised when results are required for an imminent dosing decision."
  ],
  referenceRange: [
    "Therapeutic targets, rather than a healthy-population reference interval, apply.",
    "For serious MRSA infections, consensus guidance recommends an Area Under the Curve (AUC₂₄ ) target of 400–600 mg·h/L when the minimum inhibitory concentration (MIC) is assumed to be 1 mg/L.",
    "AUC₂₄ is estimated using an approved pharmacokinetic method; it is not the measured concentration from a single sample.",
    "If AUC monitoring is unavailable, use the approved local trough target. Targets and sampling requirements may differ for children, continuous infusion, dialysis and selected infections.",
    "The proposed trough range of 12–18 mg/L requires local approval before inclusion. Refer to the validated LIMS interpretation and Appendix 12."
  ],
  analyticalLimitations: [
    "Incorrect or undocumented sampling time can make interpretation unreliable.",
    "A sample taken during or shortly after infusion is not a trough.",
    "Sampling from a line used to administer vancomycin may cause contamination and falsely high results.",
    "Trough concentration does not reliably predict AUC₂₄.",
    "Changing renal function alters clearance and may invalidate previous exposure estimates.",
    "Immunoassay interference and measuring-range limitations are method-specific; discuss unexpected results with the laboratory.",
    "Concentrations must be interpreted with dosing history, renal function and clinical condition."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved tube. Confirm whether SST is suitable and the required blood volume locally; use age-appropriate volumes.",
    "For intermittent-dose trough monitoring, collect immediately before the next scheduled dose.",
    "For AUC estimation, continuous infusion or dialysis monitoring, follow the approved sampling plan.",
    "Provide:",
    "Actual collection date and time.",
    "Dose, route and dosing interval.",
    "Recent administration times, including infusion start and finish.",
    "Relevant missed or delayed doses.",
    "Current renal function and dialysis details where applicable.",
    "Avoid sampling from the infusion line where possible."
  ],
  storageTransport: [
    "Send promptly when required for dosing decisions.",
    "Separate and store the specimen according to validated local assay requirements. Confirm refrigerated stability, freezing requirements and permitted storage in separator tubes.",
    "See Appendix 9a."
  ],
  rejection: [
    "See Appendix 7.",
    "Assess unsuitable tubes, insufficient volume, suspected infusion-line contamination and storage outside validated limits.",
    "Missing timing information or a mistimed sample requires clarification or qualified reporting; it must not be labelled as a trough without confirmation."
  ],
  methodology: [
    "Two-point rate assay measured spectrophotometrically.",
    "AUC₂₄ estimation is a separate pharmacokinetic calculation requiring concentration and dosing information."
  ],
  turnaround: {
    routine: "Coordinate collection, transport and reporting with the clinical dosing decision.",
    urgent: "Proposed urgent turnaround: <1 hour from laboratory receipt, subject to confirmation of local operating hours and service capability."
  },
  criticalAlert: [
    "Immediately communicate concentrations exceeding the approved alert threshold or unexpected results suggesting significant accumulation to the responsible clinician.",
    "Interpret with sample timing and renal function. A concentration above a therapeutic target is not automatically a critical result; dose decisions follow the approved clinical protocol."
  ],
  diseaseAssociations: [
    "Monitoring supports treatment of serious susceptible Gram-positive infections, including MRSA bacteraemia, endocarditis and bone or joint infection.",
    "Reduced renal clearance can cause accumulation. Excessive exposure increases the risk of acute kidney injury."
  ],
  conversionFactors: ["1 mg/L = 1 µg/mL.", "See Appendix 10."],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "vitamin-b12",
  name: "Vitamin B12",
  synonyms: ["Cobalamin", "Serum Vitamin B12", "Total Vitamin B12"],
  department: "biochemistry",
  limsCode: "VITB12",
  flags: [],
  summary: "Measures total circulating vitamin B12.",
  description: "Measures total circulating vitamin B12, required for DNA synthesis, red blood cell production and neurological function. Deficiency may cause megaloblastic anaemia and potentially irreversible neurological damage.",
  indications: [
    "Investigate suspected B12 deficiency, including macrocytic or megaloblastic anaemia and unexplained neurological symptoms.",
    "Assess patients at risk from inadequate dietary intake or malabsorption.",
    "Support investigation of suspected pernicious anaemia; B12 alone does not establish its cause.",
    "Repeat testing selectively when clinically indicated. Routine serum B12 monitoring during intramuscular replacement is not recommended."
  ],
  referenceRange: [
    "Use the method- and age-specific reference interval on the validated laboratory information management system (LIMS) report; see Appendix 12."
  ],
  analyticalLimitations: [
    "Total B12 does not directly measure intracellular availability. Deficiency may occur without anaemia or macrocytosis.",
    "Recent supplements or injections may raise concentrations and obscure deficiency.",
    "Intrinsic factor antibodies and other assay-specific interference may produce misleading results; discuss results inconsistent with the clinical findings with the laboratory.",
    "For indeterminate or discordant results, consider methylmalonic acid (MMA), or homocysteine if MMA is unavailable, where accessible locally or by referral. Renal impairment may increase MMA; homocysteine is less specific and may increase with folate deficiency.",
    "Nitrous oxide exposure can cause functional deficiency despite a normal B12 concentration.",
    "Pregnancy may lower total B12 without true deficiency; active B12 may be preferable where available."
  ],
  sampleType: "Serum",
  containerColour: "Gold/Yellow SST II",
  sampleRequirements: [
    "Serum in a laboratory-approved collection tube. Confirm minimum volume with the testing laboratory; see Appendix 6.",
    "Where practicable, collect before starting replacement. Record recent B12 supplementation, injections and relevant nitrous oxide exposure."
  ],
  storageTransport: "Separate serum promptly and transport according to locally validated requirements. Confirm refrigerated stability and freezing conditions with the testing laboratory; see Appendices 9a.",
  rejection: "See Appendix 7. Apply assay-specific interference limits; do not reject haemolysed, lipaemic or icteric specimens solely on appearance.",
  methodology: "Automated binding assay/immunoassay for total vitamin B12.",
  turnaround: { routine: "1 -3 working days.", urgent: "" },
  criticalAlert: [
    "Apply approved notification criteria in Appendices 4 and 5; no universal critical concentration is specified.",
    "Suspected B12 deficiency with significant neurological features or megaloblastic anaemia requires urgent clinical assessment. Do not delay treatment while awaiting confirmation when neurological injury is suspected."
  ],
  diseaseAssociations: [
    "Low: Inadequate dietary intake, autoimmune gastritis/pernicious anaemia, coeliac disease, ileal disease or resection, and gastric surgery.",
    "Functional deficiency: Nitrous oxide exposure; total B12 may remain normal.",
    "Increased: Supplementation, liver disease and myeloproliferative disorders. An increased result is non-specific."
  ],
  conversionFactors: [
    "1 pg/mL = 0.738 pmol/L.",
    "1 pmol/L = 1.355 pg/mL.",
    "pg/mL and ng/L are numerically equivalent."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "white-blood-cell-count",
  name: "White Blood Cell Count (WBC)",
  synonyms: ["White Cell Count", "WCC", "Total Leucocyte Count", "TLC"],
  department: "haematology",
  limsCode: "WBC",
  flags: ["critical"],
  summary: "Measures the total number of leucocytes in whole blood.",
  description: "Measures the total number of leucocytes in whole blood. Usually reported as part of the full blood count (FBC). Interpret with the white cell differential, other FBC parameters and clinical findings.",
  indications: [
    "Support investigation and monitoring of infection and inflammation.",
    "Assess leucopenia or leucocytosis and suspected bone marrow disorders.",
    "Support investigation of leukaemia and other haematological malignancies.",
    "Monitor chemotherapy, marrow suppression and treatment response."
  ],
  referenceRange: [
    "Use the age-appropriate, locally validated reference interval on the laboratory information management system (LIMS) report; see Appendix 12.",
    "Neonates and children require age-specific intervals. Pregnancy may also increase WBC."
  ],
  analyticalLimitations: [
    "WBC is non-specific; a normal result does not exclude infection or haematological disease.",
    "Stress, exercise, pregnancy, corticosteroids and other medicines may alter the count; these are biological effects rather than assay interference.",
    "Nucleated red blood cells (NRBCs) may falsely increase WBC if not adequately distinguished or corrected by the analyser.",
    "Abnormal cells or analyser flags may require blood film review and verification.",
    "Clotting, inadequate mixing and delayed analysis may compromise results, particularly the differential and cell morphology.",
    "Total WBC alone does not identify which leucocyte population is increased or reduced; assess absolute differential counts."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a laboratory-approved tube.",
    "Fill to the tube's specified volume and mix gently immediately after collection. Confirm minimum volume, including paediatric requirements; see Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and analyse as soon as practicable.",
    "Use locally validated temperature and stability limits for the analyser, differential and blood film requirements; see Appendices 9a. Protect from excessive heat and do not freeze whole blood."
  ],
  rejection: "Reject clotted specimens and apply the identification, container, volume and stability criteria in Appendix 7.",
  methodology: [
    "Automated haematology analyser using impedance and/or optical methods. Blood film review or alternative counting methods may be required for flagged or unreliable results.",
    "Confirm the local analyser and verification procedures."
  ],
  turnaround: {
    routine: "Same day.",
    urgent: "Confirm availability and turnaround time for urgent requests with the testing laboratory."
  },
  criticalAlert: [
    "Assess low WBC with the Absolute Neutrophil Count (ANC). Fever or suspected sepsis in a neutropenic patient requires immediate clinical assessment.",
    "Marked leucocytosis, particularly with suspected blasts or acute clinical deterioration, requires prompt review; notification follows approved local policy."
  ],
  diseaseAssociations: [
    "Increased: Infection, inflammation, physiological stress, corticosteroid use, leukaemia and myeloproliferative neoplasms.",
    "Decreased: Some viral infections, severe infection/sepsis, drug-related or chemotherapy-related marrow suppression, aplastic anaemia and autoimmune disease.",
    "Interpret with the differential and blood film where indicated."
  ],
  conversionFactors: [
    "1 × 10⁹/L = 1,000 cells/µL.",
    "1 cell/µL = 0.001 × 10⁹/L.",
    "See Appendix 10."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-10",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "white-blood-cell-count-differential",
  name: "White Blood Cell Count & Differential",
  synonyms: ["WBC with Differential", "Differential Leucocyte Count"],
  department: "haematology",
  limsCode: "WBCC",
  flags: ["critical"],
  summary: "Absolute counts and relative proportions of neutrophils, lymphocytes, monocytes, eosinophils and basophils.",
  description: [
    "Measures total white blood cell (WBC) count and the absolute counts and relative proportions of neutrophils, lymphocytes, monocytes, eosinophils and basophils. Usually reported within the full blood count (FBC).",
    "Interpret with other FBC parameters, clinical findings and blood film morphology where indicated."
  ],
  indications: [
    "Support assessment of infection and inflammation.",
    "Investigate leucocytosis, leucopenia and abnormalities of individual leucocyte populations.",
    "Monitor chemotherapy, immunosuppressive treatment and marrow suppression.",
    "Support investigation of suspected leukaemia, myelodysplastic syndromes and other marrow disorders.",
    "Investigate eosinophilia associated with allergic disease, drug reactions or helminth infection."
  ],
  referenceRange: [
    "Use the age-appropriate, locally validated intervals on the laboratory information management system (LIMS) report; see Appendix 12.",
    "Assess absolute counts alongside percentages. A change in one population may alter other percentages without changing their absolute counts."
  ],
  analyticalLimitations: [
    "Differential patterns are non-specific and cannot independently distinguish bacterial from viral infection or determine severity.",
    "Blasts, atypical lymphocytes and other abnormal cells may be misclassified or missed by automated analysis. Apply validated blood film-review criteria.",
    "Nucleated red blood cells may affect WBC and differential results if not adequately distinguished or corrected.",
    "Clotting, inadequate mixing and delayed analysis can compromise counts and cell morphology.",
    "Corticosteroids, physiological stress and pregnancy may alter the differential; these are biological effects.",
    "A routine differential does not measure lymphocyte subsets or establish immune function."
  ],
  sampleType: "EDTA whole blood",
  containerColour: "Lavender EDTA",
  sampleRequirements: [
    "EDTA-anticoagulated whole blood in a laboratory-approved tube.",
    "Fill to the specified tube volume and mix gently immediately after collection. Confirm minimum volume, including paediatric requirements; see Appendix 6."
  ],
  storageTransport: [
    "Transport promptly and analyse as soon as practicable.",
    "Use locally validated temperature and stability limits for the differential and blood film; see Appendices 9a and 9b. Protect from excessive heat and do not freeze whole blood."
  ],
  rejection: "Reject clotted specimens. Apply identification, container, volume and stability criteria in Appendix 7.",
  methodology: [
    "Automated WBC count and differential using analyser-specific optical, fluorescence and/or impedance methods.",
    "Manual blood film examination and differential counting when indicated."
  ],
  turnaround: { routine: "Same day to next day if morphology examination is required.", urgent: "" },
  criticalAlert: [
    "Notify results meeting approved criteria in Appendices 4 and 5.",
    "Absolute neutrophil count (ANC) <0.5 × 10⁹/L indicates severe neutropenia. Fever or suspected sepsis in a neutropenic patient requires immediate clinical assessment.",
    "Newly identified blasts or findings suspicious for acute leukaemia require urgent verification and clinical communication, irrespective of total WBC.",
    "Apply approved local notification criteria for marked leucocytosis and other high-risk abnormalities."
  ],
  diseaseAssociations: [
    "Neutrophilia: Infection, inflammation, stress, corticosteroids and myeloproliferative neoplasms.",
    "Neutropenia: Severe infection/sepsis, viral infection, medicines, chemotherapy and marrow failure.",
    "Lymphocytosis: Reactive viral infections, including Epstein–Barr virus and cytomegalovirus; chronic lymphocytic leukaemia and other lymphoproliferative disorders.",
    "Lymphopenia: Immunodeficiency, corticosteroids and chemotherapy.",
    "Eosinophilia: Allergy/asthma, drug reactions, helminth infection and hypereosinophilic disorders.",
    "Monocytosis: Chronic infection, including tuberculosis, inflammation and haematological malignancy.",
    "Basophilia: Particularly persistent basophilia in myeloproliferative neoplasms; may also be reactive."
  ],
  conversionFactors: [
    "For total WBC and absolute differential counts:",
    "1 × 10⁹/L = 1,000 cells/µL.",
    "1 cell/µL = 0.001 × 10⁹/L.",
    "Relative differential results are reported as percentages."
  ],
  organismsReported: null,
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
},

{
  id: "wound-swab-culture",
  name: "Wound Swab Culture",
  synonyms: ["Wound Culture", "Pus Swab Culture"],
  department: "microbiology",
  limsCode: "WOUND",
  flags: ["stat"],
  summary: "Culture of wound specimen for clinical relevant bacteria.",
  description: [
    "Culture of wound material to recover clinically relevant bacteria and perform antimicrobial susceptibility testing (AST), where indicated.",
    "Interpret with specimen quality, wound site and clinical findings. Culture alone cannot distinguish infection from colonisation."
  ],
  indications: [
    "Investigate suspected wound or surgical-site infection when results may guide management.",
    "Investigate clinically infected chronic wounds, including diabetic foot ulcers.",
    "Identify organisms from abscesses or deep soft-tissue infections; aspirated pus or tissue is preferred.",
    "Consider repeat culture for persistent, recurrent or worsening infection when clinically indicated.",
    "Routine culture of clinically uninfected wounds or repeat swabbing to document clearance is generally unnecessary. Swabbing intact skin is not useful for uncomplicated cellulitis."
  ],
  referenceRange: [
    "Not applicable; culture results are descriptive.",
    "\"No growth\" does not exclude infection. Skin flora or mixed growth may represent colonisation, contamination or infection, depending on the specimen and clinical context."
  ],
  analyticalLimitations: [
    "Superficial swabs may recover colonising organisms and miss pathogens in deeper tissue.",
    "Previous antimicrobial treatment, poor sampling or unsuitable transport may reduce yield.",
    "Mixed growth can be difficult to interpret without the anatomical site and clinical details.",
    "Routine bacterial culture does not reliably exclude anaerobic, fungal or mycobacterial infection. Discuss additional testing and appropriate specimens with the laboratory.",
    "A wound swab does not reliably identify organisms causing underlying osteomyelitis."
  ],
  sampleType: "",
  containerColour: "Swab",
  sampleRequirements: [
    "Swab: Collect from the cleansed wound bed or clinically infected area using a laboratory-approved swab and bacterial transport medium. Avoid surrounding skin and superficial exudate.",
    "Deep infection: Prefer aseptically collected tissue or aspirated pus in an appropriate sterile container or anaerobic transport system.",
    "Do not place material intended for culture in formalin. Do not submit syringes with needles attached.",
    "Collect before antibiotics where practicable, without delaying urgent care.",
    "Record exact site, specimen depth/type, clinical signs, current antibiotics and relevant exposures, such as bites or water exposure."
  ],
  storageTransport: [
    "Send promptly in the approved transport system.",
    "Temperature and acceptable delay depend on specimen type, transport medium and requested organisms. Confirm requirements, particularly for anaerobic culture; see Appendices 9a and 9b."
  ],
  rejection: [
    "See Appendix 7.",
    "Unsuitable transport systems, dried-out swabs, leaking containers, identification errors or specimens exceeding validated stability limits may require recollection.",
    "Absence of visible material on a swab alone is not a reliable rejection criterion. Discuss compromised, difficult-to-recollect tissue or aspirates with microbiology before disposal."
  ],
  methodology: [
    "Bacterial culture on appropriate media, with organism identification and AST of clinically relevant isolates using locally validated methods.",
    "Gram stain and anaerobic culture were indicated and available. AST follows the laboratory's adopted current CLSI or EUCAST standard. Confirm specialist referral arrangements."
  ],
  turnaround: {
    routine: "Confirm with the testing laboratory. Preliminary microscopy, routine culture/AST and specialist cultures may have different turnaround times.",
    urgent: ""
  },
  criticalAlert: [
    "Notify resistant organisms according to local clinical and infection prevention policies. An isolate from a superficial swab does not establish invasive infection.",
    "Suspected necrotising infection or systemic deterioration requires immediate clinical assessment; do not wait for culture results.",
    "Organisms Reported",
    "Report clinically relevant isolates with AST where indicated. Mixed flora and relative growth may be described according to laboratory policy; growth quantity does not establish infection severity.",
    "Common isolates include:",
    "Staphylococcus aureus, including methicillin-resistant strains, and β-haemolytic streptococci.",
    "Enterobacterales, including Escherichia coli, Klebsiella and Proteus species.",
    "Pseudomonas aeruginosa.",
    "Enterococcus species and other organisms, depending on site and clinical significance.",
    "Anaerobes, yeasts or moulds require appropriate investigation where indicated."
  ],
  diseaseAssociations: [
    "Infected wounds, abscesses, surgical-site infection, diabetic foot infection and necrotising soft-tissue infection."
  ],
  conversionFactors: "Not applicable.",
  organismsReported: [
    {
      group: "Reported organisms",
      items: [
        "Report clinically relevant isolates with AST where indicated. Mixed flora and relative growth may be described according to laboratory policy; growth quantity does not establish infection severity."
      ]
    },
    {
      group: "Common isolates include",
      items: [
        "•\tStaphylococcus aureus, including methicillin-resistant strains, and β-haemolytic streptococci.",
        "•\tEnterobacterales, including Escherichia coli, Klebsiella and Proteus species.",
        "•\tPseudomonas aeruginosa.",
        "•\tEnterococcus species and other organisms, depending on site and clinical significance.",
        "Anaerobes, yeasts or moulds require appropriate investigation where indicated."
      ]
    }
  ],
  appendixRefs: [
    "appendix-1",
    "appendix-2",
    "appendix-3",
    "appendix-4",
    "appendix-5",
    "appendix-6",
    "appendix-7",
    "appendix-8",
    "appendix-9a",
    "appendix-9b",
    "appendix-12"
  ],
  lastReviewed: "",
  added: "2026-10-19",
  updated: ""
}
];
