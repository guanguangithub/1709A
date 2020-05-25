// 引入一级路由
import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/main/MainPage';
import Page403 from '../views//403/403';
import Page404 from '../views/404/404';


// 引入二级
import AddQuestionPage from '../views/main/question/AddQuestionPage';
import QuestionTypePage from '../views/main/question/QuestionTypePage';
import ViewQuestionPage from '../views/main/question/ViewQuestionPage';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
  
  

export default {
    routes: [{
        path: '/login',
        component: LoginPage,
        meta: {show: false, title: '登陆页面'}
    }, {
        path: '/main',
        component: MainPage,
        meta: {icon: MenuFoldOutlined, title: '试题管理'},
        children: [{
            path: '/main/addQuestion',
            component: AddQuestionPage,
            meta: {title: '添加试题'}
        }, {
            path: '/main/questionTypePage',
            component: QuestionTypePage,
            meta: {title: '试题类型'}
        }, {
            path: '/main/viewQuestionPage',
            component: ViewQuestionPage,
            meta: {title: '查看试题'}
        }]
    }, {
        path: '/403',
        component: Page403
    }, {
        path: '/404',
        component: Page404
    }, {
        path: '*',
        redirect: '/main'
    }]
}