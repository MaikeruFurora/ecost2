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
    const [state, setState] = React.useState({
        warehouseList: [],
        taxCode: null,
        volumePrice: 0,
        pickupPrice: 0,
        product:{}
    });


    React.useEffect(() => {
        dispatch(getAllWarehouses())
        dispatch(getAllTaxCodes())
    }, [])

    
    const selectedProduct = (value) =>{
        setState(prevState => ({ ...prevState, product: value }));
        console.log(state);
    }

    return {
        state,
        warehouseList,
        selectedProduct
    }


}

export default CreateProductHooks