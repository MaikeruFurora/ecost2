import {getData} from '@services/ApiServices';
import Constants from '@reducer-contant';
export const getProductFromSAP = (values) => async (dispatch) => {
    try {
       
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await getData('/product/search-product-from-SAP', values);
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
