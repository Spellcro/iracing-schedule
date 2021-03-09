import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
// Import Types
import LicenceCheckboxType from '../../../../Types/LicenceCheckbox.types';

const LicenceCheckbox: React.FC<LicenceCheckboxType> = ({
  licence,
  licenceFilters,
  updateFilters
}) => {
  return (
    <FormControlLabel
      value={licence.toLowerCase()}
      control={
        <Checkbox
          value={licence}
          color="secondary"
          onChange={updateFilters}
          checked={licenceFilters[licence]}
        />
      }
      label={licence}
      labelPlacement="end"
    />
  );
};

export default LicenceCheckbox;
