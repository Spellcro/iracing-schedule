import ContentObject from './ContentObject.types';

type SeriesTableProps = {
    viewingWeek: number;
    tracks: ContentObject;
    cars: ContentObject;
    filters: { [key: string]: boolean };
    filterFavouriteCars: boolean;
    filterFavouriteTracks: boolean;
    filterFavouriteSeries: boolean;
};

export default SeriesTableProps;
