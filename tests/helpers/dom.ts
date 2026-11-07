// Les dialogues Vuetify sont téléportés dans <body> : on les lit directement dans le document
export const body = () => document.body.textContent ?? "";

export const buttons = (label: string) =>
    [...document.querySelectorAll<HTMLButtonElement>("button")].filter((b) =>
        b.textContent?.includes(label)
    );
