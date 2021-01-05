import React, { useState } from 'react';
import SetFavouriteCars from './SetFavouriteCars';
import SetFavouriteTracks from './SetFavouriteTracks';
import SetFavouriteSeries from './SetFavouriteSeries';

// Import Styles
import '../../../../styles/SetFavourites.css';

const SetFavourites: React.FC<{
    updateFavouriteCars: (item: string) => void;
    updateFavouriteTracks: (item: string) => void;
    updateFavouriteSeries: (item: string) => void;
}> = ({ updateFavouriteCars, updateFavouriteTracks, updateFavouriteSeries }) => {
    const [showFavouriteCars, setShowFavouriteCars] = useState(false);
    const [showFavouriteTracks, setShowFavouriteTracks] = useState(false);
    const [showFavouriteSeries, setShowFavouriteSeries] = useState(false);

    const closeCars = () => setShowFavouriteCars(false);
    const openCars = () => setShowFavouriteCars(true);
    const closeTracks = () => setShowFavouriteTracks(false);
    const openTracks = () => setShowFavouriteTracks(true);
    const closeSeries = () => setShowFavouriteSeries(false);
    const openSeries = () => setShowFavouriteSeries(true);

    return (
        <div className='set-favourites-wrapper'>
            <SetFavouriteCars
                closeModal={closeCars}
                openModal={openCars}
                showModal={showFavouriteCars}
                updateFavourites={updateFavouriteCars}
            />
            <SetFavouriteTracks
                closeModal={closeTracks}
                openModal={openTracks}
                showModal={showFavouriteTracks}
                updateFavourites={updateFavouriteTracks}
            />
            <SetFavouriteSeries
                closeModal={closeSeries}
                openModal={openSeries}
                showModal={showFavouriteSeries}
                updateFavourites={updateFavouriteSeries}
            />
        </div>
    );
};

export default SetFavourites;
