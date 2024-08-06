import { connect, useDispatch, useSelector } from "react-redux";
import React,{useEffect} from 'react';
import Table from '../../../component/Table';
import AddIcon from '@mui/icons-material/Add';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Field, change, formValueSelector, reduxForm, reset } from "redux-form";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import searchProductFromSAPHooks from '../hooks/SearchProductFromSAPHooks';
const formName = "ProductSAPForm";

let ProductList = (props) => {
    const { ...ref} = searchProductFromSAPHooks(props);
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div className="form-control w-full sm:w-1/3 mb-2 sm:mb-0">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        value={ref.search}
                        onChange={ref.onSearchChange}
                        placeholder="Search products..."
                    />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap justify-end ">
                    <div className="join grid grid-cols-2">
                        {ref.prevPageUrl && (
                            <button
                                className="btn btn-outline mx-1"
                                onClick={() => ref.onPageChange(ref.currentPage - 1)}
                            > <NavigateBeforeIcon/> Prev </button>
                        )}
                        {ref.nextPageUrl && (
                            <button
                                className="btn btn-outline mx-1"
                                onClick={() => ref.onPageChange(ref.currentPage + 1)}
                            > Next <NavigateNextIcon/> </button>
                        )}
                    </div>
                </div>
            </div>
            <Table
                columns={ref.columns}
                dataList={ref.dataList}
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

  export default ReduxFormComponent;
// const selector = formValueSelector(formName);
// export default connect((state) => {
//     const refresh = state.ProductReducer.refresh;
//     return { refresh };
// }, {})(ReduxFormComponent);