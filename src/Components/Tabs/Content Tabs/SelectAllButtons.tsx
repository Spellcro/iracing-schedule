import React from 'react';
import { Button } from '@material-ui/core';
// Import Types
import SelectAllButtonsProps from '../../../Types/SelectAllButtons.types';
// Import Styles
import '../../../styles/SelectAllButtons.css';

const SelectAllButtons: React.FC<SelectAllButtonsProps> = ({
    content,
    contentList,
    ownedContent,
    updateAllItems,
}) => {
    const SelectAll = () => {
        let updatedContentObject = { ...content };
        let updatedContentArray = [...ownedContent];
        contentList.forEach((pieceOfContent) => {
            if (updatedContentObject[pieceOfContent].free === false) {
                updatedContentObject[pieceOfContent].owned = true;

                if (updatedContentArray.indexOf(pieceOfContent) === -1) {
                    updatedContentArray.push(pieceOfContent);
                }
            }
        });

        updateAllItems(updatedContentObject, updatedContentArray);
    };
    const DeselectAll = () => {
        let updatedContent = { ...content };

        contentList.forEach((pieceOfContent) => {
            if (updatedContent[pieceOfContent].free === false) {
                updatedContent[pieceOfContent].owned = false;
            }
        });
        updateAllItems(updatedContent, []);
    };

    return (
        <div className='select-all-button-container'>
            <Button
                onClick={SelectAll}
                className='select-all-button'
                variant='contained'
                color='default'
            >
                Select All
            </Button>
            <Button
                onClick={DeselectAll}
                className='select-all-button'
                variant='contained'
                color='default'
            >
                Deselect All
            </Button>
        </div>
    );
};

export default SelectAllButtons;
