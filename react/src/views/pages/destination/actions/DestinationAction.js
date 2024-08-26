import {getData,getDataNoParam} from '@services/ApiServices';
import Constants from '@reducer-contant';
import { setLoadingTrue, setLoadingFalse } from '@services/Global';
export const getDestinationList = (values) => async (dispatch) => {
    try {
       
        await dispatch(setLoadingTrue())
        const res = await getData('/destination', values);
        await dispatch({
            type: Constants.ACTION_DESTINATION,
            payload: {
                dataList: res.dataList,
                dataListCount: res.total,
                currentPage: res.current_page,
                total: res.total,
                perPage: res.per_page,
                lastPage: res.last_page,
                firstPageUrl: res.first_page_url,
                nextPageUrl: res.next_page_url,
                prevPageUrl: res.prev_page_url
            },
        });
    
    } catch (error) {
        throw error.response.data?.message
    } finally{
        await dispatch(setLoadingFalse())
    }
}

export const getAllWarehouseList = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getDataNoParam('warehouse/get-all-warehouses');
        await dispatch({
            type: Constants.ACTION_WAREHOUSE,
            payload: {
                dataList: res.dataList,
                dataListCount: res.dataListCount,
            },
        });
    
    } catch (error) {
        throw error.response.data?.message
    } finally{
        await dispatch(setLoadingFalse())
    }
}


export const getAllTruckList = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getDataNoParam('truck/get-all-trucks');
        await dispatch({
            type: Constants.ACTION_TRUCK,
            payload: {
                dataList: res.dataList,
                dataListCount: res.dataListCount,
            },
        });
    
    } catch (error) {
        throw error.response.data?.message
    } finally{
        await dispatch(setLoadingFalse())
    }
}