import React from 'react';
import { Button } from 'react-bootstrap';
// Import styles
import '../../styles/weekSelector.css';

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
                        className={'changeWeekButton'}
                        value={num}
                        onClick={callback}
                        variant='warning'
                        key={num}
                    >
                        {num}
                    </Button>
                );
            })}
            <Button
                className='resetWeekButton'
                value={currentWeek}
                onClick={callback}
                variant='warning'
            >
                Reset
            </Button>
        </div>
    );
};

export default WeekSelector;
