import React from 'react';
import http from '@utils/http'
import '@style/page_index_index.less'; 
export default class Index extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name:'hello index'
		}
	}
	componentWillMount(){
		// console.log()
		http.get('/index/contest').then((response)=>{
			this.setState({
				contestList:response.info
			})
			console.log(response)
		})
	}
	render(){
		return (
			<main>
				<div className="page-index">
					Index
				</div>
			</main>
		)
	}
}

