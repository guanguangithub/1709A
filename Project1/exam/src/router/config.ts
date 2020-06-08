import React from 'react'

// 引入一级路由
// import LoginPage from '../views/login/LoginPage';
// import MainPage from '../views/main/MainPage';
// import Page403 from '../views//403/403';
// import Page404 from '../views/404/404';

// 引入二级菜单
import { IRouterItem } from '../util/interface';

const LoginPage = React.lazy(() => import('../views/login/LoginPage'));
const MainPage = React.lazy(() => import('../views/main/MainPage'));
const Page403 = React.lazy(() => import('../views//403/403'));
const Page404 = React.lazy(() => import('../views/404/404'));

export default (myViewAuthority: IRouterItem []) => {
    // 格式化菜单到路由
    let formatRoutes: any[] = [];
    myViewAuthority.forEach((item:any) => {
        formatRoutes = [...formatRoutes, ...item.children];
    })
    return {
        routes: [{
            path: '/login',
            component: LoginPage,
        }, {
            path: '/main',
            component: MainPage,
            children: formatRoutes
        }, {
            path: '/403',
            component: Page403
        }, {
            path: '/404',
            component: Page404
        }, {
            path: '*',
            redirect: '/main/addQuestion'
        }]
    }

}