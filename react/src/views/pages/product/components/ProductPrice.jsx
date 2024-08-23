import { Box,Grid,Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import React from 'react'
import ProductPriceHooks from '../hooks/ProductPriceHooks'
import { reduxForm, Field } from 'redux-form'
import Table from '@component/Table'
import Select from '@component/Select'
import Input from '@component/Input'
import SearchField from '@component/SearchField'
import Paginations from '@component/Pagination'
import Button from '@component/Button'
const form = 'ProductPriceForm'
const ProductPrice = (props) =>{
    const { handleSubmit } = props
    const { ...ref } = ProductPriceHooks(props);
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleSubmit(ref.submit)} autoComplete='off'>
                            <Field
                                label="Price"
                                name="price"
                                component={Input}
                                type="number"
                            />
                            <Field
                                label="Type"
                                name="product_price_type_id"
                                component={Select}
                                data={ref.dataList_priceType}
                            />
                            <Button variant="contained" type="submit" size='small' sx={{ marginTop: '1rem' }}>Submit</Button>
                        </form>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} md={9}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{padding:'0px 10px 10px 0px'}}>
                        <SearchField 
                            name="search" 
                            label="Search" 
                            placeholder="Search..."
                            value={ref.search_}
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
                    />
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default reduxForm({
    form
})(ProductPrice)