import {postData} from '../../services/ApiServices';
import Constants from '../../../redux/reducers/Constants'
export const getUser = (values) => async (dispatch) => {
    try {
     
        const res = await postData('auth/login', values);

        return res;
    
    } catch (error) {
        throw error.response.data?.message
    }
}


export const resetState = async () => (
    {
        type: Constants.ACTION_WAREHOUSE,
        payload: {},
    }
)