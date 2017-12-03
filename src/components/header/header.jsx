import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

const HeaderStyle = {
  "textAlign":"right",
  "background":"#CD3333",
  "color":"white",
  "fontSize":"20px",
  "padding":"20px 0",
  "display":"flex"
};
const LinkStyle = {
  "marginRight":"15px",
  "color":"#fff"
}
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
      <header style={HeaderStyle}>
        <Link to="/"><span style={LinkStyle}>home</span></Link>
        <Link to="/contest"><span style={LinkStyle} >Contest</span></Link>
        
        <div style={{"display":IsLogin?"none":"block"}}>
          <Link to="/account/login"><span style={LinkStyle}>Login</span></Link>
          <Link to="/account/register"><span style={LinkStyle}>Register</span></Link>
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