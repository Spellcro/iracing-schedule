type SetFavouritesProps = {
  closeModal: () => void;
  openModal: () => void;
  showModal: boolean;
  updateFavourites: (item: string) => void;
};

export default SetFavouritesProps;
