import axios from 'axios'

const instance = axios.create({
    timeout: 3000,
    baseURL: '//123.206.55.50:7002'
    // baseURL: 'http://127.0.0.1:7002'

});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data){
        return response.data;
    }else{
        return response;
    }
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;