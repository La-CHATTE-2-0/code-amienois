# Code Amienois (PWA)

Application web (PWA) affichant le Code de la Faluche Amienoise.

## Stack

- Vue 3 + TypeScript
- Vite
- Vuetify
- Vue Router
- PWA: `vite-plugin-pwa`
- Carte: Leaflet via `@vue-leaflet/vue-leaflet`

## Prerequis

- Node.js >= 20.10 (voir `package.json` > `engines`)
- npm

## Scripts

Installer les dependances:

```bash
npm ci
```

Lancer le serveur de dev:

```bash
npm run dev
```

Build de production:

```bash
npm run build
```

Previsualiser le build:

```bash
npm run preview
```

Lancer les tests:

```bash
npm test
```

Couverture de code:

```bash
npm run test:coverage
```

Le rapport HTML est genere dans `coverage/index.html`. En CI (workflow `Node.js CI`), la couverture est affichee dans le resume du job, commentee sur chaque PR vers `main`, et le rapport HTML est telechargeable dans les artefacts du run (`coverage-report`).

Build + preview (sanity check):

```bash
npm run check-prod
```

## Structure (raccourci)

- `src/pages/`: pages (routes)
- `src/components/`: composants reutilisables + articles
- `src/router/index.ts`: definition des routes
- `public/`: assets statiques (images, sons, `data/aperals.json`, ...)

## Deploiement

Le repo contient une configuration Azure Static Web Apps (`staticwebapp.config.json`) et des workflows GitHub Actions dans `.github/workflows/`.

## Conventions

- Noms de fichiers: ASCII uniquement (pas d'accents) pour eviter des soucis cross-platform.
- Images: `alt` descriptifs et coherents.
