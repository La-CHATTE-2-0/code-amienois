import vuetify from "vite-plugin-vuetify";

const routePaths: Record<string, string> = {
    Code: "/",
    RecapSpe: "/recap-spe",
    Monome: "/monome",
    NotesAuxPMs: "/notes-aux-pms",
    CheckList: "/checklist-congres",
    CouleursRubans: "/couleurs-des-rubans",
    HistoriqueCroix: "/historique-croix",
    Rabelais: "/rabelais",
    Gambrinus: "/gambrinus",
    Bacchus: "/bacchus",
    FolkloresFrancais: "/folklore-francais",
    FolkloresEtrangers: "/folklore-etranger",
    GuideCouture: "/guide-couture",
    Codex: "/codex",
    HommeBouee: "/homme-bouee",
    Aperals: "/aperals",
};

export default defineNuxtConfig({
    srcDir: "src/",
    dir: {
        public: "../public",
    },
    ssr: true,
    devtools: { enabled: false },
    css: [
        "@mdi/font/css/materialdesignicons.css",
        "vuetify/styles",
        "~/style.css",
    ],
    modules: ["@vite-pwa/nuxt"],
    build: {
        transpile: ["vuetify", "@vue-leaflet/vue-leaflet"],
    },
    vite: {
        server: {
            port: 8080,
        },
        plugins: [vuetify({ autoImport: true })],
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
        },
    },
    pwa: {
        registerType: "autoUpdate",
        injectRegister: "auto",
        devOptions: {
            enabled: true,
        },
        workbox: {
            globPatterns: [
                "**/*.{js,css,html,ico,png,svg,webp,jpeg,JPG,jpg,woff2,woff,mp3,json}",
            ],
        },
        manifest: {
            short_name: "Code Amiénois",
            name: "Code de la Faluche Amiénoise",
            description: "Code de la Faluche Amiénoise",
            start_url: "/",
            display: "standalone",
            icons: [
                { src: "/icons-512.png", type: "image/png", sizes: "512x512", purpose: "any maskable" },
                { src: "/icons-192.png", type: "image/png", sizes: "192x192" },
                { src: "/icons-128.png", type: "image/png", sizes: "128x128" },
                { src: "/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon", purpose: "any" },
            ],
            theme_color: "#121212",
            background_color: "#ffffff",
        },
    },
    hooks: {
        "pages:extend"(pages) {
            for (const page of pages) {
                const fileName = page.file?.split("/").pop()?.replace(".vue", "");
                if (fileName && routePaths[fileName]) {
                    page.path = routePaths[fileName];
                }
            }
        },
    },
});
