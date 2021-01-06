import ContentObject from './ContentObject.types';

type PurchaseGuideTabProps = {
    favouriteSeries: string[];
    useFavourites: boolean;
    useAll: boolean;
    useEligible: boolean;
    updateUseFavourites: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateUseAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateUseEligible: (e: React.ChangeEvent<HTMLInputElement>) => void;
    trackData: ContentObject;
    carData: ContentObject;
    currentWeek: number;
};

export default PurchaseGuideTabProps;
