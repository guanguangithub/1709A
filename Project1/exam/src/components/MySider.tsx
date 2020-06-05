import React from 'react'
import { Menu, Layout } from 'antd';
import { Link, useHistory } from 'react-router-dom';
// import styles from './MyHeader.module.scss'
import { useObserver } from 'mobx-react-lite';
import useStore from '../context/useStore';

const showMenu = (menus: any[]) => {
    return menus.map((item, index) => {
        if (item.meta.show === false) {
            return null;
        }
        if (item.children && item.children.length) {
            return <Menu.SubMenu key={index}  icon={item.meta.icon ? <item.meta.icon /> : null} title={item.meta.title}>{
                showMenu(item.children)
            }</Menu.SubMenu>
        } else {
            return <Menu.Item key={index} icon={item.meta.icon ? <item.meta.icon /> : null}>
                <Link to={item.path}>{item.meta.title}</Link>
            </Menu.Item>
        }
    })
}

const MyHeader = () => {
    let {user} = useStore();
    let match = useHistory().location.pathname;
    return useObserver(()=><Layout.Sider collapsed={false}>
        <Menu
            defaultSelectedKeys={[match]}
            defaultOpenKeys={[`/${match.split('/')[1]}`]}
            mode="inline"
            theme="dark"
        >
            {showMenu(user.myViewAuthority)}
        </Menu>
    </Layout.Sider>)
}

export default MyHeader;