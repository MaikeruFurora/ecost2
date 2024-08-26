import { Box, Stack, Grid,Card,CardContent,List,ListItem,ListItemText,IconButton, Typography, TableBody,Table,TableCell,TableRow,Accordion,AccordionSummary,AccordionActions,AccordionDetails, TableHead  } from '@mui/material';
import Input from '@component/Input'
import Accordions from '@component/Accordion'
import Select from '@component/Select'
import Masonry from '@mui/lab/Masonry';
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
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
        <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>Trucking Matrix</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
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
              <Grid item xs={12} md={12}>
                {ref.matrixList.length === 0 ? (
                  <Typography variant="p" sx={{fontSize: '15px', fontWeight: 'bold'}}>No Data</Typography>
                ) : (
                  ref.matrixList.map((item, index) => (
                  <Accordions
                    key={index}
                    title={item.warehouse_name}
                    panel={item.warehouse_name}
                    expanded={expanded}
                    onChange={handleChange}
                  >
                  <Grid container spacing={2}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                        {item.data.map((item2, ii) => (
                            <TableCell key={`header-${ii}`} sx={{ fontSize: 11 }} align="left">
                              {item2.header_name}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                        {item.data.map((item2, ii) => (
                      <TableBody>
                          <TableRow key={`row-${ii}`}>
                            {item2.destination.map((item3, iii) => (
                              <TableCell
                                key={`cell-${ii}-${iii}`}
                                sx={{ fontSize: 10 }}
                                align="left"
                              >
                                {item3.name} ({item3.rate})
                              </TableCell>
                            ))}
                          </TableRow>
                      </TableBody>
                        ))}
                    </Table>
                  </Grid>
                  </Accordions>
                )))}
              </Grid>
            </Grid>

        </Grid>

      </Grid>
      
      
    </React.Fragment>
  );
}

export default reduxForm({
  form
})(Matrix)