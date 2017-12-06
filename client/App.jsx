import React from 'react';
// import PropTypes from 'prop-types'
// import ComponentHeader from './components/header/header';
// import ComponentFooter from './components/footer/footer'
import RouterMap from './config/router';
import {Link} from 'react-router-dom'

// import './static/fonts/iconfont.css'
      // ,
      // <RouterMap key="2"  key='router' />,
      // <ComponentFooter key='footer'/>
// import './ui/theme.less';

import { observer, inject } from 'mobx-react'
// import {DemoState} from './store/demo_state'
// 在provider上定义的叫啥名字，在这里inject就用啥名字
// 使用demoState中的所有的数据和方法
@inject('demoState') @observer

export default class App extends React.Component {
  constructor(){
    super()
  }
  changeName(ev){
    // console.log(this.props)
    this.props.demoState.changeName(ev.target.value);
  }
  asyncBootstrap() {
    return new Promise((resolve)=>{
      setTimeout(() => {
        this.props.demoState.count = 3;
        // 必须是true
        resolve(true)
      }, 1000);
    })
  }  
  render() {
    return (
      <div>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/battle'>全部赛事</Link>
          <Link to='/battle_name'>征名比赛</Link>
          <Link to='/battle_picture'>征图比赛</Link>
          <Link to='/account'>账号</Link>
          <Link to='/account/login'>登陆</Link>
        </div>
        <div>
          <input type='text' onChange={this.changeName.bind(this)} />
          <span>{this.props.demoState.msg}</span>
        </div>
        <RouterMap />
      </div>
    )
  }
}
// 先不使用proptypes验证
// App.PropTypes = {
//   demoState:PropTypes.instanceOf(DemoState).isRequired
// }