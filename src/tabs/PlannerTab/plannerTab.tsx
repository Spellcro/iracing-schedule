import React, { useState } from 'react';
import { ContentObject } from '../ContentTabs/contentTab';
import WeekSelector from './weekSelector';
import EligibleSeriesTable from './EligibleSeries';
import GetCurrentWeek, { seasonLength } from '../../data/WeekCalculation';
import defaultTrackData from '../../data/trackData';
import defaultCarsData from '../../data/carsData';

// Import styles
import '../../styles/PlannerTab.css';
type PlannerTabProps = {
    tracks: ContentObject;
    cars: ContentObject;
};

const PlannerTab: React.FC<PlannerTabProps> = ({ tracks, cars }) => {
    // Get the current week
    const currentWeek = GetCurrentWeek();
    // Create a currently viewed week in state
    const [viewingWeek, setViewingWeek] = useState(currentWeek);
    // Changed the currently viewed week when clicking on the button.
    // const changeWeekView = (e) => {
    //     viewingWeek = e.target.value;
    // };

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
            <div className='changeWeekView'></div>
            {JSON.stringify(tracks) === JSON.stringify(defaultTrackData) &&
            JSON.stringify(cars) === JSON.stringify(defaultCarsData) ? (
                <div className='NoContentAdded'>
                    It looks like you haven't added any content yet. Please use the 'Set Cars' and
                    'Set Tracks' tabs to select your owned content.
                </div>
            ) : (
                <div className='PlannerTableContainer'>
                    <EligibleSeriesTable viewingWeek={viewingWeek} tracks={tracks} cars={cars} />
                </div>
            )}
        </div>
    );
};
export default PlannerTab;
