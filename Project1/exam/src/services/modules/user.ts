import request from "../../util/request"
import { IUpdateUsr } from "../../util/interface";

// 登陆接口
export let login = (user_name: string, user_pwd: string)=>{
    return request.post('/user/login', {user_name, user_pwd});
}

// 获取用户信息接口
export let getUserInfo = ()=>{
    return request.get('/user/userInfo')
}

// 获取用户视图权限
export let getViewAuthority = ()=>{
    return request.get('/user/view_authority')
}

// 更新用户信息
export let updateUserInfo = (params: IUpdateUsr)=>{
    return request.put('/user/user', params)
}