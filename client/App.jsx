import React from 'react';
import {inject,observer} from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './ui/theme.less';
import './static/fonts/iconfont.css'
import RouterMap from './config/router';  
@inject((stores)=>{
  return {
    UserStore:stores.UserStore
  }
}) @observer


class App extends React.Component {
  constructor(){
    super()
  } 
  render() { 
    return (
      <RouterMap />
    )
  }
} 
export default withRouter(App)