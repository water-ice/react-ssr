import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
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
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
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
