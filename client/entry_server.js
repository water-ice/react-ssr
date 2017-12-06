import React from 'react';
import App from './App.jsx';
import { StaticRouter } from 'react-router-dom';

import { Provider, useStaticRendering } from 'mobx-react'

import { createStoreMap } from './store/store'

// 让mobx在服务器端渲染的时候，不会重复的数据变换
useStaticRendering(true)

// stores:{storeA:{},storeB:{}}

const render = (stores, routerContext, currentUrl) => (
    <Provider {...stores} >
        <StaticRouter context={routerContext} location={currentUrl}>
            <App />
        </StaticRouter>
    </Provider>
)
export default render;

export { createStoreMap }