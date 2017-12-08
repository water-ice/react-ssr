import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet' 
import http from '../../../config/http';

@inject('demoState') @observer

export default class PageIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      designers:[],
      contests:[],
      enties:[]
    }
  }
  changeName(ev){
    // console.log(this.props)
    this.props.demoState.changeName(ev.target.value);
  }
  asyncBootstrap() {   
    http.get('/api/user/get_user_list')
    .then(response => {
      this.setState({
        designers:response.data.info
      })
    })        
  }    
  componentWillMount(){

  }
  render(){
    console.log(this.state)
    return (
      <main className="page-index main-container" >
        <Helmet>
          <title>首页</title>
        </Helmet>
        <div>
          <input type='text' onChange={this.changeName.bind(this)} />
          <span>{this.props.demoState.msg}</span>
        </div>      
        <h1 className="text-center">全部用户</h1>
        <ul>
          {
            this.state.designers.map((item)=>{
              return <li className="left mt50" key={item.name}>
                <h1>{item.name}<img width="225" height="150" src={'http://whalesdesign.com'+item.avatar} /></h1>
                <h2>{item.job}</h2>
                <h3>{item.descption}</h3>
              </li>
            })
          }
        </ul>
      </main>
    )
  }
}