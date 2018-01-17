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
    this.state = {
      user:props.UserStore.user
    }
  } 
  componentDidMount(){
    console.log(this.props.UserStore.user.name)
  }
  Logout(){ 
    http.post('/api/user/user/logout')
    .then(response => {
      if(response.data.status == 1) { 
        this.props.UserStore.clearUserInfo();
      }
      else {
        alert(response.data.message)
      }
    })
  } 
  render(){ 
    const user = this.state.user || {};    
    return (
      <header className="component-header">
        <img className="logo" src="" alt="LOGO"/>
        <div className="main"> 
			{
				(user.uid)?
				(
					<div className="user hand"> 
            <img src={user.avatar} width="40" alt=""/>
            <ul className="operate">
              <li onClick={this.Logout.bind(this)}>退出</li>
            </ul>
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