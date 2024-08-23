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