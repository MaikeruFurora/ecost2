import {
    getFormList
} from '../actions/FormAction'
import { setLoadingTrue, setLoadingFalse } from '@services/global';
import Constants from '@reducer-contant';
import { postData,putData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const form = 'FormDocForm'
const FormHooks = (props) =>{
    const dispatch      = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage]   = useState(parseInt(searchParams.get("p")) || 1);
    const search        = searchParams.get("q") || "";
    const {showMessage} = SweetAlert()
    const dataList      = useSelector((state) => state.FormDocReducer.dataList);
    const dataListCount = useSelector((state) => state.FormDocReducer.dataListCount);
    const refresh       = useSelector((state) => state.FormDocReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.FormDocReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.FormDocReducer.nextPageUrl);
    const [id, setId]   = useState(null);
    const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const formList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getFormList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        formList();
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
            await dispatch(setLoadingTrue());
            let res;
            if (id) {
                res = await putData(`form/${id}`, values);
            } else {
                res = await postData('/form', values);
            }
            // const res = await postData('/form', values);
            await dispatch({
                type: Constants.ACTION_FORMDOC,
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
            await dispatch(setLoadingFalse());
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
        submit,
        handleEdit,
        onPageChange,
        onSearchChange,
    }
}


export default FormHooks;