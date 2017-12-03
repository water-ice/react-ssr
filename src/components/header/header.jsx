import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import LogoSrc from '@image/logo.png'
import '@style/component-header.less';

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  Logout(){
    this.props.dispatch({
      type:"ClearUserInfo"
    })
  }
  render(){
    const IsLogin = this.props.user.name;
    return (
      <header className="component-header">
        <Link to='/'><img src={LogoSrc} /></Link>
        <Link to="/"><span  className="icon iconfont">&#xe600;home</span></Link>
        <Link to="/contest"><span>Contest</span></Link>
        
        <div style={{"display":IsLogin?"none":"block"}}>
          <Link to="/account/login"><span >Login</span></Link>
          <Link to="/account/register"><span >Register</span></Link>
        </div>
        
        <div style={{"display":IsLogin?"block":"none"}} >
          <span>Your Name Is: {this.props.user.name}</span>
          <span>Your Mobile Is: {this.props.user.mobile}</span>
          <span onClick={this.Logout.bind(this)}>退出</span>
        </div>
      </header>
    )
  }
}
const getUserInfoFromRedux = state => {
  return {
    user:state.USER_STATE
  }
}
export default connect(getUserInfoFromRedux)(GlobalHeader)