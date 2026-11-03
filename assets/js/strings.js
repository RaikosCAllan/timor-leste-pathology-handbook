/* =========================================================================
   strings.js — the wording of the page itself (menus, headings, buttons,
   field labels). The handbook content is in /data; this file is only the
   words around it.
   -------------------------------------------------------------------------
   TO TRANSLATE
   1. Copy the whole `en: { ... }` block and paste it below, changing `en`
      to the language code used in data/site.js (for example `pt` or `tet`).
   2. Translate the text on the RIGHT of each colon. Never change the key on
      the left — the page looks the words up by that key.
   3. Keep anything in {curly brackets} exactly as it is. The page puts a
      number, a code or a date there. Move it within the sentence if your
      language needs a different word order.
   4. A key you leave out, or leave as "", shows in English. You can
      translate a little at a time.
   5. Run  node tools/check-data.js  — it lists any key that is missing.
   Translations must be checked by a qualified laboratory reviewer before
   the language is switched on (data/site.js → showLanguageToggle).
   ========================================================================= */
window.UI_STRINGS = {

  en: {
    /* --- Page and header -------------------------------------------- */
    "page.description":      "Laboratory test directory, specimen requirements and reporting guidance.",
    "page.skip":             "Skip to content",
    "header.download":       "Download full handbook (PDF)",
    "header.logoAlt":        "{org} logo",
    "draft.chip":            "DRAFT",
    "draft.titlePrefix":     "[DRAFT]",
    "draft.heading":         "Working draft",
    "draft.dismiss":         "Dismiss",

    /* --- Menu --------------------------------------------------------- */
    "nav.label":             "Main",
    "nav.about":             "About Us",
    "nav.directory":         "Test Directory",
    "nav.request":           "How to Request",
    "nav.collection":        "Specimen Collection",
    "nav.criteria":          "Specimen Criteria",
    "nav.hours":             "Hours & Contact",
    "nav.appendices":        "Appendices",

    /* --- Search box at the top ---------------------------------------- */
    "hero.searchLabel":      "Search the test directory",
    "hero.searchPlaceholder":"Search a test — name, synonym, sample type or department",
    "hero.searchButton":     "Search",
    "hero.try":              "Try",

    /* --- About Us ----------------------------------------------------- */
    "about.heading":         "About Us",
    "about.vision":          "Vision",
    "about.mission":         "Mission",
    "about.departments":     "Departments and services",
    "about.portalLink":      "Open the results portal",

    /* --- Test Directory ----------------------------------------------- */
    "directory.heading":     "Test Directory",
    "directory.lead":        "Search by test name, synonym, sample type, {lims} Code or department. Select a test to see full specimen requirements, reference range and turnaround time.",
    "filter.search":         "Search",
    "filter.searchPlaceholder": "e.g. APTT, citrate, sepsis",
    "filter.department":     "Department",
    "filter.allDepartments": "All departments",
    "filter.show":           "Show",
    "filter.allTests":       "All tests",
    "filter.critical":       "Critical-value tests",
    "filter.stat":           "STAT available",
    "filter.sendAway":       "Referred / send-away",
    "filter.pending":        "Not yet available",
    "filter.recent":         "Recently added or changed",
    "filter.clear":          "Clear",
    "directory.empty":       "Nothing matched that search. Try fewer words or an abbreviation, or clear the filters.",
    "count.allOne":          "{n} test in the directory",
    "count.all":             "{n} tests in the directory",
    "count.someOne":         "{n} test of {total}",
    "count.some":            "{n} tests of {total}",

    /* Badges. Short, capitals — they sit beside the test name. */
    "badge.critical":        "CRITICAL",
    "badge.stat":            "STAT",
    "badge.sendAway":        "SEND-AWAY",
    "badge.pending":         "PENDING",
    "badge.new":             "NEW",
    "badge.updated":         "UPDATED",
    "legend.critical":       "Telephoned to the requesting clinician when the result meets the alert limit.",
    "legend.stat":           "Urgent processing available on request.",
    "legend.sendAway":       "Not performed here. Referred to an external laboratory, so expect days to weeks.",
    "legend.pending":        "Not in service yet. Telephone the department before collecting a specimen.",
    "legend.new":            "Recently added to the handbook.",
    "legend.updated":        "Recently changed — worth re-reading if you knew the old entry.",
    "badge.newTitle":        "Added to the handbook recently",
    "badge.updatedTitle":    "Changed recently — check what differs",

    /* --- One test card ------------------------------------------------ */
    "card.limsCode":         "{lims} Code {code}",
    "card.also":             "Also: {list}",
    "card.routine":          "Routine",
    "card.urgent":           "Urgent",
    "field.description":     "Test description",
    "field.indications":     "Clinical use / indications",
    "field.referenceRange":  "Reference range",
    "field.sampleRequirements": "Sample requirements",
    "field.container":       "Container",
    "field.storageTransport":"Storage / transport",
    "field.turnaround":      "Turnaround time",
    "field.rejection":       "Rejection",
    "field.methodology":     "Methodology",
    "field.analyticalLimitations": "Analytical limitations",
    "field.criticalAlert":   "Critical / alert",
    "field.diseaseAssociations": "Disease associations",
    "field.conversionFactors": "Conversion factors",
    "field.organisms":       "Organisms reported",
    "field.seeAlso":         "See also",
    "field.lastReviewed":    "Last reviewed",
    "field.history":         "Handbook history",
    "history.added":         "Added {date}",
    "history.updated":       "Last changed {date}",

    /* --- How to Request ----------------------------------------------- */
    "request.heading":       "How to Request a Test",
    "request.forms":         "Request forms",
    "col.form":              "Form",
    "col.usedFor":           "Used for",

    /* --- Specimen Collection ------------------------------------------ */
    "collection.heading":    "Specimen Collection Quick Guide",
    "collection.orderOfDraw":"Order of draw and tube reference",
    "col.order":             "Order",
    "col.tube":              "Tube type / colour",
    "col.additive":          "Additive and volume",
    "col.uses":              "Primary uses",

    /* --- Specimen Criteria -------------------------------------------- */
    "criteria.heading":      "Specimen Criteria",

    /* --- Hours & Contact ---------------------------------------------- */
    "hours.heading":         "Laboratory Hours & Contact",
    "hours.opening":         "Opening hours",
    "hours.contacts":        "Contacts",
    "col.department":        "Department",
    "col.services":          "Services",
    "col.location":          "Location",
    "col.contact":           "Contact",
    "col.service":           "Service",
    "col.hours":             "Hours",
    "col.notes":             "Notes",
    "col.telephone":         "Telephone",
    "col.ext":               "Ext.",
    "col.email":             "Email",

    /* --- Appendices --------------------------------------------------- */
    "appendices.heading":    "Appendices",
    "appendices.references": "References",
    "appendix.label":        "Appendix {n}",
    "appendix.goTo":         "Go to section →",

    /* --- Footer ------------------------------------------------------- */
    "footer.source":         "Source",
    "footer.lastReviewed":   "Last reviewed",
    "footer.nextReview":     "Next review",
    "footer.owner":          "Owner"
  }

  /* Add the next language here, after a comma:
  , pt: {
    "nav.about": "Sobre nós",
    ...
  }
  */
};
