// hooks/useLoginForm.js
import { useDispatch } from 'react-redux';
import { getUser,fetchCsrfToken } from '../../auth/actions/AuthenticationAction';
import Constants from '@reducer-contant'
import useSwal from '@services/SweetAlert';
import { useStateContext } from '@context/contextProvider';
import { useNavigate } from 'react-router-dom';
const AuthenticateHooks = () => {
    const dispatch = useDispatch();
    const { setToken, setUser } = useStateContext();
    const { showMessage } = useSwal();
    const navigate = useNavigate();

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
            showMessage('warning', error);
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
        navigate('/login');
        window.location.reload();
    };

    return {
        submit,
        logoutSumbit,
     };
};

export default AuthenticateHooks;
