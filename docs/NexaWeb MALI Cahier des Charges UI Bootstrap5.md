# NexaWeb MALI Cahier des Charges UI Bootstrap5.pdf

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 1 / 16
NexaWeb M A L I
Cahier des Charges
Interface utilisateur — Site vitrine & portfolio en Bootstrap 5
Nom du projet Site web NexaWeb Mali — interface utilisateur (front-end)
Type de projet Site vitrine + portfolio (blog en option)
Client NexaWeb Mali (projet interne) — M. BAH Aboubacrine, Bamako
Rédigé par NexaWeb Mali
Date 28/09/2026
Version V1.0 — proposition initiale à valider
Périmètre Front-end uniquement : HTML5, CSS3, JavaScript et Bootstrap 5.3.x. Pas de PHP ni de
MySQL à ce stade.
Comment lire ce document — il suit le modèle générique NexaWeb Mali (sections 1 à 12), complété par une
section 13 « Propositions, conseils et éléments manquants » et des annexes. Les encadrés Proposition sont
des recommandations à valider ; les encadrés À trancher sont des décisions à prendre avant de démarrer. La
page d'accueil Bootstrap 5 déjà validée sert de référence visuelle et technique : toutes les autres pages
doivent en reprendre les composants et les styles.
Synthèse
Ce que ce cahier des charges fixe
• Périmètre : un site multi-pages statique, en HTML5/CSS3/JavaScript et Bootstrap 5.3, mobile-first, aux
couleurs de la charte de marque.
• Pages (V1) : Accueil, Services, Réalisations, Étude de cas (modèle), À propos, Contact & devis, Mentions
légales, Confidentialité et page 404. Blog et version anglaise en option (V1.1).
• Exigences fortes : performance (site léger, adapté aux connexions mobiles variables), accessibilité WCAG
2.1 AA, cohérence stricte avec la charte (couleurs, typographie, règles du logo).
• Continuité : la page d'accueil validée est la référence ; on en extrait un socle de composants réutilisables.
Nos propositions clés (détail en section 13)
• Un portfolio de 3 projets de démonstration clairement étiquetés, pour ne pas lancer un site sans
réalisations.
• Un bouton WhatsApp et un numéro cliquable en plus du formulaire de devis.
• Un kit de départ « NexaWeb Starter » (ce site + une page de styleguide) réutilisable pour les offres
vitrine.
• Une version anglaise préparée dès la structure, pour l'objectif de 40 % de chiffre d'affaires à l'export.
• Un budget de performance vérifié à chaque livraison, et un e-mail professionnel au nom de domaine.
À trancher avant de démarrer
• Domaine principal : la charte place nexaweb.ml en priorité 1, alors que le business plan et la présentation
annoncent nexawebmali.com.
• En-tête et pied de page communs : copier-coller sur chaque page, ou simple include PHP (voir 13.2).

-- 1 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 2 / 16
• Tarifs affichés ou non sur le site, et sous quelle forme.
• Langues au lancement : français seul, ou français + anglais.
1. Cadrage du Type de Projet
Le projet combine plusieurs types du modèle NexaWeb Mali. Seules les lignes retenues sont développées dans
les sections 5 et 6.
Type de projet Retenu ? Pages / sections concernées Commentaire
Site vitrine Oui (cœur) Accueil, Services, À propos, Contact Présenter l'offre BUILD / ADVANCED /
RUN et générer des demandes de devis.
Portfolio Oui Réalisations, études de cas,
témoignages
C'est le « portfolio de preuve » de la
première étape prioritaire du business
plan.
Blog / média Option V1.1 Liste d'articles, fiche article Utile au SEO éditorial ; à lancer quand le
contenu est prêt.
E-commerce Non — Présenté comme service et via un projet
de démonstration, pas comme fonction
du site.
Application web /
SaaS
Non — Le pôle ADVANCED (React/PHP) pourra
être illustré par une démo en V2.
2. Présentation du Projet
2.1 Contexte
NexaWeb Mali est une activité de développement web basée à Bamako, née comme freelance, avec l'ambition
de devenir une agence digitale servant des clients africains et internationaux (charte, § 10). Le business plan
place en première priorité la mise en ligne d'un portfolio de preuve qui démontre le savoir-faire front-end. Une
page d'accueil Bootstrap 5 a été produite et validée ; ce cahier des charges l'étend à l'ensemble du site multi-
pages.
2.2 Objectifs
• Crédibiliser NexaWeb Mali face aux TPE/PME, aux agences (sous-traitance) et aux startups.
• Générer des demandes de devis qualifiées, en local comme à l'export (Malt, Upwork).
• Démontrer le savoir-faire par la qualité du site lui-même : design soigné, rapidité, accessibilité.
• Poser un socle réutilisable de composants Bootstrap pour les futurs sites clients.
• Préparer l'export : structure prête pour une version anglaise (objectif de 40 % du CA à l'export en fin
d'Année 2).
2.3 Indicateurs de succès
Indicateur Cible
Chargement perçu (LCP), mobile, réseau 4G
simulé
< 2,5 secondes
Poids de la page d'accueil ≤ 1 Mo au total

