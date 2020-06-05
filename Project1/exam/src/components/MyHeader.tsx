import React, { Fragment } from 'react'
import styles from './MyHeader.module.scss'
import { Menu, Dropdown, Avatar, Upload, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useObserver } from 'mobx-react-lite';
import useStore from '../context/useStore';
import { useHistory } from 'react-router-dom';


const MyHeader = () => {
    let { user } = useStore();
    let history = useHistory();

    let logout = ()=>{
        user.lougoutAction();
        history.replace('/login')
    }

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
            <span onClick={logout}>退出登陆</span>
        </Menu.Item>
    </Menu>;

    const props = {
        name: 'avatar',
        action: '//123.206.55.50:11000/upload',
        showUploadList: false,
        onChange(info: any) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                user.updateUserInfoAction(info.file.response.data[0].path);
                message.success(`new avatar file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    return useObserver(() => <Fragment>
        <img className={styles.logo} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        <Dropdown overlay={menu}>
            <div className={styles.info}>
                <Upload {...props}>
                    <Avatar src={user.userInfo.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />
                </Upload>
                <span>{user.userInfo.user_name}<DownOutlined /></span>
            </div>
        </Dropdown>
    </Fragment>)
}

export default MyHeader;