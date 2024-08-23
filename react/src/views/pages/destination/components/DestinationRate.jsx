import React from 'react'
import Input from '@component/Input'
import Table from '@component/Table'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Paginations from '@component/Pagination'
import SearchField from '@component/SearchField'
import Button from '@component/Button'
import { Grid,Card,CardContent,Stack,IconButton } from '@mui/material'
import { reduxForm,Field } from 'redux-form'
import DestinationRateHooks from '../hooks/DestinationRateHooks'
const form = "DestinationRateForm"
const DestinationRate = (props) => {
    const { handleSubmit } = props
    const { ...ref } = DestinationRateHooks(props)
    return (
       <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={3}>
                <Card variant="outlined">
                    <form onSubmit={handleSubmit(ref.submit)} autoComplete='off'>
                        <CardContent>
                            <Field
                                component={Input}
                                name="name"
                                label="Description"
                                type="text"
                                fullWidth
                            />
                            <Field
                                component={Input}
                                name="rate"
                                label="Rate"
                                type="number"
                                fullWidth
                            />
                            <Button type="submit" color="secondary" variant="contained" sx={{mt:2}}>Submit</Button>
                        </CardContent>
                    </form>
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{padding:'0px 10px 10px 0px'}}>
                  <SearchField 
                        name="search_" 
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
                    dataList = {ref.dataList}
                    columns={ref.columns}
                    actionshow={true}
                    action={(row) => {
                      return (
                        <>
                            <IconButton size='small' variant="text" color="secondary" sx={{padding:.2,margin:0 }} onClick={(e) => ref.handleEdit(row)}><AddCircleIcon  sx={{fontSize:18 }} tooltip="Edit"/></IconButton>
                        </>  
                      )
                    }}
                />
            </Grid>
        </Grid>
        </>
    )
}
export default reduxForm({
    form
})(DestinationRate)