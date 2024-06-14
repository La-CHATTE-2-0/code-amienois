import { createWebHistory, createRouter } from "vue-router";
import pages from "../core/enums/page"

import Code from "../pages/Code.vue";
import RecapSpé from "../pages/RecapSpé.vue";
import Monome from "../pages/Monome.vue";
import NotesAuxPMs from "../pages/NotesAuxPMs.vue";
import CouleursRubans from "../pages/CouleursRubans.vue";
import CheckList from "../pages/CheckList.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
