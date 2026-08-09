import { CheckListItem } from "../types/checklistTypes";

export const incontournable: Array<CheckListItem> = [
    {
        id: "tente",
        label: "⛺ Une tente",
        description: "Bien que certains congrès proposent des places en dur (Bungalows, dortoirs couverts, etc.), la plupart des congressistes campent sur les lieux du congrès. Une tente est alors nécessaire, ou du moins il faut s’assurer d’avoir une place dans la tente de quelqu’un d’autre.",
        checked: false
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
        id: "gonfleur",
        label: "🛏️ Un gonfleur",
        description: "S'il est électrique, pense à le charger avant...",
    },
    {
        id: "oreiller",
        label: "🛏️ Un oreiller",
        description: "En vrai c’est con, mais c’est vachement plus confortable !",
    },
    {
        id: "faluche",
        label: "🎓 Ta faluche (et sa sécu')",
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
        description: "Depuis quelques années, les orgas de congrès se veulent de plus en plus responsable vis-à-vis de l’environnement en bannissant les plastiques à usage unique. A prendre donc impérativement si tu veux manger (et tu vas en avoir besoin…).",
    },
    {
        id: "paiement",
        label: "💳 Moyen de paiement (CB + Liquide)",
        description: "Souvent, l'orga vends des pin's en fin de congrès. Et il faut aussi payer le McDo, l'autoroute, l'essence, ...",
    },
    {
        id: "portefeuille",
        label: "💳 Portefeuille",
        description: "Carte d'identité, permis de conduire même si tu n'es pas désigné conducteur, carte vitale",
    },
    {
        id: "serviette",
        label: "🪥 Nécessaire de toilette et serviette",
        description: "Car certains congrès mettent des douches à disposition. NB : Optionnel pour les sciences et autres gros satins.",
    },
];

export const fringues: Array<CheckListItem> = [
    {
        id: "pantalon",
        label: "👖 Pantalon/short/combar/salopette",
        description: "Certains préfèrent le style taillis Décathlon, d’autre pour la combar (Salopette colorée chérie de nombreux velours). Toujours est-il que le fait d’avoir un bon nombre de poches (dont certaines refermables) reste très pratique pour ne pas perdre tout son bordel (et ne pas avoir à le racheter par la suite…) ",
    },
    {
        id: "pulls",
        label: "👕 Au moins 2 pulls (froid)",
        description: "Il est très pratique de toujours garder un pull sec dans ta tente (en plus de celui que tu as sur le dos) pour la nuit ou pour remplacer un autre éventuellement trempé par la pluie. - Chaussures résistantes et auxquelles tu ne tiens pas trop : Les congrès sont de rudes épreuves pour nos chaussures entre le terrain de camping boueux en cas de pluie, le bar dont le sol est parfois couvert de substances douteuses ou encore les VT (Vomis Tactiques) par très bien visés. Il faut donc s’assurer d’être adéquatement chaussé avant de partir.",
    },
    {
        id: "bottes",
        label: "🥾 Bottes ou chaussures étanches (pluie)",
        description: "Indispensables pour garder les pieds au sec.",
    },
    {
        id: "tongs",
        label: "🩴 Tongs/Claquettes/Sandales",
        description: "Indispensables pour garder les pieds à l'air ou pour les piscines et douches (qui se lave ?). Et pour les concours de lancer de tongs (ne pas cibler les impet')",
    },
    {
        id: "manteau",
        label: "🧥 Manteau étanche, K-way, pantalon étanche (pluie)",
        description: "Tout pareil…",
    },
    {
        id: "vetements-rechange",
        label: "🔄 Vêtements de rechanges",
        description: "Sauf si l’hygiène n’est qu’un concept pour toi, c’est parfois aussi pratique pour changer un vêtement mouillé par la pluie ou… Toute autre chose",
    },
    {
        id: "kigurumi",
        label: " 👘 Kigurumi (très optionnel)",
        description: "Si tu as une âme d’enfant (comme Nico)",
    },
    {
        id: "gala",
        label: "🤵 Tenue de Gala (anniversaire)",
        description: "Oui il faut être classe au repas lors des anniversaire de la Faluche",
    },
];

