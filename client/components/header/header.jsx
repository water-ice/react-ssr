import React from 'react';
import {Link} from 'react-router-dom'; 
import '@style/component-header.less';
import LogoSrc from '@image/logo.png'
export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  render(){ 
    return (
      <header className="component-header">
        <section className="main-container clearfix">
          <Link to='/' className="module-logo">
            <img src={LogoSrc} />
          </Link>
          <div className="module-nav">
            <Link className="nav-anchor" to='/'>首页</Link>
            <Link className="nav-anchor" to='/battle'>赛事</Link>
            <Link className="nav-anchor" to='/battle'>玩法</Link>
            <Link className="nav-anchor" to='/battle'>观战</Link>
            <Link className="nav-anchor" to='/battle'>活动</Link>
            <Link className="nav-anchor" to='/battle'>排行</Link>
            <Link className="nav-anchor" to='/battle'>了解精于</Link>
            <Link className="nav-anchor" to='/cooperation'>商务合作</Link>
            <Link className="nav-anchor" to='/battle'>我有需求</Link>
          </div>
          <div className="module-account">
            <Link to="/account">
              <i className="icon iconfont">&#xe605;</i>
            </Link>
          </div>
        </section>
      </header>
    )
  }
}