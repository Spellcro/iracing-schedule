import React from 'react';
import fullSeasonSchedule from '../../data/scheduleData';
import { ContentObject } from '../ContentTabs/contentTab';
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

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

    type Columns = {
        id: string;
        label: string;
        minWidth?: number | string;
        align?: 'left' | 'center' | 'right';
    };
    const columns: Columns[] = [
        { id: 'series', label: 'Series', minWidth: '20rem', align: 'left' },
        { id: 'licence', label: 'Licence Class', minWidth: '10rem', align: 'center' },
        { id: 'track', label: 'Track', minWidth: '15rem', align: 'left' },
    ];
    return (
        <div style={{ backgroundColor: 'white' }}>
            <TableContainer style={{ maxHeight: 600 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align='center'
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eligibleSeries.map((series, index) => {
                            const thisWeeksTrack =
                                tracks[fullSeasonSchedule[series].seriesSchedule[viewingWeek - 1]];
                            return (
                                <TableRow
                                    key={index}
                                    className={thisWeeksTrack.owned ? 'FullyEligibleContent' : ''}
                                >
                                    <TableCell key={`series+${index}`} align={columns[0].align}>
                                        {fullSeasonSchedule[series].seriesName}
                                    </TableCell>
                                    <TableCell key={`license+${index}`} align={columns[1].align}>
                                        {fullSeasonSchedule[series].licenseClass}
                                    </TableCell>
                                    <TableCell key={`track+${index}`} align={columns[2].align}>
                                        {thisWeeksTrack.name}{' '}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <Table bordered responsive className='SeriesTable'>
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
            </Table> */}
        </div>
    );
};

export default EligibleSeriesTable;
