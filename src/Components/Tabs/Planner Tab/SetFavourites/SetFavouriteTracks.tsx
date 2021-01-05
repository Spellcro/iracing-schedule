import React from 'react';
import SetFavouritesDialog, { SetFavouritesProps } from './SetFavouritesDialog';
import trackData from '../../../../data/ContentData/trackData';

const SetFavouriteTracks: React.FC<SetFavouritesProps> = ({
    closeModal,
    openModal,
    showModal,
    updateFavourites,
}) => {
    const trackList = Object.keys(trackData);
    return (
        <SetFavouritesDialog
            closeModal={closeModal}
            openModal={openModal}
            showModal={showModal}
            itemList={trackList}
            updateFavourites={updateFavourites}
            itemType={'Tracks'}
            data={trackData}
        />
    );
};

export default SetFavouriteTracks;
