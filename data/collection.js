/* =========================================================================
   collection.js — Specimen collection quick guide
   -------------------------------------------------------------------------
   Two things live here:
     1. ORDER OF DRAW + tube reference table (Handbook Appendix 6)
     2. The key notes / precautions that sit under the table
   The `colour` value of each tube is what tests.js `containerColour` should
   match, so the Test Directory can cross-reference the right tube.
   To show a tube photo, put the image in assets/img/tubes/ and set `image`.
   ========================================================================= */

window.COLLECTION = {

  intro: "Draw specimens in the order shown below. Drawing out of order can carry additive from one tube into the next and invalidate results.",

  orderOfDraw: [
    {
      order: "1",
      colour: "",
      swatch: "#c8ccd4",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/syringe_poc_2.png",
      additive: "No additive — syringe bleed, point-of-care testing",
      uses: "Arterial blood gas"
    },
    {
      order: "2",
      colour: "",
      swatch: "#3f6fb5",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/bc_bottles_2.png",
      additive: "Aerobic Plus (blue), Anaerobic Lytic (purple), Paediatric Plus (pink)",
      uses: "Aerobic and anaerobic blood culture"
    },
    {
      order: "3",
      colour: "",
      swatch: "#7fb9e0",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/citrate.jpg",
      additive: "Sodium citrate, 13 × 75 mm / 2.7 mL",
      uses: "Coagulation: INR, APTT, PT, fibrinogen, D-dimer"
    },
    {
      order: "4",
      colour: "",
      swatch: "#d9a520",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/sst.jpg",
      additive: "Serum separating tube SST — clot activator and gel. 13 × 75 mm / 3.5 mL, 13 × 100 mm / 5 mL",
      uses: "Biochemistry, immunochemistry, serology, rapid tests"
    },
    {
      order: "5",
      colour: "",
      swatch: "#b93b3b",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/clot_tube.jpg",
      additive: "No preservative, with clot activator",
      uses: "Biochemistry, immunochemistry, serology, therapeutic drug monitoring"
    },
    {
      order: "6",
      colour: "",
      swatch: "#4f9d69",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/lithhep_lightgreen.png",
      additive: "Sodium or lithium heparin with gel",
      uses: "Biochemistry (plasma sample)"
    },
    {
      order: "6",
      colour: "",
      swatch: "#2f6b47",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/lithhep_darkgreen.png",
      additive: "Sodium or lithium heparin, with or without gel",
      uses: "Biochemistry plasma or whole blood tests, cardiac markers including troponin"
    },
    {
      order: "7",
      colour: "",
      swatch: "#9b7fc4",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/edta.jpg",
      additive: "K₂EDTA, 13 × 75 mm / 3 mL, 13 × 100 mm / 6 mL",
      uses: "Haematology, ESR, HbA1c, blood film, malaria thick/thin film"
    },
    {
      order: "7",
      colour: "",
      swatch: "#e09ab5",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/edtabb.jpg",
      additive: "K₂EDTA, 13 × 100 mm / 6 mL",
      uses: "Transfusion / blood bank"
    },
    {
      order: "8",
      colour: "",
      swatch: "#8d9199",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/flox.jpg",
      additive: "Sodium fluoride / potassium oxalate, 13 × 75 mm / 2 mL",
      uses: "Glucose, lactate, tolerance tests"
    },
    {
      order: "—",
      colour: "",
      swatch: "#ffffff",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/urine_jar_3.png",
      additive: "Sterile, no additive",
      uses: "Urine, body fluid, biopsy, skin scraping"
    },
    {
      order: "—",
      colour: "",
      swatch: "#d8cbb4",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/stool_jar.png",
      additive: "No additive",
      uses: "Stool sample."
    },
    {
      order: "—",
      colour: "",
      swatch: "#ffffff",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/csf_jar.png",
      additive: "CSF Fluid, No additive",
      uses: "Cerebrospinal fluid (CSF)"
    },
    {
      order: "—",
      colour: "",
      swatch: "#e6e2d8",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/fna.jpg",
      additive: "Fine needle aspirate. No additive",
      uses: "FNA"
    },
    {
      order: "—",
      colour: "",
      swatch: "#e6e2d8",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/swab.png",
      additive: "None / gel swab / nasal swab",
      uses: "Microbiology, molecular, histology"
    },
    {
      order: "—",
      colour: "",
      swatch: "#c9b98a",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/culture_plate.png",
      additive: "Agar gel",
      uses: "Microbiology"
    },
    {
      order: "—",
      colour: "",
      swatch: "#dfe4ea",
      image: "/Users/raikosallan/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web/assets/img/tubes/blood_slides.png",
      additive: "Fixative and stains",
      uses: "Blood film, thick/thin film, Gram stain, TB screening, bone marrow"
    }
  ],

  keyNotes: {
    heading: "Key notes for ward and clinic staff",
    items: [
      "Invert blood tubes gently, usually 8–10 times.",
      "Under-filled citrate tubes are invalid for coagulation testing.",
      "Serum tubes must clot fully before centrifugation.",
      "Never transfer blood between tubes.",
      "Follow infection prevention and control protocols for sharps disposal."
    ]
  },

  precautions: {
    heading: "Standard precautions",
    items: [
      "Treat all blood and body fluids as potentially infectious.",
      "Perform hand hygiene before and after patient contact.",
      "Use leak-proof containers with biohazard labels."
    ]
  },

  specialConsiderations: {
    heading: "Special considerations",
    items: [
      "Venous versus capillary sampling.",
      "Paediatric micro-collection tubes for babies and difficult bleeds.",
      "Blood cultures: ensure proper skin antisepsis (alcohol / chlorhexidine).",
      "Point-of-care testing: follow device-specific cartridge instructions."
    ]
  }

};
