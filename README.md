<div align="center">

<img src="public/icons-192.png" alt="Logo du Code Amiénois" width="112" height="112" />

# Code Amiénois

**Le Code de la Faluche amiénoise, dans ta poche — même hors ligne.**

[![Site](https://img.shields.io/badge/site-code--amienois.app-3A0F17?style=flat-square)](https://www.code-amienois.app)
[![CI](https://img.shields.io/github/actions/workflow/status/La-CHATTE-2-0/code-amienois/node.js.yml?branch=main&style=flat-square&label=CI)](https://github.com/La-CHATTE-2-0/code-amienois/actions/workflows/node.js.yml)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=La-CHATTE-2-0_code-amienois&metric=alert_status)](https://sonarcloud.io/summary/overall?id=La-CHATTE-2-0_code-amienois&branch=main)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=La-CHATTE-2-0_code-amienois&metric=coverage)](https://sonarcloud.io/summary/overall?id=La-CHATTE-2-0_code-amienois&branch=main)
[![Licence GPL-3.0](https://img.shields.io/github/license/La-CHATTE-2-0/code-amienois?style=flat-square&color=9A6B16)](LICENSE)

[**Ouvrir l'application →**](https://www.code-amienois.app)

</div>

---

## Sommaire

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts](#scripts)
- [Tests et qualité](#tests-et-qualité)
- [Structure du projet](#structure-du-projet)
- [Contribuer](#contribuer)
- [Déploiement](#déploiement)
- [Crédits et licence](#crédits-et-licence)

## À propos

Le **Code Amiénois** est une application web progressive (PWA) qui rassemble le Code de la Faluche tel qu'il se porte à Amiens : articles, insignes, spécificités locales, traditions et ressources pour les faluchards et faluchardes.

Elle s'installe sur l'écran d'accueil d'un téléphone comme une application native et fonctionne **entièrement hors ligne** une fois chargée : pratique en congrès, quand le réseau fait défaut.

## Fonctionnalités

| | Rubrique | Ce qu'on y trouve |
|---|---|---|
| 📜 | **Le Code** | Tous les articles, un sommaire qui suit la lecture, les insignes illustrés |
| ⭐ | **Récap Spés** | Les spécificités amiénoises réunies sur une page |
| 🧠 | **Révisions** | Un quiz de **212 questions** en 6 thèmes, un **quiz en images** (148 insignes, emblèmes et circulaires), un mode **Survivor**, l'historique des parties et le rejeu des erreurs |
| 🗺️ | **Apérals de France** | Une carte interactive de **47 villes**, avec recherche, filtres par jour et par statut, et itinéraire |
| ✅ | **Checklist Congrès** | La liste de tout ce qu'il faut emporter, cochée et retenue sur l'appareil |
| 🎀 | **Couleurs des rubans** | Les couleurs de chaque filière, avec des échantillons de ruban |
| 🪡 | **Guide Couture** | Le pas-à-pas illustré pour coudre sa faluche, imprimable |
| 🏛️ | **Histoire et folklore** | Historique des Grands Maîtres, Monôme, Bacchus, Gambrinus, l'Homme à la Bouée, folklores français et étrangers |

Et aussi :

- 🌗 **Thème clair, sombre ou automatique**, aux couleurs de la faluche (velours noir, bordeaux et fil d'or)
- 📴 **Mode hors ligne complet** : pages, images, polices d'icônes et tuiles de carte déjà vues
- 🔗 **Aperçus de lien soignés** : chaque page a son titre et sa description pour Discord, WhatsApp, Messenger…
- ♿ **Accessibilité** : lien d'évitement, contrastes vérifiés, mouvements réduits sur demande
- 🖨️ **Impression** : mise en page dédiée pour imprimer le Code ou le guide couture

## Stack technique

| Domaine | Outils |
|---|---|
| Framework | [Vue 3](https://vuejs.org) (`<script setup>`) + [TypeScript](https://www.typescriptlang.org) |
| Interface | [Vuetify 4](https://vuetifyjs.com) (Material Design 3), [Material Design Icons](https://pictogrammers.com/library/mdi/) |
| Navigation | [Vue Router](https://router.vuejs.org) |
| Carte | [Leaflet](https://leafletjs.com) via [`@vue-leaflet/vue-leaflet`](https://github.com/vue-leaflet/vue-leaflet), tuiles OpenStreetMap |
| Build | [Vite](https://vite.dev), [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app) (Workbox), optimisation des images |
| Tests | [Vitest](https://vitest.dev), [Vue Test Utils](https://test-utils.vuejs.org), happy-dom, couverture v8 |
| Qualité | [SonarQube Cloud](https://sonarcloud.io/summary/overall?id=La-CHATTE-2-0_code-amienois&branch=main) |
| Hébergement | Azure Static Web Apps |

## Démarrage rapide

**Prérequis** : [Node.js](https://nodejs.org) **26 ou plus** (la version exacte est dans [`.node-version`](.node-version)) et npm.

```bash
git clone https://github.com/La-CHATTE-2-0/code-amienois.git
```

```bash
cd code-amienois
```

```bash
npm ci
```

```bash
npm run dev
```

L'application est alors disponible sur [http://localhost:8080](http://localhost:8080).

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Vérification des types (`vue-tsc`) puis build de production dans `dist/` |
| `npm run preview` | Sert le build de production en local |
| `npm run check-prod` | Build puis prévisualisation, pour vérifier la version finale |
| `npm test` | Lance tous les tests une fois |
| `npm run test:watch` | Relance les tests à chaque modification |
| `npm run test:coverage` | Tests avec rapport de couverture (`coverage/index.html` et `coverage/lcov.info`) |

## Tests et qualité

Les tests vivent dans [`tests/`](tests), dans la même arborescence que `src/`, pour ne pas mélanger code et tests :

```
tests/
├── setup.ts              # Vuetify pour chaque composant monté, simulations manquantes à happy-dom
├── helpers/              # Montage avec routeur, accès aux dialogues téléportés
├── smoke.spec.ts         # Chaque page et composant s'affiche, panneaux dépliés
├── layout.spec.ts        # App, mise en page, en-tête, routeur
├── core/                 # Contenu du quiz, historique, quiz en images
├── services/             # Apérals
├── components/           # Quiz, sommaire, folklores
└── pages/                # Révisions, Checklist, Apérals (carte Leaflet simulée)
```

- **Couverture** : environ **99 %** des lignes. Le rapport `lcov` est envoyé à SonarQube Cloud à chaque push sur `main` et à chaque pull request.
- **Garde-fous de contenu** : les tests vérifient aussi les données saisies à la main (identifiants de question uniques, thèmes existants, réponses distinctes, sources internes).
- **Nouvelle page ou nouveau composant** : le test de rendu (`smoke.spec.ts`) le prend en compte automatiquement. Ajoutez un test dédié dès qu'il contient de la logique.

## Structure du projet

```
├── public/               # Fichiers servis tels quels
│   ├── data/aperals.json #   Liste des apérals affichés sur la carte
│   ├── images/           #   Insignes, folklores, illustrations
│   └── sound/            #   Sons
├── src/
│   ├── pages/            # Une page par route (annexes, ressources, vie étudiante)
│   ├── components/       # Articles du Code, quiz, folklores, carte, en-tête
│   ├── core/             # Données : pages, quiz, checklist, historique des croix
│   ├── services/         # Chargement et logique des apérals
│   ├── router/           # Routes et titres d'onglet
│   ├── layout/           # Mise en page principale (en-tête, menu, pied de page)
│   ├── sass/, style.css  # Styles partagés (tableaux, insignes, circulaires, impression)
│   └── types/            # Types TypeScript
├── tests/                # Tests Vitest (voir plus haut)
├── staticwebapp.config.json  # Réécritures d'URL pour Azure
└── vite.config.ts        # Build, PWA, métadonnées par page
```

### Ajouter une page

1. Déclarer la page (nom, URL, description) dans [`src/core/page.ts`](src/core/page.ts).
2. Créer le composant dans `src/pages/` et l'ajouter au routeur dans [`src/router/index.ts`](src/router/index.ts).
3. Ajouter la réécriture correspondante dans [`staticwebapp.config.json`](staticwebapp.config.json). Le build affiche un avertissement si elle manque.
4. Si besoin, ajouter l'entrée au menu dans [`AppHeader.vue`](src/components/shared/AppHeader.vue).

### Ajouter un apéral

Compléter [`public/data/aperals.json`](public/data/aperals.json) : ville, fréquence, jours, lieux (`latlong` pour apparaître sur la carte) et couleur de statut (`green` actif, `orange` irrégulier, `red` inactif).

### Ajouter une question au quiz

Compléter [`src/core/quiz.json`](src/core/quiz.json). La **première réponse est toujours la bonne** (les réponses sont mélangées à l'affichage), et `source` pointe vers la page du Code où la réponse se trouve. Les tests vérifient la cohérence du fichier.

## Contribuer

1. Créer une branche depuis `main` (`feat/…`, `fix/…`).
2. Vérifier que `npm test` et `npm run build` passent.
3. Ouvrir une pull request vers `main` : la CI lance les tests, la couverture et l'analyse SonarQube Cloud.

**Conventions**

- Messages de commit en français, au format [Conventional Commits](https://www.conventionalcommits.org/fr/) : `feat(revisions): …`, `fix(aperals): …`.
- Noms de fichiers en ASCII uniquement (pas d'accents), pour éviter les soucis entre systèmes.
- Indentation de 4 espaces, fins de ligne LF (voir [`.editorconfig`](.editorconfig)).
- Images avec un texte `alt` descriptif.

## Déploiement

L'application est hébergée sur **Azure Static Web Apps** et déployée par GitHub Actions :

| Branche | Environnement | Workflow |
|---|---|---|
| `main` | Production — [code-amienois.app](https://www.code-amienois.app) | `azure-static-web-apps-purple-plant-…` |
| `release` | Recette | `azure-static-web-apps-proud-field-…` |

Au build, chaque page reçoit son propre `index.html` avec son titre et sa description, pour les aperçus de lien qui n'exécutent pas le JavaScript.

## Crédits et licence

Projet porté par [La CHATTE 2.0](https://linktr.ee/lachatte2.0). Merci à toutes les personnes qui ont contribué au contenu : voir [CREDITS.md](CREDITS.md).

Le code est distribué sous licence [GNU GPL v3](LICENSE).
