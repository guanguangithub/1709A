import React, { Fragment } from 'react'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom'
// import styles from './MyHeader.module.scss'
import { useObserver } from 'mobx-react-lite';
import useStore from '../context/useStore';

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

const MyHeader = () => {
    let {user} = useStore();

    return useObserver(()=><Layout.Sider collapsed={false}>
        <Menu
            defaultSelectedKeys={['/main/addQuestion']}
            defaultOpenKeys={['/main']}
            mode="inline"
            theme="dark"
        >
            {showMenu(user.myViewAuthority)}
        </Menu>
    </Layout.Sider>)
}

export default MyHeader;