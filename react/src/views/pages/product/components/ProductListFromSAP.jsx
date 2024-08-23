import React from 'react';
import Table from '@component/Table';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { reduxForm } from "redux-form";
import searchProductFromSAPHooks from '../hooks/SearchProductFromSAPHooks';
import Paginations from "@component/Pagination";
import { IconButton, Stack } from '@mui/material';
import SearchField from '@component/SearchField';
import Button from '@mui/material/Button';
const formName = "ProductSAPForm";

let ProductListFromSAP = (props) => {
    const { ...ref} = searchProductFromSAPHooks(props);
    return (
        <React.Fragment>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{padding:'10px 10px 10px 0px'}}>
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
                columns={ref.columns}
                dataList={ref.dataList}
                actionshow={true}
                action={(row) => {
                    return (
                        <IconButton size='small' variant="text" color="secondary" onClick={() => props.selectedProduct(row)}>
                            <AddCircleIcon sx={{fontSize:20,padding:0,margin:0}}/>
                        </IconButton>
                    )}
                }
            />
        </React.Fragment>
    );
};

const ReduxFormComponent = reduxForm({
    form: formName,
    onSubmit: '',
  })(ProductListFromSAP);

  export default ReduxFormComponent;
// const selector = formValueSelector(formName);
// export default connect((state) => {
//     const refresh = state.ProductReducer.refresh;
//     return { refresh };
// }, {})(ReduxFormComponent);