import React from 'react';
import { ContentObject } from '../../data/ContentData/ContentTypes';
import WeekSelector from './WeekSelector';
import SeriesTable from './SeriesTable';
import { seasonLength } from '../../data/WeekCalculation';
import LicenceFilters, { LicenceFiltersType } from './LicenceFilters';
import SetFavourites from './SetFavourites';

// Import styles
import '../../styles/PlannerTab.css';
import FavouriteFilters from './FavouriteFilters';

type PlannerTabProps = {
    tracks: ContentObject;
    cars: ContentObject;
    currentWeek: number;
    viewingWeek: number;
    changeWeek: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    licenceFilters: LicenceFiltersType;
    updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const PlannerTab: React.FC<PlannerTabProps> = ({
    tracks,
    cars,
    currentWeek,
    viewingWeek,
    changeWeek,
    licenceFilters,
    updateFilters,
    updateFavouriteCars,
    updateFavouriteTracks,
    updateFavouriteSeries,
    filterFavouriteCars,
    updateFilterFavouriteCars,
    filterFavouriteTracks,
    updateFilterFavouriteTracks,
    filterFavouriteSeries,
    updateFilterFavouriteSeries,
}) => {
    return (
        <div className='PlannerTabWrapper'>
            <h3 className='PlannerTabIntro'>iRacing 2021 S1 Schedule - Week {currentWeek}</h3>

            <h2 className='PlannerTabHeader'>Schedule for Week {viewingWeek}</h2>

            <p className='ChangeWeekInfo'>
                Use the buttons below to view the schedule for a different week.
            </p>
            <WeekSelector
                callback={changeWeek}
                seasonLength={seasonLength}
                currentWeek={currentWeek}
            />

            <LicenceFilters licenceFilters={licenceFilters} updateFilters={updateFilters} />
            <SetFavourites
                updateFavouriteCars={updateFavouriteCars}
                updateFavouriteTracks={updateFavouriteTracks}
                updateFavouriteSeries={updateFavouriteSeries}
            />
            <FavouriteFilters
                filterFavouriteCars={filterFavouriteCars}
                updateFilterFavouriteCars={updateFilterFavouriteCars}
                filterFavouriteTracks={filterFavouriteTracks}
                updateFilterFavouriteTracks={updateFilterFavouriteTracks}
                filterFavouriteSeries={filterFavouriteSeries}
                updateFilterFavouriteSeries={updateFilterFavouriteSeries}
            />
            <div className='PlannerTableContainer'>
                <SeriesTable
                    viewingWeek={viewingWeek}
                    tracks={tracks}
                    cars={cars}
                    filters={licenceFilters}
                    filterFavouriteCars={filterFavouriteCars}
                    filterFavouriteTracks={filterFavouriteTracks}
                    filterFavouriteSeries={filterFavouriteSeries}
                />
            </div>
        </div>
    );
};
export default PlannerTab;
