import * as React from 'react';
import Table from '@component/Table';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SellIcon from '@mui/icons-material/Sell';
import SearchField from '@component/SearchField';
import Paginations from '@component/Pagination';
import Modal from '@component/Modal';
import Button from '@mui/material/Button';
import ProductHooks from '../hooks/ProductHooks'
import ProductPrice from './ProductPrice';
import { IconButton } from '@mui/material';
import PriceMatrix from './PriceMatrix';
 const ProductList = (props) => {
  const { ...ref } = ProductHooks(props);
  
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{padding:'0px 10px 10px 0px'}}>
        <SearchField 
              name="search" 
              label="Search" 
              placeholder="Search..."
              value={ref.search}
              onChange={ref.onSearchChange}
          />
          <Paginations
              page={ref.currentPage}
              limit={ref.dataListCount}
              onHandleChange={ref.onPageChange}
          />
      </Stack>
      <Table
        size="small"
        columns={ref.columns}
        dataList={ref.dataList}
        actionshow={true}
        action={(row) => {
          return (
            <>
              <IconButton size='small' variant="text" color="secondary" onClick={(e) => ref.handleOpen(row)}><AddCircleIcon  sx={{fontSize:20,padding:0,margin:0}}/></IconButton>
            </>
          )
        }}
      />

     
      <Modal
        size="sm"
        variant="text"
        open={ref.open}
        onClose={ref.handleClose}
        title="Product Price Matrix"
      >
        {/* <ProductPrice product={ref.product}/> */}
        <PriceMatrix product={ref.product}/>
      </Modal>
    </>
  );
}

export default ProductList