import React, { useState, useEffect } from 'react';

// Import Header and Footer
import MenuBar from './Components/Navigation/MenuBar';
import Footer from './Components/Navigation/Footer';

// Import Tabs
import HelpTab from './Components/Tabs/HelpTab';
import PlannerTab from './Components/Tabs/Planner Tab/PlannerTab';
import CarsTab from './Components/Tabs/Content Tabs/CarsTab';
import TracksTab from './Components/Tabs/Content Tabs/TrackTab';
import PurchaseGuideTab from './Components/Tabs/Purchase Guide Tab/PurchaseGuideTab';

// Import initial setup functions
import {
  SetInitialCarData,
  SetInitialTrackData
} from './helpers/initialSetupFunctions';
// Import Other Data
import ContentObject from './Types/ContentObject.types';
import GetCurrentWeek from './data/WeekCalculation';
import defaultLicenceFilters from './data/defaultLicenceFilters';

const App = () => {
  const currentWeek = GetCurrentWeek();

  const initialOwnedCars: string[] = window.localStorage.getItem('ownedCars')
    ? JSON.parse(String(window.localStorage.getItem('ownedCars')))
    : [];
  const initialOwnedTracks: string[] = window.localStorage.getItem(
    'ownedTracks'
  )
    ? JSON.parse(String(window.localStorage.getItem('ownedTracks')))
    : [];
  const initialFavouriteCars: string[] = window.localStorage.getItem(
    'favouriteCars'
  )
    ? JSON.parse(String(window.localStorage.getItem('favouriteCars')))
    : [];
  const initialFavouriteTracks: string[] = window.localStorage.getItem(
    'favouriteTracks'
  )
    ? JSON.parse(String(window.localStorage.getItem('favouriteTracks')))
    : [];
  const initialFavouriteSeries: string[] = window.localStorage.getItem(
    'favouriteSeries'
  )
    ? JSON.parse(String(window.localStorage.getItem('favouriteSeries')))
    : [];

  const initialCarData = SetInitialCarData(initialOwnedCars);
  const initialTrackData = SetInitialTrackData(initialOwnedTracks);

  // Initialise state variables
  const [activeTab, setActiveTab] = useState(
    String(window.localStorage.getItem('activeTab') || 'Help')
  );
  const [trackData, setTrackData] = useState(initialTrackData);
  const [carData, setCarData] = useState(initialCarData);
  const [viewingWeek, setViewingWeek] = useState(currentWeek);
  const [licenceFilters, setLicenceFilters] = useState(defaultLicenceFilters);
  const [ownedCars, setOwnedCars] = useState(initialOwnedCars);
  const [ownedTracks, setOwnedTracks] = useState(initialOwnedTracks);
  const [favouriteCars, setFavouriteCars] = useState(initialFavouriteCars);
  const [favouriteTracks, setFavouriteTracks] = useState(
    initialFavouriteTracks
  );
  const [favouriteSeries, setFavouriteSeries] = useState(
    initialFavouriteSeries
  );
  const [filterFavouriteCars, setFilterFavouriteCars] = useState(false);
  const [filterFavouriteTracks, setFilterFavouriteTracks] = useState(false);
  const [filterFavouriteSeries, setFilterFavouriteSeries] = useState(false);
  const [purchaseGuideUseFavourites, setPurchaseGuideUseFavourites] = useState(
    true
  );
  const [purchaseGuideUseAll, setPurchaseGuideUseAll] = useState(false);
  const [purchaseGuideUseEligible, setPurchaseGuideUseEligible] = useState(
    false
  );

  // Set up hooks to handle saving data to browser local storage

  // Owned Cars/Tracks
  useEffect(() => {
    window.localStorage.setItem('ownedCars', JSON.stringify(ownedCars));
  }, [ownedCars]);
  useEffect(() => {
    window.localStorage.setItem('ownedTracks', JSON.stringify(ownedTracks));
  }, [ownedTracks]);

  // Current tab
  useEffect(() => {
    window.localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  // Favourited Cars/Tracks/Series
  useEffect(() => {
    window.localStorage.setItem('favouriteCars', JSON.stringify(favouriteCars));
  }, [favouriteCars]);
  useEffect(() => {
    window.localStorage.setItem(
      'favouriteTracks',
      JSON.stringify(favouriteTracks)
    );
  }, [favouriteTracks]);
  useEffect(() => {
    window.localStorage.setItem(
      'favouriteSeries',
      JSON.stringify(favouriteSeries)
    );
  }, [favouriteSeries]);

  // Create an array of tab names
  const listOfTabs: string[] = [
    'Planner',
    'Set Cars',
    'Set Tracks',
    'Purchase Guide',
    'Help'
  ];

  // Create functions to utilise setState for the site

  const changeTab = (e: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
  };

  const updateOwnedTrack = (trackName: string) => {
    let newTrackData = {
      ...trackData,
      [trackName]: {
        ...trackData[trackName],
        owned: !trackData[trackName].owned
      }
    };
    // If the item being changed is one of the Nurburgring tracks, set the owned status of 'Nurburgring Combined'.
    if (trackName === 'nurbNordschleife' || trackName === 'nurbGP') {
      if (
        newTrackData['nurbGP'].owned === true &&
        newTrackData['nurbNordschleife'].owned === true
      ) {
        newTrackData['nurb24'].owned = true;
      } else {
        newTrackData['nurb24'].owned = false;
      }
    }
    setTrackData(newTrackData);
    let updatedTracks = [...ownedTracks];
    const i = updatedTracks.indexOf(trackName);
    if (i === -1) {
      updatedTracks.push(trackName);
    } else {
      updatedTracks.splice(i, 1);
    }
    setOwnedTracks(updatedTracks);
  };

  const updateOwnedCar = (carName: string) => {
    setCarData({
      ...carData,
      [carName]: {
        ...carData[carName],
        owned: !carData[carName].owned
      }
    });
    let updatedCars = [...ownedCars];
    const i = updatedCars.indexOf(carName);
    if (i === -1) {
      updatedCars.push(carName);
    } else {
      updatedCars.splice(i, 1);
    }
    setOwnedCars(updatedCars);
  };

  const updateAllTracks = (tracks: ContentObject, tracksList: string[]) => {
    setTrackData(tracks);
    setOwnedTracks(tracksList);
  };

  const updateAllCars = (cars: ContentObject, carsList: string[]) => {
    setCarData(cars);
    setOwnedCars(carsList);
  };

  const changeViewingWeek = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setViewingWeek(Number(e.currentTarget.value));
  };

  const updateLicenceFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLicenceFilters = {
      ...licenceFilters,
      [e.currentTarget.value]: !licenceFilters[e.currentTarget.value]
    };
    setLicenceFilters(newLicenceFilters);
  };

  const updateFavouriteCars = (car: string) => {
    let updatedFavouriteCars = [...favouriteCars];
    const i = updatedFavouriteCars.indexOf(car);
    if (i === -1) {
      updatedFavouriteCars.push(car);
    } else {
      updatedFavouriteCars.splice(i, 1);
    }
    setFavouriteCars(updatedFavouriteCars);
  };

  const updateFavouriteTracks = (track: string) => {
    let updatedFavouriteTracks = [...favouriteTracks];
    const i = updatedFavouriteTracks.indexOf(track);
    if (i === -1) {
      updatedFavouriteTracks.push(track);
    } else {
      updatedFavouriteTracks.splice(i, 1);
    }
    setFavouriteTracks(updatedFavouriteTracks);
  };

  const updateFavouriteSeries = (series: string) => {
    let updatedFavouriteSeries = [...favouriteSeries];
    const i = updatedFavouriteSeries.indexOf(series);
    if (i === -1) {
      updatedFavouriteSeries.push(series);
    } else {
      updatedFavouriteSeries.splice(i, 1);
    }
    setFavouriteSeries(updatedFavouriteSeries);
  };

  const updateFilterFavouriteCars = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterFavouriteCars(!filterFavouriteCars);
    setFilterFavouriteSeries(false);
    setFilterFavouriteTracks(false);
  };
  const updateFilterFavouriteTracks = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterFavouriteTracks(!filterFavouriteTracks);
    setFilterFavouriteSeries(false);
    setFilterFavouriteCars(false);
  };
  const updateFilterFavouriteSeries = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterFavouriteSeries(!filterFavouriteSeries);
    setFilterFavouriteCars(false);
    setFilterFavouriteTracks(false);
  };

  const updatePurchaseGuideUseFavourites = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPurchaseGuideUseFavourites(!purchaseGuideUseFavourites);
    setPurchaseGuideUseAll(false);
    setPurchaseGuideUseEligible(false);
  };

  const updatePurchaseGuideUseEligible = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPurchaseGuideUseFavourites(false);
    setPurchaseGuideUseAll(false);
    setPurchaseGuideUseEligible(!purchaseGuideUseEligible);
  };

  const updatePurchaseGuideUseAll = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPurchaseGuideUseFavourites(false);
    setPurchaseGuideUseAll(!purchaseGuideUseAll);
    setPurchaseGuideUseEligible(false);
  };

  return (
    <>
      <MenuBar
        activeTab={activeTab}
        allTabs={listOfTabs}
        changeTab={changeTab}
      />
      {activeTab === 'Planner' ? (
        <PlannerTab
          tracks={trackData}
          cars={carData}
          currentWeek={currentWeek}
          viewingWeek={viewingWeek}
          changeWeek={changeViewingWeek}
          licenceFilters={licenceFilters}
          updateLicenceFilters={updateLicenceFilters}
          updateFavouriteCars={updateFavouriteCars}
          updateFavouriteTracks={updateFavouriteTracks}
          filterFavouriteCars={filterFavouriteCars}
          updateFilterFavouriteCars={updateFilterFavouriteCars}
          updateFilterFavouriteTracks={updateFilterFavouriteTracks}
          filterFavouriteTracks={filterFavouriteTracks}
          updateFavouriteSeries={updateFavouriteSeries}
          filterFavouriteSeries={filterFavouriteSeries}
          updateFilterFavouriteSeries={updateFilterFavouriteSeries}
        />
      ) : activeTab === 'Set Cars' ? (
        <CarsTab
          cars={carData}
          ownedCars={ownedCars}
          updateOneItem={updateOwnedCar}
          updateAllItems={updateAllCars}
        />
      ) : activeTab === 'Set Tracks' ? (
        <TracksTab
          tracks={trackData}
          ownedTracks={ownedTracks}
          updateOneItem={updateOwnedTrack}
          updateAllItems={updateAllTracks}
        />
      ) : activeTab === 'Purchase Guide' ? (
        <PurchaseGuideTab
          favouriteSeries={favouriteSeries}
          useFavourites={purchaseGuideUseFavourites}
          useAll={purchaseGuideUseAll}
          useEligible={purchaseGuideUseEligible}
          updateUseFavourites={updatePurchaseGuideUseFavourites}
          updateUseAll={updatePurchaseGuideUseAll}
          updateUseEligible={updatePurchaseGuideUseEligible}
          trackData={trackData}
          carData={carData}
          currentWeek={currentWeek}
        />
      ) : (
        <HelpTab />
      )}
      <Footer />
    </>
  );
};

export default App;
