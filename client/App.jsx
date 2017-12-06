import React from 'react';
// import PropTypes from 'prop-types'
import ComponentHeader from './components/header/header';
// import ComponentFooter from './components/footer/footer'
import RouterMap from './config/router';
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'

// import './static/fonts/iconfont.css'
      // ,
      // <RouterMap key="2"  key='router' />,
      // <ComponentFooter key='footer'/>
import './ui/theme.less';



export default class App extends React.Component {
  constructor(){
    super()
  }
  render() { 
    return (
      <div>
        <ComponentHeader /> 
        <RouterMap />
      </div>
    )
  }
}
// 先不使用proptypes验证
// App.PropTypes = {
//   demoState:PropTypes.instanceOf(DemoState).isRequired
// }