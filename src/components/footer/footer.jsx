import React from 'react'; 
import ComponentFooterStyle from '@style/component_footer.less';


export default class ComponentFooter extends React.Component {
	constructor(){
		super()
	}
	render(){
		return(
			<footer className="component-footer">
				Footer
			</footer>
		)
	}
}