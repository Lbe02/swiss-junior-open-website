// News-Beiträge des Swiss Junior Open.
//
// Diese Datei ist die Quelle für alle News. Aus ihr erzeugt das Skript
// tools/build_news.py für jeden Beitrag eine eigene Seite unter /news/<slug>/,
// das Raster auf /news/ und die Einträge in sitemap.xml (damit Google
// Text und Bilder findet).
//
// Neuen Beitrag hinzufügen:
// 1. Einen kompletten { ... } Block kopieren und ganz oben ins posts-Array einfügen.
// 2. Felder anpassen:
//    - slug: Adresse der Seite, nur Kleinbuchstaben, Zahlen und Bindestriche (z.B. "rueckblick-2027")
//    - title: Überschrift
//    - date: Datum im Format "YYYY-MM-DD"
//    - tournament: "swiss-junior-open" oder "allgemein"
//    - image: Pfad unter ../assets/img/ (oder "")
//    - imageAlt: Bildbeschreibung für Google und Screenreader (was ist zu sehen?)
//    - excerpt: Kurztext für Karte und Google-Beschreibung (1-2 Sätze)
//    - body: Absätze des Beitrags
// 3. Im Repo-Ordner ausführen: python3 tools/build_news.py
// 4. Committen und pushen.

const posts = [
  {
    slug: "neue-website",
    title: "Das Swiss Junior Open hat eine neue Website",
    date: "2026-09-30",
    tournament: "swiss-junior-open",
    image: "../assets/img/news-website-launch.jpg",
    imageAlt: "Startseite der neuen Website swissjunioropen.tennis mit dem Claim «Die Bühne für die Tennisstars von morgen.»",
    excerpt:
      "Das höchstbewertete internationale Juniorenturnier der Schweiz zeigt sich online jetzt so, wie es sich auf der Anlage anfühlt: international, professionell und nah am Tennis von morgen.",
    body: [
      "Das Swiss Junior Open hat eine neue Website: swissjunioropen.tennis",
      "Das höchstbewertete internationale Juniorenturnier der Schweiz (World Tennis Junior Tour J200) zeigt sich online jetzt so, wie es sich auf der Anlage anfühlt: international, professionell und nah am Tennis von morgen.",
      "Die neue Website bündelt alles an einem Ort:",
      "· für Zuschauer und Publikum: Hall of Fame, Resultate seit 2022 und Livescores während des Turniers",
      "· für Medien: Fact Sheet, aktuelle News und Bilder vom Turnier",
      "· für Partner und Sponsoren: wer uns heute unterstützt und wie man Teil des Turniers wird",
      "· für Spielerinnen und Spieler: Turnierformat, Anreise und Hospitality, auf Deutsch und Englisch",
      "Ein wichtiger Schritt, um das Turnier weiter zu professionalisieren. Die nächste Austragung findet im Sommer 2027 am TC Old Boys Basel statt.",
    ],
  },
  {
    slug: "rueckblick-2026",
    title: "Ein Monat danach: Rückblick auf das Swiss Junior Open 2026",
    date: "2026-08-29",
    tournament: "swiss-junior-open",
    image: "../assets/img/sjo-siegerehrung.jpg",
    imageAlt: "Siegerehrung auf dem Centre Court mit Swiss Junior Open 2026 Bande",
    excerpt:
      "Über 100 Spielerinnen und Spieler aus über 25 Nationen, packende Matches und eine Atmosphäre, die zeigt, warum dieses Turnier für den Schweizer Nachwuchs so wichtig ist.",
    body: [
      "Ein Monat ist seit dem Swiss Junior Open 2026 vergangen – Zeit für einen Rückblick auf ein aussergewöhnliches Turnier.",
      "Als grösstes internationales Juniorenturnier der Schweiz (ITF J200) durften wir dieses Jahr wieder über 100 Spielerinnen und Spieler aus über 25 Nationen in Basel begrüssen. Packende Matches, hohes Niveau und eine Atmosphäre, die zeigt, warum dieses Turnier für den Schweizer Nachwuchs so wichtig ist.",
      "Eine schöne Geschichte am Rande: Eric Dylan Mueller gewann bereits vor vier Jahren das U14 Tennis Open Basel bei uns auf der Anlage des TC Old Boys Basel und holte sich dieses Jahr den Sieg beim grossen Swiss Junior Open. Und wir freuen uns riesig, dass mit Noelia Manta erstmals eine Schweizerin das Einzel bei uns gewinnen konnte!",
      "Nichts davon wäre möglich ohne unser grossartiges Team: Referees, Chairumpires, Platzcrew, Hotels, Ballkinder und alle, die im Hintergrund dafür gesorgt haben, dass alles reibungslos läuft. Ein riesiges Dankeschön an alle Freiwilligen, die Tage (und teils Nächte) investiert haben.",
      "Ebenso danken wir unseren Sponsoren und Partnern, ohne eure Unterstützung wäre ein Turnier in dieser Qualität schlicht nicht realisierbar.",
      "Wir freuen uns bereits jetzt auf die nächste Ausgabe des Swiss Junior Open.",
    ],
  },
];
