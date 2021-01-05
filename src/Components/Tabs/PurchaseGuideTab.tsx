import React from 'react';
import fullSeasonSchedule from '../../data/scheduleData';
import '../../styles/PurchaseGuideTab.css';
import { Checkbox, FormControl, FormGroup, FormControlLabel, Typography } from '@material-ui/core';
import { ContentObject } from '../../data/ContentData/ContentTypes';

type PurchaseGuideTabProps = {
    favouriteSeries: string[];
    useFavourites: boolean;
    useAll: boolean;
    useEligible: boolean;
    updateUseFavourites: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateUseAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updateUseEligible: (e: React.ChangeEvent<HTMLInputElement>) => void;
    trackData: ContentObject;
    carData: ContentObject;
    currentWeek: number;
};

type TrackUsageDataType = {
    [key: string]: { usage: number; series: string[] };
};

type PurchaseGuideTrackTileProps = {
    trackName: string;
    trackUsage: number;
    seriesUsage: string[];
};

const PurchaseGuideTab: React.FC<PurchaseGuideTabProps> = ({
    favouriteSeries,
    useFavourites,
    useAll,
    useEligible,
    updateUseFavourites,
    updateUseAll,
    updateUseEligible,
    trackData,
    carData,
    currentWeek,
}) => {
    const seriesList = Object.keys(fullSeasonSchedule);
    // Check for and apply filters
    const filteredSeries = useFavourites
        ? seriesList.filter((series) => favouriteSeries.indexOf(series) >= 0)
        : useEligible
        ? seriesList.filter((series) =>
              fullSeasonSchedule[series].eligibleCars.some((car) => carData[car].owned)
          )
        : [...seriesList];

    // Calculate the number of times each track is used in the current week and any future weeks
    let trackUsageData: TrackUsageDataType = {};

    const trackList = Object.keys(trackData);

    // Build up the default trackUsageData object:
    trackList.forEach((track) => {
        trackUsageData[track] = {
            usage: 0,
            series: [],
        };
    });

    // Count the number of times each track is used,
    filteredSeries.forEach((series) => {
        fullSeasonSchedule[series].seriesSchedule.forEach((track, index) => {
            // Only count the track if it exists and hasn't already passed in the schedule
            if (index >= currentWeek - 1 && track !== 'none') {
                trackUsageData[track].usage += 1;
                // Check the series is not already in the list
                if (trackUsageData[track].series.indexOf(series) === -1) {
                    trackUsageData[track].series.push(series);
                }
            }
        });
    });

    // Get a list of unowned tracks
    const unownedTracks = trackList.filter((track) => trackData[track].owned === false);

    // Order tracks by usage
    unownedTracks.sort((a, b) => trackUsageData[b].usage - trackUsageData[a].usage);
    unownedTracks.forEach((track) => {
        if (trackUsageData[track].usage !== 0) {
            console.log(`Track: ${trackData[track].name}. Usage: ${trackUsageData[track].usage}.`);
            console.log('Used in the following series:');
            trackUsageData[track].series.forEach((series) => {
                console.log(`${fullSeasonSchedule[series].name}`);
            });
        }
    });

    // Remove tracks which are not used
    let tracksToShow: string[] = [];
    unownedTracks.forEach((track) => {
        if (trackUsageData[track].usage > 0) {
            tracksToShow.push(track);
        }
    });
    return (
        <div className='purchase-guide-wrapper'>
            <h3 style={{ padding: '10px' }}>Purchase Guide</h3>
            <p>
                Use this page to see which of your unowned tracks are used the most in the current
                season. This guide does not use data for previous weeks to aid in its suggestions.
            </p>
            <div style={{ display: 'flex', height: '60px', alignItems: 'top' }}>
                <FormControl component='fieldset'>
                    <FormGroup row>
                        <FormControlLabel
                            value='use-favourites'
                            control={
                                <Checkbox
                                    color='secondary'
                                    onChange={updateUseFavourites}
                                    checked={useFavourites}
                                />
                            }
                            label={<Typography>Favourite Series Only</Typography>}
                            labelPlacement='top'
                        />
                        <FormControlLabel
                            value='use-eligible'
                            control={
                                <Checkbox
                                    color='secondary'
                                    onChange={updateUseEligible}
                                    checked={useEligible}
                                />
                            }
                            label={<Typography>Eligible Series Only</Typography>}
                            labelPlacement='top'
                        />
                        <FormControlLabel
                            value='use-all'
                            control={
                                <Checkbox
                                    color='secondary'
                                    onChange={updateUseAll}
                                    checked={useAll}
                                />
                            }
                            label={<Typography>Display All Series</Typography>}
                            labelPlacement='top'
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {tracksToShow.map((track) => {
                    return (
                        <PurchaseGuideTrackTile
                            trackName={trackData[track].name}
                            trackUsage={trackUsageData[track].usage}
                            seriesUsage={trackUsageData[track].series}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const PurchaseGuideTrackTile: React.FC<PurchaseGuideTrackTileProps> = ({
    trackName,
    trackUsage,
    seriesUsage,
}) => {
    return (
        <div className='purchase-guide-tile'>
            <h4>{`${trackName}: (${trackUsage})`}</h4>
            <p>Used in the following series:</p>
            <ul>
                {seriesUsage.map((series) => (
                    <li key={`${trackName}+${series}`}>{fullSeasonSchedule[series].name}</li>
                ))}
            </ul>
        </div>
    );
};
export default PurchaseGuideTab;
