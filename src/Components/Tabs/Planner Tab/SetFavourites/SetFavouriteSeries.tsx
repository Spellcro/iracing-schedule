import React from 'react';
import SetFavouritesDialog from './SetFavouritesDialog';
import seriesData from '../../../../data/scheduleData';
// Import Types
import SetFavouritesProps from '../../../../Types/SetFavourites.types';

const SetFavouriteSeries: React.FC<SetFavouritesProps> = ({
    closeModal,
    openModal,
    showModal,
    updateFavourites,
}) => {
    const seriesList = Object.keys(seriesData);
    return (
        <SetFavouritesDialog
            closeModal={closeModal}
            openModal={openModal}
            showModal={showModal}
            itemList={seriesList}
            updateFavourites={updateFavourites}
            itemType={'Series'}
            data={seriesData}
        />
    );
};

export default SetFavouriteSeries;
