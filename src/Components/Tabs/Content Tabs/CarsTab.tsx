import React from 'react';
import ContentTab from './ContentTab';
// Import Types
import CarsTabProps from '../../../Types/CarsTab.types';

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
