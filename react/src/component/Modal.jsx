import React from 'react';
import { Stack,Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button as MUIButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Config from '@services/Config.json';
const Modal = ({ open, onClose,variant,size='lg', buttonName, title, onButtonClick, children }) => {
  return (
    <>
      <MUIButton 
        variant={variant} 
        color='secondary'
        size='small'
        onClick={onButtonClick}
      >
        {buttonName}
      </MUIButton>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth={size}
        fullWidth
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <DialogTitle sx={{fontSize:15}}>
            {title}
          </DialogTitle>
          <IconButton 
            onClick={onClose}
            sx={{ position: 'absolute', top: 15, right: 13 }} >
            <CloseIcon fontSize='small'/>
          </IconButton>
        </Stack>
        
        <DialogContent sx={{ p: 2 }}>
          {children}
        </DialogContent>
        <DialogActions>
          {/* Add any additional actions if needed */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
