import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import styles from './MainPage.module.scss'

// 引入自定义头部
import MyHeader from '../../components/MyHeader'
import MySider from '../../components/MySider'

// import MyHeader from '@/components/MyHeader'
import RouterView from '../../router/RouterView';
import { IRouteProps } from '../../util/interface'
import { useHistory, Link } from 'react-router-dom'

const { Header, Content } = Layout;

const MainPage: React.FC<IRouteProps> = props => {
    let history = useHistory();
    const histories = history.location.pathname.split('/').filter(item=>!!item);
    console.log('history...', history, histories);


    return <Layout className={styles.container}>
        <Header>
            <MyHeader />
        </Header>
        <Layout>
            {/* 侧边栏 */}
            <MySider />
            <Content className={styles.content}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/main/addQuestion">Home</Link></Breadcrumb.Item>{
                        histories.map((item, index, arr) => {
                            let toString = arr.filter((value, key)=>key<=index).join('/');
                            return <Breadcrumb.Item key={item}>
                                <Link to={toString}>{item}</Link>
                            </Breadcrumb.Item>
                        })
                    }
                    {/* <Breadcrumb.Item>{history.location.}</Breadcrumb.Item> */}
                </Breadcrumb>,
                <RouterView routes={props.routes}></RouterView>
            </Content>
        </Layout>
    </Layout>
}

export default MainPage;