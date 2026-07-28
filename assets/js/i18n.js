/* ==========================================================================
   Flexycle Powders — i18n
   Elements are marked with data-i18n / data-i18n-html / data-i18n-placeholder
   / data-i18n-aria-label attributes holding a dot-path into FLX_I18N[lang].
   ========================================================================== */

window.FLX_I18N = {
  en: {
    nav: { home: "Home", products: "Products", company: "Company", career: "Career", contact: "Contact" },
    common: {
      skip: "Skip to content",
      readMore: "Learn more",
      viewGrades: "View the powder grades",
      talkToUs: "Talk to us",
      requestQuote: "Request a quote",
      printDatasheet: "Print / save as PDF",
      jumpTo: "Jump to"
    },
    footer: {
      tagline: "Recycled copper powder, engineered by grain size.",
      explore: "Explore",
      company: "Company",
      legal: "Legal",
      imprint: "Imprint",
      privacy: "Privacy policy",
      rights: "© 2026 Flexycle Powders. All rights reserved.",
      address: "Freiberg, Saxony, Germany"
    },
    home: {
      eyebrow: "Deep tech · recycled copper powder",
      title: "From Scrap to Powder. From Waste to Value.",
      titleHtml: "From Scrap to Powder.<br>From Waste to Value.",
      lede: "Flexycle Powders converts thin copper residues from battery and electronics manufacturing into high-performance powder — mechanically, at a fraction of the energy a melt process needs, sorted into six grades by particle size.",
      spectrumLabel: "Particle-size spectrum",
      spectrumCta: "See all six grades →",
      stats: [
        { value: "&gt;0.9", label: "sphericity" },
        { value: "100%", label: "regional supply chain" },
        { value: "&lt;20–150", label: "<span style=\"text-transform:none\">µm</span> particle size range" },
        { value: "Up to 99.95%", label: "copper purity" }
      ],
      process: {
        eyebrow: "The process",
        title: "Mechanical conversion, not melt atomisation.",
        lede: "Conventional copper powder is made by melting virgin cathode and atomising it with gas or water — an energy-intensive route that starts from primary metal. Flexycle takes thin metallic residues already close to the right form factor and refines them mechanically into calibrated powder."
      },
      compare: {
        conventional: {
          title: "Conventional atomisation",
          items: [
            "Starts from virgin cathode copper",
            "Melts metal at ~1085 °C, then atomises with gas or water",
            "High energy input per kilogram of powder",
            "Fixed morphology, limited grade differentiation"
          ]
        },
        flexycle: {
          title: "Flexycle Process",
          items: [
            "Starts from thin copper residues from battery &amp; electronics production",
            "No melting step — mechanical size reduction and classification",
            "Substantially lower energy input per kilogram",
            "Six calibrated grades, tuned by particle size and morphology"
          ]
        }
      },
      applications: {
        title: "Where Flexycle powder goes to work",
        items: [
          { title: "Additive manufacturing", desc: "Highly spherical FCP-AM feeds LPBF and DED systems for dense, pure-copper parts." },
          { title: "Electronics", desc: "FCP-20 sinters into fine conductive structures and components." },
          { title: "Battery technology", desc: "Production residues from battery manufacturing become feedstock again, closing the loop." },
          { title: "Powder metallurgy", desc: "FCP-PM's broad classification suits standard press-and-sinter routes, from bearings to structural parts." }
        ]
      },
      gallery: {
        title: "Application examples",
        lede: "A closer look at what each grade becomes in the field.",
        items: [
          "Electronics — sintered contacts and conductive pastes",
          "Binder Jetting — complex geometries in batch production",
          "LPBF — dense pure-copper parts",
          "EBM — high-conductivity functional parts",
          "Sintering — SPS-consolidated functional parts",
          "Powder metallurgy — bearings and structural parts"
        ]
      },
      cta: { title: "Get a sample sized to your process.", button: "Request a quote" }
    },
    products: {
      eyebrow: "Product range",
      title: "Six grades, one spectrum.",
      lede: "Every FCP grade sits at a defined position on the particle-size spectrum below — from ultrafine sintering powder to broad press-and-sinter granulate. Several grades' cuts overlap, so each gets its own row. Select a grade to jump to its datasheet.",
      spectrumHint: "Click a grade for its full datasheet",
      customFraction: "Need a cut outside these six? We also classify to custom particle-size fractions on request.",
      specLabels: {
        particleSize: "Particle size",
        sphericity: "Sphericity",
        morphology: "Morphology",
        apparentDensity: "Apparent density",
        tapDensity: "Tap density",
        bulkDensity: "Bulk density",
        specificSurface: "Specific surface",
        flowability: "Flowability (Hall)",
        greenStrength: "Green strength",
        copperContent: "Copper content",
        oxygenContent: "Oxygen content",
        consolidationRoute: "Consolidation route",
        feedstock: "Feedstock"
      },
      applicationsLabel: "Applications",
      fcp20: {
        eyebrow: "Sintering &amp; electronics · ultrafine",
        tagline: "Ultrafine powder for sinter-active electronics.",
        desc: "FCP-20 is classified below 20 µm for maximum specific surface area, giving it high sinter activity in conductive pastes, contacts and fine sintered structures.",
        specs: {
          particleSize: "&lt;20 µm",
          specificSurface: "High (BET)",
          tapDensity: "~3.8 g/cm³",
          copperContent: "≥99.8%",
          feedstock: "100% recycled"
        },
        applications: "Electronics, sintered contacts, conductive pastes"
      },
      fcpbj: {
        eyebrow: "Additive manufacturing · Binder Jetting",
        tagline: "Fine spherical powder calibrated for binder jetting.",
        desc: "Classified for consistent recoating and high green density in binder-jet printing, FCP-BJ supports fine feature resolution ahead of the sintering step to full density.",
        specs: {
          particleSize: "20–45 µm",
          flowability: "~16 s/50 g",
          apparentDensity: "~4.5 g/cm³",
          copperContent: "≥99.8%",
          feedstock: "100% recycled"
        },
        applications: "Binder jetting, complex geometries, batch AM production"
      },
      fcpam: {
        eyebrow: "Additive manufacturing · LPBF/DED",
        tagline: "Spherical powder built for laser processing.",
        desc: "Highly spherical and free-flowing, FCP-AM is calibrated for laser powder bed fusion and directed energy deposition, producing dense, pure-copper parts without the energy cost of virgin atomisation.",
        specs: {
          particleSize: "20–63 µm",
          sphericity: "&gt;0.9",
          apparentDensity: "~4.9 g/cm³",
          flowability: "~14 s/50 g",
          copperContent: "≥99.9%",
          oxygenContent: "≤400 ppm",
          feedstock: "100% recycled"
        },
        applications: "LPBF of pure-copper parts, DED, high-conductivity components"
      },
      fcpebm: {
        eyebrow: "Additive manufacturing · Electron Beam Melting",
        tagline: "Coarser spherical powder suited to electron-beam processing.",
        desc: "Calibrated for the larger beam spot and vacuum environment of electron beam melting, FCP-EBM balances flowability with reduced fines for stable powder-bed spreading.",
        specs: {
          particleSize: "63–100 µm",
          sphericity: "&gt;0.85",
          apparentDensity: "~5.1 g/cm³",
          copperContent: "≥99.9%",
          feedstock: "100% recycled"
        },
        applications: "EBM of copper components, high-conductivity parts"
      },
      fcpsi: {
        eyebrow: "Sintering · SPS &amp; pressureless",
        tagline: "Engineered for spark plasma and pressureless sintering.",
        desc: "FCP-Si is calibrated for direct consolidation via spark plasma sintering (SPS) or pressureless sintering routes, reaching high density without a separate pressing step.",
        specs: {
          particleSize: "45–150 µm",
          consolidationRoute: "SPS / pressureless sintering",
          apparentDensity: "~4.0 g/cm³",
          copperContent: "≥99.7%",
          feedstock: "100% recycled"
        },
        applications: "SPS-consolidated parts, pressureless-sintered components, functional structures"
      },
      fcppm: {
        eyebrow: "Powder metallurgy · press &amp; sinter",
        tagline: "Irregular morphology, built for green strength.",
        desc: "FCP-PM's irregular, dendritic particles interlock under pressure, giving strong green compacts for classic press-and-sinter routes. The broadest of the six grades, covering general powder-metallurgy use where a tight process-specific cut isn't required.",
        specs: {
          particleSize: "20–150 µm",
          morphology: "Irregular / dendritic",
          apparentDensity: "~2.6 g/cm³",
          greenStrength: "Good",
          copperContent: "≥99.7%",
          feedstock: "100% recycled"
        },
        applications: "Press &amp; sinter components, bearings, structural parts"
      }
    },
    company: {
      eyebrow: "Company",
      title: "Eight hundred and fifty years of mining, one new material loop.",
      lede: "Flexycle Powders was spun out of TU Bergakademie Freiberg — the world's oldest mining academy — in the town that has defined European metallurgy for over eight centuries.",
      story: "Freiberg has mined and processed metal since the 12th century. Flexycle continues that lineage with a different resource: not ore from the ground, but thin copper residues that today's battery and electronics industry produces in growing volumes. Our founding team, all research engineers from TU Bergakademie Freiberg, built a mechanical process that turns that residue directly into calibrated powder — skipping the melt step that conventional powder production depends on.",
      valuesTitle: "What we hold to",
      values: [
        { title: "Mechanical, not melted", desc: "Every process step avoids re-melting the metal, cutting energy demand at the source." },
        { title: "Closed-loop by design", desc: "Feedstock comes from production residues, not fresh mining — the loop closes before the metal ever becomes waste." },
        { title: "Calibrated, not generic", desc: "Six defined grades mean customers order by particle size and morphology, not a single one-size-fits-all powder." }
      ],
      teamTitle: "Leadership",
      roles: {
        mech: "Mechanical Engineer",
        ind: "Industrial Engineer",
        env: "Environmental Engineer"
      }
    },
    career: {
      eyebrow: "Career",
      title: "Build the mechanical alternative with us.",
      lede: "We're a small, engineering-led team out of Freiberg. If you don't see an open role but want to work on closed-loop metallurgy, we'd like to hear from you.",
      openTitle: "Open applications",
      openBody: "Tell us about your background and what you'd want to work on — we review every application personally.",
      form: {
        name: "Name", email: "Email", phone: "Phone (optional)",
        field: "Field of interest",
        fieldOptions: ["Mechanical / process engineering", "Electrical / electronics", "Business / operations", "Other"],
        message: "Message",
        cv: "CV / Resume (optional)",
        cvHint: "PDF or Word document, up to 5 MB.",
        portfolio: "Portfolio link (optional)",
        submit: "Send application",
        success: "Thanks — your application has been sent. We'll get back to you soon.",
        error: "Something went wrong sending your application — please email us directly at info@flexcyclesolutions.com instead.",
        errorRequired: "This field is required.",
        errorEmail: "Enter a valid email address."
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to the team.",
      lede: "Questions about a grade, a sample, or a partnership — reach us directly.",
      infoTitle: "Contact details",
      address: "Freiberg, Saxony, Germany",
      generalTitle: "General inquiry",
      quoteTitle: "Request a quote",
      form: {
        name: "Name", company: "Company (optional)", companyRequired: "Company",
        email: "Email", message: "Message",
        grade: "Grade of interest",
        gradeOptions: ["FCP-20", "FCP-BJ", "FCP-AM", "FCP-EBM", "FCP-Si", "FCP-PM", "Not sure yet"],
        quantity: "Estimated quantity",
        submitGeneral: "Send message",
        submitQuote: "Request quote",
        successGeneral: "Thanks — your email client should have opened with your message ready to send.",
        successQuote: "Thanks — your email client should have opened with your request ready to send.",
        errorRequired: "This field is required.",
        errorEmail: "Enter a valid email address."
      }
    },
    legal: {
      imprintTitle: "Imprint",
      imprintPlaceholderNote: "The registration details below are placeholders and must be completed with the legal entity's actual register court, register number and VAT ID before this site goes live.",
      representedBy: "Represented by",
      registerCourt: "Register court",
      registerNumber: "Register number",
      vatId: "VAT ID",
      contentResponsible: "Responsible for content (§ 18 (2) MStV)",
      toBeCompleted: "To be completed",
      privacyTitle: "Privacy policy",
      privacyBody: "This placeholder privacy policy should be reviewed and completed with qualified legal counsel before the site goes live, covering data collected via the contact, career and quote forms.",
      privacyIntro: "Flexycle Powders does not run its own server-side data collection on this site. Most forms hand your input to your own email client via a mailto: link; the career form is the one exception, described below.",
      privacyWhoTitle: "Controller",
      privacyWho: "Flexycle Powders, Freiberg, Saxony, Germany — info@flexcyclesolutions.com",
      privacyFormsTitle: "Contact and quote forms",
      privacyForms: "Submitting a form opens a pre-filled email in your email client; the content you typed is only transmitted once you actually send that email, to info@flexcyclesolutions.com. Nothing is stored on our servers by the form itself.",
      privacyFormsCareerTitle: "Career / open-application form",
      privacyFormsCareer: "The career form is submitted directly, including any attached CV file, to info@flexcyclesolutions.com via Web3Forms (web3forms.com), a third-party form-processing service acting as our processor. Web3Forms transmits the submission to us by email and does not publish it; its servers may be located outside the EU. Consult its own privacy policy at web3forms.com for details on its processing.",
      privacyRightsTitle: "Your rights",
      privacyRights: "Under the GDPR you have the right to access, correct, delete or restrict processing of any personal data you send us, and to object to its processing. Contact info@flexcyclesolutions.com for any such request."
    }
  },

  de: {
    nav: { home: "Start", products: "Produkte", company: "Unternehmen", career: "Karriere", contact: "Kontakt" },
    common: {
      skip: "Zum Inhalt springen",
      readMore: "Mehr erfahren",
      viewGrades: "Pulverklassen ansehen",
      talkToUs: "Kontakt aufnehmen",
      requestQuote: "Angebot anfragen",
      printDatasheet: "Drucken / als PDF speichern",
      jumpTo: "Springen zu"
    },
    footer: {
      tagline: "Recyceltes Kupferpulver, konstruiert nach Korngröße.",
      explore: "Entdecken",
      company: "Unternehmen",
      legal: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz",
      rights: "© 2026 Flexycle Powders. Alle Rechte vorbehalten.",
      address: "Freiberg, Sachsen, Deutschland"
    },
    home: {
      eyebrow: "Deep-Tech · recyceltes Kupferpulver",
      title: "Von Schrott zu Pulver. Von Abfall zu Wert.",
      titleHtml: "Von Schrott zu Pulver.<br>Von Abfall zu Wert.",
      lede: "Flexycle Powders verwandelt dünne Kupferrückstände aus der Batterie- und Elektronikfertigung mechanisch in Hochleistungspulver — mit einem Bruchteil der Energie eines Schmelzprozesses, sortiert in sechs Korngrößen-Klassen.",
      spectrumLabel: "Korngrößen-Spektrum",
      spectrumCta: "Alle sechs Klassen ansehen →",
      stats: [
        { value: "&gt;0,9", label: "Sphärizität" },
        { value: "100%", label: "regionale Lieferkette" },
        { value: "&lt;20–150", label: "<span style=\"text-transform:none\">µm</span> Korngrößenbereich" },
        { value: "Bis zu 99,95%", label: "Kupferreinheit" }
      ],
      process: {
        eyebrow: "Der Prozess",
        title: "Mechanische Umwandlung statt Schmelzzerstäubung.",
        lede: "Herkömmliches Kupferpulver entsteht durch Schmelzen von Primärkathode und Zerstäubung mit Gas oder Wasser — ein energieintensiver Weg, der bei Primärmetall beginnt. Flexycle nimmt dünne metallische Rückstände, die der Zielform bereits nahekommen, und verfeinert sie mechanisch zu kalibriertem Pulver."
      },
      compare: {
        conventional: {
          title: "Konventionelle Zerstäubung",
          items: [
            "Beginnt bei primärer Kathodenkupfer",
            "Schmilzt Metall bei ~1085 °C, zerstäubt dann mit Gas oder Wasser",
            "Hoher Energieeinsatz pro Kilogramm Pulver",
            "Feste Morphologie, kaum Klassen-Differenzierung"
          ]
        },
        flexycle: {
          title: "Flexycle Process",
          items: [
            "Beginnt bei dünnen Kupferrückständen aus Batterie- und Elektronikfertigung",
            "Kein Schmelzschritt — mechanische Zerkleinerung und Klassierung",
            "Deutlich geringerer Energieeinsatz pro Kilogramm",
            "Sechs kalibrierte Klassen, abgestimmt nach Korngröße und Morphologie"
          ]
        }
      },
      applications: {
        title: "Wo Flexycle-Pulver zum Einsatz kommt",
        items: [
          { title: "Additive Fertigung", desc: "Das hochsphärische FCP-AM versorgt LPBF- und DED-Anlagen für dichte Bauteile aus Reinkupfer." },
          { title: "Elektronik", desc: "FCP-20 sintert zu feinen leitfähigen Strukturen und Bauteilen." },
          { title: "Batterietechnik", desc: "Produktionsrückstände aus der Batteriefertigung werden erneut zu Einsatzstoff — der Kreislauf schließt sich." },
          { title: "Pulvermetallurgie", desc: "Die breite Klassierung von FCP-PM eignet sich für klassische Press-Sinter-Anwendungen, von Lagern bis zu Strukturbauteilen." }
        ]
      },
      gallery: {
        title: "Anwendungsbeispiele",
        lede: "Ein genauerer Blick darauf, was aus jeder Klasse in der Praxis wird.",
        items: [
          "Elektronik — gesinterte Kontakte und leitfähige Pasten",
          "Binder Jetting — komplexe Geometrien in Serienproduktion",
          "LPBF — dichte Reinkupfer-Bauteile",
          "EBM — hochleitfähige Funktionsbauteile",
          "Sintern — SPS-verdichtete Funktionsbauteile",
          "Pulvermetallurgie — Lager und Strukturbauteile"
        ]
      },
      cta: { title: "Fordern Sie ein auf Ihren Prozess abgestimmtes Muster an.", button: "Angebot anfragen" }
    },
    products: {
      eyebrow: "Produktpalette",
      title: "Sechs Klassen, ein Spektrum.",
      lede: "Jede FCP-Klasse hat eine feste Position im Korngrößen-Spektrum unten — von ultrafeinem Sinterpulver bis zu breitem Press-Sinter-Granulat. Mehrere Klassen überschneiden sich im Korngrößenbereich, daher hat jede ihre eigene Zeile. Klasse anklicken, um zum Datenblatt zu springen.",
      spectrumHint: "Klasse anklicken für das vollständige Datenblatt",
      customFraction: "Sie benötigen eine andere Fraktion? Auf Anfrage klassieren wir auch individuelle Korngrößenfraktionen.",
      specLabels: {
        particleSize: "Korngröße",
        sphericity: "Sphärizität",
        morphology: "Morphologie",
        apparentDensity: "Klopfdichte",
        tapDensity: "Stampfdichte",
        bulkDensity: "Schüttdichte",
        specificSurface: "Spezifische Oberfläche",
        flowability: "Fließfähigkeit (Hall)",
        greenStrength: "Grünfestigkeit",
        copperContent: "Kupfergehalt",
        oxygenContent: "Sauerstoffgehalt",
        consolidationRoute: "Konsolidierungsroute",
        feedstock: "Einsatzstoff"
      },
      applicationsLabel: "Anwendungen",
      fcp20: {
        eyebrow: "Sintern &amp; Elektronik · ultrafein",
        tagline: "Ultrafeines Pulver für sinteraktive Elektronik.",
        desc: "FCP-20 wird unterhalb von 20 µm klassiert und erreicht dadurch eine hohe spezifische Oberfläche — das ergibt hohe Sinteraktivität für leitfähige Pasten, Kontakte und feine Sinterstrukturen.",
        specs: {
          particleSize: "&lt;20 µm",
          specificSurface: "Hoch (BET)",
          tapDensity: "~3,8 g/cm³",
          copperContent: "≥99,8%",
          feedstock: "100% recycelt"
        },
        applications: "Elektronik, gesinterte Kontakte, leitfähige Pasten"
      },
      fcpbj: {
        eyebrow: "Additive Fertigung · Binder Jetting",
        tagline: "Feines sphärisches Pulver für Binder Jetting.",
        desc: "Für gleichmäßiges Recoating und hohe Gründichte beim Binder-Jetting-Druck klassiert, unterstützt FCP-BJ feine Detailauflösung vor dem abschließenden Sinterschritt zur vollen Dichte.",
        specs: {
          particleSize: "20–45 µm",
          flowability: "~16 s/50 g",
          apparentDensity: "~4,5 g/cm³",
          copperContent: "≥99,8%",
          feedstock: "100% recycelt"
        },
        applications: "Binder Jetting, komplexe Geometrien, Serien-AM-Produktion"
      },
      fcpam: {
        eyebrow: "Additive Fertigung · LPBF/DED",
        tagline: "Sphärisches Pulver für die Laserverarbeitung.",
        desc: "Hochsphärisch und rieselfähig ist FCP-AM für Laser Powder Bed Fusion und Directed Energy Deposition kalibriert und liefert dichte Bauteile aus Reinkupfer — ohne den Energieaufwand einer Primär-Zerstäubung.",
        specs: {
          particleSize: "20–63 µm",
          sphericity: "&gt;0,9",
          apparentDensity: "~4,9 g/cm³",
          flowability: "~14 s/50 g",
          copperContent: "≥99,9%",
          oxygenContent: "≤400 ppm",
          feedstock: "100% recycelt"
        },
        applications: "LPBF von Reinkupfer-Bauteilen, DED, hochleitfähige Komponenten"
      },
      fcpebm: {
        eyebrow: "Additive Fertigung · Electron Beam Melting",
        tagline: "Gröberes sphärisches Pulver für die Elektronenstrahlverarbeitung.",
        desc: "Kalibriert für den größeren Strahlfleck und die Vakuumumgebung des Elektronenstrahlschmelzens (EBM), verbindet FCP-EBM gute Fließfähigkeit mit reduziertem Feinanteil für eine stabile Pulverbett-Verteilung.",
        specs: {
          particleSize: "63–100 µm",
          sphericity: "&gt;0,85",
          apparentDensity: "~5,1 g/cm³",
          copperContent: "≥99,9%",
          feedstock: "100% recycelt"
        },
        applications: "EBM von Kupferbauteilen, hochleitfähige Komponenten"
      },
      fcpsi: {
        eyebrow: "Sintern · SPS &amp; drucklos",
        tagline: "Entwickelt für Spark-Plasma- und drucklose Sinterung.",
        desc: "FCP-Si ist für die direkte Verdichtung mittels Spark-Plasma-Sintern (SPS) oder drucklosem Sintern kalibriert und erreicht hohe Dichten ohne separaten Pressschritt.",
        specs: {
          particleSize: "45–150 µm",
          consolidationRoute: "SPS / drucklose Sinterung",
          apparentDensity: "~4,0 g/cm³",
          copperContent: "≥99,7%",
          feedstock: "100% recycelt"
        },
        applications: "SPS-verdichtete Bauteile, drucklos gesinterte Komponenten, Funktionsbauteile"
      },
      fcppm: {
        eyebrow: "Pulvermetallurgie · Pressen &amp; Sintern",
        tagline: "Unregelmäßige Morphologie für hohe Grünfestigkeit.",
        desc: "Die unregelmäßigen, dendritischen Partikel von FCP-PM verzahnen sich unter Druck und ergeben feste Grünlinge für klassische Press-Sinter-Verfahren. Die breiteste der sechs Klassen, für allgemeine pulvermetallurgische Anwendungen ohne engen prozessspezifischen Schnitt.",
        specs: {
          particleSize: "20–150 µm",
          morphology: "Unregelmäßig / dendritisch",
          apparentDensity: "~2,6 g/cm³",
          greenStrength: "Gut",
          copperContent: "≥99,7%",
          feedstock: "100% recycelt"
        },
        applications: "Press-Sinter-Bauteile, Lager, Strukturbauteile"
      }
    },
    company: {
      eyebrow: "Unternehmen",
      title: "Achthundertfünfzig Jahre Bergbau, ein neuer Materialkreislauf.",
      lede: "Flexycle Powders wurde aus der TU Bergakademie Freiberg ausgegründet — der ältesten Bergakademie der Welt — in der Stadt, die die europäische Metallurgie seit über acht Jahrhunderten prägt.",
      story: "Freiberg baut und verarbeitet seit dem 12. Jahrhundert Metall ab. Flexycle setzt diese Tradition mit einer anderen Ressource fort: nicht Erz aus dem Boden, sondern dünne Kupferrückstände, die die heutige Batterie- und Elektronikindustrie in wachsenden Mengen erzeugt. Unser Gründungsteam — allesamt Forschungsingenieure der TU Bergakademie Freiberg — hat ein mechanisches Verfahren entwickelt, das diese Rückstände direkt in kalibriertes Pulver überführt und dabei den Schmelzschritt überspringt, auf den konventionelle Pulverproduktion angewiesen ist.",
      valuesTitle: "Woran wir uns halten",
      values: [
        { title: "Mechanisch, nicht geschmolzen", desc: "Jeder Prozessschritt vermeidet das erneute Schmelzen des Metalls und senkt den Energiebedarf an der Quelle." },
        { title: "Kreislauf von Grund auf", desc: "Der Einsatzstoff stammt aus Produktionsrückständen statt aus frischem Bergbau — der Kreislauf schließt sich, bevor das Metall zu Abfall wird." },
        { title: "Kalibriert, nicht generisch", desc: "Sechs definierte Klassen bedeuten: Kunden bestellen nach Korngröße und Morphologie — kein Einheitspulver für alles." }
      ],
      teamTitle: "Führungsteam",
      roles: {
        mech: "Maschinenbauingenieur",
        ind: "Wirtschaftsingenieur",
        env: "Umweltingenieur"
      }
    },
    career: {
      eyebrow: "Karriere",
      title: "Bauen Sie die mechanische Alternative mit uns.",
      lede: "Wir sind ein kleines, ingenieurgeführtes Team aus Freiberg. Sehen Sie keine passende offene Stelle, wollen aber an geschlossenen Metallkreisläufen mitarbeiten? Dann melden Sie sich gern.",
      openTitle: "Initiativbewerbung",
      openBody: "Erzählen Sie uns von Ihrem Hintergrund und woran Sie arbeiten möchten — wir lesen jede Bewerbung persönlich.",
      form: {
        name: "Name", email: "E-Mail", phone: "Telefon (optional)",
        field: "Interessenbereich",
        fieldOptions: ["Maschinenbau / Prozesstechnik", "Elektrotechnik / Elektronik", "Wirtschaft / Betrieb", "Sonstiges"],
        message: "Nachricht",
        cv: "Lebenslauf (optional)",
        cvHint: "PDF oder Word-Dokument, bis 5 MB.",
        portfolio: "Portfolio-Link (optional)",
        submit: "Bewerbung senden",
        success: "Danke — Ihre Bewerbung wurde versendet. Wir melden uns bei Ihnen.",
        error: "Beim Versand der Bewerbung ist etwas schiefgelaufen — bitte schreiben Sie uns direkt an info@flexcyclesolutions.com.",
        errorRequired: "Dieses Feld ist erforderlich.",
        errorEmail: "Bitte eine gültige E-Mail-Adresse angeben."
      }
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Sprechen Sie mit dem Team.",
      lede: "Fragen zu einer Klasse, einem Muster oder einer Partnerschaft — erreichen Sie uns direkt.",
      infoTitle: "Kontaktdaten",
      address: "Freiberg, Sachsen, Deutschland",
      generalTitle: "Allgemeine Anfrage",
      quoteTitle: "Angebot anfragen",
      form: {
        name: "Name", company: "Unternehmen (optional)", companyRequired: "Unternehmen",
        email: "E-Mail", message: "Nachricht",
        grade: "Interessante Klasse",
        gradeOptions: ["FCP-20", "FCP-BJ", "FCP-AM", "FCP-EBM", "FCP-Si", "FCP-PM", "Noch unklar"],
        quantity: "Geschätzte Menge",
        submitGeneral: "Nachricht senden",
        submitQuote: "Angebot anfragen",
        successGeneral: "Danke — Ihr E-Mail-Programm sollte sich mit der versandbereiten Nachricht geöffnet haben.",
        successQuote: "Danke — Ihr E-Mail-Programm sollte sich mit der versandbereiten Anfrage geöffnet haben.",
        errorRequired: "Dieses Feld ist erforderlich.",
        errorEmail: "Bitte eine gültige E-Mail-Adresse angeben."
      }
    },
    legal: {
      imprintTitle: "Impressum",
      imprintPlaceholderNote: "Die Angaben zur Handelsregistereintragung unten sind Platzhalter und müssen vor dem Livegang durch die tatsächlichen Angaben zu Registergericht, Registernummer und USt-IdNr. ersetzt werden.",
      representedBy: "Vertreten durch",
      registerCourt: "Registergericht",
      registerNumber: "Registernummer",
      vatId: "USt-IdNr.",
      contentResponsible: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
      toBeCompleted: "Wird ergänzt",
      privacyTitle: "Datenschutzerklärung",
      privacyBody: "Diese Platzhalter-Datenschutzerklärung sollte vor dem Livegang durch fachkundige Rechtsberatung geprüft und vervollständigt werden — insbesondere im Hinblick auf die über Kontakt-, Karriere- und Angebotsformulare erhobenen Daten.",
      privacyIntro: "Flexycle Powders betreibt auf dieser Website keine eigene serverseitige Datenerhebung. Die meisten Formulare übergeben Ihre Eingaben über einen mailto:-Link an Ihr eigenes E-Mail-Programm; eine Ausnahme ist das Karriereformular, siehe unten.",
      privacyWhoTitle: "Verantwortlicher",
      privacyWho: "Flexycle Powders, Freiberg, Sachsen, Deutschland — info@flexcyclesolutions.com",
      privacyFormsTitle: "Kontakt- und Angebotsformulare",
      privacyForms: "Beim Absenden eines Formulars öffnet sich eine vorausgefüllte E-Mail in Ihrem E-Mail-Programm; die eingegebenen Inhalte werden erst übermittelt, wenn Sie diese E-Mail tatsächlich an info@flexcyclesolutions.com senden. Das Formular selbst speichert dabei nichts auf unseren Servern.",
      privacyFormsCareerTitle: "Karriereformular / Initiativbewerbung",
      privacyFormsCareer: "Das Karriereformular wird inklusive eines eventuell angehängten Lebenslaufs direkt über Web3Forms (web3forms.com) an info@flexcyclesolutions.com übermittelt — einen Drittanbieter, der hier als Auftragsverarbeiter fungiert. Web3Forms leitet die Einsendung per E-Mail an uns weiter und veröffentlicht sie nicht; die Server des Anbieters können außerhalb der EU liegen. Details zur Verarbeitung durch Web3Forms finden Sie in dessen eigener Datenschutzerklärung auf web3forms.com.",
      privacyRightsTitle: "Ihre Rechte",
      privacyRights: "Nach der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer an uns gesendeten personenbezogenen Daten sowie ein Widerspruchsrecht. Wenden Sie sich hierfür an info@flexcyclesolutions.com."
    }
  }
};

(function () {
  function resolve(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return (o && o[k] !== undefined) ? o[k] : null;
    }, obj);
  }

  function applyLang(lang) {
    var dict = window.FLX_I18N[lang];
    if (!dict) return;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n-html'));
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n-placeholder'));
      if (val !== null) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n-aria-label'));
      if (val !== null) el.setAttribute('aria-label', val);
    });

    localStorage.setItem('flx-lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
    document.dispatchEvent(new CustomEvent('flx:langchange', { detail: { lang: lang } }));
  }

  function initLang() {
    var stored = localStorage.getItem('flx-lang');
    var browser = (navigator.language || 'en').toLowerCase().indexOf('de') === 0 ? 'de' : 'en';
    applyLang(stored || browser);
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
    });
  }

  window.FLX_applyLang = applyLang;
  document.addEventListener('DOMContentLoaded', initLang);
})();
