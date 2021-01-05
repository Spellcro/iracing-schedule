import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

type SetFavouritesCheckboxProps = {
    item: string;
    itemType: string;
    updateFavourites: (item: string) => void;
};

const SetFavouritesCheckbox: React.FC<SetFavouritesCheckboxProps> = ({
    item,
    itemType,
    updateFavourites,
}) => {
    const favourites: string[] = JSON.parse(
        String(window.localStorage.getItem(`favourite${itemType}`))
    );
    const itemFavourited: boolean = favourites.indexOf(item) >= 0 ? true : false;
    const [checked, setChecked] = useState(itemFavourited);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFavourites(item);
        setChecked(!checked);
    };
    return <Checkbox checked={checked} onChange={handleChange} color='secondary' />;
};

export default SetFavouritesCheckbox;
