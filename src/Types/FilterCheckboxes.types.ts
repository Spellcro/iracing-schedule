type FilterCheckboxProps = {
    filterFavourites: boolean;
    updateFilterFavourites: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterType: 'Cars' | 'Tracks' | 'Series';
};

export type FilterCheckboxContainerProps = {
    filterFavourites: boolean;
    updateFilterFavourites: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default FilterCheckboxProps;
