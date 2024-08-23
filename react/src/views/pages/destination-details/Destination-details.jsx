import { Box, Stack, Grid,Card,CardContent,List,ListItem,ListItemText,IconButton, Typography } from '@mui/material';
import Input from '@component/Input'
import Table from '@component/Table'
import Select from '@component/Select'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@component/Button'
import SearchField from '@component/SearchField'
import Paginations from '@component/Pagination'
import * as React from 'react';
import {connect} from "react-redux"
import { reduxForm,Field,formValueSelector } from 'redux-form'
import DestinationDetailHooks from './hooks/DestinationDetailHooks';
const form = 'DestinationDetailForm'

const DestinationDetail = (props) => {
  const { handleSubmit} = props;
  const {...ref} = DestinationDetailHooks(props)
  return (
    <React.Fragment>
      <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>Destination Details</Typography>
      <Box sx={{ width: '100%', typography: 'body1' }} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
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
                              onChange={ref.filterWarehouseAndTruck}
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <Field
                                component={Select}
                                name="warehouse_id"
                                data={ref.warehouses}
                                label="Warehouse"
                                onChange={ref.filterWarehouseAndTruck}
                              />
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <Field
                                component={Select}
                                name="destination_header_id"
                                data={ref.destinationHeaders ??[]}
                                label="Destination ( Main / Province )"
                              />
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <Field
                                component={Input}
                                name="name"
                                label="Details/ Municipality / City"
                              />
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <Field
                                component={Input}
                                name="rate"
                                type="number"
                                label="Rate"
                              />
                          </Grid>
                          {/* <Grid item container spacing={1} xs={12} md={12}>
                            <Grid item xs={12} md={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                  <Field
                                    placeholder='NAME'
                                    component={Input}
                                    name="sub_destination"
                                    type="text"
                                    value={ref.state.name}
                                    onChange={(e) => ref.handleInputChangeName(e)}
                                    variant="standard"
                                    sx={{ marginLeft: 0 }}
                                  />
                                  <Field
                                    placeholder='RATE'
                                    component={Input}
                                    name="sub_destination_rate"
                                    type="number"
                                    onChange={(e) => ref.handleInputChangeRate(e)}
                                    value={ref.state.rate}
                                    sx={{ marginLeft: 0.5 }}
                                  />
                                  <IconButton sx={{ padding: 1 }} size='small' edge="end" aria-label="add" color="secondary"  onClick={(e) => ref.addSubDestination()}>
                                    <AddCircleIcon />
                                  </IconButton>
                                </Box>
                                <List dense={true}>
                                  {ref.state.list.map((item, index) => (
                                    <ListItem 
                                      key={index}
                                      alignItems='center' 
                                      sx={{ 
                                        width: '100%', 
                                        bgcolor: 'background.paper', 
                                        borderBottom: '.2px solid #e0e0e0', 
                                      }} 
                                      disableGutters
                                      secondaryAction={
                                        <IconButton sx={{ padding: 1 }} size='small' color='secondary' edge="end" aria-label="delete" onClick={() => ref.removeSubDestination(index)}>
                                          <CancelIcon/>
                                        </IconButton>
                                      }
                                    >
                                      <ListItemText sx={{ marginLeft: 1 }}>{item.name}</ListItemText>
                                      <ListItemText sx={{ marginLeft: 1 }}>{item.rate}</ListItemText>
                                    </ListItem>
                                  ))}
                                </List>
                            </Grid>
                          </Grid> */}
                          <Box sx={{ display: 'flex' , justifyContent: 'flex-start' }} mt={3} mx={1}>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                          </Box>
                        </Grid>
                    </CardContent>
                </Card>
                </form>
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


const ReduxFormComponent =  reduxForm({
  form,
})(DestinationDetail)
const selector = formValueSelector(form);
export default connect((state) => {
  const truck = selector(state, "truck_id");
  return { truck };
})(ReduxFormComponent);