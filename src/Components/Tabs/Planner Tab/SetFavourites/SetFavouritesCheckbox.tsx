import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';
// Import Types
import SetFavouritesCheckboxProps from '../../../../Types/SetFavouritesCheckbox.types';

const SetFavouritesCheckbox: React.FC<SetFavouritesCheckboxProps> = ({
  item,
  itemType,
  updateFavourites
}) => {
  const favourites: string[] = JSON.parse(
    String(window.localStorage.getItem(`favourite${itemType}`))
  );
  const itemFavourited: boolean = favourites.indexOf(item) >= 0;
  const [checked, setChecked] = useState(itemFavourited);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFavourites(item);
    setChecked(!checked);
  };
  return (
    <Checkbox checked={checked} onChange={handleChange} color="secondary" />
  );
};

export default SetFavouritesCheckbox;
