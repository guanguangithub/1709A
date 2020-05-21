import React from 'react';
import './App.css';
// 引入路由
import {HashRouter} from 'react-router-dom'
import RouterView from './router/RouterView';
import config from './router/config'

function App() {
  return (
    <HashRouter>
      <RouterView routes={config.routes}></RouterView>
    </HashRouter>
  );
}

export default App;
