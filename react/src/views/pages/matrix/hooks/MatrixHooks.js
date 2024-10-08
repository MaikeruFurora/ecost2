import {
    getAllWarehouseList,
    getAllTruckList,
    // getAllTruckingRates
} from '../actions/MatrixActions'
import { setLoadingTrue, setLoadingFalse } from '@services/Global';
import Constants from '@reducer-contant';
import { getData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const MatrixHooks = (props) =>{
    const {showMessage} = SweetAlert()
    const dispatch      = useDispatch();
    const trucks        = useSelector((state) => state.TruckReducer.dataList) 
    const matrixList    = useSelector((state) => state.DestinationReducer.dataList) 
    
    React.useEffect(() => {
        dispatch(getAllTruckList())
        // dispatch(getAllTruckingRates())
    }, []);

    const submit = async (values) => {
        try {
            await dispatch(setLoadingTrue());
            const res = await getData('/destination/trucking-matrix', values);
            await dispatch({
                type: Constants.ACTION_DESTINATION,
                    payload: {
                    dataList: res.dataList,
                },
            });
            setId(null);
            showMessage(res.status, res.message);
            dispatch(reset(form));
        } catch (error) {
            showMessage('warning', error.response.data?.message);
        } finally{
            await dispatch(setLoadingFalse());
        }
    }
    console.log(matrixList);
    

    return {
        trucks,
        matrixList,
        submit,
    }
}


export default MatrixHooks;