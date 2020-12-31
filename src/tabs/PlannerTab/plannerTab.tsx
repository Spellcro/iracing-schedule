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
    filterFavouriteCars: boolean;
    updateFilterFavouriteCars: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterFavouriteTracks: boolean;
    updateFilterFavouriteTracks: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    filterFavouriteCars,
    updateFilterFavouriteCars,
    filterFavouriteTracks,
    updateFilterFavouriteTracks,
}) => {
    return (
        <div className='PlannerTabWrapper'>
            <h3 className='PlannerTabIntro'>iRacing 2020 S4 Schedule - Week {currentWeek}</h3>

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
                carsList={Object.keys(cars)}
                trackList={Object.keys(tracks)}
                updateFavouriteCars={updateFavouriteCars}
                updateFavouriteTracks={updateFavouriteTracks}
            />
            <FavouriteFilters
                filterFavouriteCars={filterFavouriteCars}
                updateFilterFavouriteCars={updateFilterFavouriteCars}
                filterFavouriteTracks={filterFavouriteTracks}
                updateFilterFavouriteTracks={updateFilterFavouriteTracks}
            />
            <div className='PlannerTableContainer'>
                <SeriesTable
                    viewingWeek={viewingWeek}
                    tracks={tracks}
                    cars={cars}
                    filters={licenceFilters}
                    filterFavouriteCars={filterFavouriteCars}
                    filterFavouriteTracks={filterFavouriteTracks}
                />
            </div>
            <div aria-label='white space at bottom of page' style={{ padding: '20px' }} />
        </div>
    );
};
export default PlannerTab;
