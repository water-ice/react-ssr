import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import RouterConfig from './config';

export default class RouterMap extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return ( 
        <Switch> 
        {
            RouterConfig.map((item,index) => <Route key={index} path={item.path} render={matchProps => <item.component {...matchProps}/>} exact={item.exact} />)
        }
        </Switch>
      )
    }
  }