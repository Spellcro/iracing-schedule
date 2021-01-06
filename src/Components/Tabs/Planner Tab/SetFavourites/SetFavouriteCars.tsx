import React from 'react';
import SetFavouritesDialog from './SetFavouritesDialog';
import carsData from '../../../../data/ContentData/carsData';
// Import Types
import SetFavouritesProps from '../../../../Types/SetFavourites.types';

const SetFavouriteCars: React.FC<SetFavouritesProps> = ({
    closeModal,
    openModal,
    showModal,
    updateFavourites,
}) => {
    const carsList = Object.keys(carsData);
    return (
        <SetFavouritesDialog
            closeModal={closeModal}
            openModal={openModal}
            showModal={showModal}
            itemList={carsList}
            updateFavourites={updateFavourites}
            itemType={'Cars'}
            data={carsData}
        />
    );
};

export default SetFavouriteCars;
