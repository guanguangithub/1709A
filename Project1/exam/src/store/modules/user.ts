import {observable, action} from 'mobx'
import {login, getUserInfo, getViewAuthority} from '../../services'
import {setToken, removeToken} from '../../util/index'
import { IUser, IViewAuthority } from '../../util/interface';
import menu from '../../router/menu'
import { updateUserInfo } from '../../services/modules/user';

class User{
    @observable 
    isLogin: boolean = false
    @observable
    userInfo: IUser = {} as IUser

    @observable
    myViewAuthority: any = []
    @observable
    disableViewAuthority: any = []

    // 获取用户信息请求锁
    isGetUserInfo: boolean = !!Object.keys(this.userInfo).length


    // 登陆
    @action
    async loginAction(username: string, password: string){
        let result:any = await login(username, password);
        if (result.code === 1){
            this.isLogin = true
            setToken(result.token)
        }
        return result;
    }

    // 退出登陆
    @action
    async lougoutAction(){
        removeToken();
        this.isLogin = false;
    }

    // 获取用户信息
    @action
    async userInfoAction(){
        if (this.isGetUserInfo === true){
            return;
        }
        this.isGetUserInfo = true;
        // 获取视图
        this.viewAuthorityAction();
        let result:any = await getUserInfo();
        console.log('result...', result);
        if (result.code === 1){
            this.userInfo = result.data;
        }
        this.isGetUserInfo = false;
    }

    // 获取视图权限
    @action
    async viewAuthorityAction(){
        let result:any = await getViewAuthority();
        console.log('result...', result);
        let myViewAuthority: any[] = [],
            disableViewAuthority:any[] = [];

        if (result.data && result.data.length){
             // 过滤我拥有的页面权限和没有的页面权限
            menu.forEach((item)=>{
                // 过滤我拥有的权限视图
                let children = item.children.filter(value=>result.data.findIndex((data:IViewAuthority)=>data.view_authority_text===value.meta.title) !== -1);
                if (children.length){
                    myViewAuthority.push({...item, children})
                }
                // 过滤我没拥有的权限视图
                let disableChildren = item.children.filter(value=>result.data.findIndex((data:IViewAuthority)=>data.view_authority_text===value.meta.title) === -1);
                disableViewAuthority = [...disableViewAuthority, ...disableChildren];
            })
            this.myViewAuthority = myViewAuthority;
            this.disableViewAuthority = disableViewAuthority;
        }  
    }

    // 更新头像
    @action
    async updateUserInfoAction(avatar: string){
        let result:any = await updateUserInfo({avatar, user_id: this.userInfo.user_id});
        if (result.code === 1){
            this.userInfo.avatar = avatar;
        }
    }
}

export default User;