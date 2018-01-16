import React from 'react';
import { Link } from 'react-router-dom';

import '@style/footer/component_footer.less';

export default class GlobalFooter extends React.Component {
  constructor() {
    super()
    this.state = {  
    }
  } 
  render(){
    return(
      <footer className="component-footer">
        @copyright 2017  @wangerniu
      </footer>
    )
  }
}