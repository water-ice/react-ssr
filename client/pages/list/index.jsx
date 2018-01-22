import React,{Component} from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import asyncBootstrap from 'react-async-bootstrapper';
import Helmet from 'react-helmet'  
import ComponentIndexHeader from '@components/header/header'
import ComponentFooter from '@components/footer/footer'
@inject('ListStore') @observer
export default class PageList extends Component {
    constructor(){
        super()
    }
    asyncBootstrap(){ 
        const list1 = this.props.ListStore.getList1()
        const list2 = this.props.ListStore.getList2()
        return Promise.all([list1,list2])
        .then(response => { 
            return true;
        })
    }
    render(){
        const list1 = this.props.ListStore.list1 || {};
        const list2 = this.props.ListStore.list2 || {}; 
        return(
            <div className="page-list">
            <Helmet>
                <title>列表页</title>
            </Helmet> 
            <ComponentIndexHeader history={this.props.history}/>
            <div className="list-container">
                {
                    list1?
                    <div style={{textAlign:'center'}}>
                        {
                            list1.result.map(item =>  
                                <p key={item.name}>{item.name}  &nbsp;&nbsp;{item.count}</p>
                            )
                        }
                    </div>:null
                }
                <br/>
                <hr/>
                {
                    list1?
                    <div style={{textAlign:'center'}}>
                        {
                            list2.result.map(item =>  
                                <p key={item.name}>{item.name}  &nbsp;&nbsp;{item.count}</p>
                            )
                        }
                    </div>:null
                }                
            </div>
            <ComponentFooter/>
            </div>
        )
    }
}