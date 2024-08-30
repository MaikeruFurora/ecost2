import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import eventEmitter from '@services/eventEmitter'; // Adjust path as needed
import useSwal from '@services/SweetAlert';
import Constants from '@reducer-contant';
// Action creators for loading state
export const setLoadingTrue = () => ({
    type: Constants.ACTION_LOADING,
    payload: {
        loading: true,
    },
});
  
export const setLoadingFalse = () => ({
    type: Constants.ACTION_LOADING,
    payload: {
        loading: false,
    },
});

const { showMessage } = useSwal();
export const GlobalErrorHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnauthorized = async () => {
      const result = await showMessage('warning', 'Your session has expired. Please log in again.');
      if (result.isConfirmed) {
        localStorage.removeItem('ACCESS_TOKEN');
        navigate('/login'); // Redirect to login page
        window.location.reload();
      }
    };

    eventEmitter.on('unauthorized', handleUnauthorized);

    return () => {
      eventEmitter.off('unauthorized', handleUnauthorized); // Clean up listener
    };
  }, [navigate, showMessage]);

  return null; // This component doesn't render anything
};
