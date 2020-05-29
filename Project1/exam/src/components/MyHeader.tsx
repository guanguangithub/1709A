import React, { Fragment } from 'react'
import styles from './MyHeader.module.scss'
import { Menu, Dropdown,Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const MyHeader = () => {
    const menu = <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                个人中心
        </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                我的班级
        </a>
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item key="2">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                设置
        </a>
        </Menu.Item>

        <Menu.Item key="3">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                退出登陆
        </a>
        </Menu.Item>
    </Menu>;

    return <Fragment>
        <img className={styles.logo} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        <Dropdown overlay={menu}>
            <div>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span>chenmanjie<DownOutlined/></span>
            </div>
        </Dropdown>
    </Fragment>
}

export default MyHeader;