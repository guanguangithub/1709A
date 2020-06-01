import request from "../../util/request"

// 获取用户列表
export let getUserList = ()=>{
    return request.get('/user/user');
}

// 获取身份列表
export let getIdentifyList = ()=>{
    return request.get('/user/identity');
}