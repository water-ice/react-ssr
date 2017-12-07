import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet' 
import http from '../../config/http';

@inject('demoState') @observer

export default class PageIndex extends React.Component {
  constructor(){
    super()
  }
  changeName(ev){
    // console.log(this.props)
    this.props.demoState.changeName(ev.target.value);
  }
  asyncBootstrap() {
    http.get('/api/contest')
    .then(res => {
      console.log(res)
    })
  }    
  componentWillMount(){

  }

  render(){
    return (
      <main className="page-index" >
        <Helmet>
          <title>首页</title>
        </Helmet>
        <div>
          <input type='text' onChange={this.changeName.bind(this)} />
          <span>{this.props.demoState.msg}</span>
        </div>      
        <h1>首页1232224</h1> 
      </main>
    )
  }
}