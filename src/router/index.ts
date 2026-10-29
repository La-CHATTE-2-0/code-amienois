import { createWebHistory, createRouter } from "vue-router";
import pages from "../core/page"

import Code from "../pages/Code.vue";

const APP_NAME = "Code Amiénois";

// Page d'accueil chargée d'office, les autres à la demande
const routes = [
    {
        path: pages.code.url,
        name: pages.code.name,
        component: Code,
        meta: { layout: "Main" },
    },
    {
        path: pages.recap_spe.url,
        name: pages.recap_spe.name,
        component: () => import("../pages/annexes/RecapSpe.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.monome.url,
        name: pages.monome.name,
        component: () => import("../pages/annexes/Monome.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.couleurs_rubans.url,
        name: pages.couleurs_rubans.name,
        component: () => import("../pages/ressources/CouleursRubans.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.notes_aux_pm.url,
        name: pages.notes_aux_pm.name,
        component: () => import("../pages/ressources/NotesAuxPMs.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.checklist.url,
        name: pages.checklist.name,
        component: () => import("../pages/ressources/CheckList.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.historique_croix.url,
        name: pages.historique_croix.name,
        component: () => import("../pages/HistoriqueCroix.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.gambrinus.url,
        name: pages.gambrinus.name,
        component: () => import("../pages/annexes/Gambrinus.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.bacchus.url,
        name: pages.bacchus.name,
        component: () => import("../pages/annexes/Bacchus.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.folklore_francais.url,
        name: pages.folklore_francais.name,
        component: () => import("../pages/vie/FolkloresFrancais.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.folklore_etranger.url,
        name: pages.folklore_etranger.name,
        component: () => import("../pages/vie/FolkloresEtrangers.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.guide_couture.url,
        name: pages.guide_couture.name,
        component: () => import("../pages/ressources/GuideCouture.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.codex.url,
        name: pages.codex.name,
        component: () => import("../pages/Codex.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.homme_bouee.url,
        name: pages.homme_bouee.name,
        component: () => import("../pages/vie/HommeBouee.vue"),
        meta: { layout: "Main" },
    },
    {
        path: pages.aperals.url,
        name: pages.aperals.name,
        component: () => import("../pages/vie/Aperals.vue"),
        meta: { layout: "Main" },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Page introuvable",
        component: () => import("../pages/NotFound.vue"),
        meta: { layout: "Main" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) return savedPosition;
        // Décalage : en-tête (64px) + sommaire des articles collant
        if (to.hash) return { el: to.hash, top: 120, behavior: "smooth" };
        return { top: 0 };
    },
});

router.afterEach((to) => {
    const name = to.name as string;
    document.title = to.path === pages.code.url ? APP_NAME : `${name} · ${APP_NAME}`;
});

export default router;
