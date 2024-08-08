import {postData, getData} from '../../services/ApiServices';
import Constants from '../../../redux/reducers/Constants'
import Cookies from "js-cookie";

export const getUser = (values) => async (dispatch) => {
    try {
     
        const res = await postData('auth/login', values);

        return res;
    
    } catch (error) {
        console.log(error);
        
        throw error.response.data?.message
    }
}

export const fetchCsrfToken = async () => {
    try {
      const response = await getData('auth/csrf-token');
      console.log(response);
      
      Cookies.set('XSRF-TOKEN', response.csrf_token);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
};


export const resetState = async () => (
    {
        type: Constants.ACTION_WAREHOUSE,
        payload: {},
    }
)