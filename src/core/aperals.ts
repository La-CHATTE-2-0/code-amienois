export { aperals_list };

type Aperal = {
    city: string;
    description?: string;
    frequency?: string;
    places: Array<Place>;
    contactUrl?: string;
};

type Place = {
    name?: string;
    address?: string;
    latlong?: Array<number>;
};

//Todo: Annecy, Chambery, La Rochelle
const aperals_list: Array<Aperal> = [
    {
        city: "Aix-en-Provence",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "Pub The Kerry",
                latlong: [43.528445, 5.443824],
                address: "13 Cours Sextius, 13100 Aix-en-Provence",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/1410729269188166",
    },
    {
        city: "Albi",
        frequency:
            "Faluche morte, plus d'apéral prévus, voir le sur groupe Facebook",
        places: [
            {
                latlong: [43.925083, 2.148641],
            },
        ],
        contactUrl: "https://www.facebook.com/groups/1572688469722939/",
    },
    {
        city: "Amiens",
        frequency: "Mensuel - premier mercredi du mois",
        description: "Evênement sur Facebook et les réseaux de la Chatte 2.0",
        places: [
            {
                name: "English Pub",
                latlong: [49.895102, 2.307152],
                address: "18 Port d'Amont, 80000 Amiens",
            },
        ],
        contactUrl: "https://linktr.ee/lachatte2.0",
    },
    {
        city: "Angers",
        frequency: "Hebdomadaire - tous les lundis",
        description:
            "Before possible, se renseigner avant sur le groupe de l'Arena",
        places: [
            {
                name: "Le Gainzbar",
                latlong: [47.47302, -0.551182],
                address: "19 Rue Poëliers, 49100 Angers",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/320393691386234",
    },
    {
        city: "Avignon",
        frequency: "Faluche morte, plus d'apéral prévus",
        places: [
            {
                latlong: [43.948244, 4.81011],
            },
        ],
    },
    {
        city: "Bayonne",
        frequency: "Faluche morte, faut aller à Pau",
        places: [
            {
                latlong: [43.489218, -1.472879],
            },
        ],
        contactUrl: "https://www.facebook.com/groups/pau.amicale.falucharde",
    },
    {
        city: "Belfort",
        frequency: "Hebdomadaire - tous les mardis",
        description:
            "Pendant les vacances, en fonction des étudiants présents.",
        places: [
            {
                name: "L'ABC",
                latlong: [47.6350471, 6.8534488],
                address: "72 Faubourg de France, 90000 Belfort",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/320393691386234",
    },
    {
        city: "Besançon",
        frequency: "Hebdomadaire - tous les jeudis",
        places: [
            {
                name: "K'fé",
                latlong: [47.239714, 6.016955],
                address: "18 Pl. Marulaz, 25000 Besançon",
            },
        ],
        contactUrl: "https://www.facebook.com/vpcom.afib",
    },
    {
        city: "Bordeaux",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "Le Peaky Pub",
                latlong: [44.8404, -0.5805],
                address: "160 Cr Victor Hugo, 33000 Bordeaux",
            },
        ],
        contactUrl: "https://linktr.ee/BAFBordeaux",
    },
    {
        city: "Bourg-en-Bresse",
        frequency: "Mensuel - premier jeudi du mois",
        places: [
            {
                name: "Hopper",
                latlong: [46.21186065673828, 5.227509021759033],
                address: "3 Avenue Maginot, 01000 Bourg-en-Bresse, France",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/392342348308997/",
    },
    {
        city: "Bourges",
        frequency: "Faluche morte, plus d'apéral prévus",
        places: [
            {
                latlong: [47.081012, 2.398782],
            },
        ],
    },
    {
        city: "Brest",
        frequency: "Hebdomadaire - tous les mercredis",
        places: [
            {
                name: "Le 54 Café",
                latlong: [48.3968114, -4.4837416],
                address: "54 Rue de Glasgow, 29200 Brest",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/126245945472",
    },
        {
        city: "Berck",
        frequency: "Non régulier, se renseigner sur le Instagram",
        places: [
            {
                name: "Green Corner",
                latlong: [50.40587390, 1.56552290],
                address: "35 Rue d'Estienne d'Orves, 62600 Berck",
            },
        ],
        contactUrl: "https://www.instagram.com/fibula_1.0/",
    },
    {
        city: "Caen",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "Le Broc",
                latlong: [49.1820563, -0.3675495],
                address: "18 Rue Écuyère, 14000 Caen, France",
            },
        ],
        contactUrl: "https://www.facebook.com/profile.php?id=100018427925024",
    },
    {
        city: "Clermont-Ferrand",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "3 Monkeys Pub",
                latlong: [45.774183, 3.093528],
                address: "18 Rue Écuyère, 14000 Caen, France",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/367694099988174",
    },
    {
        city: "Créteil",
        frequency: "Mensuel - premier lundi du mois",
        places: [
            {
                name: "Soulcat",
                latlong: [48.8198909, 2.4753022],
                address: "2 allée Raymond Nègre, 94340 Joinville-le-Pont",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/367694099988174",
    },
    {
        city: "Dijon",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "KONG",
                latlong: [47.3236375, 5.0442138],
                address: "8 rue Auguste Comte, 21000 Dijon",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/106759612790305",
    },
        {
        city: "Grenoble",
        frequency: "Hebdomadaire - tous les mercredis",
        description: "Apéro en plein air, chacun ramène à boire et à manger pour soi-même ou pour plusieurs si il veut partager. En cas de pluie : sous le préau de l'autre côté du palais des sports (à 300m). Remarque : L'aperal se fait au bar \"Le Subway\" pendant la trêve hivernal (jusque fin Mars). Si nécessaire vous pouvez demander sur \"Faluche Grenoble\".",
        places: [
            {
                name: "Dans un parc",
                latlong: [45.186200, 5.739074],
            },
            {
                name: "Le Subway",
                latlong: [45.18690400, 5.72384980],
                address: "2 Rue Lakanalle, 38000 Grenoble",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/351340885674609",
    },
    {
        city: "Le Mans",
        frequency: "Hebdomadaire - tous les mercredis",
        places: [
            {
                name: "Au guet à pintes",
                latlong: [48.00489660, 0.19555880],
                address: "14 Rue du Cornet, 72100 Le Mans",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/2314635055464793",
    },
    {
        city: "Lille",
        frequency: "Hebdomadaire - tous les jeudis",
        places: [
            {
                name: "Le PB",
                latlong: [50.63123280, 3.04863110],
                address: "238 rue Nationale, 59000 Lille",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/39472352014",
    },
        {
        city: "Limoges",
        frequency: "Hebdomadaire - tous les mercredis",
        places: [
            {
                name: "Lord John",
                latlong: [45.83413470, 1.26547620],
                address: "19 avenue du général de Gaulle, Limoges",
            },
        ]
    },
    {
        city: "Lyon",
        frequency: "Hebdomadaire - tous les mardis",
        description: "Peut changer de lieu en fonction des événements, ce renseigner sur le groupe Facebook.",
        places: [
            {
                name: "Black Hole",
                latlong: [45.76329800, 4.82890960],
                address: "1 rue de la Baleine, 69000 Lyon",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/198119940375417",
    },

];
