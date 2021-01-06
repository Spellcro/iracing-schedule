import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
// Import Types
import FilterCheckboxProps from '../../../../Types/FilterCheckboxes.types';

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    filterFavourites,
    updateFilterFavourites,
    filterType,
}) => {
    return (
        <FormControlLabel
            value={`favourite${filterType}`}
            control={
                <Checkbox
                    value={`Favourite${filterType}`}
                    color='secondary'
                    onChange={updateFilterFavourites}
                    checked={filterFavourites}
                />
            }
            label={`Show only favourite ${filterType.toLowerCase()}`}
            labelPlacement='top'
        />
    );
};

export default FilterCheckbox;
