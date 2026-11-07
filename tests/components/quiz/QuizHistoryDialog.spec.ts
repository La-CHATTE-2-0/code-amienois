import { afterEach, describe, expect, it } from "vitest";
import { flushPromises } from "@vue/test-utils";
import QuizHistoryDialog from "../../../src/components/quiz/QuizHistoryDialog.vue";
import { history } from "../../../src/core/quizHistory";
import type { QuizQuestion, QuizSession } from "../../../src/types/quizTypes";
import { mountWithRouter } from "../../helpers/mountPage";
import { body, buttons } from "../../helpers/dom";

const themes = [
    { id: "histoire", label: "Histoire", description: "", icon: "mdi-book" },
    { id: "survivor", label: "Survivor", description: "", icon: "mdi-skull" },
];

const daysAgo = (n: number, year?: number) => {
    const d = new Date();
    d.setDate(d.getDate() - n);
    if (year) d.setFullYear(year);
    return d.toISOString();
};

const session = (id: string, extra: Partial<QuizSession> = {}): QuizSession => ({
    id,
    startedAt: daysAgo(0),
    endedAt: daysAgo(0),
    theme: "histoire",
    count: 10,
    total: 10,
    correct: 7,
    wrong: 3,
    missed: ["h01"],
    ...extra,
});

const replayable = (ids: string[]) => ids.map((id) => ({ id }) as QuizQuestion);

async function mountDialog() {
    const { wrapper } = await mountWithRouter(QuizHistoryDialog, {
        attachTo: document.body,
        props: { modelValue: true, themes, survivorId: "survivor", replayable },
    });
    await flushPromises();
    return wrapper;
}

describe("QuizHistoryDialog", () => {
    afterEach(() => {
        history.value = [];
        document.body.innerHTML = "";
    });

    it("indique l'absence de partie", async () => {
        const wrapper = await mountDialog();
        expect(body()).toContain("Aucune partie terminée");
        wrapper.unmount();
    });

    it("résume les parties, groupées par jour", async () => {
        history.value = [
            session("a"),
            session("b", { endedAt: daysAgo(1), replay: true, correct: 1, total: 2 }),
            session("c", { endedAt: daysAgo(10), theme: "survivor", correct: 12 }),
            session("d", { endedAt: daysAgo(400, 2020), theme: "inconnu", missed: [] }),
        ];
        const wrapper = await mountDialog();
        expect(body()).toContain("Aujourd'hui");
        expect(body()).toContain("Hier");
        expect(body()).toContain("2020");
        // La partie d'erreurs et le survivor ne comptent pas dans la moyenne
        expect(body()).toContain("70 %");
        expect(body()).toContain("Série 12");
        expect(body()).toContain("inconnu");
        expect(body()).toContain("Erreurs");
        wrapper.unmount();
    });

    it("propose de rejouer les erreurs d'une partie", async () => {
        history.value = [session("a")];
        const wrapper = await mountDialog();
        buttons("Rejouer")[0].click();
        expect(wrapper.emitted("replay")?.[0]).toEqual([history.value[0]]);
        wrapper.unmount();
    });

    it("filtre par thème", async () => {
        history.value = [session("a"), session("b", { theme: "survivor", correct: 4 })];
        const wrapper = await mountDialog();
        const chip = [...document.querySelectorAll<HTMLElement>(".v-chip")].find((c) =>
            c.textContent?.includes("Survivor")
        );
        chip?.click();
        await flushPromises();
        expect(body()).toContain("Meilleure série");
        expect(body()).not.toContain("Réussite moyenne");
        wrapper.unmount();
    });

    it("efface l'historique après confirmation", async () => {
        history.value = [session("a")];
        const wrapper = await mountDialog();
        buttons("Effacer l'historique")[0].click();
        await flushPromises();
        buttons("Annuler")[0].click();
        await flushPromises();
        buttons("Effacer l'historique")[0].click();
        await flushPromises();
        buttons("Effacer").slice(-1)[0]?.click();
        await flushPromises();
        expect(history.value).toEqual([]);
        wrapper.unmount();
    });

    it("se ferme", async () => {
        const wrapper = await mountDialog();
        document.querySelector<HTMLElement>('[aria-label="Fermer"]')?.click();
        expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([false]);
        wrapper.unmount();
    });
});
