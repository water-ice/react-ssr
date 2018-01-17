import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


// 热更新container
import {AppContainer} from 'react-hot-loader';
// 路由container
import { BrowserRouter } from 'react-router-dom'
// store container
import { Provider } from 'mobx-react'
// 挂载DOM节点
const DOM = document.getElementById('app')

const InitialState = window.SERVER_DATA || {};

import { UserStore,TestStore } from '@store/store';

const userData = InitialState.UserStore.user || {}; 

const UserStoreData = new UserStore(userData)

const TestStoreData = new TestStore(InitialState.TestStore.datas);                            
// console.log(TestStoreData)
// render方法
const render = Component => {
    ReactDOM.render(
        <AppContainer >
            <Provider TestStore={TestStoreData}  UserStore={UserStoreData}>
                <BrowserRouter>   
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>
    ,DOM)
}
// 渲染
render(App)

// 热更新
if(module.hot){
    module.hot.accept('./App.jsx',()=>{
        // requre引用export出来的内容
        const NextApp = require('./App.jsx').default;
        // 重新渲染
        render(NextApp)
        
    })
}