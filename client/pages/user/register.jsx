import React from 'react';
import { Link } from 'react-router-dom'; 
import Helmet from 'react-helmet';
import { inject , observer} from 'mobx-react'
import ComponentHeader from '@components/header/header';
import ComponentFooter from '@components/footer/footer';

import  PluginMessage  from '@plugins/message';

import http from '@serverConfig/http';
import {trim} from '@utils/string'

import '@style/user/page_register.less'

@inject('UserStore') @observer

class PageRegister extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			account:"",
			password:"",
			passwordTwice:""
		}
	}
	EditAccount(ev){
		const account = trim(ev.target.value);
		this.setState({
			account,
		})
	}
	EditPassword(ev){
		const password = trim(ev.target.value);
		this.setState({
			password
		})
	}
	EditPasswordTwice(ev){
		const passwordTwice = trim(ev.target.value);
		this.setState({
			passwordTwice
		})
	}
	Commit(){   
		const account = this.state.account,
			  password = this.state.password,
			  passwordTwice = this.state.passwordTwice;
		http.post('/api/user/user/register',{
			account,
			password,
			passwordTwice
		})
		.then(response => {
			console.log(response);
			if(response.data.status == 0) {
				alert(response.data.errMsg)
			}
			else {
				http.post('/api/user/user/getUserInfo').
				then(response => {
					if(response) {
						return;
						window.location.href = '/'
					}
				}) 
			}
		})
	}
  
	render() {
		  
		return (
			<div className="page-register">
				<Helmet>
					<title>注册</title>
				</Helmet>
				<ComponentHeader />
				<main className="container">
					<div className="text-center mt10">
						<input onChange={ this.EditAccount.bind(this) } className="input bg-fff" type="text" placeholder="账号"/>
					</div> 
					<div className="text-center mt10">
						<input onChange={ this.EditPassword.bind(this) } className="input bg-fff" type="password" placeholder="密码"/>					
					</div>	
					<div className="text-center mt10">
						<input onChange={ this.EditPasswordTwice.bind(this)} className="input bg-fff" type="password" placeholder="确认密码"/>					
					</div>					
					<div className="text-center mt40">
						<button onClick={this.Commit.bind(this)} className="btn">注册</button>
					</div>				
				</main>  
				<ComponentFooter />
			 </div>
		)
	}
}

export default PageRegister;