import React from 'react';
import { IListItem, EType } from '../util/index';

interface IProps {
    list: IListItem[],
    changeList: (id: number, type: EType) => void
}

const List: React.FC<IProps> = (props) => {
    return <div>{
        props.list.map((item, index) => {
            return <li key={index} style={{ textDecoration: item.finish ? 'line-through' : '' }} onClick={() => props.changeList(item.id, EType.change)}>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <button onClick={(e) => { props.changeList(item.id, EType['delete']); e.stopPropagation(); }}>删除</button>
            </li>
        })
    }</div>
}

export default List;


interface IState{
    name: string
}

interface IProps{

}
class MyComponent extends React.Component<IProps, IState>{

}