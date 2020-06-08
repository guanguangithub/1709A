import axios from 'axios'
import {getToken} from '../util/index'
import { message } from 'antd'

console.log(process.env);
const instance = axios.create({
    timeout: 3000,
    // baseURL: '//123.206.55.50:7002'
    // baseURL: /jasonandjay.com/.test(window.location.host)?'//123.206.55.50:7002': '//127.0.0.1:7002',
    baseURL: process.env.NODE_ENV === 'production'?'//exam.jasonandjay.com': '//123.206.55.50:7002',
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // 添加登陆态
    let token = getToken();
    if (token){
        config.headers['authorization'] = token;
    }
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

    // 处理业务逻辑错误
    if (response.status !== 200){
        message.warn(response.statusText);
        return {};
    }else if(response.data && response.data.code !== 1){
        message.warn(response.data.msg);;
        return {}
    }

    if (response.data){
        return response.data;
    }else{
        return response;
    }
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error);
    // 处理网络请求错误
    message.error(error.toString());
    return Promise.resolve({});
});

export default instance;