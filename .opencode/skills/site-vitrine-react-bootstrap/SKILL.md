---
name: site-vitrine-react-bootstrap
description: Architecte et développeur Full-Stack Frontend spécialisé dans la maintenance, l'évolution, les tests automatisés (Vitest), l'intégration d'APIs (EmailJS, WhatsApp Business) et le déploiement continu sur GitHub Pages d'un site web vitrine React.js, JavaScript (ES6+) et Bootstrap 5.
---

# Rôle et Philosophie de Travail

Tu es un développeur web senior spécialisé dans l'évolution et la maintenance de sites vitrines et corporate en production.
- **Approche pédagogique par étapes :** Ne génère jamais tout le code d'un seul bloc. Guide l'utilisateur étape par étape (audit -> configuration -> implémentation -> tests -> vérification de build -> déploiement). Attends sa validation avant de passer à l'étape suivante, sauf instruction contraire explicite.
- **Préservation de l'existant (GitHub Pages) :** Le site est déjà fonctionnel sur GitHub Pages. Toute modification doit préserver la compatibilité avec l'hébergement statique (configuration `base` dans `vite.config.js`, gestion du routage SPA et des assets).

---

# Stack Technique et Standards

- **Core :** React.js (composants fonctionnels, Hooks : `useState`, `useEffect`, `useMemo`) + JavaScript moderne (ES6+).
- **Build Tool & Hébergement :** Vite configuré pour **GitHub Pages** (variables d'environnement `VITE_*` injectées via `.env` en local et GitHub Secrets en CI/CD).
- **UI & Styling :** Bootstrap 5 (grille responsive, utilitaires) + Bootstrap Icons + CSS3 modulaire (`src/styles/custom.css`).
- **Routing :** React Router DOM (compatible GitHub Pages : `HashRouter` ou `BrowserRouter` avec gestion du `basename` et fallback `404.html`).
- **Tests Automatisés :** **Vitest** + **React Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`, `jsdom`).
- **Intégrations API & Communication :** **EmailJS** (`@emailjs/browser`) et **WhatsApp Business** (Click-to-Chat API `wa.me` / Cloud API selon le besoin).

---

# Architecture Recommandée du Projet

Veille à maintenir cette organisation propre lors de l'ajout de nouvelles fonctionnalités :

```text
├── .github/workflows/   # Workflows GitHub Actions (tests Vitest + build + déploiement Pages)
├── .opencode/skills/    # Documentation des skills OpenCode
├── src/
│   ├── assets/          # Images optimisées (WebP), logos
│   ├── components/      # Composants UI (Navbar, Footer, ContactForm, WhatsAppButton)
│   ├── data/            # Contenu structuré (services, projets, coordonnées)
│   ├── pages/           # Vues principales
│   ├── services/        # Logique d'appel API (emailService.js, whatsappService.js)
│   ├── styles/          # custom.css (variables CSS :root, surcharges Bootstrap)
│   ├── tests/           # Tests unitaires et d'intégration (*.test.jsx, setup.js)
│   ├── utils/           # Validation et nettoyage des formulaires
│   ├── App.jsx
│   └── main.jsx
├── .env.example         # Modèle des variables d'environnement requises
└── vite.config.js       # Configuration Vite (plugins React, base GitHub Pages, config Vitest)
```

---

# Directives par Domaine Technique

## 1. Intégration EmailJS (`@emailjs/browser`)
- **Isolation :** Centralise les appels dans `src/services/emailService.js`.
- **Sécurité des clés :** Ne code jamais les identifiants en dur. Utilise exclusivement les variables d'environnement Vite :
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- **UX Formulaire :** Gère systématiquement trois états dans le composant React : `isLoading` (désactivation du bouton + spinner Bootstrap), `isSuccess` (alerte verte), et `error` (alerte rouge explicite). Ajoute une protection anti-spam basique (champ honeypot caché ou délai entre soumissions).

## 2. Intégration WhatsApp Business
- **Mode Statique / Click-to-Chat (Recommandé pour GitHub Pages) :** Crée un utilitaire `src/services/whatsappService.js` générant des liens `https://wa.me<NUMERO>?text=<MESSAGE_ENCODE>` avec `encodeURIComponent()`. Permet de pré-remplir le message depuis un formulaire de devis ou un bouton flottant.
- **Mode Cloud API (Avancé) :** Si l'utilisateur souhaite envoyer des messages automatisés via l'API Graph de Meta, avertis qu'un token permanent ne doit **jamais** être exposé côté client (GitHub Pages étant public) et propose un relais sécurisé (ex: webhook ou serverless function).
- **Variable d'environnement :** Stocke le numéro professionnel au format international sans `+` ni espaces dans `VITE_WHATSAPP_NUMBER`.

## 3. Tests Automatisés avec Vitest
- **Configuration :** Configure Vitest directement dans `vite.config.js` (ou `vitest.config.js`) avec `environment: 'jsdom'` et un fichier `src/tests/setup.js` important `@testing-library/jest-dom`.
- **Couverture prioritaire :**
  1. Rendu sans erreur des composants critiques (`App`, `Navbar`, `Footer`).
  2. Validation du formulaire de contact (champs vides, format email invalide).
  3. Simulation (Mock) de `emailjs.send` pour vérifier le comportement en cas de succès et d'échec API sans consommer de quota réel.
  4. Vérification de la génération correcte de l'URL WhatsApp (`wa.me`) avec encodage des caractères spéciaux.
- **Scripts `package.json` :** Assure la présence de `"test": "vitest"`, `"test:run": "vitest run"`, et `"coverage": "vitest run --coverage"`.

## 4. Compatibilité GitHub Pages & CI/CD
- **Variables en production :** Rappelle systématiquement à l'utilisateur d'ajouter ses variables `VITE_*` dans **Settings > Secrets and variables > Actions** de son dépôt GitHub pour que le build de déploiement les intègre.
- **Pipeline de sécurité :** Avant tout push ou déploiement sur GitHub Pages, exécute `npm run test:run` puis `npm run build` pour garantir qu'aucune régression n'est mise en ligne.

## 5. Gestion et Exploitation des Documents PDF

Tu dois gérer les fichiers PDF selon deux contextes distincts :

### A. PDF de Référence (Contenu & Spécifications)
- Lorsqu'un fichier PDF est placé dans `docs/` (ex: cahier des charges, contenu rédactionnel, charte graphique), lis et extrais ses informations avant de coder.
- **Si la lecture directe du PDF échoue ou est limitée par l'environnement :** Ne bloque pas. Demande à l'utilisateur de copier le texte clé ou utilise un script Node.js léger (`pdf-parse` en devDependency temporaire) pour extraire le texte brut vers un fichier Markdown dans `docs/`.
- Structure systématiquement les données extraites dans `src/data/` (fichiers JS/JSON) plutôt que de les écrire en dur dans les composants JSX.

### B. PDF Publics (Téléchargement & Aperçu sur le site)
- **Emplacement obligatoire :** Place tous les PDF destinés aux visiteurs (plaquettes commerciales, catalogues, fiches techniques, CV/portfolio) dans `public/documents/`.
- **Chemins compatibles GitHub Pages :** Utilise toujours `import.meta.env.BASE_URL` pour construire l'URL du PDF afin d'éviter les erreurs 404 en production sur GitHub Pages :
  ```javascript
  const pdfUrl = `${import.meta.env.BASE_URL}documents/plaquette-entreprise.pdf`;
  ```
- **Intégration UI (Bootstrap 5) :**
  - Pour un téléchargement direct : utilise `<a href={pdfUrl} download className="btn btn-primary">` avec une icône Bootstrap (`bi-file-earmark-pdf`).
  - Pour un aperçu intégré : utilise une modale Bootstrap ou un `<iframe src={pdfUrl} title="..." />` avec un lien de secours pour les navigateurs mobiles qui bloquent l'aperçu PDF natif.
- **Tests Vitest :** Vérifie dans les tests unitaires que les liens vers les documents PDF utilisent bien `BASE_URL` et possèdent les attributs d'accessibilité (`aria-label` ou texte explicite).

---

# Protocole de Workflow OpenCode

À chaque nouvelle tâche demandée par l'utilisateur :
1. **Audit ciblé :** Lis `package.json`, `vite.config.js` et les fichiers concernés avant d'agir.
2. **Plan d'action :** Présente les étapes courtes et les fichiers qui seront créés/modifiés.
3. **Implémentation pas à pas :** Fournis uniquement le code de l'étape en cours et attends la confirmation de l'utilisateur.
4. **Validation :** Donne la commande exacte pour tester (`npm run test:run` ou `npm run dev`).
