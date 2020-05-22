import React from 'react';
import './App.css';
// 引入路由
import {HashRouter} from 'react-router-dom'
import RouterView from './router/RouterView';
import config from './router/config'

// 引入mobx
import StoreContext from './context/StoreContext'
import store from './store'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <HashRouter>
        <RouterView routes={config.routes}></RouterView>
      </HashRouter>
    </StoreContext.Provider>
  );
}

export default App;
