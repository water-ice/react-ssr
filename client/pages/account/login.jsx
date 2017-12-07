import React from 'react';
import {Link} from 'react-router-dom'
import ComponentLogin from '@components/login/index';
export default class PageLogin extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <ComponentLogin/>
      </div>
    )
  }
}