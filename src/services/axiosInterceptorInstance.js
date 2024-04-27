import axios from 'axios';
import {baseUrlApp} from '../constants';
import {ApiKey} from '../constants/ApiKey';

const axiosInterceptorInstance = axios.create({
  baseURL: baseUrlApp, 
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  async config => {
    config.params = {...config.params, api_key: ApiKey};

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInterceptorInstance;
