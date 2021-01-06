import React from 'react';
import ContentTab from './ContentTab';
// Import Types
import TracksTabProps from '../../../Types/TracksTab.types';

const TracksTab: React.FC<TracksTabProps> = ({
    tracks,
    ownedTracks,
    updateOneItem,
    updateAllItems,
}) => {
    const trackNames = Object.keys(tracks);
    return (
        <ContentTab
            content={tracks}
            contentList={trackNames}
            imageFolder={'trackImages'}
            ownedContent={ownedTracks}
            updateOneItem={updateOneItem}
            updateAllItems={updateAllItems}
        />
    );
};

export default TracksTab;
