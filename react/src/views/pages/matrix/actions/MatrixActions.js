import {getData,getDataNoParam} from '@services/ApiServices';
import Constants from '@reducer-contant';
import { setLoadingTrue, setLoadingFalse } from '@services/global';

export const getAllTruckingRates = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getDataNoParam('destinationmain/get-all-rates');
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