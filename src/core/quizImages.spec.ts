import { describe, expect, it } from "vitest";
import { IMAGES_THEME, imageQuestionCount, imageQuestions } from "./quizImages";

describe("imageQuestions", () => {
    const questions = imageQuestions();

    it("génère une question par insigne, emblème et circulaire", () => {
        expect(questions).toHaveLength(imageQuestionCount);
        expect(new Set(questions.map((q) => q.id)).size).toBe(questions.length);
        expect(questions.every((q) => q.theme === IMAGES_THEME)).toBe(true);
    });

    it("propose quatre réponses distinctes, la bonne en premier", () => {
        for (const q of questions) {
            expect(q.answers, q.id).toHaveLength(4);
            expect(new Set(q.answers).size, q.id).toBe(4);
        }
    });

    it("décrit le circulaire dans la question sans donner la filière", () => {
        const circulaires = questions.filter((q) => q.circulaire);
        expect(circulaires.length).toBeGreaterThan(0);
        for (const q of circulaires) {
            expect(q.question).toMatch(/^(À Amiens, à|À) quelle filière correspond le circulaire en /);
            expect(q.question).not.toContain(q.answers[0]);
        }
    });

    it("affiche une image pour les insignes et emblèmes", () => {
        for (const q of questions.filter((q) => !q.circulaire)) {
            expect(q.image, q.id).toMatch(/^\/images\//);
            expect(q.imageName, q.id).toBeTruthy();
        }
    });
});
