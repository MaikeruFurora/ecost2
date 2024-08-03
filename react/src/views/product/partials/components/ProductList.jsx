import { connect, useDispatch, useSelector } from "react-redux";
import React from 'react';
import Table from '../../../component/Table';
import AddIcon from '@mui/icons-material/Add';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Field, change, formValueSelector, reduxForm, reset } from "redux-form";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import searchProductFromSAPHooks from '../hooks/SearchProductFromSAPHooks';
import Loading from "../../../component/Loading";
const formName = "ProductSAPForm";

let ProductList = (props) => {
    const { ...reference} = searchProductFromSAPHooks(props);
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div className="form-control w-full sm:w-1/3 mb-2 sm:mb-0">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        value={reference.search}
                        onChange={reference.onSearchChange}
                        placeholder="Search products..."
                    />
                </div>
                <div className=" flex flex-wrap sm:flex-nowrap space-x-2">
                    <div className="join grid grid-cols-2">
                        {reference.prevPageUrl && (
                            <button
                                className="btn btn-outline mx-1"
                                onClick={() => reference.onPageChange(currentPage - 1)}
                            > <NavigateBeforeIcon/> Previous </button>
                        )}
                        {reference.nextPageUrl && (
                            <button
                                className="btn btn-outline mx-1"
                                onClick={() => reference.onPageChange(currentPage + 1)}
                            > Next <NavigateNextIcon/> </button>
                        )}
                    </div>
                </div>
            </div>
            <Table
                columns={reference.columns}
                dataList={reference.data}
                actionshow={true}
                action={(row) => {
                    return (
                        <button className='btn btn-default btn-sm m-0' style={{fontSize:'10px'}} onClick={() => reference.onGetSelectedData(row)}><AddIcon/></button>
                    )}
                }
            />
        </>
    );
};

const ReduxFormComponent = reduxForm({
    form: formName,
    onSubmit: '',
  })(ProductList);
const selector = formValueSelector(formName);
export default connect((state) => {
    const refresh = state.ProductReducer.refresh;
    return { refresh };
}, {})(ReduxFormComponent);
