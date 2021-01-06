import ContentObject from './ContentObject.types';

type CarsTabProps = {
    cars: ContentObject;
    ownedCars: string[];
    updateOneItem: (car: string) => void;
    updateAllItems: (allCars: ContentObject, updatedCarsList: string[]) => void;
};

export default CarsTabProps;
