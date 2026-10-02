/* =========================================================================
   app.js — Pathology Services Handbook
   -------------------------------------------------------------------------
   Renders the page from the data files in /data. You should not normally
   need to edit this file. Everything you fill in lives in /data.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------- i18n helper --- */
  var LANG = (window.SITE && window.SITE.defaultLanguage) || "en";

  // Resolve a value that may be a plain string or { en:..., tet:... }
  function t(v) {
    if (v === null || v === undefined) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (Array.isArray(v)) return v.map(t);
    if (typeof v === "object") {
      if (v[LANG] !== undefined && v[LANG] !== "") return t(v[LANG]);
      if (v.en !== undefined) return t(v.en);
    }
    return "";
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Wrap [FILL IN ...] placeholders so they are visibly unfinished.
  function fmt(s) {
    return esc(s).replace(/\[FILL IN[^\]]*\]/g, function (m) {
      return '<span class="placeholder">' + m + "</span>";
    }).replace(/\n/g, "<br>");   // line breaks entered in the form
  }

  function has(v) {
    if (v === null || v === undefined) return false;
    var r = t(v);
    if (Array.isArray(r)) return r.filter(function (x) { return x && String(x).trim(); }).length > 0;
    return String(r).trim() !== "";
  }

  // Render a value as a <p> or a <ul>, whichever fits.
  function body(v) {
    var r = t(v);
    if (Array.isArray(r)) {
      if (r.length === 1) return "<p>" + fmt(r[0]) + "</p>";
      return "<ul>" + r.map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul>";
    }
    return "<p>" + fmt(r) + "</p>";
  }

  function el(id) { return document.getElementById(id); }
  function set(id, html) { var n = el(id); if (n) n.innerHTML = html; }

  /* =====================================================================
     HEADER / FOOTER / ABOUT
     ===================================================================== */
  function renderChrome() {
    var S = window.SITE || {};
    document.title = t(S.siteTitle) + " — " + t(S.organisationShort || S.organisation);

    set("brandOrg", esc(t(S.organisation)));
    set("brandTitle", esc(t(S.siteTitle)));
    set("brandParent", esc(t(S.parentBody)));
    set("heroTagline", fmt(t(S.tagline)));

    // Header logos. site.js -> logos: [{ src, alt, href }], shown left to
    // right in the order listed. A single logo: "path" still works. With
    // neither, the organisation initials are shown instead.
    var logoBox = el("brandLogos");
    if (logoBox) {
      logoBox.innerHTML = "";
      var logoList = (S.logos && S.logos.length) ? S.logos
                   : (S.logo ? [{ src: S.logo, alt: t(S.organisation) + " logo" }] : []);
      if (!logoList.length) {
        var mark = document.createElement("div");
        mark.className = "brand-logo brand-logo-initials";
        mark.textContent = initials(t(S.organisationShort || S.organisation));
        logoBox.appendChild(mark);
      }
      logoList.forEach(function (item) {
        if (!item || !item.src) return;
        var tile = document.createElement(item.href ? "a" : "div");
        tile.className = "brand-logo";
        if (item.href) { tile.href = item.href; tile.target = "_blank"; tile.rel = "noopener"; }
        var img = new Image();
        img.alt = t(item.alt) || "";
        // A missing file would otherwise leave an empty white tile. If every
        // logo is missing, fall back to the organisation initials.
        img.onerror = function () {
          if (tile.parentNode) tile.parentNode.removeChild(tile);
          if (!logoBox.children.length) {
            var fb = document.createElement("div");
            fb.className = "brand-logo brand-logo-initials";
            fb.textContent = initials(t(S.organisationShort || S.organisation));
            logoBox.appendChild(fb);
          }
        };
        img.src = item.src;
        tile.appendChild(img);
        logoBox.appendChild(tile);
      });
    }

    // Flag at the far right of the header. site.js -> flag: { src, alt }.
    var flagBox = el("headerFlag");
    if (flagBox) {
      flagBox.innerHTML = "";
      flagBox.hidden = true;
      var flag = typeof S.flag === "string" ? { src: S.flag } : S.flag;
      if (flag && flag.src) {
        var fimg = new Image();
        fimg.alt = t(flag.alt) || "";
        fimg.onerror = function () { flagBox.hidden = true; };
        fimg.src = flag.src;
        flagBox.appendChild(fimg);
        flagBox.hidden = false;
      }
    }

    if (S.handbookPdf) {
      var dl = el("handbookDownload");
      dl.href = S.handbookPdf; dl.hidden = false;
    }

    // Language toggle
    if (S.showLanguageToggle && S.languages && S.languages.length > 1) {
      var box = el("langToggle");
      box.hidden = false;
      S.languages.forEach(function (l) {
        var b = document.createElement("button");
        b.type = "button";
        b.textContent = l.label;
        b.setAttribute("aria-pressed", l.code === LANG ? "true" : "false");
        b.onclick = function () { LANG = l.code; renderAll(); };
        box.appendChild(b);
      });
    }

    renderDraftNotice(S.draftNotice);

    set("footerOrg", esc(t(S.organisation)));
    set("footerParent", esc(t(S.parentBody)) + (S.address ? " &middot; " + fmt(t(S.address)) : ""));
    set("footerMeta",
      row("Source", t(S.sourceDocument)) +
      row("Last reviewed", t(S.lastReviewed)) +
      row("Next review", t(S.nextReview)) +
      row("Owner", t(S.documentOwner))
    );

    function row(k, v) { return v ? "<dt>" + esc(k) + "</dt><dd>" + fmt(v) + "</dd>" : ""; }

    // The draft notice. While draftNotice.show is true the page carries a
    // banner, a DRAFT chip beside the title, and a [DRAFT] tab prefix.
    // Dismissing hides it for this page view only — it returns on reload,
    // deliberately, because it is a clinical safety warning and not a cookie
    // notice.
    function renderDraftNotice(D) {
      var box = el("draftNotice"), chip = el("draftChip");
      if (!D || !D.show) { return; }

      document.title = "[DRAFT] " + document.title;
      if (chip) chip.hidden = false;
      if (!box) return;

      var paras = t(D.body);
      if (!Array.isArray(paras)) paras = paras ? [paras] : [];

      box.innerHTML =
        '<div class="wrap draft-inner"><div>' +
          '<p class="draft-heading">' + esc(t(D.heading) || "Working draft") + "</p>" +
          paras.map(function (x) { return "<p>" + fmt(x) + "</p>"; }).join("") +
        "</div>" +
        (D.dismissible === false ? "" :
          '<button type="button" class="draft-dismiss" id="draftDismiss">Dismiss</button>') +
        "</div>";
      box.hidden = false;

      var btn = el("draftDismiss");
      if (btn) btn.addEventListener("click", function () { box.hidden = true; });
    }
    function initials(s) {
      s = String(s).trim();
      // An unfilled placeholder would produce nonsense initials, and an empty
      // name an empty circle. Show a neutral mark in both cases.
      if (!s || /\[FILL IN/i.test(s)) return "LAB";
      if (s.length <= 4 && s.indexOf(" ") === -1) return s.toUpperCase();
      return s.split(/\s+/).map(function (w) { return w[0] || ""; })
              .join("").replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase() || "LAB";
    }
  }

  function renderAbout() {
    var S = window.SITE || {};
    set("aboutIntro", fmt(t(S.aboutIntro)));
    set("missionText", fmt(t(S.mission)));
    set("visionList", (t(S.vision) || []).map(function (v) { return "<li>" + fmt(v) + "</li>"; }).join(""));

    set("deptTable", (window.DEPARTMENTS || []).map(function (d) {
      return "<tr><td><b>" + esc(t(d.name)) + "</b></td><td>" + fmt(t(d.services)) +
             "</td><td>" + fmt(t(d.location)) + "</td><td>" + fmt(t(d.contact)) + "</td></tr>";
    }).join(""));

    set("aboutNotes", (S.notes || []).map(function (n) {
      return '<div class="note-block"><h4>' + esc(t(n.heading)) + "</h4>" +
             (t(n.body) || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") + "</div>";
    }).join(""));

    var L = S.limsPanel;
    if (L) {
      var link = (L.url && L.url.indexOf("[FILL IN") !== 0)
        ? '<p><a href="' + esc(L.url) + '">' +
          esc(t(L.linkLabel) || "Open the results portal") + "</a></p>" : "";
      set("limsPanel", "<h3>" + esc(t(L.heading)) + "</h3>" +
        (t(L.body) || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") + link);
    }
  }

  /* =====================================================================
     TEST DIRECTORY
     ===================================================================== */
  var FLAG_LABEL = {
    critical: ["CRITICAL", "badge-critical"],
    stat: ["STAT", "badge-stat"],
    "send-away": ["SEND-AWAY", "badge-away"],
    pending: ["PENDING", "badge-pending"]
  };

  /* --- Recently added or changed ---------------------------------------
     Driven by the `added` and `updated` dates on each test, so the marker
     expires on its own. A manual "new" flag someone must remember to clear
     is still there two years later.

     Windows come from site.whatsNew; the defaults below apply if it is
     absent, so no configuration is needed to get sensible behaviour.      */
  function days(v) {
    var s = String(t(v) || "").trim();
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(s)) return null;   // YYYY-MM or YYYY-MM-DD
    var d = new Date(s.length === 7 ? s + "-01" : s);
    if (isNaN(d)) return null;
    return Math.floor((Date.now() - d.getTime()) / 86400000);
  }

  function recency(test) {
    var cfg = (window.SITE && window.SITE.whatsNew) || {};
    if (cfg.show === false) return null;
    var newFor = cfg.newForDays === undefined ? 60 : cfg.newForDays;
    var updFor = cfg.updatedForDays === undefined ? 30 : cfg.updatedForDays;

    var a = days(test.added), u = days(test.updated);
    if (a !== null && a >= 0 && a <= newFor) return "new";
    if (u !== null && u >= 0 && u <= updFor) return "updated";
    return null;
  }

  // The LIMS code field. `limsCode` is the portable name; `schuylabCode` is
  // accepted so instances written against the earlier schema still work.
  function code(test) {
    return has(test.limsCode) ? test.limsCode : test.schuylabCode;
  }

  function deptName(id) {
    var d = (window.DEPARTMENTS || []).filter(function (x) { return x.id === id; })[0];
    return d ? t(d.name) : (id || "");
  }

  function appendixTitle(id) {
    var a = (window.APPENDICES || []).filter(function (x) { return x.id === id; })[0];
    return a ? "Appendix " + a.number : id;
  }

  // Everything a test should be searchable by.
  function haystack(test) {
    var parts = [t(test.name), t(code(test)), t(test.sampleType),
                 t(test.containerColour), deptName(test.department), t(test.summary),
                 t(test.description)];
    parts = parts.concat(t(test.synonyms) || [], t(test.indications) || [],
                         t(test.diseaseAssociations) || []);
    return parts.join(" • ").toLowerCase();
  }

  var TESTS = (window.TESTS || []).slice().sort(function (a, b) {
    return t(a.name).localeCompare(t(b.name));
  });

  function field(label, value, full) {
    if (!has(value)) return "";
    return '<div class="field' + (full ? " field-full" : "") + '"><h4>' + esc(label) + "</h4>" + body(value) + "</div>";
  }

  function testCard(test, query) {
    var flags = (test.flags || []).map(function (f) {
      var d = FLAG_LABEL[f]; if (!d) return "";
      return '<b class="badge ' + d[1] + '">' + d[0] + "</b>";
    }).join(" ");

    // Administrative, not clinical — styled apart so it cannot be mistaken
    // for a warning about the test itself.
    var r = recency(test);
    var recentMark = r
      ? '<b class="mark mark-' + r + '" title="' +
        (r === "new" ? "Added to the handbook recently"
                     : "Changed recently — check what differs") + '">' +
        (r === "new" ? "NEW" : "UPDATED") + "</b>"
      : "";

    var tat = test.turnaround || {};
    var tatHtml = "";
    if (has(tat.routine)) tatHtml += "<b>" + fmt(t(tat.routine)) + "</b>Routine";
    if (has(tat.urgent)) tatHtml += "<br><b>" + fmt(t(tat.urgent)) + "</b>Urgent";

    var meta = [];
    if (has(test.department)) meta.push("<b>" + esc(deptName(test.department)) + "</b>");
    if (has(code(test))) meta.push("Code " + esc(t(code(test))));
    if (has(test.sampleType)) meta.push(esc(t(test.sampleType)));
    if (has(test.synonyms)) meta.push("Also: " + esc((t(test.synonyms) || []).join(", ")));

    var links = (test.appendixRefs || []).map(function (a) {
      return '<a href="#' + esc(a) + '">' + esc(appendixTitle(a)) + "</a>";
    }).join("");

    var organisms = "";
    if (test.organismsReported && test.organismsReported.length) {
      organisms = '<div class="field field-full"><h4>Organisms reported</h4>' +
        test.organismsReported.map(function (g) {
          return '<div class="organism-group"><b>' + esc(t(g.group)) + "</b><ul>" +
            (t(g.items) || []).map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul>" +
            (g.note ? '<p class="organism-note">' + fmt(t(g.note)) + "</p>" : "") + "</div>";
        }).join("") + "</div>";
    }

    var html =
      '<details class="test-card" id="test-' + esc(test.id) + '">' +
        "<summary>" +
          '<div><div class="test-head-name">' + hl(esc(t(test.name)), query) + " " + recentMark + flags + "</div>" +
          '<div class="test-head-meta">' + meta.join(" &nbsp;·&nbsp; ") + "</div></div>" +
          '<div class="test-head-tat">' + tatHtml + "</div>" +
          (has(test.summary) ? '<div class="test-head-summary">' + fmt(t(test.summary)) + "</div>" : "") +
        "</summary>" +
        '<div class="test-body"><div class="test-fields">' +
          field("Test description", test.description, true) +
          field("Clinical use / indications", test.indications) +
          field("Reference range", test.referenceRange) +
          field("Sample requirements", test.sampleRequirements) +
          field("Container", test.containerColour) +
          field("Storage / transport", test.storageTransport) +
          field("Rejection", test.rejection) +
          field("Methodology", test.methodology) +
          field("Analytical limitations", test.analyticalLimitations) +
          field("Critical / alert", test.criticalAlert) +
          field("Disease associations", test.diseaseAssociations) +
          field("Conversion factors", test.conversionFactors) +
          organisms +
          (links ? '<div class="field field-full"><h4>See also</h4><div class="appendix-links">' + links + "</div></div>" : "") +
          (has(test.lastReviewed) ? '<div class="field field-full"><h4>Last reviewed</h4>' + body(test.lastReviewed) + "</div>" : "") +
          (has(test.added) || has(test.updated)
            ? '<div class="field field-full"><h4>Handbook history</h4><p>' +
              (has(test.added) ? "Added " + fmt(t(test.added)) : "") +
              (has(test.added) && has(test.updated) ? " &middot; " : "") +
              (has(test.updated) ? "Last changed " + fmt(t(test.updated)) : "") +
              "</p></div>"
            : "") +
        "</div></div>" +
      "</details>";
    return html;
  }

  function hl(text, q) {
    if (!q || q.length < 2) return text;
    try {
      return text.replace(new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>");
    } catch (e) { return text; }
  }

  function renderDirectory() {
    var sel = el("deptFilter");
    if (sel && sel.options.length <= 1) {
      (window.DEPARTMENTS || []).forEach(function (d) {
        var o = document.createElement("option");
        o.value = d.id; o.textContent = t(d.name);
        sel.appendChild(o);
      });
    }
    filter();
  }

  function filter() {
    var q = (el("testSearch").value || "").trim().toLowerCase();
    var dept = el("deptFilter").value;
    var flag = el("flagFilter").value;

    var out = TESTS.filter(function (x) {
      if (dept && x.department !== dept) return false;
      if (flag === "recent") { if (!recency(x)) return false; }
      else if (flag && (x.flags || []).indexOf(flag) === -1) return false;
      if (q && haystack(x).indexOf(q) === -1) return false;
      return true;
    });

    el("testResults").innerHTML = out.map(function (x) { return testCard(x, q); }).join("");
    el("emptyState").hidden = out.length > 0;
    el("resultCount").textContent =
      out.length + (out.length === 1 ? " test" : " tests") +
      (out.length === TESTS.length ? " in the directory" : " of " + TESTS.length);
  }

  /* =====================================================================
     REQUEST / CRITERIA
     ===================================================================== */
  function renderRequest() {
    var R = window.REQUEST || {};

    set("requestSteps", (R.steps || []).map(function (s) {
      return "<li><div><h4>" + fmt(t(s.title)) + "</h4><p>" + fmt(t(s.body)) + "</p></div></li>";
    }).join(""));

    set("formsTable", (R.forms || []).map(function (f) {
      // A bare file name is looked for in assets/downloads/; a full path or web address is used as written.
      var href = f.file && (/[\/:]/.test(f.file) ? f.file : "assets/downloads/" + f.file);
      var name = f.file ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(t(f.name)) + "</a>" : "<b>" + esc(t(f.name)) + "</b>";
      return "<tr><td>" + name + "</td><td>" + fmt(t(f.note)) + "</td></tr>";
    }).join(""));

    if (R.outOfHours) {
      set("outOfHours", "<h3>" + esc(t(R.outOfHours.heading)) + "</h3>" +
        (t(R.outOfHours.body) || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join(""));
    }
    if (R.criticalResults) {
      set("criticalResults", "<h3>" + esc(t(R.criticalResults.heading)) + "</h3>" +
        (t(R.criticalResults.body) || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join(""));
    }

    var A = R.acceptance;
    if (A) {
      set("acceptancePanel", "<h3>" + esc(t(A.heading)) + "</h3><p>" + fmt(t(A.intro)) + "</p><ul class='tidy-list'>" +
        (t(A.items) || []).map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul>");
    }

    var J = R.rejection;
    if (J) {
      set("rejectionPanel", "<h3>" + esc(t(J.heading)) + "</h3><p>" + fmt(t(J.intro)) + "</p>" +
        (J.groups || []).map(function (g) {
          return "<h4 style='margin:14px 0 5px;font-size:14px;color:var(--ink-soft)'>" + esc(t(g.group)) + "</h4><ul class='tidy-list'>" +
            (t(g.items) || []).map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul>";
        }).join("") +
        (J.footnote ? "<p class='small' style='margin-top:14px'>" + fmt(t(J.footnote)) + "</p>" : ""));
    }
  }

  /* =====================================================================
     COLLECTION
     ===================================================================== */
  function renderCollection() {
    var C = window.COLLECTION || {};
    set("collectionIntro", fmt(t(C.intro)));

    set("tubeTable", (C.orderOfDraw || []).map(function (r) {
      var visual = r.image
        ? '<img class="tube-img" src="' + esc(r.image) + '" alt="">'
        : '<span class="tube-swatch" style="background:' + esc(r.swatch || "#fff") + '"></span>';
      return "<tr><td>" + esc(t(r.order)) + "</td><td>" + visual + "<b>" + esc(t(r.colour)) + "</b></td><td>" +
             fmt(t(r.additive)) + "</td><td>" + fmt(t(r.uses)) + "</td></tr>";
    }).join(""));

    set("collectionNotes", ["keyNotes", "precautions", "specialConsiderations"].map(function (k) {
      var b = C[k]; if (!b) return "";
      return '<div class="panel"><h3>' + esc(t(b.heading)) + "</h3><ul class='tidy-list'>" +
        (t(b.items) || []).map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul></div>";
    }).join(""));
  }

  /* =====================================================================
     HOURS
     ===================================================================== */
  function renderHours() {
    var S = window.SITE || {};
    set("hoursTable", (S.hours || []).map(function (h) {
      return "<tr><td><b>" + esc(t(h.service)) + "</b></td><td>" + fmt(t(h.time)) + "</td><td>" + fmt(t(h.note)) + "</td></tr>";
    }).join(""));
    set("hoursNotes", (t(S.hoursNotes) || []).map(function (n) { return "<li>" + fmt(n) + "</li>"; }).join(""));
    set("contactsTable", (S.contacts || []).map(function (c) {
      var email = has(c.email) ? (String(t(c.email)).indexOf("@") > -1
        ? '<a href="mailto:' + esc(t(c.email)) + '">' + esc(t(c.email)) + "</a>" : fmt(t(c.email))) : "—";
      return "<tr><td><b>" + esc(t(c.name)) + "</b></td><td>" + fmt(t(c.phone) || "—") + "</td><td>" +
             fmt(t(c.extension) || "—") + "</td><td>" + email + "</td></tr>";
    }).join(""));
    set("addressLine", has(S.address) ? fmt(t(S.address)) : "");
  }

  /* =====================================================================
     APPENDICES
     ===================================================================== */
  function renderBlock(b) {
    switch (b.type) {
      case "text":
        return (Array.isArray(t(b.body)) ? t(b.body) : [t(b.body)])
          .map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("");
      case "list":
        return (b.heading ? "<h4>" + esc(t(b.heading)) + "</h4>" : "") +
          "<ul class='tidy-list'>" + (t(b.items) || []).map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul>";
      case "table":
        return (b.heading ? "<h4>" + esc(t(b.heading)) + "</h4>" : "") +
          "<div class='table-scroll'><table class='data-table'><thead><tr>" +
          (b.columns || []).map(function (c) { return "<th>" + esc(t(c)) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          (b.rows || []).map(function (r) {
            return "<tr>" + r.map(function (c) { return "<td>" + fmt(t(c)) + "</td>"; }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>";
      case "note":
        return "<p class='callout'>" + fmt(t(b.body)) + "</p>";
      case "file":
        return b.file ? '<p><a href="' + esc(b.file) + '">' + fmt(t(b.label)) + "</a></p>"
                      : "<p>" + fmt(t(b.label)) + "</p>";
      case "image":
        return b.file
          ? '<figure><img src="' + esc(b.file) + '" alt="' + esc(t(b.caption)) + '">' +
            (b.caption ? "<figcaption>" + fmt(t(b.caption)) + "</figcaption>" : "") + "</figure>"
          : "<p>" + fmt(t(b.caption)) + "</p>";
      default:
        return "";
    }
  }

  function renderAppendices() {
    var A = window.APPENDICES || [];
    set("appendixIndex", A.map(function (a) {
      return '<a href="#' + esc(a.id) + '">' + esc(a.number) + ". " + esc(t(a.title)) + "</a>";
    }).join(""));

    set("appendixBody", A.map(function (a) {
      var link = a.crossLink ? ' <a href="' + esc(a.crossLink) + '" style="font-size:13px">Go to section &rarr;</a>' : "";
      return '<section class="appendix" id="' + esc(a.id) + '">' +
        "<h3><span>Appendix " + esc(a.number) + "</span>" + esc(t(a.title)) + link + "</h3>" +
        (a.blocks || []).map(renderBlock).join("") + "</section>";
    }).join(""));

    set("referencesBody", (window.REFERENCES || []).map(function (g) {
      return '<div class="reference-group"><h4>' + esc(t(g.group)) + "</h4><ul>" +
        (t(g.items) || []).map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul></div>";
    }).join(""));
  }

  /* =====================================================================
     WIRING
     ===================================================================== */
  function renderAll() {
    renderChrome();
    renderAbout();
    renderDirectory();
    renderRequest();
    renderCollection();
    renderHours();
    renderAppendices();
  }

  function wire() {
    el("testSearch").addEventListener("input", filter);
    el("deptFilter").addEventListener("change", filter);
    el("flagFilter").addEventListener("change", filter);
    el("clearFilters").addEventListener("click", function () {
      el("testSearch").value = ""; el("deptFilter").value = ""; el("flagFilter").value = "";
      filter();
    });

    function heroSearch() {
      var v = el("heroSearch").value;
      el("testSearch").value = v;
      filter();
      document.getElementById("directory").scrollIntoView({ behavior: "smooth" });
    }
    el("heroSearchBtn").addEventListener("click", heroSearch);
    el("heroSearch").addEventListener("keydown", function (e) { if (e.key === "Enter") heroSearch(); });
    Array.prototype.forEach.call(document.querySelectorAll(".chip-link"), function (c) {
      c.addEventListener("click", function () { el("heroSearch").value = c.dataset.q; heroSearch(); });
    });

    // Highlight the nav item for the section in view.
    var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
    function onScroll() {
      var y = window.scrollY + 160, active = 0;
      sections.forEach(function (s, i) { if (s && s.offsetTop <= y) active = i; });
      links.forEach(function (a, i) { a.classList.toggle("active", i === active); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Open a test card if the page was opened with #test-<id>
    if (location.hash.indexOf("#test-") === 0) {
      var d = document.getElementById(location.hash.slice(1));
      if (d) { d.open = true; d.scrollIntoView(); }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    wire();
  });
})();
