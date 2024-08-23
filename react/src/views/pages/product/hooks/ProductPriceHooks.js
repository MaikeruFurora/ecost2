import React,{useState} from "react";
import { useSearchParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { getProductPriceLog,getPriceType } from '../actions/ProductAction'
import Constants from '@reducer-contant';
import SweetAlert from '@services/SweetAlert';
import { postData } from '@services/ApiServices';
const ProductPriceHooks = (props) =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("p")) || 1);
    const dataList          = useSelector((state) => state.ProductReducer.dataList_2);
    const dataListCount     = useSelector((state) => state.ProductReducer.dataListCount_2);
    const dataList_priceType= useSelector((state) => state.PriceTypeReducer.dataList);
    const refresh           = useSelector((state) => state.ProductReducer.refresh);
    const search            = searchParams.get("q") || "";
    const product           =  props.product.id
    const dispatch          = useDispatch();
    const { showMessage }     = SweetAlert()
    const getListParam = () => ({
        p: currentPage,
        q: search,
        i: product
    });

    const getProductPriceLogList = async () => {
        try {
            let filter = getListParam();
            await dispatch(getProductPriceLog(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        dispatch(getPriceType());
        getProductPriceLogList();
    }, [currentPage, search,,product, refresh]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({ q: search, p: page, i: product });
    };

    const onSearchChange = (event) => {
        const search = event.target.value;
        setSearchParams({ q: search, p: "1", i: product });
        setCurrentPage(1);
    };

    const columns = [
        {id:'price',  description:'PREVIOUS PRICE'},
        {id:'price_type_name', description:'PRICE TYPE'},
        {id:'created_by', description:'CREATED BY'},
        {id:'created_at', description:'CREATED AT'},
    ]
    
    const submit = async (values) => {
        const data ={
            ...values,
            product_id: props.product.id
        }
        try {
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload:{
                    loading:true,
                }
            })
            const res = await postData('product/price-update', data);
            await dispatch({
                type: Constants.ACTION_PRODUCT,
                payload:{
                    refresh:!refresh,
                }
            })
            } catch (error) {
                showMessage('error', error.response.data?.message);
            } finally{
                await dispatch({
                    type: Constants.ACTION_LOADING,
                    payload: {
                    loading: false,
                },
            });
        }
    };
    
    return {
        columns,
        search,
        dataList,
        dataListCount,
        dataList_priceType,
        submit,
        onPageChange,
        onSearchChange
        //
    }
}

export default ProductPriceHooks