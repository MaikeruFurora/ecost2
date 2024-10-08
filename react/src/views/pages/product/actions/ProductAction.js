import { 
    getDataNoParam,
    getData,
    postData
} from '@services/ApiServices';
import Constants from '@reducer-contant';
import { setLoadingTrue, setLoadingFalse } from '@services/Global';

export const getAllWarehouses = (values) => async (dispatch) => {
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
        await dispatch(setLoadingFalse());
    }
}


export const getAllWarehousesBaseOnGroup = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getData('warehouse/get-all-warehouse-group', values);
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
        await dispatch(setLoadingFalse());
    }
}

export const getAllForms = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getDataNoParam('form/get-all-forms');
        await dispatch({
            type: Constants.ACTION_FORMDOC,
            payload: {
                dataList: res.dataList,
                dataListCount: res.dataListCount,
            },
        });
    
    } catch (error) {
        throw error.response.data?.message
    } finally{
        await dispatch(setLoadingFalse());
    }
}

export const getAllTaxCodes = (values) => async (dispatch) => {
    try {
       
        await dispatch(setLoadingTrue())
        const res = await getData('taxcode/get-all-tax-codes', values);
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
        await dispatch(setLoadingFalse());
    }
}

export const getAllCompanies = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getDataNoParam('company/get-all-companies');
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
        await dispatch(setLoadingFalse());
    }
}

export const storeProduct = (values) => async (dispatch) => {
    
    try {
        await dispatch(setLoadingTrue())
        const res = await postData('/product', values);
        return res;
        } catch (error) {
            throw error;
        } finally{
            await dispatch({
                type: Constants.ACTION_LOADING,
                payload: {
                  loading: false,
            },
        });
    }
}

export const getProductList = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getData('/product', values);
        await dispatch({
            type: Constants.ACTION_PRODUCT,
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
        throw error
    } finally{
        await dispatch(setLoadingFalse());
    }
}

export const getProductPriceLog = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getData('/price-log', values);
        await dispatch({
            type: Constants.ACTION_PRODUCT,
            payload: {
                dataList_2: res.dataList,
                dataListCount_2: res.total,
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
        throw error
    } finally{
        await dispatch(setLoadingFalse());
    }
}

export const getPriceType = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getDataNoParam('/product/price-type');
        await dispatch({
            type: Constants.ACTION_PRICE_TYPE,
            payload: {
                dataList: res.dataList,
                dataListCount: res.total,
            },
        });
    
    } catch (error) {
        throw error
    } finally{
        await dispatch(setLoadingFalse());
    }
}


export const getPriceList = (values) => async (dispatch) => {
    try {
        await dispatch(setLoadingTrue())
        const res = await getData('/product-pricing/get-all-price-matix', values);
        await dispatch({
            type: Constants.ACTION_PRODUCT_PRICING,
            payload: {
                dataList: res.dataList,
                dataListCount: res.total,
            },
        });    
    } catch (error) {
        throw error
    } finally{
        await dispatch(setLoadingFalse());
    }
}
