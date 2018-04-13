import React from 'react';
import { Link } from 'react-router-dom'; 
import { inject , observer} from 'mobx-react';

import './index.less';

import http from '@clientConfig/http'; 

export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  componentDidMount(){ 
  } 
  render(){      
    return (
      <header className="component-header">this is header</header>
    )
  }
}