import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

  
class ComponentLogin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			 
		}
	}    
	render() { 
 
		return (
			<div className="component-login">
				<Helmet>
					<title>登录</title>
				</Helmet>
				登录
			</div>
		)
	}
}
export default ComponentLogin;