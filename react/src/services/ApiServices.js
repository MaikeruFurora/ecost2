import axios from "axios";
import { fetchCsrfToken } from './csrf';
import eventEmitter from './eventEmitter';
// import {useStateContext} from "./context/ContextProvider.jsx";
const SERVER_URL = import.meta.env.VITE_API_BASE_URL

const axiosInstance  = axios.create({
  baseURL: SERVER_URL,
})

let hasEmittedUnauthorized = false;

axiosInstance.interceptors.request.use(async (config) => {
  await fetchCsrfToken();
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Content-Type'] = 'application/json'
  return config;
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      
      switch (response.status) {
        case 401:
          if (response.status === 401 && !hasEmittedUnauthorized) {
            hasEmittedUnauthorized = true; // Set flag to true to prevent further emissions
            localStorage.removeItem('ACCESS_TOKEN');
            eventEmitter.emit('unauthorized');
          } else if (response.status !== 401) {
            // Reset flag if not 401 or handle other status codes
            hasEmittedUnauthorized = false;
          }
          // Redirect to login or show a login prompt
          break;
        case 404:
          // Show a user-friendly message or redirect
          break;
        case 500:
          // Handle server errors or show a generic error message
          break;
        default:
          // Handle other status codes or show a generic error
          break;
      }
    } else {
      // Handle network errors or cases where the server is unreachable
      console.error('Network error or server not reachable');
    }

    return Promise.reject(error);
  }
);

export const getData = async (url, params = {}) => {
  try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const getDataNoParam = async (url) => {
  try {
      const response = await axiosInstance.get(url);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const postData = async (url, data={}) => {
  try {
      const response = await axiosInstance.post(url, data);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const putData = async (url, data = {}) => {
  try {
      const response = await axiosInstance.put(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
  } catch (error) {
      console.error(error);
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