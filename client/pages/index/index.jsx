import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet' 
import http from '../../../config/http';
 
@inject("ContestsStore") @observer
export default class PageIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      designers:[],
      contests:[],
      enties:[]
    }
  } 
  asyncBootstrap() {   
    http.get('/api/user/get_user_list')
    .then(response => {
      this.setState({
        designers:response.data.info
      })
    })        
  }    
  componentDidMount(){ 
    this.props.ContestsStore.getContestList()
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
        <h1 className="text-center">全部用户</h1>
        <ul>
          {
            this.props.ContestsStore.contestList.map((item)=>{
              return (
                <li className="left mt50" key={item.id}>
                  <h1>{item.title}</h1>
                  <img width="225" height="150" src={item.thumb} />
                  <h2>总奖金：{item.prize}</h2>
                  <h3>参赛作品：{item.entries}</h3>
                </li>
                )
            })
          }
        </ul>
      </main>
    )
  }
}