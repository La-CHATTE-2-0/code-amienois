import data from "./quizImages.json";
import { QuizQuestion } from "../types/quizTypes";

export const IMAGES_THEME = "images";

type Insigne = (typeof data.insignes)[number] & { rotate?: number; ruban?: string; amiens?: boolean };
type Embleme = (typeof data.emblemes)[number] & { rotate?: number; amiens?: boolean };
type Circulaire = (typeof data.circulaires)[number] & { amiens?: boolean };

const insignes: Insigne[] = data.insignes;
const emblemes: Embleme[] = data.emblemes;
const circulaires: Circulaire[] = data.circulaires;

const QUESTION_BY_GROUP: Record<string, string> = {
    circulaire: "Que signifie cet insigne sur le circulaire ?",
    capacitaire: "Que signifie cet insigne placé avant les initiales ?",
    velours: "Que signifie cet insigne sur le velours ?",
    partenaire: "Que signifie cet insigne décerné par le/la partenaire ?",
    "grand-maitre": "Que signifie cet insigne décerné par un Grand Maître ?",
};

const COULEURS: Record<string, string> = {
    argente: "argenté",
    bleuroy: "bleu roy",
    vertclair: "vert clair",
    vertfonce: "vert foncé",
};

// Teintes difficiles à distinguer à l'écran
const TEINTES_PROCHES: Record<string, string> = {
    vertfonce: "vert",
    fiolet: "violet",
    saumon: "rose",
};

export const imageQuestionCount = insignes.length + emblemes.length + circulaires.length;

const atAmiens = (question: string, amiens?: boolean) =>
    amiens ? `À Amiens, ${question[0].toLowerCase()}${question.slice(1)}` : question;

function shuffle<T>(items: T[]): T[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Trois mauvaises réponses tirées au hasard, sans doublon
function pickWrong(candidates: string[], correct: string): string[] {
    return shuffle([...new Set(candidates)].filter((c) => c !== correct)).slice(0, 3);
}

function describe(c: Circulaire): string {
    const names = c.couleurs.map((couleur) => COULEURS[couleur] ?? couleur);
    const couleurs =
        names.length > 1 ? `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}` : names[0];
    return `${c.matiere === "velours" ? "Velours" : "Satin"} ${couleurs}.`;
}

// Mauvaises réponses : jamais un insigne de même image, ni une filière de même couleur
export function imageQuestions(): QuizQuestion[] {
    const fromInsignes = insignes.map((ins, i) => ({
        id: `img-insigne-${i}`,
        theme: IMAGES_THEME,
        question: atAmiens(QUESTION_BY_GROUP[ins.group], ins.amiens),
        image: ins.image,
        imageRotate: ins.rotate,
        imageRuban: ins.ruban,
        answers: [
            ins.meaning,
            ...pickWrong(
                insignes
                    .filter((other) => other.group === ins.group && other.image !== ins.image)
                    .map((other) => other.meaning),
                ins.meaning
            ),
        ],
        source: ins.source,
    }));

    const fromEmblemes = emblemes.map((emb, i) => ({
        id: `img-embleme-${i}`,
        theme: IMAGES_THEME,
        question: atAmiens("À quelle filière correspond cet emblème ?", emb.amiens),
        image: emb.image,
        imageRotate: emb.rotate,
        answers: [
            emb.filiere,
            ...pickWrong(
                emblemes.filter((other) => other.image !== emb.image).map((other) => other.filiere),
                emb.filiere
            ),
        ],
        source: emb.source,
    }));

    // Même couleur quelle que soit la matière (la texture ne se voit pas toujours), teintes proches confondues
    const colorKey = (c: Circulaire) =>
        c.couleurs
            .map((couleur) => TEINTES_PROCHES[couleur] ?? couleur)
            .sort()
            .join("-");
    const fromCirculaires = circulaires.map((circ, i) => ({
        id: `img-circulaire-${i}`,
        theme: IMAGES_THEME,
        question: atAmiens("À quelle filière correspond ce circulaire ?", circ.amiens),
        circulaire: { matiere: circ.matiere, couleurs: circ.couleurs },
        answers: [
            circ.filiere,
            // Une filière par couleur : les quatre réponses ont toutes des couleurs différentes
            ...[
                ...new Map(
                    shuffle(circulaires.filter((other) => colorKey(other) !== colorKey(circ))).map(
                        (other) => [colorKey(other), other.filiere]
                    )
                ).values(),
            ].slice(0, 3),
        ],
        explanation: describe(circ),
        source: circ.source,
    }));

    return [...fromInsignes, ...fromEmblemes, ...fromCirculaires];
}
