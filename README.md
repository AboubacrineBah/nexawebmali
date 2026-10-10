# NexaWeb Mali

![HTML5](https://img.shields.io/badge/HTML5-16213C?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-3E8E63?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-C99A2E?style=flat&logo=javascript&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-16213C?style=flat&logo=bootstrap&logoColor=white)

> **Le digital malien, pensé pour le monde.**

Site vitrine et portfolio de **NexaWeb Mali**, activité de développement web basée à Bamako (Mali). Ce dépôt contient l'interface utilisateur (front-end) du site, construite avec **Bootstrap 5**.

---

## À propos de NexaWeb Mali

NexaWeb Mali conçoit des sites, des applications et des solutions digitales modernes pour les entreprises, les entrepreneurs et les organisations. L'activité démarre au Mali, avec l'ambition de servir à terme des clients africains et internationaux.

**Services proposés :** sites WordPress professionnels, applications web React, développement front-end, développement back-end PHP, e-commerce, maintenance et sécurité WordPress, optimisation des performances, interfaces responsive, API et intégrations, solutions web sur mesure.

## Périmètre de ce dépôt

- Interface utilisateur uniquement : **HTML5, CSS3, JavaScript et Bootstrap 5.3**
- Pas de PHP ni de MySQL à ce stade (pas de traitement serveur : le formulaire de devis est une interface avec validation côté navigateur)
- Approche **mobile-first**, pensée pour des connexions mobiles de qualité variable

## Pages du site

| Page | Fichier | Rôle |
|---|---|---|
| Accueil | `index.html` | Présentation, technologies, aperçu des offres, appel à l'action |
| Services | `services.html` | Détail des offres et technologies |
| Réalisations | `realisations.html` | Portfolio avec filtres par catégorie |
| Étude de cas | `realisations/[projet].html` | Modèle de page pour détailler un projet |
| À propos | `a-propos.html` | Histoire, vision, valeurs, parcours |
| Contact & devis | `contact.html` | Formulaire de devis, coordonnées, WhatsApp |
| Mentions légales | `mentions-legales.html` | Informations légales |
| Confidentialité | `confidentialite.html` | Données personnelles et cookies |
| Erreur 404 | `404.html` | Page d'erreur avec liens utiles |

## Structure du projet

> À adapter si ton arborescence est différente.

```
nexawebmali/
├── assets/
│   ├── css/
│   │   └── bootstrap.min.css
│   │   └── nx.css
│   └── images/
│   │   └── AboubacrineBah1-1.jpg
│   │   └── Capture d'ecran page d'acceuil.jpeg
│   │   └── NexaWeb Mali acceuil.jpeg
│   │   └── NexaWeb Mali.png
│   │   └── Page d'acceuil section hero.jpeg
│   ├── js/
│   │   └── bootstrap.bundle.min.js
│   │   └── main.js
├── realisations/
│   └── afrique-artisanat.html
├── 404.html
├── a-propos.html
├── CNAME
├── confidentialite.html
├── contact.html
├── index.html
├── mentions-legales.html
├── README.md
├── realisations.html   
└── services.html
```

## Démarrer en local

1. Clone le dépôt :
   ```bash
   git clone https://github.com/AboubacrineBah/nexawebmali.git
   ```
2. Ouvre le dossier `nexawebmali` dans ton éditeur (par exemple Visual Studio Code).
3. Ouvre `index.html` dans ton navigateur, ou lance-le avec l'extension **Live Server** pour un rechargement automatique.

Aucune installation ni compilation n'est nécessaire.

## Identité visuelle

Le site suit la charte de marque NexaWeb Mali.

| Couleur | Code | Rôle |
|---|---|---|
| Bleu nuit | `#16213C` | Dominante : fonds, titres, éléments structurants |
| Vert | `#3E8E63` | Secondaire : accents, validations, progression |
| Or | `#C99A2E` | Accent, à utiliser avec parcimonie |
| Blanc | `#FFFFFF` | Fonds clairs et textes sur fond sombre |

**Typographie :** police serif (type Cambria / Georgia) pour les titres et le nom de marque, police sans-serif (type Calibri / Arial) pour le texte courant et l'interface.

## Objectifs de qualité

- Chargement rapide : LCP inférieur à 2,5 s sur mobile (4G simulée)
- Page d'accueil légère : 1 Mo maximum
- Scores Lighthouse mobile supérieurs ou égaux à 90 (Performance, Accessibilité, Bonnes pratiques, SEO)
- Accessibilité conforme à **WCAG 2.1 AA**, navigation complète au clavier
- Affichage correct de 320 px à 1920 px de large

## Feuille de route

- [x] Page d'accueil Bootstrap 5
- [x] Modèles des pages principales
- [x] Contenus définitifs et visuels des réalisations
- [ ] Mise en ligne et nom de domaine
- [ ] Blog (V1.1, optionnel)
- [ ] Version anglaise `/en/` (V1.1)
- [ ] Intégration PHP / MySQL pour le formulaire de devis (étape ultérieure)

## Contact

- **NexaWeb Mali** : Bamako, Mali
- Fondateur : BAH Aboubacrine
- E-mail : *bahaboubacrine1@gmail.com*
- WhatsApp : *0022382890992*

## Licence

© 2026 NexaWeb Mali. Tous droits réservés.
