import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory} from 'react-router';
import '@style/page_register_index.less';
import regexp from '@utils/regexp';
import actions  from '../../actions/userinfo.js'
import { trim, isEmpty } from '@utils/common'
 
class PageRegister extends React.Component {
	constructor () {
		super()
		this.state = {
			account:"",
			password:"",
			repeatPassword:""
		}
	}
	render(){
		return(
			<main className="page-register">
			</main>
		)
	}
}
const getUserInfo = state => {
	return {
		userinfo:state.user
	}
}; 
export default connect(getUserInfo)(PageRegister)