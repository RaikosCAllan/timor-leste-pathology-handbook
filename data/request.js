/* =========================================================================
   request.js — How to request a test, and specimen acceptance criteria
   -------------------------------------------------------------------------
   Covers three sections of the site:
     • How to Request a Test      (steps, forms, patient ID, labelling)
     • Specimen Criteria          (minimum acceptance + rejection reasons)
   ========================================================================= */

window.REQUEST = {

  /* --- The numbered steps shown on "How to Request a Test" ------------- */
  steps: [
    {
      title: "Use the correct request form",
      body: "Each location has its own request form.",
    },
    {
      title: "Complete every required field",
      body: "Patient full name, medical record number, age and gender; relevant clinical history and provisional diagnosis; current medications if relevant; ward or clinic; test requested; specimen type and anatomical site where relevant; special timing (e.g. fasting); requesting doctor's name and signature. Incomplete forms delay processing and the final report."
    },
    {
      title: "Identify the patient before collecting",
      body: "Ask the patient to state their full name and date of birth, and compare with the request form or medical record. For non-communicative patients, confirm with a caregiver, attending nurse or treating doctor and verify against the wristband."
    },
    {
      title: "Label at the patient's side, before leaving",
      body: "Label the specimen immediately after collection, at the patient's side. Required on the label: full patient name; date of birth or MRN; date and time of collection; collector's initials or ID; specimen source where applicable."
    },
    {
      title: "Re-check the label against the request form",
      body: "The collector re-checks the label against the form before the specimen leaves the ward. Use dark ink, keep labels legible, and position barcodes so they can be scanned."
    },
    {
      title: "Send the specimen promptly, in the right conditions",
      body: "Check the storage and transport requirement for the test in the Test Directory before sending. See Appendix 9a: Storage / Transport – Quick Reference Table (All Disciplines) and 9b: Microbiology Specimen Handling",
    },
    {
      title: "Adding a test after the specimen has arrived",
      body: "Telephone the laboratory specimen reception on 3310151; add-on only possible if the original specimen is still within stability."
    }
  ],

  /* --- Request forms in use -------------------------------------------- */
  // Put PDFs in assets/downloads/ and set `file` to make the name a link.
  forms: [
    { name: "General pathology request form",     file: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/downloads/pathology_request_form_example.pdf", note: "Biochemistry, haematology, serology" },
    { name: "Blood bank / transfusion request",   file: "", note: "Group & screen, crossmatch, product request" },
    { name: "Tuberculosis request form",          file: "", note: "TB smear, GeneXpert MTB/RIF, TB culture" },
    { name: "Molecular / surveillance request",   file: "", note: "[FILL IN]" },
    { name: "Cytology / histology request",       file: "", note: "[FILL IN]" }
  ],

  /* --- Out of hours ---------------------------------------------------- */
  outOfHours: {
    heading: "Out-of-hours requests",
    body: [
      "Out of hours service are not available. For urgent testing, please refer to Hospital Nacional Guido Valadares.",
      ]
  },

  /* --- Minimum acceptance criteria ------------------------------------- */
  acceptance: {
    heading: "Minimum acceptance criteria",
    intro: "A specimen must meet all of the following before it can be processed.",
    items: [
      "Specimen is labelled, and the label matches the request form.",
      "At least two identifiers present: full name plus date of birth or MRN.",
      "Correct tube and anticoagulant for the test requested.",
      "Adequate volume — tube filled to the mark where an additive ratio applies.",
      "Container intact, closed and not externally contaminated.",
      "Received within the stability time for the test."
    ]
  },

  /* --- Rejection criteria (Handbook Appendix 7) ------------------------ */
  rejection: {
    heading: "Common reasons for rejection",
    intro: "A specimen may be rejected for any of the reasons below. The requesting ward will be notified and a repeat specimen requested.",
    groups: [
      {
        group: "Identification errors",
        items: [
          "Unlabelled specimen",
          "Label does not match the request form",
          "Missing identifiers — must have at least full name plus date of birth or MRN"
        ]
      },
      {
        group: "Incorrect collection",
        items: [
          "Wrong tube or incorrect anticoagulant",
          "Clotted EDTA sample (haematology)",
          "Under-filled citrate tube (coagulation)",
          "Haemolysed sample (biochemistry / transfusion)",
          "Wrong container — e.g. urine in a non-sterile jar"
        ]
      },
      {
        group: "Insufficient volume",
        items: [
          "Tube below minimum fill — EDTA, citrate, serum, or microbiology swab with no fluid",
          "Blood culture bottle with < 5 mL (adult) or < 1 mL (paediatric)"
        ]
      },
      {
        group: "Delayed or poor transport",
        items: [
          "Sample left uncentrifuged beyond its stability time",
          "Refrigerated CSF",
          "Dried swabs",
          "Urine held > 2 hours at room temperature without refrigeration"
        ]
      },
      {
        group: "Leaking or contaminated specimen",
        items: [
          "Broken, leaking or externally contaminated container",
          "Swab contaminated with stool or saliva, unless appropriate to the request"
        ]
      },
      {
        group: "Inappropriate specimen type",
        items: [
          "Saliva submitted instead of sputum",
          "Stool submitted for blood culture",
          "A swab of blood — not acceptable for culture"
        ]
      }
    ],
    footnote: "Check with the testing laboratory for further information regarding sample rejection."
  },

  /* --- Critical results ------------------------------------------------ */
  criticalResults: {
    heading: "Critical and life-threatening results",
    body: [
      "A critical result indicates that a patient's condition may deteriorate rapidly without immediate medical intervention.",
      "The laboratory telephones critical results to the requesting clinician or ward. Make sure a reachable contact number is on every request form.",
        ]
  }

};
