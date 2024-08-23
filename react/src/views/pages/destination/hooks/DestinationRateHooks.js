import {
    getDestinationRateList,
} from '../actions/DestinationRateAction'
import { setLoadingTrue, setLoadingFalse } from '@services/global';
import Constants from '@reducer-contant';
import { postData,putData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const DestiantionRateHooks = (props) =>{
    const form = 'DestinationRateForm'
    const dispatch      = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage]   = useState(parseInt(searchParams.get("page")) || 1);
    const search        = searchParams.get("query") || "";
    const {showMessage} = SweetAlert()
    const dataList      = useSelector((state) => state.DestinationRateReducer.dataList);
    const dataListCount = useSelector((state) => state.DestinationRateReducer.dataListCount);
    const refresh       = useSelector((state) => state.DestinationRateReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.DestinationRateReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.DestinationRateReducer.nextPageUrl);
    const [id, setId]   = useState(null);
    const destination   = props.selectedDestination.id;

      const getListParam = () => ({
        page: currentPage,
        query: search,
        i: destination,
    });

    const DestinationList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getDestinationRateList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        DestinationList();
    }, [currentPage, search,refresh]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({ query: search, page: page, i: destination });
    };

    const onSearchChange = (event) => {
        const search = event.target.value;
        setSearchParams({ query: search, page: "1", i: destination });
        setCurrentPage(1);
    };

    const submit = async (values) => {
        const data = {
            'name' : values.name,
            'rate' : values.rate,
            'destination_id' : destination,
        }
        try {
            await dispatch(setLoadingTrue())
            let res;
            if (id) {
                res = await putData(`destinationrate/${id}`, data);
            } else {
                res = await postData('/destinationrate', data);
            }
            await dispatch({
                type: Constants.ACTION_DESTINATION_RATE,
                    payload: {
                    refresh: !refresh,
                },
            });
            setId(null);
            dispatch(reset(form));
            // showMessage(res.status, res.message);
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
        { id:'name',description:'DESTINATION (CITY/MUNICIPALITY)' },
        { id:'rate',description:'RATE' },
    ]


    return {
        open,
        form,
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


export default DestiantionRateHooks;