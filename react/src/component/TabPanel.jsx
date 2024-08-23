import * as React from 'react';
import Box from '@mui/material/Box';

// Create a TabPanel component if not available
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}> 
          {children}
        </Box>
      )}
    </div>
  );
};
  

export default TabPanel