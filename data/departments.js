/* =========================================================================
   departments.js — Departments and the services each provides
   -------------------------------------------------------------------------
   The "id" of each department is used by tests.js (the `department` field)
   and by the Test Directory filter dropdown. Keep ids short and lowercase.
   If you add a department here, you can immediately use its id in tests.js.
   ========================================================================= */

window.DEPARTMENTS = [

  {
    id: "biochemistry",
    name: "Biochemistry",
    services: "Routine chemistry, endocrine, metabolic, cardiac markers, tumour markers",
    location: "[FILL IN — building / floor]",
    contact: "[FILL IN — extension]"
  },

  {
    id: "haematology",
    name: "Haematology",
    services: "General haematology, coagulation, limited specialised haematology",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "microbiology",
    name: "Microbiology",
    services: "Bacteriology, mycology, parasitology, molecular",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "blood-bank",
    name: "Blood Bank and Transfusion",
    services: "Transfusion and laboratory services",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "molecular",
    name: "Molecular Biology",
    services: "[FILL IN — e.g. PCR for TB, HIV viral load, respiratory panel, arbovirus]",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "serology",
    name: "Serology / Immunology",
    services: "[FILL IN — e.g. hepatitis, HIV, syphilis, dengue, rubella serology]",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "parasitology",
    name: "Parasitology",
    services: "Malaria microscopy, ova cysts and parasites",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "cytology",
    name: "Cytology / Histology",
    services: "[FILL IN — e.g. cervical cytology, fine needle aspiration]",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  },

  {
    id: "poc",
    name: "Point of Care",
    services: "[FILL IN — e.g. blood gas, troponin, glucose meters]",
    location: "[FILL IN]",
    contact: "[FILL IN]"
  }

  /* ---- COPY THIS BLOCK TO ADD A DEPARTMENT ----------------------------
  ,{
    id: "",
    name: "",
    services: "",
    location: "",
    contact: ""
  }
  ---------------------------------------------------------------------- */

];
