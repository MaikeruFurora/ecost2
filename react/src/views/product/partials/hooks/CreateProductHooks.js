import {
    getAllWarehouses,
    getAllTaxCodes,
    getAllCompanies,
    storeProduct,
} from '../actions/CreateProductAction'
import React,{useState} from "react";
import { useSearchParams } from 'react-router-dom'
import Constants from '../../../../redux/reducers/Constants';
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '../../../services/SweetAlert';
import { change,reset  } from 'redux-form';

let CreateProductHooks = (props) => {
    const dispatch        = useDispatch()
    const warehouseList   = useSelector((state) => state.WarehouseReducer.dataList) 
    const taxCodeList     = useSelector((state) => state.TaxCodeReducer.dataList) 
    const companyList     = useSelector((state) => state.CompanyReducer.dataList) 
    const { showMessage }     = SweetAlert()
    const [state, setState] = React.useState({
        filteredWarehouses: [],
        warehouses: [],
        product:{}
    });

    React.useEffect(() => {
        dispatch(getAllWarehouses())
        dispatch(getAllTaxCodes())
        dispatch(getAllCompanies())
        props.initialize({
            selected_warehouses: state.warehouses,
            selected_product: state.product
        })
    }, [])
   
    
    const selectedProduct = async (value) =>{
        // showMessage('success',value)
        await dispatch(change('CreateProductForm', 'selected_product', value));
         setState(prevState => ({ ...prevState, 
            product: value, 
            filteredWarehouses: warehouseList.filter(item => item.group.toLowerCase() === value.branch.toLowerCase())
        }));
    }

    const selectedWarehouses = async (data) =>{
        let warehouses = state.warehouses
        await warehouses.push(data)
        await dispatch(change('CreateProductForm', 'selected_warehouses', warehouses));
        await setState((prev) => ({ ...prev, }));
       
    }

    const removeProduct = () => {
         dispatch(reset('CreateProductForm'));
         setState({
            filteredWarehouses: [],
            warehouses: [],
            product:{}
        })
    }

    const submit = async (values) => {
        try {
            const res = await dispatch(storeProduct(values))
            showMessage(res.status,res.message)
            // removeProduct()
        } catch (error) {
            showMessage(error?.status,error?.message);
            
            // showMessage('error',error)
        }
    }
    

    return {
        state,
        taxCodeList,
        warehouseList,
        companyList,
        selectedWarehouses,
        selectedProduct,
        removeProduct,
        submit,
    }


}

export default CreateProductHooks