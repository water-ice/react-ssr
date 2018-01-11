import React,{Component} from 'react';
import {
    inject,
    observer,
} from 'mobx-react'
import {asyncBootstrap} from 'react-async-bootstrapper'
@inject('TestStore') @observer
export default class TestIndex extends Component {
    constructor(props){
        super(props) 
        console.log(this.props.TestStore.datas)
        this.state = {
            // list:props.TestStore.datas.info
        }
    }
    asyncBootstrap(){
        return this.props.TestStore.getData()
        .then(response => {
            return true;
        })
    }
    render(){
        // const list = this.state.list;
        const list = this.props.TestStore.datas.info;
        return(
            <div>
            {
                list.map(item => (
                    <div key={item.title}>{item.title}<br/>{item.type}</div>
                ))
            }
            </div>
        )
    }
}