-- 2 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 3 / 16
Indicateur Cible
Scores Lighthouse (mobile) ≥ 90 en Performance, Accessibilité, Bonnes pratiques et SEO
Accessibilité Aucune erreur bloquante (WAVE / axe) ; navigation complète au clavier
Affichage Aucun défaut bloquant de 320 px à 1920 px de large
Demandes de devis / clics WhatsApp par
mois
À définir après le premier mois de mesure
3. Présentation du Commanditaire
Identité NexaWeb Mali — M. BAH Aboubacrine, fondateur. Statut : indépendant / petite entreprise
individuelle (à confirmer lors de l'enregistrement).
Activité Conception de sites, applications et solutions digitales pour entreprises, entrepreneurs et
organisations. Stack : WordPress, React, PHP, HTML5, CSS3, Bootstrap.
Positionnement Entre les agences aux frais élevés et les prestations low-cost peu fiables : double maîtrise
WordPress / React-PHP, rare sur le marché bamakois.
Signature « Le digital malien, pensé pour le monde ».
Valeurs Excellence technique, Transparence, Agilité, Impact.
Concurrents / références À compléter (les documents fournis ne les listent pas). Pistes : 2 agences web de Bamako,
2 portfolios de freelances internationaux (Malt / Upwork), 1 site conçu avec un outil no-
code (Wix, Framer) pour comprendre l'offre concurrente.
4. Public Cible
Profil Besoin Ce que l'interface doit apporter
TPE/PME locales
(commerçants, artisans,
services)
Une vitrine professionnelle pour asseoir
leur crédibilité.
Langage simple, offres et fourchettes de prix
lisibles, contact facile (WhatsApp, téléphone).
Agences web et de
communication
Un sous-traitant fiable pour les pics de
charge.
Preuves techniques, stack claire, études de
cas détaillées.
Startups et porteurs de
projets
Des interfaces dynamiques et des
applications monopages.
Démonstration de la maîtrise React / PHP,
démarche de projet expliquée.
Clients internationaux
(Malt, Upwork)
Un talent qualifié, fiable, disponible en
télétravail.
Version anglaise, fuseau GMT mis en avant,
portfolio très visuel.
Zone géographique : locale (Bamako), sous-régionale, puis internationale.
Action attendue : demander un devis (formulaire) ou écrire sur WhatsApp ; action secondaire : consulter les
réalisations.
Hypothèse à valider — usage majoritairement sur smartphone, avec des connexions mobiles de qualité
variable. À confirmer avec les statistiques de visite après la mise en ligne ; d'ici là, on conçoit mobile-first et
léger.

-- 3 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 4 / 16
5. Périmètre Fonctionnel
5.1 Arborescence / structure
Page URL Contenu principal Objectif Priorité
Accueil /index.html Hero et accroche, technologies,
aperçu des 3 pôles, sélection de
réalisations, processus, valeurs,
appel à l'action final.
Convaincre en
quelques secondes
et orienter vers le
devis.
Indispensable
(déjà validée)
Services /services.html Pôles BUILD / ADVANCED / RUN,
liste des services, technologies,
offres et fourchettes, FAQ.
Faire comprendre
l'offre et lever les
objections.
Indispensable
Réalisations /realisations.html Grille filtrable (vitrine, e-commerce,
React, maintenance) : aperçu,
stack, résultat.
Prouver le savoir-
faire.
Indispensable
Étude de cas /realisations/[projet].html Modèle : contexte, défi, solution,
résultat, technologies, captures,
témoignage.
Détailler la
démarche et
rassurer.
Indispensable
(1 modèle,
décliné)
À propos /a-propos.html Histoire, vision, mission, 4 valeurs,
parcours et compétences du
fondateur, ancrage Mali → monde.
Créer la confiance. Indispensable
Contact & devis /contact.html Formulaire de devis, coordonnées,
WhatsApp, délai de réponse,
fuseau horaire.
Transformer la
visite en demande.
Indispensable
Mentions
légales,
Confidentialité
/mentions-legales.html,
/confidentialite.html
Éditeur, hébergeur, données
personnelles, cookies.
Conformité et
crédibilité.
Indispensable
Erreur 404 /404.html Message clair et liens vers les pages
principales.
Ne pas perdre le
visiteur.
Souhaitable
Blog /blog/ Liste d'articles, fiche article,
catégories.
SEO éditorial. Optionnel
(V1.1)
Version
anglaise
/en/ Accueil, Services, Contact traduits. Cible export. Souhaitable
(V1.1)
5.2 Fonctionnalités attendues (méthode MoSCoW)
Fonctionnalité Description Priorité
Navigation responsive Barre de navigation, menu mobile (offcanvas), lien actif,
utilisable au clavier.
Indispensable
Hero avec appels à l'action Titre, sous-titre, deux boutons (devis / réalisations). Indispensable
Cartes de services Trois pôles avec icône, description et lien. Indispensable
Portfolio filtrable Filtres par catégorie en JavaScript natif, sans rechargement,
accessibles au clavier.
Indispensable
Formulaire de devis
(interface)
Champs, validation Bootstrap côté navigateur, messages
d'erreur clairs, confirmation simulée.
Indispensable
Bouton WhatsApp et
téléphone cliquable
Lien direct avec message pré-rempli ; canal de contact courant
localement.
Indispensable

-- 4 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 5 / 16
Fonctionnalité Description Priorité
Pied de page complet Liens, coordonnées, réseaux, mentions, année dynamique. Indispensable
Responsive 320 → 1920 px Mise en page fluide, testée sur mobile, tablette et bureau. Indispensable
SEO de base et partage social Titre, description, Open Graph par page ; favicon. Indispensable
Accordéon FAQ Questions fréquentes (délais, prix, maintenance, paiement). Souhaitable
Aperçu de projet (modal) Captures agrandies depuis la grille de réalisations. Souhaitable
Processus en 5 étapes Brief, maquette, développement, recette, mise en ligne. Souhaitable
Animations d'apparition
discrètes
Sobres, désactivables (prefers-reduced-motion). Souhaitable
Retour en haut de page Bouton discret sur les pages longues. Souhaitable
Témoignages Bloc prévu dès maintenant, rempli avec les premiers clients. Souhaitable
Mode sombre Via data-bs-theme de Bootstrap 5.3, avec palette adaptée. Optionnelle
Sélecteur de langue FR / EN Lié à la version anglaise. Optionnelle
Estimateur de devis
(interface)
Calcul indicatif selon le type de projet. Optionnelle
Envoi réel du formulaire,
anti-spam serveur, stockage
PHP / MySQL : hors périmètre actuel. Hors périmètre (V2)
Blog dynamique, espace
client, paiement en ligne
Nécessitent un back-end. Hors périmètre (V2)
5.3 Spécifications par page
Page Sections, dans l'ordre Composants Bootstrap clés
Toutes les pages En-tête : logo, menu, bouton « Devis ». Pied de page : logo
inversé, liens, coordonnées, réseaux, mentions.
Éléments transverses : lien d'évitement, bouton WhatsApp,
retour en haut.
navbar, offcanvas, container,
row/col, btn
Accueil Hero · bandeau des technologies · 3 pôles · réalisations à la une ·
processus · valeurs · appel à l'action final. À réconcilier avec la
version validée.
grid, card, badge, btn
Services Titre et introduction · pôle BUILD · pôle ADVANCED · pôle RUN ·
technologies · offres et « à partir de » · FAQ · appel à l'action.
card, list-group, accordion, table
Réalisations Titre · filtres · grille de cartes · appel à l'action. Chaque carte :
aperçu, titre, tags de technologies, lien vers l'étude de cas.
nav pills / btn-group, card, modal,
badge
Étude de cas Bandeau titre · résumé (client, secteur, durée, stack) · contexte ·
défi · solution · résultat · galerie · témoignage · projet suivant.
grid, figure, carousel (manuel),
blockquote
À propos Histoire · vision et mission · 4 valeurs · fondateur (photo,
parcours, compétences) · ancrage Mali → monde.
grid, card, progress (ou badges)
Contact & devis Titre · formulaire (nom, e-mail, téléphone / WhatsApp,
entreprise, type de projet, budget indicatif en FCFA, délai,
message, consentement) · coordonnées · WhatsApp.
form-control, form-select, form-
check, was-validated, toast
Pages légales Titre · sommaire · texte structuré. container, list-group

-- 5 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 6 / 16
6. Exigences Techniques
6.1 Stack et outils
Élément Choix Remarque
HTML HTML5 sémantique (header, nav, main,
section, footer)
Un seul h1 par page ; attribut lang="fr".
CSS Bootstrap 5.3.x + feuille personnalisée
(Sass)
Version figée dans le projet ; vérifier la dernière 5.3.x
sur getbootstrap.com au démarrage.
JavaScript JavaScript natif (ES6) + bundle Bootstrap
(Popper inclus)
Pas de jQuery ; scripts chargés avec defer.
Icônes SVG en ligne ou sprite (sélection d'icônes
Bootstrap Icons)
Éviter la police d'icônes complète : trop lourde pour
l'usage.
Polices 2 familles, fichiers WOFF2 auto-hébergés Voir 7.3.
Build Sass en ligne de commande (npm) Alternative rapide : Bootstrap compilé + surcharge
par variables CSS.
Versionnement Git + dépôt distant privé Historique et sauvegarde ; précieux face aux
coupures.
Qualité Lighthouse, WAVE ou axe, validateur W3C,
tests sur vrais téléphones
Voir section 11.
6.2 Environnement de développement
• Développement local avec VS Code et une extension de serveur local (ou XAMPP, déjà prévu au business
plan).
• Fichiers Bootstrap en local pendant le développement, pas via CDN : le travail reste possible hors
connexion.
• Recette (staging) : sous-domaine de test ou hébergement statique gratuit ; production : hébergement
professionnel.
6.3 Structure des fichiers proposée
nexawebmali-site/
├─ index.html services.html realisations.html a-propos.html contact.html
├─ realisations/ (une page par étude de cas)
├─ mentions-legales.html confidentialite.html 404.html
├─ en/ (option V1.1 : version anglaise)
├─ blog/ (option V1.1)
├─ assets/
│ ├─ scss/ main.scss _variables.scss _components.scss
│ ├─ css/ main.min.css
│ ├─ js/ bootstrap.bundle.min.js main.js portfolio-filter.js form-validation.js
│ ├─ img/ logo/ hero/ projets/ equipe/
│ ├─ fonts/ (WOFF2)
│ └─ icons/ favicon.svg sprite.svg
├─ robots.txt sitemap.xml
└─ README.md
Conventions : URLs en minuscules sans accents, classes personnalisées préfixées nx- (ex. nx-hero, nx-card-
projet), une classe utilitaire Bootstrap avant toute règle CSS sur mesure.

-- 6 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 7 / 16
6.4 Personnalisation de Bootstrap
On ne modifie jamais les fichiers de Bootstrap : les couleurs et polices de la charte sont injectées avant l'import,
et seuls les modules utilisés sont importés (moins de poids).
// scss/_variables.scss (extrait)
$nx-navy: #16213C;
$nx-green: #3E8E63;
$nx-green-dark: #2F7350; // texte et boutons verts (contraste AA)
$nx-gold: #C99A2E; // accent uniquement
$primary: $nx-navy;
$success: $nx-green;
$body-color: $nx-navy;
$font-family-sans-serif: "Inter", "Segoe UI", Calibri, Arial, sans-serif;
$headings-font-family: "Lora", Georgia, Cambria, serif;
$border-radius: .5rem;
6.5 Budget de performance
Élément Cible
Images de contenu WebP (repli JPEG), ≤ 150 Ko chacune ; image hero ≤ 250 Ko ;
largeur et hauteur déclarées ; lazy loading sauf hero
CSS ≤ 40 Ko compressé (import sélectif des modules)
JavaScript ≤ 50 Ko compressé, chargé avec defer
Polices ≤ 4 fichiers WOFF2 ; font-display: swap
Requêtes par page ≤ 30
Serveur Compression Brotli ou gzip, cache long sur les ressources
versionnées
Vidéo Aucune lecture automatique
6.6 Compatibilité et points de rupture
Point de
rupture
Largeur Cible type Comportement attendu
xs < 576 px Smartphone Une colonne, menu hamburger, boutons pleine largeur si
utile.
sm ≥ 576 px Grand smartphone Une colonne aérée.
md ≥ 768 px Tablette Deux colonnes pour cartes et formulaire.
lg ≥ 992 px Ordinateur Menu déployé, trois colonnes pour les services.
xl / xxl ≥ 1200 / 1400 px Grand écran Largeur de contenu limitée pour rester lisible.
Largeurs de test : 320, 360, 390, 768, 1024, 1440 et 1920 px. Navigateurs : versions récentes de Chrome (bureau
et Android), Firefox, Safari (iOS), Edge et Samsung Internet. Le contenu doit rester lisible sans JavaScript,
notamment sur les navigateurs à économie de données.
6.7 Hébergement et nom de domaine
• Certificat SSL (https) obligatoire, redirection forcée vers https et vers une seule version (avec ou sans
www).

-- 7 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 8 / 16
• Hébergement : le business plan prévoit un hébergement professionnel pour le portfolio et la recette.
Choisir dès maintenant une offre compatible PHP/MySQL, pour éviter une migration quand le formulaire
sera branché en V2.
À trancher — domaine principal. La charte (§ 9) classe nexaweb.ml en priorité 1 et nexawebmali.com en
priorité 2, alors que le business plan et la présentation communiquent déjà nexawebmali.com. Proposition :
nexawebmali.com comme domaine principal (lisible à l'international, cohérent avec ce qui est déjà diffusé),
et nexaweb.ml en redirection s'il est disponible. La disponibilité doit être confirmée auprès d'un registrar,
comme le précise la charte.
6.8 Sécurité et conformité côté interface
• HTTPS partout ; aucun secret ni clé dans le code du navigateur.
• Liens externes avec rel="noopener noreferrer" ; champ piège (honeypot) dans le formulaire ; attributs
type, autocomplete et inputmode adaptés (e-mail, téléphone).
• Page Confidentialité claire ; bandeau de consentement uniquement si des cookies non essentiels ou des
outils d'analyse tiers sont utilisés.
• Vérifier les obligations applicables (loi malienne de 2013 sur les données personnelles, RGPD pour les
visiteurs européens) auprès d'une source officielle ou d'un juriste.
7. Exigences Graphiques et Ergonomiques (UX/UI)
7.1 Principes directeurs
• Mobile-first et sobre : le contenu et l'appel à l'action passent avant la décoration.
• Confiance : bleu nuit dominant, espaces généreux, aucune promesse ni chiffre non vérifiable.
• Ancrage sans folklore : le Mali se lit dans les détails (l'or, le nom, le récit), pas dans des clichés visuels.
• Un appel à l'action visible sur chaque page : devis ou WhatsApp.
7.2 Palette de couleurs
Aperçu Couleur Code Variable Usage
Bleu nuit
(dominante)
#16213C $primary / --nx-navy Sections sombres, navbar, pied de page, titres,
texte principal.
Vert (secondaire) #3E8E63 $success / --nx-green Accents, icônes, validations, progression, grands
textes.
Vert foncé
(proposition)
#2F7350 --nx-green-dark Boutons, liens et petits textes verts sur fond clair.
Or (accent,
parcimonieux)
#C99A2E $nx-gold / --nx-gold Filets fins, petits accents, « MALI » du logo.
Jamais dominant, jamais en texte sur blanc.
Blanc #FFFFFF $white Fonds clairs, texte sur fond sombre.
Gris clair
(proposition)
#F4F6FA --nx-gray-50 Alternance de sections, fonds de cartes (le «
blanc / gris clair » de la charte).
Gris texte
(proposition)
#55607A --nx-gray-600 Légendes et textes secondaires.

-- 8 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 9 / 16
Règle d'équilibre de la charte : environ 60 % de bleu nuit, 25 % de blanc ou gris clair, 10 % de vert, 5 % d'or au
maximum. Sur un site qui défile, l'appliquer au poids visuel de chaque écran : alternance de sections sombres
(hero, bandeau, pied de page) et claires, titres et boutons en bleu nuit ou vert, or réservé aux petits détails.
Contrastes (calculs indicatifs, à recontrôler avec un outil de contraste avant validation) :
Combinaison Ratio Verdict
Bleu nuit sur blanc (et inverse) ≈ 15,9:1 Excellent (AAA)
Or sur bleu nuit / bleu nuit sur or ≈ 6,2:1 Conforme AA
Blanc sur vert foncé #2F7350 ≈ 5,7:1 Conforme AA : à utiliser pour les boutons
Blanc sur vert #3E8E63 ≈ 4,0:1 Insuffisant en texte courant ; acceptable en
grand texte gras ou en décor
Or sur blanc ≈ 2,6:1 Insuffisant : interdit pour du texte (hors
logotype)
Proposition — le vert foncé, le gris clair et le gris texte sont des déclinaisons utilitaires qui n'existent pas dans
la charte. Elles servent le contraste et la lisibilité, sans changer l'identité ; à faire valider avant de les figer.
7.3 Typographie
Rôle Police (proposition) Repli Usage
Titres et marque Lora (serif), graisses 600–700 Georgia, Cambria, serif H1 fluide 2,25–3,25 rem ; H2 1,75–
2,25 rem ; H3 1,25–1,5 rem.
Texte et interface Inter (sans-serif), graisses
400–600
"Segoe UI", Calibri, Arial,
sans-serif
Corps 1 rem (16 px), interligne 1,6 ;
petits textes ≥ 0,875 rem.
« MALI »
(logotype)
Capitales espacées, or — Uniquement dans le logo (SVG) ;
nettement plus petit que « NexaWeb
».
La charte demande une serif type Cambria / Georgia pour les titres et une sans-serif type Calibri / Arial pour le
texte. Ces polices ne sont pas installées sur la plupart des téléphones Android, ce qui ferait varier le rendu d'un
appareil à l'autre. D'où la proposition de polices libres auto-hébergées (Lora et Inter sont des exemples ; Source
Serif 4 et Source Sans 3 conviennent aussi), à valider par un test de rendu. Tailles fluides via clamp() pour éviter
la multiplication des règles.
7.4 Logo et marque à l'écran
• Trois versions : principale (fond clair), inversée (fond bleu nuit ou sombre équivalent), badge seul (favicon,
avatar).
• Zone de protection au moins égale à la hauteur du badge ; badge minimum 28 px de haut ; version
inversée jamais sur photo chargée sans overlay.
• Interdits : recolorer le monogramme hors palette, séparer les nœuds du tracé blanc, déformer le badge,
rendre « MALI » aussi grand que « NexaWeb ».
• Fichiers à produire : lockup clair, lockup inversé et badge en SVG ; PNG 32, 180, 192 et 512 px ; favicon ;
image de partage Open Graph 1200 × 630 px.
• Fond de la navbar (bleu nuit avec logo inversé, ou blanc avec logo principal) : reprendre le choix de la
page d'accueil validée.

-- 9 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 10 / 16
7.5 Composants d'interface
Composant Base Bootstrap Spécifications NexaWeb
Boutons .btn Principal : vert foncé, texte blanc. Secondaire : contour bleu nuit (ou
blanc sur fond sombre). Pas de bouton or. Hauteur tactile ≥ 44 px, coins
arrondis comme le badge.
Cartes .card Fond blanc, bordure fine ou ombre légère, rayon ≥ .75 rem, icône verte,
survol discret (élévation ≤ 4 px).
Navigation .navbar, .offcanvas Fixe en haut, lien actif souligné d'un filet or fin, bouton « Devis »
toujours visible, menu mobile en offcanvas.
Formulaires .form-control, .form-
select, .was-validated
Libellés toujours visibles (pas de placeholder seul), erreurs en texte et
icône (jamais la couleur seule), messages en français, focus visible.
Accordéon (FAQ) .accordion Première question ouverte, titres en question complète.
Modal .modal Aperçu de projet ; fermeture par Échap et bouton visible.
Badges .badge Technologies (WordPress, React, PHP…) et catégories de projets.
Toasts / alertes .toast, .alert Confirmation du formulaire (simulée en V1), messages d'erreur.
Pied de page grille Quatre colonnes puis une seule sur mobile ; fond bleu nuit ; logo inversé.
7.6 Images et iconographie
• Captures et maquettes des projets présentées dans des cadres navigateur / téléphone légers (CSS ou SVG)
plutôt que de la photo générique.
• Visuel signature : motif de réseau de nœuds vert et or en SVG léger, qui rappelle le monogramme du logo
(charte, § 3.3).
• Option à valider : motif géométrique discret inspiré des textiles maliens, en filigrane, opacité ≤ 8 %.
• Portrait professionnel du fondateur ; ratios constants (16:10 pour les projets, 1:1 pour les portraits) ; texte
alternatif sur toute image.
7.7 Mouvement
Transitions de 150 à 300 ms, limitées à l'opacité et au déplacement ; respect de prefers-reduced-motion ; aucun
carrousel qui défile seul ; aucune animation qui retarde l'accès au contenu.
7.8 Accessibilité (WCAG 2.1 AA)
• Lien « Aller au contenu » (classe Bootstrap visually-hidden-focusable) et hiérarchie de titres logique.
• Navigation complète au clavier, focus toujours visible, cibles tactiles ≥ 44 px.
• Contrastes conformes (voir 7.2), information jamais portée par la couleur seule.
• Texte alternatif, libellés de formulaire, attributs ARIA uniquement quand le HTML natif ne suffit pas.
• Texte agrandissable jusqu'à 200 % sans perte de contenu.
• Contrôle par Lighthouse, WAVE ou axe, puis test manuel au clavier et avec un lecteur d'écran gratuit.
8. Référencement (SEO) et Contenu
Mots-clés cibles (à valider avec un outil de volumes de recherche) : « développeur WordPress Bamako » (cité
dans la présentation), « création de site web Bamako », « développeur web Mali », « site e-commerce Mali », «

-- 10 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 11 / 16
maintenance WordPress » ; pour la version anglaise : « WordPress developer Mali », « React developer West
Africa ».
• Balise title unique par page (schéma : « Page | NexaWeb Mali — Développeur web à Bamako », environ
60 caractères) et méta-description unique (environ 155 caractères).
• Un seul h1 par page, structure H1 > H2 > H3, URLs courtes et parlantes.
• Open Graph et cartes de partage ; balise canonical ; sitemap.xml et robots.txt.
• Données structurées JSON-LD de type ProfessionalService (nom, ville, téléphone, e-mail, site).
• Maillage interne entre Services, Réalisations et Contact ; inscription à la Search Console et fiche Google
Business (hors code).
Type de contenu Fourni par Statut
Textes français (accroche, services, à
propos, FAQ)
NexaWeb Mali À rédiger / finaliser
Visuels : portrait, maquettes, captures de
projets
NexaWeb Mali À produire
Logos vectoriels et favicon NexaWeb Mali (depuis la charte) À exporter
Études de cas NexaWeb Mali À rédiger (voir 13.1)
Témoignages Clients À collecter dès les premiers contrats
Traductions anglaises (si V1.1) À préciser À planifier
Trame d'une étude de cas : contexte → défi → solution → résultat (chiffré si possible) → technologies → durée
→ témoignage.
9. Contraintes du Projet
Budget : projet interne, financé par les charges d'exploitation de l'Année 1 du business plan (850 000 FCFA au
total : internet, hébergement, noms de domaine, outils). Coûts du domaine et de l'hébergement à confirmer par
devis.
Planning prévisionnel
Phase Livrable associé Durée indicative
1. Cadrage et décisions Cahier des charges validé 1 jour
2. Fondations design et maquettes Tokens, styleguide, maquettes mobile et
bureau validées
3 à 4 jours
3. Intégration et développement Environnement de recette (staging) 6 à 8 jours
4. Rédaction et intégration des contenus Contenus finaux intégrés 4 à 5 jours (en parallèle de la
phase 3)
5. Tests et recette Rapport de recette (Lighthouse, accessibilité,
appareils)
2 à 3 jours
6. Mise en ligne Site en production (https, redirections,
sitemap)
1 jour
7. Documentation et passation Guide de maintenance du site 1 jour

-- 11 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 12 / 16
Ordre de grandeur : 3 à 4 semaines à plein temps, avec une marge d'environ 20 % pour les coupures d'électricité
et de connexion identifiées au business plan. Estimation indicative, à ajuster.
Risques du projet
Risque Mitigation
Coupures d'électricité ou d'internet Outils et Bootstrap en local, commits Git fréquents, sauvegarde distante, onduleur
et clé 4G de secours (business plan, § 7).
Contenus non prêts Rédiger tôt à partir des documents existants ; gabarits d'études de cas ; projets de
démonstration.
Dérive de périmètre Le MoSCoW fait foi ; tout ajout devient V1.1.
Incohérence avec la charte Tokens Sass, page de styleguide, contrôle de la charte à la recette.
Performance dégradée par des
images lourdes
Budget de performance ; conversion WebP avant intégration.
Confusion avec l'offre no-code Mettre en avant le sur-mesure, la rapidité et des résultats réels.
• Mentions légales et politique de confidentialité conformes à la réglementation.
• Droits d'usage : polices sous licence libre, icônes libres, images créées ou libres de droits ; ne pas montrer
un client sans son accord.
10. Livrables Attendus
• Maquettes validées (mobile et bureau) des pages clés.
• Page de styleguide interne : couleurs, typographies, boutons, cartes, formulaires.
• Site fonctionnel en environnement de recette, puis déployé en production.
• Code source versionné (Git) avec README d'installation et de compilation.
• Fichiers de marque exportés : logos SVG, favicon, image de partage.
• Rapport de recette (scores Lighthouse, accessibilité, tests appareils) et guide de maintenance.
11. Modalités de Validation (Recette)
Séries de corrections incluses : 2 allers-retours, regroupés par lot.
Critère de validation Statut
Toutes les pages prévues sont présentes et fonctionnelles, sans lien mort ☐ À valider
Le site s'affiche correctement de 320 à 1920 px (mobile, tablette, ordinateur) ☐ À valider
Le formulaire valide les champs et affiche des messages clairs ☐ À valider
Scores Lighthouse mobile ≥ 90 (Performance, Accessibilité, Bonnes pratiques, SEO) ☐ À valider
LCP < 2,5 s en 4G simulée ; page d'accueil ≤ 1 Mo ☐ À valider
Navigation complète au clavier ; contrastes conformes ; textes alternatifs présents ☐ À valider
Couleurs, typographies et logo conformes à la charte (y compris les règles « à ne pas faire ») ☐ À valider
Balises title, description et Open Graph présentes sur chaque page ; sitemap et robots.txt en
ligne
☐ À valider

-- 12 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 13 / 16
Critère de validation Statut
Page 404, favicon et pages légales en place ☐ À valider
Le certificat SSL (https) est actif ; redirections vers une seule version du domaine ☐ À valider
Tests réussis sur au moins un téléphone Android d'entrée de gamme et un iPhone ☐ À valider
12. Maintenance et Évolutions Futures
Période de garantie incluse : 30 jours après la mise en ligne pour les corrections.
Au-delà, un contrat de maintenance peut couvrir les mises à jour, les sauvegardes et les modifications de
contenu, ce qui correspond au pôle RUN de NexaWeb Mali.
Évolutions envisageables (hors périmètre initial) :
• Formulaire fonctionnel : envoi par PHP, anti-spam serveur, notification par e-mail, enregistrement MySQL.
• Version anglaise complète et sélecteur de langue.
• Blog (statique ou dynamique).
• Démo interactive en React pour illustrer le pôle ADVANCED.
• Espace de suivi de projet pour les clients.
• Estimateur de devis, paiement d'acompte en ligne.
• Mode sombre.
13. Propositions, Conseils et Éléments Manquants
13.1 Propositions
# Proposition Pourquoi Effort
1 Portfolio de démonstration : 3 mini-
projets étiquetés « Projet de
démonstration » (ex. boutique
d'artisanat, restaurant ou traiteur,
cabinet ou association).
Sans client livré, la page Réalisations serait vide. La
démonstration est honnête et prouve le savoir-faire
(business plan, § 4). Chacun alimente une étude de
cas.
Moyen à élevé
2 WhatsApp et téléphone cliquables en
plus du formulaire.
Canal de contact courant localement, moins de
friction qu'un formulaire.
Faible
3 Kit « NexaWeb Starter » : ce site plus
une page /styleguide.html interne.
Réutilisable pour les offres vitrine (dès 125 000 FCFA)
: livraison plus rapide, plus rentable et cohérente.
Moyen
4 Version anglaise (Accueil, Services,
Contact) avec dossier /en/ et balises
hreflang.
Soutient l'objectif de 40 % de CA à l'export et les
profils Malt / Upwork.
Moyen
5 Budget de performance vérifié à
chaque livraison, avec rapport
Lighthouse.
Différenciant face au no-code et adapté aux
connexions mobiles.
Faible
6 E-mail professionnel contact@ au nom
de domaine.
Crédibilité : les documents actuels affichent une
adresse Gmail.
Faible

-- 13 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 14 / 16
# Proposition Pourquoi Effort
7 Preuve sociale progressive :
témoignages et logos clients dès les
premiers contrats ; jamais de faux avis
ni de faux chiffres.
Cohérent avec la valeur « Transparence ». Faible
8 Tarifs « à partir de » sur la page
Services (vitrine dès 125 000 FCFA,
maintenance dès 25 000 FCFA/mois).
Filtre les demandes et respecte la transparence.
Risque : ancrer bas les clients export ; à arbitrer.
Faible
9 Mesure des conversions (clics devis et
WhatsApp, envois de formulaire) avec
un outil respectueux de la vie privée.
Piloter l'objectif de 20 % de leads en inbound
(présentation).
Faible
13.2 Conseils de mise en œuvre
• Tokens et styleguide d'abord, pages ensuite. Une heure passée sur les couleurs, polices et composants
évite une journée de retouches.
• Partir de la page d'accueil validée : en extraire l'en-tête, le pied de page, les boutons et les cartes comme
blocs communs.
• En-tête et pied de page identiques sur 9 pages : en HTML pur, c'est du copier-coller (risque d'oubli à
chaque changement). Un simple include PHP règle le problème sans être une intégration back-end ; à
décider (voir Synthèse).
• Mobile-first : concevoir à 360 px d'abord, puis élargir.
• Classes utilitaires Bootstrap avant CSS sur mesure, et préfixe nx- pour tout le reste.
• Tester dans les conditions réelles : téléphone Android d'entrée de gamme et réseau ralenti (Slow 4G dans
les outils du navigateur).
• Optimiser les images avant l'intégration (conversion WebP, redimensionnement).
• Écrire les textes avant la mise en page finale : pas de lorem ipsum dans une page livrée.
• Une page = un commit, validée avec la checklist de recette.
• Aligner la page Services sur le business plan : mêmes trois pôles, mêmes fourchettes.
Proposition de répartition des 10 services de la charte (§ 6) dans les 3 pôles :
Pôle Services
BUILD (création) Sites WordPress professionnels · E-commerce · Interfaces responsive
ADVANCED
(ingénierie)
Applications web React · Développement front-end · Développement back-end PHP · API et
intégrations · Solutions web sur mesure
RUN
(maintenance)
Maintenance et sécurité WordPress · Optimisation des performances
13.3 Ce qui manque
Élément Pourquoi Échéance
Les 4 décisions de la Synthèse
(domaine, include, tarifs, langues)
Elles conditionnent l'architecture et l'hébergement. Avant la phase 2
Logos vectoriels (lockup clair, inversé,
badge) et favicon
La charte décrit le logo ; les fichiers exportés sont à
produire.
Avant l'intégration

