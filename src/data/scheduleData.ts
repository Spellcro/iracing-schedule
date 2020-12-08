export type ScheduleObject = {
    [key: string]: SeriesDetails;
};
export type SeriesDetails = {
    seriesName: string;
    eligibleCars: string[];
    seriesSchedule: string[];
    licenceClass: string;
};

const fullSeasonSchedule: ScheduleObject = {
    globalmazda: {
        seriesName: 'Global Mazda MX-5 Cup',
        eligibleCars: ['mazdamx5'],
        seriesSchedule: [
            'tsukuba',
            'okayama',
            'limeRock',
            'summitPoint',
            'oultonPark',
            'charlotte',
            'oranPark',
            'okayama',
            'summitPoint',
            'oultonPark',
            'oranPark',
            'lagunaSeca',
        ],
        licenceClass: 'R',
    },
    simlabPCC: {
        seriesName: 'Sim-Lab Production Car Challenge',
        eligibleCars: ['mazdamx5', 'fordFR500', 'vwJetta', 'pontiacSolstice'],
        seriesSchedule: [
            'tsukuba',
            'freeOval',
            'roadAtlanta',
            'summitPoint',
            'oultonPark',
            'homestead',
            'daytona2008',
            'okayama',
            'brandsHatch',
            'homestead',
            'spa',
            'lagunaSeca',
        ],
        licenceClass: 'D',
    },
    formulaSprint: {
        seriesName: 'Pure Driving School Formula Sprint',
        eligibleCars: ['usf2000'],
        seriesSchedule: [
            'limeRock2008',
            'suzuka',
            'summitPoint',
            'freeOval',
            'lagunaSeca',
            'okayama',
            'tsukuba',
            'watkinsGlen',
            'longBeach',
            'spa',
            'freeOval',
            'oranPark',
        ],
        licenceClass: 'D',
    },
    bmw12: {
        seriesName: 'BMW 12.0 Challenge',
        eligibleCars: ['bmwm4gt4'],
        seriesSchedule: [
            'watkinsGlen',
            'limeRock',
            'oranPark',
            'okayama',
            'suzuka',
            'summitPoint',
            'longBeach',
            'spa',
            'daytona',
            'tsukuba',
            'brandsHatch',
            'lagunaSeca',
        ],
        licenceClass: 'D',
    },
    tcrChallenge: {
        seriesName: 'Turn Racing Touring Car Challenge',
        eligibleCars: ['audirs3lms'],
        seriesSchedule: [
            'longBeach',
            'suzuka',
            'okayama',
            'summitPoint',
            'tsukuba',
            'spa',
            'limeRock',
            'watkinsGlen',
            'charlotte',
            'lagunaSeca',
            'oranPark',
            'daytona',
        ],
        licenceClass: 'D',
    },
    ferrariChallenge: {
        seriesName: 'Ferrari GT3 Challenge',
        eligibleCars: ['ferrari488gt3'],
        seriesSchedule: [
            'oranPark',
            'limeRock',
            'suzuka',
            'watkinsGlen',
            'charlotte',
            'summitPoint',
            'daytona',
            'lagunaSeca',
            'tsukuba',
            'okayama',
            'longBeach',
            'spa',
        ],
        licenceClass: 'D',
    },
    skipbarber: {
        seriesName: 'Skip Barber Race Series',
        eligibleCars: ['skipbarber'],
        seriesSchedule: [
            'oultonPark',
            'sonoma',
            'suzuka',
            'watkinsGlen',
            'imola',
            'zolder',
            'charlotte',
            'interlagos',
            'mountPanorama',
            'mosport',
            'donington',
            'longBeach',
        ],
        licenceClass: 'D',
    },
    fr20: {
        seriesName: 'iRacing Formula Renault 2.0 Championship',
        eligibleCars: ['fr20'],
        seriesSchedule: [
            'roadAmerica',
            'barcelona',
            'nurbGP',
            'tsukuba',
            'zandvoort',
            'phillipIsland',
            'zolder',
            'donington',
            'brandsHatch',
            'monza',
            'watkinsGlen',
            'okayama',
        ],
        licenceClass: 'D',
    },
    rufgt3: {
        seriesName: 'Ruf GT3 Challenge',
        eligibleCars: ['rufrt12'],
        seriesSchedule: [
            'watkinsGlen',
            'summitPoint',
            'spa',
            'donington',
            'roadAmerica',
            'barcelona',
            'imola',
            'lagunaSeca',
            'sebring',
            'interlagos',
            'daytona',
            'okayama',
        ],
        licenceClass: 'D',
    },
    specRacerFord: {
        seriesName: 'iRacing Spec Racer Ford Challenge',
        eligibleCars: ['specRacerFord'],
        seriesSchedule: [
            'oranPark',
            'mountPanorama',
            'suzuka',
            'zandvoort',
            'limeRock',
            'roadAmerica',
            'charlotte',
            'monza',
            'imola',
            'montreal',
            'lagunaSeca',
            'sebring',
        ],
        licenceClass: 'D',
    },
    globalChallenge: {
        seriesName: 'Fanatec Global Challenge',
        eligibleCars: ['kiaOptima', 'cadillacCTSV'],
        seriesSchedule: [
            'limeRock',
            'mountPanorama',
            'roadAmerica',
            'oultonPark',
            'watkinsGlen',
            'leMans',
            'suzuka',
            'nurbNordschleife',
            'roadAtlanta',
            'mosport',
            'monza',
            'oranPark',
        ],
        licenceClass: 'D',
    },
    imsaMpc: {
        seriesName: 'IMSA Michelin Pilot Challenge',
        eligibleCars: ['audirs3lms', 'bmwm4gt4', 'porsche718gt4'],
        seriesSchedule: [
            'spa',
            'watkinsGlen',
            'mountPanorama',
            'oultonPark',
            'silverstone2008',
            'twinRingMotegi',
            'daytona',
            'okayama',
            'zolder',
            'interlagos',
            'sonoma',
            'nurbGP',
        ],
        licenceClass: 'C',
    },
    radicalChallenge: {
        seriesName: 'Radical Racing Challenge',
        eligibleCars: ['radical'],
        seriesSchedule: [
            'phillipIsland',
            'interlagos',
            'roadAmerica',
            'zandvoort',
            'montreal',
            'spa',
            'roadAtlanta',
            'oranPark',
            'silverstone2008',
            'belleIsle',
            'lagunaSeca',
            'nurbNordschleife',
        ],
        licenceClass: 'C',
    },
    kamel: {
        seriesName: 'Kamel GT Championship',
        eligibleCars: ['audi90gto', 'nissangtp'],
        seriesSchedule: [
            'leMans',
            'charlotte',
            'donington',
            'suzuka',
            'monza',
            'zolder',
            'sebring',
            'belleIsle',
            'barcelona',
            'phillipIsland',
            'mosport',
            'nurbNordschleife',
        ],
        licenceClass: 'C',
    },
    advancedmazda: {
        seriesName: 'Advanced Mazda MX-5 Cup Series',
        eligibleCars: ['mazdamx5'],
        seriesSchedule: [
            'spa',
            'leMans',
            'okayama',
            'sonoma',
            'nurbNordschleife',
            'interlagos',
            'donington',
            'brandsHatch',
            'nurbGP',
            'monza',
            'oultonPark',
            'watkinsGlen',
        ],
        licenceClass: 'C',
    },
    formula3temp: {
        seriesName: 'Apex Racing Academy F3 Championship',
        eligibleCars: ['dallaraf3'],
        seriesSchedule: [
            'lagunaSeca',
            'sebring',
            'nurbGP',
            'donington',
            'barcelona',
            'zolder',
            'belleIsle',
            'roadAmerica',
            'okayama',
            'interlagos',
            'roadAtlanta',
            'monza',
        ],
        licenceClass: 'C',
    },
    indypro: {
        seriesName: 'Indy Pro 2000 Championship',
        eligibleCars: ['indypro2000'],
        seriesSchedule: [
            'longBeach',
            'paidOval',
            'suzuka',
            'barber',
            'paidOval',
            'virginia',
            'sebring',
            'silverstone',
            'imola',
            'freeOval',
            'spa',
            'roadAtlanta',
        ],
        licenceClass: 'C',
    },
    v8supercars: {
        seriesName: 'Supercars Series',
        eligibleCars: ['fordmustanggt', 'holden2019'],
        seriesSchedule: [
            'mountPanorama',
            'belleIsle',
            'phillipIsland',
            'lagunaSeca',
            'interlagos',
            'roadAmerica',
            'monza',
            'zolder',
            'barber',
            'oranPark',
            'montreal',
            'sonoma',
        ],
        licenceClass: 'C',
    },
    porscheCup: {
        seriesName: 'Porsche iRacing Cup',
        eligibleCars: ['porsche911cup'],
        seriesSchedule: [
            'imola',
            'summitPoint',
            'watkinsGlen',
            'virginia',
            'leMans',
            'snetterton',
            'longBeach',
            'nurbGP',
            'sonoma',
            'roadAtlanta',
            'montreal',
            'suzuka',
        ],
        licenceClass: 'C',
    },
    gtChallenge: {
        seriesName: 'Heusinkveld GT Challenge',
        eligibleCars: ['fordgt', 'astonDbr9', 'corvettec6r'],
        seriesSchedule: [
            'nurb24',
            'watkinsGlen',
            'brandsHatch',
            'silverstone2008',
            'sebring',
            'daytona2008',
            'spa',
            'belleIsle',
            'longBeach',
            'oultonPark',
            'monza',
            'lagunaSeca',
        ],
        licenceClass: 'C',
    },
    gpLegends: {
        seriesName: 'Grand Prix Legends',
        eligibleCars: ['lotus49'],
        seriesSchedule: [
            'monza',
            'summitPoint',
            'oultonPark',
            'zandvoort',
            'phillipIsland',
            'spa',
            'sonoma',
            'silverstone2008',
            'okayama',
            'watkinsGlen',
            'sebring',
            'roadAmerica',
        ],
        licenceClass: 'C',
    },

    vrsEndurance: {
        seriesName: 'VRS GT Endurance Series',
        eligibleCars: [
            'audir8lms',
            'bmwz4gt3',
            'ferrari488gt3',
            'fordgt',
            'mclarenmp412c',
            'amggt3',
        ],
        seriesSchedule: [
            'spa',
            'nurb24',
            'donington',
            'roadAmerica',
            'belleIsle',
            'oranPark',
            'imola',
            'lagunaSeca',
            'oultonPark',
            'sebring',
            'phillipIsland',
            'suzuka',
        ],
        licenceClass: 'C',
    },
    formulaiR: {
        seriesName: 'Dallara Formula iR',
        eligibleCars: ['dallarair01'],
        seriesSchedule: [
            'suzuka',
            'silverstone',
            'nurbGP',
            'barcelona',
            'phillipIsland',
            'longBeach',
            'watkinsGlen',
            'roadAtlanta',
            'monza',
            'spa',
            'roadAmerica',
            'interlagos',
        ],
        licenceClass: 'C',
    },
    indycar: {
        seriesName: 'Verizon INDYCAR Series',
        eligibleCars: ['dallarair18'],
        seriesSchedule: [
            'roadAmerica',
            'paidOval',
            'spa',
            'homestead',
            'sebring',
            'paidOval',
            'mountPanorama',
            'paidOval',
            'watkinsGlen',
            'paidOval',
            'midOhio',
            'paidOval',
        ],
        licenceClass: 'B',
    },
    imsa: {
        seriesName: 'IMSA Sportscar Championship',
        eligibleCars: [
            'audir8lms',
            'amggt3',
            'bmwm8gte',
            'corvettec8r',
            'ferrari488gte',
            'porschersr',
            'dallarap217',
        ],
        seriesSchedule: [
            'watkinsGlen',
            'twinRingMotegi',
            'imola',
            'leMans',
            'silverstone',
            'daytona',
            'suzuka',
            'interlagos',
            'monza',
            'roadAmerica',
            'spa',
            'sebring',
        ],
        licenceClass: 'C',
    },
    vrsSprint: {
        seriesName: 'VRS GT Sprint Series',
        eligibleCars: [
            'audir8lms',
            'bmwz4gt3',
            'ferrari488gt3',
            'fordgt',
            'mclarenmp412c',
            'amggt3',
        ],
        seriesSchedule: [
            'spa',
            'nurb24',
            'donington',
            'roadAmerica',
            'belleIsle',
            'oranPark',
            'imola',
            'lagunaSeca',
            'oultonPark',
            'sebring',
            'phillipIsland',
            'suzuka',
        ],
        licenceClass: 'B',
    },

    gtEndurance: {
        seriesName: 'GTE Endurance Series',
        eligibleCars: ['bmwm8gte', 'corvettec8r', 'ferrari488gte', 'fordgte', 'porschersr'],
        seriesSchedule: [
            'sebring',
            'none',
            'watkinsGlen',
            'none',
            'daytona',
            'none',
            'nurb24',
            'none',
            'montreal',
            'none',
            'monza',
            'none',
        ],
        licenceClass: 'B',
    },

    classicLotusGP: {
        seriesName: 'iRacing Classic Lotus Grand Prix',
        eligibleCars: ['lotus79'],
        seriesSchedule: [
            'silverstone2008',
            'longBeach',
            'suzuka',
            'phillipIsland',
            'oultonPark',
            'nurbNordschleife',
            'donington',
            'mountPanorama',
            'barber',
            'watkinsGlen',
            'zolder',
            'roadAtlanta',
        ],
        licenceClass: 'B',
    },

    fr35: {
        seriesName: 'iRacing Formula 3.5 Championship',
        eligibleCars: ['fr35'],
        seriesSchedule: [
            'suzuka',
            'watkinsGlen',
            'cota',
            'roadAmerica',
            'zandvoort',
            'silverstone',
            'montreal',
            'spa',
            'barcelona',
            'imola',
            'monza',
            'interlagos',
        ],
        licenceClass: 'B',
    },

    iLMS: {
        seriesName: 'iRacing Le Mans Series',
        eligibleCars: [
            'corvettec8r',
            'ferrari488gte',
            'fordgte',
            'porschersr',
            'dallarap217',
            'audir18',
            'porsche919',
        ],
        seriesSchedule: [
            'sebring',
            'imola',
            'watkinsGlen',
            'roadAtlanta',
            'daytona',
            'nurbGP',
            'nurb24',
            'silverstone',
            'montreal',
            'twinRingMotegi',
            'monza',
            'leMans',
        ],
        licenceClass: 'A',
    },

    iELMS: {
        seriesName: 'iRacing Endurance Le Mans Series',
        eligibleCars: [
            'corvettec8r',
            'ferrari488gte',
            'fordgte',
            'porschersr',
            'dallarap217',
            'audir18',
            'porsche919',
        ],
        seriesSchedule: [
            'none',
            'imola',
            'none',
            'roadAtlanta',
            'none',
            'nurbGP',
            'none',
            'silverstone',
            'none',
            'twinRingMotegi',
            'none',
            'leMans',
        ],
        licenceClass: 'A',
    },

    formula1: {
        seriesName: 'iRacing Grand Prix Series',
        eligibleCars: ['mclarenmp430'],
        seriesSchedule: [
            'barcelona',
            'twinRingMotegi',
            'imola',
            'silverstone',
            'montreal',
            'nurbGP',
            'spa',
            'monza',
            'zandvoort',
            'suzuka',
            'longBeach',
            'interlagos',
        ],
        licenceClass: 'A',
    },
};

export default fullSeasonSchedule;
