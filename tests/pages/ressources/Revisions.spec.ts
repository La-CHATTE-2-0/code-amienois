import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { flushPromises, type VueWrapper } from "@vue/test-utils";
import Revisions from "../../../src/pages/ressources/Revisions.vue";
import { history } from "../../../src/core/quizHistory";
import quiz from "../../../src/core/quiz.json";
import { mountWithRouter } from "../../helpers/mountPage";
import { body, buttons } from "../../helpers/dom";

// Math.random proche de 1 : le mélange garde l'ordre, la bonne réponse est donc toujours le premier choix
beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.999);
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
    history.value = [];
    document.body.innerHTML = "";
});

async function mountPage() {
    const { wrapper } = await mountWithRouter(Revisions, { attachTo: document.body });
    return wrapper;
}

const startTheme = async (wrapper: VueWrapper, label: string) => {
    const theme = wrapper.findAll(".quiz-theme").find((t) => t.text().includes(label));
    await theme!.trigger("click");
};

const nextButton = (wrapper: VueWrapper) =>
    wrapper.findAll(".quiz-actions button").slice(-1)[0];

// Répond à la question courante (bonne ou mauvaise réponse), puis passe à la suite
async function answer(wrapper: VueWrapper, correct: boolean) {
    await wrapper.findAll(".quiz-choice")[correct ? 0 : 1].trigger("click");
    await nextButton(wrapper).trigger("click");
}

async function chooseCount(wrapper: VueWrapper, label: string) {
    const btn = wrapper.findAll(".quiz-count button").find((b) => b.text() === label);
    await btn!.trigger("click");
}

