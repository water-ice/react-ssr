import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet' 
import http from '../../../config/http';

import '@style/page-index.less'; 
@inject(stores =>{
  return {
    contestListStore:stores.contestListStore
  }
}) @observer
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
  }    
  componentDidMount(){ 
    // this.props.contestsStore.getContestList()
  }
  componentWillMount(){
    // this.props.contestListStore.getContestList();
  }
  render(){ 
    return (
      <main className="page-index" >
        <Helmet>
          <title>首页</title>
        </Helmet> 
        <div className="component-banner">首页</div>
      </main>
    )
  }
}