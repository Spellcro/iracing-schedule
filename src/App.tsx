import React, { useState, useEffect } from 'react';

// Import Menu Bar
import MenuBar from './menuBar';

// Import Tabs
import HelpTab from './tabs/HelpTab';
import PlannerTab from './tabs/PlannerTab/PlannerTab';
import CarsTab from './tabs/ContentTabs/carsTab';
import TracksTab from './tabs/ContentTabs/trackTab';

// Import initial setup functions
import { SetInitialCarData, SetInitialTrackData } from './helpers/initialSetupFunctions';
// Import Other Data
import { ContentObject } from './data/ContentData/ContentTypes';
import GetCurrentWeek from './data/WeekCalculation';
import { defaultLicenceFilters } from './tabs/PlannerTab/LicenceFilters';

const App = () => {
    const currentWeek = GetCurrentWeek();

    const initialOwnedCars: string[] = window.localStorage.getItem('ownedCars')
        ? JSON.parse(String(window.localStorage.getItem('ownedCars')))
        : [];
    const initialOwnedTracks: string[] = window.localStorage.getItem('ownedTracks')
        ? JSON.parse(String(window.localStorage.getItem('ownedTracks')))
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

    // Set up hooks to handle saving data to browser local storage
    useEffect(() => {
        window.localStorage.setItem('ownedCars', JSON.stringify(ownedCars));
    }, [ownedCars]);

    useEffect(() => {
        window.localStorage.setItem('ownedTracks', JSON.stringify(ownedTracks));
    }, [ownedTracks]);

    useEffect(() => {
        window.localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    // Create an array of tabs, car names, track names.
    const listOfTabs: string[] = ['Planner', 'Set Cars', 'Set Tracks', 'Help'];
    const trackList: string[] = Object.keys(trackData);
    const carList: string[] = Object.keys(carData);

    // Create functions to utilise setState for the site

    const changeTab = (e: React.ChangeEvent<{}>, newValue: string) => {
        setActiveTab(newValue);
    };

    const updateOwnedTrack = (trackName: string) => {
        setTrackData({
            ...trackData,
            [trackName]: {
                ...trackData[trackName],
                owned: !trackData[trackName].owned,
            },
        });
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
                owned: !carData[carName].owned,
            },
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

    const changeViewingWeek = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setViewingWeek(Number(e.currentTarget.value));
    };

    const updateFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFilters = {
            ...licenceFilters,
            [e.currentTarget.value]: !licenceFilters[e.currentTarget.value],
        };
        setLicenceFilters(newFilters);
    };

    return (
        <div>
            <MenuBar activeTab={activeTab} allTabs={listOfTabs} callback={changeTab} />
            {activeTab === listOfTabs[0] ? (
                <PlannerTab
                    tracks={trackData}
                    cars={carData}
                    currentWeek={currentWeek}
                    viewingWeek={viewingWeek}
                    changeWeek={changeViewingWeek}
                    licenceFilters={licenceFilters}
                    updateFilters={updateFilters}
                />
            ) : activeTab === listOfTabs[1] ? (
                <CarsTab
                    cars={carData}
                    carNames={carList}
                    ownedCars={ownedCars}
                    updateOneItem={updateOwnedCar}
                    updateAllItems={updateAllCars}
                />
            ) : activeTab === listOfTabs[2] ? (
                <TracksTab
                    tracks={trackData}
                    trackNames={trackList}
                    ownedTracks={ownedTracks}
                    updateOneItem={updateOwnedTrack}
                    updateAllItems={updateAllTracks}
                />
            ) : (
                <HelpTab />
            )}
        </div>
    );
};

export default App;
