import ContentObject from './ContentObject.types';
import LicenceFiltersType from './LicenceFiltersType.types';

type PlannerTabProps = {
    tracks: ContentObject;
    cars: ContentObject;
    currentWeek: number;
    viewingWeek: number;
    changeWeek: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    licenceFilters: LicenceFiltersType;
    updateLicenceFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateFavouriteCars: (item: string) => void;
    updateFavouriteTracks: (item: string) => void;
    updateFavouriteSeries: (item: string) => void;
    filterFavouriteCars: boolean;
    updateFilterFavouriteCars: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteTracks: boolean;
    updateFilterFavouriteTracks: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteSeries: boolean;
    updateFilterFavouriteSeries: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default PlannerTabProps;
