type FavouriteFiltersProps = {
    filterFavouriteCars: boolean;
    updateFilterFavouriteCars: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteTracks: boolean;
    updateFilterFavouriteTracks: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteSeries: boolean;
    updateFilterFavouriteSeries: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default FavouriteFiltersProps;
