import defaultCarsData from '../data/ContentData/carsData';
import defaultTrackData from '../data/ContentData/trackData';

export const SetInitialCarData = (localCarData: string[]) => {
  let carData = JSON.parse(JSON.stringify(defaultCarsData));
  localCarData.forEach((car) => {
    if (Object.keys(carData).indexOf(car) >= 0) {
      carData[car].owned = true;
    }
  });
  return carData;
};

export const SetInitialTrackData = (localTrackData: string[]) => {
  let trackData = JSON.parse(JSON.stringify(defaultTrackData));
  localTrackData.forEach((track) => {
    if (Object.keys(trackData).indexOf(track) >= 0) {
      trackData[track].owned = true;
    }
  });
  return trackData;
};
