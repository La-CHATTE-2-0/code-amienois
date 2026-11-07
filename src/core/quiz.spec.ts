import { describe, expect, it } from "vitest";
import data from "./quiz.json";

// Garde-fous sur le contenu du quiz, saisi à la main
describe("quiz.json", () => {
    const themeIds = new Set(data.themes.map((t) => t.id));

    it("a des identifiants de question uniques", () => {
        const ids = data.questions.map((q) => q.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it("rattache chaque question à un thème existant", () => {
        for (const q of data.questions) {
            expect(themeIds.has(q.theme), q.id).toBe(true);
        }
    });

    it("propose au moins deux réponses distinctes par question", () => {
        for (const q of data.questions) {
            expect(q.answers.length, q.id).toBeGreaterThanOrEqual(2);
            expect(new Set(q.answers).size, q.id).toBe(q.answers.length);
        }
    });

    it("cite une source interne pour chaque question", () => {
        for (const q of data.questions) {
            expect(q.source, q.id).toMatch(/^\//);
        }
    });
});
