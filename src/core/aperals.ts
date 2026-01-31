export { aperals_list }; 

type Aperal = {
    city: string
    address: string
    latlong: any
    contactUrl? : string | null
}

const aperals_list: Array<Aperal> = [
    
    /*{
        city : "",
        address : "",
        latlong : null,
        contactUrl: ""
    },
    */
    {
        city : "Amiens",
        address : "18 Port d'Amont, 80000 Amiens",
        latlong: [49.895102, 2.307152],
        contactUrl: "https://linktr.ee/lachatte2.0"
    },
];