import React from 'react';
import fullSeasonSchedule from '../../data/scheduleData';
import { ContentObject } from '../ContentTabs/contentTab';
import { Table } from 'react-bootstrap';

type EligibleSeriesProps = {
    viewingWeek: number;
    tracks: ContentObject;
    cars: ContentObject;
};

const listOfSeries: string[] = Object.keys(fullSeasonSchedule);
const EligibleSeriesTable: React.FC<EligibleSeriesProps> = ({ viewingWeek, tracks, cars }) => {
    // Create an array of series where at least one car is owned
    const eligibleSeries = listOfSeries.filter((series) =>
        fullSeasonSchedule[series].eligibleCars.some((car) => cars[car].owned)
    );

    return (
        <div>
            <Table bordered responsive className='seriesTable'>
                <thead>
                    <tr className='PlannerTableHeader'>
                        <th>Series</th>
                        <th>License Class</th>
                        <th>Track</th>
                    </tr>
                </thead>
                <tbody>
                    {eligibleSeries.map((series) => {
                        const thisWeeksTrack =
                            tracks[fullSeasonSchedule[series].seriesSchedule[viewingWeek - 1]];
                        return (
                            <tr className={thisWeeksTrack.owned ? 'FullyEligibleContent' : ''}>
                                <td>{fullSeasonSchedule[series].seriesName}</td>
                                <td>{fullSeasonSchedule[series].licenseClass}</td>
                                <td>{thisWeeksTrack.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default EligibleSeriesTable;
