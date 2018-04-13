import React,{Component} from 'react';
import {
    inject,
    observer,
} from 'mobx-react'
import {asyncBootstrap} from 'react-async-bootstrapper' 
export default class TestIndex extends Component {
    constructor(props){
        super(props)  
        this.state = { 
        }
    }
    asyncBootstrap(){ 
    }
    componentDidMount(){
        console.log(this.state.list)
    }
    render(){
        const list1 = this.state.list;
        return(
            <div>
            {
                (list1)?(
                    list1.map(item => (
                        <div key={item.title}>{item.title}<br/>{item.type}</div>
                    ))    
                ):(
                    <div>loading</div>
                )
            }
            </div>
        )
    }
}