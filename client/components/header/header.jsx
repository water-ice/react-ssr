import React from 'react';
import { Link,NavLink} from 'react-router-dom'; 
import { inject , observer} from 'mobx-react';

import '@style/header/component_header.less';

import http from '@clientConfig/http'; 

@inject((stores)=>{
  return {
      UserStore:stores.UserStore
  }
}) @observer

export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  Logout(){ 
  } 
  render(){ 
    const user = this.props.UserStore;
    console.log(user)
    return (
      <header className="component-header">
        <img className="logo" src="" alt="LOGO"/>
        <div className="main">
          	<nav></nav>
			{
				(user.isLogin)?
				(
					<div className="user">
						用户已经登录
					</div>  
				):(
					<div className="account">
						<a href="/user/login">登录</a>/
						<a href="/user/register">注册</a>
					</div>	
				)  
				  
			}
        </div>
      </header>
    )
  }
}