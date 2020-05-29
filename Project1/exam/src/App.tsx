import React from 'react';
import './App.css';
// 引入路由
import { HashRouter } from 'react-router-dom'
import RouterView from './router/RouterView';
import config from './router/config'
// 引入useObserve
import { useObserver } from 'mobx-react-lite'
import useStore from './context/useStore';


function App() {
  let { user } = useStore();

  return useObserver(() => (<HashRouter>
      <RouterView routes={config(user.myViewAuthority).routes}></RouterView>
    </HashRouter>
  ));
}

export default App;
