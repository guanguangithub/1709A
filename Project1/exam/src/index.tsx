import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 引入mobx
import StoreContext from './context/StoreContext'
import store from './store'

ReactDOM.render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StoreContext.Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

