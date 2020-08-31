// Needs to be changed at the start of every season.
// For StartOfSeasonInUTC, the constructor is of the form
// Date.UTC(YEAR, MONTH, DAY),  where month is zero-indexed.

export const seasonLength = 13;

const CreateWeekBeginnings = (StartOfSeasonInUTC: Date, WeeksInSeason: number): number[] => {
    let StartOfSeasonInMS = StartOfSeasonInUTC.getTime();
    const MillisecondsInAWeek = 604800000;
    let WeekBeginnings = [StartOfSeasonInMS];
    for (let i = 1; i < WeeksInSeason; i++) {
        WeekBeginnings[i] = StartOfSeasonInMS + i * MillisecondsInAWeek;
    }
    return WeekBeginnings;
};

const GetCurrentWeek = () => {
    const StartOfSeasonInUTC = new Date(Date.UTC(2020, 5, 9));
    let WeekBeginnings = CreateWeekBeginnings(StartOfSeasonInUTC, seasonLength);
    const currentTime = Date.now();
    let CurrentWeek = 1;
    for (let i = 1; i <= WeekBeginnings.length; i++) {
        if (currentTime < WeekBeginnings[i]) {
            CurrentWeek = i;
            break;
        }
    }
    return CurrentWeek;
};

export default GetCurrentWeek;
