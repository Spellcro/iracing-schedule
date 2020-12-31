import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Checkbox } from '@material-ui/core';
import carsData from '../../data/ContentData/carsData';
import trackData from '../../data/ContentData/trackData';
import seriesData from '../../data/scheduleData';

// Import Styles
import '../../styles/SetFavourites.css';

type SetFavouritesButtonProps = {
    closeModal: () => void;
    openModal: () => void;
    showModal: boolean;
    itemList: string[];
    updateFavourites: (item: string) => void;
};

const SetFavourites: React.FC<{
    updateFavouriteCars: (item: string) => void;
    updateFavouriteTracks: (item: string) => void;
    updateFavouriteSeries: (item: string) => void;
}> = ({ updateFavouriteCars, updateFavouriteTracks, updateFavouriteSeries }) => {
    const trackList = Object.keys(trackData);
    const carsList = Object.keys(carsData);
    const seriesList = Object.keys(seriesData);

    const [showFavouriteCars, setShowFavouriteCars] = useState(false);
    const [showFavouriteTracks, setShowFavouriteTracks] = useState(false);
    const [showFavouriteSeries, setShowFavouriteSeries] = useState(false);

    const closeCars = () => setShowFavouriteCars(false);
    const openCars = () => setShowFavouriteCars(true);
    const closeTracks = () => setShowFavouriteTracks(false);
    const openTracks = () => setShowFavouriteTracks(true);
    const closeSeries = () => setShowFavouriteSeries(false);
    const openSeries = () => setShowFavouriteSeries(true);

    return (
        <div className='FavouritesWrapper'>
            <SetFavouriteCars
                closeModal={closeCars}
                openModal={openCars}
                showModal={showFavouriteCars}
                itemList={carsList}
                updateFavourites={updateFavouriteCars}
            />
            <SetFavouriteTracks
                closeModal={closeTracks}
                openModal={openTracks}
                showModal={showFavouriteTracks}
                itemList={trackList}
                updateFavourites={updateFavouriteTracks}
            />
            <SetFavouriteSeries
                closeModal={closeSeries}
                openModal={openSeries}
                showModal={showFavouriteSeries}
                itemList={seriesList}
                updateFavourites={updateFavouriteSeries}
            />
        </div>
    );
};

const SetFavouriteCars: React.FC<SetFavouritesButtonProps> = ({
    closeModal,
    openModal,
    showModal,
    itemList,
    updateFavourites,
}) => {
    return (
        <>
            <Button
                className='SetFavouritesButton'
                variant='contained'
                color='default'
                onClick={openModal}
            >
                Set Favourite Cars
            </Button>
            <Dialog
                open={showModal}
                onClose={closeModal}
                aria-labelledby='favourite-cars'
                className='set-favourites-dialog'
            >
                <DialogTitle style={{ textAlign: 'center', fontSize: '30px' }}>
                    Set Favourite Cars
                </DialogTitle>
                <DialogContent>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '50% 50%',
                            textAlign: 'center',
                            columnGap: '1rem',
                        }}
                    >
                        {itemList.map((item) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        border: '2px black',

                                        marginTop: '0.4rem',
                                    }}
                                    key={`${item}DialogDiv`}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        key={`${item}DialogTextContainer`}
                                    >
                                        <div key={`${item}DialogText`}>{carsData[item].name}</div>
                                        <SetFavouriteCheckbox
                                            item={item}
                                            itemType={'Cars'}
                                            updateFavourites={updateFavourites}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

const SetFavouriteTracks: React.FC<SetFavouritesButtonProps> = ({
    closeModal,
    openModal,
    showModal,
    itemList,
    updateFavourites,
}) => {
    return (
        <>
            <Button
                className='SetFavouritesButton'
                variant='contained'
                color='default'
                onClick={openModal}
            >
                Set Favourite Tracks
            </Button>
            <Dialog
                open={showModal}
                onClose={closeModal}
                aria-labelledby='favourite-tracks'
                className='set-favourites-dialog'
            >
                <DialogTitle style={{ textAlign: 'center', fontSize: '30px' }}>
                    Set Favourite Tracks
                </DialogTitle>
                <DialogContent>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '50% 50%',
                            textAlign: 'center',
                            columnGap: '1rem',
                        }}
                    >
                        {itemList.map((item) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        border: '2px black',

                                        marginTop: '0.4rem',
                                    }}
                                    key={`${item}DialogDiv`}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        key={`${item}DialogTextContainer`}
                                    >
                                        <div key={`${item}DialogText`}>{trackData[item].name}</div>
                                        <SetFavouriteCheckbox
                                            item={item}
                                            itemType={'Tracks'}
                                            updateFavourites={updateFavourites}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

const SetFavouriteSeries: React.FC<SetFavouritesButtonProps> = ({
    closeModal,
    openModal,
    showModal,
    itemList,
    updateFavourites,
}) => {
    return (
        <>
            <Button
                className='SetFavouritesButton'
                variant='contained'
                color='default'
                onClick={openModal}
            >
                Set Favourite Series
            </Button>
            <Dialog
                open={showModal}
                onClose={closeModal}
                aria-labelledby='favourite-series'
                className='set-favourites-dialog'
            >
                <DialogTitle style={{ textAlign: 'center', fontSize: '30px' }}>
                    Set Favourite Series
                </DialogTitle>
                <DialogContent>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '50% 50%',
                            textAlign: 'center',
                            columnGap: '1rem',
                        }}
                    >
                        {itemList.map((item) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        border: '2px black',

                                        marginTop: '0.4rem',
                                    }}
                                    key={`${item}DialogDiv`}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        key={`${item}DialogTextContainer`}
                                    >
                                        <div key={`${item}DialogText`}>
                                            {seriesData[item].seriesName}
                                        </div>
                                        <SetFavouriteCheckbox
                                            item={item}
                                            itemType={'Series'}
                                            updateFavourites={updateFavourites}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

const SetFavouriteCheckbox: React.FC<{
    item: string;
    itemType: string;
    updateFavourites: (item: string) => void;
}> = ({ item, itemType, updateFavourites }) => {
    const favourites: string[] = JSON.parse(
        String(window.localStorage.getItem(`favourite${itemType}`))
    );
    const itemFavourited: boolean = favourites.indexOf(item) >= 0 ? true : false;
    const [checked, setChecked] = useState(itemFavourited);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFavourites(item);
        setChecked(!checked);
    };
    return <Checkbox checked={checked} onChange={handleChange} color='primary' />;
};

export default SetFavourites;
