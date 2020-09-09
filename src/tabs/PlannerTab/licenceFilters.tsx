import React from 'react';
import { Checkbox, FormControl, FormGroup, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

export type LicenceFiltersType = {
    [key: string]: boolean;
};
export const defaultLicenceFilters: LicenceFiltersType = {
    A: false,
    B: false,
    C: false,
    D: false,
    R: false,
};

const LicenceCheckboxContainer = styled.div`
    text-align: center;
    padding-top: 5px;
    margin-bottom: -20px;
`;

type LicenceFiltersProps = {
    licenceFilters: LicenceFiltersType;
    updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LicenceFilters: React.FC<LicenceFiltersProps> = ({ licenceFilters, updateFilters }) => {
    return (
        <LicenceCheckboxContainer>
            <FormControl component='fieldset'>
                <p className='LicenceFilterHeader'>Licence Class Filters</p>
                <FormGroup aria-label='position' row>
                    <FormControlLabel
                        value='r'
                        control={
                            <Checkbox
                                value='R'
                                color='secondary'
                                onChange={updateFilters}
                                checked={licenceFilters.R}
                            />
                        }
                        label='R'
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        value='d'
                        control={
                            <Checkbox
                                value='D'
                                color='secondary'
                                onChange={updateFilters}
                                checked={licenceFilters.D}
                            />
                        }
                        label='D'
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        value='c'
                        control={
                            <Checkbox
                                value='C'
                                color='secondary'
                                onChange={updateFilters}
                                checked={licenceFilters.C}
                            />
                        }
                        label='C'
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        value='b'
                        control={
                            <Checkbox
                                value='B'
                                color='secondary'
                                onChange={updateFilters}
                                checked={licenceFilters.B}
                            />
                        }
                        label='B'
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        value='a'
                        control={
                            <Checkbox
                                value='A'
                                color='secondary'
                                onChange={updateFilters}
                                checked={licenceFilters.A}
                            />
                        }
                        label='A'
                        labelPlacement='end'
                    />
                </FormGroup>
            </FormControl>
        </LicenceCheckboxContainer>
    );
};

export default LicenceFilters;
