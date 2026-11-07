export type QuizTheme = {
    id: string
    label: string
    description: string
    icon: string
}

export type QuizCirculaire = {
    matiere: string
    couleurs: string[]
}

// Dans le JSON, la première réponse est toujours la bonne (mélangée à l'affichage)
export type QuizQuestion = {
    id: string
    theme: string
    question: string
    image?: string
    // L'image montre la réponse (« Quel insigne… ») : elle n'apparaît qu'une fois la question répondue
    imageRevealsAnswer?: boolean
    // Mode images : insigne retourné ou posé sur un ruban, ou bande de circulaire dessinée en CSS
    // Nom de l'insigne ou de l'emblème, montré après la réponse pour qu'on le retienne
    imageName?: string
    imageRotate?: number
    imageRuban?: string
    circulaire?: QuizCirculaire
    answers: string[]
    explanation?: string
    source: string
}

// Question prête à jouer : réponses mélangées
export type QuizRound = QuizQuestion & {
    choices: string[]
    correct: string
}

// Partie terminée, gardée dans l'historique de l'appareil
export type QuizSession = {
    id: string
    startedAt: string
    endedAt: string
    // Id du thème ou du mode (« tout », « images », « survivor »)
    theme: string
    // Nombre de questions choisi : 10, 20, 30 ou 0 (toutes)
    count: number
    total: number
    correct: number
    wrong: number
    // Questions ratées, pour les rejouer (vide en mode images : ids non stables)
    missed: string[]
    // Partie lancée depuis « Rejouer mes erreurs »
    replay?: boolean
}
