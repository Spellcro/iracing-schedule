import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { LicenceFiltersType } from './defaultLicenceFilters';

type LicenceCheckboxType = {
    licence: 'R' | 'A' | 'B' | 'C' | 'D';
    licenceFilters: LicenceFiltersType;
    updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LicenceCheckbox: React.FC<LicenceCheckboxType> = ({
    licence,
    licenceFilters,
    updateFilters,
}) => {
    return (
        <FormControlLabel
            value={licence.toLowerCase()}
            control={
                <Checkbox
                    value={licence}
                    color='secondary'
                    onChange={updateFilters}
                    checked={licenceFilters[licence]}
                />
            }
            label={licence}
            labelPlacement='end'
        />
    );
};

export default LicenceCheckbox;
