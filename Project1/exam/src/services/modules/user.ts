import request from "../../util/request"

// 登陆接口
export let login = (user_name: string, user_pwd: string)=>{
    return request.post('/user/login', {user_name, user_pwd});
}