# Code Amienois (PWA)

Application web (PWA) affichant le Code de la Faluche Amienoise.

## Stack

- Nuxt 3 + Vue 3 + TypeScript
- Vuetify
- PWA: `@vite-pwa/nuxt`
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

Build + preview (sanity check):

```bash
npm run check-prod
```

Pour produire des URLs Open Graph absolues, definir `NUXT_PUBLIC_SITE_URL` avec
l'URL publique de l'application avant le build.

## Structure (raccourci)

- `src/pages/`: pages (routes)
- `src/components/`: composants reutilisables + articles
- `nuxt.config.ts`: configuration Nuxt et correspondance des routes historiques
- `public/`: assets statiques (images, sons, `data/aperals.json`, ...)

## Deploiement

Le repo contient une configuration Azure Static Web Apps (`staticwebapp.config.json`) et des workflows GitHub Actions dans `.github/workflows/`.

## Conventions

- Noms de fichiers: ASCII uniquement (pas d'accents) pour eviter des soucis cross-platform.
- Images: `alt` descriptifs et coherents.
