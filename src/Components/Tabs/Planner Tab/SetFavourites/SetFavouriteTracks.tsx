import React from 'react';
import SetFavouritesDialog from './SetFavouritesDialog';
import trackData from '../../../../data/ContentData/trackData';
// Import Types
import SetFavouritesProps from '../../../../Types/SetFavourites.types';

const SetFavouriteTracks: React.FC<SetFavouritesProps> = ({
  closeModal,
  openModal,
  showModal,
  updateFavourites
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
