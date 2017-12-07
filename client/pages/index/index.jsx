import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet' 
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
    return new Promise((resolve)=>{
      setTimeout(() => {
        this.props.demoState.count = 3;
        // 必须是true
        resolve(true)
      }, 1000);
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
        <h1>首页</h1> 
      </main>
    )
  }
}