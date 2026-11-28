lines = [
 "AUDIT FINAL - SECURITE, PERFORMANCE, SEO",
 "Projet: NexaWeb Mali (React + Vite + Netlify)",
 "Date: 28 novembre 2026",
 "",
 "=== 1. SECURITE ===",
 "npm audit: 0 vulnerabilite",
 "CSP: presente dans index.html (default-src self, frame-ancestors none)",
 "Secrets: aucun secret dans le depot",
 "Liens externes: rel=noopener noreferrer systematique",
 "Honeypot: present dans le formulaire de devis",
 "Headers Netlify: X-Frame-Options DENY, X-Content-Type-Options nosniff,",
 "  Referrer-Policy strict-origin-when-cross-origin",
 "Maintenance: redirection client-side (contournable si JS desactive)",
 "",
 "=== 2. PERFORMANCE ===",
 "Code-splitting: React.lazy + Suspense (chunks par page)",
 "Lazy loading: loading=lazy sur toutes les images",
 "Tree-shaking Bootstrap: CSS 315 -> 280 kB (Sass partials)",
 "Images: conversion WebP (toutes les images converties)",
 "Cache: Cache-Control public, max-age=31536000, immutable (assets)",
 "Bundle: CSS 280 kB, JS principal 241 kB + chunks",
 "Lighthouse: Performance 70 (a re-mesurer apres optimisations)",
 "",
 "=== 3. SEO ===",
 "Meta tags: title, description, theme-color, canonical",
 "Open Graph: og:title, og:description, og:type, og:site_name, og:locale, og:image",
 "Twitter Card: summary_large_image",
 "Hreflang: fr, en, x-default",
 "JSON-LD: ProfessionalService (nom, url, telephone, email, adresse)",
 "robots.txt: present (Allow: /, Sitemap reference)",
 "sitemap.xml: present (8 URLs)",
 "Google Search Console: a configurer (verification + soumission sitemap)",
 "",
 "=== 4. ACCESSIBILITE ===",
 "Skip link: Aller au contenu (visually-hidden-focusable)",
 "aria-label sur navbar, boutons, images",
 "aria-pressed sur filtres",
 "Contraste: charte navy/or/vert (a verifier Lighthouse)",
 "",
 "=== 5. TESTS ===",
 "Vitest + React Testing Library: 7 tests passants",
 "App, Contact (3), Navbar, Services, Realisations",
 "Couverture: rendu, validation formulaire, WhatsApp URL, filtres",
 "",
 "=== 6. STRUCTURE ===",
 "Pages: Accueil, Services, Realisations, A-propos, Contact, Mentions,",
 "  Confidentialite, 404, Maintenance",
 "Etudes de cas: 9 projets avec image, description, technologies, galerie slide",
 "i18n: FR/EN/BM/ZH/RU (cles partielles)",
 "Hebergement: Netlify (nexawebmali.com)",
 "",
 "=== 7. RECOMMANDATIONS RESTANTES ===",
 "1. Compresser les images restantes en WebP (fait)",
 "2. Ajouter tests Vitest (fait: Navbar, Services, Realisations)",
 "3. Completer i18n (fait partiellement)",
 "4. Mesurer Lighthouse apres deploiement (a faire)",
 "5. Configurer Google Search Console + soumettre sitemap",
 "",
 "=== CONCLUSION ===",
 "Le site est securise (0 vulnerabilite, CSP, pas de secrets),",
 "performant (code-splitting, lazy loading, WebP, tree-shaking),",
 "et optimise pour le SEO (meta, OG, JSON-LD, sitemap, robots).",
 "Score Lighthouse a re-mesurer apres les dernieres optimisations.",
]

ops = []
y = 750
for line in lines:
    safe = line.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
    ops.append(f"BT /F1 9 Tf 50 {y} Td ({safe}) Tj ET")
    y -= 12
    if y < 50:
        y = 750

stream = "\n".join(ops)
pdf = f"""%PDF-1.4
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj
4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj
5 0 obj << /Length {len(stream)} >> stream
{stream}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000348 00000 n 
trailer << /Size 6 /Root 1 0 R >>
startxref
{348 + len(stream) + 20}
%%EOF
"""

with open("../docs/Audit-Final-Securite-Performance-SEO.pdf", "wb") as f:
    f.write(pdf.encode("latin-1"))

print("PDF created")