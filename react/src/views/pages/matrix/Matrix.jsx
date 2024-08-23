import { Box, Stack, Grid,Card,CardContent,List,ListItem,ListItemText,IconButton, Typography, CardHeader, TableBody,Table,TableCell,TableRow,Accordion,AccordionSummary,AccordionActions,AccordionDetails  } from '@mui/material';
import Input from '@component/Input'

import Select from '@component/Select'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@component/Button'
import SearchField from '@component/SearchField'
import Paginations from '@component/Pagination'
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { reduxForm,Field } from 'redux-form'
import MatrixHooks from './hooks/MatrixHooks';
const form = 'MatrixForm'

const Matrix = (props) => {
  const { handleSubmit} = props;
  const {...ref} = MatrixHooks(props)
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
        <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>Trucking Matrix</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} spacing={2}>
            <form autoComplete='off' onSubmit={handleSubmit(ref.submit)}>
              <Grid container direction="row" justifyContent="left" alignItems="flex-end" spacing={2}>
                  <Grid item xs={12} md={2}>
                      <Field
                          component={Select}
                          name="truck_id"
                          data={ref.trucks}
                      />
                  </Grid>
                  <Button sx={{mx:2,height:'35px'}} color="secondary" type="submit">Filter</Button>
              </Grid>
            </form>
            <Grid container spacing={2} mt={1}>
              {ref.matrixList.map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="p" >{item['warehouse_name']}</Typography>
                      <Table size="small">
                          <TableBody>
                            {item['data'].map((dataItem, dataIndex) => (
                              <TableRow key={dataIndex}> 
                                  <TableCell>
                                    <Typography variant='caption'>  {dataItem['name']}  </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography> {dataItem['rate']}  </Typography>
                                  </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
            </Grid>
        </Grid>

      </Grid>
      
      
    </React.Fragment>
  );
}

export default reduxForm({
  form
})(Matrix)