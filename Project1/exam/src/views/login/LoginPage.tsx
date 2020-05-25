import React from 'react';
import {useObserver} from 'mobx-react-lite'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './LoginPage.module.scss';
import { Store } from 'antd/lib/form/interface';
import useStore from '../../context/useStore'
import { useHistory } from 'react-router-dom';

const LoginPage: React.FC = () => {
    let {user} = useStore();

    let histroy = useHistory();
    const onFinish = async (values: Store) => {
        console.log('Received values of form: ', values);
        let result = await user.loginAction(values.username, values.password);
        if (result.code === 1){
            histroy.replace('/main');
        }
    };

    // let {user} = useContext(StoreContext);
    console.log('data...', user);

    return useObserver(()=><Form
        name="normal_login"
        className="login-form"
        initialValues={{username:'chenmanjie', password: 'Chenmanjie123!', remember: true }}
        onFinish={onFinish}
    >
        <p>{user.isLogin+''}</p>
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
         <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="javascript:void 0">
                Forgot password
      </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
      </Button>
      Or <a href="">register now!</a>
        </Form.Item>
    </Form>)
}

export default LoginPage;