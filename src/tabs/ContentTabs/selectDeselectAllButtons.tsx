import React from 'react';
import { Button } from '@material-ui/core';
import { ContentObject } from '../../data/ContentData/ContentTypes';
import '../../styles/ContentTab.css';

type SelectDeselectAllButtonsProps = {
    content: ContentObject;
    contentList: string[];
    ownedContent: string[];
    updateAllItems: (allContent: ContentObject, updatedContentList: string[]) => void;
};

const SelectDeselectAllButtons: React.FC<SelectDeselectAllButtonsProps> = ({
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
