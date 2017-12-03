import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reduers from './store/reducer';

import App from './App';


/**
 * dev:使用ReactDOM.hydrate出问题
 */
// 挂载DOM节点
const DOM = document.getElementById('App');
/**
 *
 * @param {Component}  React组件
 * @function React组件绘制方法
 *
 */
// import AppStore from './store/state';

let store = createStore(Reduers);

store.subscribe(()=>{
  console.log(store.getState())
})

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>
	,DOM)
}
render(App);

// 热刷新配置
if(module.hot) {
  module.hot.accept('./App.jsx',()=>{
    const NextApp = require('./App.jsx').default;
    render(NextApp)
  })
}
