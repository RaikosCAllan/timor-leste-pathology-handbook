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

  /* --- Draft notice ------------------------------------------------------
     While show is true, the site displays a red banner on every page view, a
     DRAFT chip beside the title, and a [DRAFT] prefix in the browser tab.

     SET show TO false ONLY when the handbook has been completed, clinically
     verified and formally approved by the Ministry of Health. The checklist
     is in README.md under "Before this banner can be removed".

     Dismissing the banner hides it for that page view only. It returns on
     reload, deliberately: it is a clinical safety warning, not a cookie
     notice.                                                                */
  draftNotice: {
    show: true,
    heading: "Working draft — not for clinical use",
    body: [
      "This handbook is still being written. Its reference ranges, critical values and specimen requirements have not been verified by a qualified scientist, and it has not been approved by the Ministry of Health.",
      "Do not use it for clinical decisions. For any reference range or result, the SchuyLab report is the authoritative source. If you are unsure about a test or a specimen, telephone the laboratory."
    ],
    dismissible: true
  },

  /* --- Identity -------------------------------------------------------- */
  organisation: "Laboratório da Saúde do INSP-TL",
  organisationShort: "LNS",
  parentBody: "Ministério da Saúde, Dili, Timor-Leste",
  siteTitle: "Pathology Services Handbook",
  tagline: "Laboratory test directory, specimen requirements and reporting guidance for clinicians and ward staff across Timor-Leste.",

  // Logos at the left of the header, shown in the order listed. Add, remove
  // or reorder freely. Paths are relative to index.html, so they must start
  // with assets/ - an absolute path like /Users/... works only on one machine
  // and breaks on the intranet, the USB and GitHub Pages.
  logos: [
    { src: "assets/img/MOH_logo_2026.jpg",     alt: "Ministerio da Saude" },
    { src: "assets/img/insp_tl_logo_2026.png", alt: "INSP-TL" },
    { src: "assets/img/LNS.logo.PNG",          alt: "Laboratorio Nacional da Saude" },
    { src: "assets/img/republica-democratica-timor-leste-logo-png_seeklogo-199783.png",
      alt: "Republica Democratica de Timor-Leste" }
  ],

  // Flag at the far right of the header. Set to "" to hide it.
  flag: { src: "assets/img/flag-timor-leste.svg", alt: "Flag of Timor-Leste" },

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
    { service: "Full service — weekdays",        time: "08:00–12:00, 14:00–17:30", note: "All departments" },
    { service: "Out of hours — weekdays",        time: "17:00–07:00",              note: "No service" },
    { service: "Weekends and public holidays",   time: "09:00–17:00",              note: "Confirm with laboratory" },
    { service: "Phlebotomy / specimen reception",time: "08:00–12:00, 14:00–16:30",              note: "Weekdays" },
    { service: "Result dispatch",                time: "08:00–12:00, 14:00–17:30",              note: "Results also available in SchuyNet as soon as authorised" }
  ],

  hoursNotes: [
    "Outside full-service hours, only urgent (STAT) tests are performed at Laboratorio Hospital Nacional Guido Valadares",
    "See test list for urgent and critical test samples"
  ],

  /* --- Contacts -------------------------------------------------------- */
  // One row per department or contact point.
  contacts: [
    { name: "Specimen reception",  phone: "331 0151", extension: "+670", email: "[FILL IN]" },
    { name: "Biochemistry",        phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Haematology",         phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Microbiology",        phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "Blood Bank",          phone: "73502087", extension: "563", email: "" },
    { name: "Molecular Biology",   phone: "[FILL IN]", extension: "[FILL IN]", email: "" },
    { name: "On-call (after hours)", phone: "[FILL IN]", extension: "", email: "" }
  ],

  address: "Rua Bidau, Toko Baru, Dili, Timor-Leste",

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
