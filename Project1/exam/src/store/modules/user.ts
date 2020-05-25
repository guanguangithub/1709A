import {observable, action, computed} from 'mobx'
import {login} from '../../services'
import {setToken} from '../../util/index'

class User{
    @observable 
    isLogin: boolean = false


    @action
    async loginAction(username: string, password: string){
        let result:any = await login(username, password);
        console.log('result...', result);
        if (result.code === 1){
            this.isLogin = true
            setToken(result.token)
        }
        return result;
    }
}

export default User;