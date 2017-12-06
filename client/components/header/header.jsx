import React from 'react';
import {Link} from 'react-router-dom'; 

export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  render(){ 
    return (
      <header className="component-header">
       <div>
          <Link to='/'>首页</Link>
          <Link to='/battle'>全部赛事</Link>
          <Link to='/battle_name'>征名比赛</Link>
          <Link to='/battle_picture'>征图比赛</Link>
          <Link to='/account'>账号</Link>
          <Link to='/account/login'>登陆</Link>
        </div>
      </header>
    )
  }
}