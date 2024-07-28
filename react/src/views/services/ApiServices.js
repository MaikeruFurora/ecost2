import axios from "axios";
// import {useStateContext} from "./context/ContextProvider.jsx";

const axiosInstance  = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosInstance .interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Content-Type'] = 'application/json'
  return config;
})

axiosInstance .interceptors.response.use((response) => {
    return response
  }, (error) => {
    const {response} = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN')
      // window.location.reload();
    } else if (response.status === 404) {
      //Show not found
    }

    throw error;
})

export const getData = async (url, params = {}) => {
  try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const postData = async (url, data = {}) => {
  try {
      const response = await axiosInstance.post(url, data);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const putData = async (url, data = {}) => {
  try {
      const response = await axiosInstance.put(url, data);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const delData = async (url) => {
  try {
      const response = await axiosInstance.delete(url);
      return response.data;
  } catch (error) {
      throw error;
  }
};