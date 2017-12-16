import React from 'react';
import {Link} from 'react-router-dom'; 
import '@style/component-header.less';
export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  render(){ 
    return (
      <header className="component-header">
        <div className="header-container">
          <div className="left ">
            <a className="inline-block pl10 pr10 br-3a" href="http://app.toutiao.com/news_article/" target="blank">下载APP</a>
            <span className="pl10">&nbsp;北京</span>
            <span className="pl13 pr14">晴</span>
            <span className="mr2">-8</span>°
            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <span className="mr2">0</span>°
            <i className="icon iconfont fs13 bold">&#xe6a6;</i>
          </div>
          <ul className="right">
            <li className="left ph10 pr14 br-3a">
              <Link to="/"><div className="login-btn">登录</div></Link>
            </li>
            <li className="left ph10 br-3a"><Link to="/"><span>反馈</span></Link></li>
            <li className="left ph10 br-3a"><Link to="/"><span>投诉侵权</span></Link></li>
            <li className="left ph10"><Link to="/"><span>头条产品</span></Link></li>
          </ul>
        </div>
      </header>
    )
  }
}