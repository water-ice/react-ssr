import React from 'react';

export default class Message extends React.Component {
	constructor(){
		super();
		this.state = {
			
			content:"",
			duration:"",
			onClose(){}
		}
	}

	ComponentDidMount(){
		if(this.state.duration && this.state.duration > 0) {
			setTimeout(()=>{
				
			},this.state.duration)
		}
	}

	render(){
		return(
			<div className="component-message">
				{this.state.content}
			</div>
		)
	}
}