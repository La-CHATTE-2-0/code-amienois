export { aperals_list, };

export type Aperal = {
    city: string;
    description?: string;
    frequency?: string;
    places: Array<Place>;
    contactUrl?: string;
    color?: AperalColor;
};

export type Place = {
    name?: string;
    address?: string;
    latlong?: Array<number>;
};

export enum AperalColor {
    Red = "red",
    Green = "green",
    Orange = "orange"
}

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
        color: AperalColor.Red
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
        color: AperalColor.Red
    },
    {
        city: "Bayonne",
        frequency: "Faluche en voie d'extinction",
        places: [
            {
                name: "La Petrolette",
                latlong: [43.489218, -1.472879],
                address: "31 Rue des Cordeliers, 64100 Bayonne"
            },
        ],
        contactUrl: "https://www.facebook.com/groups/pau.amicale.falucharde",
        color: AperalColor.Orange
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
        color: AperalColor.Red
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
                latlong: [50.4058739, 1.5655229],
                address: "35 Rue d'Estienne d'Orves, 62600 Berck",
            },
        ],
        contactUrl: "https://www.instagram.com/fibula_1.0/",
        color: AperalColor.Orange
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
        city: "Compiègne",
        frequency: "Vendredi soir, apéral organisé de temps en temps",
        places: [
            {
                name: "GoodChill Bar",
                latlong: [49.4150559, 2.8202717],
                address: "29 Rue du Port À Bateaux, 60200 Compiègne",
            },
        ],
        contactUrl: "https://www.facebook.com/profile.php?id=61571768097067",
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
        contactUrl: "https://www.facebook.com/profile.php?id=100017608033235",
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
                latlong: [45.1862, 5.739074],
            },
            {
                name: "Le Subway",
                latlong: [45.186904, 5.7238498],
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
                latlong: [48.0048966, 0.1955588],
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
                latlong: [50.6312328, 3.0486311],
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
                latlong: [45.8341347, 1.2654762],
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
                latlong: [45.763298, 4.8289096],
                address: "1 rue de la Baleine, 69000 Lyon",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/198119940375417",
    },
    {
        city: "Marseille",
        frequency: "Hebdomadaire - tous les vendredis",
        description: "Voir sur le groupe marseillais pour les détails, le lieu peuvent changer régulièrement",
        places: [
            {
                name: "Joke'R",
                latlong: [43.2919194, 5.3845162],
                address: "16 Pl. Notre Dame du Mont, 13006 Marseille",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/38965434117",
    },
    {
        city: "Metz",
        frequency: "Hebdomadaire - tous les jeudis",
        description: "On effectue des changements de temps en temps, envoyez un message sur le groupe de la FLEM pour confirmation =) ",
        places: [
            {
                name: "Vivian's",
                latlong: [49.1170219, 6.1786805],
                address: "15 Place St Louis, 57000 Metz",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/1757349307863601",
    },
    {
        city: "Montpellier",
        frequency: "Hebdomadaire - tous les mardis",
        description: "Roulement entre différents bars (2 pour l'instant), voir la bannière du groupe AURJIE sur Facebook",
        places: [
            {
                name: "La Louve",
                latlong: [43.6231812, 3.8632718],
                address: "40 Av. Charles Flahault, 34090 Montpellier",
            },
            {
                name: "Les Six roses",
                latlong: [43.6183685, 3.8736131],
                address: "29 Rue du Faubourg Boutonnet, 34090 Montpellier",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/18764516150",
    },
    {
        city: "Nancy",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "Pub Mac Carthy",
                latlong: [48.692221, 6.1775311],
                address: "6 Rue Guerrier de Dumast, 54000 Nancy",
            },
        ],
        contactUrl: "https://www.facebook.com/groups/1757349307863601",
    },
    {
        city: "Nantes",
        frequency: "Hebdomadaire - tous les mercredis",
        places: [
            {
                name: "Le Cascabel",
                latlong: [47.21371, -1.5533302],
                address: "1 Rue Kervegan, 44000 Nantes"
            }
        ],
        contactUrl: "https://www.instagram.com/laf.i.n/"
    },
    {
        city: "Nice",
        frequency: "Suspendu",
        description: "Il n'y a plus d'apéral jusqu'à nouvel ordre. Se renseigner sur Faluche Niçoise ou auprès de Lancelot Chevalier.",
        places: [
            {
                latlong: [43.6959491, 7.271535]
            }
        ],
        contactUrl: "https://www.facebook.com/groups/763870610314656",
        color: AperalColor.Orange
    },
    {
        city: "Nîmes",
        frequency: "Hebdomadaire - tous les jeudis",
        description: "Se renseigner sur le groupe Facebook de la FAUNE.",
        places: [
            {
                name: "La Réserve",
                latlong: [43.8382348, 4.3629282],
                address: "17 boulevard Amiral Courbet, 30000 Nîmes"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/453006268108813"
    },
    {
        city: "Orléans",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "Le 222 St",
                latlong: [47.9002805, 1.9095013],
                address: "222 rue de Bourgogne, 45000 Orléans"
            }
        ],
        contactUrl: "https://www.instagram.com/falucheorleans"
    },
    {
        city: "Paris",
        frequency: "Hebdomadaire - tous les mardis",
        description: "Généralement before dans un restaurant. Contact ALF.",
        places: [
            {
                name: "Baker Street Pub",
                latlong: [48.8458302, 2.3539337],
                address: "9 rue des Boulangers, 75005 Paris"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/470992433002833"
    },
    {
        city: "Pau",
        frequency: "Occasionnel",
        description: "Apéral mercredi ou jeudi à partir de 19h. Prévenir avant arrivée car peu nombreux. Activité surtout déplacée vers Bayonne.",
        places: [
            {
                name: "Europub",
                latlong: [43.3043161, -0.4034021],
                address: "61 Rte de Bayonne, 64140 Billère"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/pau.amicale.falucharde/",
        color: AperalColor.Red
    },
    {
        city: "Perpignan",
        frequency: "Faluche morte, plus d'apéral prévus, voir le sur groupe Facebook",
        places: [
            {
                latlong: [42.6985304, 2.8953121],
            },
        ],
        contactUrl: "https://www.facebook.com/groups/205224672849302",
        color: AperalColor.Red
    },
    {
        city: "Poitiers",
        frequency: "Hebdomadaire - tous les mardis",
        description: "Apéral le mardi à 21h30. Pré-apéro à 18h30 sur le campus devant le RU Rabelais.",
        places: [
            {
                name: "Le Palais de la Bière",
                latlong: [46.572671, 0.3663749],
                address: "250 rue du Faubourg du Pont Neuf, 86000 Poitiers"
            }
        ],
        contactUrl: "https://www.facebook.com/profile.php?id=100003488736453"
    },
    {
        city: "Reims",
        frequency: "Hebdomadaire - tous les mardis",
        description: "Apéral le mardi à 20h30.",
        places: [
            {
                name: "Le Dropkick",
                latlong: [49.2496252, 4.0184101],
                address: "15 rue du Colonel Fabien, 51100 Reims"
            }
        ],
        contactUrl: "https://www.facebook.com/AFEReims"
    },
    {
        city: "Rennes",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "Aux Plaisirs Démodés",
                latlong: [48.1119283, -1.6755552],
                address: "37 rue Saint-Georges, Rennes"
            }
        ],
        contactUrl: "mailto:asso.afre@gmail.com"
    },
    {
        city: "Rouen",
        frequency: "Hebdomadaire - tous les mercredis",
        places: [
            {
                name: "L'Alchimie",
                latlong: [49.4424911, 1.097696],
                address: "1 bis Rue de l'Hôpital, 76000 Rouen"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/334261026623117"
    },
    {
        city: "Saint-Quentin",
        frequency: "Pas d'apéral régulier",
        description: "Prévenir si tu passes, sinon on ne sort pas",
        places: [
            {
                name: "Reload Gaming Bar",
                latlong: [49.8447867, 3.2908782],
                address: "33 bis Rue d'Isle, 02100 Saint-Quentin"
            }
        ],
        contactUrl: "https://www.instagram.com/faluche.saintquentin/",
        color: AperalColor.Orange
    },
    {
        city: "Saint-Étienne",
        frequency: "Hebdomadaire - tous les mercredis",
        description: "En été et hors pluie, au parc Joseph Sanguedolce (Puy Couriot).",
        places: [
            {
                name: "Le Soggy Bottom / La Guinguette",
                latlong: [45.4396857, 4.3858209],
                address: "9 rue de la Résistance, 42000 Saint-Étienne"
            }
        ],
    },
    {
        city: "Strasbourg",
        frequency: "Hebdomadaire - tous les mardis",
        places: [
            {
                name: "O'Brother",
                latlong: [48.5789146, 7.7397138],
                address: "6 Rue des Glacières, Strasbourg"
            },
        ],
        contactUrl: "https://www.instagram.com/rafal_strasbourg/"
    },
    {
        city: "Toulon",
        frequency: "Hebdomadaire - tous les jeudis",
        places: [
            {
                name: "B des cochons",
                latlong: [43.1228306, 5.9302975],
                address: "Pl. de l'Equerre, 83000 Toulon"
            },
        ],
        contactUrl: "https://www.facebook.com/groups/182397841790991"
    },
    {
        city: "Toulouse",
        frequency: "Hebdomadaire - tous les mardis",
        description: "Pré-apéral satin de 18h30 à 20h au Satch Club puis apéral au bar. Before médecine variable.",
        places: [
            {
                name: "O'Briens",
                latlong: [43.6037958, 1.4424772],
                address: "39 rue Léon Gambetta, 31000 Toulouse"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/111189992371"
    },
    {
        city: "Tours",
        frequency: "Hebdomadaire - tous les mercredis",
        description: "Se renseigner auprès des Turons au cas où.",
        places: [
            {
                name: "Caméléon",
                latlong:  [47.3949883, 0.6840238],
                address: "53 rue du Commerce, Tours"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/133398363414546"
    },
    {
        city: "Troyes",
        frequency: "Hebdomadaire - tous les mercredis (thème le 3e mercredi du mois)",
        places: [
            {
                name: "Chez Fernande",
                latlong: [48.2997635, 4.0792928],
                address: "39 rue de la Cité, 10000 Troyes"
            }
        ],
        contactUrl: "https://www.facebook.com/flute.troyes"
    },
    {
        city: "Valence",
        frequency: "Hebdomadaire - tous les jeudis",
        description: "En période de vacances universitaires, l'aperal est déplacé (souvent au Cham's, informations sur fb : Fada Valence)",
        places: [
            {
                name: "Le Partiel",
                latlong: [44.9333966, 4.9039245],
                address: "5 place Latour Maubourg, Valence"
            }
        ],
        contactUrl: "https://www.facebook.com/fada.valence"
    },
    {
        city: "Valenciennes",
        frequency: "Faluche en déclin, prévenir pour qu'il y des gens (anciennement Hebdomadaire - tous les mardis)",
        description: "Contactez L'Avache sur Facebook.",
        places: [
            {
                name: "Le Repère",
                latlong: [50.3575912, 3.523672],
                address: "2 Rue de la Halle, 59000 Valenciennes"
            }
        ],
        contactUrl: "https://www.facebook.com/groups/1089647231056849",
        color: AperalColor.Orange
    }
];
