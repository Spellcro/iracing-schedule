import React from 'react';
import fullSeasonSchedule from '../../../data/scheduleData';
import { ContentObject } from '../../../data/ContentData/ContentTypes';
import NoSeriesAvailable from './NoSeriesAvailable';
import EligibleSeriesTable from './EligibleSeriesTable';
// Import styles
import '../../../styles/SeriesTable.css';

type SeriesTableProps = {
    viewingWeek: number;
    tracks: ContentObject;
    cars: ContentObject;
    filters: { [key: string]: boolean };
    filterFavouriteCars: boolean;
    filterFavouriteTracks: boolean;
    filterFavouriteSeries: boolean;
};

const listOfSeries: string[] = Object.keys(fullSeasonSchedule);

const SeriesTable: React.FC<SeriesTableProps> = ({
    viewingWeek,
    tracks,
    cars,
    filters,
    filterFavouriteCars,
    filterFavouriteTracks,
    filterFavouriteSeries,
}) => {
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

    // Filter for favourite cars if applicable
    if (filterFavouriteCars) {
        const favouriteCars: string[] = JSON.parse(
            String(window.localStorage.getItem('favouriteCars'))
        );
        let filteredForFavouriteCars = filteredEligibleSeries.filter((series) => {
            let passedFilters = false;
            favouriteCars.forEach((car) => {
                if (fullSeasonSchedule[series].eligibleCars.indexOf(car) >= 0) {
                    passedFilters = true;
                }
            });
            return passedFilters;
        });

        filteredEligibleSeries = [...filteredForFavouriteCars];
    }

    // Filter for favourite tracks if applicable
    if (filterFavouriteTracks) {
        const favouriteTracks: string[] = JSON.parse(
            String(window.localStorage.getItem('favouriteTracks'))
        );
        let filteredForFavouriteTracks = filteredEligibleSeries.filter(
            (series) =>
                favouriteTracks.indexOf(
                    fullSeasonSchedule[series].seriesSchedule[viewingWeek - 1]
                ) >= 0
        );
        filteredEligibleSeries = [...filteredForFavouriteTracks];
    }

    // Filter for favourite series if applicable
    if (filterFavouriteSeries) {
        const favouriteSeries: string[] = JSON.parse(
            String(window.localStorage.getItem('favouriteSeries'))
        );
        let filteredForFavouriteSeries = filteredEligibleSeries.filter(
            (series) => favouriteSeries.indexOf(series) >= 0
        );

        filteredEligibleSeries = [...filteredForFavouriteSeries];
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
