import React from 'react';
import FilterCheckbox from './FilterCheckbox';
// Import Types
import { FilterCheckboxContainerProps } from '../../../../Types/FilterCheckboxes.types';

const FilterSeriesCheckbox: React.FC<FilterCheckboxContainerProps> = ({
  filterFavourites,
  updateFilterFavourites
}) => {
  return (
    <FilterCheckbox
      filterFavourites={filterFavourites}
      updateFilterFavourites={updateFilterFavourites}
      filterType="Series"
    />
  );
};

export default FilterSeriesCheckbox;
