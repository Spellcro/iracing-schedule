import ContentObject from './ContentObject.types';
import ScheduleObject from './ScheduleObject.types';

type SetFavouritesDialogProps = {
  itemType: 'Cars' | 'Tracks' | 'Series';
  closeModal: () => void;
  openModal: () => void;
  showModal: boolean;
  itemList: string[];
  updateFavourites: (item: string) => void;
  data: ContentObject | ScheduleObject;
};

export default SetFavouritesDialogProps;