describe("Revisions", () => {
    it("liste les thèmes et les modes de jeu", async () => {
        const wrapper = await mountPage();
        expect(wrapper.text()).toContain("Tout mélanger");
        expect(wrapper.text()).toContain("Survivor");
        expect(wrapper.findAll(".quiz-theme").length).toBe(quiz.themes.length + 3);
        expect(wrapper.text()).not.toContain("Historique des parties");
    });

    it("joue une partie complète et enregistre le record", async () => {
        const wrapper = await mountPage();
        await chooseCount(wrapper, "10");
        expect(localStorage.getItem("quiz-count")).toBe("10");
        await startTheme(wrapper, "Tout mélanger");

        for (let i = 0; i < 10; i++) {
            expect(wrapper.text()).toContain(`${i + 1} / 10`);
            await answer(wrapper, i % 2 === 0);
        }

        expect(wrapper.get(".quiz-result__score").text()).toBe("5 / 10");
        expect(wrapper.text()).toContain("50 % de réussite");
        expect(wrapper.text()).toContain("Rejouer ces erreurs");
        expect(localStorage.getItem("quiz-best-tout-10")).toBe("5");
        expect(history.value[0]).toMatchObject({ theme: "tout", total: 10, correct: 5, wrong: 5 });
        expect(history.value[0].missed).toHaveLength(5);

        // Rejouer les erreurs : partie hors record
        await buttons("Rejouer ces erreurs")[0].click();
        await flushPromises();
        expect(wrapper.text()).toContain("Tout mélanger · erreurs");
        for (let i = 0; i < 5; i++) await answer(wrapper, i !== 0);
        expect(wrapper.get(".quiz-result__score").text()).toBe("4 / 5");
        expect(wrapper.text()).toContain("Rejouer cette erreur");
        expect(history.value[0].replay).toBe(true);
        expect(localStorage.getItem("quiz-best-tout-10")).toBe("5");

        // « Rejouer » relance les mêmes erreurs
        await buttons("Rejouer").slice(-1)[0].click();
        await flushPromises();
        expect(wrapper.text()).toContain("1 / 5");

        await buttons("Abandonner")[0].click();
        await flushPromises();
        expect(wrapper.text()).toContain("Historique des parties");
    });

    it("s'arrête à la première erreur en survivor", async () => {
        const wrapper = await mountPage();
        await startTheme(wrapper, "Survivor");
        await answer(wrapper, true);
        await answer(wrapper, true);
        await wrapper.findAll(".quiz-choice")[1].trigger("click");
        expect(nextButton(wrapper).text()).toContain("Voir le résultat");
        await nextButton(wrapper).trigger("click");

        expect(wrapper.get(".quiz-result__score").text()).toBe("2");
        expect(wrapper.text()).toContain("bonnes réponses d'affilée");
        expect(localStorage.getItem("quiz-best-survivor")).toBe("2");

        // Nouvelle partie, perdue dès la première question
        await buttons("Rejouer").slice(-1)[0].click();
        await flushPromises();
        await answer(wrapper, false);
        expect(wrapper.text()).toContain("bonne réponse d'affilée");
        expect(localStorage.getItem("quiz-best-survivor")).toBe("2");
    });

    it("propose le quiz en images, sans rejeu des erreurs", async () => {
        const wrapper = await mountPage();
        await chooseCount(wrapper, "10");
        await startTheme(wrapper, "Quiz en images");
        for (let i = 0; i < 10; i++) await answer(wrapper, false);
        expect(wrapper.get(".quiz-result__score").text()).toBe("0 / 10");
        expect(wrapper.find(".quiz-missed").exists()).toBe(true);
        expect(buttons("Rejouer ces erreurs")).toHaveLength(0);
        expect(history.value[0].missed).toEqual([]);

        await buttons("Changer de thème")[0].click();
        await flushPromises();
        expect(wrapper.text()).toMatch(/Record : 0\s*\/ 10/);
    });

    it("joue toutes les questions d'un thème", async () => {
        const theme = quiz.themes[0];
        const total = quiz.questions.filter((q) => q.theme === theme.id).length;
        const wrapper = await mountPage();
        await chooseCount(wrapper, "Toutes");
        await startTheme(wrapper, theme.label);
        for (let i = 0; i < total; i++) await answer(wrapper, true);
        expect(wrapper.get(".quiz-result__score").text()).toBe(`${total} / ${total}`);
        expect(wrapper.find(".quiz-missed").exists()).toBe(false);
    });

    it("reprend les réglages et records enregistrés", async () => {
        localStorage.setItem("quiz-count", "30");
        localStorage.setItem(`quiz-best-${quiz.themes[0].id}-30`, "12");
        // Record d'avant le choix du nombre de questions : compte pour 20
        localStorage.setItem(`quiz-best-${quiz.themes[1].id}`, "8");
        vi.resetModules();
        const { default: Page } = await import("../../../src/pages/ressources/Revisions.vue");
        const { wrapper } = await mountWithRouter(Page, { attachTo: document.body });
        expect(wrapper.text()).toContain("Record : 12");
        await chooseCount(wrapper, "20");
        expect(wrapper.text()).toContain("Record : 8");
    });

    it("ignore un nombre de questions invalide", async () => {
        localStorage.setItem("quiz-count", "7");
        vi.resetModules();
        const { default: Page } = await import("../../../src/pages/ressources/Revisions.vue");
        const { wrapper } = await mountWithRouter(Page, { attachTo: document.body });
        const active = wrapper.find(".quiz-count .v-btn--active");
        expect(active.text()).toBe("20");
    });

    it("rejoue les erreurs depuis l'historique", async () => {
        const id = quiz.questions[0].id;
        history.value = [
            {
                id: "s1",
                startedAt: new Date().toISOString(),
                endedAt: new Date().toISOString(),
                theme: "theme-disparu",
                count: 10,
                total: 10,
                correct: 9,
                wrong: 1,
                missed: [id],
            },
        ];
        const wrapper = await mountPage();
        await buttons("Historique des parties")[0].click();
        await flushPromises();
        expect(body()).toContain("Rejouer");
        buttons("Rejouer")[0].click();
        await flushPromises();
        // Thème inconnu : on retombe sur « Tout mélanger »
        expect(wrapper.text()).toContain("Tout mélanger · erreurs");
        expect(wrapper.text()).toContain("1 / 1");
    });
});

