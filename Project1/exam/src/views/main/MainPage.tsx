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

// 引入菜单配置
import { allRoutes } from '../../router/config';


const { Header, Content } = Layout;

const getTitle = (path:string)=>{
    let title = '';
    allRoutes.forEach(item=>{
        item.children.forEach(value=>{
            if (value.path === path){
                title = value.meta.title;
            }
        })
    })
    return title;
}

const MainPage: React.FC<IRouteProps> = props => {
    let history = useHistory();
    const histories = history.location.pathname.split('/').filter(item=>!!item);

    return <Layout className={styles.container}>
        <Header>
            <MyHeader />
        </Header>
        <Layout>
            {/* 侧边栏 */}
            <MySider />
            <Content className={styles.content}>
                <h3>{getTitle(history.location.pathname)}</h3>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/main/addQuestion">Home</Link></Breadcrumb.Item>{
                        histories.map((item, index, arr) => {
                            let toString = arr.filter((value, key)=>key<=index).join('/');
                            return <Breadcrumb.Item key={item}>
                                <Link to={toString}>{item}</Link>
                            </Breadcrumb.Item>
                        })
                    }
                    <Breadcrumb.Item>{getTitle(history.location.pathname)}</Breadcrumb.Item>
                </Breadcrumb>,
                <RouterView routes={props.routes}></RouterView>
            </Content>
        </Layout>
    </Layout>
}

export default MainPage;