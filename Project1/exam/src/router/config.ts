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
  
export const allRoutes = [{
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
    meta: {icon: PieChartOutlined, title: '用户管理'},
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: {title: '添加用户'}
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: {title: '用户展示'}
    }]
}, {
    meta: {icon: AppstoreOutlined, title: '考试管理'},
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: {title: '添加考试'}
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: {title: '试卷列表'}
    }]
}, {
    meta: {icon: AppstoreOutlined, title: '班级管理'},
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: {title: '班级管理'}
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: {title: '教室管理'}
    },{
        path: '/main/viewQuestionPage',
        component: ViewQuestionPage,
        meta: {title: '学生管理'}
    }]
}, {
    meta: {icon: AppstoreOutlined, title: '阅卷管理'},
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: {title: '待批班级'}
    }]
}] 

// 格式化菜单到路由
let formatRoutes: any[]= [];
allRoutes.forEach(item=>{
    formatRoutes = [...formatRoutes, ...item.children];
})

export default {
    routes: [{
        path: '/login',
        component: LoginPage,
        meta: {show: false, title: '登陆页面'}
    }, {
        path: '/main',
        component: MainPage,
        meta: {icon: MenuFoldOutlined, title: '试题管理'},
        children: formatRoutes
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