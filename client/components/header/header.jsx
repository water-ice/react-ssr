import React from 'react';
import {Link} from 'react-router-dom'; 
import '@style/component-header.less';
export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  render(){ 
    return (
      <header className="component-header">
        <section className="main-container clearfix">
          <Link to='/' className="module-logo">
            <img  />
          </Link>
          <div className="module-nav">
            </div>
          <div className="module-account">
          </div>
        </section>
      </header>
    )
  }
}