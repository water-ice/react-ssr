import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import ReactDOM from 'react-dom';
import Storage from "@utils/storage";
import SaveUserInfo from '@actions/userinfo';
import CssModules from 'react-css-modules'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

let store = createStore(reducer)
// 获取存储在Localstorage中的uid
let Account = Storage.get('user');
//存在证明用户已经登陆，存储在stora中，派发全局
if(Account && Account.id) {
	store.dispatch({
		type:"SaveUserInfo",
		state:Storage.get('user')
	})
}
store.subscribe(function (){
	// console.log(store.getState())
})

// ui主题
import '../ui/default.less';


// 字体
import '../static/fonts/iconfont.css'



import ComponentHeader from './components/header/header.jsx';
import ComponentFooter from './components/footer/footer.jsx';

import PageIndex from './pages/index/index.jsx';

import PageRegister from './pages/register/index';

import PageLogin from '@pages/login/index'

class App extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<ComponentHeader />
				<Route exact path="/" component={ PageIndex } />
				<Route path="/register" component={ PageRegister } />  
				<Route path="/login" component={ PageLogin } />			
				<ComponentFooter />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store= { store }>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#app')
)