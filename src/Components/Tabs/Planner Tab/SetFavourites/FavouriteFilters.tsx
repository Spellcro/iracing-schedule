import React from 'react';
import { Checkbox, FormControl, FormGroup, FormControlLabel } from '@material-ui/core';
// import styles
import '../../../../styles/FavouriteFilters.css';

type FavouriteFiltersProps = {
    filterFavouriteCars: boolean;
    updateFilterFavouriteCars: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteTracks: boolean;
    updateFilterFavouriteTracks: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteSeries: boolean;
    updateFilterFavouriteSeries: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FavouriteFilters: React.FC<FavouriteFiltersProps> = ({
    filterFavouriteCars,
    updateFilterFavouriteCars,
    filterFavouriteTracks,
    updateFilterFavouriteTracks,
    filterFavouriteSeries,
    updateFilterFavouriteSeries,
}) => {
    return (
        <div className='favourite-filters-container'>
            <FormControl component='fieldset'>
                <FormGroup row>
                    <FilterCars
                        filterFavouriteCars={filterFavouriteCars}
                        updateFilterFavouriteCars={updateFilterFavouriteCars}
                    />
                    <FilterTracks
                        filterFavouriteTracks={filterFavouriteTracks}
                        updateFilterFavouriteTracks={updateFilterFavouriteTracks}
                    />
                    <FilterSeries
                        filterFavouriteSeries={filterFavouriteSeries}
                        updateFilterFavouriteSeries={updateFilterFavouriteSeries}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
};

const FilterCars: React.FC<{
    filterFavouriteCars: boolean;
    updateFilterFavouriteCars: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ filterFavouriteCars, updateFilterFavouriteCars }) => {
    return (
        <FormControlLabel
            value='favouriteCars'
            control={
                <Checkbox
                    value='FavouriteCars'
                    color='secondary'
                    onChange={updateFilterFavouriteCars}
                    checked={filterFavouriteCars}
                />
            }
            label='Show only Favourite Cars'
            labelPlacement='top'
        />
    );
};

const FilterTracks: React.FC<{
    filterFavouriteTracks: boolean;
    updateFilterFavouriteTracks: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ filterFavouriteTracks, updateFilterFavouriteTracks }) => {
    return (
        <FormControlLabel
            value='favouriteTracks'
            control={
                <Checkbox
                    value='FavouriteTracks'
                    color='secondary'
                    onChange={updateFilterFavouriteTracks}
                    checked={filterFavouriteTracks}
                />
            }
            label='Show only Favourite Tracks'
            labelPlacement='top'
        />
    );
};

const FilterSeries: React.FC<{
    filterFavouriteSeries: boolean;
    updateFilterFavouriteSeries: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ filterFavouriteSeries, updateFilterFavouriteSeries }) => {
    return (
        <FormControlLabel
            value='favouriteSeries'
            control={
                <Checkbox
                    value='FavouriteSeries'
                    color='secondary'
                    onChange={updateFilterFavouriteSeries}
                    checked={filterFavouriteSeries}
                />
            }
            label='Show only Favourite Series'
            labelPlacement='top'
        />
    );
};

export default FavouriteFilters;
