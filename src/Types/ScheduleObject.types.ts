type ScheduleObject = {
  [key: string]: SeriesDetails;
};
type SeriesDetails = {
  name: string;
  eligibleCars: string[];
  seriesSchedule: string[];
  licenceClass: string;
};

export default ScheduleObject;
