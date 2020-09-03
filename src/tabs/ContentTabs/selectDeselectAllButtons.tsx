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
        let selectedAllContent = { ...content };
        contentList.forEach((pieceOfContent) => {
            if (selectedAllContent[pieceOfContent].free === false) {
                selectedAllContent[pieceOfContent].owned = true;
            }
        });
        updateAllItems(selectedAllContent);
    };
    const DeselectAll = () => {
        let deselectAllContent = { ...content };
        contentList.forEach((pieceOfContent) => {
            if (deselectAllContent[pieceOfContent].free === false) {
                deselectAllContent[pieceOfContent].owned = false;
            }
        });
        updateAllItems(deselectAllContent);
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
