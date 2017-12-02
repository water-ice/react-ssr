import React from 'react';

const TestStyle = {
  color: 'red',
  textAlign: 'center',
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={TestStyle}>Hello1222 React Server Render</h1>
      </div>
    )
  }
}
