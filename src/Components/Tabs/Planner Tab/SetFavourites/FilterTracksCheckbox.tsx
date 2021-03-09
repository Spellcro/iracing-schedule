import React from 'react';
import FilterCheckbox from './FilterCheckbox';
// Import Types
import { FilterCheckboxContainerProps } from '../../../../Types/FilterCheckboxes.types';

const FilterTracksCheckbox: React.FC<FilterCheckboxContainerProps> = ({
  filterFavourites,
  updateFilterFavourites
}) => {
  return (
    <FilterCheckbox
      filterFavourites={filterFavourites}
      updateFilterFavourites={updateFilterFavourites}
      filterType="Tracks"
    />
  );
};

export default FilterTracksCheckbox;
