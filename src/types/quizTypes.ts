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
    // L'image montre la réponse (« Quel insigne… ») : elle n'apparaît qu'une fois la question répondue
    imageRevealsAnswer?: boolean
    answers: string[]
    explanation?: string
    source: string
}

// Question prête à jouer : réponses mélangées
export type QuizRound = QuizQuestion & {
    choices: string[]
    correct: string
}
