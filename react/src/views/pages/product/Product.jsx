import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@component/TabPanel';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
export default function Product() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs example">
            <Tab label="Product List" value="1" />
            <Tab label="Create" value="2" />
          </Tabs>
        </Box>
        <TabPanel value={value} index="1">
            <ProductList/>
        </TabPanel>
        <TabPanel value={value} index="2">
            <CreateProduct/>
        </TabPanel>
      </Box>
    </React.Fragment>
  );
}