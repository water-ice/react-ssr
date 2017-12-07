import React from 'react';
import {Link} from 'react-router-dom'
export default class PageLogin extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <main style={{"background":"#6CA6CD","height":"500px","textAlign":"center"}}>
        <nav style={{padding:"20px 0"}}>
          <Link style={{margin:"0 20px"}} to="/account/register">注册</Link>
          <Link style={{margin:"0 20px"}} to="/account/login">登陆</Link>
        </nav>
        <input type="text" placeholder="手机"/>
        <br />
        <input type="password" placeholder="密码" />
        <br />
        <input type="button" value="登陆" />
      </main>
    )
  }
}