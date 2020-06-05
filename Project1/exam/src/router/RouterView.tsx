import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import {IRouteProps} from '../util/interface'
import {getToken} from '../util/index'
import {useObserver} from 'mobx-react-lite'
import useStore from '../context/useStore';

const RouterView: React.FC<IRouteProps> = props => {
    let {user} = useStore();

    return useObserver(()=><Switch>{
        props.routes.map((item, index) => {
            // 配置重定向
            if (item.redirect){
                if (item.path === '*'){
                    return <Redirect key={item.path} to={item.redirect}></Redirect>
                }else{
                    return <Redirect key={item.path} to={item.redirect} from={item.path} exact></Redirect>
                }
            }

            // 配置路由渲染
            return <Route key={item.path} path={item.path} render={routeProps => {
                // 添加导航首位
                console.log('routeProps...', routeProps);
                let path = routeProps.location.pathname;
                // 登陆拦截
                if (!/login/.test(path)){
                    if (!getToken()){
                        routeProps.history.replace(`/login?redirect=${encodeURIComponent(path)}`);
                    }
                }else{
                    if (getToken()){
                        routeProps.history.replace(`/main/addQuestion`);
                    }
                }
                // 判断是否登陆且有用户信息
                if (getToken() && !Object.keys(user.userInfo).length){
                    user.userInfoAction();
                }

                if (item.component){
                    if (item.children) {
                        return <item.component routes={item.children} {...routeProps} />
                    } else {
                        return <item.component {...routeProps} />
                    }
                }
            }}></Route>
        }).concat(props.disable!.map((item, index)=>{
            return <Redirect key={item.path} exact from={item.path} to="/403" />
        })).concat(
            props.disable!.length?<Redirect key="404" to="/404" />:<React.Fragment key="404"></React.Fragment>
        )
    }</Switch>)
}
// 默认值
RouterView.defaultProps = {
    routes: [],
    disable: []
}

export default RouterView;