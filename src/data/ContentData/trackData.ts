import ContentObject from '../../Types/ContentObject.types';

const defaultTrackData: ContentObject = {
    barber: {
        name: 'Barber Motorsports Park',
        free: false,
        owned: false,
    },

    barcelona: {
        name: 'Circuit de Barcelona-Catalunya',
        free: false,
        owned: false,
    },

    belleIsle: {
        name: 'Belle Isle',
        free: false,
        owned: false,
    },

    brandsHatch: {
        name: 'Brands Hatch Circuit',
        free: false,
        owned: false,
    },

    charlotte: {
        name: 'Charlotte Motor Speedway',
        free: true,
        owned: true,
    },

    charlotte2008: {
        name: '[Legacy] Charlotte Motor Speedway - 2008',
        free: true,
        owned: true,
    },

    cota: {
        name: 'Circuit of the Americas',
        free: false,
        owned: false,
    },

    daytona: {
        name: 'Daytona International Speedway',
        free: false,
        owned: false,
    },

    daytona2008: {
        name: '[Legacy] Daytona International Speedway - 2008',
        free: true,
        owned: true,
    },

    donington: {
        name: 'Donington Park Racing Circuit',
        free: false,
        owned: false,
    },

    homestead: {
        name: 'Homestead Miami Speedway',
        free: false,
        owned: false,
    },

    imola: {
        name: 'Autodromo Internazionale Enzo e Dino Ferrari',
        free: false,
        owned: false,
    },

    indyRoad: {
        name: 'Indianapolis Motor Speedway',
        free: false,
        owned: false,
    },

    interlagos: {
        name: 'Autódromo José Carlos Pace',
        free: false,
        owned: false,
    },

    lagunaSeca: {
        name: 'WeatherTech Raceway Laguna Seca',
        free: true,
        owned: true,
    },

    leMans: {
        name: 'Circuit des 24 Heures du Mans',
        free: false,
        owned: false,
    },

    limeRock: {
        name: 'Lime Rock Park',
        free: true,
        owned: true,
    },

    limeRock2008: {
        name: '[Legacy] Lime Rock Park - 2008',
        free: true,
        owned: true,
    },

    longBeach: {
        name: 'Long Beach Street Circuit',
        free: false,
        owned: false,
    },

    midOhio: {
        name: 'Mid-Ohio Sportscar Course',
        free: false,
        owned: false,
    },

    montreal: {
        name: 'Circuit Gilles-Villeneuve',
        free: false,
        owned: false,
    },

    mosport: {
        name: 'Canadian Tyre Motorsports Park',
        free: false,
        owned: false,
    },

    monza: {
        name: 'Autódromo Nazionale Monza',
        free: false,
        owned: false,
    },

    mountPanorama: {
        name: 'Mount Panorama Circuit',
        free: false,
        owned: false,
    },

    nurbGP: {
        name: 'Nürburgring Grand-Prix-Strecke',
        free: false,
        owned: false,
    },

    nurbNordschleife: {
        name: 'Nürburgring Nordschleife',
        free: false,
        owned: false,
    },

    nurb24: {
        name: 'Nürburgring Combined',
        free: true,
        owned: false,
    },

    okayama: {
        name: 'Okayama International Circuit',
        free: true,
        owned: true,
    },

    oranPark: {
        name: 'Oran Park Raceway',
        free: true,
        owned: true,
    },

    oultonPark: {
        name: 'Oulton Park Circuit',
        free: true,
        owned: true,
    },

    phillipIsland: {
        name: 'Phillip Island Circuit',
        free: false,
        owned: false,
    },

    roadAmerica: {
        name: 'Road America',
        free: false,
        owned: false,
    },

    roadAtlanta: {
        name: 'Road Atlanta',
        free: false,
        owned: false,
    },

    sebring: {
        name: 'Sebring International Raceway',
        free: false,
        owned: false,
    },

    silverstone: {
        name: 'Silverstone Circuit',
        free: false,
        owned: false,
    },

    silverstone2008: {
        name: '[Legacy] Silverstone Circuit - 2008',
        free: false,
        owned: false,
    },

    snetterton: {
        name: 'Snetterton Circuit',
        free: false,
        owned: false,
    },

    sonoma: {
        name: 'Sonoma Raceway',
        free: false,
        owned: false,
    },

    spa: {
        name: 'Circuit de Spa-Francorchamps',
        free: false,
        owned: false,
    },

    summitPoint: {
        name: 'Summit Point Raceway',
        free: true,
        owned: true,
    },

    suzuka: {
        name: 'Suzuka International Racing Course',
        free: false,
        owned: false,
    },

    tsukuba: {
        name: 'Tsukuba Circuit',
        free: true,
        owned: true,
    },

    twinRingMotegi: {
        name: 'Twin Ring Motegi',
        free: false,
        owned: false,
    },

    virginia: {
        name: 'Virginia International Raceway',
        free: false,
        owned: false,
    },

    watkinsGlen: {
        name: 'Watkins Glen International',
        free: false,
        owned: false,
    },

    zandvoort: {
        name: 'Circuit Park Zandvoort',
        free: false,
        owned: false,
    },

    zolder: {
        name: 'Circuit Zolder',
        free: false,
        owned: false,
    },

    phoenix2008: {
        name: '[Legacy] Phoenix Raceway - 2008',
        free: true,
        owned: true,
    },

    southernNational: {
        name: 'Southern National Motorsports Park',
        free: true,
        owned: true,
    },

    usaInternational: {
        name: 'USA International Speedway',
        free: true,
        owned: true,
    },

    iowa: {
        name: 'Iowa Speedway',
        free: false,
        owned: false,
    },

    michigan: {
        name: 'Michigan International Speedway',
        free: false,
        owned: false,
    },

    newHampshire: {
        name: 'New Hampshire Motor Speedway',
        free: false,
        owned: false,
    },

    phoenix: {
        name: 'Phoenix Raceway ',
        free: false,
        owned: false,
    },

    pocono: {
        name: 'Pocono Raceway',
        free: false,
        owned: false,
    },

    richmond: {
        name: 'Richmond Raceway',
        free: false,
        owned: false,
    },

    technologyRaceway: {
        name: 'World Wide Technology Raceway',
        free: false,
        owned: false,
    },
};

export default defaultTrackData;
