import React from 'react';
import fullSeasonSchedule from '../../../data/scheduleData';
// Import Types
import PurchaseGuideTrackTileProps from '../../../Types/PurchaseGuideTrackTile.types';

const PurchaseGuideTrackTile: React.FC<PurchaseGuideTrackTileProps> = ({
    trackName,
    trackUsage,
    seriesUsage,
}) => {
    return (
        <div className='purchase-guide-tile'>
            <h4>{`${trackName}: (${trackUsage})`}</h4>
            <p>Used in the following series:</p>
            <ul>
                {seriesUsage.map((series) => (
                    <li key={`${trackName}+${series}`}>{fullSeasonSchedule[series].name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PurchaseGuideTrackTile;
