import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Modal from '@component/Modal';
import Button from '@component/Button';
import Input from '@component/Input';
import CustomSelect from '@component/Select';
import CheckBox from '@component/CheckBox';
import TableComponent from '@component/Table';
import ProductList from './ProductListFromSAP';
import CreateProductHooks from '../hooks/CreateProductHooks';
import Grid from '@mui/material/Grid';
import { Box,Typography, Divider  } from '@mui/material';

const formName = 'CreateProductForm';

const CreateProduct = (props) => {
  const { handleSubmit} = props;
  const { ...ref } = CreateProductHooks(props);
    
  return (
    <React.Fragment>
      <Modal
        open={ref.open}
        onClose={ref.handleModalClose}
        buttonName="Search Product"
        title="Search Product"
        onButtonClick={ref.handleModalOpen}
        variant="contained"
      >
      <ProductList selectedProduct={ref.selectedProduct} />
      </Modal>
      <form onSubmit={handleSubmit(ref.submit)}>
       <Box sx={{ py: 2}}>
        <TableComponent
            size="small"
            columns={ref.columns}
            dataList={ Object.keys(ref.state.product).length === 0 ? [] : [ref.state.product]}
        />
       </Box>
        <Grid container spacing={5}>
            <Grid item xs={12} md={4} lg={2}>
                <Field 
                    name="company"
                    label="Company Supplier"
                    data={ref.companyList}
                    component={CustomSelect}
                />
               
                <Field 
                    name="form"
                    label="Form"
                    component={CustomSelect}
                    onChange={ref.onChangeForm}
                    data={ref.formList ?? []}
                />
                <Field 
                    name="tax_code"
                    label="Tax Code"
                    component={CustomSelect}
                    data={ref.taxCodeList ?? []}
                />
               
               
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
            <Field 
                    label="Pickup Price"
                    component={Input}
                    type="number"
                    name="pickup_price"
                    className="input-bordered "
                    placeholder="Pickup Price"
                />
                 <Field 
                    label="Volume Price"
                    component={Input}
                    type="number"
                    name="volume_price"
                    className="input-bordered "
                    placeholder="Volume Price"
                />
                 <Field 
                    label="Retail Price"
                    component={Input}
                    type="number"
                    name="retail_price"
                    className="input-bordered "
                    placeholder="Retail Price"
                />
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
            <Box sx={{ marginTop: 2 }}>
                <Typography sx={{paddingBottom : .5,fontSize: 15 }}>Warehouses</Typography>
                    <Divider/>
                    {ref.state.filteredWarehouses.length > 0 && (
                        <Field 
                            label="ALL WAREHOUSE"
                            component={CheckBox}
                            value="all"
                            name="all_warehouse"
                            isChecked={ref.isCheckAll}
                            onChangeCheck={(e) => {ref.onChangeAllWarehouse(e)}}
                        />
                    )}
                    {ref.state.filteredWarehouses.length > 0 ? (
                        <Grid container>
                            {ref.state.filteredWarehouses.map((warehouse) => (
                                 <Grid item xs={1} md={3}>
                                    <Field 
                                        label={warehouse.name}
                                        component={CheckBox}
                                        key={warehouse.id}
                                        value={warehouse.id}
                                        name="warehouses"
                                        isChecked={ref.isCheck.includes(warehouse.id)}
                                        onChangeCheck={(e) => {ref.selectedWarehouses(warehouse.id)}}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                            <Typography sx={{padding : 2 }}>No Warehouse Found</Typography>
                        </Box>
                    )}
                </Box>
            </Grid>
           
        </Grid>
        <Box sx={{ display: 'flex', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
        </form>
    </React.Fragment>
  );
};

export default reduxForm({
  form: formName,
})(CreateProduct);
