import React from 'react';
import fullSeasonSchedule from '../../data/scheduleData';
import { ContentObject } from '../ContentTabs/contentTab';
import NoSeriesAvailable from './NoSeriesAvailable';
import EligibleSeriesTable from './EligibleSeries';

type SeriesTableProps = {
    viewingWeek: number;
    tracks: ContentObject;
    cars: ContentObject;
    filters: { [key: string]: boolean };
};

const listOfSeries: string[] = Object.keys(fullSeasonSchedule);

const SeriesTable: React.FC<SeriesTableProps> = ({ viewingWeek, tracks, cars, filters }) => {
    // Create an array of series where at least one car is owned
    const eligibleSeries = listOfSeries.filter((series) =>
        fullSeasonSchedule[series].eligibleCars.some((car) => cars[car].owned)
    );

    // Filter the array to those which have a circuit this week
    const eligibleSeriesThisWeek = eligibleSeries.filter(
        (series) => fullSeasonSchedule[series].seriesSchedule[viewingWeek - 1] !== 'none'
    );

    let filteredEligibleSeries: string[];
    // If any licence filters are applied only show series which fit the filters
    if (Object.keys(filters).some((filter) => filters[filter] === true)) {
        filteredEligibleSeries = eligibleSeriesThisWeek.filter(
            (series) => filters[fullSeasonSchedule[series].licenceClass] === true
        );
    } else {
        filteredEligibleSeries = eligibleSeriesThisWeek;
    }

    return (
        <div style={{ backgroundColor: 'white' }}>
            {filteredEligibleSeries.length === 0 ? (
                <NoSeriesAvailable />
            ) : (
                <EligibleSeriesTable
                    viewingWeek={viewingWeek}
                    tracks={tracks}
                    seriesToDisplay={filteredEligibleSeries}
                />
            )}
        </div>
    );
};

export default SeriesTable;
