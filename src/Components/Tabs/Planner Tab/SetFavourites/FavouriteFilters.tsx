import React from 'react';
import { FormControl, FormGroup } from '@material-ui/core';
import FilterCarsCheckbox from './FilterCarsCheckbox';
import FilterTracksCheckbox from './FilterTracksCheckbox';
import FilterSeriesCheckbox from './FilterSeriesCheckbox';
// Import Types
import FavouriteFiltersProps from '../../../../Types/FavouriteFilters.types';
// Import Styles
import '../../../../styles/FavouriteFilters.css';

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
                    <FilterCarsCheckbox
                        filterFavourites={filterFavouriteCars}
                        updateFilterFavourites={updateFilterFavouriteCars}
                    />
                    <FilterTracksCheckbox
                        filterFavourites={filterFavouriteTracks}
                        updateFilterFavourites={updateFilterFavouriteTracks}
                    />
                    <FilterSeriesCheckbox
                        filterFavourites={filterFavouriteSeries}
                        updateFilterFavourites={updateFilterFavouriteSeries}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
};

export default FavouriteFilters;
