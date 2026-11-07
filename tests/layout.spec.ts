import { describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { VApp } from "vuetify/components";
import App from "../src/App.vue";
import MainLayout from "../src/layout/MainLayout.vue";
import AppHeader from "../src/components/shared/AppHeader.vue";
import router from "../src/router";
import pages from "../src/core/page";
import { version } from "../src/version";
import { mountWithRouter } from "./helpers/mountPage";

// AppHeader et MainLayout utilisent la mise en page Vuetify : ils doivent vivre dans un <v-app>
const inApp = (component: any) =>
    defineComponent({ render: () => h(VApp, () => h(component)) });

describe("MainLayout", () => {
    it("affiche le menu, le contenu et la version", async () => {
        const { wrapper } = await mountWithRouter(inApp(MainLayout), { attachTo: document.body });
        expect(wrapper.text()).toContain("Aller au contenu");
        expect(wrapper.text()).toContain(version);
        expect(wrapper.find("#contenu").exists()).toBe(true);
        wrapper.unmount();
    });

    it("place le focus sur le contenu via le lien d'évitement", async () => {
        const { wrapper } = await mountWithRouter(inApp(MainLayout), { attachTo: document.body });
        await wrapper.get(".skip-link").trigger("click");
        expect(document.activeElement?.id).toBe("contenu");
        wrapper.unmount();
    });
});

describe("AppHeader", () => {
    it("affiche un lien de retour hors de l'accueil", async () => {
        const home = await mountWithRouter(inApp(AppHeader), { attachTo: document.body }, "/");
        const other = await mountWithRouter(inApp(AppHeader), { attachTo: document.body }, "/monome");
        expect(other.wrapper.html().length).toBeGreaterThan(home.wrapper.html().length);
        home.wrapper.unmount();
        other.wrapper.unmount();
    });

    it("ouvre et ferme le menu", async () => {
        const { wrapper } = await mountWithRouter(inApp(AppHeader), { attachTo: document.body });
        const toggle = wrapper.get(".v-app-bar-nav-icon");
        await toggle.trigger("click");
        await toggle.trigger("click");
        expect(wrapper.find(".v-navigation-drawer").exists()).toBe(true);
        wrapper.unmount();
    });

    it("enregistre le thème choisi", async () => {
        const { wrapper } = await mountWithRouter(inApp(AppHeader), { attachTo: document.body });
        const group = wrapper.findComponent({ name: "VBtnToggle" });
        group.vm.$emit("update:modelValue", "dark");
        await flushPromises();
        expect(localStorage.getItem("theme")).toBe("dark");
        wrapper.unmount();
    });
});

describe("App", () => {
    const mountApp = async (path: string) => {
        await router.push(path);
        await router.isReady();
        const wrapper = mount(App, {
            attachTo: document.body,
            global: { plugins: [router], components: { MainLayout } },
        });
        await flushPromises();
        return wrapper;
    };

    it("initialise le thème au premier lancement", async () => {
        const wrapper = await mountApp("/");
        expect(localStorage.getItem("theme")).toBe("system");
        wrapper.unmount();
    });

    it("conserve le thème déjà choisi", async () => {
        localStorage.setItem("theme", "dark");
        const wrapper = await mountApp("/");
        expect(localStorage.getItem("theme")).toBe("dark");
        expect(document.documentElement.style.colorScheme).toBe("dark");
        wrapper.unmount();
    });

    it("affiche la page d'erreur sur une route inconnue", async () => {
        const wrapper = await mountApp("/nimporte-quoi");
        expect(document.title).toBe("Page introuvable · Code Amiénois");
        wrapper.unmount();
    });
});

describe("router", () => {
    it("nomme l'onglet d'après la page", async () => {
        await router.push(pages.monome.url);
        expect(document.title).toBe(`${pages.monome.name} · Code Amiénois`);
        await router.push(pages.code.url);
        expect(document.title).toBe("Code Amiénois");
    });

    it("déclare une route pour chaque page interne", async () => {
        for (const page of Object.values(pages)) {
            if (!page.url.startsWith("/") || page.url === pages.rabelais.url) continue;
            const { matched } = router.resolve(page.url);
            expect(matched[0]?.name, page.url).toBe(page.name);
        }
    });

    it("charge chaque page à la demande", async () => {
        for (const route of router.getRoutes()) {
            const component = route.components?.default as any;
            const resolved = typeof component === "function" ? await component() : component;
            expect(resolved, route.path).toBeTruthy();
        }
    });

    it("gère la position de défilement", () => {
        const scroll = router.options.scrollBehavior!;
        const to = (hash = "") => ({ hash }) as any;
        expect(scroll(to(), to(), { left: 0, top: 42 })).toEqual({ left: 0, top: 42 });
        expect(scroll(to("#art-1"), to(), null)).toEqual({ el: "#art-1", top: 120, behavior: "smooth" });
        expect(scroll(to(), to(), null)).toEqual({ top: 0 });
    });
});
