import React from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet'  
import ComponentIndexHeader from '@components/header/header'
import ComponentFooter from '@components/footer/footer'
import '@style/page_index.less'; 
import {Link} from 'react-router-dom'
export default class PageIndex extends React.Component {
  constructor(){
    super()
  }  
  render(){ 
    return (
      <main>
        <Helmet>
          <title>精于设计-世界设计师赏金游戏平台</title>
        </Helmet> 
        <ComponentIndexHeader history={this.props.history}/>
        <div className="page-index">首页</div>
        <ComponentFooter/>
      </main>
    )
  }
}