export const pratique: Array<CheckListItem> = [
    {
        id: "chaise-camping",
        label: "🪑 Chaise de camping",
        description: "La journée du samedi est souvent composée de petits moments chill avec les autres congressistes sur le camping, histoire de reposer un peu ton pauvre organisme et de le chauffer doucement pour la dernière soirée. La chaise permet alors d’éviter d’avoir à poser son cul par terre",
    },
    {
        id: "batterie-chargeur",
        label: "🔋 Batterie portable et chargeur de téléphone",
        description: "Est-ce qu'on a vraiment besoin d'expliquer pourquoi ?",
    },
    {
        id: "monnaie",
        label: "💰 De la monnaie",
        description: "Des pin’s sont parfois vendus par l’asso organisatrice juste avant le départ du dimanche.",
    },
    {
        id: "ecocup",
        label: "🥤 Un écocup en rab",
        description: "Un écocup du congrès est donné dans le welcome pack mais si tu le perds, tu seras content de pouvoir continuer à boire avec celui qui est resté dans ta tente.",
    },
    {
        id: "maillot-serviette",
        label: "🩳 Maillot de bain et serviette",
        description: "Parce que certains congrès donnent l’accès à une piscine !!!!",
    },
    {
        id: "lunettes-creme-solaire",
        label: "🕶️ Lunettes de Soleil/crème solaire",
        description: "Si ta peau et tes yeux de picard crament au moindre petit rayon",
    },
    {
        id: "preservatifs",
        label: "🧦 Des préservatifs",
        description: "Là encore, pas besoin d’expliquer pourquoi… NB : Optionnel pour les sciences et les ingés",
    },
    {
        id: "lubrifiant",
        label: "💦 Lubrifiant",
        description: "Avec l'alcool, c'est pas du luxe",
    },
    {
        id: "sac-poubelle",
        label: "🗑️ Sac poubelle",
        description: "Parce que l’orga a autre chose à foutre que de nettoyer le terrain de camping",
    },
    {
        id: "bouteilles-eau",
        label: "🚰 Quelques bouteilles d'eau",
        description: "Promis, on ne dira rien au Grand Grelot mais sans déconner, ça peut te sauver.",
    },
    {
        id: "mouchoirs-pq",
        label: "🧻 Mouchoirs et/ou PQ et/ou lingettes",
        description: "Pour les demoiselles souhaitant faire un petit pipi-nature ou en cas de caca post-cuite intempestif.",
    },
    {
        id: "alcool-soft",
        label: "🍺 De l'alcool/du soft",
        description: "Le bar n’est pas toujours ouvert et nombreux sont les apéros entre congressistes où on partage la dive bouteille.",
    },
    {
        id: "bouffe",
        label: "🥫 De la bouffe",
        description: "Bien pratique si tu te retrouves avec une foncedalle de l’espace à 2 h du matin.",
    },
    {
        id: "pins",
        label: "💎 Des pin's",
        description: "Pour en échanger ou en faire racheter aux autres villes (et obtenir des pin’s un peu plus exotiques).",
    },
    {
        id: "secu",
        label: "📦 Des sécus de pin's",
        description: "Ce serait dommage de perdre ce que tu viens de racheter.",
    },
    {
        id: "cartes-des",
        label: "🎲 Cartes/dés",
        description: "Pour occuper le temps en dehors des soirées.",
    },
    {
        id: "survie",
        label: "❄️ Une couverture de survie",
        description: "Lorsque des secouristes sont présents sur le congrès, ils en proposent souvent. Sinon ça peut aider pour ne pas crever de froid.",
    },
    {
        id: "gaviscon",
        label: "💊 Gaviscon ou équivalent, Guronsan, Citrate de Bétaine",
        description: "Si t’as un estomac de fragile (je compatis…), pour te réveiller le matin, et gagner quelques PV",
    },
    {
        id: "couteau-suisse",
        label: "🔪 Couteau suisse avec tire-bouchon",
        description: "A utiliser en cas d'urgence apéro",
    },
    {
        id: "marqueur",
        label: "✏️ Marqueur",
        description: "Pour signer les impétrants",
    },
    {
        id: "ethylotest",
        label: "🧪 Éthylotest",
        description: "Pour attendre qu'il soit négatif avant de reprendre la route",
    },
    {
        id: "enceinte",
        label: "🎶 Enceinte",
        description: "Pour Pour s'ambiancer dès 8h le samedi matin",
    },
    {
        id: "1er-secours",
        label: "🚑 1er secours (désinfectant, pansements)",
    },
    {
        id: "tampons",
        label: "🩸 Tampons (si ta physiologie le demande)",
    },
    {
        id: "anti-moustique",
        label: "🦟 Anti-moustique",
    },
];

export const delires: Array<CheckListItem> = [
    {
        id: "cigarettes",
        label: "🚬 Cigarettes",
    },
    {
        id: "briquets",
        label: "🔥 Briquets",
    },
    {
        id: "proto",
        label: "🎈 Cracker, protos et ballons",
    },
    {
        id: "poppers",
        label: "🧪 Poppers",
    }
];
