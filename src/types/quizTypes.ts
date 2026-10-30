export type QuizTheme = {
    id: string
    label: string
    description: string
    icon: string
}

// Dans le JSON, la première réponse est toujours la bonne (mélangée à l'affichage)
export type QuizQuestion = {
    id: string
    theme: string
    question: string
    image?: string
    answers: string[]
    explanation?: string
    source: string
}

// Question prête à jouer : réponses mélangées
export type QuizRound = QuizQuestion & {
    choices: string[]
    correct: string
}
