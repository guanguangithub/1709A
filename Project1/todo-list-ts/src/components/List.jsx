import React from 'react';

const List = (props)=>{
return <div>{
   props.list.map((item, index)=>{
        return <li key={index} style={{textDecoration: item.finish?'line-through':''}} onClick={()=>props.changeList(item.id, 'change')}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <button onClick={(e)=>{props.changeList(item.id, 'delete');e.stopPropagation();}}>删除</button>
        </li>
   })
    }</div>
}

export default List;