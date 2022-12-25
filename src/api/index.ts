import axios from 'axios';
import { BASE_URL, API } from '../constants/apiConstants';

/** Request Interceptor */
axios.interceptors.request.use(
    (config) => {
        config.timeout = 60000;
        config.baseURL = BASE_URL;
        return config;
    },
    (error) => {
        console.log("client error ::: ", error);
        Promise.reject(error);
    }
);

/** Response Interceptor */
axios.interceptors.response.use(
    (response) => {
        console.log("here is the response :: ", response);
        return Promise.resolve(response.data);
    },
    (error) => {
        console.log("error.config :: ", error);
        console.log("error.response :: ", error.response);
        console.log("error.response.data :: ", error.response.data);
        return Promise.reject(error.response.data);
    }
);

export const fetchHistoryApi = () => {
    return axios.get(`${API.HISTORY}`);
};

export const fetchPayloadApi = () => {
    return axios.get(`${API.PAYLOADS}`);
};