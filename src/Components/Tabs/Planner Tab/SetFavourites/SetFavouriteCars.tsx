import React from 'react';
import SetFavouritesDialog, { SetFavouritesProps } from './SetFavouritesDialog';
import carsData from '../../../../data/ContentData/carsData';

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
