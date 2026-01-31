export { aperals_list }; 

type Aperal = {
    city: string
    description?: string
    places: Array<Place>
    contactUrl? : string | null
}

type Place = {
    name:  string
    address: string
    latlong: any
}

const aperals_list: Array<Aperal> = [
    {
        city : "Amiens",
        description : "Premier mercredi du mois, event sur Facebook et les réseaux de la Chatte 2.0",
        places : [
            {
                name : "English Pub",
                latlong: [49.895102, 2.307152],
                address : "18 Port d'Amont, 80000 Amiens"
            }
        ],
        contactUrl: "https://linktr.ee/lachatte2.0"
    },
];