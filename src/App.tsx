import React, { useState, useEffect } from 'react';

// Import Menu Bar
import MenuBar from './menuBar';

// Import Tabs
import HelpTab from './tabs/helpTab';
import PlannerTab from './tabs/PlannerTab/plannerTab';
import CarsTab from './tabs/ContentTabs/carsTab';
import TracksTab from './tabs/ContentTabs/trackTab';

// Import Other Data
import defaultTrackData from './data/trackData';
import defaultCarsData from './data/carsData';
import { ContentObject } from './tabs/ContentTabs/contentTab';

const App = () => {
    const initialTrackData: ContentObject = window.localStorage.getItem('trackData')
        ? JSON.parse(String(window.localStorage.getItem('trackData')))
        : defaultTrackData;
    const initialCarData: ContentObject = window.localStorage.getItem('carData')
        ? JSON.parse(String(window.localStorage.getItem('carData')))
        : defaultCarsData;

    // Initialise state variables
    const [activeTab, setActiveTab] = useState(
        String(window.localStorage.getItem('activeTab') || 'Help')
    );
    const [trackData, setTrackData] = useState(initialTrackData);
    const [carData, setCarData] = useState(initialCarData);

    // Set up hooks to handle saving data to browser local storage
    useEffect(() => {
        window.localStorage.setItem('carData', JSON.stringify(carData));
    }, [carData]);

    useEffect(() => {
        window.localStorage.setItem('trackData', JSON.stringify(trackData));
    }, [trackData]);

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
    };

    const updateOwnedCar = (carName: string) => {
        setCarData({
            ...carData,
            [carName]: {
                ...carData[carName],
                owned: !carData[carName].owned,
            },
        });
    };

    const updateAllTracks = (tracks: ContentObject) => {
        setTrackData(tracks);
    };

    const updateAllCars = (cars: ContentObject) => {
        setCarData(cars);
    };

    return (
        <div>
            <MenuBar activeTab={activeTab} allTabs={listOfTabs} callback={changeTab} />
            {activeTab === listOfTabs[0] ? (
                <PlannerTab tracks={trackData} cars={carData} />
            ) : activeTab === listOfTabs[1] ? (
                <CarsTab
                    cars={carData}
                    carNames={carList}
                    updateOneItem={updateOwnedCar}
                    updateAllItems={updateAllCars}
                />
            ) : activeTab === listOfTabs[2] ? (
                <TracksTab
                    tracks={trackData}
                    trackNames={trackList}
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
