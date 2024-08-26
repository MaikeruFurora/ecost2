import {
    getAllWarehousesBaseOnGroup,
    getAllTaxCodes,
    getAllCompanies,
    getAllForms,
    getPriceList,
} from '../actions/ProductAction'
import Constants from '@reducer-contant';
import React,{useState} from "react";
import { useSearchParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { change,reset  } from 'redux-form';
import SweetAlert from '@services/SweetAlert';
import { setLoadingTrue, setLoadingFalse } from '@services/Global';
const form = 'PriceMatrixForm';
const PriceMatrixHooks = (props) =>{

    const dispatch = useDispatch();
    const {showMessage} = SweetAlert
    const [searchParams] = useSearchParams();
    const [search] = useState(searchParams.get('search') ? searchParams.get('search') : '');
    const warehouseList  = useSelector((state) => state.WarehouseReducer.dataList) 
    const taxCodeList    = useSelector((state) => state.TaxCodeReducer.dataList) 
    const companyList    = useSelector((state) => state.CompanyReducer.dataList) 
    const formList       = useSelector((state) => state.FormDocReducer.dataList) 
    const refresh        = useSelector((state) => state.LoadingReducer.refresh) 
    const priceList      = useSelector((state) => state.ProductPricingReducer.dataList) 
    const product        = props.product
    const setProducPricing = () =>({
        type: Constants.ACTION_PRODUCT_PRICING,
        payload: {
            dataList: [],
            dataListCount: [],
        },
    })
    

    const getListParam = () => ({
        group: product.group,
    })

    const getAllWarehouses = async () => {
        try {
            let filter = getListParam();
            await dispatch(getAllWarehousesBaseOnGroup(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };
    
    React.useEffect(() => {
        getAllWarehouses()
        dispatch(getAllCompanies())
        dispatch(getAllForms())
        dispatch(setProducPricing()); 
    }, [refresh])

    const onChangeForm = async (value) =>{
        
        const data = {
            id: value
        }

        try {
            // await(onChageParam(values))
            await dispatch(change(form, 'tax_code_id', ''))
            await dispatch(getAllTaxCodes(data));
            await dispatch(setProducPricing()); 
        } catch (error) {
            showMessage('warning', error);
        }
      
    }

    const onChageParam = async (value) =>{
        
        const values = {
            tax_code_id : value,
            product_id  : props.product.id,
            form_id     : props.form_id,
            company_id  : props.company_id,
            group       : props.product.group,
        }  
        await dispatch(setProducPricing()); 
        await dispatch(getPriceList(values))
    }

    
    // selectedProduct(product)

    const submit = async (values) => {
        try {
            await dispatch(setLoadingTrue())
            const res = await postData('/product', values);
            showMessage(res.status, res.message);
        } catch (error) {
            showMessage('warning', error.response.data?.message);
        } finally{
            await dispatch(setLoadingFalse())
        }
      };

        const columns = [
            { id: 'warehouse_name', label: 'WAREHOUSE' },
            { id: 'pickup_price', label: 'PUP PRICE',  },
            { id: 'volume_price', label: 'VOL PRICE',  },
        ];


    return {
        columns,
        taxCodeList,
        warehouseList,
        companyList,
        formList,
        priceList,
        onChangeForm,
        onChageParam,
        submit,
    }
}

export default PriceMatrixHooks