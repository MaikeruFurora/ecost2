
// hooks/useLogin.js

import { useRef,useState } from 'react';
import { postData } from '../../services/ApiServices';
import  useSwal   from '../../services/useSwal'
import { useStateContext } from '../../context/contextProvider';

const useLogin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { setToken,setUser } = useStateContext();
  const { showMessage } = useSwal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }
    postData('/auth/login', payload).
    then((res) => { 
     try {
        showMessage(res.status,res.message)
        setUser(res.user)
        setToken(res.token)
     } catch (error) {
      console.log(error);
     }
    }).catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          showMessage("error",response.data.message)
        }
    })
    
  };

  return {
    usernameRef,
    passwordRef,
    error,
    message,
    handleSubmit
  };
};

export default useLogin;