import React from 'react';
import { Button as MUIButton } from '@mui/material';
import Config from '@services/Config.json';
const Button = ({
  type = 'button', 
  onClick, 
  children, 
  className = '', 
  variant = 'contained', 
  size = 'small', 
  disabled = false,
  
  sx
}) => {
  return (
    <MUIButton
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      className={className}
      color='secondary'
      sx={{
        ...sx,
        // color:'white'
        // marginTop: '0.8rem',
      }}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
