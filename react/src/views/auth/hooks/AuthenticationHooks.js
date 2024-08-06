// hooks/useLoginForm.js
import { useDispatch } from 'react-redux';
import { getUser } from '../../auth/actions/AuthenticationAction';
import Constants from '../../../redux/reducers/Constants';
import useSwal from '../../services/useSwal';
import { useStateContext } from '../../context/contextProvider';

const AuthenticateHooks = () => {
    const dispatch = useDispatch();
    const { setToken, setUser } = useStateContext();
    const { showMessage } = useSwal();

    const submit = async (values) => {
        console.log('Form values:', values);
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
        // dispatch({
        //     type: Constants.ACTION_AUTHENTICATION,
        //     payload: {
        //         user: {},
        //         token: '',
        //     },
        // });


        setToken(null);
        setUser(null);
    };

    return {
        submit,
        logoutSumbit,
     };
};

export default AuthenticateHooks;
