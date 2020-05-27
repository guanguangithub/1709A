import React, { Fragment } from 'react'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom'
// import styles from './MyHeader.module.scss'


// 引入一级路由
import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/main/MainPage';

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

const config = {
    routes: [{
        path: '/login',
        component: LoginPage,
        meta: { show: false, title: '登陆页面' }
    }, {
        path: '/main',
        component: MainPage,
        meta: { icon: MenuFoldOutlined, title: '试题管理' },
        children: [{
            path: '/main/addQuestion',
            component: AddQuestionPage,
            meta: { title: '添加试题' }
        }, {
            path: '/main/questionTypePage',
            component: QuestionTypePage,
            meta: { title: '试题类型' }
        }, {
            path: '/main/viewQuestionPage',
            component: ViewQuestionPage,
            meta: { title: '查看试题' }
        }]
    }]
}

// // 引入路由配置表
// import routes, { allRoutes } from '../router/config';

// const allRoutes:any = [];
// console.log(allRoutes)

const showMenu = (menus: any[]) => {
    return menus.map((item) => {
        if (item.meta.show === false) {
            return null;
        }
        if (item.children) {
            return <Menu.SubMenu key={item.path} icon={item.meta.icon ? <item.meta.icon /> : null} title={item.meta.title}>{
                showMenu(item.children)
            }</Menu.SubMenu>
        } else {
            return <Menu.Item key={item.path} icon={item.meta.icon ? <item.meta.icon /> : null}>
                <Link to={item.path}>{item.meta.title}</Link>
            </Menu.Item>
        }
    })
}

console.log(showMenu(config.routes))

const MyHeader = () => {
    return <Layout.Sider collapsed={false}>
        <Menu
            defaultSelectedKeys={['/main/addQuestion']}
            defaultOpenKeys={['/main']}
            mode="inline"
            theme="dark"
        >
            {showMenu(config.routes)}
        </Menu>
    </Layout.Sider>
}

export default MyHeader;