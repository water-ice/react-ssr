import React,{Component} from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet'  
import ComponentIndexHeader from '@components/header/header'
import ComponentFooter from '@components/footer/footer'

export default class PageList extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="page-list">
            <Helmet>
                <title>列表页</title>
            </Helmet> 
            <ComponentIndexHeader history={this.props.history}/>
            <div className="list-container">
                列表
            </div>
            <ComponentFooter/>
            </div>
        )
    }
}