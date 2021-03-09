import LicenceFiltersType from './LicenceFiltersType.types';

type LicenceFiltersProps = {
  licenceFilters: LicenceFiltersType;
  updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default LicenceFiltersProps;
