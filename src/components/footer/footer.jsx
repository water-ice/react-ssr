import React from 'react';

export default class GlobalFooter extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <footer style={{"background":"#836FFF","height":"200px"}}>
        <h1 style={{"textAlign":"center"}}>Global Footer Component</h1>
      </footer>
    )
  }
}