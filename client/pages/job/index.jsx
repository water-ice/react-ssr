import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PageJob extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            加入精于
          </title>
        </Helmet>
        <h1>这里是加入精于页面</h1>
      </main>
    )
  }
}