import React from 'react';
import { Img } from 'react-image';
import { Spinner } from 'react-bootstrap';
import { ContentTabWrapper } from '../../styles/ContentTab.styles';
import SelectDeselectAllButtons from './selectDeselectAllButtons';

// Import styles
import '../../styles/ContentTab.css';

export type ContentObject = {
    [key: string]: ContentDetails;
};
export type ContentDetails = {
    name: string;
    free: boolean;
    owned: boolean;
};
type ContentTabProps = {
    content: ContentObject;
    contentList: string[];
    imageFolder: string;
    ownedContent: string[];
    updateOneItem: (pieceOfContent: string) => void;
    updateAllItems: (allContent: ContentObject, updatedContentList: string[]) => void;
};

const ContentTab: React.FC<ContentTabProps> = ({
    content,
    contentList,
    imageFolder,
    ownedContent,
    updateOneItem,
    updateAllItems,
}) => {
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
                        className={`ContentImageContainer ${
                            content[pieceOfContent].owned ? 'OwnedContent' : 'UnownedContent'
                        } `}
                        key={pieceOfContent}
                        onClick={() => updateOneItem(pieceOfContent)}
                    >
                        <Img
                            src={require(`../../data/${imageFolder}/${pieceOfContent}.jpg`)}
                            alt={`${pieceOfContent}`}
                            className='ContentImage'
                            loader={<Spinner as='span' animation='border' variant='secondary' />}
                        />
                        <div className='ContentHoverTextContainer'>
                            <p className='ContentHoverText'>{content[pieceOfContent].name}</p>
                            <div>
                                {content[pieceOfContent].owned ? (
                                    <button className='ContentHoverButton'>Owned</button>
                                ) : (
                                    <button className='ContentHoverButton ButtonContentUnowned'>
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
