import React from 'react';
import ComponentHeader from './components/header/header';
import ComponentFooter from './components/footer/footer'
import RouterMap from './config/router';
export default class App extends React.Component {
  render() {
    return [
      <ComponentHeader key="header" />,
      <RouterMap key="2"  key='router' />,
      <ComponentFooter key='footer'/>
    ]
  }
}
