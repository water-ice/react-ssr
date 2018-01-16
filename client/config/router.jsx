import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import PageIndex from '../pages/index/index';

import PageUserRegister from '@pages/user/register';
import PageUserLogin from '@pages/user/login';

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
        <Route key="user" path="/user/register" component={PageUserRegister} />,
        <Route key="user" path="/user/login" component={PageUserLogin} />,

        <Route key="test" path="/test" component={PageTest} />,
        
        <Route component={Page404} />,
      </Switch>
   
    )
  }
}