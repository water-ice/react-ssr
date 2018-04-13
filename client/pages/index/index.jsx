import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet'  
import {Link} from 'react-router-dom'

import ComponentIndexHeader from '@component/header'
import ComponentFooter from '@component/footer'

import './index.less'; 

export default class PageIndex extends React.Component {
  constructor(){
    super()
  }  
  render(){ 
    return (
      <main>
        <Helmet>
          <title>首页</title>
        </Helmet> 
        <ComponentIndexHeader history={this.props.history}/>
        <div className="page-index">首页</div>
        <ComponentFooter/>
      </main>
    )
  }
}