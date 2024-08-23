// components/Checkbox.jsx
import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBox = ({ input, key, label, isChecked, onChangeCheck, ...rest }) => {
  return (
    <FormControlLabel
      key={key}
      control={
        <Checkbox
          {...input}
          {...rest}
          checked={isChecked}
          onChange={onChangeCheck}
          color="primary"
        />
      }
      label={
        <span style={{ fontSize: 13 }}>
          {label}
        </span>
      }
      sx={{ width: '100%' }}
    />
  );
};

export default CheckBox;
