import {observable, action, computed} from 'mobx'
import {login, getUserInfo, getViewAuthority} from '../../services'
import {setToken} from '../../util/index'
import { IUser, IViewAuthority, IRouterItem } from '../../util/interface';
import menu from '../../router/menu'

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
        console.log('this.disableViewAuthority...', disableViewAuthority);
    }
}

export default User;