import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import PageIndex from '../pages/index/index';

import PageUserIndex from '../pages/user/index';

import PageTest from '@pages/test/test'

import Page404 from '@pages/404';
export default class RouterMap extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
      <Switch>
        <Route key="1" path="/" component={PageIndex} exact />,

  
        // 登录注册部分
        <Route key="user" path="/user" component={PageUserIndex} exact />,
        <Route key="test" path="/test" component={PageTest} />,
        
        <Route component={Page404} />,
      </Switch>
   
    )
  }
}