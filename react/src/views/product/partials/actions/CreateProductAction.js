import {getDataNoParam} from '../../../services/ApiServices';
import Constants from '../../../../redux/reducers/Constants';

export const getAllWarehouses = (values) => async (dispatch) => {
    try {
       
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await getDataNoParam('/warehouses/getAllWwarehouses');
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
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload: {
              loading: false,
            },
        });
    }
}

export const getAllTaxCodes = (values) => async (dispatch) => {
    try {
       
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await getDataNoParam('/taxcodes/getAllTaxCodes');
        await dispatch({
            type: Constants.ACTION_TAXCODE,
            payload: {
                dataList: res.dataList,
                dataListCount: res.dataListCount,
            },
        });
    
    } catch (error) {
        throw error.response.data?.message
    } finally{
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload: {
              loading: false,
            },
        });
    }
}

