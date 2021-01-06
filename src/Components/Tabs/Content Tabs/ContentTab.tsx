import React from 'react';
import { Img } from 'react-image';
import { Spinner } from 'react-bootstrap';
import { ContentTabWrapper } from '../../../styles/ContentTab.styles';
import SelectDeselectAllButtons from './SelectAllButtons';
// Import Types
import ContentTabProps from '../../../Types/ContentTab.types';
// Import Styles
import '../../../styles/ContentTab.css';

const ContentTab: React.FC<ContentTabProps> = ({
    content,
    contentList,
    imageFolder,
    ownedContent,
    updateOneItem,
    updateAllItems,
}) => {
    // Filter the content list to only show items which can be purchased.
    const paidContent = contentList.filter((pieceOfContent) => !content[pieceOfContent].free);
    return (
        <ContentTabWrapper>
            <SelectDeselectAllButtons
                content={content}
                contentList={paidContent}
                ownedContent={ownedContent}
                updateAllItems={updateAllItems}
            />

            {/* Create a grid of images for the content provided, not including any free content */}
            {paidContent.map((pieceOfContent) => {
                return (
                    <div
                        className={`content-image-container ${
                            content[pieceOfContent].owned ? 'owned-content' : 'unowned-content'
                        } `}
                        key={pieceOfContent}
                        onClick={() => updateOneItem(pieceOfContent)}
                    >
                        <Img
                            src={require(`../../../data/${imageFolder}/${pieceOfContent}.jpg`)}
                            alt={`${pieceOfContent}`}
                            className='content-image'
                            loader={<Spinner as='span' animation='border' variant='secondary' />}
                        />
                        <div className='content-hover-text-container'>
                            <p className='content-hover-text'>{content[pieceOfContent].name}</p>
                            <div>
                                {content[pieceOfContent].owned ? (
                                    <button className='content-hover-button'>Owned</button>
                                ) : (
                                    <button className='content-hover-button button-content-unowned'>
                                        Unowned
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </ContentTabWrapper>
    );
};

export default ContentTab;
