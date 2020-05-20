import React, {useState} from 'react';
import './App.css';
import List from './components/List'
import { IListItem, EType } from './util/index';

function App() {

  // 声明输入框状态
  let [text, updateText] = useState('');

  // 声明todo列表
  let [list, updateList] = useState<IListItem []>([]);

  // 声明自增id
  let [id, updateId] = useState(0);

  let addList = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log('args...', event.target);
    if (text){
      updateList([...list, {
        id: id,
        name: text,
        finish: false
      }]);
      updateText('');
      updateId(++id);
    }
  }

  let changeList = (id:number, type: EType)=>{
    let newList = [...list];
    let index = list.findIndex(item=>item.id===id);
    if (type === EType.change){
      newList[index].finish = !list[index].finish;
    }else if(type === EType.delete){
      newList.splice(index, 1);
    }
    updateList(newList);
  }

  console.log('当前state...', list);
  return (
    <div className="App">
      <div className="header">
        <input value={text} onChange={e=>updateText(e.target.value)}/>
        <button onClick={addList}>添加</button>
      </div>

      <List list={list} changeList={changeList}/>
    </div>
  );
}

export default App;
