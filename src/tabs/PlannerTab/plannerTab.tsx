import React, { useState } from 'react';
import { ContentObject } from '../ContentTabs/contentTab';
import WeekSelector from './weekSelector';
import EligibleSeriesTable from './EligibleSeries';
import GetCurrentWeek, { seasonLength } from '../../data/WeekCalculation';

// Import styles
import '../../styles/PlannerTab.css';
type PlannerTabProps = {
    tracks: ContentObject;
    cars: ContentObject;
};

const PlannerTab: React.FC<PlannerTabProps> = ({ tracks, cars }) => {
    // Get the current week
    const currentWeek = GetCurrentWeek();
    console.log(`Current week is ${currentWeek}`);
    // Create a currently viewed week state
    const [viewingWeek, setViewingWeek] = useState(currentWeek);

    // Set viewingWeek state when clicking the button.
    const ChangeWeek = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setViewingWeek(Number(e.currentTarget.value));
    };

    return (
        <div className='PlannerTabWrapper'>
            <h3 className='PlannerTabIntro'>iRacing 2020 S3 Schedule - Week {currentWeek}</h3>
            <h2 className='PlannerTabHeader'>Schedule for Week {viewingWeek}</h2>
            <p className='ChangeWeekInfo'>
                Use the buttons below to view the schedule for a different week.
            </p>
            <WeekSelector
                callback={ChangeWeek}
                seasonLength={seasonLength}
                currentWeek={currentWeek}
            />

            <div className='PlannerTableContainer'>
                <EligibleSeriesTable viewingWeek={viewingWeek} tracks={tracks} cars={cars} />
            </div>
        </div>
    );
};
export default PlannerTab;
