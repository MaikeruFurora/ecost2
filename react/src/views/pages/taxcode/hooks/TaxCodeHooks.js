import {
    getTaxCodeList
} from '../actions/TaxCodeAction'
import Constants from '@reducer-contant';
import { postData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const form = 'TaxCodeForm'
const TaxCodeHooks = (props) =>{
    const dispatch      = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage]   = useState(parseInt(searchParams.get("p")) || 1);
    const search        = searchParams.get("q") || "";
    const {showMessage} = SweetAlert()
    const dataList      = useSelector((state) => state.TaxCodeReducer.dataList);
    const dataListCount = useSelector((state) => state.TaxCodeReducer.dataListCount);
    const refresh       = useSelector((state) => state.TaxCodeReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.TaxCodeReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.TaxCodeReducer.nextPageUrl);
    const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const taxCodeList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getTaxCodeList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        taxCodeList();
    }, [currentPage, search,refresh]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({ q: search, p: page });
    };

    const onSearchChange = (event) => {
        const search = event.target.value;
        setSearchParams({ q: search, p: "1" });
        setCurrentPage(1);
    };


    const submit = async (values) => {
        try {
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload:{
                    loading:true,
                }
            })
            const res = await postData('/taxcode', values);
            await dispatch({
                type: Constants.ACTION_TAXCODE,
                    payload: {
                    refresh: !refresh,
                },
            });
            showMessage(res.status, res.message);
            dispatch(reset(form));
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


    
    const columns = [
        { id:'name',description:'NAME' },
        { id:'created_at',description:'CREATED AT' },
        { id:'created_by_name',description:'CREATED BY' },
    ]

    return {
        dataList,
        columns,
        search,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        dataListCount,
        submit,
        onPageChange,
        onSearchChange,
    }
}


export default TaxCodeHooks;