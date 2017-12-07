import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PageCase extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            全部案例
          </title>
        </Helmet>
        <h1>这里是全部案例页面</h1>
      </main>
    )
  }
}