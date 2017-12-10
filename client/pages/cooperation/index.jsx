import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'

import { observer, inject } from 'mobx-react'

@inject("cooperationState") @observer

export default class PageCooperation extends React.Component {
  constructor(props){
    super(props)
  }
  asyncBootstrap() {    
    return this.props.cooperationState.GetCooperationList()
    .then(()=>{
      return true;
    }) 
    .catch(()=>{
      return false;
    })
  }  
  componentDidMount(){
    this.props.cooperationState.GetCooperationList()
  }
  render(){  
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            商务合作
          </title>
        </Helmet>
        <h1>这里是商务合作页面</h1>
        <ul>
          {
            this.props.cooperationState.cooperationList.map(item=>(
              <li key={item.name}>
                <p>{item.name}</p>
                <p>{item.desciption}</p>
              </li>
            ))
          }
        </ul>        
      </main>
    )
  }
}