import {
    getTruckTypeList
} from '../actions/TruckAction'
import Constants from '@reducer-contant';
import { setLoadingTrue, setLoadingFalse } from '@services/global';
import { postData,putData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const form = 'TruckTypeForm'
const TruckHooks = (props) =>{
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("p")) || 1);
    const search        = searchParams.get("q") || "";
    const {showMessage} = SweetAlert()
    const dataList      = useSelector((state) => state.TruckReducer.dataList);
    const dataListCount = useSelector((state) => state.TruckReducer.dataListCount);
    const refresh       = useSelector((state) => state.TruckReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.TruckReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.TruckReducer.nextPageUrl);
    const [id, setId]   = useState(null);
    const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const getTruckList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getTruckTypeList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        getTruckList();
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
                res = await putData(`truck/${id}`, values);
            } else {
                res = await postData('/truck', values);
            }
            await dispatch({
                type: Constants.ACTION_TRUCK,
                    payload: {
                    refresh: !refresh,
                },
            });
            setId(null);
            showMessage(res.status, res.message);
            dispatch(reset(form));
        } catch (error) {
            showMessage('error', error.response.data?.message);
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
   
    
    const columns = [
        { id:'name',description:'NAME' },
        { id:'capacity',description:'CAPACITY' },
        { id:'created_by_name',description:'CREATED BY' },
        { id:'created_at',description:'CREATED AT' },
    ]

    return {
        submit,
        dataList,
        dataListCount,
        columns,
        search,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        dataListCount,
        handleEdit,
        onPageChange,
        onSearchChange,
    }
}


export default TruckHooks;