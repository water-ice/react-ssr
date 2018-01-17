import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import ComponentHeader from '@components/header/header';
import ComponentFooter from '@components/footer/footer';

import absolteHttp from '@serverConfig/http'
import relativeHttp from '@clientConfig/http';
import '@style/user/page_login.less';

class ComponentLogin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			 
		}
	}   
	test(){ 
	} 
	render() { 
 
		return (
			<div className="page-login">
				<Helmet>
					<title>登录</title>
				</Helmet>
				<ComponentHeader />
				<main className="container">	
					<div className="text-center mt10">
						<input className="input bg-fff" type="text" placeholder="账号"/>
					</div>
					<div className="text-center mt10">
						<input className="input bg-fff" type="text" placeholder="密码"/>					
					</div>	
					<div className="text-center mt40">
						<button onClick={this.test.bind(this)} className="btn">登录</button>
					</div>
				</main>
				<ComponentFooter />
			</div>
		)
	}
}
export default ComponentLogin;