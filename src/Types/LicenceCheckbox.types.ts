import LicenceFiltersType from './LicenceFiltersType.types';

type LicenceCheckboxType = {
  licence: 'R' | 'A' | 'B' | 'C' | 'D';
  licenceFilters: LicenceFiltersType;
  updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default LicenceCheckboxType;
