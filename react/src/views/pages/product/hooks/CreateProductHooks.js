import {
    getAllWarehouses,
    getAllTaxCodes,
    getAllCompanies,
    getAllForms,
} from '../actions/ProductAction'
import { postData } from '@services/ApiServices';
import React,{useState} from "react";
// import { useSearchParams } from 'react-router-dom'
import Constants from '@reducer-contant';
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';

let CreateProductHooks = (props) => {
    const dispatch          = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const warehouseList     = useSelector((state) => state.WarehouseReducer.dataList) 
    const taxCodeList       = useSelector((state) => state.TaxCodeReducer.dataList) 
    const companyList       = useSelector((state) => state.CompanyReducer.dataList) 
    const formList          = useSelector((state) => state.FormDocReducer.dataList) 
    const { showMessage }   = SweetAlert()
    const [open, setOpen]   = useState(false);
    const [isCheckAll, setIsCheckAll]   = useState(false);
    const [isCheck, setIsCheck]   = useState([]);
    const handleModalOpen   = () => {
        setSearchParams({});
        setOpen(true);
    }
    const handleModalClose  = () => {
        setSearchParams({});
        setOpen(false);
    }
    const [state, setState] = React.useState({
        filteredWarehouses: [],
        warehouses: [],
        product:{},
    });

    React.useEffect(() => {
        dispatch(getAllWarehouses())
        dispatch(getAllCompanies())
        dispatch(getAllForms())
        props.initialize({
            selected_warehouses: state.warehouses,
            selected_product: state.product
        })
    }, [])
   
    
    const selectedProduct = async (value) =>{
        
        await dispatch(change('CreateProductForm', 'selected_product', value));
         setState(prevState => ({ ...prevState, 
            product: value, 
            filteredWarehouses: warehouseList.filter(item => item.group.toLowerCase() === value.branch.toLowerCase())
        }));
        await handleModalClose()
    }

    const selectedWarehouses = async (data) =>{
        let warehouses = state.warehouses
        await warehouses.push(data)
        await dispatch(change('CreateProductForm', 'selected_warehouses', warehouses));
        await isCheck.push(data);
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

  
    const columns =  [
        { id: 'code', description: 'ITEM CODE', align: 'left' },
        { id: 'name', description: 'ITEM DESCRIPTION', align: 'left' },
        { id: 'sku', description: 'SKU', align: 'left' },
        { id: 'brand', description: 'BRAND', align: 'left' },
        { id: 'branch', description: 'BRANCH', align: 'left' },
    ]

    const submit = async (values) => {
        try {
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload:{
                    loading:true,
                }
            })
            const res = await postData('/product', values);
            showMessage(res.status, res.message);
            removeProduct()
        } catch (error) {
            showMessage('warning', error.response.data?.message);
        } finally{
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload: {
                loading: false,
            },
        });
        }
      };

    const onChangeForm = async (value) =>{
        
        const data = {
            id: value
        }

        try {
            await dispatch(getAllTaxCodes(data));
        } catch (error) {
            showMessage('warning', error);
        }
      
    }

    const onChangeAllWarehouse = async () => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(state.filteredWarehouses.map((item) => item.id));
        if (isCheckAll) {
            setIsCheck([]);
            await dispatch(change('CreateProductForm', 'selected_warehouses', []));
        }else{
            await dispatch(change('CreateProductForm', 'selected_warehouses', state.filteredWarehouses.map((item) => item.id)));
        }
    };

    return {
        isCheckAll,
        isCheck,
        columns,
        open,
        state,
        taxCodeList,
        warehouseList,
        companyList,
        formList,
        onChangeAllWarehouse,
        selectedWarehouses,
        selectedProduct,
        removeProduct,
        handleModalOpen,
        handleModalClose,
        onChangeForm,
        submit,
    }


}

export default CreateProductHooks