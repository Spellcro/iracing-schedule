import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormGroup,
  FormControlLabel,
  FormControl,
  Typography
} from '@material-ui/core';
import SetFavouritesCheckbox from './SetFavouritesCheckbox';
// Import Types
import SetFavouritesDialogProps from '../../../../Types/SetFavouritesDialog.types';

const SetFavouritesDialog: React.FC<SetFavouritesDialogProps> = ({
  itemType,
  closeModal,
  openModal,
  showModal,
  itemList,
  updateFavourites,
  data
}) => {
  return (
    <>
      <Button
        className="set-favourites-button"
        variant="contained"
        color="default"
        onClick={openModal}
      >
        Set Favourite {itemType}
      </Button>
      <Dialog
        open={showModal}
        onClose={closeModal}
        aria-labelledby={`favourite-${itemType.toLowerCase()}`}
        className="set-favourites-dialog"
      >
        <DialogTitle style={{ textAlign: 'center', fontSize: '30px' }}>
          Favourite {itemType}
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              textAlign: 'center',
              columnGap: '1rem',
              maxHeight: '1200px'
            }}
          >
            {itemList.map((item) => {
              return (
                <FormControl component="fieldset">
                  <FormGroup row>
                    <FormControlLabel
                      value={item}
                      control={
                        <SetFavouritesCheckbox
                          item={item}
                          itemType={'Series'}
                          updateFavourites={updateFavourites}
                        />
                      }
                      label={
                        <Typography style={{ fontSize: 'small' }}>
                          {data[item].name}
                        </Typography>
                      }
                      labelPlacement="start"
                    />
                  </FormGroup>
                </FormControl>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SetFavouritesDialog;
