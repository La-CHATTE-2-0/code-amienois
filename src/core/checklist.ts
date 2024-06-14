export type CheckListItem = {
    id: string
    label: string,
    description: string
}

export const incontournable: Array<CheckListItem> = [
    {
        id: "tente",
        label: "⛺ Une tente",
        description: "Bien que certains congrès proposent des places en dur (Bungalows, dortoirs couverts, etc.), la plupart des congressistes campent sur les lieux du congrès. Une tente est alors nécessaire, ou du moins il faut s’assurer d’avoir une place dans la tente de quelqu’un d’autre.",
    },
    {
        id: "couverture",
        label: "🛏️ Couverture/duvet",
        description: "Les nuits de congrès sont parfois froides (Cf. la dernière pommo où il a fait -2°C la deuxième nuit). Toujours se renseigner sur la météo du weekend afin de prendre l’équipement le plus adéquat et ne pas se retrouver à se cailler le cul à 3 grammes… N’hésitez pas à prendre plusieurs épaisseurs pour les congrès les plus froids !",
    },
    {
        id: "matelas",
        label: "🛏️ Un tapis ou couverture de sol ou matelas gonflable",
        description: "Il est indispensable d’avoir une couche de protection en le sol et ton petit corps meurtri par l’alcool. Les plus casaniers choisiront un matelas gonflable (penser à prendre un gonfleur sinon il faudra voir avec les congressistes qui en auront sur place). Mais la simple couverture de sol peut vous faire gagner quelques degrés.",
    },
    {
        id: "oreiller",
        label: "🛏️ Un oreiller",
        description: "En vrai c’est con, mais c’est vachement plus confortable !",
    },
    {
        id: "faluche",
        label: "🎓 Ta faluche",
        description: "Pas besoin d’expliquer pourquoi…",
    },
    {
        id: "lampe",
        label: "🔦 Une lampe de poche/frontale",
        description: "Le camping n’est pas éclairé et c’est très pratique pour retrouver sa tente, ne pas se bouffer celles des autres dans la tronche ou pratiquer toute autre activité nécessitant de la lumière. (Commentaire de Nico : La lampe frontale est vraiment incroyable en congrès, tu la cale sur ton circulaire et tu as deux mains libres !). Le flash du téléphone peut certes faire l’affaire mais il n’est pas recommandé de se balader avec son téléphone en congrès.",
    },
    {
        id: "couverts",
        label: "🍴 Un plat en plastique et des couverts",
        description: "",
    },
    {
        id: "paiement",
        label: "💳 Moyen de paiement",
        description: "Depuis quelques années, les orgas de congrès se veulent de plus en plus responsable vis-à-vis de l’environnement en bannissant les plastiques à usage unique. A prendre donc impérativement si tu veux manger (et tu vas en avoir besoin…).",
    },
    {
        id: "serviette",
        label: "🪥 Nécessaire de toilette et serviette",
        description: "Car certains congrès mettent des douches à disposition. NB : Optionnel pour les sciences et autres gros satins.",
    },
    {
        id: "",
        label: "",
        description: "",
    },
];