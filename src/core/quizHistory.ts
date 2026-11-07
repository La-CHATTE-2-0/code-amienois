import { ref } from "vue";
import { QuizSession } from "../types/quizTypes";

const KEY = "quiz-history";
const VERSION = 1;
// Environ 250 octets par partie : 200 parties tiennent largement dans localStorage
const MAX_SESSIONS = 200;

type Stored = { version: number; sessions: unknown[] };

// Passage d'une version à la suivante : migrations[1] transformera un stockage v1 en v2
const migrations: Record<number, (sessions: unknown[]) => unknown[]> = {};

const isSession = (s: any): s is QuizSession =>
    s !== null &&
    typeof s === "object" &&
    typeof s.id === "string" &&
    typeof s.endedAt === "string" &&
    typeof s.theme === "string" &&
    typeof s.total === "number" &&
    typeof s.correct === "number" &&
    typeof s.wrong === "number" &&
    Array.isArray(s.missed);

function read(): Stored | null {
    try {
        const stored = JSON.parse(localStorage.getItem(KEY) ?? "null");
        return stored && Array.isArray(stored.sessions) ? stored : null;
    } catch {
        return null;
    }
}

// Écrit par une version plus récente de l'app (ancien cache PWA) : on n'y touche pas
const fromNewerVersion = (stored: Stored | null) =>
    typeof stored?.version === "number" && stored.version > VERSION;

function load(): QuizSession[] {
    const stored = read();
    if (!stored || typeof stored.version !== "number" || fromNewerVersion(stored)) return [];
    let sessions = stored.sessions;
    for (let v = stored.version; v < VERSION; v++) {
        sessions = migrations[v]?.(sessions) ?? sessions;
    }
    return sessions.filter(isSession);
}

function save(sessions: QuizSession[]) {
    if (fromNewerVersion(read())) return;
    const write = (list: QuizSession[]) =>
        localStorage.setItem(KEY, JSON.stringify({ version: VERSION, sessions: list }));
    try {
        write(sessions);
    } catch {
        // Stockage plein : on sacrifie les parties les plus anciennes
        try {
            write(sessions.slice(0, Math.ceil(sessions.length / 2)));
        } catch {
            // L'historique ne doit jamais bloquer la fin d'une partie
        }
    }
}

// Partie la plus récente en premier
export const history = ref<QuizSession[]>(load());

export function addSession(session: QuizSession) {
    // Relu juste avant d'écrire, au cas où un autre onglet aurait joué entre-temps
    history.value = [session, ...load()].slice(0, MAX_SESSIONS);
    save(history.value);
}

export function clearHistory() {
    history.value = [];
    localStorage.removeItem(KEY);
}

window.addEventListener("storage", (event) => {
    if (event.key === KEY || event.key === null) history.value = load();
});
