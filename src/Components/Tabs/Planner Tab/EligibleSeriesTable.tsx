import React from 'react';
import fullSeasonSchedule from '../../../data/scheduleData';
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import defaultCarsData from '../../../data/ContentData/carsData';
// Import Types
import EligibleSeriesTableProps from '../../../Types/EligibleSeriesTable.types';
// Import styles
import '../../../styles/EligibleSeriesTable.css';

const EligibleSeriesTable: React.FC<EligibleSeriesTableProps> = ({
    viewingWeek,
    tracks,
    seriesToDisplay,
}) => {
    type Columns = {
        id: string;
        label: string;
        width?: number | string;
        align?: 'left' | 'center' | 'right';
        fontSize?: string;
    };
    const columns: Columns[] = [
        { id: 'series', label: 'Series', width: '26%', align: 'left' },
        {
            id: 'cars',
            label: 'Eligible Cars',
            width: '36%',
            align: 'left',
            fontSize: '75%',
        },
        {
            id: 'licence',
            label: 'Licence Class',
            width: '6%',
            align: 'center',
        },

        { id: 'track', label: 'Track', width: '42%', align: 'left' },
    ];
    return (
        <TableContainer style={{ maxHeight: 600, width: '100%', margin: 'auto' }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align='center'
                                style={{
                                    width: column.width,
                                    position: 'relative',
                                }}
                            >
                                <span style={{ position: 'relative' }}>{column.label}</span>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {seriesToDisplay.map((series, index) => {
                        const thisWeeksTrack =
                            tracks[fullSeasonSchedule[series].seriesSchedule[viewingWeek - 1]];

                        // Build up a list of eligible cars for the series
                        let eligibleCars = '';
                        fullSeasonSchedule[series].eligibleCars.forEach((car) => {
                            eligibleCars += `${defaultCarsData[car].name}, `;
                        });
                        // Remove the final trailing comma
                        eligibleCars = eligibleCars.substring(0, eligibleCars.length - 2);
                        return (
                            <TableRow
                                key={index}
                                className={
                                    thisWeeksTrack.owned ? 'eligible-content' : 'ineligible-content'
                                }
                            >
                                <TableCell key={`series_${index}`} align={columns[0].align}>
                                    {fullSeasonSchedule[series].name}
                                </TableCell>
                                <TableCell
                                    key={`cars_${index}`}
                                    align={columns[0].align}
                                    style={{ fontSize: columns[1].fontSize }}
                                >
                                    {eligibleCars}
                                </TableCell>
                                <TableCell key={`licence_${index}`} align={columns[2].align}>
                                    {fullSeasonSchedule[series].licenceClass}
                                </TableCell>
                                <TableCell key={`track_${index}`} align={columns[3].align}>
                                    {thisWeeksTrack.name}{' '}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EligibleSeriesTable;
