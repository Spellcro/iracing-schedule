// Import Types
import ScheduleObject from '../Types/ScheduleObject.types';

const fullSeasonSchedule: ScheduleObject = {
  globalmazda: {
    name: 'Global Mazda MX-5 Cup',
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
      'lagunaSeca'
    ],
    licenceClass: 'R'
  },

  bmw12: {
    name: 'BMW 12.0 Challenge',
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
      'lagunaSeca'
    ],
    licenceClass: 'D'
  },

  globalChallenge: {
    name: 'Fanatec Global Challenge',
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
      'oranPark'
    ],
    licenceClass: 'D'
  },

  ferrariChallenge: {
    name: 'Ferrari GT3 Challenge',
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
      'spa'
    ],
    licenceClass: 'D'
  },

  fr20: {
    name: 'iRacing Formula Renault 2.0 Championship',
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
      'okayama'
    ],
    licenceClass: 'D'
  },

  specRacerFord: {
    name: 'iRacing Spec Racer Ford Challenge',
    eligibleCars: ['specRacerFord'],
    seriesSchedule: [
      'oranPark',
      'mountPanorama',
      'suzuka',
      'longBeach',
      'limeRock',
      'roadAmerica',
      'charlotte',
      'monza',
      'imola',
      'montreal',
      'lagunaSeca',
      'sebring'
    ],
    licenceClass: 'D'
  },

  formulaSprint: {
    name: 'Pure Driving School Formula Sprint',
    eligibleCars: ['usf2000'],
    seriesSchedule: [
      'limeRock',
      'suzuka',
      'summitPoint',
      'usaInternational',
      'lagunaSeca',
      'okayama',
      'tsukuba',
      'watkinsGlen',
      'longBeach',
      'spa',
      'southernNational',
      'oranPark'
    ],
    licenceClass: 'D'
  },

  rufgt3: {
    name: 'Ruf GT3 Challenge',
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
      'okayama'
    ],
    licenceClass: 'D'
  },

  simlabPCC: {
    name: 'Sim-Lab Production Car Challenge',
    eligibleCars: ['mazdamx5', 'fordFR500', 'vwJetta', 'pontiacSolstice'],
    seriesSchedule: [
      'tsukuba',
      'phoenix2008',
      'roadAtlanta',
      'summitPoint',
      'oultonPark',
      'homestead',
      'daytona2008',
      'okayama',
      'brandsHatch',
      'homestead',
      'spa',
      'lagunaSeca'
    ],
    licenceClass: 'D'
  },

  skipbarber: {
    name: 'Skip Barber Race Series',
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
      'longBeach'
    ],
    licenceClass: 'D'
  },

  tcrChallenge: {
    name: 'Turn Racing Touring Car Challenge',
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
      'daytona'
    ],
    licenceClass: 'D'
  },

  advancedmazda: {
    name: 'Advanced Mazda MX-5 Cup Series',
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
      'watkinsGlen'
    ],
    licenceClass: 'C'
  },

  formula3: {
    name: 'Apex Racing Academy F3 Championship',
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
      'monza'
    ],
    licenceClass: 'C'
  },

  formulaiR: {
    name: 'Dallara Formula iR',
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
      'interlagos'
    ],
    licenceClass: 'C'
  },

  gpLegends: {
    name: 'Grand Prix Legends',
    eligibleCars: ['lotus49'],
    seriesSchedule: [
      'monza',
      'summitPoint',
      'oultonPark',
      'zandvoort',
      'phillipIsland',
      'spa',
      'longBeach',
      'silverstone2008',
      'okayama',
      'watkinsGlen',
      'sebring',
      'roadAmerica'
    ],
    licenceClass: 'C'
  },

  gtChallenge: {
    name: 'Heusinkveld GT Challenge',
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
      'lagunaSeca'
    ],
    licenceClass: 'C'
  },

  imsaMpc: {
    name: 'IMSA Michelin Pilot Challenge',
    eligibleCars: ['audirs3lms', 'bmwm4gt4', 'porsche718gt4'],
    seriesSchedule: [
      'spa',
      'watkinsGlen',
      'longBeach',
      'oultonPark',
      'silverstone2008',
      'twinRingMotegi',
      'daytona',
      'okayama',
      'zolder',
      'interlagos',
      'sonoma',
      'mountPanorama'
    ],
    licenceClass: 'C'
  },

  indypro: {
    name: 'Indy Pro 2000 Championship',
    eligibleCars: ['indypro2000'],
    seriesSchedule: [
      'longBeach',
      'newHampshire',
      'suzuka',
      'barber',
      'phoenix',
      'virginia',
      'sebring',
      'silverstone',
      'imola',
      'usaInternational',
      'spa',
      'roadAtlanta'
    ],
    licenceClass: 'C'
  },

  kamel: {
    name: 'Kamel GT Championship',
    eligibleCars: ['audi90gto', 'nissangtp'],
    seriesSchedule: [
      'leMans',
      'longBeach',
      'donington',
      'suzuka',
      'monza',
      'zolder',
      'sebring',
      'belleIsle',
      'barcelona',
      'phillipIsland',
      'mosport',
      'nurbNordschleife'
    ],
    licenceClass: 'C'
  },

  porscheCup: {
    name: 'Porsche iRacing Cup',
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
      'suzuka'
    ],
    licenceClass: 'C'
  },

  radicalChallenge: {
    name: 'Radical Racing Challenge',
    eligibleCars: ['radical'],
    seriesSchedule: [
      'silverstone2008',
      'spa',
      'interlagos',
      'phillipIsland',
      'lagunaSeca',
      'zandvoort',
      'roadAmerica',
      'montreal',
      'sebring',
      'mountPanorama',
      'zolder',
      'nurbNordschleife'
    ],
    licenceClass: 'C'
  },

  v8supercars: {
    name: 'Supercars Series',
    eligibleCars: ['fordmustanggt', 'holden2019'],
    seriesSchedule: [
      'mountPanorama',
      'belleIsle',
      'phillipIsland',
      'lagunaSeca',
      'interlagos',
      'roadAmerica',
      'monza',
      'longBeach',
      'barber',
      'oranPark',
      'montreal',
      'sonoma'
    ],
    licenceClass: 'C'
  },

  vrsEndurance: {
    name: 'VRS GT Endurance Series',
    eligibleCars: [
      'audir8lms',
      'bmwm4gt3',
      'ferrari488gt3',
      'fordgt',
      'lamboHuracanGt3',
      'mclarenmp412c',
      'amggt3'
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
      'suzuka'
    ],
    licenceClass: 'C'
  },

  classicLotusGP: {
    name: 'iRacing Classic Lotus Grand Prix',
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
      'roadAtlanta'
    ],
    licenceClass: 'B'
  },

  gtEndurance: {
    name: 'GTE Endurance Series',
    eligibleCars: [
      'bmwm8gte',
      'corvettec8r',
      'ferrari488gte',
      'fordgte',
      'porschersr'
    ],
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
      'none'
    ],
    licenceClass: 'B'
  },

  imsa: {
    name: 'IMSA Sportscar Championship',
    eligibleCars: [
      'bmwm4gt3',
      'lamboHuracanGt3',
      'bmwm8gte',
      'corvettec8r',
      'ferrari488gte',
      'porschersr',
      'dallarap217'
    ],
    seriesSchedule: [
      'watkinsGlen',
      'twinRingMotegi',
      'longBeach',
      'leMans',
      'silverstone',
      'daytona',
      'suzuka',
      'interlagos',
      'monza',
      'roadAmerica',
      'spa',
      'sebring'
    ],
    licenceClass: 'C'
  },

  indycar: {
    name: 'Verizon INDYCAR Series',
    eligibleCars: ['dallarair18'],
    seriesSchedule: [
      'roadAmerica',
      'michigan',
      'spa',
      'homestead',
      'longBeach',
      'technologyRaceway',
      'mountPanorama',
      'iowa',
      'watkinsGlen',
      'richmond',
      'sebring',
      'pocono'
    ],
    licenceClass: 'B'
  },

  fr35: {
    name: 'iRacing Formula 3.5 Championship',
    eligibleCars: ['fr35'],
    seriesSchedule: [
      'suzuka',
      'watkinsGlen',
      'cota',
      'roadAmerica',
      'longBeach',
      'silverstone',
      'montreal',
      'spa',
      'barcelona',
      'imola',
      'monza',
      'interlagos'
    ],
    licenceClass: 'B'
  },

  vrsSprint: {
    name: 'VRS GT Sprint Series',
    eligibleCars: [
      'audir8lms',
      'bmwm4gt3',
      'ferrari488gt3',
      'fordgt',
      'lamboHuracanGt3',
      'mclarenmp412c',
      'amggt3'
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
      'suzuka'
    ],
    licenceClass: 'B'
  },

  iELMS: {
    name: 'European Endurance Series',
    eligibleCars: [
      'corvettec8r',
      'ferrari488gte',
      'fordgte',
      'porschersr',
      'dallarap217',
      'audir18',
      'porsche919'
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
      'leMans'
    ],
    licenceClass: 'A'
  },

  iLMS: {
    name: 'European Sprint Series',
    eligibleCars: [
      'corvettec8r',
      'ferrari488gte',
      'fordgte',
      'porschersr',
      'dallarap217',
      'audir18',
      'porsche919'
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
      'leMans'
    ],
    licenceClass: 'A'
  },

  formula1: {
    name: 'iRacing Grand Prix Series',
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
      'interlagos'
    ],
    licenceClass: 'A'
  }
};

export default fullSeasonSchedule;
