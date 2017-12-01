import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '@style/component_header.less';

class ComponentHeader extends React.Component {
	constructor(){
		super();
		this.state = {
			path:'home',
			markerMap:{
					home:28,
					contest:137,
					procedure:265,
					launch:387,
					about:491,
			}
		}
	}
	componentWillMount(){

	}
	Logout(){ 
		this.props.dispatch({
			type:"ClearUserInfo"
		})
	} 
	updateMarkerLeft(ev){
		let currentPathNode = ev.target; 
		
		if(currentPathNode.nodeName.toLowerCase() == 'hr') return;

		while (currentPathNode.nodeName.toLowerCase() !== 'a') {
			currentPathNode = currentPathNode.parentNode;
		}

		const currentPath =currentPathNode.getAttribute('data-marker');
		
		if(currentPath == this.state.path) return;
		
		this.setState({
			path:currentPath
		})
	}
	render(){
		var HasUser = this.props.user.id ? true :false;
		return(
			<header className="component-header">
				<div className="header">
					{/* unLogin */}
					<div className="sign" style={{ "display" : HasUser?"none":"flex" }}>
						<Link className='sign-link' to="/login" >
							<span className="nav-text-zh">登录</span>
							<span className="nav-text-en">SIGN IN</span>
						</Link>
						<Link className='sign-link sign-up' to="/register" >
							<span className="nav-text-zh">注册</span>
							<span className="nav-text-en">SIGN UP</span>
						</Link>
					</div>						
					{/* Login */}
					<div className="user" style={{ "display" : HasUser?"block":"none" }}>
						<div className="avatar" ></div>
						<ul className="links">
							<li>个人中心</li>
							<li onClick={ this.Logout.bind(this)}>退出</li>
						</ul>
					</div>		
					<nav className="links">
						<Link to="/">Home</Link>
					</nav>																	
				</div>	
			</header>
		)
	}
}
const getUserInfo = state =>{
	return {
		user:state.user
	}
}
export default connect(getUserInfo)(ComponentHeader)