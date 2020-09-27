import React from 'react';
import { Button } from '@material-ui/core';
import { ContentObject } from './contentTab';
import '../../styles/ContentTab.css';

type SelectDeselectAllButtonsProps = {
    content: ContentObject;
    contentList: string[];
    updateAllItems: (allContent: ContentObject) => void;
};

const SelectDeselectAllButtons: React.FC<SelectDeselectAllButtonsProps> = ({
    content,
    contentList,
    updateAllItems,
}) => {
    const SelectAll = () => {
        let updatedContent = { ...content };
        contentList.forEach((pieceOfContent) => {
            if (updatedContent[pieceOfContent].free === false) {
                updatedContent[pieceOfContent].owned = true;
            }
        });
        updateAllItems(updatedContent);
    };
    const DeselectAll = () => {
        let updatedContent = { ...content };
        contentList.forEach((pieceOfContent) => {
            if (updatedContent[pieceOfContent].free === false) {
                updatedContent[pieceOfContent].owned = false;
            }
        });
        updateAllItems(updatedContent);
    };

    return (
        <div className='SelectAllButtonContainer'>
            <Button
                onClick={SelectAll}
                className='SelectAllButton'
                variant='contained'
                color='default'
            >
                Select All
            </Button>
            <Button
                onClick={DeselectAll}
                className='SelectAllButton'
                variant='contained'
                color='default'
            >
                Deselect All
            </Button>
        </div>
    );
};

export default SelectDeselectAllButtons;
