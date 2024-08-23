import { Box, Stack, Grid,Card,CardContent,Typography } from '@mui/material';
import Input from '@component/Input'
import Table from '@component/Table'
import Select from '@component/Select'
import Button from '@component/Button'
import SearchField from '@component/SearchField'
import Paginations from '@component/Pagination'
import * as React from 'react';
import { reduxForm,Field } from 'redux-form'
import TaxCodeHooks from './hooks/TaxCodeHooks';
const form = 'TaxCodeForm'

const TaxCode = (props) => {
  const { handleSubmit} = props;
  const {...ref} = TaxCodeHooks(props)
  return (
    <React.Fragment>
      <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>Tax Code</Typography>
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
                  />
            </Grid>
          </Grid>
        
      </Box>
    </React.Fragment>
  );
}


export default reduxForm({
  form
})(TaxCode)