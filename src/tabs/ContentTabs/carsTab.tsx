import React from 'react';
import ContentTab from './contentTab';
import { ContentObject } from '../../data/ContentData/ContentTypes';

type CarsTabProps = {
    cars: ContentObject;
    ownedCars: string[];
    updateOneItem: (car: string) => void;
    updateAllItems: (allCars: ContentObject, updatedCarsList: string[]) => void;
};

const CarsTab: React.FC<CarsTabProps> = ({ cars, ownedCars, updateOneItem, updateAllItems }) => {
    const carNames = Object.keys(cars);
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
