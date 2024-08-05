import {
    getAllWarehouses,
    getAllTaxCodes
} from '../actions/CreateProductAction'
import React,{useRef} from "react";
import { useSearchParams } from 'react-router-dom'
import Constants from '../../../../redux/reducers/Constants';
import { useSelector,useDispatch } from 'react-redux';

const CreateProductHooks = (props) => {

    const dispatch       = useDispatch()
    const warehouseList  = useSelector((state) => state.WarehouseReducer.dataList) 
    React.useEffect(() => {
        dispatch(getAllWarehouses())
        dispatch(getAllTaxCodes())
    }, [])

    return {
        warehouseList
    }


}

export default CreateProductHooks