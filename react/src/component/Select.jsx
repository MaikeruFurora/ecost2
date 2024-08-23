import React from 'react';
import { Select as MuiSelect, MenuItem, FormControl, InputLabel, Typography, Box } from '@mui/material';

const styleSheet = {
  label: { fontSize: 14, marginTop: 1, marginBottom: 0 },
};

const CustomSelect = ({ input, meta, data,val, label, ...rest }) => {
  return (
    <Box>
      {label && (
        <Typography sx={styleSheet.label} align="left">
          {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}
        </Typography>
      )}
      <FormControl fullWidth size="small">
        {/* <InputLabel>{label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}</InputLabel> */}
        <MuiSelect
          {...input}
          {...rest}
          value={input.value || ""}
          onChange={(event) => input.onChange(event.target.value)}
          sx={{
            height:36,
            fontSize: 14,
          }}
          // onChange={onChange}
          displayEmpty
          // renderValue={(selected) => selected || <em>Please Select</em>}
        >
          <MenuItem value="" disabled>Please Select</MenuItem>
          {data.map((option, index) => (
            <MenuItem key={index} value={val=="text"?option.name:option.id}  sx={{  fontSize: 14 }}>
              {option.name}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
