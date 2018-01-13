import React from 'react';
import {Link} from 'react-router-dom'
import { inject, observer} from 'mobx-react'
 
import Storage from '@utils/storage';
import http from '@clientConfig/http'
 
import ComponentLogin from '@components/user/login';
import ComponentRegister from '@components/user/register';
 
@inject('UserStore') @observer
// import '@vendor/geetest/1.0.0/geetest.js'
class PageUserIndex extends React.Component {
    constructor(props){
        super(props)
		this.state = {
            method:"",
            geetestHandler:null,
		}        
    }  
    render(){ 
        return(
            <div className="page-user" id="pageUser">
                <ComponentRegister />
                <ComponentLogin />
            </div>
        )
    }
}

export default PageUserIndex;