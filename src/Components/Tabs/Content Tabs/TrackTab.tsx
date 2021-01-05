import React from 'react';
import ContentTab from './ContentTab';
import { ContentObject } from '../../../data/ContentData/ContentTypes';

type TracksTabProps = {
    tracks: ContentObject;
    ownedTracks: string[];
    updateOneItem: (track: string) => void;
    updateAllItems: (allTracks: ContentObject, updatedTracksList: string[]) => void;
};

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
