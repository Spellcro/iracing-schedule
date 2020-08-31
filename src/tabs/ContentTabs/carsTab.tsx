import React from 'react';
import ContentTab from './contentTab';
import { ContentObject } from './contentTab';

type CarsTabProps = {
    cars: ContentObject;
    carNames: string[];
    updateOneItem: (car: string) => void;
    updateAllItems: (cars: ContentObject) => void;
};

const CarsTab: React.FC<CarsTabProps> = ({ cars, carNames, updateOneItem, updateAllItems }) => {
    return (
        <ContentTab
            content={cars}
            contentList={carNames}
            imageFolder={'carImages'}
            updateOneItem={updateOneItem}
            updateAllItems={updateAllItems}
        />
    );
};

export default CarsTab;
