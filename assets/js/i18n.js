/* ==========================================================================
   FlexCycle Solutions — i18n
   Elements are marked with data-i18n / data-i18n-html / data-i18n-placeholder
   / data-i18n-aria-label / data-i18n-alt attributes holding a dot-path into FLX_I18N[lang].
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
      rights: "© 2026 FlexCycle Solutions. All rights reserved.",
      address: "Freiberg, Saxony, Germany",
      supporters: "Supporters",
      funding: {
        eu: "Co-financed by the European Union",
        saxony: "This measure is co-financed by tax revenue on the basis of the budget passed by the Saxon State Parliament.",
        bmwe: "Funded by the Federal Ministry for Economic Affairs and Energy on the basis of a decision by the German Bundestag",
        iart: "IART – Institute of Mineral Processing Machines and Recycling Systems Technology"
      }
    },
    home: {
      eyebrow: "Deep tech · recycled copper powder",
      title: "From Scrap to Powder. From Waste to Value.",
      titleHtml: "From Scrap to Powder.<br>From Waste to Value.",
      lede: "FlexCycle Solutions turns thin-walled copper residues from battery cell production into high-performance powder. Our patented process is purely mechanical — no melting, no inert gas — and sorts the powder into six grades by particle size.",
      spectrumLabel: "Particle-size spectrum",
      spectrumCta: "See all six grades →",
      stats: [
        { value: "&gt;97%", label: "less energy than gas atomisation" },
        { value: "&lt;100 °C", label: "process temperature" },
        { value: "~2×", label: "laser absorption at 1070 nm" },
        { value: "&gt;99.9%", label: "copper purity" }
      ],
      process: {
        eyebrow: "The process",
        title: "Mechanical conversion, not melt atomisation.",
        lede: "Conventional copper powder is made by melting primary or secondary copper and then atomising it with gas or water — an energy-intensive route. FlexCycle takes thin-walled metallic residues already close to the right form factor and refines them mechanically into powder."
      },
      compare: {
        conventional: {
          title: "Conventional atomisation",
          items: [
            "Starts from primary or secondary copper",
            "Melts the metal at ~1085 °C and atomises it, usually under inert gas",
            "9,000 kWh and more per tonne for gas atomisation",
            "Smooth, glossy particles reflect infrared lasers"
          ]
        },
        flexycle: {
          title: "FlexCycle Process",
          items: [
            "Starts from thin-walled copper residues from battery cell production",
            "No melting — mechanical comminution and classification below 100 °C",
            "Around 650 kWh per tonne, no inert gas",
            "Rough, spheroidal particles absorb laser light and interlock under pressure"
          ]
        }
      },
      applications: {
        title: "Where FlexCycle powder goes to work",
        items: [
          { title: "Additive manufacturing", desc: "FCP-AM absorbs about twice as much 1070 nm laser light as gas-atomised powder, for LPBF and DED on standard infrared machines." },
          { title: "Press & sinter", desc: "Rough particles interlock for high green strength, from plain bearings to structural parts." },
          { title: "Cold spray", desc: "Copper coatings, for example on aluminium busbars for e-mobility. A rough particle surface can improve adhesion." },
          { title: "Power electronics", desc: "Fine fractions as a starting material for copper-based sinter pastes, in development with users." }
        ]
      },
      gallery: {
        title: "Application examples",
        lede: "First parts built from our powder.",
        items: [
          "LPBF — printed copper parts",
          "LPBF — surface of a printed part",
          "Sintering — sintered copper part"
        ]
      },
      pair: {
        feedstock: { label: "Feedstock", text: "thin-walled copper residues", alt: "Thin-walled copper residues" },
        powder: { label: "Result", text: "copper powder", alt: "Copper powder" }
      },
      energy: {
        eyebrow: "Energy demand",
        title: "650 kWh per tonne. Melt routes need many times more.",
        lede: "Nothing is melted and no inert gas is needed, so the mechanical route uses a fraction of the energy of established powder production.",
        chartLabel: "Specific energy demand, kWh per tonne of copper powder",
        values: ["~650", "2,000–2,500", "~4,000", "9,000–166,000", "~25,000"],
        ticks: ["0", "5,000", "10,000", "15,000", "20,000", "25,000"],
        rows: [
          "FlexCycle mechanical process",
          "Water atomisation",
          "Electrolytic powder",
          "Gas atomisation (literature range)",
          "Free-fall hot-gas atomisation (N₂)"
        ],
        note: "Lighter segments show a range. The gas-atomisation range continues far beyond the chart. Sources: Ehmsen et al., J. Manuf. Syst. 82 (2025); Cebula et al., Sustain. Mater. Technol. 33 (2022)."
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
        absorption: "Laser absorption (1070 nm)",
        copperContent: "Copper content",
        oxygenContent: "Oxygen content",
        consolidationRoute: "Consolidation route",
        feedstock: "Feedstock"
      },
      applicationsLabel: "Applications",
      fcp20: {
        photoAlt: "Micrograph of FCP-20 particles",
        eyebrow: "Sintering &amp; electronics · ultrafine",
        tagline: "Ultrafine powder for sinter-active electronics.",
        desc: "FCP-20 is classified below 20 µm for maximum specific surface area, giving it high sinter activity in conductive pastes, contacts and fine sintered structures.",
        specs: {
          particleSize: "&lt;20 µm",
          sphericity: "&gt;0.9",
          specificSurface: "High (BET)",
          tapDensity: "~3.8 g/cm³",
          copperContent: "&gt;99.9%",
          feedstock: "100% recycled"
        },
        applications: "Electronics, sintered contacts, conductive pastes"
      },
      fcpbj: {
        photoAlt: "Micrograph of FCP-BJ particles",
        eyebrow: "Additive manufacturing · Binder Jetting",
        tagline: "Fine spherical powder for binder jetting.",
        desc: "Classified for consistent recoating and high green density in binder-jet printing, FCP-BJ supports fine feature resolution ahead of the sintering step to full density.",
        specs: {
          particleSize: "20–45 µm",
          sphericity: "&gt;0.9",
          flowability: "~16 s/50 g",
          apparentDensity: "~4.5 g/cm³",
          copperContent: "&gt;99.9%",
          feedstock: "100% recycled"
        },
        applications: "Binder jetting, complex geometries, batch AM production"
      },
      fcpam: {
        photoAlt: "Micrograph of FCP-AM particles",
        eyebrow: "Additive manufacturing · LPBF/DED",
        tagline: "Spherical powder built for laser processing.",
        desc: "Spheroidal and free-flowing, FCP-AM is tailored to laser powder bed fusion and directed energy deposition. Its rough surface absorbs about twice as much 1070 nm laser light as gas-atomised powder, which widens the process window on standard infrared machines.",
        specs: {
          particleSize: "20–63 µm",
          sphericity: "&gt;0.9",
          apparentDensity: "~4.0 g/cm³",
          tapDensity: "~4.8 g/cm³",
          flowability: "~14 s/50 g",
          copperContent: "&gt;99.9%",
          oxygenContent: "≤400 ppm",
          absorption: "~2× gas-atomised",
          feedstock: "100% recycled"
        },
        applications: "LPBF of pure-copper parts, DED, high-conductivity components"
      },
      fcpebm: {
        photoAlt: "Micrograph of FCP-EBM particles",
        eyebrow: "Additive manufacturing · Electron Beam Melting",
        tagline: "Coarser spherical powder suited to electron-beam processing.",
        desc: "Tailored to the larger beam spot and vacuum environment of electron beam melting, FCP-EBM balances flowability with reduced fines for stable powder-bed spreading.",
        specs: {
          particleSize: "63–100 µm",
          sphericity: "&gt;0.9",
          apparentDensity: "~5.1 g/cm³",
          copperContent: "&gt;99.9%",
          feedstock: "100% recycled"
        },
        applications: "EBM of copper components, high-conductivity parts"
      },
      fcpsi: {
        photoAlt: "Micrograph of FCP-Si particles",
        eyebrow: "Sintering · SPS &amp; pressureless",
        tagline: "Engineered for spark plasma and pressureless sintering.",
        desc: "FCP-Si is tailored to direct consolidation via spark plasma sintering (SPS) or pressureless sintering routes, reaching high density without a separate pressing step.",
        specs: {
          particleSize: "45–150 µm",
          sphericity: "&gt;0.9",
          consolidationRoute: "SPS / pressureless sintering",
          apparentDensity: "~4.0 g/cm³",
          greenStrength: "90 % of water-atomised powder",
          flowability: "High",
          copperContent: "&gt;99.9%",
          feedstock: "100% recycled"
        },
        applications: "SPS-consolidated parts, pressureless-sintered components, functional structures"
      },
      fcppm: {
        photoAlt: "Micrograph of FCP-PM particles",
        eyebrow: "Powder metallurgy · press &amp; sinter",
        tagline: "Rough surface, built for green strength.",
        desc: "FCP-PM's rough particle surfaces interlock under pressure, giving strong green compacts for classic press-and-sinter routes — 90 % of the green strength of water-atomised powder in first trials. The broadest of the six grades, for general powder-metallurgy use where a tight process-specific cut isn't required.",
        specs: {
          particleSize: "20–150 µm",
          sphericity: "&gt;0.9",
          morphology: "Rough, spheroidal",
          apparentDensity: "~2.6 g/cm³",
          greenStrength: "90 % of water-atomised powder",
          copperContent: "&gt;99.9%",
          feedstock: "100% recycled"
        },
        applications: "Press &amp; sinter components, bearings, structural parts"
      }
    },
    company: {
      eyebrow: "Company",
      title: "Eight hundred and fifty years of mining, one new material loop.",
      lede: "FlexCycle Solutions was spun out of TU Bergakademie Freiberg — the world's oldest mining academy — in the town that has defined European metallurgy for over eight centuries.",
      story: "Freiberg has mined and processed metal since the 12th century. FlexCycle continues that lineage with a different resource: not ore from the ground, but thin-walled copper residues that battery cell production leaves behind in growing volumes. Our team developed the process at the Institute of Mineral Processing Machines and Recycling Systems Technology (IART) at TU Bergakademie Freiberg. This mechanical route turns that residue directly into powder, skipping the melt step that conventional powder production depends on.",
      valuesTitle: "What we hold to",
      values: [
        { title: "Mechanical, not melted", desc: "Every process step avoids re-melting the metal, cutting energy demand at the source." },
        { title: "Closed-loop by design", desc: "Feedstock comes from production residues, not fresh mining — the loop closes before the metal ever becomes waste." },
        { title: "Defined grades, not one-size-fits-all", desc: "Six defined grades mean customers order by particle size and morphology, not a single one-size-fits-all powder." }
      ],
      teamTitle: "Leadership",
      teamPhotoAlt: "The FlexCycle Solutions team in Freiberg",
      lab: { label: "Our lab at IART", credit: "Photo: IART", alt: "Test rig in the IART lab" },
      freiberg: { label: "Freiberg, Saxony", credit: "Photo: TU Bergakademie Freiberg / Universitätsbibliothek", alt: "View over Freiberg, Saxony" },
      roles: {
        mech: "Mechanical Engineer",
        cs: "Computer Engineer",
        env: "Environmental Engineer",
        tb: "Computer engineering · finance &amp; economic viability",
        jg: "Production &amp; lightweight engineering · strategy &amp; customers",
        et: "Environmental engineering · process development &amp; validation",
        pn: "Mechanical engineering · comminution &amp; automation"
      },
      milestones: {
        eyebrow: "Milestones",
        title: "From research project to company",
        items: [
          { title: "CuprAlUp", desc: "A research project funded through the German Federal Ministry for Economic Affairs (ZIM). It looked at fine copper fractions from battery production for the first time and ran the first laser cladding tests with mechanically made powder." },
          { title: "Patent applications", desc: "German application DE 10 2023 115 631 filed in June 2023, followed by the European application EP 4 480 604 in June 2024." },
          { title: "LiCARE", desc: "A project funded by the German Federal Environmental Foundation (DBU), extending the work to coating applications and further material streams." },
          { title: "Validation funding &amp; pilot plant", desc: "Funded by the Sächsische Aufbaubank and the EU, we are assessing the technical and economic case for a spin-off. In parallel, a semi-industrial pilot plant is being set up on the CircEcon circular-economy campus in Lusatia." },
          { title: "EXIST research transfer", desc: "Funded through the EXIST programme: scaling the process up to a pilot line, producing standardised powder batches, testing them with pilot users and preparing the spin-off." },
          { title: "Incorporation", desc: "Planned founding as a GmbH in Chemnitz, close to the TU Chemnitz technology campus and 40 km from Freiberg." }
        ]
      },
      network: {
        title: "Research network",
        lede: "Partners for testing, qualification and scale-up.",
        partners: [
          "Home institute, with labs for analysis, liberation and comminution",
          "Additive manufacturing trials",
          "Additive manufacturing trials, including LPBF",
          "Founders' network that has supported the team for over three years",
          "Circular-economy campus in Lusatia, site of our pilot plant"
        ]
      }
    },
    career: {
      eyebrow: "Career",
      title: "Build the mechanical alternative with us.",
      lede: "We're a small, engineering-led team from Freiberg, taking a patented process from the lab to a pilot line. If you don't see an open role but want to work on closed-loop metallurgy, we'd like to hear from you.",
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
        error: "Something went wrong sending your application — please email us directly at info@miona-powders.com instead.",
        errorRequired: "This field is required.",
        errorEmail: "Enter a valid email address."
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to the team.",
      lede: "Questions about a grade, sample material for your own trials, or a research partnership — reach us directly.",
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
        sentGeneral: "Thanks — your message has been sent. We'll get back to you soon.",
        sentQuote: "Thanks — your request has been sent. We'll get back to you soon.",
        error: "Your message could not be sent. Please email us directly at info@miona-powders.com.",
        errorRequired: "This field is required.",
        errorEmail: "Enter a valid email address."
      }
    },
    film: { play: "Watch the film", aria: "FlexCycle Solutions image film" },
    ph: {
      sem: "Micrograph: FCP particles (SEM)",
      teamWork: "Photo: the team at work in the lab"
    },
    legal: {
      imprint: {
        pageTitle: "FlexCycle Solutions — Imprint",
        title: "Imprint",
        intro: "FlexCycle Solutions is a start-up project in preparation at the Institute of Mineral Processing Machines and Recycling Systems Technology (IART) of TU Bergakademie Freiberg. No company has been founded yet; until then, the person named below is the provider of this website.",
        providerTitle: "Information pursuant to § 5 DDG (German Digital Services Act)",
        provider: "Julius Eik Grimmenstein<br>c/o TU Bergakademie Freiberg<br>Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik (IART)<br>Lampadiusstraße 4<br>09599 Freiberg<br>Germany",
        contactTitle: "Contact",
        contact: "Phone: +49&nbsp;3731&nbsp;39&nbsp;3768<br>Email: <a href=\"mailto:info@miona-powders.com\">info@miona-powders.com</a>",
        responsibleTitle: "Responsible for content pursuant to § 18 (2) MStV",
        responsible: "Julius Eik Grimmenstein, address as above",
        registerTitle: "Commercial register and VAT",
        register: "There is no commercial register entry and no VAT identification number yet, as no company has been founded so far.",
        creditsTitle: "Image credits",
        credits: "View over Freiberg: TU Bergakademie Freiberg / Universitätsbibliothek. Lab photo: IART. Unless stated otherwise, all other photos, micrographs and the image film are by the FlexCycle Solutions team and IART. The logos of our supporters belong to their respective owners."
      },
      privacy: {
        pageTitle: "FlexCycle Solutions — Privacy policy",
        title: "Privacy policy",
        controllerTitle: "1. Controller",
        controller: "Controller within the meaning of the GDPR (start-up project FlexCycle Solutions; no company has been founded yet):<br><br>Julius Eik Grimmenstein<br>c/o TU Bergakademie Freiberg<br>Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik (IART)<br>Lampadiusstraße 4<br>09599 Freiberg<br>Germany<br>Email: <a href=\"mailto:info@miona-powders.com\">info@miona-powders.com</a><br>Phone: +49&nbsp;3731&nbsp;39&nbsp;3768",
        overviewTitle: "2. Overview",
        overview: "This website uses no cookies, no tracking and no analytics services. Fonts, scripts, images and the video are delivered exclusively by our hosting provider; visiting the site does not transmit data to any other third parties.",
        hostingTitle: "3. Hosting",
        hosting: "This website is provided via GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit the site, GitHub processes technically necessary data, in particular your IP address, the date and time of access, the page requested and information about your browser and operating system, in order to deliver the website and keep it secure. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest lies in providing the website securely and reliably. Data may be transferred to the USA in the process; GitHub participates in the EU-U.S. Data Privacy Framework. Further information: <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener\">GitHub Privacy Statement</a>.",
        formsTitle: "4. Contact and quote forms",
        forms: "If you use the contact or quote form, we process the data you enter (name, company, email address, your message and, for quote requests, grade of interest and estimated quantity) in order to answer your enquiry. The form is transmitted via Web3Forms (web3forms.com), a form service that forwards the submission to us by email and acts as our processor; its servers may be located outside the EU. The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to a possible contract (e.g. a quote request), and otherwise Art. 6(1)(f) GDPR, based on our interest in answering enquiries. We delete your enquiry once it has been dealt with, unless statutory retention obligations apply.",
        emailTitle: "5. Contact by email or phone",
        email: "If you contact us by email or phone, we process your details to handle your enquiry on the same legal bases as above.",
        storageTitle: "6. Storage in your browser",
        storage: "Your language choice (German or English) is stored in your browser's local storage so that the website keeps it on your next visit. This information never leaves your device. Storing it is necessary for the function you requested (§ 25(2) no. 2 TDDDG). You can delete it at any time in your browser settings.",
        rightsTitle: "7. Your rights",
        rights: "You have the right to access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18) and data portability (Art. 20). You may object at any time to processing based on Art. 6(1)(f) GDPR (Art. 21). To exercise these rights, please contact <a href=\"mailto:info@miona-powders.com\">info@miona-powders.com</a>. You also have the right to lodge a complaint with a data protection supervisory authority, for example the Saxon Data Protection and Transparency Commissioner (Sächsische Datenschutz- und Transparenzbeauftragte).",
        updated: "As of October 2026"
      }
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
      rights: "© 2026 FlexCycle Solutions. Alle Rechte vorbehalten.",
      address: "Freiberg, Sachsen, Deutschland",
      supporters: "Supporter",
      funding: {
        eu: "Kofinanziert von der Europäischen Union",
        saxony: "Diese Maßnahme wird mitfinanziert durch Steuermittel auf der Grundlage des vom Sächsischen Landtag beschlossenen Haushaltes.",
        bmwe: "Gefördert durch das Bundesministerium für Wirtschaft und Energie aufgrund eines Beschlusses des Deutschen Bundestages",
        iart: "IART – Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik"
      }
    },
    home: {
      eyebrow: "Deep-Tech · recyceltes Kupferpulver",
      title: "Von Schrott zu Pulver. Von Abfall zu Wert.",
      titleHtml: "Von Schrott zu Pulver.<br>Von Abfall zu Wert.",
      lede: "FlexCycle Solutions macht aus dünnwandigen Kupferreststoffen der Batteriezellfertigung Hochleistungspulver. Unser patentiertes Verfahren ist rein mechanisch — ohne Schmelzen, ohne Inertgas — und sortiert das Pulver in sechs Korngrößen-Klassen.",
      spectrumLabel: "Korngrößen-Spektrum",
      spectrumCta: "Alle sechs Klassen ansehen →",
      stats: [
        { value: "&gt;97%", label: "weniger Energie als Gasverdüsung" },
        { value: "&lt;100 °C", label: "Prozesstemperatur" },
        { value: "~2×", label: "Laserabsorption bei 1070 nm" },
        { value: "&gt;99,9%", label: "Kupferreinheit" }
      ],
      process: {
        eyebrow: "Der Prozess",
        title: "Mechanische Umwandlung statt Schmelzzerstäubung.",
        lede: "Herkömmliches Kupferpulver entsteht durch Aufschmelzen von Primär- oder Sekundärkupfer mit anschließender Verdüsung durch Gas oder Wasser — ein energieintensiver Weg. FlexCycle nimmt dünnwandige metallische Rückstände, die der Zielform bereits nahekommen, und verarbeitet sie mechanisch zu Pulver."
      },
      compare: {
        conventional: {
          title: "Konventionelle Zerstäubung",
          items: [
            "Beginnt bei Primär- oder Sekundärkupfer",
            "Schmilzt das Metall bei ~1085 °C und verdüst es, meist unter Inertgas",
            "9.000 kWh und mehr pro Tonne bei der Gasverdüsung",
            "Glatte, glänzende Partikel reflektieren Infrarotlaser"
          ]
        },
        flexycle: {
          title: "FlexCycle Process",
          items: [
            "Beginnt bei dünnwandigen Kupferreststoffen aus der Batteriezellfertigung",
            "Kein Schmelzen — mechanische Zerkleinerung und Klassierung unter 100 °C",
            "Rund 650 kWh pro Tonne, ohne Inertgas",
            "Raue, verkugelte Partikel absorbieren Laserlicht und verklammern sich beim Pressen"
          ]
        }
      },
      applications: {
        title: "Wo FlexCycle-Pulver zum Einsatz kommt",
        items: [
          { title: "Additive Fertigung", desc: "FCP-AM absorbiert etwa doppelt so viel Laserlicht bei 1070 nm wie gasverdüstes Pulver — für LPBF und DED auf gängigen Infrarot-Anlagen." },
          { title: "Pressen & Sintern", desc: "Raue Partikel verklammern sich zu hoher Grünfestigkeit, von Gleitlagern bis zu Strukturbauteilen." },
          { title: "Kaltgas­spritzen", desc: "Kupferbeschichtungen, etwa auf Aluminium-Stromschienen für die E-Mobilität. Eine raue Partikeloberfläche kann die Haftung verbessern." },
          { title: "Leistungs­elektronik", desc: "Feine Fraktionen als Ausgangsmaterial für kupferbasierte Sinterpasten, in Entwicklung mit Anwendern." }
        ]
      },
      gallery: {
        title: "Anwendungsbeispiele",
        lede: "Erste Bauteile aus unserem Pulver.",
        items: [
          "LPBF — gedruckte Kupferbauteile",
          "LPBF — Oberfläche eines gedruckten Bauteils",
          "Sintern — gesinterter Kupferkörper"
        ]
      },
      pair: {
        feedstock: { label: "Einsatzstoff", text: "dünnwandige Kupferreststoffe", alt: "Dünnwandige Kupferreststoffe" },
        powder: { label: "Ergebnis", text: "Kupferpulver", alt: "Kupferpulver" }
      },
      energy: {
        eyebrow: "Energiebedarf",
        title: "650 kWh pro Tonne. Schmelzrouten brauchen ein Vielfaches.",
        lede: "Nichts wird geschmolzen und kein Inertgas gebraucht — der mechanische Weg benötigt nur einen Bruchteil der Energie etablierter Pulverherstellung.",
        chartLabel: "Spezifischer Energiebedarf, kWh pro Tonne Kupferpulver",
        values: ["~650", "2.000–2.500", "~4.000", "9.000–166.000", "~25.000"],
        ticks: ["0", "5.000", "10.000", "15.000", "20.000", "25.000"],
        rows: [
          "FlexCycle, mechanisches Verfahren",
          "Wasserverdüsung",
          "Elektrolytisch hergestelltes Pulver",
          "Gasverdüsung (Spanne laut Literatur)",
          "Free-Fall-Hot-Gas-Atomisierung (N₂)"
        ],
        note: "Hellere Abschnitte zeigen eine Spanne. Die Spanne der Gasverdüsung reicht weit über das Diagramm hinaus. Quellen: Ehmsen et al., J. Manuf. Syst. 82 (2025); Cebula et al., Sustain. Mater. Technol. 33 (2022)."
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
        apparentDensity: "Schüttdichte",
        tapDensity: "Stampfdichte",
        bulkDensity: "Schüttdichte",
        specificSurface: "Spezifische Oberfläche",
        flowability: "Fließfähigkeit (Hall)",
        greenStrength: "Grünfestigkeit",
        absorption: "Laserabsorption (1070 nm)",
        copperContent: "Kupfergehalt",
        oxygenContent: "Sauerstoffgehalt",
        consolidationRoute: "Konsolidierungsroute",
        feedstock: "Einsatzstoff"
      },
      applicationsLabel: "Anwendungen",
      fcp20: {
        photoAlt: "Mikroskopaufnahme von FCP-20-Partikeln",
        eyebrow: "Sintern &amp; Elektronik · ultrafein",
        tagline: "Ultrafeines Pulver für sinteraktive Elektronik.",
        desc: "FCP-20 wird unterhalb von 20 µm klassiert und erreicht dadurch eine hohe spezifische Oberfläche — das ergibt hohe Sinteraktivität für leitfähige Pasten, Kontakte und feine Sinterstrukturen.",
        specs: {
          particleSize: "&lt;20 µm",
          sphericity: "&gt;0,9",
          specificSurface: "Hoch (BET)",
          tapDensity: "~3,8 g/cm³",
          copperContent: "&gt;99,9%",
          feedstock: "100% recycelt"
        },
        applications: "Elektronik, gesinterte Kontakte, leitfähige Pasten"
      },
      fcpbj: {
        photoAlt: "Mikroskopaufnahme von FCP-BJ-Partikeln",
        eyebrow: "Additive Fertigung · Binder Jetting",
        tagline: "Feines sphärisches Pulver für Binder Jetting.",
        desc: "Für gleichmäßiges Recoating und hohe Gründichte beim Binder-Jetting-Druck klassiert, unterstützt FCP-BJ feine Detailauflösung vor dem abschließenden Sinterschritt zur vollen Dichte.",
        specs: {
          particleSize: "20–45 µm",
          sphericity: "&gt;0,9",
          flowability: "~16 s/50 g",
          apparentDensity: "~4,5 g/cm³",
          copperContent: "&gt;99,9%",
          feedstock: "100% recycelt"
        },
        applications: "Binder Jetting, komplexe Geometrien, Serien-AM-Produktion"
      },
      fcpam: {
        photoAlt: "Mikroskopaufnahme von FCP-AM-Partikeln",
        eyebrow: "Additive Fertigung · LPBF/DED",
        tagline: "Sphärisches Pulver für die Laserverarbeitung.",
        desc: "Verkugelt und rieselfähig ist FCP-AM auf Laser Powder Bed Fusion und Directed Energy Deposition abgestimmt. Seine raue Oberfläche absorbiert etwa doppelt so viel Laserlicht bei 1070 nm wie gasverdüstes Pulver und erweitert so das Prozessfenster auf gängigen Infrarot-Anlagen.",
        specs: {
          particleSize: "20–63 µm",
          sphericity: "&gt;0,9",
          apparentDensity: "~4,0 g/cm³",
          tapDensity: "~4,8 g/cm³",
          flowability: "~14 s/50 g",
          copperContent: "&gt;99,9%",
          oxygenContent: "≤400 ppm",
          absorption: "~2× gasverdüst",
          feedstock: "100% recycelt"
        },
        applications: "LPBF von Reinkupfer-Bauteilen, DED, hochleitfähige Komponenten"
      },
      fcpebm: {
        photoAlt: "Mikroskopaufnahme von FCP-EBM-Partikeln",
        eyebrow: "Additive Fertigung · Electron Beam Melting",
        tagline: "Gröberes sphärisches Pulver für die Elektronenstrahlverarbeitung.",
        desc: "Abgestimmt auf den größeren Strahlfleck und die Vakuumumgebung des Elektronenstrahlschmelzens (EBM), verbindet FCP-EBM gute Fließfähigkeit mit reduziertem Feinanteil für eine stabile Pulverbett-Verteilung.",
        specs: {
          particleSize: "63–100 µm",
          sphericity: "&gt;0,9",
          apparentDensity: "~5,1 g/cm³",
          copperContent: "&gt;99,9%",
          feedstock: "100% recycelt"
        },
        applications: "EBM von Kupferbauteilen, hochleitfähige Komponenten"
      },
      fcpsi: {
        photoAlt: "Mikroskopaufnahme von FCP-Si-Partikeln",
        eyebrow: "Sintern · SPS &amp; drucklos",
        tagline: "Entwickelt für Spark-Plasma- und drucklose Sinterung.",
        desc: "FCP-Si ist auf die direkte Verdichtung mittels Spark-Plasma-Sintern (SPS) oder drucklosem Sintern abgestimmt und erreicht hohe Dichten ohne separaten Pressschritt.",
        specs: {
          particleSize: "45–150 µm",
          sphericity: "&gt;0,9",
          consolidationRoute: "SPS / drucklose Sinterung",
          apparentDensity: "~4,0 g/cm³",
          greenStrength: "90 % von wasserverdüstem Pulver",
          flowability: "Hoch",
          copperContent: "&gt;99,9%",
          feedstock: "100% recycelt"
        },
        applications: "SPS-verdichtete Bauteile, drucklos gesinterte Komponenten, Funktionsbauteile"
      },
      fcppm: {
        photoAlt: "Mikroskopaufnahme von FCP-PM-Partikeln",
        eyebrow: "Pulvermetallurgie · Pressen &amp; Sintern",
        tagline: "Raue Oberfläche für hohe Grünfestigkeit.",
        desc: "Die rauen Partikeloberflächen von FCP-PM verklammern sich unter Druck und ergeben feste Grünlinge für klassische Press-Sinter-Verfahren — in ersten Versuchen 90 % der Grünfestigkeit von wasserverdüstem Pulver. Die breiteste der sechs Klassen, für allgemeine pulvermetallurgische Anwendungen ohne engen prozessspezifischen Schnitt.",
        specs: {
          particleSize: "20–150 µm",
          sphericity: "&gt;0,9",
          morphology: "Rau, verkugelt",
          apparentDensity: "~2,6 g/cm³",
          greenStrength: "90 % von wasserverdüstem Pulver",
          copperContent: "&gt;99,9%",
          feedstock: "100% recycelt"
        },
        applications: "Press-Sinter-Bauteile, Lager, Strukturbauteile"
      }
    },
    company: {
      eyebrow: "Unternehmen",
      title: "Achthundertfünfzig Jahre Bergbau, ein neuer Materialkreislauf.",
      lede: "FlexCycle Solutions wurde aus der TU Bergakademie Freiberg ausgegründet — der ältesten Bergakademie der Welt — in der Stadt, die die europäische Metallurgie seit über acht Jahrhunderten prägt.",
      story: "In Freiberg wird seit dem 12. Jahrhundert Metall gewonnen und verarbeitet. FlexCycle setzt diese Tradition mit einer anderen Ressource fort: nicht Erz aus dem Boden, sondern dünnwandige Kupferreststoffe, die in der Batteriezellfertigung in wachsenden Mengen übrig bleiben. Unser Team hat das Verfahren am Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik (IART) der TU Bergakademie Freiberg entwickelt. Dieser mechanische Weg überführt die Reststoffe direkt in Pulver und überspringt den Schmelzschritt, auf den die konventionelle Pulverherstellung angewiesen ist.",
      valuesTitle: "Woran wir uns halten",
      values: [
        { title: "Mechanisch, nicht geschmolzen", desc: "Jeder Prozessschritt vermeidet das erneute Schmelzen des Metalls und senkt den Energiebedarf an der Quelle." },
        { title: "Kreislauf von Grund auf", desc: "Der Einsatzstoff stammt aus Produktionsrückständen statt aus frischem Bergbau — der Kreislauf schließt sich, bevor das Metall zu Abfall wird." },
        { title: "Definierte Klassen statt Einheitspulver", desc: "Sechs definierte Klassen bedeuten: Kunden bestellen nach Korngröße und Morphologie — kein Einheitspulver für alles." }
      ],
      teamTitle: "Führungsteam",
      teamPhotoAlt: "Das Team von FlexCycle Solutions in Freiberg",
      lab: { label: "Unser Labor am IART", credit: "Foto: IART", alt: "Versuchsanlage im Labor des IART" },
      freiberg: { label: "Freiberg, Sachsen", credit: "Foto: TU Bergakademie Freiberg / Universitätsbibliothek", alt: "Blick über Freiberg, Sachsen" },
      roles: {
        mech: "Maschinenbauingenieur",
        cs: "Informatikingenieur",
        env: "Umweltingenieur",
        tb: "Informatik · Finanzen &amp; Wirtschaftlichkeit",
        jg: "Automobilproduktion &amp; Leichtbau · Strategie &amp; Kunden",
        et: "Umwelttechnik · Prozessentwicklung &amp; Validierung",
        pn: "Maschinenbau · Zerkleinerung &amp; Automatisierung"
      },
      milestones: {
        eyebrow: "Meilensteine",
        title: "Vom Forschungsprojekt zum Unternehmen",
        items: [
          { title: "CuprAlUp", desc: "Ein über das ZIM-Programm des Bundeswirtschaftsministeriums gefördertes Forschungsprojekt. Erstmals standen feine Kupferfraktionen aus der Batteriefertigung im Fokus — mit ersten Tests im Laserauftragsschweißen mit mechanisch erzeugtem Pulver." },
          { title: "Patentanmeldungen", desc: "Deutsche Anmeldung DE 10 2023 115 631 im Juni 2023, gefolgt von der europäischen Anmeldung EP 4 480 604 im Juni 2024." },
          { title: "LiCARE", desc: "Ein von der Deutschen Bundesstiftung Umwelt (DBU) gefördertes Projekt, das die Arbeiten auf Beschichtungsanwendungen und weitere Stoffströme ausweitet." },
          { title: "Validierungsförderung &amp; Pilotanlage", desc: "Gefördert von der Sächsischen Aufbaubank und der EU prüfen wir die technische und wirtschaftliche Tragfähigkeit einer Ausgründung. Parallel entsteht auf dem Kreislaufwirtschafts-Campus CircEcon in der Lausitz eine Pilotanlage im semiindustriellen Maßstab." },
          { title: "EXIST-Forschungstransfer", desc: "Gefördert im EXIST-Programm: Hochskalierung des Verfahrens zur Pilotlinie, standardisierte Pulverchargen, Tests mit Pilotanwendern und Vorbereitung der Ausgründung." },
          { title: "Gründung", desc: "Geplante Gründung als GmbH in Chemnitz, nahe dem Technologie-Campus der TU Chemnitz und 40 km von Freiberg entfernt." }
        ]
      },
      network: {
        title: "Forschungsnetzwerk",
        lede: "Partner für Tests, Qualifizierung und Hochskalierung.",
        partners: [
          "Heimatinstitut mit Laboren für Analytik, Aufschluss und Zerkleinerung",
          "Tests in der additiven Fertigung",
          "Tests in der additiven Fertigung, u. a. LPBF",
          "Gründungsnetzwerk, das das Team seit über drei Jahren begleitet",
          "Kreislaufwirtschafts-Campus in der Lausitz, Standort unserer Pilotanlage"
        ]
      }
    },
    career: {
      eyebrow: "Karriere",
      title: "Bauen Sie die mechanische Alternative mit uns.",
      lede: "Wir sind ein kleines, ingenieurgeführtes Team aus Freiberg und bringen ein patentiertes Verfahren vom Labor in die Pilotlinie. Sehen Sie keine passende offene Stelle, wollen aber an geschlossenen Metallkreisläufen mitarbeiten? Dann melden Sie sich gern.",
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
        error: "Beim Versand der Bewerbung ist etwas schiefgelaufen — bitte schreiben Sie uns direkt an info@miona-powders.com.",
        errorRequired: "Dieses Feld ist erforderlich.",
        errorEmail: "Bitte eine gültige E-Mail-Adresse angeben."
      }
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Sprechen Sie mit dem Team.",
      lede: "Fragen zu einer Klasse, Probenmaterial für eigene Versuche oder einer Forschungspartnerschaft — erreichen Sie uns direkt.",
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
        sentGeneral: "Danke — Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.",
        sentQuote: "Danke — Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.",
        error: "Ihre Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an info@miona-powders.com.",
        errorRequired: "Dieses Feld ist erforderlich.",
        errorEmail: "Bitte eine gültige E-Mail-Adresse angeben."
      }
    },
    film: { play: "Imagefilm ansehen", aria: "Imagefilm von FlexCycle Solutions" },
    ph: {
      sem: "Mikroskopaufnahme: FCP-Partikel (REM)",
      teamWork: "Foto: das Team bei der Arbeit im Labor"
    },
    legal: {
      imprint: {
        pageTitle: "FlexCycle Solutions — Impressum",
        title: "Impressum",
        intro: "FlexCycle Solutions ist ein Gründungsvorhaben in Vorbereitung am Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik (IART) der TU Bergakademie Freiberg. Eine Gesellschaft ist noch nicht gegründet; bis dahin ist die nachstehend genannte Person Anbieter dieser Website.",
        providerTitle: "Angaben gemäß § 5 DDG",
        provider: "Julius Eik Grimmenstein<br>c/o TU Bergakademie Freiberg<br>Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik (IART)<br>Lampadiusstraße 4<br>09599 Freiberg<br>Deutschland",
        contactTitle: "Kontakt",
        contact: "Telefon: +49&nbsp;3731&nbsp;39&nbsp;3768<br>E-Mail: <a href=\"mailto:info@miona-powders.com\">info@miona-powders.com</a>",
        responsibleTitle: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        responsible: "Julius Eik Grimmenstein, Anschrift wie oben",
        registerTitle: "Handelsregister und Umsatzsteuer",
        register: "Ein Eintrag im Handelsregister und eine Umsatzsteuer-Identifikationsnummer bestehen noch nicht, da bisher keine Gesellschaft gegründet ist.",
        creditsTitle: "Bildnachweise",
        credits: "Blick über Freiberg: TU Bergakademie Freiberg / Universitätsbibliothek. Laborfoto: IART. Sofern nicht anders angegeben, stammen alle weiteren Fotos, Mikroskopaufnahmen und der Imagefilm vom Team von FlexCycle Solutions und vom IART. Die Logos unserer Unterstützer sind Eigentum der jeweiligen Inhaber."
      },
      privacy: {
        pageTitle: "FlexCycle Solutions — Datenschutzerklärung",
        title: "Datenschutzerklärung",
        controllerTitle: "1. Verantwortlicher",
        controller: "Verantwortlicher im Sinne der DSGVO (Gründungsvorhaben FlexCycle Solutions; eine Gesellschaft ist noch nicht gegründet):<br><br>Julius Eik Grimmenstein<br>c/o TU Bergakademie Freiberg<br>Institut für Aufbereitungsmaschinen und Recyclingsystemtechnik (IART)<br>Lampadiusstraße 4<br>09599 Freiberg<br>Deutschland<br>E-Mail: <a href=\"mailto:info@miona-powders.com\">info@miona-powders.com</a><br>Telefon: +49&nbsp;3731&nbsp;39&nbsp;3768",
        overviewTitle: "2. Überblick",
        overview: "Diese Website verwendet keine Cookies, kein Tracking und keine Analysedienste. Schriften, Skripte, Bilder und das Video werden ausschließlich von unserem Hosting-Anbieter ausgeliefert; beim Besuch der Website werden keine Daten an weitere Dritte übermittelt.",
        hostingTitle: "3. Hosting",
        hosting: "Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf verarbeitet GitHub technisch notwendige Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Seite sowie Angaben zu Browser und Betriebssystem, um die Website auszuliefern und ihre Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einer sicheren und zuverlässigen Bereitstellung der Website. Dabei kann eine Übermittlung in die USA erfolgen; GitHub nimmt am EU-US Data Privacy Framework teil. Weitere Informationen: <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" target=\"_blank\" rel=\"noopener\">GitHub Privacy Statement</a>.",
        formsTitle: "4. Kontakt- und Angebotsformular",
        forms: "Wenn Sie das Kontakt- oder Angebotsformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten (Name, Unternehmen, E-Mail-Adresse, Ihre Nachricht sowie bei Angebotsanfragen die gewünschte Klasse und die geschätzte Menge), um Ihre Anfrage zu beantworten. Das Formular wird über Web3Forms (web3forms.com) übermittelt, einen Formulardienst, der die Einsendung per E-Mail an uns weiterleitet und als unser Auftragsverarbeiter tätig ist; dessen Server können außerhalb der EU liegen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen möglichen Vertrag gerichtet ist (z. B. eine Angebotsanfrage), im Übrigen Art. 6 Abs. 1 lit. f DSGVO auf Grundlage unseres Interesses an der Beantwortung von Anfragen. Wir löschen Ihre Anfrage, sobald sie abschließend bearbeitet ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        emailTitle: "5. Kontakt per E-Mail oder Telefon",
        email: "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage auf denselben Rechtsgrundlagen wie oben.",
        storageTitle: "6. Speicherung in Ihrem Browser",
        storage: "Ihre Sprachauswahl (Deutsch oder Englisch) wird im lokalen Speicher Ihres Browsers (localStorage) abgelegt, damit die Website sie beim nächsten Besuch beibehält. Diese Information verlässt Ihr Gerät nicht. Die Speicherung ist für die von Ihnen gewünschte Funktion erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können sie jederzeit in den Einstellungen Ihres Browsers löschen.",
        rightsTitle: "7. Ihre Rechte",
        rights: "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO können Sie jederzeit widersprechen (Art. 21). Wenden Sie sich dafür an <a href=\"mailto:info@miona-powders.com\">info@miona-powders.com</a>. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, zum Beispiel bei der Sächsischen Datenschutz- und Transparenzbeauftragten.",
        updated: "Stand: Oktober 2026"
      }
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
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var val = resolve(dict, el.getAttribute('data-i18n-alt'));
      if (val !== null) el.setAttribute('alt', val);
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
