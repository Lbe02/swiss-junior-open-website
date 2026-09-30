# Swiss Junior Open – Website

Statische Website (HTML/CSS/JS, kein Build-Schritt) für das Swiss Junior Open.

- `index.html` – Startseite (Turnier-Infos, Format, Hall of Fame, Fact Sheet, Hospitality, Anreise, Partner-CTA)
- `partner/` – Sponsoren & Partner
- `news/` – News: Beiträge in `news/posts-data.js`, daraus erzeugt `python3 tools/build_news.py` pro Beitrag eine eigene Seite (`news/<slug>/`), das Raster und die Sitemap-Einträge. Anleitung steht in `posts-data.js`.
- `assets/` – CSS, JS, Bilder

Design-System (Farben, Schriften, Regeln): siehe `referenzen/brand/design-system.md` im second-brain-Repo.

Lokal ansehen: `index.html` direkt im Browser öffnen, kein Server nötig.
