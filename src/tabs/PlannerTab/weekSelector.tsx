import React from 'react';
import { Button } from '@material-ui/core';
// Import styles
import '../../styles/WeekSelector.css';

type WeekSelectorProps = {
    callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    seasonLength: number;
    currentWeek: number;
};

const WeekSelector: React.FC<WeekSelectorProps> = ({ callback, seasonLength, currentWeek }) => {
    const numArray: number[] = [];
    for (let i = 1; i <= seasonLength; i++) {
        numArray[i - 1] = i;
    }
    return (
        <div className='changeWeeksContainer'>
            {numArray.map((num) => {
                return (
                    <Button
                        className='changeWeekButton'
                        value={num}
                        onClick={callback}
                        variant='contained'
                        color='default'
                        key={num}
                    >
                        {num}
                    </Button>
                );
            })}
            <Button
                className='changeWeekButton'
                value={currentWeek}
                onClick={callback}
                variant='contained'
                color='default'
            >
                Reset
            </Button>
        </div>
    );
};

export default WeekSelector;
