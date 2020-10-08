import React from 'react';
import ContentTab from './contentTab';
import { ContentObject } from './contentTab';

type CarsTabProps = {
    cars: ContentObject;
    carNames: string[];
    ownedCars: string[];
    updateOneItem: (car: string) => void;
    updateAllItems: (allCars: ContentObject, updatedCarsList: string[]) => void;
};

const CarsTab: React.FC<CarsTabProps> = ({
    cars,
    carNames,
    ownedCars,
    updateOneItem,
    updateAllItems,
}) => {
    return (
        <ContentTab
            content={cars}
            contentList={carNames}
            imageFolder={'carImages'}
            ownedContent={ownedCars}
            updateOneItem={updateOneItem}
            updateAllItems={updateAllItems}
        />
    );
};

export default CarsTab;
