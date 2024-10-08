import { Box, Stack, Grid,Card,CardContent,List,ListItem,ListItemText,IconButton, Typography } from '@mui/material';
import Input from '@component/Input'
import Table from '@component/Table'
import Modal from '@component/Modal'
import Select from '@component/Select'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@component/Button'
import SearchField from '@component/SearchField'
import Paginations from '@component/Pagination'
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { reduxForm,Field } from 'redux-form'
import DestinationHooks from './hooks/DestinationHooks';
import DestinationRate from './components/DestinationRate';
const form = 'DestinationForm'

const Destination = (props) => {
  const { handleSubmit} = props;
  const {...ref} = DestinationHooks(props)
  return (
    <React.Fragment>
      <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>Destination</Typography>
      <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={2}>
                <form autoComplete='off' onSubmit={handleSubmit(ref.submit)}>
                <Card variant="outlined">
                  <CardContent>
                  <Grid container spacing={1}>
                          <Grid item xs={12} md={12}>
                            <Field
                              component={Select}
                              name="truck_id"
                              data={ref.trucks}
                              label="Truck"
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <Field
                                component={Select}
                                name="warehouse_id"
                                data={ref.warehouses}
                                label="Warehouse"
                              />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <Field
                              component={Input}
                              name="name"
                              type="text"
                              label="Destination (Header)"
                            />
                          </Grid>
                    
                          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }} mx={1} my={2}>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                          </Box>
                        </Grid>
                    </CardContent>
                </Card>
                </form>
            </Grid>
            <Grid item xs={12} md={12} lg={10}>
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
                        <>
                        <IconButton size='small' variant="text" color="secondary" sx={{padding:.2,margin:0 }} onClick={(e) => ref.handleEdit(row)}><AddCircleIcon  sx={{fontSize:20,marginRight:1 }} tooltip="Edit"/></IconButton>
                        <IconButton size='small' variant="text" color="secondary" sx={{padding:.2,margin:0 }} onClick={(e) => ref.handleModal(row)}><PlaylistAddCircleIcon  sx={{fontSize:20}} tooltip="Destianation Rate List"/></IconButton>
                      </>  
                      )
                    }}
                  />
            </Grid>
          </Grid>

          <Modal
            size="lg"
            variant="text"
            open={ref.open}
            onClose={ref.handleClose}
            title="Destination Rate List"
          >
            <DestinationRate selectedDestination={ref.destionationDetails} />
          </Modal>
    </React.Fragment>
  );
}


export default reduxForm({
  form
})(Destination)