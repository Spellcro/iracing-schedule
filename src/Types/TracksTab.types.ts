import ContentObject from './ContentObject.types';

type TracksTabProps = {
    tracks: ContentObject;
    ownedTracks: string[];
    updateOneItem: (track: string) => void;
    updateAllItems: (allTracks: ContentObject, updatedTracksList: string[]) => void;
};

export default TracksTabProps;
