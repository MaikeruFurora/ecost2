import {
    getDestinationList,
    getAllWarehouseList,
    getAllTruckList
} from '../actions/DestinationAction'
import { setLoadingTrue, setLoadingFalse } from '@services/global';
import Constants from '@reducer-contant';
import { postData,putData } from '@services/ApiServices';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const DestiantionHooks = (props) =>{
    const form = 'DestinationForm'
    const dispatch      = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage]   = useState(parseInt(searchParams.get("p")) || 1);
    const search        = searchParams.get("q") || "";
    const {showMessage} = SweetAlert()
    const warehouses    = useSelector((state) => state.WarehouseReducer.dataList) 
    const trucks        = useSelector((state) => state.TruckReducer.dataList) 
    const dataList      = useSelector((state) => state.DestinationReducer.dataList);
    const dataListCount = useSelector((state) => state.DestinationReducer.dataListCount);
    const refresh       = useSelector((state) => state.DestinationReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.DestinationReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.DestinationReducer.nextPageUrl);
    const [id, setId]   = useState(null);
      const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const DestinationList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getDestinationList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        dispatch(getAllWarehouseList())
        dispatch(getAllTruckList())
        DestinationList();
       
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
        const data = {
            'name' : values.name,
            'truck_id' : values.truck_id,
            'warehouse_id' : values.warehouse_id,
        }
        try {
            await dispatch(setLoadingTrue())
            let res;
            if (id) {
                res = await putData(`destinationmain/${id}`, data);
            } else {
                res = await postData('/destinationmain', data);
            }
            await dispatch({
                type: Constants.ACTION_DESTINATION,
                    payload: {
                    refresh: !refresh,
                },
            });
            setId(null);
            dispatch(reset(form));
            showMessage(res.status, res.message);
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
        { id:'truck_name',description:'TRUCK' },
        { id:'warehouse_name',description:'WAREHOUSE' },
        { id:'name',description:'DESTINATION (MAIN / PROVINCE)' },
        { id:'created_by_name',description:'CREATED BY' },
        { id:'created_at',description:'CREATED AT' },
    ]


    return {
        form,
        dataList,
        columns,
        search,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        dataListCount,
        warehouses,
        trucks,
        submit,
        handleEdit,
        onPageChange,
        onSearchChange,
    }
}


export default DestiantionHooks;