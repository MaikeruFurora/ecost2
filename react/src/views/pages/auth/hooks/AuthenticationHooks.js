// hooks/useLoginForm.js
import { useDispatch } from 'react-redux';
import { getUser,fetchCsrfToken } from '../../auth/actions/AuthenticationAction';
import Constants from '@reducer-contant'
import useSwal from '@services/SweetAlert';
import { useStateContext } from '@context/contextProvider';
import { useEffect } from 'react';
const AuthenticateHooks = () => {
    const dispatch = useDispatch();
    const { setToken, setUser } = useStateContext();
    const { showMessage } = useSwal();


    // fetchCsrfToken()
 
    const submit = async (values) => {
        
        try {
            dispatch({
                type: Constants.ACTION_LOADING,
                payload: { loading: true },
            });

            const res = await dispatch(getUser(values));

            dispatch({
                type: Constants.ACTION_AUTHENTICATION,
                payload: {
                    user: res.user,
                    token: res.token,
                },
            });

            setToken(res.token);
            setUser(res.user);
        } catch (error) {
            showMessage('error', error);
        } finally {
            dispatch({
                type: Constants.ACTION_LOADING,
                payload: { loading: false },
            });
        }
    };

    const logoutSumbit = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('ACCESS_TOKEN');
    };

    return {
        submit,
        logoutSumbit,
     };
};

export default AuthenticateHooks;
