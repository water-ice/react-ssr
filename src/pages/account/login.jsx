import React from 'react';

export default class PageLogin extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <main style={{"background":"#6CA6CD","height":"500px","textAlign":"center"}}>
        <input type="text" placeholder="手机"/>
        <br />
        <input type="password" placeholder="密码" />
        <br />
        <input type="button" value="登陆" />
      </main>
    )
  }
}