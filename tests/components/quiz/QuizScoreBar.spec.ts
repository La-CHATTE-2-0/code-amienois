import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import QuizScoreBar from "../../../src/components/quiz/QuizScoreBar.vue";

const props = { label: "Histoire", correct: 3, wrong: 1, total: 10, position: 5 };

describe("QuizScoreBar", () => {
    it("résume le score pour les lecteurs d'écran", () => {
        const wrapper = mount(QuizScoreBar, { props });
        expect(wrapper.get("output").attributes("aria-label")).toBe(
            "3 bonnes, 1 fausse, question 5 sur 10"
        );
        expect(wrapper.text()).toContain("5 / 10");
    });

    it("dimensionne les segments selon le score", () => {
        const wrapper = mount(QuizScoreBar, { props });
        expect(wrapper.get(".quiz-score__segment--correct").attributes("style")).toContain("width: 30%");
        expect(wrapper.get(".quiz-score__segment--wrong").attributes("style")).toContain("width: 10%");
    });

    it("n'affiche que la série en mode survivor", () => {
        const wrapper = mount(QuizScoreBar, { props: { ...props, survivor: true } });
        expect(wrapper.get("output").attributes("aria-label")).toBe("Série de 3");
        expect(wrapper.find(".quiz-score__counts").exists()).toBe(false);
    });

    it("ne divise pas par zéro sans question", () => {
        const wrapper = mount(QuizScoreBar, { props: { ...props, total: 0 } });
        expect(wrapper.get(".quiz-score__segment--correct").attributes("style")).toContain("width: 0%");
    });
});
