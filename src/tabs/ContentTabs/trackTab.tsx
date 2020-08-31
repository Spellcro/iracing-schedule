import React from 'react';
import ContentTab, { ContentObject } from './contentTab';

type TracksTabProps = {
    tracks: ContentObject;
    trackNames: string[];
    updateOneItem: (car: string) => void;
    updateAllItems: (tracks: ContentObject) => void;
};

const TracksTab: React.FC<TracksTabProps> = ({
    tracks,
    trackNames,
    updateOneItem,
    updateAllItems,
}) => {
    return (
        <ContentTab
            content={tracks}
            contentList={trackNames}
            imageFolder={'trackImages'}
            updateOneItem={updateOneItem}
            updateAllItems={updateAllItems}
        />
    );
};

export default TracksTab;