-- 14 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 15 / 16
Élément Pourquoi Échéance
Textes définitifs en français Accroche, services, à propos, FAQ. Phase 4
Visuels : portrait, captures de projets,
images hero
Aucun visuel fourni dans les documents. Phases 2 à 4
Études de cas (3 au minimum,
démonstrations comprises)
Sans elles, le portfolio est vide. Phases 3 à 4
Témoignages Aucun client livré pour l'instant. Dès les premiers contrats
3 sites concurrents ou de référence Section 3 du modèle non renseignée par les
documents.
Phase 1
Coordonnées publiques définitives (e-
mail pro, WhatsApp, LinkedIn, Malt,
Upwork)
Pied de page, page Contact, JSON-LD. Phase 3
Informations légales (statut,
immatriculation, hébergeur)
Mentions légales ; le statut reste à enregistrer
(business plan, § 5).
Phase 5
Choix de l'outil d'analyse et politique
cookies
Détermine la présence d'un bandeau de
consentement.
Phase 3
Hébergement retenu (recette et
production)
Compatibilité PHP/MySQL pour la V2. Phase 2
Grille tarifaire publiable Valider les fourchettes du business plan avant
affichage.
Phase 4
Traductions anglaises Seulement si V1.1 retenue. À planifier
13.4 Points de vigilance relevés dans les documents
• Domaine : nexaweb.ml en priorité 1 dans la charte, nexawebmali.com ailleurs.
• Portfolio de preuve : le business plan (§ 4) prévoit de démontrer aussi le back-end (formulaire de contact
sécurisé). L'interface seule ne prouvera que le front-end : prévoir la V2 du formulaire assez tôt.
• Modèle de cahier des charges : les sections « concurrents » et « budget précis » ne sont pas alimentées
par les documents fournis.
• Adresse e-mail : Gmail dans la présentation, alors que le domaine professionnel est prévu.
13.5 Prochaines étapes
1. Trancher les 4 décisions de la Synthèse.
2. Exporter les logos en SVG et créer le favicon.
3. Figer les tokens Sass à partir de la page d'accueil validée.
4. Construire la page de styleguide.
5. Intégrer les pages dans cet ordre : Services, Contact, À propos, Réalisations, pages légales.
6. Recette, puis mise en ligne.

