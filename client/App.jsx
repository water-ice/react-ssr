import React from 'react';
import {inject,observer} from 'mobx-react'
import { withRouter } from 'react-router-dom'  

import RouterMap from './router';   


class App extends React.Component {
  constructor(props){
    super(props)
  } 
  render() { 
    return (
      <RouterMap />
    )
  }
} 
export default withRouter(App)