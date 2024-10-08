import { Box, Stack, Grid,Card,CardContent,IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Input from '@component/Input'
import Table from '@component/Table'
import Select from '@component/Select'
import Button from '@component/Button'
import SearchField from '@component/SearchField'
import Paginations from '@component/Pagination'
import * as React from 'react';
import { reduxForm,Field } from 'redux-form'
import WarehouseHooks from './hooks/WarehouseHooks';
const form = 'WarehouseForm'

const Warehouse = (props) => {
  const { handleSubmit} = props;
  const {...ref} = WarehouseHooks(props)
  return (
    <React.Fragment>
      <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>Warehouse</Typography>
      <Box sx={{ width: '100%', typography: 'body1' }} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
                <Card variant="outlined">
                  <CardContent>
                      <form autoComplete='off' onSubmit={handleSubmit(ref.submit)}>
                          <Field
                            component={Input}
                            name="name"
                            type="text"
                            label="Name"
                          />
                          <Field
                            component={Select}
                            name="group"
                            data={ref.selectData}
                            label="Group"
                            val="text"
                          />
                           <Box sx={{ display: 'flex', mt: 2 }}>
                              <Button type="submit" variant="contained" color="primary">Submit</Button>
                          </Box>
                      </form>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={10}>
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
                    dataList={ref.dataList}
                    columns={ref.columns}
                    actionshow={true}
                    action={(row) => {
                      return (
                        <IconButton size='small' variant="text" color="secondary" sx={{padding:.2,margin:0 }} onClick={(e) => ref.handleEdit(row)}><AddCircleIcon  sx={{fontSize:20}}/></IconButton>
                      )
                    }}
                  />
            </Grid>
          </Grid>
        
      </Box>
    </React.Fragment>
  );
}


export default reduxForm({
  form
})(Warehouse)