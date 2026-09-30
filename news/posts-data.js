// News-Beiträge für die Raster-Seite unter /news/.
//
// So fügst du eine neue Meldung hinzu (kein Programmieren nötig):
// 1. Kopiere einen kompletten { ... } Block unten (inklusive Kommas).
// 2. Füge ihn ganz oben in das posts-Array ein (neueste zuerst).
// 3. Passe die Felder an:
//    - title: Überschrift der Meldung
//    - date: Datum im Format "YYYY-MM-DD" (erscheint auf der Karte)
//    - tournament: "swiss-junior-open" oder "allgemein" (steuert die farbige Markierung)
//    - image: Pfad zu einem Bild unter ../assets/img/ (oder leer lassen: "")
//    - excerpt: Kurztext auf der Karte (1-2 Sätze)
//    - body: Array von Absätzen für die Detailansicht (jeder Eintrag = ein Absatz)
// 4. Datei speichern. Fertig, kein Server-Neustart nötig.

const posts = [
  {
    title: "Das Swiss Junior Open hat eine neue Website",
    date: "2026-09-30",
    tournament: "swiss-junior-open",
    image: "../assets/img/news-website-launch.jpg",
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
    title: "Ein Monat danach: Rückblick auf das Swiss Junior Open 2026",
    date: "2026-08-29",
    tournament: "swiss-junior-open",
    image: "../assets/img/sjo-siegerehrung.jpg",
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
