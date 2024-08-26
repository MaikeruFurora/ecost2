import { Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import {connect} from "react-redux"
import { reduxForm,Field,formValueSelector } from 'redux-form'
import Button from '@component/Button';
import Input from '@component/Input';
import SimpleTable from '@component/SimpleTable';
import CustomSelect from '@component/Select';
import PriceMatrixHooks from '../hooks/PriceMatrixHooks';

const form = 'PriceMatrixForm';
const PriceMatrix = (props) => {
    const { ...ref } = PriceMatrixHooks(props);
      return (
        <>
        {/* <Typography variant='p'>{props.product.name}</Typography> */}
        <Grid container spacing={2} px={1}>
            <Grid item xs={12} md={12} lg={12}>
                <Field
                    label="Company"
                    name="company_id"
                    data={ref.companyList}
                    component={CustomSelect}
                    onChange={ref.onChageParam}
                />
                <Field
                    label="Form"
                    name="form_id"
                    component={CustomSelect}
                    onChange={ref.onChangeForm}
                    data={ref.formList ?? []}
                />
                 <Field 
                    label="Tax Code"
                    name="tax_code_id"
                    component={CustomSelect}
                    onChange={ref.onChageParam}
                    data={ref.taxCodeList ?? []}
                />
            </Grid>
            <Grid item container xs={12} md={12} lg={12}>
            {ref.priceList.length > 0 && (
                <>
                <Grid item  xs={12} md={12} lg={12}>
                <SimpleTable
                    sx={{ width: '100%',marginTop:10 }}
                    columns={ref.columns}
                    data={ref.priceList}
                />
               </Grid>
               <Grid item cointaner xs={12} md={12} lg={12} container mt={1} spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item  xs={12} md={12} lg={3}>
                    <Field
                            // label="Pickup Price"
                            name="pickup_price"
                            component={Input}
                            type="number" 
                            sx={{
                                "& input": {
                                    textAlign: 'right',
                                }
                            }}
                        />
                    </Grid>
                    <Grid item  xs={12} md={12} lg={3}>
                        <Field
                            // label="Volume Price"
                            name="volume_price"
                            component={Input}
                            type="number"
                            sx={{
                                "& input": {
                                    textAlign: 'right',
                                }
                            }}
                        />
                    </Grid>
               </Grid>
              
               <Grid item  xs={12} md={12} lg={12} pt={2}>
                <Button variant="contained">Submit</Button>
               </Grid>
                </>
            )}
            </Grid>
        </Grid>
        </>
    )
    
}

const ReduxFormComponent = reduxForm({
    form,
    onSubmit: '',
  })(PriceMatrix);

const selector = formValueSelector(form);
export default connect((state) => {
    const company_id  = selector(state, "company_id");
    const form_id     = selector(state, "form_id");
    const tax_code_id = selector(state, "tax_code_id");
return { company_id,form_id,tax_code_id };
})(ReduxFormComponent);