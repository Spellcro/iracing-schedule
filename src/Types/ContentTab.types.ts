import ContentObject from './ContentObject.types';

type ContentTabProps = {
    content: ContentObject;
    contentList: string[];
    imageFolder: string;
    ownedContent: string[];
    updateOneItem: (pieceOfContent: string) => void;
    updateAllItems: (allContent: ContentObject, updatedContentList: string[]) => void;
};

export default ContentTabProps;
