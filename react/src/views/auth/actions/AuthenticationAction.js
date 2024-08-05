import {postData} from '../../services/ApiServices';
import Constants from '../../../redux/reducers/Constants'
export const getUser = (values) => async (dispatch) => {
    try {
       
        await dispatch({
            type: Constants.ACTION_LOADING,
            payload:{
                loading:true,
            }
        })
        const res = await postData('auth/login', values);

        await dispatch({
            type: Constants.ACTION_AUTHENTICATION,
            payload: {
                user:res.user,
                token:res.token
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


export const resetState = async () => (
    {
        type: Constants.ACTION_WAREHOUSE,
        payload: {},
    }
)