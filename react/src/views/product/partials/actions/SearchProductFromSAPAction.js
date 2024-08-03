import {getData} from '../../../services/ApiServices';
import Constants from '../../../../redux/reducers/Constants';

export const getProductFromSAP = (values) => async (dispatch) => {
    try {
       
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await getData('/products/searchProductFromSAP', values);
        await dispatch({
            type: Constants.ACTION_PRODUCT,
            payload: {
                data: res.data,
                currentPage: res.current_page,
                total: res.total,
                perPage: res.per_page,
                lastPage: res.last_page,
                firstPageUrl: res.first_page_url,
                nextPageUrl: res.next_page_url,
                prevPageUrl: res.prev_page_url
            },
        });
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload: {
              loading: false,
            },
        });
    } catch (error) {
        
        console.log(error);
    } 
}
