import React from 'react';
import FilterCheckbox from './FilterCheckbox';
// Import Types
import { FilterCheckboxContainerProps } from '../../../../Types/FilterCheckboxes.types';

const FilterCarsCheckbox: React.FC<FilterCheckboxContainerProps> = ({
    filterFavourites,
    updateFilterFavourites,
}) => {
    return (
        <FilterCheckbox
            filterFavourites={filterFavourites}
            updateFilterFavourites={updateFilterFavourites}
            filterType='Cars'
        />
    );
};

export default FilterCarsCheckbox;
