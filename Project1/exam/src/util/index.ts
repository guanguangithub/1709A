import Cookie from 'js-cookie';

const key = 'authorization';
// 设置cookie
export let setToken = (value: string)=>{
    Cookie.set(key, value, {expires: new Date(+new Date + 5*60*60*1000)});
}

// 读取cookie
export let getToken = ()=>{
    return Cookie.get(key);
}

// 清空cookie
export let removeToken = ()=>{
    return Cookie.remove(key);
}