import { describe, expect, it } from "vitest";
import QuizCard from "../../../src/components/quiz/QuizCard.vue";
import QuizVisual from "../../../src/components/quiz/QuizVisual.vue";
import type { QuizRound } from "../../../src/types/quizTypes";
import { mountWithRouter } from "../../helpers/mountPage";

const round = (extra: Partial<QuizRound> = {}): QuizRound => ({
    id: "q1",
    theme: "histoire",
    question: "Quelle année ?",
    answers: ["1888", "1900"],
    choices: ["1900", "1888"],
    correct: "1888",
    source: "/#article-1",
    ...extra,
});

const mountCard = (props: { round: QuizRound; selected?: string | null }) =>
    mountWithRouter(QuizCard, { props });

describe("QuizCard", () => {
    it("affiche la question et les choix sans verdict", async () => {
        const { wrapper } = await mountCard({ round: round() });
        expect(wrapper.text()).toContain("Quelle année ?");
        expect(wrapper.findAll(".quiz-choice")).toHaveLength(2);
        expect(wrapper.find(".quiz-feedback").exists()).toBe(false);
    });

    it("émet la réponse choisie", async () => {
        const { wrapper } = await mountCard({ round: round() });
        await wrapper.findAll(".quiz-choice")[1].trigger("click");
        expect(wrapper.emitted("update:selected")?.[0]).toEqual(["1888"]);
    });

    it("félicite une bonne réponse", async () => {
        const { wrapper } = await mountCard({ round: round({ explanation: "Parce que." }), selected: "1888" });
        expect(wrapper.text()).toContain("Bonne réponse !");
        expect(wrapper.text()).toContain("Parce que.");
        expect(wrapper.get(".quiz-choice--correct").text()).toContain("1888");
        expect(wrapper.find(".quiz-choice--idle").exists()).toBe(true);
    });

    it("signale une mauvaise réponse avec le nom de l'insigne", async () => {
        const { wrapper } = await mountCard({
            round: round({ imageName: "Carotte", image: "/images/insigne/carotte.png" }),
            selected: "1900",
        });
        expect(wrapper.text()).toContain("Raté…");
        expect(wrapper.text()).toContain("Carotte");
        expect(wrapper.get(".quiz-choice--wrong").text()).toContain("1900");
    });

    it("affiche l'image avant la réponse, en grand en mode images", async () => {
        const { wrapper } = await mountCard({
            round: round({ theme: "images", image: "/images/insigne/carotte.png" }),
        });
        expect(wrapper.findComponent(QuizVisual).props("size")).toBe(160);
    });

    it("cache l'image qui révèle la réponse jusqu'à la réponse", async () => {
        const props = { round: round({ image: "/x.png", imageRevealsAnswer: true }) };
        const before = await mountCard(props);
        expect(before.wrapper.findComponent(QuizVisual).exists()).toBe(false);
        const after = await mountCard({ ...props, selected: "1900" });
        expect(after.wrapper.getComponent(QuizVisual).props("size")).toBe(120);
    });
});

describe("QuizVisual", () => {
    it("dessine un circulaire en plusieurs couleurs", async () => {
        const { wrapper } = await mountCard({
            round: round({ circulaire: { matiere: "velours", couleurs: ["rouge", "jaune"] } }),
        });
        const bands = wrapper.findAll("[data-fal-circu-color]");
        expect(bands).toHaveLength(2);
        expect(bands[0].attributes("data-fal-circu-container")).toBe("demi");
        expect(wrapper.get(".quiz-visual-circu").attributes("style")).toContain("width: 240px");
    });

    it("plafonne la largeur d'un circulaire uni", async () => {
        const { wrapper } = await mountWithRouter(QuizVisual, {
            props: { round: round({ circulaire: { matiere: "satin", couleurs: ["vert"] } }), size: 200 },
        });
        expect(wrapper.get("[data-fal-circu-color]").attributes("data-fal-circu-container")).toBe("");
        expect(wrapper.get(".quiz-visual-circu").attributes("style")).toContain("width: 250px");
    });

    it("tourne l'image et la pose sur un ruban", async () => {
        const { wrapper } = await mountWithRouter(QuizVisual, {
            props: { round: round({ image: "/a.png", imageRotate: 90, imageRuban: "rouge" }), size: 50 },
        });
        const img = wrapper.get("img");
        expect(img.classes()).toContain("bg-ruban-rouge");
        expect(img.attributes("style")).toContain("rotate: 90deg");
    });

    it("n'affiche rien sans visuel", async () => {
        const { wrapper } = await mountWithRouter(QuizVisual, { props: { round: round(), size: 50 } });
        expect(wrapper.find("img").exists()).toBe(false);
    });
});
