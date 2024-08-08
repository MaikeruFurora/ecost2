import { 
    getDataNoParam,
    postData
} from '../../../services/ApiServices';
import Constants from '../../../../redux/reducers/Constants';

export const getAllWarehouses = (values) => async (dispatch) => {
    try {
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await getDataNoParam('warehouses/getAllWwarehouses');
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
        const res = await getDataNoParam('taxcodes/getAllTaxCodes');
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

export const getAllCompanies = (values) => async (dispatch) => {
    try {
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await getDataNoParam('companies/getAllCompanies');
        await dispatch({
            type: Constants.ACTION_COMPANY,
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

export const storeProduct = (values) => async (dispatch) => {
    
        try {
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload:{
                    loading:true,
                }
            })
            const res = await postData('/products', values);
            
            return res;

        } catch (error) {
            let err = error?.response
            throw err?.data
        } finally{
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload: {
                  loading: false,
            },
        });
    }
}