-- 15 of 16 --

NexaWeb M A L I | Cahier des charges — Interface utilisateur (Bootstrap 5) | V1.0
Page 16 / 16
14. Annexes
14.1 Contacts
Rôle Nom Contact
Client M. BAH Aboubacrine bahaboubacrine1@gmail.com · 00 (223) 82 89 09 92
NexaWeb Mali M. BAH Aboubacrine nexawebmali.com · Bamako, Mali
14.2 Documents de référence
• NexaWeb Mali — Charte d'Identité de Marque (concept, logo, palette, typographie, services, stack,
domaines).
• NexaWeb Mali — Business Plan (offre, tarification, stratégie commerciale, risques, plan financier).
• NexaWeb Mali — Présentation stratégique et opérationnelle (vision, pôles, acquisition, modèle
économique).
• Modèle de Cahier des Charges générique NexaWeb Mali.
14.3 Squelette de page (Bootstrap 5)
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Services | NexaWeb Mali — Développeur web à Bamako</title>
<meta name="description" content="…">
<link rel="preload" href="assets/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/main.min.css">
<link rel="icon" href="assets/icons/favicon.svg" type="image/svg+xml">
</head>
<body>
<a class="visually-hidden-focusable" href="#contenu">Aller au contenu</a>
<header> … navbar … </header>
<main id="contenu">
<section class="nx-section py-5"> … </section>
</main>
<footer class="nx-footer"> … </footer>
<script src="assets/js/bootstrap.bundle.min.js" defer></script>
<script src="assets/js/main.js" defer></script>
</body>
</html>
Ce cahier des charges est la base UI du site NexaWeb Mali. Il est à adapter et à valider avant le démarrage de la phase 2.

-- 16 of 16 --

