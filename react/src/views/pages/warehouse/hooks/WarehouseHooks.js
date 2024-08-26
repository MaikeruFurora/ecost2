import {
    getWarehouseList
} from '../actions/WarehouseAction'
import { setLoadingTrue, setLoadingFalse } from '@services/Global';
import Constants from '@reducer-contant';
import { postData,putData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const form = 'WarehouseForm'
const WarehouseHooks = (props) =>{
    const dispatch      = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage]   = useState(parseInt(searchParams.get("p")) || 1);
    const search        = searchParams.get("q") || "";
    const {showMessage} = SweetAlert()
    const dataList      = useSelector((state) => state.WarehouseReducer.dataList);
    const dataListCount = useSelector((state) => state.WarehouseReducer.dataListCount);
    const refresh       = useSelector((state) => state.WarehouseReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.WarehouseReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.WarehouseReducer.nextPageUrl);
    const [id, setId]   = useState(null);
    const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const warehouseList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getWarehouseList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        warehouseList();
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
            await dispatch(setLoadingTrue())
            let res;
            if (id) {
                res = await putData(`warehouse/${id}`, values);
            } else {
                res = await postData('/warehouse', values);
            }
            await dispatch({
                type: Constants.ACTION_WAREHOUSE,
                    payload: {
                    refresh: !refresh,
                },
            });
            setId(null);
            showMessage(res.status, res.message);
            dispatch(reset(form));
        } catch (error) {
            showMessage('warning', error.response.data?.message);
        } finally{
            await dispatch(setLoadingFalse())
        }
    };

    const handleEdit = async (data) => {
        setId(data.id);
        Object.keys(data).map(key => {
            dispatch(change(form, key, data[key]));
        })
    }

    const selectData = [
        { id: 1, name: 'MANILA' },
        { id: 2, name: 'PROVINCE' },
    ]
    
    const columns = [
        { id:'name',description:'NAME' },
        { id:'group',description:'GROUP' },
        { id:'created_by_name',description:'CREATED BY' },
        { id:'created_at',description:'CREATED AT' },
    ]

    return {
        dataList,
        columns,
        search,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        dataListCount,
        selectData,
        submit,
        handleEdit,
        onPageChange,
        onSearchChange,
    }
}


export default WarehouseHooks;