import React from 'react';
import { ContentObject } from '../../data/ContentData/ContentTypes';
import WeekSelector from './WeekSelector';
import SeriesTable from './SeriesTable';
import { seasonLength } from '../../data/WeekCalculation';
import LicenceFilters, { LicenceFiltersType } from './LicenceFilters';

// Import styles
import '../../styles/PlannerTab.css';

type PlannerTabProps = {
    tracks: ContentObject;
    cars: ContentObject;
    currentWeek: number;
    viewingWeek: number;
    changeWeek: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    licenceFilters: LicenceFiltersType;
    updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlannerTab: React.FC<PlannerTabProps> = ({
    tracks,
    cars,
    currentWeek,
    viewingWeek,
    changeWeek,
    licenceFilters,
    updateFilters,
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

            <div className='PlannerTableContainer'>
                <SeriesTable
                    viewingWeek={viewingWeek}
                    tracks={tracks}
                    cars={cars}
                    filters={licenceFilters}
                />
            </div>
        </div>
    );
};
export default PlannerTab;
