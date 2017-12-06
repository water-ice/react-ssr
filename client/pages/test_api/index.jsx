import React from 'react';
import axios from 'axios';
export default class TestApi extends React.Component {
    getTopics(){
        axios.get('/api/topics').then(resp=>{
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }
    login(){
        axios.post('/api/user/login',{
            accessToken:'1c58a4af-0cc7-4197-b854-d8eb9f463d68'
        })
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })

    }
    markAll(){
        axios.post('/api/message/markAll?needAccessToken=true')
        .then(resp=> {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
            <button onClick={this.getTopics}>topics</button>
            <button onClick={this.login}>login</button>
            <button onClick={this.markAll}>markAll</button>

            </div>
        )
    }
}