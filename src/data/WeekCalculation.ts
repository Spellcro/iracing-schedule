// Needs to be changed at the start of every season.

export const seasonLength = 12;

const CreateWeekBeginnings = (
  StartOfSeasonInUTC: Date,
  WeeksInSeason: number
): number[] => {
  const StartOfSeasonInMS = StartOfSeasonInUTC.getTime();
  const millisecondsInAWeek = 604800000;
  let WeekBeginnings = [StartOfSeasonInMS];
  for (let i = 1; i <= WeeksInSeason; i++) {
    WeekBeginnings[i] = StartOfSeasonInMS + i * millisecondsInAWeek;
  }
  return WeekBeginnings;
};

const GetCurrentWeek = () => {
  // For StartOfSeasonInUTC, the constructor is of the form
  // Date.UTC(YEAR, MONTH, DAY),  where month is zero-indexed.
  const StartOfSeasonInUTC = new Date(Date.UTC(2020, 11, 15));

  let WeekBeginnings = CreateWeekBeginnings(StartOfSeasonInUTC, seasonLength);
  const currentTime = Date.now();
  let CurrentWeek = 1;
  for (let i = 1; i <= seasonLength + 1; i++) {
    if (currentTime < WeekBeginnings[i]) {
      CurrentWeek = i;
      break;
    }
  }
  return CurrentWeek;
};

export default GetCurrentWeek;
