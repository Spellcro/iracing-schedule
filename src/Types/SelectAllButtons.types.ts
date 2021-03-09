import ContentObject from './ContentObject.types';

type SelectAllButtonsProps = {
  content: ContentObject;
  contentList: string[];
  ownedContent: string[];
  updateAllItems: (
    allContent: ContentObject,
    updatedContentList: string[]
  ) => void;
};

export default SelectAllButtonsProps;
