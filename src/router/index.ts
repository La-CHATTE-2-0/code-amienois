import { createWebHistory, createRouter } from "vue-router";
import pages from "../core/page"

import Code from "../pages/Code.vue";
import RecapSpé from "../pages/RecapSpé.vue";
import Monome from "../pages/Monome.vue";
import NotesAuxPMs from "../pages/NotesAuxPMs.vue";
import CouleursRubans from "../pages/CouleursRubans.vue";
import CheckList from "../pages/CheckList.vue";
import HistoriqueCroix from "../pages/HistoriqueCroix.vue";
import Bacchus from "../pages/Bacchus.vue";
import Rabelais from "../pages/Rabelais.vue";
import Gambrinus from "../pages/Gambrinus.vue";
import GuideCouture from "../pages/GuideCouture.vue";
import FolkloresFrancais from "../pages/FolkloresFrancais.vue";
import FolkloresEtrangers from "../pages/FolkloresEtrangers.vue";
import Codex from "../pages/Codex.vue";

const routes = [
    {
        path: pages.code.url,
        name: pages.code.name,
        component: Code,
        meta: { layout: "Main" },
        exact: true,
    },
    {
        path: pages.recap_spe.url,
        name: pages.recap_spe.name,
        component: RecapSpé,
        meta: { layout: "Main" },
    },
    {
        path: pages.monome.url,
        name: pages.monome.name,
        component: Monome,
        meta: { layout: "Main" },
    },
    {
        path: pages.couleurs_rubans.url,
        name: pages.couleurs_rubans.name,
        component: CouleursRubans,
        meta: { layout: "Main" },
    },
    {
        path: pages.notes_aux_pm.url,
        name: pages.notes_aux_pm.name,
        component: NotesAuxPMs,
        meta: { layout: "Main" },
    },
    {
        path: pages.checklist.url,
        name: pages.checklist.name,
        component: CheckList,
        meta: { layout: "Main" },
    },
    {
        path: pages.historique_croix.url,
        name: pages.historique_croix.name,
        component: HistoriqueCroix,
        meta: { layout: "Main" },
    },
    {
        path: pages.gambrinus.url,
        name: pages.gambrinus.name,
        component: Gambrinus,
        meta: { layout: "Main" },
    },
    {
        path: pages.bacchus.url,
        name: pages.bacchus.name,
        component: Bacchus,
        meta: { layout: "Main" },
    },
    {
        path: pages.rabelais.url,
        name: pages.rabelais.name,
        component: Rabelais,
        meta: { layout: "Main" },
    },
    {
        path: pages.folklore_francais.url,
        name: pages.folklore_francais.name,
        component: FolkloresFrancais,
        meta: { layout: "Main" },
    },
    {
        path: pages.folklore_etranger.url,
        name: pages.folklore_etranger.name,
        component: FolkloresEtrangers,
        meta: { layout: "Main" },
    },
    {
        path: pages.guide_couture.url,
        name: pages.guide_couture.name,
        component: GuideCouture,
        meta: { layout: "Main" },
    },
    {
        path: pages.codex.url,
        name: pages.codex.name,
        component: Codex,
        meta: { layout: "Main" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _from, next) => {
    document.title = (to.name as string);
    next();
});

export default router;
