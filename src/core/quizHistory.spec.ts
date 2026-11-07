import { beforeEach, describe, expect, it, vi } from "vitest";
import { QuizSession } from "../types/quizTypes";

const KEY = "quiz-history";

const session = (id: string): QuizSession => ({
    id,
    startedAt: "2026-01-01T10:00:00.000Z",
    endedAt: "2026-01-01T10:05:00.000Z",
    theme: "histoire",
    count: 10,
    total: 10,
    correct: 7,
    wrong: 3,
    missed: ["h01"],
});

const store = (value: unknown) => localStorage.setItem(KEY, JSON.stringify(value));

// L'historique est lu au chargement du module : on le recharge pour chaque cas
const loadModule = () => import("./quizHistory");

describe("quizHistory", () => {
    beforeEach(() => {
        vi.resetModules();
    });

    it("démarre vide sans stockage", async () => {
        const { history } = await loadModule();
        expect(history.value).toEqual([]);
    });

    it("relit les parties valides et écarte les autres", async () => {
        store({ version: 1, sessions: [session("a"), { id: "b" }, null] });
        const { history } = await loadModule();
        expect(history.value.map((s) => s.id)).toEqual(["a"]);
    });

    it("ignore un stockage illisible", async () => {
        localStorage.setItem(KEY, "{pas du json");
        const { history } = await loadModule();
        expect(history.value).toEqual([]);
    });

    it("ajoute la partie la plus récente en premier et l'enregistre", async () => {
        store({ version: 1, sessions: [session("a")] });
        const { history, addSession } = await loadModule();
        addSession(session("b"));
        expect(history.value.map((s) => s.id)).toEqual(["b", "a"]);
        expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual({ version: 1, sessions: history.value });
    });

    it("limite l'historique à 200 parties", async () => {
        store({ version: 1, sessions: Array.from({ length: 200 }, (_, i) => session(`s${i}`)) });
        const { history, addSession } = await loadModule();
        addSession(session("new"));
        expect(history.value).toHaveLength(200);
        expect(history.value[0].id).toBe("new");
        expect(history.value[199].id).toBe("s198");
    });

    it("n'écrase pas un historique écrit par une version plus récente", async () => {
        const newer = { version: 99, sessions: [{ autre: "format" }] };
        store(newer);
        const { history, addSession } = await loadModule();
        expect(history.value).toEqual([]);
        addSession(session("a"));
        expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual(newer);
    });

    it("garde la moitié la plus récente quand le stockage est plein", async () => {
        store({ version: 1, sessions: [session("a"), session("b"), session("c")] });
        const { history, addSession } = await loadModule();
        vi.spyOn(localStorage, "setItem").mockImplementationOnce(() => {
            throw new DOMException("plein", "QuotaExceededError");
        });
        addSession(session("d"));
        expect(history.value).toHaveLength(4);
        expect(JSON.parse(localStorage.getItem(KEY)!).sessions.map((s: QuizSession) => s.id)).toEqual(["d", "a"]);
    });

    it("vide l'historique", async () => {
        store({ version: 1, sessions: [session("a")] });
        const { history, clearHistory } = await loadModule();
        clearHistory();
        expect(history.value).toEqual([]);
        expect(localStorage.getItem(KEY)).toBeNull();
    });

    it("se resynchronise quand un autre onglet écrit", async () => {
        const { history } = await loadModule();
        store({ version: 1, sessions: [session("ailleurs")] });
        window.dispatchEvent(new StorageEvent("storage", { key: KEY }));
        expect(history.value.map((s) => s.id)).toEqual(["ailleurs"]);
    });
});
