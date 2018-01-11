import React from 'react';
import { Link,NavLink} from 'react-router-dom'; 
import { inject , observer} from 'mobx-react';

import '@style/component_header.less';

import http from '@clientConfig/http';
import Storage from '@utils/storage'

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
    http.post('/api/v1/login/loginOut')
    .then(response => { 
      if(response.data.status == 1) {
        this.props.UserStore.clearUserInfo();
        Storage.clear('user')
        this.props.history.push('/user')
      }
      else {
        alert(response.data.message.errorMsg)
      }
    })
  }
  goUser(method){
    this.props.history.push({
        pathname:'/user',
        query:{
            method
        }
    })
}  
  render(){ 
    return (
      <header className="component-header">
        <div className="main-container clearfix">
          <Link to='/' className="inline-block">
            <img width="140" height="34" className="logo" src={require('@image/header_logo.png')} />
          </Link>
          <div className="user">
          {
              (this.props.UserStore.user.isLogin) ?(
                  <div className="login">
                      <img width="30" height="30" alt={this.props.UserStore.user.info.name} src={this.props.UserStore.user.info.avatar} title={this.props.UserStore.user.info.name} />
                      <div className="links abs">
                          <a className="link" href="">个人中心</a>
                          <a className="link" href="">信息</a>
                          <a className="link" href="">设置</a>
                          <a className="link hand" onClick={this.Logout.bind(this)} >退出</a>
                      </div>
                  </div>
              ):(
                <a onClick={this.goUser.bind(this,'login')} className="hand unlogin" ><span className="iconfont ">&#xe63d;</span></a>  
              )
          }
          </div>        
          <ul className="nav customer-nav">
            <li><NavLink activeClassName="nav-active" to="/1">了解精于</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/2">商业合作</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/3">发布需求</NavLink></li>            
          </ul>
          <ul className="nav designer-nav">
            {/* <li><NavLink exact activeClassName="nav-active" to="/battle">赛事</NavLink></li> */}
            {/* <li><NavLink activeClassName="nav-active" to="/work/submit/1">佳作</NavLink></li> */}
            <li><a href="/battle">赛事</a></li>
            <li><a href="/work/submit/1">佳作</a></li>
            
            <li><NavLink activeClassName="nav-active" to="/5">玩法</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/6">观战</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/7">活动</NavLink></li>
            <li><NavLink activeClassName="nav-active" className="hr" to="/8">排行</NavLink></li>
          </ul>            
        </div>
      </header>
    )
  }
}