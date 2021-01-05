import React from 'react';
import { FormControl, FormGroup } from '@material-ui/core';
import LicenceCheckbox from './LicenceCheckbox';
import { LicenceFiltersType } from './defaultLicenceFilters';
// Import styles
import '../../../../styles/LicenceFilters.css';

type LicenceFiltersProps = {
    licenceFilters: LicenceFiltersType;
    updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LicenceFilters: React.FC<LicenceFiltersProps> = ({ licenceFilters, updateFilters }) => {
    return (
        <div className='licence-filters-container'>
            <FormControl component='fieldset'>
                <p className='licence-filters-header'>Licence Class Filters</p>
                <FormGroup aria-label='position' row>
                    <LicenceCheckbox
                        licence='R'
                        licenceFilters={licenceFilters}
                        updateFilters={updateFilters}
                    />
                    <LicenceCheckbox
                        licence='D'
                        licenceFilters={licenceFilters}
                        updateFilters={updateFilters}
                    />
                    <LicenceCheckbox
                        licence='C'
                        licenceFilters={licenceFilters}
                        updateFilters={updateFilters}
                    />
                    <LicenceCheckbox
                        licence='B'
                        licenceFilters={licenceFilters}
                        updateFilters={updateFilters}
                    />
                    <LicenceCheckbox
                        licence='A'
                        licenceFilters={licenceFilters}
                        updateFilters={updateFilters}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
};

export default LicenceFilters;
