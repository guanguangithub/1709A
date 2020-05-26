import {observable, action, computed} from 'mobx'
import {login, getUserInfo} from '../../services'
import {setToken} from '../../util/index'
import {IUser} from '../../util/interface'

class User{
    @observable 
    isLogin: boolean = false
    @observable
    userInfo: IUser = {} as IUser

    // 请求锁
    isGetUserInfo: boolean = !!Object.keys(this.userInfo).length


    @action
    async loginAction(username: string, password: string){
        let result:any = await login(username, password);
        if (result.code === 1){
            this.isLogin = true
            setToken(result.token)
        }
        return result;
    }

    @action
    async userInfoAction(){
        if (this.isGetUserInfo === true){
            return;
        }
        this.isGetUserInfo = true;
        let result:any = await getUserInfo();
        console.log('result...', result);
        if (result.code === 1){
            this.userInfo = result.data;
        }
        this.isGetUserInfo = false;
    }
}

export default User;