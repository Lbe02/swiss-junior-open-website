#!/usr/bin/env python3
"""Erzeugt die News-Seiten aus news/posts-data.js.

Schreibt:
- news/<slug>/index.html  eine eigene, von Google lesbare Seite pro Beitrag
- news/index.html         das Raster zwischen den NEWS-GRID-Markern
- sitemap.xml             die News-Einträge zwischen den NEWS-Markern

Aufruf im Repo-Ordner: python3 tools/build_news.py
"""

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://swissjunioropen.tennis"
TAG_LABEL = {"swiss-junior-open": "Swiss Junior Open", "allgemein": "Allgemein"}


def load_posts():
    src = (ROOT / "news" / "posts-data.js").read_text(encoding="utf-8")
    src = re.sub(r"^\s*//.*$", "", src, flags=re.M)
    src = src[src.index("[") : src.rindex("]") + 1]
    src = re.sub(r"^(\s*)([A-Za-z_]\w*):", r'\1"\2":', src, flags=re.M)
    src = re.sub(r",(\s*[\]}])", r"\1", src)
    posts = json.loads(src)
    for p in posts:
        if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", p.get("slug", "")):
            raise SystemExit(f"Ungültiger oder fehlender slug bei: {p.get('title')}")
    slugs = [p["slug"] for p in posts]
    if len(slugs) != len(set(slugs)):
        raise SystemExit("Doppelter slug in posts-data.js")
    return sorted(posts, key=lambda p: p["date"], reverse=True)


def esc(text):
    return html.escape(text, quote=True)


def fmt_date(iso):
    y, m, d = iso.split("-")
    return f"{d}.{m}.{y}"


def img_url(image):
    # "../assets/img/x.jpg" -> "/assets/img/x.jpg"
    return "/assets/" + image.split("assets/", 1)[1] if image else ""


def card(p):
    thumb = (
        f'<img class="thumb" src="{esc(p["image"])}" alt="{esc(p.get("imageAlt", ""))}" loading="lazy">'
        if p.get("image")
        else ""
    )
    return f"""      <a class="news-card reveal" href="{p['slug']}/index.html">
        {thumb}
        <div class="body">
          <span class="tag {p['tournament']}">{TAG_LABEL.get(p['tournament'], p['tournament'])}</span>
          <h3>{esc(p['title'])}</h3>
          <p class="excerpt">{esc(p['excerpt'])}</p>
          <span class="date">{fmt_date(p['date'])}</span>
        </div>
      </a>"""


def article_page(p, shell):
    url = f"{SITE}/news/{p['slug']}/"
    image_abs = SITE + img_url(p["image"]) if p.get("image") else f"{SITE}/assets/img/sjo-hero.jpg"
    title = f"{p['title']} · Swiss Junior Open"
    ld = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": p["title"],
        "datePublished": p["date"],
        "image": [image_abs],
        "description": p["excerpt"],
        "mainEntityOfPage": url,
        "author": {"@type": "Organization", "name": "Swiss Junior Open"},
        "publisher": {"@type": "Organization", "name": "Swiss Junior Open", "url": SITE + "/"},
    }
    head = f"""<title>{esc(title)}</title>
<link rel="icon" type="image/png" href="../../assets/img/sjo-logo-mark.png">
<meta name="description" content="{esc(p['excerpt'])}">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{esc(p['title'])}">
<meta property="og:description" content="{esc(p['excerpt'])}">
<meta property="og:image" content="{image_abs}">
<meta property="og:locale" content="de_CH">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="{url}">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=2)}
</script>"""
    figure = (
        f'<img class="article-image" src="../{esc(p["image"])}" alt="{esc(p.get("imageAlt", ""))}">'
        if p.get("image")
        else ""
    )
    paragraphs = "\n".join(f"      <p>{esc(t)}</p>" for t in p["body"])
    main = f"""<section class="section-sand">
  <div class="wrap article">
    <a class="article-back" href="../index.html">Alle News</a>
    <span class="tag {p['tournament']}">{TAG_LABEL.get(p['tournament'], p['tournament'])}</span>
    <h1>{esc(p['title'])}</h1>
    <span class="article-date">{fmt_date(p['date'])}</span>
    {figure}
    <div class="article-body">
{paragraphs}
    </div>
  </div>
</section>"""
    page = shell
    page = re.sub(r"<title>.*?<link rel=\"canonical\"[^>]*>", lambda m: head, page, count=1, flags=re.S)
    page = re.sub(r'<section class="section-sand">.*?</section>', lambda m: main, page, count=1, flags=re.S)
    return page


def replace_between(text, start, end, content, where):
    pattern = re.compile(re.escape(start) + r".*?" + re.escape(end), re.S)
    if not pattern.search(text):
        raise SystemExit(f"Marker {start} fehlt in {where}")
    return pattern.sub(lambda m: f"{start}\n{content}\n{end}", text, count=1)


def main():
    posts = load_posts()
    index_path = ROOT / "news" / "index.html"
    index = index_path.read_text(encoding="utf-8")

    # Seitengerüst eine Ebene tiefer: relative Pfade um ../ verlängern
    shell = re.sub(r'(href|src)="\.\./', r'\1="../../', index)
    for p in posts:
        out = ROOT / "news" / p["slug"] / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(article_page(p, shell), encoding="utf-8")

    grid = "\n".join(card(p) for p in posts) or '      <div class="news-empty">Noch keine Meldungen.</div>'
    index_path.write_text(
        replace_between(index, "<!-- NEWS-GRID:START -->", "<!-- NEWS-GRID:END -->", grid, "news/index.html"),
        encoding="utf-8",
    )

    entries = []
    for p in posts:
        image = ""
        if p.get("image"):
            image = f"""
    <image:image>
      <image:loc>{SITE}{img_url(p['image'])}</image:loc>
      <image:title>{esc(p.get('imageAlt', p['title']))}</image:title>
    </image:image>"""
        entries.append(
            f"""  <url>
    <loc>{SITE}/news/{p['slug']}/</loc>
    <lastmod>{p['date']}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>{image}
  </url>"""
        )
    sitemap_path = ROOT / "sitemap.xml"
    sitemap = sitemap_path.read_text(encoding="utf-8")
    if "<!-- NEWS:START -->" not in sitemap:
        sitemap = sitemap.replace("</urlset>", "<!-- NEWS:START -->\n<!-- NEWS:END -->\n</urlset>")
    sitemap_path.write_text(
        replace_between(sitemap, "<!-- NEWS:START -->", "<!-- NEWS:END -->", "\n".join(entries), "sitemap.xml"),
        encoding="utf-8",
    )
    print(f"{len(posts)} Beiträge erzeugt: " + ", ".join(f"/news/{p['slug']}/" for p in posts))


if __name__ == "__main__":
    main()
