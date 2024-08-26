import {getData,getDataNoParam} from '@services/ApiServices';
import Constants from '@reducer-contant';
import { setLoadingTrue, setLoadingFalse } from '@services/Global';
export const getDestinationRateList = (values) => async (dispatch) => {
    try {
       
        await dispatch(setLoadingTrue())
        const res = await getData('/destinationrate', values);
        await dispatch({
            type: Constants.ACTION_DESTINATION_RATE,
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