import React from 'react';
import ContentTab, { ContentObject } from './contentTab';

type TracksTabProps = {
    tracks: ContentObject;
    trackNames: string[];
    ownedTracks: string[];
    updateOneItem: (track: string) => void;
    updateAllItems: (allTracks: ContentObject, updatedTracksList: string[]) => void;
};

const TracksTab: React.FC<TracksTabProps> = ({
    tracks,
    trackNames,
    ownedTracks,
    updateOneItem,
    updateAllItems,
}) => {
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
