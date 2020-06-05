import React, {useEffect, useState} from 'react'
import { Tabs, Table } from 'antd'
import useStore from '../../../context/useStore';
import { useObserver } from 'mobx-react-lite';

const { TabPane } = Tabs;

const tabContent = ['用户数据', '身份数据', 'api接口权限', '身份和api接口关系', '视图接口权限', '身份和视图权限关系'];


const actionList = ['getUserListAction', 'getIdentifyListAction'];
const columnsList = [
    [{
        title: '用户名',
        dataIndex: 'user_name',
    },{
        title: '密码',
        dataIndex: 'user_pwd',
    },{
        title: '身份',
        dataIndex: 'identity_text'
    }],
    [{
        title: '身份名称',
        dataIndex: 'identity_text'
    }],
];
const dataList = ['userList', 'identifyList'];
const ViewTeacher: React.FC = () => {
    let [active, setActive] = useState(0);
    const tabChange = (activeKey: string) => {
        setActive(+activeKey);
    }

    let {teacher} = useStore();

    // 监听active切换
    useEffect(()=>{
        teacher[actionList[active]]();
        // eslint-disable-next-line
    }, [active]);

    return useObserver(()=><>
        <Tabs defaultActiveKey="0" onChange={tabChange}>{
        tabContent.map((item, index) => {
            return <TabPane tab={item} key={String(index)}></TabPane>
        })
    }</Tabs>
        <Table columns={columnsList[active]} dataSource={teacher[dataList[active]]} />
    </>)
}

export default ViewTeacher;