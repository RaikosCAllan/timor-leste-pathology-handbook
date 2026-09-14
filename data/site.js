/* =========================================================================
   site.js — Organisation details, navigation, hours, contacts
   -------------------------------------------------------------------------
   EDIT THIS FILE FIRST. Everything here appears in the header, footer,
   "About Us" section and "Laboratory Hours" section.

   Any text value may be written two ways:
     "Plain English text"                  <- English only (fine for now)
     { en: "English", tet: "Tetun" }       <- bilingual, once Tetun is ready
   Both forms work everywhere. See TEMPLATE_GUIDE.md.
   ========================================================================= */

window.SITE = {

  /* --- Language -------------------------------------------------------- */
  // Set showLanguageToggle to true once Tetun content has been added.
  languages: [
    { code: "en",  label: "English" },
    { code: "tet", label: "Tetun" }
  ],
  defaultLanguage: "en",
  showLanguageToggle: false,

  /* --- Identity -------------------------------------------------------- */
  organisation: "Laboratório Nacional de Saúde",
  organisationShort: "LNS",
  parentBody: "Ministério da Saúde, Timor-Leste",
  siteTitle: "Pathology Services Handbook",
  tagline: "Laboratory test directory, specimen requirements and reporting guidance for clinicians and ward staff across Timor-Leste.",

  // Path to the crest/logo. Put the image file in assets/img/ and name it here.
  // Leave as "" to show the organisation initials instead.
  logo: "assets/img/logo.png",

  // Version banner shown in the footer.
  sourceDocument: "Pathology Handbook v9.3 (working)",
  lastReviewed: "[FILL IN — e.g. September 2026]",
  nextReview:   "[FILL IN — e.g. September 2027]",
  documentOwner: "[FILL IN — e.g. Quality Manager, LNS]",

  // Optional: link to the downloadable PDF of the full handbook.
  // Put the PDF in assets/downloads/ and name it here. "" hides the button.
  handbookPdf: "",

  /* --- Vision & mission (About Us section) ----------------------------- */
  vision: [
    "To provide sustainable, high quality laboratory service that is accessible to the people of Timor-Leste.",
    "To provide induction and training in appropriate medical laboratory technology to all laboratory staff within the national health system.",
    "To improve the quality of work performed in laboratories by providing Quality Assurance Programmes to peripheral laboratories and implementing expected standards of practice."
  ],

  mission: "To provide a sustainable, high quality laboratory service that is reliable and accessible to the people of Timor-Leste.",

  aboutIntro: "The Laboratório Nacional de Saúde provides diagnostic testing across the departments listed below. All departments operate under the Ministry of Health and report through the CGM SchuyLab laboratory information management system (LIMS).",

  /* --- Reference range / units notes (About Us section) ----------------- */
  notes: [
    {
      heading: "About reference ranges",
      body: [
        "Reference ranges are uniform across all laboratories operating under the Ministry of Health and connected to CGM SchuyLab LIMS.",
        "The reference intervals provided here are those currently in use and are reflected on all patient pathology reports produced by the LIMS.",
        "Reference ranges were correct at the time of publication. Updates may occur — the LIMS report is always the authoritative source.",
        "Reference ranges are substantially based on those used in accredited Australian hospital laboratories unless otherwise stated."
      ]
    },
    {
      heading: "Units of measurement",
      body: [
        "[FILL IN — copy from Handbook v9.3, 'Units of Measurement' section.]"
      ]
    },
    {
      heading: "Interpretation of results",
      body: [
        "[FILL IN — copy from Handbook v9.3, 'Notes on Interpretation of Results' section.]"
      ]
    }
  ],

  /* --- Laboratory hours ------------------------------------------------ */
  // Add or remove rows freely. "note" is optional.
  hours: [
    { service: "Full service — weekdays",        time: "[FILL IN — e.g. 08:00–12:00, 13:00–17:00]", note: "All departments" },
    { service: "Out of hours — weekdays",        time: "[FILL IN — e.g. 17:00–08:00]",              note: "Urgent requests only" },
    { service: "Weekends and public holidays",   time: "[FILL IN]",                                  note: "Urgent requests only" },
    { service: "Phlebotomy / specimen reception",time: "[FILL IN]",                                  note: "" },
    { service: "Result dispatch",                time: "[FILL IN]",                                  note: "Results also available in SchuyNet as soon as authorised" }
  ],

  hoursNotes: [
    "Outside full-service hours, only urgent (STAT) tests are performed. Telephone the on-call scientist before sending an urgent specimen.",
    "[FILL IN — any local rule about what counts as urgent.]"
  ],

  /* --- Contacts -------------------------------------------------------- */
  // One row per department or contact point.
  contacts: [
    { name: "Specimen reception",  phone: "[FILL IN]", extension: "[FILL IN]", email: "[FILL IN]" },
    { name: "Biochemistry",        phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Haematology",         phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Microbiology",        phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Blood Bank",          phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Molecular Biology",   phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "On-call (after hours)", phone: "[FILL IN]", extension: "", email: "" }
  ],

  address: "[FILL IN — street address, Dili, Timor-Leste]",

  /* --- SchuyNet / LIMS panel ------------------------------------------- */
  limsPanel: {
    heading: "Results in SchuyNet",
    body: [
      "SchuyNet is the secure web portal where doctors, nurses and authorised staff view and print pathology results. Results appear in SchuyNet as soon as they are authorised by the laboratory.",
      "Only qualified staff may authorise and release results. Log in with your own identification and password — passwords must never be shared.",
      "Access to stored patient data for research requires ethics approval and written permission."
    ],
    linkLabel: "Open SchuyNet",
    url: "[FILL IN — SchuyNet intranet address, or leave as-is to hide the link]"
  }

};
