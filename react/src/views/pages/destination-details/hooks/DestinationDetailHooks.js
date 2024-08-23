import {
    getDestinationMainList,
    getDestinationDetailList,
    getAllWarehouseList,
    getAllTruckList,
    getDestinationList,
} from '../actions/DestinationDetailAction'
import Constants from '@reducer-contant';
import { postData,putData } from '@services/ApiServices';
import { setLoadingTrue, setLoadingFalse } from '@services/global';
import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import SweetAlert from '@services/SweetAlert';
import { change,reset  } from 'redux-form';
import { useSearchParams } from 'react-router-dom';
const DestinationDetailHooks = (props) =>{
    const form = 'DestinationDetailForm'
    const dispatch      = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage]   = useState(parseInt(searchParams.get("p")) || 1);
    const search        = searchParams.get("q") || "";
    const {showMessage} = SweetAlert()
    const warehouses    = useSelector((state) => state.WarehouseReducer.dataList) 
    const trucks        = useSelector((state) => state.TruckReducer.dataList) 
    const dataList      = useSelector((state) => state.DestinationDetailReducer.dataList) 
    const destinationHeaders= useSelector((state) => state.DestinationDetailReducer.dataList_2) 
    const dataListCount = useSelector((state) => state.DestinationDetailReducer.dataListCount);
    const refresh       = useSelector((state) => state.DestinationDetailReducer.refresh);
    const prevPageUrl   = useSelector((state) => state.DestinationDetailReducer.prevPageUrl);
    const nextPageUrl   = useSelector((state) => state.DestinationDetailReducer.nextPageUrl);
    const [id, setId]   = useState(null);
    const [state, setState] = React.useState({
       list: [],
       name: null,
       rate: 0,
    });
    const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const destinationList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getDestinationDetailList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        destinationList();
        dispatch(getDestinationMainList())
        dispatch(getAllWarehouseList())
        dispatch(getAllTruckList())
        props.initialize({
            list: [],
        })
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
                res = await putData(`/destinationdetail/${id}`, values);
            } else {
                res = await postData('/destinationdetail', values);
            }
            // const res = await postData('/destinationdetail', values);
            await dispatch({
                type: Constants.ACTION_DESTINATION_DETAIL,
                payload: {
                    refresh: !refresh,
                },
            });
            setId(null);
            showMessage(res.status, res.message);
            dispatch(reset(form));
            setState((prevState) => ({
                ...prevState,
                name: "", 
                rate: "", 
                list: [],
            }));
        } catch (error) {
            showMessage('error', error.response.data?.message);
        } finally{
            await dispatch(setLoadingFalse())
        }
      };

    const handleInputChangeName = (e) => {
        setState({ ...state,name: e.target.value });
    };
    
    const handleInputChangeRate = (e) => {
        setState({ ...state,rate: e.target.value });
    };
    
    const columns = [   
        { id:'truck_name',description:'TRUCK' },
        { id:'warehouse_name',description:'WAREHOUSE' },
        { id:'header_name',description:'DESTINATION (MAIN/PROVINCE)' },
        { id:'name',description:'SUB DESTINATION (CITY/MUNICIPALITY)' },
        { id:'rate',description:'RATE' },
    ]

    const addSubDestination = () => {
        if (state.name.trim()) {
            const updatedList = [
                ...state.list,
                {
                    name: state.name.toUpperCase(),
                    rate: state.rate,
                },
            ];
            setState((prevState) => ({
                ...prevState,
                name: "", 
                rate: "", 
                list: updatedList,
            }));
            dispatch(change(form, 'list', updatedList));
            dispatch(change(form, 'sub_destination', ''));
            dispatch(change(form, 'sub_destination_rate', ''));
        }
    };

    const removeSubDestination = (index) => {
        const newSubDestinationList = [...state.list];
        newSubDestinationList.splice(index, 1);
        setState({
            ...state,
           list: newSubDestinationList,
        });
    };

    const handleEdit = async (data) => {
        setId(data.id);
        Object.keys(data).map(key => {
            dispatch(change(form, key, data[key]));
        })
    }

    const filterWarehouseAndTruck = async (value) => {
        await dispatch(getDestinationList({ warehouse_id: value, truck_id: props.truck })) 
    }

    return {
        form,
        state,
        dataList,
        columns,
        search,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        dataListCount,
        warehouses,
        trucks,
        destinationHeaders,
        submit,
        handleEdit,
        removeSubDestination ,
        addSubDestination,
        handleInputChangeName,
        handleInputChangeRate,
        onPageChange,
        onSearchChange,
        filterWarehouseAndTruck,
    }
}


export default DestinationDetailHooks;